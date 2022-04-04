<?php

namespace Smake\Modules\API;

use Sensen\Settings\Sheet;
use Smake\Console\Render;
use Smake\Module;



class GetWhitelist extends Module{



    
    public function Run(?array $argv, ?object $config = null) : ?Render{

        $sheet = Sheet::Get('api.whitelist');


        if(!$sheet->__ERROR_FILE_NOT_FOUND){
    
            unset($sheet->__ERROR_FILE_NOT_FOUND);

            
            return new Render(
                
                $sheet

            );


        }

        else{

            echo "Fichier de Paramètrage introuvable";
            
        }

        return null;
        
    }
    
    
    
}

// var_dump( readline_info() );