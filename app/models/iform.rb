class Iform < ActiveRecord::Base
  belongs_to :appointment



  def self.new_patient_form_generator(iform)

    pdftkpath = PDFTK_PATH
    pdffilepath = PDFFILES_PATH
    path = pdffilepath + "#{iform.path}.pdf"
    @pdftk = PdftkForms::Wrapper.new(pdftkpath)
    @pdf_form = iform.formname.gsub(' ', '_')
    if iform.Self_Birthdate
      @You_Age = Date.today.strftime('%Y%m%d').to_i - iform.Self_Birthdate.strftime('%Y%m%d').to_i
      @You_Age = @You_Age.to_s.split('')
    end
    @pdftk.fill_form(pdffilepath+"#{@pdf_form}.pdf", path, {
      "Date" => iform.updated_at.strftime('%m') + '-' + iform.updated_at.strftime('%d') + '-' + iform.updated_at.strftime('%Y'),
      "PatientName" => iform.Self_Name_First.to_s + ' ' + iform.Self_Name_Last,
      "PatientGender" => iform.Self_Sex == 'f' ? "Female" : 'Male',
      "PatientBirthDateDay" => iform.Self_Birthdate ? iform.Self_Birthdate.strftime('%d') : '',
      "PatientBirthDateYear" => iform.Self_Birthdate ? iform.Self_Birthdate.strftime('%y') : '',
      "PatientBirthDateMonth" => iform.Self_Birthdate ? iform.Self_Birthdate.strftime('%m') : '',
      "PatientAge" => @You_Age ? @You_Age[0] + @You_Age[1] + 'Y' + ' ' + @You_Age[2] + @You_Age[3] + 'M' :'',
      "PatientMaritalStatus" => iform.Self_Marital_Status,
      "PatientSocialSecurityNumber" => iform.ssn_1.to_s + '-' + iform.ssn_2.to_s + '-' + iform.ssn_3.to_s,
      "PatientDriversLicenseStateAndNumber" => iform.Self_Driver_License_State.to_s + ' ' + iform.Self_Driver_License_Number.to_s,
      "PatientDriversLicense" => iform.Self_Driver_License_Number,
      "PatientAddress" => (iform.Self_Home_Address1.empty? ? ' ' : (iform.Self_Home_Address1.to_s + ',')) + (iform.Self_Home_Address2.empty? ? ' ' : (iform.Self_Home_Address2.to_s + ', ')) + iform.Self_Home_City.to_s + ' ' + iform.Self_Home_State.to_s + ' ' + iform.Self_Home_Postal_Code.to_s,
      "PatientHomePhone" => iform.home_phone_1.to_s + '-' + iform.home_phone_2.to_s + '-' + iform.home_phone_3.to_s,
      "PatientWorkPhone" => iform.work_phone_1.to_s + '-' + iform.work_phone_2.to_s + '-' + iform.work_phone_3.to_s,
      "PatientCellPhone" => iform.cell_phone_1.to_s + '-' + iform.cell_phone_2.to_s + '-' + iform.cell_phone_3.to_s,
      "BestPhoneNumberDuringDay" => iform.best_number_to_reach,
      "PatientEmployer" => iform.Self_Employer_Name,
      "PatientEmployerAddressAndPhone" => (iform.Self_Employer_Address1.empty? ? ' ' : (iform.Self_Employer_Address1.to_s + ',')) + (iform.Self_Employer_Address2.empty? ? ' ' : (iform.Self_Employer_Address2.to_s + ','+ ' ')) + iform.Self_Employer_City.to_s + ' ' + iform.Self_Employer_State.to_s + ' ' + iform.Self_Employer_Postal_Code.to_s + '  ' + iform.employer_phone_1.to_s + '-'+ iform.employer_phone_2.to_s + '-'+ iform.employer_phone_3.to_s,
      "PatientSpouseName" => iform.Spouse_Name_First.to_s + ' ' + iform.Spouse_Name_Last.to_s,
      "PatientSpouseEmployer" => iform.Spouse_Employer_Name,
      "PatientEmergencyContactNameAndPhone" => iform.Emergency_Contact_Name_First.to_s + ' ' + iform.Emergency_Contact_Name_Last.to_s + '  ' + iform.emergency_contact_phone_1.to_s + '-' + iform.emergency_contact_phone_2.to_s + '-' + iform.emergency_contact_phone_3.to_s,
      "PersonResponsibleForAccountRelationToPatient" => iform.person_responsible_for_ac == 'Other' ? iform.relationship_to_patient : 'Self',
      "PersonResponsibleForAccountName" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_first_name.to_s + ' ' + iform.billing_details_last_name.to_s) : ' ',
      "PersonResponsibleForAccountAddress" => iform.person_responsible_for_ac == 'Other' ? ((iform.billing_details_address1.empty? ? ' ' : (iform.billing_details_address1.to_s + ',')) + (iform.billing_details_address2.empty? ? ' ' : (iform.billing_details_address2.to_s + ',' + ' ')) + iform.billing_details_address_city.to_s + ' ' + iform.billing_details_address_state.to_s + ' ' + iform.billing_details_address_postal_code.to_s) : '',
      "PersonResponsibleForAccountHomePhone" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_home_phone_1.to_s + ' ' + iform.billing_details_home_phone_2.to_s + ' ' + iform.billing_details_home_phone_3.to_s) : ' ',
      "PersonResponsibleForAccountWorkPhone" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_work_phone_1.to_s + ' ' + iform.billing_details_work_phone_2.to_s + ' ' + iform.billing_details_work_phone_3.to_s) : ' ',
      "PersonResponsibleForAccountCellPhone" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_cell_phone_1.to_s + ' ' + iform.billing_details_cell_phone_2.to_s + ' ' + iform.billing_details_cell_phone_3.to_s) : ' ',
      "PersonResponsibleForAccountSocialSecurityNumber" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_ssn_1.to_s + '-' + iform.billing_details_ssn_2.to_s + '-' + iform.billing_details_ssn_3.to_s) : ' ',
      "PersonResponsibleForAccountDriversLicenseStateAndNumber" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_driving_licence_state.to_s + ' ' + iform.billing_details_driving_licence_number.to_s) : ' ',
      "PersonResponsibleForAccountBirthDate" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_birth_date ? iform.billing_birth_date.strftime('%m-%d-%Y') : '') : ' ',
      "PersonResponsibleForAccountEmployer" => iform.person_responsible_for_ac == 'Other' ? (iform.billing_details_employer_name) : ' ',
      "PersonResponsibleForAccountEmployerAddressAndPhone" => iform.person_responsible_for_ac == 'Other' ? ((iform.billing_details_employer_address1.empty? ? ' ' : (iform.billing_details_employer_address1.to_s + ',')) + (iform.billing_details_employer_address2.empty? ? ' ' : (iform.billing_details_employer_address2.to_s + ','+ ' ')) + iform.billing_details_employer_address_city.to_s + ' ' + iform.billing_details_employer_address_state.to_s + ' ' + iform.billing_details_employer_address_postal_code.to_s) : ' ',
      "HowDidYouHearAboutOurOffice" => iform.how_did_you_hear_about_office,
      "SmileWhiteness" => iform.smile_evaluation_whiteness,
      "SmileStainingDiscoloration" => iform.smile_evaluation_staining,
      "SmileAlignmentOfTeeth" => iform.smile_evaluation_alignment_of_test,
      "SmileChippingCracking" => iform.smile_evaluation_chipping,
      "SmileExistingDentalWork" => iform.smile_evaluation_existing_dental_work,
      "SmileGumHealthAppearance" => iform.smile_evaluation_gum_health,
      "SmileSmileLine" => iform.smile_evaluation_smile_line,
      "IsThereAnythingElse" => iform.anything_else_about_smile,

    })
    #form_pdf_path = "#{PDFFILES_PATH}Karen_Naples_1.pdf"
    #raise @pdftk.fields(form_pdf_path).to_yaml
    iform_file = File.new(path, 'rb')
    iform.pdffile_path = iform_file.read()
    iform.save

    File.delete(path)
  end



  #def self_social_security_number
  #  self.Self_Social_Security_Number
  #end

  # after_save :update_appformjoin
  #
  # def self.update_appformjoin(appformjoin)
  #  @appformjoin = appformjoin
  # end
  #
  # def update_appformjoin
  # if @appformjoin.status == "pending"
  #    @appformjoin.status = ""
  #    @appformjoin.save
  # end
  # end
  #attr_writer :current_step

  #validates_presence_of :Self_Name_First, :Self_Name_Last #:if => lambda { |o| o.current_step == "aboutyou" }
  #validates_presence_of :spousename, :spouse_employer, :if => lambda { |o| o.current_step == "spouseinformation" }


  # def current_step
  #      @current_step || steps.first
  #  end
  #
  #    def steps
  #      %w[aboutyou spouceinformation orthodonticinsurance medicalhistory dentalhistory]
  #    end
  #    def next_step
  #     self.current_step = steps[steps.index(current_step)+1]
  #    end
  #
  #    def previous_step
  #      self.current_step = steps[steps.index(current_step)-1]
  #    end
  #    def first_step?
  #      current_step == steps.first
  #    end
  #
  #    def last_step?
  #      current_step == steps.last
  #    end
  #
  #    def all_valid?
  #      steps.all? do |step|
  #        self.current_step = step
  #        valid?
  #      end
  #
  #    end


  # validates_presence_of :email, :firstname, :lastname, :middlename, :prefix, :sex, :ssn, :homeadd, :state, :zip, :birthdate
  #   validates_format_of :email, :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
  #  validates_format_of :firstname, :lastname, :middlename, :preferredname, :city, :state, :occupation, :referal, :familyvisited, :with => /^[a-zA-Z]+$/
  # validates_format_of :zip, :with => /^\d{5}(-?\d{4})?$/
  # validates_format_of :homeph, :workph, :with => /^\d{10}(-?\d{9})?$/
  # validates_format_of :workext, :with => /^\d{4}(-?\d{3})?$/
  #validate :Self_Birthdate
  # validate :validate_lastvisitdate
  # validate :validate_todaydate
  # validate :validate_age
  #
  # def validate_age
  #   age = Date.today.year - birthdate.year
  #   age -= 1 if Date.today < birthdate + age.years # birthdate.month > now.month and birthdate.day > now.day
  #   self.age = age
  # end
  # def validate_todaydate
  # if !todaydate == Date.today
  #   errors.add(:todaydate, "please enter valid date")
  # end
  # end
  # def validate_lastvisitdate
  #   if lastvisitdate >= Date.today
  #     errors.add(:lastvisitdate, "please enter valid date")
  #   end
  # end
  # def selfbirthdate
  #       if selfbirthdate >= Date.today
  #         errors.add(:Self_Birthdate, "please enter valid date")
  #       end
  #   end
  #
  #validates_presence_of :Self_Name_First, :Self_Name_Honorific
  # validates_format_of :Self_Name_First, :Self_Name_Honorific, :with => /^[A-Za-z]+$/ , :unless => "Self_Name_First.blank? or Self_Name_Honorific.blank?"
  # validate :validate_Self_Birthdate
  #     def validate_Self_Birthdate
  #       if !Self_Birthdate.blank? and Self_Birthdate >= Date.today
  #         errors.add(:Self_Birthdate)
  #       end
  #     end


end
