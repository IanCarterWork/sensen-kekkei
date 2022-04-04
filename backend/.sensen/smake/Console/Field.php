<?php


namespace Smake\Console;

use Sensen\Types\CObject;





class Field extends CObject{

    public $Name;

    public $Label;

    public $Require = false;

    public $Type = "string";
    
}

