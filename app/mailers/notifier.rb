class Notifier < ActionMailer::Base
  default :from => "iforms-noreply@ifor.ms"

  def appointment_confirmation_notification(appointment, doctor, user_service_provider)
    @appointment = appointment
    @doctor = doctor
    @user_service_provider = user_service_provider
    @preferred_name = @appointment.preferred_name
    @login_url = new_user_session_url
    @registration_url = user_registration_url(:id => @appointment.id)
    if @user_service_provider == 1
      from_name = 'James Waters'
    elsif @user_service_provider == 4
      from_name = 'Karen Naples'
    else
      from_name =  "iforms-noreply@ifor.ms"
    end
    mail(:to => @appointment.email, :subject => "Appointment confirmation", :from => from_name)
  end

  def form_submission_notification(appointment, formname, iform)
    @appointment = appointment
    @formname = formname
    @iform = iform
    @doctor = @appointment.doctor
    @user = User.find(@doctor.user_id)
    mail(:to => @user.email, :subject => "Form received from #{@appointment.firstname} #{@appointment.lastname}")
  end

  def edit_form_submission_notification(appointment, formname, iform)
    @appointment = appointment
    @formname = formname
    @iform = iform
    @doctor = @appointment.doctor
    @user = User.find(@doctor.user_id)
    mail(:to => @user.email, :subject => "Form edited by #{@appointment.firstname} #{@appointment.lastname}")
  end

  def contactus_form_notification(name, email, subject, body)
    email_to = "Michael.R.Whitworth@gmail.com"
    email_to = "catchall@startupsourcing.com" if Rails.env.development? || Rails.env.staging?
    @name = name
    @email = email
    @subject = subject
    @message = body
    mail(:to => email_to, :subject => @subject)
  end

  def confirmation_instructions_notification(user)
    @user = user
    @my_account_url = user_details_deviseroles_url
    mail(:to => @user.email, :subject => "Confirmation Instructions")
  end

  def resend_confirmation_notification(user)
    @user = user
    mail(:to => @user.email, :subject => "Resending Confirmation Instructions")
  end

  def send_username_notification(user)
    @user = user
    mail(:to => @user.email, :subject => "Your username")
  end

  def send_parent_email_notification(activity, girl_scout)
    @activity = activity
    @girl_scout = girl_scout
    @permission_form = GirlScoutsActivityPermissionForm.find_by_girl_scouts_activity_id_and_girls_scout_id(@activity.id, @girl_scout.id)
    @user = User.find_by_email(@girl_scout.email)
    @registration_url = user_registration_url
    mail(:to => @girl_scout.email, :subject => "Activity Permission Form")
  end

  def send_permission_form_to_tl_notification(activity, girl_scout, user)
    @activity = activity
    @girl_scout = girl_scout
    @user = user
    mail(:to => @user.email, :subject => "Parent Permission Granted Form")
  end
end
