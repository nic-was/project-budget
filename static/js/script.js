$(document).ready(function(){
    $(".sidenav").sidenav({edge: "right"});
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
    $('.collapsible').collapsible();
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: "Select"
      }
    });
  });
