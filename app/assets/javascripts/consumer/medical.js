$(function () {

  $(".medical_Patient_form_date_selector").datepicker().datepicker("option", "dateFormat", "yy-mm-dd");

  $('.medical_patient_form_nav_link').live('click', function () {
    var tab_index = parseInt($(this).attr('data_tab_index'));
    $("#medical_patient_form_tab_links a:eq(" + tab_index + ")").tab('show');
    // return false;
  });

  $('#medical_patient_form_social_history_no_of_children').live('blur', function () {
    if ($(this).val() < 1) {
      $('#medical_patient_form_social_history_age_of_children').val('');
      $('#medical_patient_form_social_history_age_of_children').attr('readonly', true);
    } else {
      $('#medical_patient_form_social_history_age_of_children').attr('readonly', false);
    }
  });

  $('#medical_patient_form_social_history_exercise_approximately').live('blur', function () {
    if ($(this).val() < 1) {
      $('#medical_patient_form_social_history_ex_minutes_per_day').val('');
      $('#medical_patient_form_social_history_exercise_type').val('');
      $('#medical_patient_form_social_history_ex_minutes_per_day').attr('readonly', true);
      $('#medical_patient_form_social_history_exercise_type').attr('readonly', true);
    } else {
      $('#medical_patient_form_social_history_ex_minutes_per_day').attr('readonly', false);
      $('#medical_patient_form_social_history_exercise_type').attr('readonly', false);
    }
  });

  $('.medical_patient_form_smoking').live('change', function () {
    if ($('.medical_patient_form_smoking:checked').val() == "Never") {
      $('#medical_patient_form_social_history_smoking_packs_per_day').val('');
      $('#medical_patient_form_social_history_smoking_no_of_years').val('');
      $('#medical_patient_form_social_history_smoking_quit_years').val('');
      $('#medical_patient_form_social_history_smoking_packs_per_day').attr('readonly', true);
      $('#medical_patient_form_social_history_smoking_no_of_years').attr('readonly', true);
      $('#medical_patient_form_social_history_smoking_quit_years').attr('readonly', true);
    } else if ($('.medical_patient_form_smoking:checked').val() == "I smoke now") {
      $('#medical_patient_form_social_history_smoking_quit_years').val('');
      $('#medical_patient_form_social_history_smoking_packs_per_day').attr('readonly', false);
      $('#medical_patient_form_social_history_smoking_no_of_years').attr('readonly', false);
      $('#medical_patient_form_social_history_smoking_quit_years').attr('readonly', true);
    }
    else if ($('.medical_patient_form_smoking:checked').val() == "I did, but I quit") {
      $('#medical_patient_form_social_history_smoking_packs_per_day').val('');
      $('#medical_patient_form_social_history_smoking_no_of_years').val('');
      $('#medical_patient_form_social_history_smoking_packs_per_day').attr('readonly', true);
      $('#medical_patient_form_social_history_smoking_no_of_years').attr('readonly', true);
      $('#medical_patient_form_social_history_smoking_quit_years').attr('readonly', false);
    } else {
    }
  });

  $('.medical_patient_form_recreational_drug').live('change', function () {
    if ($('.medical_patient_form_recreational_drug:checked').val() == "Yes") {
      $('#medical_patient_form_social_history_yes_i_have_used_recreational_drugs').attr('readonly', false);
    }else{
      $('#medical_patient_form_social_history_yes_i_have_used_recreational_drugs').val('');
      $('#medical_patient_form_social_history_yes_i_have_used_recreational_drugs').attr('readonly', true);
    }
  });

  $('.medical_patient_form_recently_traveled').live('change', function () {
    if ($('.medical_patient_form_recently_traveled:checked').val() == "Yes") {
      $('#medical_patient_form_social_history_yes_i_recently_traveled').attr('readonly', false);
    }else{
      $('#medical_patient_form_social_history_yes_i_recently_traveled').val('');
      $('#medical_patient_form_social_history_yes_i_recently_traveled').attr('readonly', true);
    }
  });

  $('.medical_patient_form_gender').live('change', function () {
    if ($('.medical_patient_form_gender:checked').val() == "Male") {
      $('#medical_patient_form_review_of_sym_sexual_difficulty_achieving_and_maintaining').attr('readonly', false);
    }else{
      $('#medical_patient_form_review_of_sym_sexual_difficulty_achieving_and_maintaining').attr('checked', false);
      $('#medical_patient_form_review_of_sym_sexual_difficulty_achieving_and_maintaining').attr('readonly', true);
    }
  });

  $('#medical_patient_form_review_of_sym_musculoskeletal_joint_pain_or_stiffness').live('click',function(){
    if ($(this).is(':checked')) {
      $('#medical_patient_form_review_of_sym_joints_that_are_painful_or_stiff').attr('readonly', false);
    }else{
      $('#medical_patient_form_review_of_sym_joints_that_are_painful_or_stiff').val('');
      $('#medical_patient_form_review_of_sym_joints_that_are_painful_or_stiff').attr('readonly', true);
    }
  });

  $('#medical_patient_form_review_of_sym_musculoskeletal_joint_swelling_or_redness').live('click',function(){
    if ($(this).is(':checked')) {
      $('#medical_patient_form_review_of_sym_joints_that_are_swelling_or_have_redness').attr('readonly', false);
    }else{
      $('#medical_patient_form_review_of_sym_joints_that_are_swelling_or_have_redness').val('');
      $('#medical_patient_form_review_of_sym_joints_that_are_swelling_or_have_redness').attr('readonly', true);
    }
  });

  $('.medical_patient_form_colonoscopy_test').live('change', function () {
    if ($('.medical_patient_form_colonoscopy_test:checked').val() == "Abnormal") {
      $('#medical_patient_form_health_maintenance_description_of_abnormal_test_results').attr('readonly', false);
    }else{
      $('#medical_patient_form_health_maintenance_description_of_abnormal_test_results').val('');
      $('#medical_patient_form_health_maintenance_description_of_abnormal_test_results').attr('readonly', true);
    }
  });

  $('#medical_patient_form_health_maintenance_hysterectomy').live('change', function () {
if ($('#medical_patient_form_health_maintenance_hysterectomy').val() == "") {
      $('#medical_patient_form_health_maintenance_why_was_hysterectomy_performed').val('');
      $('#medical_patient_form_health_maintenance_why_was_hysterectomy_performed').attr('readonly', true);
    }else{
      $('#medical_patient_form_health_maintenance_why_was_hysterectomy_performed').attr('readonly', false);
    }
  });


  // pre populating fields

  $('#insurance_primary').live('click', function () {
    primary_insurance_details_info();
    update_all_fields();
  });

  $('#insurance_secondary').live('click', function () {
    secondary_insurance_details_info();
    update_all_fields();
  });

  $('.medical_patient_primary_insurance_policy').live('change', function () {
    if ($('.medical_patient_primary_insurance_policy:checked').val() == 'Self') {
      primary_insurance_details_info();
    }
    else {
      $('.medical_patient_primary_insurance_policy_details').attr('readonly', false);
      $('#medical_patient_form_primary_insurance_policy_holder_first_name').val('');
      $('#medical_patient_form_primary_insurance_policy_holder_last_name').val('');
      $('#medical_patient_form_primary_insurance_relationship').val('');
      $('#medical_patient_form_primary_insurance_birth_date').val('');
      $('#medical_patient_form_primary_insurance_ssn_1').val('');
      $('#medical_patient_form_primary_insurance_ssn_2').val('');
      $('#medical_patient_form_primary_insurance_ssn_3').val('');
      $('#medical_patient_form_primary_insurance_policy_holder_employer').val('');
    }
    update_all_fields();
  });

  function primary_insurance_details_info() {
    if ($('.medical_patient_primary_insurance_policy:checked').val() == 'Self') {
      $('.medical_patient_primary_insurance_policy_details').attr('readonly', true);
      $('#medical_patient_form_primary_insurance_policy_holder_first_name').val($('#medical_patient_form_first_name').val());
      $('#medical_patient_form_primary_insurance_policy_holder_last_name').val($('#medical_patient_form_last_name').val());
      $('#medical_patient_form_primary_insurance_relationship').val('Self');
      $('#medical_patient_form_primary_insurance_birth_date').val($('#medical_patient_form_birth_date').val());
      $('#medical_patient_form_primary_insurance_ssn_1').val($('#medical_patient_form_ssn_1').val());
      $('#medical_patient_form_primary_insurance_ssn_2').val($('#medical_patient_form_ssn_2').val());
      $('#medical_patient_form_primary_insurance_ssn_3').val($('#medical_patient_form_ssn_3').val());
      $('#medical_patient_form_primary_insurance_policy_holder_employer').val($('#medical_patient_form_employer').val());
    }
  }

  $('.medical_patient_secondary_insurance_policy').live('change', function () {
    if ($('.medical_patient_secondary_insurance_policy:checked').val() == 'Self') {
      secondary_insurance_details_info();
    }
    else {
      $('.medical_patient_secondary_insurance_policy_details').attr('readonly', false);
      $('#medical_patient_form_secondary_insurance_policy_holder_first_name').val('');
      $('#medical_patient_form_secondary_insurance_policy_holder_last_name').val('');
      $('#medical_patient_form_secondary_insurance_relationship').val('');
      $('#medical_patient_form_secondary_insurance_birth_date').val('');
      $('#medical_patient_form_secondary_insurance_ssn_1').val('');
      $('#medical_patient_form_secondary_insurance_ssn_2').val('');
      $('#medical_patient_form_secondary_insurance_ssn_3').val('');
      $('#medical_patient_form_secondary_insurance_policy_holder_employer').val('');
    }
    update_all_fields();
  });

  function secondary_insurance_details_info() {
    if ($('.medical_patient_secondary_insurance_policy:checked').val() == 'Self') {
      $('.medical_patient_secondary_insurance_policy_details').attr('readonly', true);
      $('#medical_patient_form_secondary_insurance_policy_holder_first_name').val($('#medical_patient_form_first_name').val());
      $('#medical_patient_form_secondary_insurance_policy_holder_last_name').val($('#medical_patient_form_last_name').val());
      $('#medical_patient_form_secondary_insurance_relationship').val('Self');
      $('#medical_patient_form_secondary_insurance_birth_date').val($('#medical_patient_form_birth_date').val());
      $('#medical_patient_form_secondary_insurance_ssn_1').val($('#medical_patient_form_ssn_1').val());
      $('#medical_patient_form_secondary_insurance_ssn_2').val($('#medical_patient_form_ssn_2').val());
      $('#medical_patient_form_secondary_insurance_ssn_3').val($('#medical_patient_form_ssn_3').val());
      $('#medical_patient_form_secondary_insurance_policy_holder_employer').val($('#medical_patient_form_employer').val());
    }
  }

  function update_all_fields() {

  }


  // auto tab js
  // adding filter numeric
  $('#medical_patient_form_home_phone_1, #medical_patient_form_home_phone_2, #medical_patient_form_home_phone_3,' +
    '#medical_patient_form_work_phone_1, #medical_patient_form_work_phone_2, #medical_patient_form_work_phone_3,' +
    '#medical_patient_form_cell_phone_1, #medical_patient_form_cell_phone_2, #medical_patient_form_cell_phone_3,' +
    '#medical_patient_form_ssn_1, #medical_patient_form_ssn_2, #medical_patient_form_ssn_3, #medical_patient_form_spouse_home_phone_1,' +
    '#medical_patient_form_spouse_home_phone_2, #medical_patient_form_spouse_home_phone_3, #medical_patient_form_spouse_work_phone_1,' +
    '#medical_patient_form_spouse_work_phone_2, #medical_patient_form_spouse_work_phone_3, #medical_patient_form_emergency_contact_phone_1,' +
    '#medical_patient_form_emergency_contact_phone_2, #medical_patient_form_emergency_contact_phone_3, #medical_patient_form_primary_insurance_phone_1,' +
    '#medical_patient_form_primary_insurance_phone_2, #medical_patient_form_primary_insurance_phone_3, #medical_patient_form_primary_insurance_ssn_1,' +
    '#medical_patient_form_primary_insurance_ssn_2, #medical_patient_form_primary_insurance_ssn_3, #medical_patient_form_secondary_insurance_phone_1,' +
    '#medical_patient_form_secondary_insurance_phone_2, #medical_patient_form_secondary_insurance_phone_3, #medical_patient_form_secondary_insurance_ssn_1,' +
    '#medical_patient_form_secondary_insurance_ssn_2, #medical_patient_form_secondary_insurance_ssn_3, #medical_patient_form_social_history_no_of_children').autotab_filter('numeric');

  // adding autotab magic

  $('#medical_patient_form_home_phone_1, #medical_patient_form_home_phone_2, #medical_patient_form_home_phone_3,' +
    '#medical_patient_form_work_phone_1, #medical_patient_form_work_phone_2, #medical_patient_form_work_phone_3,' +
    '#medical_patient_form_cell_phone_1, #medical_patient_form_cell_phone_2, #medical_patient_form_cell_phone_3, #medical_patient_form_sex_f').autotab_magic();

  $('#medical_patient_form_ssn_1, #medical_patient_form_ssn_2, #medical_patient_form_ssn_3').autotab_magic();

  $('#medical_patient_form_spouse_home_phone_1, #medical_patient_form_spouse_home_phone_2, #medical_patient_form_spouse_home_phone_3,' +
    '#medical_patient_form_spouse_work_phone_1, #medical_patient_form_spouse_work_phone_2, #medical_patient_form_spouse_work_phone_3').autotab_magic();

  $('#medical_patient_form_emergency_contact_phone_1, #medical_patient_form_emergency_contact_phone_2, #medical_patient_form_emergency_contact_phone_3').autotab_magic();

  $('#medical_patient_form_primary_insurance_phone_1, #medical_patient_form_primary_insurance_phone_2, #medical_patient_form_primary_insurance_phone_3, #medical_patient_form_primary_insurance_id').autotab_magic();

  $('#medical_patient_form_primary_insurance_ssn_1, #medical_patient_form_primary_insurance_ssn_2, #medical_patient_form_primary_insurance_ssn_3, #medical_patient_form_primary_insurance_policy_holder_employer').autotab_magic();

  $('#medical_patient_form_secondary_insurance_phone_1, #medical_patient_form_secondary_insurance_phone_2, #medical_patient_form_secondary_insurance_phone_3, #medical_patient_form_secondary_insurance_id').autotab_magic();

  $('#medical_patient_form_secondary_insurance_ssn_1, #medical_patient_form_secondary_insurance_ssn_2, #medical_patient_form_secondary_insurance_ssn_3, #medical_patient_form_secondary_insurance_policy_holder_employer').autotab_magic();


});