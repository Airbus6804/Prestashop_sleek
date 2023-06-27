<?php

require_once(__DIR__ . "/../../src/Services/SleekBodyValidationService/SleekBodyValidationService.php");

class SleekAdminController extends ModuleAdminController
{

    public function __construct(){
        $this->display = 'view';
        parent::__construct();
    }

    /*

    Routes:
    Get Outfits and Spots (Join)
    Add Outfit
    Update Outfit
    Upload Image
    Delete Outfit
    Get Spots
    Add Spot
    Update Spot Product ID
    
    
    */

    public function initContent()
    {
        /*Media::addJsDef([
            "ps_outfis" => "[
            {
        \"picture\": \"https://assets-forwardvia-com.s3.amazonaws.com/images/_1200x630_crop_center-center_none/UK-Drip6.jpg\",
        \"name\": \"swag\",
        \"description\": \"This is really cool\",
        \"id\": \"bbbb\"
    },
    {
        \"picture\": \"https://assets-forwardvia-com.s3.amazonaws.com/images/_1200x630_crop_center-center_none/UK-Drip6.jpg\",
        \"name\": \"swag\",
        \"description\": \"This is really cool\",
        \"id\": \"lalal\"
    }
    ]
        "
        ]);*/


        parent::initContent();

    }

    public function ajaxProcessAddOutfit(){

        

        $entityBody = file_get_contents('php://input');

        return $this->ajaxRender(json_encode($entityBody));

    }



    /*public function ajaxProcessAddOutfit()
    {
        /*
            <div id="root"></div>
            <link rel="stylesheet" href="/modules/sleek/views/adminPanel/main.css"/>
            <script type="module" crossorigin src="/modules/sleek/views/adminPanel/main.js"/>
        

        die($this->ajaxRender('
            
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React + TS</title>
                <script type="module" crossorigin src="/modules/sleek/views/adminPanel/main.js"></script>
                <link rel="stylesheet" href="/modules/sleek/views/adminPanel/main.css">
            </head>
            <body>
                <div id="root"></div>
                
                <script>
                const ps_outfits = [
                    {
                        "picture": "https://assets-forwardvia-com.s3.amazonaws.com/images/_1200x630_crop_center-center_none/UK-Drip6.jpg",
                        "name": "swag",
                        "description": "This is really cool",
                        "id": "bbbb"
                    },
                    {
                        "picture": "https://assets-forwardvia-com.s3.amazonaws.com/images/_1200x630_crop_center-center_none/UK-Drip6.jpg",
                        "name": "swag",
                        "description": "This is really cool",
                        "id": "lalal"
                    }
                ]
                </script>
            </body>
            </html>

        '));

        /*$this->context->controller->addCSS("/modules/sleek/views/adminPanel/main.css");
        $this->context->controller->addJS("modules/sleek/views/adminPanel/main.jss");

    }*/




}