# frozen_string_literal: true

#
# Player controller for all actions on Tennis players.
#
class PlayersController < ApplicationController
  QUARTER_MAP = { 1 => 'Q1', 4 => 'Q2', 7 => 'Q3', 10 => 'Q4' }.freeze

  def index
    if params[:dtb_id].present?
      search_dtb_id = params[:dtb_id].strip
      dtb_id_start = fill_up_dtb_id(search_dtb_id.to_i)
      dtb_id_end = fill_up_dtb_id_end(search_dtb_id.to_i)
      @players = Player.find_players_by_dtb_id(dtb_id_start, dtb_id_end)
      redirect_to action: 'show', id: search_dtb_id if @players.size == 1
    elsif params[:lastname].present?
      s_lastname = params[:lastname].strip
      if params[:yob].present?
        s_yob = params[:yob].strip
        yob_male = s_yob[2, 4].to_i + 100
        yob_female = yob_male + 100
        @players = Player.find_players_by_lastname_and_yob(s_lastname, yob_male, yob_female)
      else
        @players = Player.find_players_by_lastname(s_lastname)
      end
      redirect_to action: 'show', id: @players[0].dtb_id if @players.size == 1
    elsif params[:yob].present?
      s_yob = params[:yob].strip
      yob_male = s_yob[2, 4].to_i + 100
      yob_female = yob_male + 100
      @players = Player.find_players_by_yob(yob_male, yob_female)
      redirect_to action: 'show', id: @players[0].dtb_id if @players.size == 1
    elsif params[:commit]
      @players = Player.find_all_players
    end
  end

  def show
    @player = Player.load_player_profile(params[:id])
    @available_quarters = helpers.fetch_available_quarters(dtb_id: @player.dtb_id)
    @current_rankings = current_rankings(@player.dtb_id)
    @complete_rankings = complete_rankings(@player.dtb_id).reverse!
    twelve_month = data_for_last_twelve_months(@player.dtb_id)
    @data_for_last_twelve_months = twelve_month[0]
    @score_for_last_twelve_months = twelve_month[1]
    complete = data_diagram_complete(@player.dtb_id)
    @data_diagram_complete = complete[0]
    @score_diagram_complete = complete[1]
  rescue StandardError
    redirect_to players_path, flash: { danger: 'Spieler nicht gefunden' }
  end

  private

  def fill_up_dtb_id(dtb_id_part)
    missing = 8 - dtb_id_part.digits.length
    dtb_id_part * (10**missing)
  end

  def fill_up_dtb_id_end(dtb_id_part)
    missing = 8 - dtb_id_part.digits.length
    (dtb_id_part * (10**missing)) + (10**missing) - 1
  end

  def current_rankings(dtb_id)
    current_quarter = Ranking.select(:date).order(date: :desc).distinct.first.date
    period_rankings = Ranking.where(dtb_id: dtb_id, date: current_quarter,
                                    yob_ranking: false,
                                    age_group_ranking: false,
                                    year_end_ranking: false)
                             .order(:age_group)
    return [] unless period_rankings.any?

    older_quarters_available = Ranking.select(:date).where(dtb_id: dtb_id).order(date: :desc).distinct.size
    previous_quarter = Ranking.select(:date).order(date: :desc).distinct[1].date if older_quarters_available > 1

    result = period_rankings.each_with_object([]) do |period_ranking, rankings|
      next if period_ranking.age_group == 'overall'

      ranking = {
        'age_group' => period_ranking.age_group,
        'position' => period_ranking.ranking_position,
        'score' => period_ranking.score
      }

      if previous_quarter
        prev_ranking = Ranking.find_by(dtb_id: dtb_id,
                                       age_group: period_ranking.age_group,
                                       date: previous_quarter,
                                       yob_ranking: false,
                                       age_group_ranking: false,
                                       year_end_ranking: false)
        if prev_ranking
          position_change = prev_ranking.ranking_position - period_ranking.ranking_position
          ranking['position_change'] = position_change.positive? ? "+#{position_change}" : position_change.to_s
          score_change = period_ranking.score.to_f - prev_ranking.score.to_f
          ranking['score_change'] = score_change.positive? ? "+#{score_change}" : score_change.to_s
        end
      end

      rankings << ranking
    end
    result.sort_by { |r| [%w[m00 w00].include?(r['age_group']) ? 0 : 1, r['age_group']] }
  end

  def complete_rankings(dtb_id)
    db_rankings = Ranking.where(dtb_id: dtb_id, yob_ranking: false,
                                age_group_ranking: false,
                                year_end_ranking: false)
                         .order(:date, :age_group)
    rankings = []
    ranking = {}
    start_year = 0
    current_quarter = ''
    db_rankings.each do |ran|
      quarter = QUARTER_MAP[ran.date.month]
      if start_year == ran.date.year
        if current_quarter == quarter
          ranking[ran.age_group] = ran.ranking_position
        else
          rankings << ranking
          current_quarter = quarter
          ranking = { 'year' => ran.date.year, 'quarter' => quarter,
                      ran.age_group => ran.ranking_position, 'score' => ran.score }
        end
      else
        rankings << ranking unless start_year.zero?
        start_year = ran.date.year
        current_quarter = quarter
        ranking = { 'year' => ran.date.year, 'quarter' => quarter,
                    ran.age_group => ran.ranking_position, 'score' => ran.score }
      end
    end
    rankings << ranking unless ranking.empty?
    rankings
  end

  def data_for_last_twelve_months(dtb_id)
    youth_rankings = Ranking.where(dtb_id: dtb_id, yob_ranking: false,
                                   age_group_ranking: true, year_end_ranking: false)
                            .order(date: :desc, age_group: :asc)
                            .limit(4)
    adult_rankings = Ranking.where(dtb_id: dtb_id, yob_ranking: false,
                                   age_group_ranking: false, year_end_ranking: false,
                                   age_group: %w[m00 w00])
                            .order(date: :desc)
                            .limit(4)
    rankings = (youth_rankings.to_a + adult_rankings.to_a).sort_by(&:date).reverse
    [collect_diagram_data(rankings), collect_score_data(rankings)]
  end

  def data_diagram_complete(dtb_id)
    rankings = Ranking.where(dtb_id: dtb_id, yob_ranking: false,
                             age_group_ranking: false, year_end_ranking: false)
                      .order(date: :desc, age_group: :asc)
    [collect_diagram_data(rankings), collect_score_data(rankings)]
  end

  def collect_diagram_data(rankings)
    positions = Hash.new { |h, k| h[k] = {} }
    age_groups = %w[U12 U14 U16 U18 m00 w00]
    rankings.reverse_each do |ranking|
      next unless age_groups.include?(ranking.age_group)

      group_key = %w[m00 w00].include?(ranking.age_group) ? 'Aktive' : ranking.age_group
      period = (ranking.date - 1.day).strftime('%d.%m.%Y')
      positions[group_key][period] = ranking.ranking_position
    end
    %w[U12 U14 U16 U18 Aktive].filter_map { |ag| { name: ag, data: positions[ag] } if positions[ag].any? }
  end

  def collect_score_data(rankings)
    scores = {}
    rankings.reverse_each do |ranking|
      period = (ranking.date - 1.day).strftime('%d.%m.%Y')
      scores[period] = ranking.score
    end
    [{ name: 'Punkte', data: scores, vAxis: 0 }]
  end
end
