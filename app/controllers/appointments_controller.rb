class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new
    #Form.create(:formname => "testform1", :doctor_id => 1, :formpath => "http://localhost:3000/iforms/new")
  end

  def create
    @appointment = Appointment.new(params[:appointment])
     respond_to do |format|
       @doctors = Doctor.all(:conditions => ['user_id = ?', current_user.id])
         @doctors.each do |i|
           @doctorid = i.id
         end
       @appointment.doctor_id = @doctorid
      if @appointment.save 
      @users = User.all(:conditions => ['email = ?', @appointment.email])
      @users.each do |i|
        @userid = i.id
      end
      @patients = Patient.all(:conditions => ['user_id = ?', @userid])
      @patients.each do |i|
        @patientid = i.id
      end
      @appointment.patient_id = @patientid
      @i = @appointment.doctor
      @appointment.doctorname = @i.doctorname
      @appointment.timesent = Time.now
    puts "0000000000000000000"
    @formids = params[:form_ids]
    @formids.each do |i|
      @form = Form.find(i)
      Appformjoin.create(:appointment_id => @appointment.id, :form_id => i, :formname => @form.formname)
    end
   
       @appointment.save
      Notifier.appointment_confirmation(@appointment).deliver
      format.html { redirect_to(doctors_path, :id => nil, :notice => "appointment mail sent successfully to #{@appointment.firstname}") }
      format.xml  { render :xml => @appointment, :status => :created, :location => @appointment }
    else
      format.html { render :action => "new" }
      format.xml  { render :xml => @appointment.errors, :status => :unprocessable_entity }
    end
  end
      
  end

  def index
   @appointments = Appointment.all 
  end

  def show
    @appointment = Appointment.find(params[:id])
  end
  def destroy
   @appointment = Appointment.find(params[:id])
   @appointment.destroy
   respond_to do |format|
      format.html { redirect_to(patients_url) }
      format.xml  { head :ok }
    end
  end
  

end
