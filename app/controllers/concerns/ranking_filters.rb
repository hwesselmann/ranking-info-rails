# frozen_string_literal: true

# Shared filter methods for building Ranking queries used by UI and API controllers.
module RankingFilters
  extend ActiveSupport::Concern

  AGE_GROUP_OPTION_FILTERS = {
    'only_yob' => 'yob_ranking=true AND age_group_ranking=false',
    'include_younger' => 'yob_ranking=false AND age_group_ranking=false'
  }.freeze

  private

  def gender_selected(gender)
    case gender
    when 'male' then '(dtb_id >= 10000000 AND dtb_id <= 19999999)'
    else '(dtb_id >= 20000000 AND dtb_id <= 29999999)'
    end
  end

  def age_group_selected(age_group)
    ['age_group = ?', age_group.presence || 'overall']
  end

  def age_group_options(age_group, age_group_options, gender)
    return 'yob_ranking=false AND age_group_ranking=false' if %w[male
                                                                 female].include?(gender) && adult_age_group?(age_group)
    return default_age_group_filter(age_group_as_int(age_group)) if age_group_options.blank?

    AGE_GROUP_OPTION_FILTERS[age_group_options]
  end

  def default_age_group_filter(age_group_int)
    if age_group_int.even?
      'yob_ranking=false AND age_group_ranking=true'
    else
      'yob_ranking=true AND age_group_ranking=false'
    end
  end

  def federation_selected(federation)
    return nil if federation.blank?

    ['federation = ?', federation]
  end

  def club_selected(club)
    return nil if club.blank?

    ['LOWER(club) LIKE LOWER(?)', "%#{club}%"]
  end

  def year_end_rankings(year_end, quarter)
    if year_end.to_s == '1' && first_quarter?(quarter)
      'year_end_ranking=true'
    else
      'year_end_ranking=false'
    end
  end

  def first_quarter?(quarter)
    quarter.to_s.split('-')[1] == '01'
  end

  def age_group_as_int(age_group)
    age_group.to_s[1, 2].to_i
  end

  def adult_age_group?(age_group)
    %w[m00 w00].include?(age_group)
  end
end
