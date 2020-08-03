// ==============================================
//                                      Preloader
// ==============================================
$(document)
  .ajaxStart(function () {
    $('body').css('overflow', 'auto')
    $('body').append('<div class="preloader"><i class="fas fa-spinner fa-spin"></i></div>');
  })
  .ajaxStop(function () {
    $('.body').removeClass('.preloader');
    $('body').removeClass('preloader-site');
    $('body').css('overflow', 'auto');
  });

$('body').addClass('animated fadeIn');

$(document).ready(function() {
  $('select').niceSelect();
});
