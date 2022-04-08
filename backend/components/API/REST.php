<?php

namespace Sensen\API;






class REST{
    

    /**
     * Restrict the api to native user authentication
     */
    public const REQUIRE_USER_SESSION = false;
    
    


    /**
     * Restrict the api to a user access level
     */

    /** ROOT 5.0 : Smaller Level */
    public const SMALLER_ROOT_LEVEL = false;
    
    /** ROOT 5.2 : Small Level */
    public const SMALL_ROOT_LEVEL = false;
    
    /** ROOT 5.4 : Medium Level */
    public const MEDIUM_ROOT_LEVEL = false;
    
    /** ROOT 5.6 : High Level */
    public const HIGH_ROOT_LEVEL = false;
    
    /** ROOT 5.8 : Higher Level */
    public const HIGHER_ROOT_LEVEL = false;

    
    

    /** ADMIN 4.0 : Smaller Level */
    public const SMALLER_ADMIN_LEVEL = false;
    
    /** Admin 4.2 : Small Level */
    public const SMALL_ADMIN_LEVEL = false;
    
    /** Admin 4.4 : Medium Level */
    public const MEDIUM_ADMIN_LEVEL = false;
    
    /** Admin 4.6 : High Level */
    public const HIGH_ADMIN_LEVEL = false;
    
    /** Admin 4.8 : Higher Level */
    public const HIGHER_ADMIN_LEVEL = false;

    


    /** MANAGER 3.0 : Smaller Level */
    public const SMALLER_MANAGER_LEVEL = false;
    
    /** MANAGER 3.2 : Small Level */
    public const SMALL_MANAGER_LEVEL = false;
    
    /** MANAGER 3.4 : Medium Level */
    public const MEDIUM_MANAGER_LEVEL = false;
    
    /** MANAGER 3.6 : High Level */
    public const HIGH_MANAGER_LEVEL = false;
    
    /** MANAGER 3.8 : Higher Level */
    public const HIGHER_MANAGER_LEVEL = false;

    


    /** EDITOR 2.0 : Smaller Level */
    public const SMALLER_EDITOR_LEVEL = false;
    
    /** EDITOR 2.2 : Small Level */
    public const SMALL_EDITOR_LEVEL = false;
    
    /** EDITOR 2.4 : Medium Level */
    public const MEDIUM_EDITOR_LEVEL = false;
    
    /** EDITOR 2.6 : High Level */
    public const HIGH_EDITOR_LEVEL = false;
    
    /** EDITOR 2.8 : Higher Level */
    public const HIGHER_EDITOR_LEVEL = false;




    /** USER 1.0 : Smaller Level */
    public const SMALLER_USER_LEVEL = false;
    
    /** USER 1.2 : Small Level */
    public const SMALL_USER_LEVEL = false;
    
    /** USER 1.4 : Medium Level */
    public const MEDIUM_USER_LEVEL = false;
    
    /** USER 1.6 : High Level */
    public const HIGH_USER_LEVEL = false;
    
    /** USER 1.8 : Higher Level */
    public const HIGHER_USER_LEVEL = false;

    


    /** GUEST O.O : Smaller Level */
    public const SMALLER_GUEST_LEVEL = false;
    
    /** GUEST 0.2 : Small Level */
    public const SMALL_GUEST_LEVEL = false;
    
    /** GUEST 0.4 : Medium Level */
    public const MEDIUM_GUEST_LEVEL = false;
    
    /** GUEST 0.6 : High Level */
    public const HIGH_GUEST_LEVEL = false;
    
    /** GUEST 0.8 : Higher Level */
    public const HIGHER_GUEST_LEVEL = false;




    


    /**
     * @var ?Responses Sensen\API\Responses
     */
    public $Responses = null;
    
    



    /**
     * Construct
     */
    public function __construct() {

        // var_dump('The API COnstruct', $this::REQUIRE_USER_SESSION ); exit;

        if($this->REQUIRE_USER_SESSION === true){

            

        }
        
    }
    
    
    
}