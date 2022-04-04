<?php

namespace Sensen\Framework;


class MethodDependencies{

    static public function Find(object $Class, String $Method, ?array $Args = []){

        $Instances = [];

        $Found = (new \ReflectionMethod($Class, $Method))->getParameters() ?: null;

        if($Found){

            foreach($Found as $Index => $Dependency){

                $Type = $Dependency->getType() ?: null;

                $Instance = $Args[ $Index ];
                
                if($Type){

                    $Name = $Type->getName();

                    if(

                        $Name == 'string' ||

                        $Name == 'boolean' ||

                        $Name == 'integer' ||

                        $Name == 'double' ||

                        $Name == 'float' ||

                        $Name == 'array'
                        
                    ){ }

                    else{
    
                        $TypeClass = $Type->getName();
        
                        $Instance = new $TypeClass();
                        
                    }

                }
    
                // else{ $Instance = $Dependency->name; }


                $Instances[] = $Instance;

            }

            
        }
        

        // var_dump( $Instance ); exit(1);


        return $Instances;
        
    }
    
}