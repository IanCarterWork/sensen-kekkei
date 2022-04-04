<?php

namespace Sensen\Secure\Firewall\API;

use Sensen\Secure\Firewall\API;



class Medium extends API {

    public function Firewall() : bool{

        return self::AllowController('Medium') ? true : false;
        
    }
    
    
}