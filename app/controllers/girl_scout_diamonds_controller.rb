class GirlScoutDiamondsController < ApplicationController
  before_filter :set_service_provider

  def index

  end

  private

  def set_service_provider
    session[:user_service_provider] = 3
  end
end
