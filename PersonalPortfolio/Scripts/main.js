/**
File Name: main.js
Author: Blake Murdock
Website Name: Personal Portfolio for Blake Murdock
Purpose: This file contains all of the javascript and jQuery functions that are used by my portfolio website
*/

var speed = 'slow';

$('html, body').hide();
$(document).ready(function () {
    $('html, body').fadeIn(speed, function () {
        $('a[href], button[href]').click(function (event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function () {
                window.location = url;
            });
        });
    });
});

$("#privacy").click(function () {
    alert("jQuery Test!!");
});

$("#termsOfUse").click(function () {
    alert("jQuery Test!!");
});

// media query change
function WidthChange(mq) {

    if (mq.matches) {
        console.log("500px");
    }
    else {
        console.log("Less than 500px");
    }

};