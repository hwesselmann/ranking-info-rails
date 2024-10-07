# frozen_string_literal: true

#
# Model for a club of a player on the ranking (this is a transient object)
#
class Club
  attr_accessor :name, :federation

  def initialize(club, federation)
    @name = club
    @federation = federation
  end
end
