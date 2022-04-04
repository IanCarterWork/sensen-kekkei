<?php

namespace Sensen{

    global $Sensen;

    $Sensen = $Sensen ?: (object) [];




    /**
     * Loader - Begin
    */

	spl_autoload_register(function(String $ns){

        global $Sensen;

        if(is_object($Sensen->Alias)){

            foreach( $Sensen->Alias as $namespace => $dir){
                
                $match = substr($ns, 0, strlen($namespace)) == $namespace;

                
                if($match){
                    
                    $end = implode("/", explode("\\", substr($ns, strlen($namespace)) ));
                    
                    $File = $Sensen->Root . $dir . $end . ".php";
                    
                    if(is_file($File)){
                        
                        include $File;

                        break;
                        
                    }

                }

            }
                        
        }


    });


    error_reporting(0);

    $Sensen->{'Error:ShutDown'} = register_shutdown_function("Sensen\Error\ShutDown");

    $Sensen->{'Error:OldHandler'} = set_error_handler("Sensen\Error\Handler");



    /**
     * Loader - End
    */


}










namespace Sensen\Contantes{



    /**
     * Constante - Begin
     */

    const UN_QUOTE = ':strip.quote';

    const UN_NUM = ':strip.numeric';

    const UN_PAR = ':strip.par';

    const ALPHA = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

    const ALPHA_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

    const ALPHA_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

    const NUMERIC = '0 1 2 3 4 5 6 7 8 9';

    const ALPHA_NUMERIC = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

    const ALPHA_NUMERIC_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';

    const ALPHA_NUMERIC_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

    /**
     * Constante - End
     */



}







namespace Sensen\Encryption{


    function CustomizeEncryption($Sampled, $Len = 8){

        $Output = false;

        if(gettype($Sampled) == "string"){

            $Sampled = explode(" ", $Sampled);

        }

            if(is_array($Sampled)){

                $Output = "";

                for($x = $Len; $x > 0; $x--){

                    $Output .= $Sampled[ mt_rand(0, count($Sampled) - 1) ];

            }

        }

        return $Output;

    }




}







namespace Sensen\Client{

    use const Sensen\Contantes\ALPHA;
    use const Sensen\Contantes\ALPHA_NUMERIC;
    use const Sensen\Contantes\ALPHA_NUMERIC_LOWER;
    use const Sensen\Contantes\ALPHA_NUMERIC_UPPER;
    use const Sensen\Contantes\NUMERIC;

    use function Sensen\Encryption\CustomizeEncryption;

    


    const CookieID = 'sn-client-borrowing';


    


    function CreateBorrowing(?String $Splitter = '/', ?Int $Length = 32){

        return implode($Splitter, [ 

            CustomizeEncryption(ALPHA_NUMERIC_LOWER, $Length),

            CustomizeEncryption(ALPHA_NUMERIC, $Length),

            CustomizeEncryption(ALPHA, $Length),

            CustomizeEncryption(NUMERIC, $Length),

            time(),

            CustomizeEncryption(ALPHA, $Length),
            
            CustomizeEncryption(ALPHA_NUMERIC, $Length),
            
            CustomizeEncryption(ALPHA_NUMERIC_UPPER, $Length),

            CustomizeEncryption(NUMERIC, $Length)
            
        ]);
        
    }
    
    

    function Borrowing(){

        $encrypted = $_COOKIE[ CookieID ] ?: CreateBorrowing();

        if(!isset($_COOKIE[ CookieID ])){

            setcookie(
                
                CookieID, 
                
                $encrypted,

                time() + (3600 * 24 * 7 * 30)
            
            );

        }

        return $encrypted;

    }





	function Infos(){

		$UA = isset($_SERVER["HTTP_USER_AGENT"]) ? $_SERVER["HTTP_USER_AGENT"] : false;

		// var_dump($UA);exit;

		$Out = [

			"browser" => null

			, "platform" => null

			, "version" => null

			, "model" => null

		];

		if(is_string($UA)){

			$Browsers = [

				"Edg" => "Microsft Edge"

				,"Firefox"

				, "Chrome"

				, "MSIE" => "msie trident"

				, "Edge"

				, "Safari"

				, "Symbian"

				, "Ovi"

				, "Opera"

				, "OperaMini"

				, "BlackBerry"

			];

			$OS = [

				"Android" => " android "

				, "iOS"

				, "SymbianOS"

				, "BlackBerry"

				, "TV"

				, "Win" => "windows"

				, "MacOSX" => "Mac OS X"

				, "MacOS" => "Macintosh; "

				, "Linux"

			];


			foreach($Browsers as $Name => $Brow){

				$Brs = explode(" ", is_numeric($Name) ? $Brow : $Name);

				$Found = false;

				// echo "<pre>"; var_dump('Browser Type', $Brs, $Brow); echo "</pre>";

				foreach($Brs as $Browser){

					$P0 = '/' . strtolower($Browser) . '\/((?:[0-9]+\.?)+)/i';

					$P1 = '/' . strtolower($Browser) . '((?:[0-9]+\.?)+)\/((?:[0-9]+\.?)+)$/i';


					if(preg_match($P0, $UA, $About)){

						$Out['browser'] = $Brow;

						$Out['browser.Agent'] = $Browser;

						$Out['version'] = $About[1];

						$Found = true;

						break;

					}


					if(preg_match($P1, $UA, $About)){

						$Out['browser'] = $Brow;

						$Out['browser.Agent'] = $Browser;

						$Out['model'] = $About[1];

						$Out['version'] = $About[2];

						$Found = true;

						break;

					}

				}


				if($Found === true){break;}

			}


			foreach($OS as $Name => $Get){

				$GOs = explode(" ", is_numeric($Name) ? $Get : $Name);

				$Found = false;

				foreach($GOs as $O){

					$P0 = '/' . strtolower($Get) . '/i';

					if($Fo = preg_match($P0, strtolower($UA))){

						$Out['platform'] = $O;

						$Found = true;

					}

				}

				if($Found === true){break;}

			}


		}

		return $Out;

	}




    function Browser(){

		return (is_array($Get = Infos()) && isset($Get["browser"]))

            ? $Get["browser"]

            : null

        ;

    }



    function BrowserVersion(){

		return (is_array($Get = Infos()) && isset($Get["version"]))

            ? $Get["version"]

            : null

        ;

    }



    function Platform(){

		return (is_array($Get = Infos()) && isset($Get["platform"]))

            ? $Get["platform"]

            : null

        ;

    }





	function iP(){

		global $GGN;

		$Out = false;

		$Headers = [

			'HTTP_VIA'

			, 'HTTP_X_FORWARDED_FOR'

			, 'HTTP_FORWARDED_FOR'

			, 'HTTP_X_FORWARDED'

			, 'HTTP_FORWARDED'

			, 'HTTP_CLIENT_IP'

			, 'HTTP_FORWARDED_FOR_IP'

			, 'VIA'

			, 'X_FORWARDED_FOR'

			, 'FORWARDED_FOR'

			, 'X_FORWARDED'

			, 'FORWARDED'

			, 'CLIENT_IP'

			, 'FORWARDED_FOR_IP'

			, 'HTTP_PROXY_CONNECTION'

			, 'REMOTE_ADDR'

		];


		foreach($Headers as $Header){

			if(isset($_SERVER[$Header])){

				$Out = $_SERVER[$Header];

				break;

			}

		}


		return str_replace("::1", "127.0.0.1",$Out);


    }


    





}










namespace Sensen\Server{


    function DetectCli(){

        return (
            
            php_sapi_name() === 'cli' ||

            php_sapi_name() === 'cli-server'
        
        );
        
    }





}










namespace Sensen\HTTP{

    
    

    
    function isSecureProtocol(){

        return (
            
            isset($_SERVER['HTTPS']) &&
            
            ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
            
            isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
            
            $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'
            
        ) ? true : false;
        
    }
    
    

	function URL(){

		global $Sensen;

        if(!is_string($Sensen->Host)){

            $info = (( !($_SERVER["PATH_INFO"] ?: false)) ? dirname($_SERVER["PHP_SELF"]) : (''));

            $root = $_SERVER["DOCUMENT_ROOT"] .  $info;
    
    
            $path = explode($root, $Sensen->Public)[1] ?: '';
    
              $URL = (
    
              $Sensen->HostProtocol
    
              . $_SERVER["SERVER_NAME"]
    
              . (($_SERVER["SERVER_PORT"] == 80 || $_SERVER["SERVER_PORT"] == 443) ? '' : ':' . $_SERVER['SERVER_PORT'])
    
              . $info
    
              . (($Sensen->Root == $_SERVER['DOCUMENT_ROOT']) ? '' : $path)
    
              . "/"
    
            );
            
            $Built = (substr($URL, -2) == '//') ? substr($URL, 0, -1) : $URL;
            
            $Sensen->Host = $Built;
            
            return $Built;
            
        }

        return $Sensen->Host;

	};

    


}










namespace Sensen\Settings{

    class Main{

        // static public function Main(){
            
        //     return [];

        // }

        
        // public function __construct(){

        //     $instance = new self( self::Main() );



        //     return $instance;

        // }
        

        
    }
    
}









namespace Sensen\Error{


	function ShutDown(){

        // global $Sensen;

        $Error = error_get_last();

        if($Error !== NULL){

            echo "<pre>";

            $Error['type'] = $Error['type'] ?? null;

            $Error['type'] = ($Error['type'] == E_ERROR) ? 'E_ERROR' : $Error['type'];

            $Error['type'] = ($Error['type'] == E_USER_ERROR) ? 'E_USER_ERROR' : $Error['type'];

            $Error['type'] = ($Error['type'] == E_USER_WARNING) ? 'E_USER_WARNING' : $Error['type'];

            $Error['type'] = ($Error['type'] == E_USER_NOTICE) ? 'E_USER_NOTICE' : $Error['type'];


            $Messages = $Error['message'] ?: 'ShutDown';
            
            $_Messages = str_replace('Stack trace:', '', implode('<br>', array_reverse(\explode('#', $Error['message'] ?: null))));


            var_dump('ShutDown///', $Error);

            echo "</pre>";

        }


    }
    





	function Handler($Type, $Message, $File, $Line){

		// global $Sensen;


        if(!(error_reporting() & $Type)) {return;}

        echo "<pre>";

        switch ($Type) {


            case E_USER_ERROR:

                var_dump('E_USER_ERROR', $File, $Line, $Message);

                exit;

            break;


            case E_USER_WARNING:

                var_dump('E_USER_WARNING', $File, $Line, $Message);

                exit;

            break;


            case E_USER_NOTICE:

                var_dump('E_USER_NOTICE', $File, $Line, $Message);

                exit;

            break;

            default:

                var_dump('Information', $File, $Line, $Message);

                exit;

            break;

        }

        echo "</pre>";
         

        return true;

    }


}