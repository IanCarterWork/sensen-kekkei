<?php


namespace Sensen\Types\Smake;

use Smake\Console\Render;




interface Module{

    public function Run(?array $argv, ?object $config) : ?Render;
    
}