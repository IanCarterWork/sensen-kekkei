<?php

namespace Sensen\HTTP\Request;

use Sensen\HTTP\HTTPRequest;


class _POST extends HTTPRequest {

    public function Handler() : array{

        return $_POST;
        
    }
    
}