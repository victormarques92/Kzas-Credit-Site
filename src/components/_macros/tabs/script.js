var tabsHead = $('.tabs-component .list-head-item');

tabsHead.click(function () {
  var dataId = $(this).attr('data-id');

  $('.list-head-item, .component-tabs-body').removeClass('active');
  $(this).toggleClass('active');
  $('.component-tabs-body[data-id="' + dataId + '"]').toggleClass('active');
});
