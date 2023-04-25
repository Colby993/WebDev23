/*
    Student Name: colby stewart
    File Name: script.js
    Date: 4/22/2023
    */

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});
window.onload = function() {
    var userAgent = navigator.userAgent;
    var language = navigator.language;
    var platform = navigator.platform;

    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var colorDepth =  screen.colorDepth;


    document.getElementById("userAgent").innerHTML = "User agent: "+ userAgent;
    document.getElementById("language").innerHTML = "Language: "+ language;
    document.getElementById("platform").innerHTML = "Platform: "+ platform;
    document.getElementById("screenWidth").innerHTML = "Screen width: "+ screenWidth;
    document.getElementById("screenHeight").innerHTML = "Screen height: "+ screenHeight;
    document.getElementById("colorDepth").innerHTML = "Screen color depth: "+ colorDepth;
}