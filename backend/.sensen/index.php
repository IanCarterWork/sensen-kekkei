<?php

require dirname(__FILE__) . "/kernel.php";



$Sensen = (object) [

    "Root" => dirname( dirname(__FILE__) ) . "/",

    "Core" => dirname( dirname(__FILE__) ) . "/.sensen",

    "Public" => dirname( dirname(__FILE__) ) . "/public",

    "HostProtocol" => "http://",

    "Host" => null,



    "Development" => (object) [

        "Host" => "127.0.0.1",

        "Port" => 9063,
        
    ],
    


    "Alias" => (object) [],



    "Dir" => (object) [

        "Settings" => dirname( dirname(__FILE__) ) . "/settings",

        "Components" => dirname( dirname(__FILE__) ) . "/components",

        "Services" => dirname( dirname(__FILE__) ) . "/services",
        
    ],



    "Database" => (object) [

        "Connexions" => [],

        "Configurations" => []
        
    ]

];





$Sensen->Database->Configurations[] = new \Sensen\Database\Configuration(
    
    'localhost',

    'sensen_akwabamedias_online',

    'root',

    ''

);





/**
 * Refactories
 */

define('ENV_CONFIG_FILE', dirname(__FILE__) . '../sensen.config.json');

$ENV_JSON = (object) is_file(ENV_CONFIG_FILE) ? ( json_decode( file_get_contents(ENV_CONFIG_FILE) ) ?: []) : [];

$Sensen->Alias = $ENV_JSON->alias ?: (object) [];

$Sensen->Packages = $ENV_JSON->packages ?: (object) [];


