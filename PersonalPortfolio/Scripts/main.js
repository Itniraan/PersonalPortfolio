/**
File Name: main.js
Author: Blake Murdock
Website Name: Personal Portfolio for Blake Murdock
Purpose: This file contains all of the javascript and jQuery functions that are used by my portfolio website
*/

// PAGE TRANSITION
// Speed of fade in transition
var speed = 'slow';
//Hide html and body, until the page is loaded, for proper fade in
$('html, body').hide();
$(document).ready(function () {
    // Begin fade in function
    $('html, body').fadeIn(speed, function () {
        //When a <a href> is clicked
        $('a[href]').click(function (event) {
            // Assign variable url to the attribute of the href (The web address)
            var url = $(this).attr('href');
            // Prevent page from changing when href==# (This is used to stop page transition for my slider arrows
            if (url.indexOf('#') == 0) return; 
            // Prevent immediate loading of link
            event.preventDefault();
            // Fade out current window
            $('html, body').fadeOut(speed, function () {
                // Load url variable, now that screen is faded out
                window.location = url;
                // Remove jsNotLoaded class. This prevents the page flicker during the time between page being loaded and document being ready (When this function triggers)
                $('html').removeClass('jsNotLoaded');
            });
        });
    });
});