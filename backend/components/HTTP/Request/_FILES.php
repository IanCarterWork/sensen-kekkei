<?php

namespace Sensen\HTTP\Request;

use Sensen\HTTP\HTTPRequest;



class _FILES extends HTTPRequest {

    public function Handler() : array{

        return $_FILES;
        
    }
    
}