<?php

namespace Sensen\HTTP\Request;

use Sensen\HTTP\HTTPRequest;




class _ANY extends HTTPRequest{

    public function Handler() : array{

        return $_REQUEST;
        
    }
    
}