<?php


use Sensen\HTTP\Router;

use function Sensen\Server\DetectCli;



// echo "<pre>"; var_dump( $_SERVER ); exit;



$Detected = '';

$Router = new Router( 

    DetectCli() 

    ? ( $_SERVER['PATH_INFO'] ?: '/' )
    
    : ( $_REQUEST['sensen-api'] ?: '/' )

);



/**
 * Public Endpoint
 */
$Router->Get('/:path', "Gateway", "PublicEndPoint");




/**
 * Démarrage du router
 */
if(!$Router->Run()){

    // 404 Erreur

    exit('No entry detected');
    
}

