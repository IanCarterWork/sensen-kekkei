<?php

namespace Sensen\Settings;


class Sheet{


    public $__ERROR_FILE_NOT_FOUND = false;
    

    
    public function __construct(String $Path) {

        global $Sensen;
        
        $File = $Sensen->Dir->Settings . "/" . $Path . ".settings";


        if(is_file($File)){

            $Data = json_decode(file_get_contents($File));

            foreach( $Data as $Prop => $Value){

                $this->{ $Prop } = $Value;
                
            }
            
        }

        else{

            $this->__ERROR_FILE_NOT_FOUND = true;
            
        }
        
        
    }





    static public function Get(String $Path) : self{

        return new self($Path);
        
    }





    static public function Set(String $Path, $Value) : bool {

        global $Sensen;
        
        $File = $Sensen->Dir->Settings . "/" . $Path . ".settings";

        $Dir = dirname($File);


        if(!is_dir($Dir)){

            mkdir($Dir, 0755, true);
            
        }


        if($Value instanceof Sheet){

            unset($Value->__ERROR_FILE_NOT_FOUND);
            
        }
        
        return file_put_contents($File, json_encode($Value));
        
    }
    
    
    
}


