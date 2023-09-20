import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';

// Comandos de seleção
class Level3 extends Level{

    public static id = "Fase 3";

    Awake(): void {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_for", "block_if", "block_if_else"]);
    }

    Init() {
        MapController.CreateItem(Item.Hidden(), 9, 7);
        MapController.CreateItem(Item.Hidden(), 13, 22);
        //MapController.CreateItem(Item.Hidden(), 7, 0);
        //MapController.CreateItem(Item.Hidden(), 0, 3);
    }
}

export default Level3;