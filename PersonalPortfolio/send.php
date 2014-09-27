<?php

//Store the user input in a variable

$fName = $_POST['fName'];
$lName = $_POST['lName'];
$email = $_POST['email'];
$message = $_POST['message'];

//Send a message to the email that was entered
mail($email, 'Thank You for the message!', 
        'Hello ' . $fName . ' ' . $lName . ", \n\nThank you for your interest! I will respond\nto your email shortly.\n\nSincerely,\n\nBlake Murdock", 'From:no-reply@blakemurdock.ca');
mail('blakemurdo@gmail.com', 'Message from ' . $fName . ' ' . $lName, $message, 'From:' . $email);
header('location:index.html');
?>