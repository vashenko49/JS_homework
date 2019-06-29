let $tabs =null,
    $tabsInformation =null;

window.onload=function () {
   $tabs = $('.tabs-title');
   $tabsInformation = $(".tabs-content").children();

   $tabs.click(function (event) {
      let $target = $(event.target);
      $('.active').removeClass('active');
      $target.addClass('active');
      $('.activeText').removeClass('activeText');
      $tabsInformation.eq($target.index()).addClass('activeText');
   });
};
