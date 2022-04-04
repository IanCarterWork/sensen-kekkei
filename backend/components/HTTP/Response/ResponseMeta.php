<?php

namespace Sensen\HTTP\Response;

use Sensen\Types\CObject;




class ResponseMeta extends CObject{

    public $Status = false;

    public $Title;

    public $About;

    public $Charset = 'utf8';

    public $Type = 'application/json';
    
}