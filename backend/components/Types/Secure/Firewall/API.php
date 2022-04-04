<?php

namespace Sensen\Types\Secure\Firewall;

use Sensen\Secure\Firewall\API as FirewallAPI;

interface API{

    public function Firewall(String $SAID) : bool;

    static function Run(FirewallAPI $Instance, String $SAID) : bool;
    
}


