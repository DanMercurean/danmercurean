<?php
cors();
########### CONFIG ###############
$recipient = 'danymercurean@yahoo.com';
$redirect = 'index.html';
########### CONFIG END ###########
########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################
###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        $subject = "Contact From " . $_POST['name'] ;
        $headers = "From:  noreply@dan-mercurean.developerakademie.com";

        echo 'Sending email '. $recipient . $subject .  $_POST['email'] .  $_POST['message'];

        mail($recipient, $subject, 'Absender: '. $_POST['email'] . "\r\n\r\n\r\n".  $_POST['message'], $headers);
        // header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
function cors()
{
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    } 
    header("Access-Control-Allow-Origin: *");
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
}