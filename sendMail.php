<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'danymercurean@yahoo.com';
        $subject = "Contact From $name <$email>";
        $headers = "From:  noreply@dan-mercurean.developerakademie.com";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}