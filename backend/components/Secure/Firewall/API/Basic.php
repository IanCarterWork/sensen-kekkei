<?php

namespace Sensen\Secure\Firewall\API;

use Sensen\Secure\Firewall\API;



class Basic extends API {

    public function Firewall() : bool{

        return self::AllowController('Basic') ? true : false;
        
    }
    
    
}