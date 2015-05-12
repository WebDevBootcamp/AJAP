$(document).ready(function(){
	$("#coding-form").submit(function() {
	var username = $("#username").val();
	getBadges(username, ".pointsLessons");
	console.log(username);
	return false;
	});
});

function getBadges(username, element) {
		$.ajax({
		url: "http://teamtreehouse.com/" + username + ".json",
		type: "GET",
		crossDomain: true,
		dataType: "json",
		async: true,
		success: function(dataBack) {
			//console.log(dataBack);
			var badges = dataBack.badges;
			$(element).html("");
			$(element).append("<h3>I have taken " + badges.length + " lessons and scored " + dataBack.points.total + " points at Treehouse!</h3><div class=\"badges\"></div>");
			badges.forEach(function(badge, i){
				if (i < 7) {
					$(".badges").append("<li class=\"badgeImages\"> <img src=' " + badge.icon_url + " '/></li>");
				}
			});
			//for(var j = 0; j < Math.min(badges.length, 7); j++) {
			// 	var badge = badges[j];
			// 	console.log(badge);
			// 	$(".badges").append("<li class=\"badgeImages\"> <img src=' " + badge.icon_url + " '/></li>");
			// }
		},
		error: function(dataBack) {
			console.log("something went wrong.");
			//this happen when call fails
		}
	});
}

