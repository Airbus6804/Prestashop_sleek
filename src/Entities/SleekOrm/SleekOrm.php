<?php


/*namespace PrestaShop\Module\Sleek\SleekOrm;

use Db;
use PrestaShop\Module\Sleek\SleekImageUploadService\SleekImageUploadService;*/

require_once(__DIR__ . "/../../Services/SleekImageUploadService/SleekImageUploadService.php");

class SleekOrm {

    //Singleton
    private static $instance = null;

    private $outfitsTableName = "sleekOutfits";
    private $spotsTableName = "sleekSpots";
    private $outfitsTable;
    private $spotsTable;
    private $idColumn = "id";
    private $outfitNameColumn = "outfitName";
    private $outfitDescriptionColumn = "outfitDescription";
    private $imagePictureColumn = "outfitImage";
    private $spotXColumn = "x";
    private $spotYColumn = "y";
    private $spotIdProduct = "idProduct";
    private $spotIdOutfit = "idOutfit";

    
    private function __construct(){
        $this->outfitsTable  = _DB_PREFIX_ . $this->outfitsTableName;
        $this->spotsTable = _DB_PREFIX_ . $this->spotsTableName;
    }
    
    public static function getInstance(){
        if(self::$instance == null){
            $c = __CLASS__;
            self::$instance = new $c;
        }

        return self::$instance;
    }

    public function test(){

        return "Hello World in singleton " . _DB_PREFIX_ . SleekImageUploadService::test();

    }

    public function _deleteTabs(){
        $sql = "DELETE FROM ps_tab WHERE class_name='SleekAdmin'";

        return Db::getInstance()->execute($sql);
    }
    public function createTables()
    {

        $outfitsQuery = $this->createOutfitTable();
        $spotsQuery = $this->createSpotsTable();

        return $outfitsQuery && $spotsQuery;
    }

    private function createOutfitTable(){
        $sql = "CREATE TABLE $this->outfitsTable ($this->idColumn varchar(36), $this->outfitNameColumn varchar(50), $this->outfitDescriptionColumn varchar(500), $this->imagePictureColumn TEXT)";
        return Db::getInstance()->execute($sql);
    }

    private function createSpotsTable(){
        $sql = "CREATE TABLE $this->spotsTable ($this->idColumn varchar(36), $this->spotXColumn FLOAT, $this->spotYColumn FLOAT, $this->spotIdProduct int(10) unsigned, $this->spotIdOutfit varchar(36))";
        return Db::getInstance()->execute($sql);
    }

    public function deleteTables(){
        $sql = "DROP TABLE $this->outfitsTable";

        $outfitsQuery = Db::getInstance()->execute($sql);
        
        $sql = "DROP TABLE $this->spotsTable";

        $spotsQuery = Db::getInstance()->execute($sql);
        //$sql = "DROP TABLE $this->spotsTable";

        return $outfitsQuery && $spotsQuery; 
    }   
}