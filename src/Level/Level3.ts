import Level from ".";
import App from "../App";
import Item from "../Item";
import MapController from '../MapController';
import Player from "../Player";

// Comandos de seleção
class Level3 extends Level{

    public static id = "Fase 3";

    Awake(): void {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_for", "block_if_else"]);
    }

    Init() {
        console.log("Init","Fase 3")
        MapController.CreateItem(Item.Hidden("Chocolate"), 9, 7);
        MapController.CreateItem(Item.Hidden("Ovo"), 13, 22);
        Player.SetInitialPosition(9, 11);
        MapController.SetHome(9, 11);
    }

    Finish(): boolean {
        const items = Player.GetHand();
        return items?.name == "Chocolate" ?? false;
    }

}

export default Level3;