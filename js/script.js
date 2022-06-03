// WEB303 Assignment 2
// Aayushi Patel
// 0787383

$(document).ready(function(){

    $("#prospect").click(function(){
        $("#content");
        $('div#content').load("prospect.html").fadeIn(200);
    });

    $("#convert").click(function(){
        $("#content");
        $('div#content').load("convert.html").fadeIn(200);
    });

    $("#retain").click(function(){
        $("#content");
        $('div#content').load("retain.html").fadeIn(200);
    });
});

