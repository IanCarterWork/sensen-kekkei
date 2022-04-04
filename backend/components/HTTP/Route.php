<?php

namespace Sensen\HTTP;

use Sensen\API\REST;
use Sensen\Framework\MethodDependencies;




class Route {

    private $Path;

    private $Callable;

    private $Matches = [];

    private $Params = [];



    public function __construct( String $Path, $Callable){
    
        $this->Path = trim($Path, '/');

        $this->Callable = $Callable;
    
    }



    public function routeMatch($url = ''){
    
        $url = trim($url, '/');
    
        $Path = preg_replace_callback('#:([\w]+)#', [$this, 'paramMatch'], $this->Path);

        // $Path = preg_replace('#:([\w]+)#', '([^/]+)', $this->Path);
    
        $regex = "#^$Path$#i";


        
        // var_dump('routeMatch', $url, $Path, preg_match($regex, $url, $Matches),  );exit;
    
        
        
        if(!preg_match($regex, $url, $Matches)){
            
            return false;
            
        }

        array_shift($Matches);
    
        $this->Matches = $Matches;
    
        return true;
    
    }




    public function with($param, $regex){

        $this->params[$param] = str_replace('(', '(?:', $regex);
        
        return $this; // On retourne tjrs l'objet pour enchainer les arguments
        
    }

    



    private function paramMatch($match){
        
        if(isset($this->Params[$match[1]])){
            
            return '(' . $this->Params[$match[1]] . ')';
            
        }

        return '([^/]+)';
        
    }


    public function getUrl($params){
        $path = $this->path;
        foreach($params as $k => $v){
            $path = str_replace(":$k", $v, $path);
        }
        return $path;
    }
    
    


    public function call(){

        
        if(is_string($this->Callable)){
            
            $RequestMethod = $_SERVER['REQUEST_METHOD'] ?: 'GET';
            
            $Params = explode('#', $this->Callable);
            
            $Namespace = "Services\\" . $Params[0] . "\\EndPoint";

            $Method = $Params[1] ?: $RequestMethod;

            
            $Service = new $Namespace();

            $Dependencies = array_merge(
                
                MethodDependencies::Find($Service, $Method, $this->Matches) ?: [],
                
                ($this->Matches ?: [])
            
            );
        
            return call_user_func_array([$Service, $Method], $Dependencies );
            
        } 
        
        else {
            
            return call_user_func_array($this->Callable, $this->Matches);
    
        }
    
    }

}

