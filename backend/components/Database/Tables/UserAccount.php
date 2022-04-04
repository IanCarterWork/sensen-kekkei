<?php

namespace Sensen\Database\Tables;

use Sensen\Database\Table;



class UserAccount extends Table{


    /**
     * @SDM\UUiD
     */
    private $iD;


    /**
     * @SDM\Username
     * @SDM\Field, length=100
     */
    private $username;


    /**
     * @SDM\Password, encryption=bcrypt
     * @SDM\Field, length=32
     */
    private $password;
    
    
}