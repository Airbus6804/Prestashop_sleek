<?php


//require_once(__DIR__ . '/vendor/autoload.php');


//use PrestaShop\Module\Sleek\SleekOrm\SleekOrm;

require_once("src/Entities/SleekOrm/SleekOrm.php");


/*use PrestaShop\PrestaShop\Adapter\Entity\Configuration;
use PrestaShop\PrestaShop\Adapter\Entity\Language;
use \PrestaShop\PrestaShop\Adapter\Entity\Module;
use PrestaShop\PrestaShop\Adapter\Entity\Tab;*/

class Sleek extends Module {

    private SleekOrm $SleekOrm;

    public function __construct(){

        $this->name = 'sleek';
        $this->tab = 'sleek';
        $this->version = '1.0.0';
        $this->author = 'Ragonesi Alessio';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '1.7.0.0',
            'max' => '8.99.99',
        ];
        $this->bootstrap = false;

        parent::__construct();

        $this->displayName = $this->l('Sleek');
        $this->description = $this->l('Create outfits and link products to them');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

        if (!Configuration::get('MYMODULE_NAME')) {
            $this->warning = $this->l('No name provided');
        }

        $this->SleekOrm = SleekOrm::getInstance();

    }


    public function install(){

        return  
                //$this->SleekOrm->deleteTables() &&
                //$this->SleekOrm->tabs() && 
                $this->installTab() &&
                $this->SleekOrm->createTables() &&
                parent::install() &&
                $this->registerHook('displayFooterProduct') ;

    }

    public function uninstall(){


        return  
                
                $this->uninstallTab() && 
                $this->SleekOrm->deleteTables() && 
                parent::uninstall();
            
                //$this->SleekOrm->deleteTable() && 
                // && 
                
    }


    public function hookDisplayFooterProduct(array $params)
    {
        //$orm = SleekOrm::getInstance();
        //return $orm->createTable() . "<br>" . $orm->deleteTable();

        //$this->SleekOrm->createTable();

        
        return "hewll" . $this->SleekOrm->test() . $this->context->link->getAdminLink("SleekAdmin");
    
    }

    public function hookActionAdminControllerSetMedia(){


        $this->context->controller->addCSS("modules/sleek/views/adminPanel/main.css");
        $this->context->controller->addJS("modules/sleek/views/adminPanel/main.jss");

        Media::addJsDef(["ps_outfis" => "[
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
"]);

    }
    


    private function installTab()
    {

        $languages = Language::getLanguages();
        $tab = new Tab();
        $tab->class_name = 'SleekAdmin';
        $tab->module = $this->name;
        $tab->id_parent = (int) Tab::getIdFromClassName('AdminCatalog');
        foreach ($languages as $lang) {
            $tab->name[$lang['id_lang']] = 'Sleek Outfits';
        }
        try {
            $tab->save();
        } catch (Exception $e) {
            return false;
        }

        return true;


    }

    private function uninstallTab()
    {

        $tab = (int) Tab::getIdFromClassName('SleekAdmin');
        if ($tab) {
            $mainTab = new Tab($tab);
            try {
                $mainTab->delete();
            } catch (Exception $e) {
                echo $e->getMessage();

                return false;
            }
        }

        return true;

    }

}


