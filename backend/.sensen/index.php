<?php



$Sensen = (object) [

    "Root" => dirname( dirname(__FILE__) ) . "/",

    "Core" => dirname( dirname(__FILE__) ) . "/.sensen",

    // "Public" => dirname( dirname(__FILE__) ) . "/public",

    "HostProtocol" => "http://",

    "Host" => null,


    "Development" => (object) [],

    // "Development" => (object) [

    //     "Host" => "127.0.0.1",

    //     "Port" => 9063,
        
    // ],
    


    "Paths" => (object) [],

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






/**
 * Refactories
 */

define('ENV_CONFIG_FILE', dirname(__FILE__) . '/../sensen.config.json');

$ENV_JSON = (object) (is_file(ENV_CONFIG_FILE) ? ( json_decode( file_get_contents(ENV_CONFIG_FILE) ) ?: []) : []);

$Sensen->Alias = isset($ENV_JSON->alias) ? $ENV_JSON->alias : (object) [];

$Sensen->Packages = (isset($ENV_JSON->packages)) ? $ENV_JSON->packages : (object) [];

$Sensen->Paths = (isset($ENV_JSON->paths)) ? $ENV_JSON->paths : (object) [];

$Sensen->Development = (isset($ENV_JSON->development)) ? $ENV_JSON->development : (object) [];



/**
 * Define "Development"
 */
if(isset($ENV_JSON->development) && (is_array($ENV_JSON->development) || is_object($ENV_JSON->development))){

    foreach($ENV_JSON->development as $key => $value){

        $Sensen->Development->{ ucfirst($key) } = dirname( dirname(__FILE__) ) . $value;
        
    }

}



/**
 * Define Paths
 */
if(isset($ENV_JSON->paths) && (is_array($ENV_JSON->paths) || is_object($ENV_JSON->paths))){

    foreach($ENV_JSON->paths as $key => $path){

        $Sensen->Paths->{ ucfirst($key) } = dirname( dirname(__FILE__) ) . $path;
        
    }

}



// print_r($Sensen->Paths);exit;



require dirname(__FILE__) . "/kernel.php";


/**
 * Database Configuration
 */
$Sensen->Database->Configurations[] = new Sensen\Database\Configuration(
    
    'localhost',

    'sensen_futon_test',

    'root',

    ''

);

