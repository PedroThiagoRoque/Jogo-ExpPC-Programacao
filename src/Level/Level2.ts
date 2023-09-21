import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';
import Player from "../Player";

// Comandos de Repetição
class Level2 extends Level {

    public static id = "Fase 2";

    Awake() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_for"]);
    }
    
    Init() {
        console.log("Init","Fase 2")
        MapController.CreateItem(Item.Ovo(), 7, 11);
        MapController.CreateItem(Item.Leite(), 12, 11);
        MapController.CreateItem(Item.Farinha(), 7, 0);
        MapController.CreateItem(Item.Ovo(), 0, 3);
        Player.SetInitialPosition(9, 11);
        MapController.SetHome(9, 11);
    }

    Finish(): boolean {
        const items = Player.GetInventory();
        return items.length == 4;
    }
}

export default Level2;