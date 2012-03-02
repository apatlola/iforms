class DoctorsController < ApplicationController
  before_filter :is_doctor?
  before_filter :doctor_profile_exists?, :except => [:new,:create]
  def index    
    @iforms = Iform.all
    @doctor = Doctor.all(:conditions => ['user_id = ?', current_user.id]).first
    @appointments = Appointment.where('doctor_id = ?', @doctor.id).order("date DESC").paging(params[:page], params[:appointment_id])
  end

  def new
    @doctor = Doctor.new
  end
  
  def create
    @doctor = Doctor.new(params[:doctor])
    @doctor.user_id = current_user.id
    @doctor.doctorname = @doctor.firstname + " " + @doctor.lastname
    respond_to do |format|
    if @doctor.save
      format.html { redirect_to(doctors_path, :id => nil, :notice => 'Profile saved successfully.') }
      format.xml  { render :xml => @doctor, :status => :created, :location => @doctor }
    else
      format.html { render :action => "new" }
      format.xml  { render :xml => @doctor.errors, :status => :unprocessable_entity }
    end
    end
  end
  
  def edit
    @doctor = current_user.doctors.find(params[:id])
  end
  
  def update
   @doctor = Doctor.find(params[:id])
   @doctor.doctorname = @doctor.firstname + " " + @doctor.lastname
   respond_to do |format|
   if @doctor.update_attributes(params[:doctor])
     format.html { redirect_to(edit_user_registration_path, :notice => 'Profile Updated successfully.') }
     format.xml  { head :ok }
   else
     format.html { render :action => "edit" }
     format.xml  { render :xml => @doctor.errors, :status => :unprocessable_entity }
   end
   end 
  end
  
  def show
    @doctor = current_user.doctors.find(params[:id])
  end

end
