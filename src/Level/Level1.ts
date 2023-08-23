import Level from ".";
import App from "../App";
import Item from "../Item";
import Map from '../Map';

// Comandos Sequenciais
class Level1 extends Level{

    Start() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup"]);
        Map.CreateItem(Item.Pao(), 2, 9);
        Map.CreateItem(Item.Presunto(), 6, 9);
        Map.CreateItem(Item.Queijo(), 11, 9);
        Map.CreateItem(Item.Pao(), 11, 10);
    }
}

export default Level1;