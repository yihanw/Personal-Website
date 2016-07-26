$(document).ready(function(){

$('#demo').popover();

	//Top Navbar
	$('li.dropdown').focus(function(){
		$('.dropdown-menu').slideToggle();
	});
	//Resume-education
	$('.uw-course a').popover();
	$('.2A').popover("show");
    $('.uw-course a:not(.2A)').focus(function(){
        $('.2A').popover("hide").removeClass("active");
		$(this).addClass("active");
    });
	$('.uw-course a:not(.2A)').blur(function(){
		$('.2A').popover("show").addClass("active");
		$(this).removeClass("active");
	});
	//Resume-projects
	$(".panel-collapse").on("hide.bs.collapse", function(){
		$(this).prev().find("span").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	});
	$(".panel-collapse").on("show.bs.collapse", function(){
		$(this).prev().find("span").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	});
	//Reusme-awards
	$('.inner').click(function(){
		$('.inner.active, .side.active').removeClass("active");
		$(this).addClass("active");
		$(this).next().addClass("active");
	});
	$('.side').click(function(){
		$('.inner.active, .side.active').removeClass("active");
		$(this).addClass("active");
		$(this).prev().addClass("active");
	});
	//Google Map
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(43.787133, -79.323335), zoom: 15
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
});
/*
#34B3A0
#219d91
#204056
#F65A5B
hover: rgba(35, 173, 278, 1)
*/
/*SlideToggle does not work*/
