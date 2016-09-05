$(document).ready(function(){
	//Index
	$('.intro, .but-group').fadeIn(1200);
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
});

//Goole Map 
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.787133, lng: -79.323335},
    zoom: 15
    mapTypeId:google.maps.MapTypeId.HYBRID
  });
}
