<?php

namespace Smake\Modules\Serve;

use Sensen\Settings\Sheet;
use Smake\Console\Render;
use Smake\Module;



class Run extends Module{



    
    public function Run(?array $argv, ?object $config = null) : ?Render{

        global $Sensen;

        
        
        switch( strtolower($argv[0] ?: '') ){
            
            
            
            
            /**
             * Run Dev Serve
             */
            
            case '-run':
                
                exec(
                    
                    'cd ' . $Sensen->Public . 
                    
                    ' && php -S ' . $Sensen->Development->Host . ':' . $Sensen->Development->Port . ' '
                
                );

            break;
            
            
            
            
        }
        

        return null;
        
    }
    
    
    
}

// var_dump( readline_info() );