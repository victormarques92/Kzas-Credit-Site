function uniaoEstavel() {
  var boxConjuge = $('.box-conjuge');
  var boxUniaoCartorio = $('.input-switch[data-id="uniao-estavel-cartorio"]');

  if ($('.input-switch[data-id="uniao-estavel"]').find('input').is(':checked')) {
    boxConjuge.slideDown(800);
    boxUniaoCartorio.slideDown();
  } else {
    boxConjuge.slideUp(800);
    boxUniaoCartorio.slideUp();
  }
}

function showFgtsTitular() {
  var boxValorFgtsTitular = $('[data-id="valor-fgts-titular"]');

  if ($('.input-switch[data-id="usar-fgts-titular"]').find('input').is(':checked')) {
    boxValorFgtsTitular.slideDown(800);
  } else {
    boxValorFgtsTitular.slideUp(800);
  }
}

function showFgtsConjuge() {
  var boxValorFgtsConjuge = $('[data-id="valor-fgts-conjuge"]');

  if ($('.input-switch[data-id="usar-fgts-conjuge"]').find('input').is(':checked')) {
    boxValorFgtsConjuge.slideDown(800);
  } else {
    boxValorFgtsConjuge.slideUp(800);
  }
}

function financiamentoConjuge() {
  var boxFinanciamentoConjuge = $('.box-conjuge .financiamento-conjuge');

  if ($('.input-switch[data-id="conjuge-compor-compra"]').find('input').is(':checked')) {
    boxFinanciamentoConjuge.slideDown(800);
  } else {
    boxFinanciamentoConjuge.slideUp(800);
  }
}

function numeration() {
  // Comprador 01
  // == Titular
  var itemTitular1 = $('.component-tabs-body[data-id="tab-1"] .box-fonte-renda[data-id="titular"] .item-renda');

  if (itemTitular1.length > 0) {
    itemTitular1.find('.num-renda').text(function (i) {
      return i + 1;
    });
  }

  // == Conjuge
  var itemConjuge1 = $('.component-tabs-body[data-id="tab-1"] .box-fonte-renda[data-id="conjuge"] .item-renda');

  if (itemConjuge1.length > 0) {
    itemConjuge1.find('.num-renda').text(function (i) {
      return i + 1;
    });
  }

  // Comprador 02
  // == Titular
  var itemTitular2 = $('.component-tabs-body[data-id="tab-2"] .box-fonte-renda[data-id="titular"] .item-renda');

  if (itemTitular2.length > 0) {
    itemTitular2.find('.num-renda').text(function (i) {
      return i + 1;
    });
  }

  // == Conjuge
  var itemConjuge2 = $('.component-tabs-body[data-id="tab-2"] .box-fonte-renda[data-id="conjuge"] .item-renda');

  if (itemConjuge2.length > 0) {
    itemConjuge2.find('.num-renda').text(function (i) {
      return i + 1;
    });
  }
}

function hideShowButtons() {
  // Comprador 01
  // == Titular
  var itemRendaTitular1 = $('.component-tabs-body[data-id="tab-1"] .box-fonte-renda[data-id="titular"] .item-renda');

  itemRendaTitular1.not(itemRendaTitular1.last()).find('.btn').attr('data-id', 'remove-fonte-renda-titular');
  itemRendaTitular1.not(itemRendaTitular1.last()).find('.btn').text('Remover esta fonte de renda');

  itemRendaTitular1.last().find('.btn').attr('data-id', 'add-fonte-renda-titular');

  // == Conjuge
  var itemRendaConjuge1 = $('.component-tabs-body[data-id="tab-1"] .box-fonte-renda[data-id="conjuge"] .item-renda');

  itemRendaConjuge1.not(itemRendaConjuge1.last()).find('.btn').attr('data-id', 'remove-fonte-renda-conjuge');
  itemRendaConjuge1.not(itemRendaConjuge1.last()).find('.btn').text('Remover esta fonte de renda');

  itemRendaConjuge1.last().find('.btn').attr('data-id', 'add-fonte-renda-conjuge');

  // Comprador 02
  // == Titular
  var itemRendaTitular2 = $('.component-tabs-body[data-id="tab-2"] .box-fonte-renda[data-id="titular"] .item-renda');

  itemRendaTitular2.not(itemRendaTitular2.last()).find('.btn').attr('data-id', 'remove-fonte-renda-titular');
  itemRendaTitular2.not(itemRendaTitular2.last()).find('.btn').text('Remover esta fonte de renda');

  itemRendaTitular2.last().find('.btn').attr('data-id', 'add-fonte-renda-titular');

  // == Conjuge
  var itemRendaConjuge2 = $('.component-tabs-body[data-id="tab-2"] .box-fonte-renda[data-id="conjuge"] .item-renda');

  itemRendaConjuge2.not(itemRendaConjuge2.last()).find('.btn').attr('data-id', 'remove-fonte-renda-conjuge');
  itemRendaConjuge2.not(itemRendaConjuge2.last()).find('.btn').text('Remover esta fonte de renda');

  itemRendaConjuge2.last().find('.btn').attr('data-id', 'add-fonte-renda-conjuge');
}


// ==============================================
//                                  União Estável
// ==============================================
$('.input-switch[data-id="uniao-estavel"]').click(function (e) {
  e.preventDefault();

  var itemSwitch = $(this).find('input');

  if (itemSwitch.is(':checked')) {
    itemSwitch.removeAttr('checked');
  } else {
    itemSwitch.attr('checked', 'checked');
  }

  uniaoEstavel();
});

// ==============================================
//                                 Fonte de renda
// ==============================================
$('select#renda').change(function () {
  var minhaRenda = $(this).val();
  var infoEmpresa = $(this).parent().parent().parent().parent().find('.info-empresa');

  if (minhaRenda == 'assalariado' || minhaRenda == 'empresario') {
    infoEmpresa.slideDown(800);
  } else {
    infoEmpresa.slideUp(800);
  }
});


$(document).ready(function() {
  numeration();
  hideShowButtons();

  var btnAddRemove = $('.btn');

  btnAddRemove.bind('click', '.btn', function (e) {
    e.preventDefault();

    // Element da lista para clone
    var element = $(this).parent().parent().parent();
    var mySectionTitular = $(this).parent().parent().parent().parent().parent().parent().attr('data-id');
    var mySectionConjuge = $(this).parent().parent().parent().parent().parent().parent().parent().find('.box-fonte-renda');

    console.log(mySectionTitular)

    // Função Add Recurso
    // Titular
    if ($(this).attr('data-id') === 'add-fonte-renda-titular') {
      $(element).clone(true).appendTo('[data-id="' + mySectionTitular + '"] .box-fonte-renda[data-id="titular"]');

      numeration();
    }
    // Conjuge
    if ($(this).attr('data-id') === 'add-fonte-renda-conjuge') {
      console.log(mySectionConjuge)
      $(element).clone(true).appendTo(mySectionConjuge);

      numeration();
    }

    // Função Deletar Recurso
    // Titular
    if ($(this).attr('data-id') === 'remove-fonte-renda-titular') {
      $(element).remove();

      numeration();
    }
    // Conjuge
    if ($(this).attr('data-id') === 'remove-fonte-renda-conjuge') {
      $(element).remove();

      numeration();
    }

    if ($('.box-fonte-renda .item-renda').length > 1) {
      hideShowButtons();
    }

  });
});

// ==============================================
//                                      Usar FGTS
// ==============================================
// Titular
$('.input-switch[data-id="usar-fgts-titular"]').click(function (e) {
  e.preventDefault();

  var itemSwitch = $(this).find('input');

  if (itemSwitch.is(':checked')) {
    itemSwitch.removeAttr('checked');
  } else {
    itemSwitch.attr('checked', 'checked');
  }

  showFgtsTitular();
});

// Conjuge
$('.input-switch[data-id="usar-fgts-conjuge"]').click(function (e) {
  e.preventDefault();

  var itemSwitch = $(this).find('input');

  if (itemSwitch.is(':checked')) {
    itemSwitch.removeAttr('checked');
  } else {
    itemSwitch.attr('checked', 'checked');
  }

  showFgtsConjuge();
});
