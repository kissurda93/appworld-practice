<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

require 'cors.php';

$data = '[
    {
       "manufacturer":"Mazda",
       "model":"626",
       "date_of_manufact":"928168229000",
       "color":"piros",
       "cylinderCap":1688
    },
    {
       "manufacturer":"Mitsubishi",
       "model":"Chariot",
       "date_of_manufact":"1481036406000",
       "color":"sárga",
       "cylinderCap":1577
    },
    {
       "manufacturer":"Mazda",
       "model":"CX-9",
       "date_of_manufact":"1477999193000",
       "color":"narancs",
       "cylinderCap":1285
    },
    {
       "manufacturer":"BMW",
       "model":"330",
       "date_of_manufact":"1571678370000",
       "color":"kék",
       "cylinderCap":3312
    },
    {
       "manufacturer":"Mercedes-Benz",
       "model":"S-Class",
       "date_of_manufact":"1410653690000",
       "color":"zöld",
       "cylinderCap":3110
    },
    {
       "manufacturer":"Acura",
       "model":"RSX",
       "date_of_manufact":"1222278495000",
       "color":"sárga",
       "cylinderCap":1273
    },
    {
       "manufacturer":"Lincoln",
       "model":"Town Car",
       "date_of_manufact":"1404805531000",
       "color":"arany",
       "cylinderCap":3959
    },
    {
       "manufacturer":"Mitsubishi",
       "model":"Galant",
       "date_of_manufact":"1322586141000",
       "color":"fekete",
       "cylinderCap":3156
    },
    {
       "manufacturer":"Buick",
       "model":"Regal",
       "date_of_manufact":"1413090857000",
       "color":"fehér",
       "cylinderCap":1067
    },
    {
       "manufacturer":"Toyota",
       "model":"Avalon",
       "date_of_manufact":"1471747961000",
       "color":"piros",
       "cylinderCap":2556
    }
]';

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    print $data;
}