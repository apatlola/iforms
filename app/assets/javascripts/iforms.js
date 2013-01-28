$('.adult_iforms_nav_link').live('click', function () {
  var tab_index = parseInt($(this).attr('data_tab_index'));
  $("#adult_iforms_tab_links a:eq(" + tab_index + ")").tab('show');
  // return false;
});

$('.chaild_iforms_nav_link').live('click', function () {
  var tab_index = parseInt($(this).attr('data_tab_index'));
  $("#chaild_iforms_tab_links a:eq(" + tab_index + ")").tab('show');
  // return false;
});

$('.karen_naples_new_patient_iforms_nav_link').live('click', function () {
  // console.log($(this).attr('data_tab_index'));
  var tab_index = parseInt($(this).attr('data_tab_index'));
  $("#karen_naples_new_patient_iforms_tab_links a:eq(" + tab_index + ")").tab('show');
  // return false;
});

$('.rising_stars_pediatric_iforms_nav_link').live('click', function () {
  // console.log($(this).attr('data_tab_index'));
  var tab_index = parseInt($(this).attr('data_tab_index'));
  $("#rising_stars_pediatric_iforms_tab_links a:eq(" + tab_index + ")").tab('show');
  // return false;
});


/* Karen Naples */


$('#billing_tab').live('click', function () {
  billing_details_info();
  update_all_fields();
});


$('.karnel_naples_new_patient_billing').live('change', function () {
  if ($('.karnel_naples_new_patient_billing:checked').val() == 'Self') {
    billing_details_info();
  }
  else {
    $('.karen_naples_new_patient_billing_details_info').attr('readonly', false);
    $('#iform_billing_details_first_name').val('');
    $('#iform_billing_details_last_name').val('');
    $('#iform_relationship_to_patient').val('');
    $('#iform_billing_details_address1').val('');
    $('#iform_billing_details_address2').val('');
    $('#iform_billing_details_address_city').val('');
    $('#iform_billing_details_address_state').val('');
    $('#iform_billing_details_address_postal_code').val('');
    $('#iform_billing_details_home_phone_1').val('');
    $('#iform_billing_details_home_phone_2').val('');
    $('#iform_billing_details_home_phone_3').val('');
    $('#iform_billing_details_work_phone_1').val('');
    $('#iform_billing_details_work_phone_2').val('');
    $('#iform_billing_details_work_phone_3').val('');
    $('#iform_billing_details_cell_phone_1').val('');
    $('#iform_billing_details_cell_phone_2').val('');
    $('#iform_billing_details_cell_phone_3').val('');
    $('#iform_billing_details_driving_licence_state').val('');
    $('#iform_billing_details_driving_licence_number').val('');
    $('#iform_billing_details_employer_name').val('');
    $('#iform_billing_details_employer_address1').val('');
    $('#iform_billing_details_employer_address2').val('');
    $('#iform_billing_details_employer_address_city').val('');
    $('#iform_billing_details_employer_address_state').val('');
    $('#iform_billing_details_employer_address_postal_code').val('');
    $('#iform_billing_details_employer_phone_1').val('');
    $('#iform_billing_details_employer_phone_2').val('');
    $('#iform_billing_details_employer_phone_3').val('');
    $('#iform_billing_details_ssn_1').val('');
    $('#iform_billing_details_ssn_2').val('');
    $('#iform_billing_details_ssn_3').val('');
    $('#displaying_date_billing_birth_date').val('').attr('disabled', false);
  }
  update_all_fields();
});


function update_all_fields() {
  if ($('.karnel_naples_new_patient_billing:checked').val() == 'Self') {
    $('input[name=_method]').val('post');
    var params = $('.edit_karen_naples_new_patient_iform').serializeArray();
    $.post('/iforms/iform_all_fields_update', params, function () {
      $('.karen_naples_new_patient_billing_details_info').attr('readonly', true);
    });
  }
  $('input[name=_method]').val('put');
}

function billing_details_info() {
  if ($('.karnel_naples_new_patient_billing:checked').val() == 'Self') {
    $('.karen_naples_new_patient_billing_details_info').attr('readonly', true);
    $('#iform_billing_details_first_name').val($('#iform_Self_Name_First').val());
    $('#iform_billing_details_last_name').val($('#iform_Self_Name_Last').val());
    $('#iform_relationship_to_patient').val('Self');
    $('#iform_billing_details_address1').val($('#iform_Self_Home_Address1').val());
    $('#iform_billing_details_address2').val($('#iform_Self_Home_Address2').val());
    $('#iform_billing_details_address_city').val($('#iform_Self_Home_City').val());
    $('#iform_billing_details_address_state').val($('#iform_Self_Home_State').val());
    $('#iform_billing_details_address_postal_code').val($('#iform_Self_Home_Postal_Code').val());
    $('#iform_billing_details_home_phone_1').val($('#iform_home_phone_1').val());
    $('#iform_billing_details_home_phone_2').val($('#iform_home_phone_2').val());
    $('#iform_billing_details_home_phone_3').val($('#iform_home_phone_3').val());
    $('#iform_billing_details_work_phone_1').val($('#iform_work_phone_1').val());
    $('#iform_billing_details_work_phone_2').val($('#iform_work_phone_2').val());
    $('#iform_billing_details_work_phone_3').val($('#iform_work_phone_3').val());
    $('#iform_billing_details_cell_phone_1').val($('#iform_cell_phone_1').val());
    $('#iform_billing_details_cell_phone_2').val($('#iform_cell_phone_2').val());
    $('#iform_billing_details_cell_phone_3').val($('#iform_cell_phone_3').val());
    $('#iform_billing_details_driving_licence_state').val($('#iform_Self_Driver_License_State').val());
    $('#iform_billing_details_driving_licence_number').val($('#iform_Self_Driver_License_Number').val());
    $('#iform_billing_details_employer_name').val($('#iform_Self_Employer_Name').val());
    $('#iform_billing_details_employer_address1').val($('#iform_Self_Employer_Address1').val());
    $('#iform_billing_details_employer_address2').val($('#iform_Self_Employer_Address2').val());
    $('#iform_billing_details_employer_address_city').val($('#iform_Self_Employer_City').val());
    $('#iform_billing_details_employer_address_state').val($('#iform_Self_Employer_State').val());
    $('#iform_billing_details_employer_address_postal_code').val($('#iform_Self_Employer_Postal_Code').val());
    $('#iform_billing_details_employer_phone_1').val($('#iform_employer_phone_1').val());
    $('#iform_billing_details_employer_phone_2').val($('#iform_employer_phone_2').val());
    $('#iform_billing_details_employer_phone_3').val($('#iform_employer_phone_3').val());
    $('#iform_billing_details_ssn_1').val($('#iform_ssn_1').val());
    $('#iform_billing_details_ssn_2').val($('#iform_ssn_2').val());
    $('#iform_billing_details_ssn_3').val($('#iform_ssn_3').val());
    $('#displaying_date_billing_birth_date').val($('#iform_Self_Birthdate').val()).attr('disabled', true);
  }
  else {
    $('.karen_naples_new_patient_billing_details_info').attr('readonly', false);
    $('#iform_billing_details_first_name').val('');
    $('#iform_billing_details_last_name').val('');
    $('#iform_relationship_to_patient').val('');
    $('#iform_billing_details_address1').val('');
    $('#iform_billing_details_address2').val('');
    $('#iform_billing_details_address_city').val('');
    $('#iform_billing_details_address_state').val('');
    $('#iform_billing_details_address_postal_code').val('');
    $('#iform_billing_details_home_phone_1').val('');
    $('#iform_billing_details_home_phone_2').val('');
    $('#iform_billing_details_home_phone_3').val('');
    $('#iform_billing_details_work_phone_1').val('');
    $('#iform_billing_details_work_phone_2').val('');
    $('#iform_billing_details_work_phone_3').val('');
    $('#iform_billing_details_cell_phone_1').val('');
    $('#iform_billing_details_cell_phone_2').val('');
    $('#iform_billing_details_cell_phone_3').val('');
    $('#iform_billing_details_driving_licence_state').val('');
    $('#iform_billing_details_driving_licence_number').val('');
    $('#iform_billing_details_employer_name').val('');
    $('#iform_billing_details_employer_address1').val('');
    $('#iform_billing_details_employer_address2').val('');
    $('#iform_billing_details_employer_address_city').val('');
    $('#iform_billing_details_employer_address_state').val('');
    $('#iform_billing_details_employer_address_postal_code').val('');
    $('#iform_billing_details_employer_phone_1').val('');
    $('#iform_billing_details_employer_phone_2').val('');
    $('#iform_billing_details_employer_phone_3').val('');
    $('#iform_billing_details_ssn_1').val('');
    $('#iform_billing_details_ssn_2').val('');
    $('#iform_billing_details_ssn_3').val('');
    $('#displaying_date_billing_birth_date').val('').attr('disabled', false);
  }
}

/* End Karen Naples */

/* Rising stars */

$('.rising_stars_first_tim_visit').live('change', function () {
  if ($('.rising_stars_first_tim_visit:checked').val() == 'Yes') {
    $('.rising_stars_last_visit').hide();
  } else {
    $('.rising_stars_last_visit').show();
  }
});

$('.rising_stars_good_gen_health').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_patient_good_general_health_description').hide()
  }
  else {
    $('#iform_medical_history_patient_good_general_health_description').val('');
    $('#iform_medical_history_patient_good_general_health_description').show()
  }
});

$('.rising_stars_physical_dev').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_patient_physical_disabilities_description').val('');
    $('#iform_medical_history_patient_physical_disabilities_description').show()
  }
  else {
    $('#iform_medical_history_patient_physical_disabilities_description').hide()
  }
});

$('.rising_stars_surgical_operations').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_patient_surgical_operations_description').val('');
    $('#iform_medical_history_patient_surgical_operations_description').show()
  }
  else {
    $('#iform_medical_history_patient_surgical_operations_description').hide()
  }
});

$('.rising_stars_patient_hosp').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_patient_ever_been_hospitalized_description').val('');
    $('#iform_medical_history_patient_ever_been_hospitalized_description').show()
  }
  else {
    $('#iform_medical_history_patient_ever_been_hospitalized_description').hide()
  }
});

$('#iform_medical_history_food_allergies').live('change', function () {
  if ($(this).is(':checked')) {
    $('#iform_medical_history_food_allergies_description').val('');
    $('#iform_medical_history_food_allergies_description').show();
  } else {
    $('#iform_medical_history_food_allergies_description').hide();
  }
});


$('#iform_medical_history_drug_allergies').live('change', function () {
  if ($(this).is(':checked')) {
    $('#iform_medical_history_drug_allergies_description').val('');
    $('#iform_medical_history_drug_allergies_description').show();
  } else {
    $('#iform_medical_history_drug_allergies_description').hide();
  }
});

$('.rising_stars_asthama_or_breath').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_asthama_or_breathing_prob_description').val('');
    $('#iform_medical_history_er_for_asthma_attack_description').val('');
    $('#iform_medical_history_induces_breathing_prob').val('');
    $('#iform_medical_history_asthma_medication').val('');
    $('#iform_medical_history_asthama_or_breathing_prob_description').show();
    $('.rising_stars_asthama_yes').show()
  } else {
    $('#iform_medical_history_asthama_or_breathing_prob_description').hide();
    $('.rising_stars_asthama_yes').hide()
  }
});

$('.rising_stars_er_asthama').live('change', function () {
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_er_for_asthma_attack_description').val('');
    $('#iform_medical_history_er_for_asthma_attack_description').show();
  } else {
    $('#iform_medical_history_er_for_asthma_attack_description').hide();
  }
});

$('.rising_stars_seizures').live('change', function () {
  console.log($(this).val());
  if ($(this).val() == 'Yes') {
    $('#iform_medical_history_date_of_last_seizure').val('');
    $('.rising_stars_seizures_date').show();
  } else {
    $('.rising_stars_seizures_date').hide();
  }
});

$('#iform_dental_history_other').live('change', function () {
  if ($(this).is(':checked')) {
    $('#iform_dental_history_oral_habits_other_description').val('');
    $('#iform_dental_history_oral_habits_other_description').show();
  } else {
    $('#iform_dental_history_oral_habits_other_description').hide();
  }
});

$('.rising_stars_mother_type').live('change', function () {
  if ($(this).val() == 'Other') {
    $('#iform_patient_guardian_mother_other_description').val('');
    $('#iform_patient_guardian_mother_other_description').show()
    $('#mother_insurance_insured').text($('#iform_patient_guardian_mother_other_description').val());
  }
  else {
    $('#iform_patient_guardian_mother_other_description').hide()
    $('#mother_insurance_insured').text($('.rising_stars_mother_type:checked').val());
  }
});

$('.rising_stars_father_type').live('change', function () {
  if ($(this).val() == 'Other') {
    $('#iform_patient_guardian_father_other_description').val('');
    $('#iform_patient_guardian_father_other_description').show();
    $('#father_insurance_insured').text($('#iform_patient_guardian_father_other_description').val());
  }
  else {
    $('#iform_patient_guardian_father_other_description').hide();
    $('#father_insurance_insured').text($('.rising_stars_father_type:checked').val());
  }
});

$('#insurance_tab').live('click', function () {

  if ($(".rising_stars_father_type:checked").val() == 'Other') {
    $('#father_insurance_insured').text($('#iform_patient_guardian_father_other_description').val());
  }
  else {
    $('#father_insurance_insured').text($('.rising_stars_father_type:checked').val());
  }

  if ($(".rising_stars_mother_type:checked").val() == 'Other') {
    $('#mother_insurance_insured').text($('#iform_patient_guardian_mother_other_description').val());
  }
  else {
    $('#mother_insurance_insured').text($('.rising_stars_mother_type:checked').val());
  }

  if ($('.rising_stars_insured:checked').val() == 'Father') {
    $('.rising_stars_insured_fields').attr('readonly', true);
    $('#iform_insurance_person_first_name').val($('#iform_patient_guardian_father_first_name').val());
    $('#iform_insurance_person_last_name').val($('#iform_patient_guardian_father_last_name').val());
    $('#iform_insurance_relation_ship_to_patient').val($(".rising_stars_father_type:checked").val() == 'Other' ? $('#iform_patient_guardian_father_other_description').val() : $(".rising_stars_father_type:checked").val());
    $('#iform_insurance_employer').val($('#iform_patient_guardian_father_employer').val());
  }
  else if ($('.rising_stars_insured:checked').val() == 'Mother') {
    $('.rising_stars_insured_fields').attr('readonly', true);
    $('#iform_insurance_person_first_name').val($('#iform_patient_guardian_mother_first_name').val());
    $('#iform_insurance_person_last_name').val($('#iform_patient_guardian_mother_last_name').val());
    $('#iform_insurance_relation_ship_to_patient').val($(".rising_stars_mother_type:checked").val() == 'Other' ? $('#iform_patient_guardian_mother_other_description').val() : $(".rising_stars_mother_type:checked").val());
    $('#iform_insurance_employer').val($('#iform_patient_guardian_mother_employer').val());
  }
  else {
    $('.rising_stars_insured_fields').attr('readonly', false);
    $('#iform_insurance_person_first_name').val('');
    $('#iform_insurance_person_last_name').val('');
    $('#iform_insurance_relation_ship_to_patient').val('');
    $('#iform_insurance_employer').val('');
  }

});

$('.rising_stars_father_address_type').live('change', function () {
  if ($('.rising_stars_father_address_type:checked').val() == 'Same') {
    $('.rising_stars_father_address').attr('readonly', true);
    $('#iform_patient_guardian_father_address_1').val($('#iform_Self_Home_Address1').val());
    $('#iform_patient_guardian_father_address_2').val($('#iform_Self_Home_Address2').val());
    $('#iform_patient_guardian_father_address_city').val($('#iform_Self_Home_City').val());
    $('#iform_patient_guardian_father_address_state').val($('#iform_Self_Home_State').val());
    $('#iform_patient_guardian_father_address_zip').val($('#iform_Self_Home_Postal_Code').val());

    $('#iform_patient_guardian_father_home_phone_1').val($('#iform_home_phone_1').val());
    $('#iform_patient_guardian_father_home_phone_2').val($('#iform_home_phone_2').val());
    $('#iform_patient_guardian_father_home_phone_3').val($('#iform_home_phone_3').val());
  }
  else {
    $('.rising_stars_father_address').attr('readonly', false);
    $('#iform_patient_guardian_father_address_1').val('');
    $('#iform_patient_guardian_father_address_2').val('');
    $('#iform_patient_guardian_father_address_city').val('');
    $('#iform_patient_guardian_father_address_state').val('');
    $('#iform_patient_guardian_father_address_zip').val('');

    $('#iform_patient_guardian_father_home_phone_1').val('');
    $('#iform_patient_guardian_father_home_phone_2').val('');
    $('#iform_patient_guardian_father_home_phone_3').val('');
  }
});

$('.rising_stars_mother_address_type').live('change', function () {
  if ($('.rising_stars_mother_address_type:checked').val() == 'Same') {
    $('.rising_stars_mother_address').attr('readonly', true);
    $('#iform_patient_guardian_mother_address_1').val($('#iform_Self_Home_Address1').val());
    $('#iform_patient_guardian_mother_address_2').val($('#iform_Self_Home_Address2').val());
    $('#iform_patient_guardian_mother_address_city').val($('#iform_Self_Home_City').val());
    $('#iform_patient_guardian_mother_address_state').val($('#iform_Self_Home_State').val());
    $('#iform_patient_guardian_mother_address_zip').val($('#iform_Self_Home_Postal_Code').val());

    $('#iform_patient_guardian_mother_home_phone_1').val($('#iform_home_phone_1').val());
    $('#iform_patient_guardian_mother_home_phone_2').val($('#iform_home_phone_2').val());
    $('#iform_patient_guardian_mother_home_phone_3').val($('#iform_home_phone_3').val());
  }
  else {
    $('.rising_stars_mother_address').attr('readonly', false);
    $('#iform_patient_guardian_mother_address_1').val('');
    $('#iform_patient_guardian_mother_address_2').val('');
    $('#iform_patient_guardian_mother_address_city').val('');
    $('#iform_patient_guardian_mother_address_state').val('');
    $('#iform_patient_guardian_mother_address_zip').val('');

    $('#iform_patient_guardian_mother_home_phone_1').val('');
    $('#iform_patient_guardian_mother_home_phone_2').val('');
    $('#iform_patient_guardian_mother_home_phone_3').val('');
  }
});

$('.rising_stars_insured').live('change', function () {
  if ($('.rising_stars_insured:checked').val() == 'Father') {
    $('.rising_stars_insured_fields').attr('readonly', true);
    $('#iform_insurance_person_first_name').val($('#iform_patient_guardian_father_first_name').val());
    $('#iform_insurance_person_last_name').val($('#iform_patient_guardian_father_last_name').val());
    $('#iform_insurance_relation_ship_to_patient').val($(".rising_stars_father_type:checked").val() == 'Other' ? $('#iform_patient_guardian_father_other_description').val() : $(".rising_stars_father_type:checked").val());
    $('#iform_insurance_employer').val($('#iform_patient_guardian_father_employer').val());
  }
  else if ($('.rising_stars_insured:checked').val() == 'Mother') {
    $('.rising_stars_insured_fields').attr('readonly', true);
    $('#iform_insurance_person_first_name').val($('#iform_patient_guardian_mother_first_name').val());
    $('#iform_insurance_person_last_name').val($('#iform_patient_guardian_mother_last_name').val());
    $('#iform_insurance_relation_ship_to_patient').val($(".rising_stars_mother_type:checked").val() == 'Other' ? $('#iform_patient_guardian_mother_other_description').val() : $(".rising_stars_mother_type:checked").val());
    $('#iform_insurance_employer').val($('#iform_patient_guardian_mother_employer').val());
  }
  else {
    $('.rising_stars_insured_fields').attr('readonly', false);
    $('#iform_insurance_person_first_name').val('');
    $('#iform_insurance_person_last_name').val('');
    $('#iform_insurance_relation_ship_to_patient').val('');
    $('#iform_insurance_employer').val('');
  }

});

  $('.rising_stars_patient_adopted').live('change', function () {
    console.log('zz');
    if ($('.rising_stars_patient_adopted:checked').val() == 'Yes') {
      $('.rising_stars_patient_adopted_age').show();
    }
    else {
      $('.rising_stars_patient_adopted_age').hide();
    }
  });

$('#father_tab').live('click',function(){
  var leng = $('#iform_Self_Name_First').val().length;
  $('.patient_first_name').text($('#iform_Self_Name_First').val());
  $('.home_address_same_as').css('width', + leng * 5 + 200);
});

$('#mother_tab').live('click',function(){
  var leng = $('#iform_Self_Name_First').val().length;
  $('.patient_first_name').text($('#iform_Self_Name_First').val());
  $('.home_address_same_as').css('width', + leng * 5 + 200)
});

$('#iform_Self_Name_First').live('change',function(){
  if($('#iform_Self_Name_First').val() == ''){
    //  $('.replace_patient_with_first_name').text('Patient')
  }else{
    $('.replace_relationship_patient_with_first_name').text($('#iform_Self_Name_First').val());
    $('.replace_patient_with_first_name').text($('#iform_Self_Name_First').val() + "'s");
  }
});

/* ENd Rising stars */

