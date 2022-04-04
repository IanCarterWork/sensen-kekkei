<?php

namespace Sensen\Secure\Firewall;

use Sensen\HTTP\Response\JSON\Responses;
use Sensen\Settings\Sheet;
use Sensen\Types\Secure\Firewall\API as FirewallAPI;


class API implements FirewallAPI{



    /**
     * Liste blanche
     */
    static function CheckWhitelist(array $record) : bool{

        $list = Sheet::Get('api.whitelist');

        $return = false;



        if($list->__ERROR_FILE_NOT_FOUND){

            return false;
            
        }


        if(!is_array($list->list)){

            return false;
            
        }
        

        foreach( $list->list as $input){

            $bound = 0;

            $total = 0;

            unset( $input->secretkey );

            unset( $input->publickey );

            
            /**
             * Check
             */
            
            foreach($input as $key => $dump){

                $total++;

                if(isset($record[ $key ])){

                    if(
                        
                        $record[ $key ] == $dump || 
                        
                        (isset($record[ $key ]) && $dump == "*" ) ||

                        (is_numeric($dump) && is_numeric($record[ $key ]) && ($record[ $key ] >= $dump) )
                        
                    ){
                        
                        $bound++;
                        
                    }
                     
                }
                
                
            }
            


            if($total > 0 && $bound >= $total){

                $return = true;
                
                break;
                
            }

            
        }


        return $return;
        
    }





    /**
     * Liste blanche
     */
    static function CheckBlacklist(array $record) : bool{

        $list = Sheet::Get('api.whitelist');

        $return = true;



        if($list->__ERROR_FILE_NOT_FOUND){

            return true;
            
        }


        if(!is_array($list->list)){

            return true;
            
        }
        

        foreach( $list->list as $input){

            $bound = 0;

            $total = 0;

            unset( $input->secretkey );

            unset( $input->publickey );

            
            /**
             * Check
             */
            
            foreach($input as $key => $dump){

                $total++;

                if(isset($record[ $key ])){

                    if(
                        
                        $record[ $key ] == $dump || 
                        
                        (isset($record[ $key ]) && $dump == "*" ) ||

                        (is_numeric($dump) && is_numeric($record[ $key ]) && ($record[ $key ] >= $dump) )
                        
                    ){
                        
                        $bound++;
                        
                    }
                     
                }
                
                
            }
            


            if($total > 0 && $bound >= $total){

                $return = false;
                
                break;
                
            }

            
        }


        return $return;
        
    }




    /**
     * Autoriser le contrôleur
     */
    static function AllowController(String $Level = 'basic') : ?Object{

        $Controller = Sheet::Get('api.controller.allow');


        if(is_object($Controller) && isset( $Controller->{ $Level })){

            $Allow = $Controller->{ $Level };

            foreach($Allow as $Prop => $Value){

                header('Access-Control-Allow-' . $Prop . ': ' . $Value);
                
            }


            return $Allow;

        }

        return null;
        
    }
    


    /**
     * Pare-feu
     */
    public function Firewall(String $SAID) : bool{

        return true;
        
    }


    /**
     * Démarrage
     */
    static function Run(API $Instance, String $SAID) : bool{
        
        return $Instance->Firewall($SAID);
        
    }

}