<?php

namespace Sensen\HTTP\Request;

use Sensen\HTTP\HTTPRequest;




class _GET extends HTTPRequest{

    public function Handler() : array{

        return $_GET;
        
    }
    
}