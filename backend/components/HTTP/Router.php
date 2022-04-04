<?php

namespace Sensen\HTTP;

use Sensen\API\REST;
use Sensen\HTTP\Response\JSON\Responses;

use function Sensen\Server\DetectCli;

class Router{


    private $url = '';

    private $Routes = [

        "GET" => [],

        "POST" => [],

        "PUT" => [],

        "DELETE" => [],
        
    ]; 

    private $NamedRoutes = [];



    public function __construct($url){
        
        $this->url = $url;
        
    }
    

    public function Get(String $Path, $Callback, ?String $Name = null){
        
        return $this->Push($Path, $Callback, $Name, 'GET');
        
    }



    public function Post(String $Path, $Callback, ?String $Name = null){

        return $this->Push($Path, $Callback, $Name, 'POST');
        
    }



    public function Put(String $Path, $Callback, ?String $Name = null){

        return $this->Push($Path, $Callback, $Name, 'PUT');
        
    }


    
    public function Delete(String $Path, $Callback, ?String $Name = null){

        return $this->Push($Path, $Callback, $Name, 'DELETE');
        
    }


    private function Push(String $Path, $Callback, ?String $Name = null, string $Method = "GET"){
    
        $Route = new Route($Path, $Callback);
    
        $this->Routes[$Method][] = $Route;
    
        if(is_string($Callback) && $Name === null){
    
            $Name = $Callback;
    
        }
    
        if($Name){
    
            $this->NamedRoutes[$Name] = $Route;
    
        }
    
        return $Route;

    }





    public function ParseRoute($instance){


        if($instance instanceof Responses){

            echo $instance->Build();

            return true;
            
        }



        if($instance instanceof REST){

            // var_dump('API Rest Returned', $instance->Responses instanceof Responses);


            if($instance->Responses instanceof Responses){

                echo $instance->Responses->Build();

            }

            return true;
            
        }
        

        return false;
        
    }
    


    public function Run(){

        $Method = $_SERVER['REQUEST_METHOD'] ?: 'GET';
        
    
        if(!isset($this->Routes[$Method])){
    
            exit ('REQUEST_METHOD does not exist');
    
        }
        

        foreach($this->Routes[$Method] as $route){
            
            if($route->routeMatch($this->url)){

                return $this->ParseRoute(

                    $route->call()

                );
    
            }
    
        }
    
        
        return false;
        
    }
    
    


    public function url($name, $params = []){
   
        if(!isset($this->NamedRoutes[$name])){
   
            exit('No route matches this name');
   
        }
   
        return $this->NamedRoutes[$name]->getUrl($params);
   
    }
    
}


