/**
 * Created by AaronG on 5/10/2015.
 */
$(document).ready(function(){

    $("#go").click(function(){ getInfo(); });

});


function getInfo(){
    var url = "http://teamtreehouse.com/"+ encodeURIComponent($('#name').val())+".json";

    console.log(url);


    $.ajax({
        url: url,
        context: document.body,

    })
        .done(function(data){

            var userName= data.name;
            var totalPoints=data.points.total;
            var image = new Image;
            image.src = data.gravatar_url;
            var totalBadges=data.badges.length;

            var img = $('<img src="' + image.src + '" "height=200 width=200" />');


            $("#userInfo").html("<strong> Name: </strong>"+userName+"</br><strong> Total Points: </strong>"+totalPoints+"</br> <strong> Total Badges: </strong>"+totalBadges+"</br>" );

            $("#img").append(img);

            console.log(data);
            console.log(image);



        });
}


