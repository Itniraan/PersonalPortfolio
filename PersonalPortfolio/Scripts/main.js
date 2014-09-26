/**
File Name: main.js
Author: Blake Murdock
Website Name: Personal Portfolio for Blake Murdock
Purpose: This file contains all of the javascript and jQuery functions that are used by my portfolio website
*/

$(document).ready(function () {
})

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