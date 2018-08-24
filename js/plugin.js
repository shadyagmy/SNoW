/*global $, console, document, window*/

$(document).ready(function () {
    "use strict";
    
     //adjusting header height
    $("header").height($(window).height());

    $(window).resize(function () {
    
        $("header").height($(window).height());
    });
    
    $("#pricingB").on("click", function (){
        $("body,html").animate({
            scrollTop: ($("#pricing").offset().top - 10)
        }, 700)

    });

    $("#inviteB").on("click", function (){
        $("body,html").animate({
            scrollTop : ($("#requestInvite").offset().top -10)
        },700)
    });
    
 
});