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
        MapController.CreateItem(Item.Pao(), 7, 9);
        MapController.CreateItem(Item.Presunto(), 11, 5);
        MapController.CreateItem(Item.Queijo(), 7, 0);
        MapController.CreateItem(Item.Pao(), 0, 3);
    }
}

export default Level3;