$(document).ready(function(){
	$("#event-form").submit(function() {
	var eventType = $("#event-type").val();
	getEvents(eventType);
	return false;
	});
});

function getEvents(eventType) {
		$.ajax({
		url: "https://api.meetup.com/2/open_events",
		data: { 
			state: "CO", 
			city: "Boulder",
			country: "US",
			zip: "80302",
			text: eventType,
			sign: true,
			fields: "group_photo", 
			key: "302427c6c456b337434145c69724a34"
		},
		type: "GET",
		crossDomain: true,
		dataType: "jsonp",
		success: function(data) {
			console.log(data);
			var events = data.results;
			$("#events").html("");
			for(var j = 0; j < events.length; j++) {
				var meetup = events[j];
				console.log(meetup);
				$("#events").append("<h3>" + meetup.name + "</h3> <div class='dash'></div>");
				$("#events").append("<div>" + meetup.description + "</div>");
				$("#events").append("<p><a href='" + meetup.event_url + "'>" + meetup.event_url + "</a></p>");
				if (meetup.hasOwnProperty("group") && meetup.group.hasOwnProperty("group_photo") && meetup.group.group_photo.hasOwnProperty("photo_link")) {
					$("#events").append("<p><img src='" + meetup.group.group_photo.photo_link + "'> </p>");
				}
			}
		},
		error: function(data) {
			console.log("something went wrong.");
			//this happen when call fails
		}
	});
}
