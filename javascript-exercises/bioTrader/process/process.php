<?php
session_start();

ini_set("display_errors", 1);
error_reporting(E_ALL);


function cleanInput($str){
    $str = trim($str);
    while(strpos($str, "  ") !== false){
        $str = str_replace('  ', ' ', $str);
    }
    return $str;
}


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $post = $_POST;
    extract($post);
    $name = cleanInput($name);
    $email = cleanInput($email);
    $adress = cleanInput($address);
    $city = cleanInput($city);
    $zip = cleanInput($zip);
    $phone = cleanInput($phone);
    $order = cleanInput($order);


    $errors = [];


    if(empty($address) || empty($city) || empty($zip) || empty($phone) || empty($order) || empty($name)){
        $errors[] = "Az összes mező kitöltése kötelező!";
    }


    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Helytelen email formátum!";
    }


    if(sizeof($errors) !== 0){
        $_SESSION["errors"] = $errors;
        $_SESSION["data"] = $_POST;
        header("location: ../#order");
    }
    else{
        $succesMessage = 'Rendelését rögzítettük!';
        $_SESSION["succes"] = $succesMessage;

        $contentOrder = "
        Name: $name
        Email: $email
        Address: $address
        City: $city
        Zipcode: $zip
        PhoneNumber: $phone
        Order: $order";

        file_put_contents("orders.txt", "$contentOrder", FILE_APPEND);

        header("location: ../#order");
    }

}

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $get = $_GET;
    extract($get);
    $nameBejegyzes = cleanInput($nameBejegyzes);
    $emailBejegyzes = cleanInput($emailBejegyzes);
    $bejegyzes = cleanInput($bejegyzes);

    $errorBejegyzes = [];

    if(empty($bejegyzes)){
        $errorBejegyzes[] = 'Bejegyzést kötelező megadni!';
    }

    if(sizeof($errorBejegyzes) !== 0){
        $_SESSION["errorBejegyzes"] = $errorBejegyzes;

        header("location: ../#entries");
    }
    else{
        $successBejegyzes = 'Bejegyzését rögzítettük';
        $_SESSION["successBejegyzes"] = $successBejegyzes;

        $date = date("Y-m-d H:i:s");
        $content = "
        ---------------------------------<br>
        Bejegyzés: $bejegyzes<br>
        Név: $nameBejegyzes<br>
        Email: $emailBejegyzes<br>
        Dátum: $date<br>";

        file_put_contents("bejegyzesek.txt", "$content", FILE_APPEND);

        header("location: ../#entries");
    }
}
