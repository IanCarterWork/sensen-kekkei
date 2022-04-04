<?php

namespace Sensen\Types;



class CObject{



    public function __construct(?object $data = null) {

        foreach( $data as $property => $value){

            $this->{ $property } = $value;
            
        }
        
    }

    
}