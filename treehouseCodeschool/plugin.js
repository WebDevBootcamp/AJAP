
// Plugin

// auto loads .insigna class
// <div class="insignia" data-codeschool="audreyklammer" data-treehouse=""></div>

// manual usage:

/*
$('#myDiv').insignia({
	usernameTreehouse: 'audreyklammer',
	usernameCodeschool: 'audreyklammer'
});
*/

// ak - the ; just makes sure other code the person might have had doesn't break by this code
// ak - then we are immediately invoking a function to attach jQuery to anything with $ in case they have other code that uses $'s
;(function($){

	$.fn.insignia = function(config){
		var element = this;
		element.empty();
		if (config.usernameCodeschool){
			getBadges(usernameTreehouse, element);
		} if (config.usernameTreehouse){
			getBadges2(usernameCodeschool, element);
		}
	};


	function getBadges(usernameTreehouse, element) {
			$.ajax({
			url: "http://teamtreehouse.com/" + usernameTreehouse + ".json",
			type: "GET",
			crossDomain: true,
			dataType: "json",
			async: true,
			success: function(dataBack) {
				//console.log(dataBack);
				var badges = dataBack.badges;
				$(element).append("<h3>I have taken " + badges.length + " lessons and scored " + dataBack.points.total + 
					" points at Treehouse!</h3><div class=\"badges\"></div>");
				badges.forEach(function(badge, i){
					if (i < 7) {
						$(".badges").append("<li class=\"badgeImages\"> <img src=' " + badge.icon_url + " '/></li>");
					}
				});
			},
			error: function(dataBack) {
				console.log("something went wrong.");
				//this happen when call fails
			}
		});
	}


	function getBadges2(usernameCodeschool, element) {
			$.ajax({
			url: "https://www.codeschool.com/users/" + usernameCodeschool + ".json",
			type: "GET",
			crossDomain: true,
			dataType: "jsonp",
			async: true,
			success: function(dataBack) {
				console.log(dataBack);
				 $(element).append("<h3>I have taken " + dataBack.badges.length + " lessons and scored " + dataBack.user.total_score + 
				 	" points at Codeschool!</h3><div class=\"badges2\"></div>");
				var badges = dataBack.badges;
				// put in badge because period not accepted in parameter and forEach
				badges.forEach(function(item, i){
					if (i < 7) {
						$(".badges2").append("<li class=\"badgeImages\"> <img src=' " + item.badge + " '/></li>");
				 	}
				});
			},
			error: function(dataBack) {
				console.log("something went wrong.");
				//this happen when call fails
			}
		});
	}

	// Auto loader format example:
	// <div class="insignia" data-codeschool="audreyklammer" data-treehouse=""></div>

	$(document).ready(function(){

		$('.insignia').each(function(){
			$(this).insignia({
				usernameTreehouse: $(this).data('treehouse'),
				usernameCodeschool: $(this).data('codeschool')
			});
		})

	})


})(jQuery);



