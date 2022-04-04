<?php


namespace Smake;

use Sensen\Settings\Sheet;
use Smake\Console\Render;

use function Smake\Utilities\ArrayRange;

class Console{



    static public function AvailablesModules() : ?array{

        $get = Sheet::Get('smake.console.module');

        if(!$get->__ERROR_FILE_NOT_FOUND && isset($get->modules)){

            return $get->modules;
            
        }

        return null;
        
    }




    public function module(string $name) : ?Module {

        $modules = self::AvailablesModules();

        $module = null;

        foreach($modules as $mod){

            if($mod->name == $name){

                $module = new $mod->execute;

                break;
                
            }
            
        }
        
        return $module;

    }
    
    


    public function Run(array $argv) : bool{

        $module = $this->module($argv[1] ?: '');
        
        if($module instanceof Module){

            $Render = $module->Run( 
                
                ArrayRange($argv, 2, 0),
            
            );

            if($Render instanceof Render){

                $Render->Show();
                
            }
            
            return true;
            
        }

        return false;

    }
    
    


    
}