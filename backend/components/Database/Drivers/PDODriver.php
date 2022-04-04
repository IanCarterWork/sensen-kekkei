<?php

namespace Sensen\Database\Drivers;

use Sensen\Database\Configuration;



class PDODriver{

    
    private $Key = 0;

    private $Configuration;


    public $Charset;

    public $Prefix;



    var $Settings;
    



    public function __construct(

        ?Int $Key = 0
        
    ){

        global $Sensen;

        $this->Key = $Key;
        
        $this->Configuration = $Sensen->Database->Configurations[ $Key ];
        
    }


    static public function Connect(Int $Key = 0){

        global $Sensen;

        return \is_object(
            
            $Sensen->Database->Connexions[ $Key ]
            
        ) ? $Sensen->Database->Connexions[ $Key ] : null;
        
    }


    static public function Query($Operation, String $Table = '', Array $Setter = []):?Object{

        return (new self())->_Query($Operation, $Table, $Setter);
        
    }


    public function _Query($Operation, String $Table, Array $Setter):?Object {

        global $Sensen;

        $Prepare = $Setter['Prepare'] ?? [];

        $Query = $Setter['Query'] ?? "";


        try {

            $IsConnected = self::Connect($this->Key);

            if($IsConnected){ $Co = $Sensen->Database->Connexions[ $this->Key ]; }

            if(!$IsConnected){

                $Co = new \PDO(
                    
                    "mysql:host=" . $this->Configuration->Host . ";dbname=" . $this->Configuration->Name
                        
                        . ";charset=" . ($this->Configuration->Charset ?: 'utf8mb4')
                        
                    , $this->Configuration->User
                    
                    , $this->Configuration->Password
                
                );

                $Sensen->Database->Connexions[ $this->Key ] = $Co;

            }



            $Co->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            
            // $Co->setAttribute(\PDO::PARAM_NULL, false);

            $Co->setAttribute(\PDO::ATTR_EMULATE_PREPARES, FALSE);

            $Co->setAttribute(\PDO::ATTR_STRINGIFY_FETCHES, FALSE);


            $State = $Co->prepare($Operation . " " . (($this->Settings->{'DB:Prefix'} ?: '') . $Table) . "  " . $Query . " ");

            // $IsPrepare = \is_array($Prepare) || \is_object($Prepare);

            $State->execute($Prepare);


            $return = (Object) [
                
                'State'=> $State

                , 'Connexion'=> $Co
            
            ];

        }

        catch(\PDOException $e){

            echo $e->getMessage();

            $return = null;

        }

        return $return;

    }


    public function Execute($Query) {

        global $Sensen;

        $Prepare = $Setter['Prepare'] ?? [];


        try {

            $IsConnected = self::Connect($this->Key);

            if($IsConnected){ $Co = $Sensen->Database->Connexions[ $this->Key ]; }

            if(!$IsConnected){

                $Co = new \PDO(
                    
                    "mysql:host=" . $this->Configuration->Host . ";dbname=" . $this->Configuration->Name
                        
                        . ";charset=" . ($this->Configuration->Charset ?: 'utf8mb4')
                        
                    , $this->Configuration->User
                    
                    , $this->Configuration->Password
                
                );

                $Sensen->Database->Connexions[ $this->Key ] = $Co;

            }


            $Co->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            
            // $Co->setAttribute(\PDO::PARAM_NULL, false);

            $Co->setAttribute(\PDO::ATTR_EMULATE_PREPARES, FALSE);

            $Co->setAttribute(\PDO::ATTR_STRINGIFY_FETCHES, FALSE);


            $State = $Co->prepare($Query);

            // $IsPrepare = \is_array($Prepare) || \is_object($Prepare);

            $State->execute($Prepare);


            $return = (Object) [
                
                'State'=> $State

                , 'Connexion'=> $Co
            
            ];

        }

        catch(\PDOException $e){

            $return = $e->getMessage();

        }

        return $return;

    }






    
}