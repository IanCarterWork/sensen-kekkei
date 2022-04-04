<?php

namespace Sensen\HTTP\Response\JSON;

use Sensen\HTTP\Response\ResponseMeta;
use Sensen\Secure\Token;
use stdClass;

use function Sensen\Client\Borrowing;
use function Sensen\Client\CreateBorrowing;

class Responses{

    
    public $Meta;

    public $ClientBorrowing;

    public $ClientToken;

    
    
    
    
    /**
     * Nouveau Construct
     */
    public function __construct(?String $Title = ''){


        $this->ClientBorrowing = Borrowing() ?: null;

        $this->ClientToken = Token::Create(16, ',');

        $this->Meta = new ResponseMeta();

        $this->Meta->Title = $Title ?: null;

        
    }




    static public function isSafeBranchName(String $Name) : bool{


        if(
            $Name == 'Title' ||

            $Name == 'Response' ||

            $Name == 'About' ||

            $Name == 'ClientBorrowing'
        ){

            return false;

        }

        return true;

    }




    /**
     * Configurations
     */

    public function Settings(String $Slot, $Value){


        switch( $Slot ){


            /**
             * Response : status
             */
            case '@meta.status': $this->Meta->Status = $Value; break;


            /**
             * Response : title
             */
            case '@meta.title': $this->Meta->Title = $Value; break;


            /**
             * Response : about
             */
            case '@meta.about': $this->Meta->About = $Value; break;


            /**
             * Response : charset
             */
            case '@meta.charset': $this->Meta->Charset = $Value; break;




            /**
             * Header : Content Type
             */
            case '@type':

                $this->Meta->Type = $Value ?: $this->Meta->Type ?: "application/json";

                header(
                    
                    "content-type: " . ($this->Meta->Type) . 
                    
                    ";charset=" . ($Value ?: $this->Meta->Charset ?: 'utf8')
                
                );        

            break;
            
            

        }
        
        

        return $this;

    }
    
    
    

    
    /**
     * Définir une reponse
     */
    public function Set(?Bool $Response = null, ?String $About = null) : self{

        global $Sensen;


        $this->Response = $Response;
        
        $this->About = $About;

        return $this;
        
    }




    /**
     * Data Encoder
     */
    public function EncodeData($Data){


        switch( gettype($Data) ){




            case 'string':

                return (utf8_encode($Data));




            case 'array':

                $Out = $Data;

                foreach($Data as $Key => $Value){

                    $Out[ $Key ] = $this->EncodeData($Value);
                    
                }

                return $Out;
            



            case 'object':

                $Out = $Data;

                foreach($Data as $Key => $Value){

                    $Out->{ $Key } = $this->EncodeData($Value);
                    
                }

                return $Out;
            
                
            
        }


        return $Data;

    }

    
    


    /**
     * Ajout de branche
     */

    public function Branch(String $Name, $Payload) : self{

        if( $this->isSafeBranchName($Name) ){

            $this->{ $Name } = $this->EncodeData($Payload);
            
        }

        return $this;
        
    }





    public function DeleteBranch(String $Name) : self{

        if($this->isSafeBranchName($Name)){

            if(isset($this->{ $Name })){

                unset( $this->{ $Name } );

            }
            
        }

        return $this;
        
    }




    /**
     * Construction de la reponse au format JSON
     */
    public function BuildText($namespace = '', $instance) : String {

        $Out = [];


        switch( gettype($instance) ){



            case 'array':

                $Out[] = (is_numeric($namespace) ? "" : $namespace . " : {");

                foreach($instance as $Key => $Value){

                    $Out[] = "\t" . $this->BuildText($Key, $Value) . "";
                    
                }

                $Out[] = "\t}";

            break;




            case 'object':

                $Out[] = (is_numeric($namespace) ? "" : $namespace) . "";

                foreach($instance as $Key => $Value){

                    $Out[] = "\t" . $this->BuildText($Key, $Value) . "";
                    
                }


            break;
            



            case 'boolean':

                $Out[] = "\t" . (is_numeric($namespace) ? "" : $namespace . " : ") . "" . 
                
                    ($instance ? "true" : "false");
            
            break;
            



            default:

                $Out[] = "\t" . (is_numeric($namespace) ? "" : $namespace . " : ") . "" . 
                
                    ($instance === null ? "null" : '"' . addslashes($instance) . '"') . "";
            
            break;
                
            
        }

        // var_dump($Out);

        return implode("\n", $Out);

    }
    




    /**
     * Construction de la reponse au format JSON
     */
    public function BuildJSON($instance = null) : ?String {

        return json_encode($instance ?: new stdClass);
        
    }
    
    

    /**
     * Construction de la reponse
     */
    public function Build() : string{



        switch( ($this->Meta->Type) ){


            case 'application/json':
                
                return $this->BuildJSON($this);

            break;




            case 'text/plain':
            default:
            
                return $this->BuildText("Responses", $this);
            
            break;
            
        }
        
        
        // echo "<pre>";
        // var_dump('Building', $this);


        
    }

    
    
}