<?php

namespace Smake;

use Sensen\Types\Smake\Module as SmakeModule;
use Smake\Console\Field;
use Smake\Console\Render;

class Module implements SmakeModule{

    public $_Fields = [];
    

    public function Field(Field $instance){

        $this->_Fields[ $instance->Name ] = $instance;
        
        return $this;

    }


    public function Fields(){

        return (object) [];

    }



    public function Input(array $entries = []){

        $this->Fields();
        
        $input = (object) $this->_Fields;

        $entries = $entries ?: [];


        $error = false;

        $errors = [];



        foreach($input as $name => $line){

            $entries[ $name ] = $entries[ $name ] ?: readline("\n- " . $line->Label . " \n");


            if($line->Type){

                settype($entries[ $name ], $line->Type);

            }
            

            if($line->Require === true){

                if( trim($entries[ $name ]) == "" ){

                    $error = true;

                    $errors[] = $line;

                }
                
            }

            
        }


        return ($error) ? $this->Input(

            $entries

        ) : $entries;
        
    }
    

    public function Run(?array $argv, ?object $config = null) : ?Render{

        return new Render([]);

    }
    

    public function __construct() {
        
    }
    

}