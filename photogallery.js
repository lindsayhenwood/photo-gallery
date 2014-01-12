$(document).ready(function(){

	/*$('.li').mouseover(function){
		$(this).stop().animate({"width": "100%", "left": "0px", "top": "0px"}, 400, 'swing'
	}).mouseout(function(){
		$(this).stop().animate({"width": "80%", "left": "15", "top": "15px"}, 200, 'swing'
				});;
			});
		}
	});*/

	$("#portfolio-feed img").hover( function() {
		$(this).animate({width: "250px", height: "225px", margin: "7.5px"}, 1000);
	},  function() {
		$(this).animate({width:"225px", height: "200px", margin: "20px"}, 1000);
	});

	/*$('.carousel').carousel({ interval: 2000})*/

});