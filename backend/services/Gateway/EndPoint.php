<?php

namespace Services\Gateway;

use Sensen\API\REST;
use Sensen\Database\Drivers\PDODriver;
use Sensen\HTTP\Request\_GET;
use Sensen\HTTP\Response\JSON\Responses;
use Sensen\Secure\Firewall\API;
use Sensen\Secure\Firewall\API\Advanced;

use function Sensen\Client\Browser;
use function Sensen\Client\BrowserVersion;
use function Sensen\Client\iP;
use function Sensen\Client\Platform;



class EndPoint extends REST {


    public const REQUIRE_USER_SESSION = true;
    
    

    public function GET(

        ?String $path = '',

        PDODriver $SQL,

        Responses $Responses,

        Advanced $Firewall,

        _GET $Request
        
    ){

        global $Sensen;


        $AcceptFirewall = API::Run($Firewall, 'default');


        $Responses
        
            ->Settings('@charset', 'uft-8')

            ->Settings('@type', 'application/json')

            ->Set(null, 'Erreur inconnue')

            ->Branch('Firewall', $AcceptFirewall)

            ->Branch('Client', (object) [

                iP(),

                Browser(),

                BrowserVersion(),

                Platform(),
                
            ])
            

            ->Branch('URL', \Sensen\HTTP\URL() )

            ->Branch('RequestGET', $Request )

            ->Branch('Arguments', $path  )

            ->Branch('SQL', $SQL  )

            ->Branch('Sensen', $Sensen ?: (object) [])
            
        ;


        $this->Responses = $Responses;

        return $this;
        
    }


}