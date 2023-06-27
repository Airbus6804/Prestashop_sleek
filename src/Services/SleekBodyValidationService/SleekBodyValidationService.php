<?php



class SleekBodyValidationService
{

    static public function isOutfit(array $body): bool
    {

    

        if (!is_array($body))
            return false;

        if (!(  isset($body["name"]) &&
                isset($body["description"]) &&
                isset($body["id"]) &&
                isset($body["picture"])
            )) return false; 

        if (!( is_string($body["name"]) && 
               is_string($body["description"]) &&
               is_string($body["id"]) &&
               is_string($body["picture"])
            )) return false;

        return true;

    }

    static public function isSpot(array $body):bool
    {
        if (!is_array($body))
            return false;

        
        if(!(   
                isset($body["x"]) &&
                isset($body["y"]) &&
                isset($body["id"]) &&
                isset($body["idProduct"]) && 
                isset($body["idOutfit"])
            )) return false;

        
        if(!(   
                (is_float($body["x"]) || is_int($body["x"])) &&
                (is_float($body["y"]) || is_int($body["y"])) &&
                is_string($body["id"]) &&
                is_int($body["idProduct"]) && 
                is_string($body["idOutfit"])
        )) return false;

        return true;
        
    }




}
