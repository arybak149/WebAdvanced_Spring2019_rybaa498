window.addEventListener('DOMContentLoaded', function(e){


	e.preventDefault(); 

	console.log("js is linked");

	var navOffset = $("nav").offset().top;
	console.log(navOffset);
	//window.addEventListener('scroll', function(){
		//var navOffset = (window.pageYOffset!=underfined)?window.pageYOffset: 
		////(document.documentElement || document.body.parentNode || document.body).navOffset;
		//console.log(navOffset); 
	//});

//this is equal to window.addEventListener
$(window).scroll(function(){

var scrollPos = $(window).scrollTop();
//console.log(scrollPos); 

 var stickNav = $("nav");

function scrollMenu(banana){

if(scrollPos >= navOffset){
	banana.addClass("fixed");

}else {
	banana.removeClass("fixed");
}
}
}); 


	//var navOffset = $("nav").offsett().top;
	//console.log(navOffset);   																						

});

function scrollEvent(){

	$('nav li a').click(function(){

		var myTarget = $(this.hash);
		myTarget = myTarget.length && myTarget; 

		var targetOffset = myTarget.offset().top; 
		$('html , body').animate({scrollTop : targetOffset} 1000); 
	});
}















