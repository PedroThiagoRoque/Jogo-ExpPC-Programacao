import Level from ".";
import App from "../App";
import Item from "../Item";
import Map from '../Map';

// Comandos Sequenciais
class Level1 extends Level{

    Start() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup"]);
        Map.CreateItem(Item.Pao(), 7, 9);
        Map.CreateItem(Item.Presunto(), 11, 5);
        Map.CreateItem(Item.Queijo(), 7, 0);
        Map.CreateItem(Item.Pao(), 0, 3);
    }
}

export default Level1;