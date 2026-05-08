# frozen_string_literal: true

module ListingHelper
  ARROW_ICONS = {
    double: { up: 'fas fa-angle-double-up', down: 'fas fa-angle-double-down' },
    single: { up: 'fas fa-caret-up',        down: 'fas fa-caret-down'        }
  }.freeze
  NEW_ENTRANT_ICON = 'fas fa-asterisk'
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

  def indicator_icon(icon_class, color_class)
    content_tag(:span, content_tag(:i, '', class: icon_class), class: color_class, style: INDICATOR_STYLE)
  end
end
