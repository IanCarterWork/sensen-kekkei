<?php

namespace Smake\Modules\API;

use Sensen\Settings\Sheet;
use Smake\Console\Field;
use Smake\Console\Render;
use Smake\Module;

use const Sensen\Contantes\ALPHA_NUMERIC;

use function Sensen\Encryption\CustomizeEncryption;



class CreateBlacklist extends Module{



    public function Fields(){

        $this
            
            ->Field(

                new Field((object) [

                    'Name' => 'said',

                    'Label' => 'Le nom de l\'entrée ?',

                    'Require' => false,

                    'Type' => "string",

                ])
                
            )

            
            ->Field(

                new Field((object) [

                    'Name' => 'domain',

                    'Label' => 'Le nom de domaine ?',

                    'Require' => false,

                    'Type' => "string",

                ])
                
            )


            
            ->Field(

                new Field((object) [

                    'Name' => 'secure',

                    'Label' => 'Utiliser HTTPS ("1" pour utiliser cette feature et "0" pour utiliser HTTP) ?',

                    'Require' => false,

                    'Type' => "bool",

                ])
                
            )


            
            ->Field(

                new Field((object) [

                    'Name' => 'platform',

                    'Label' => 'Verrouiller sur système d\'exploitation ?',

                    'Require' => false,

                    'Type' => "string",

                ])
                
            )


            
            ->Field(

                new Field((object) [

                    'Name' => 'browser',

                    'Label' => 'Verrouiller sur un navigateur ?',

                    'Require' => false,

                    'Type' => "string",

                ])
                
            )


            
            ->Field(

                new Field((object) [

                    'Name' => 'browserVersion',

                    'Label' => 'Verrouiller sur la version du navigateur ?',

                    'Require' => false,

                    'Type' => "string",

                ])
                
            )

        ;


        
    }
    

    
    public function Run(?array $argv, ?object $config = null) : ?Render{

        $input = (object) $this->Input();

        $sheet = Sheet::Get('api.whitelist');

        $sheet->list = is_array($sheet->list) ? $sheet->list : [];



        
        $serialKey = CustomizeEncryption(ALPHA_NUMERIC, 256);
        
        $input->publickey = sha1( $serialKey );

        $input->secretkey = $serialKey;

        $sheet->list[] = $input;
        
        
        

        if( 
            
            Sheet::Set('api.whitelist', $sheet) 
            
        ){

            echo "\nMise à jour éffectué avec succèss\n";
            
        }
        
        else{
            
            echo "\nEchec de la mise à jour\n";
            
        }


        // return new Render([]);

        return null;
        
    }
    
    
    
}

// var_dump( readline_info() );