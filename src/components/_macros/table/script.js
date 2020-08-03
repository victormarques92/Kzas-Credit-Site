// ==============================================
//                                       Destaque
// ==============================================
function showDestaques() {
  var itemDestaque = $('.table-component .item .destaque');

  if ($('.table-component .input-switch[data-id="show-destaques"]').find('input').is(':checked')) {
    itemDestaque.addClass('active');
  } else {
    itemDestaque.removeClass('active');
  }
}

$('.table-component .input-switch[data-id="show-destaques"]').click(function (e) {
  e.preventDefault();

  var itemSwitch = $(this).find('input');

  if (itemSwitch.is(':checked')) {
    itemSwitch.removeAttr('checked');
  } else {
    itemSwitch.attr('checked', 'checked');
  }

  showDestaques();
});
