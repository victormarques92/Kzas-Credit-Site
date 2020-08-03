$('[data-id="banco-selecionado"]').click(function (e) {
  e.preventDefault();

  var inputCheck = $(this).find('input');

  if (inputCheck.is(':checked')) {
    inputCheck.removeAttr('checked');
  } else {
    inputCheck.attr('checked', 'checked');
  }

  btnAnaliseJuridica();
});

function btnAnaliseJuridica() {
  var inputCheck = $('[data-id="banco-selecionado"]').find('input');

  if (inputCheck.is(':checked')) {
    $('.analise-juridica').slideDown(800);
  } else {
    $('.analise-juridica').slideUp();
  }
}
