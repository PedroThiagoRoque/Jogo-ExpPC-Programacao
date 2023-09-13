import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';

// Comandos de Repetição
class Level2 extends Level {

    public static id = "Fase 2";

    Awake() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_for"]);
    }
    
    Init() {
        MapController.CreateItem(Item.Pao(), 7, 11);
        MapController.CreateItem(Item.Presunto(), 12, 11);
        MapController.CreateItem(Item.Queijo(), 7, 0);
        MapController.CreateItem(Item.Pao(), 0, 3);
    }
}

export default Level2;