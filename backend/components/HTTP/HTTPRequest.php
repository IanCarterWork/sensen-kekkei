<?php

namespace Sensen\HTTP;

use Sensen\Types\HTTP\HTTPRequest as HTTPHTTPRequest;

class HTTPRequest implements HTTPHTTPRequest{

    
    public function __construct(){

        $Input = $this->Handler();

        if(is_array($Input)){

            foreach($Input as $Key => $Input){

                $this->{ $Key } = $Input;

            }

        }

        
    }


    public function Handler() : array{

        return [];
        
    }
    
    
    
}