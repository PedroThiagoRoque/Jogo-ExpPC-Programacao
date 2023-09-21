import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';
import Player from "../Player";

// Comandos Sequenciais
class Level1 extends Level {

    public static id = "Fase 1";

    Awake() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup"]);
    }

    Init() {
        console.log("Init","Fase 1")
        MapController.CreateItem(Item.Pao(), 9, 9);
        MapController.CreateItem(Item.Presunto(), 8, 11);
        MapController.CreateItem(Item.Queijo(), 9, 12);
        MapController.CreateItem(Item.Pao(), 10,11);
        Player.SetInitialPosition(9, 11);
        MapController.SetHome(9, 11);
    }

    Finish(): boolean {
        const items = Player.GetInventory();
        return (items.length == 4 && items[0].name == "Pao" && items[1].name == "Queijo" && items[2].name == "Presunto" && items[3].name == "Pao");
    }
}

export default Level1;