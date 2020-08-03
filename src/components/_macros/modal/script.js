$(function() {
  $('[open-modal]').click(function(e) {
    e.stopPropagation();

    $('.modal-component').removeClass('active');

    var modal = $(this).attr('open-modal');

    $('.modal-component[data-id="' + modal + '"]').addClass('active');
  });


  $('[close]').click(function(e) {
    e.preventDefault();

    $('.modal-component').removeClass('active');
  });
});
