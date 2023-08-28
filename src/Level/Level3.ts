import Level from ".";
import App from "../App";
import Item from "../Item";
import Map from '../Map';

// Comandos de seleção
class Level3 extends Level{

    public static id = "Fase 3";

    Start() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_for", "block_if", "block_if_else"]);
        Map.CreateItem(Item.Pao(), 7, 9);
        Map.CreateItem(Item.Presunto(), 11, 5);
        Map.CreateItem(Item.Queijo(), 7, 0);
        Map.CreateItem(Item.Pao(), 0, 3);
    }
}

export default Level3;