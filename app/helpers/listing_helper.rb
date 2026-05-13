# frozen_string_literal: true

module ListingHelper
  ARROW_ICONS = {
    double: { up: :angles_up, down: :angles_down },
    single: { up: :caret_up, down: :caret_down }
  }.freeze
  NEW_ENTRANT_ICON = :asterisk
  COLOR_CLASSES    = { positive: 'ri-icon-green', negative: 'ri-icon-red', new: 'ri-icon-yellow' }.freeze
  INDICATOR_STYLE  = 'margin-left: 5px'

  def position_indicator(dtb_id, current_position, previous_positions)
    return nil if previous_positions.nil?
    return indicator_icon(NEW_ENTRANT_ICON, COLOR_CLASSES[:new]) unless previous_positions.key?(dtb_id)

    position_change_icon(previous_positions[dtb_id] - current_position)
  end

  private

  def position_change_icon(change)
    return nil if change.zero?

    size      = change.abs >= 50 ? :double : :single
    direction = change.positive? ? :up : :down
    color     = change.positive? ? COLOR_CLASSES[:positive] : COLOR_CLASSES[:negative]
    indicator_icon(ARROW_ICONS[size][direction], color)
  end

  def indicator_icon(icon_name, color_class)
    content_tag(:span, svg_icon(icon_name), class: color_class, style: INDICATOR_STYLE)
  end
end
