$(document).ready(function(){


	$("#portfolio-feed img").hover( function() {
		$(this).animate({width: "250px", height: "225px", margin: "7.5px"}, 1000);
	},  function() {
		$(this).animate({width:"225px", height: "200px", margin: "20px"}, 1000);
	});

	/*$('.carousel').carousel({ interval: 2000})*/



	$("#portfolio-feed li.img").click(function(){
		console.log("hello!");
		var src = $(this).attr("src");
		$("#main-image").attr("src", src);
	});

});