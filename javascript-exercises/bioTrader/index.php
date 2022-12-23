<?php
    session_start();
    
    ini_set("display_errors", 1);
    error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require 'content/headMeta.php' ?>
</head>
<body>
    <!-- Gyakorlás képp használtam a require-t, amúgy nem lenne rá szükség ebben a feladatban!  -->
    <?php require 'content/nav.php' ?>

    <main></main>

    <?php require 'content/bodyMeta.php'?>
</body>
</html>