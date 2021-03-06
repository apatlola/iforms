// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(function(){

  $('.girl_scout_permission_form input, textarea').change(function () {
    $('input[name=_method]').val('post');
    var params = $('.girl_scout_permission_form').serializeArray();
    $.post('/consumer/girl_scouts/girl_scouts_permission_form', params);
    return false;
  });

  $('#notification_email_to_troop_leader').click(function () {
    if ($(this).attr('disabled') == "disabled") {
      return false;
    }
    $(this).attr('disabled', "disabled");
    $(this).text('Sending Email Notification to Troop Leader...');
    var id = $('.girl_scout_permission_form #girl_scouts_activity_permission_form_id').val();
    $.post('/consumer/girl_scouts/send_permission_form_to_troop_leader', {id:id});
    return false;
  });

});
