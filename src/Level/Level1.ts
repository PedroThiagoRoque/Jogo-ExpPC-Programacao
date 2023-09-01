import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';
import Player from "../Player";

// Comandos Sequenciais
class Level1 extends Level{

    public static id = "Fase 1";

    Awake(){
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup"]);
    }

    Init() {
        MapController.CreateItem(Item.Pao(), 9, 2);
        MapController.CreateItem(Item.Presunto(), 9, 5);
        MapController.CreateItem(Item.Queijo(), 9, 11);
        MapController.CreateItem(Item.Pao(), 10, 11);
        Player.SetInitialPosition(9, 4);
        MapController.SetHome(9, 4);
    }
}

export default Level1;