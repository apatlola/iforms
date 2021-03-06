class ProfilesController < ApplicationController

  def new
    @profile = Profile.new
  end

  def create
    @profile = Profile.new(params[:profile])
    @profile.user_id = current_user.id
    if @profile.save
      flash[:success] = 'Profile saved successfully'
      redirect_to homepage_url
    else
      render :new, :notice => "Something wrong please try again"
    end
  end

  def edit
    @profile = Profile.find(params[:id]) rescue nil
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update_attributes(params[:profile])
      flash[:success] = 'Profile Updated successfully'
      redirect_to homepage_url
    else
      render :edit, :notice => "Something wrong please try again"
    end
  end
end
