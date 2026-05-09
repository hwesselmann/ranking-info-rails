# frozen_string_literal: true

module Api
  module V1
    # Base controller for all API v1 endpoints. Handles Bearer token authentication.
    class BaseController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :authenticate_api_token!

      private

      def authenticate_api_token!
        token = request.headers['Authorization']&.delete_prefix('Bearer ')
        return if valid_api_token?(token)

        render json: { error: 'Unauthorized' }, status: :unauthorized
      end

      def valid_api_token?(token)
        return false if token.blank?

        valid_tokens.include?(token)
      end

      def valid_tokens
        tokens = Array(Rails.application.credentials.dig(:api, :tokens))
        tokens << ENV['API_BEARER_TOKEN'] if ENV['API_BEARER_TOKEN'].present?
        tokens
      end
    end
  end
end
