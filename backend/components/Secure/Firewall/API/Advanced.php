<?php

namespace Sensen\Secure\Firewall\API;

use Sensen\Secure\Firewall\API;
use Sensen\Settings\Sheet;

use function Sensen\Client\Browser;
use function Sensen\Client\BrowserVersion;
use function Sensen\Client\Platform;
use function Sensen\HTTP\isSecureProtocol;

class Advanced extends API{


    /**
     * Pare-feu
     */
    public function Firewall(String $SAID) : bool{

        $Controller = self::AllowController('Advanced');
        
        if(!$Controller){ return false; }
        
        
        $UserAgent = isset($_SERVER["HTTP_USER_AGENT"]) ? $_SERVER["HTTP_USER_AGENT"] : false;




        if($UserAgent){


            /**
             * Get Request PublicKey
             */
            $PublicKey = $_SERVER['HTTP_API_KEY'] ?: null;
            


            /**
             * Get Request Lang
             */
            $Lang = $_SERVER['HTTP_API-LANG'];
            
            
    
            /**
             * Analyse de l'url du referant
             */
            $URL = (object) parse_url($_SERVER['HTTP_REFERER'] ?: '');




            /**
             * Verification dans la whitelist
             */
            
            $CheckWhitelist = self::CheckWhitelist([

                'said' => $SAID,

                'domain' => $URL->host ?: '',

                'secure' => isSecureProtocol(),

                'platform' => Platform(),

                'browser' => Browser(),

                'browserVersion' => BrowserVersion(),

                'publickey' => $PublicKey,
                
            ]);


            if(!$CheckWhitelist){

                return false;
                
            }




            /**
             * Verification dans la blacklist
             */
            
            $CheckBlacklist = self::CheckBlacklist([

                'said' => $SAID,

                'domain' => $URL->host ?: '',

                'secure' => isSecureProtocol(),

                'platform' => Platform(),

                'browser' => Browser(),

                'browserVersion' => BrowserVersion(),

                'publickey' => $PublicKey,
                
            ]);


            if($CheckBlacklist){

                return false;
                
            }
            
            
            return true;

        }
        
        
        return false;
        
    }




}