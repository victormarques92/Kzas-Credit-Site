// ==============================================
//                              Banco Selecionado
// ==============================================
function bancoSelecionado() {
  var activeBtn = $('.btn[data-id="solicitar-aprovacao"]');

  if ($('.table-component .label-checkbox[data-id="banco-preferencia"]').find('input').is(':checked')) {
    activeBtn.removeClass('disabled').addClass('secundary');
  } else {
    activeBtn.removeClass('secudnary').addClass('disabled');
  }
}

$('.table-component .label-checkbox[data-id="banco-preferencia"]').click(function (e) {
  e.preventDefault();

  var itemSwitch = $(this).find('input');

  if (itemSwitch.is(':checked')) {
    itemSwitch.removeAttr('checked');
  } else {
    itemSwitch.attr('checked', 'checked');
  }

  bancoSelecionado();
});
