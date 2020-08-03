// ==============================================
//                                  Enviar código
// ==============================================
$(function () {
  var boxValidation = $('.index-form-component div[data-id="validation-code"]');

  $('.index-form-component .btn[data-id="btn-send-code"]').addClass('secundary');
  boxValidation.hide()
  
  
  
  $('.index-form-component .btn[data-id="btn-send-code"]').click(function (e) {
    e.preventDefault();
    
    var inputMobilePhone = $('.index-form-component input#mobile-phone');

    if(inputMobilePhone.val() !== '') {
      $(this).removeClass('secundary').addClass('secundary-invert').text('Reenviar código');

      $(boxValidation).slideDown();
    }
  });

  var inputValidationCode = $('.index-form-component .validation_code');

  inputValidationCode.keyup(function () {
    if ($(this).val().length >= 6) {
      $('.index-form-component .btn[data-id="create-account"]').removeClass('disabled').addClass('secundary');
    } else {
      $('.index-form-component .btn[data-id="create-account"]').removeClass('secundary').addClass('disabled');
    }
  });
});
