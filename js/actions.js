$(document).ready(function(){
  $('#teddypicker').hide();
  $('#cryinglightning').hide();
  $('#blacktreacle').hide();
  $('#doiwannaknow').hide();


  function hideAll() {
      $('#teddypicker').hide();
      $('#cryinglightning').hide();
      $('#blacktreacle').hide();
      $('#doiwannaknow').hide();
      $(".music").trigger('pause');
      $(".music").prop("currentTime", 0);
  }




//ask prof. McAdams about the glitchy little thing where you click on one album a bunch of times and then click on another and it makes 2 audio players slide up and down
$('#favouriteworstnightmare').click (function() {
  $('#teddypicker').slideToggle();
});
$('#humbug').click (function() {
  $('#cryinglightning').slideToggle();
});
$('#suckitandsee').click (function() {
  $('#blacktreacle').slideToggle();
});
$('#am').click (function() {
  $('#doiwannaknow').slideToggle();
});


  $('.albumimg').click(function() {
  hideAll();
  switch ( $(this).attr("id") ) {
    case "favouriteworstnightmare" :
        $('#teddypicker').show();
        break;
    case "humbug" :
        $('#cryinglightning').show();
        break;
    case "suckitandsee" :
        $('#blacktreacle').show();
        break;
    case "am" :
        $('#doiwannaknow').show();
        break;
        }

});



});
