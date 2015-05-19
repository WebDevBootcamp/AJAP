



(function ( $ ) {



$(document).ready(function(){
	var user = document.querySelector('.insignia');
	$(".insignia").insignia(user.dataset.treehouse, user.dataset.codeschool);
});

$.fn.insignia = function(usernameTreehouse, usernameCodeschool) {
	this.empty();
	if (usernameTreehouse){
		getBadges(usernameTreehouse, this);
	}
	if (usernameCodeschool) {
		getBadges2(usernameCodeschool, this);
	}
}


function getBadges(usernameTreehouse, element) {
		$.ajax({
		url: "http://teamtreehouse.com/" + usernameTreehouse + ".json",
		type: "GET",
		crossDomain: true,
		dataType: "json",
		async: true,
		success: function(dataBack) {
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
			var badge = dataBack.badges;
			// I put in var badge because period not accepted in parameter and forEach
			badge.forEach(function(badge, i){
				if (i < 7) {
					$(".badges2").append("<li class=\"badgeImages\"> <img src=' " + badge.badge + " '/></li>");
			 	}
			});
		},
		error: function(dataBack) {
			console.log("something went wrong.");
			//this happen when call fails
		}
	});
}


}( jQuery ));
