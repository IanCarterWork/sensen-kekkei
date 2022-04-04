<?php

namespace Sensen\Secure;

use const Sensen\Contantes\ALPHA;
use const Sensen\Contantes\ALPHA_NUMERIC;
use const Sensen\Contantes\ALPHA_NUMERIC_LOWER;
use const Sensen\Contantes\ALPHA_NUMERIC_UPPER;
use const Sensen\Contantes\NUMERIC;

use function Sensen\Encryption\CustomizeEncryption;

class Token{


    static public function Create(?Int $Length = 32, ?String $Injector = '/'){

        return implode($Injector, [ 

            CustomizeEncryption(ALPHA_NUMERIC, $Length),
            
            CustomizeEncryption(ALPHA_NUMERIC_LOWER, $Length),

            CustomizeEncryption(NUMERIC, $Length),
            
            CustomizeEncryption(ALPHA, $Length),

            time(),

            CustomizeEncryption(ALPHA, $Length),
            
            CustomizeEncryption(ALPHA_NUMERIC, $Length)
            
        ]);
        
    }

    
}