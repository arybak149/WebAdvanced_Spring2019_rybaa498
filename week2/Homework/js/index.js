$(document).ready(function() { 
    $('#tree li').on('click',function() {
    //style the selected answer
          $(this).addClass('selectedAnswer').siblings("li").removeClass('selectedAnswer').addClass('notSelected');
    $(this).find("li").addClass('selectedChild');
     $(this).children("p.text").removeClass('hidden').addClass('show'); 
  //show back btn
      $(this).siblings(".back").removeClass('hidden').addClass('show'); 
      $(this).parentsUntil("ul").find(".back").addClass('hidden').removeClass('show'); 
      
      
    });
//back
    $('span.back').on('click',function() {
        $(this).siblings("li").removeClass('notSelected selectedAnswer'); 
        $(this).siblings("li").find("p.text").addClass('hidden'); 
      //$(this).parentsUntil("ul").find("span.back").addClass('hidden');
        $(this).addClass("hidden");
    });
  
});