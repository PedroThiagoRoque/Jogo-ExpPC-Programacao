import App from "../App";
import Item from "../Item";
import Map from '../Map';
import Player from "../Player";
class Level {

    protected playElement: HTMLDivElement;
    private _app: App;

    constructor() {
        this.playElement = document.querySelector("#play") as HTMLDivElement;
        this.playElement.onclick = this._onClick.bind(this);
        this.playElement.classList.remove("disabled");
    }

    private async _onClick() {
        this.playElement.classList.add("disabled");
        await this.Run();
        this.playElement.classList.remove("disabled");
    }

    Start() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_if", "block_if_else", "block_for"]);
        Map.CreateItem(Item.Ovo(), 0, 14);
        Map.CreateItem(Item.Ovo(), 11, 6);
        Map.CreateItem(Item.Farinha(), 11, 18);
        Map.CreateItem(Item.Leite(), 22, 3);
        Player.SetInitialPosition(5, 9);
        Map.SetHome(5, 9);
    }

    async Run() {
        await this.app.Run();
        alert("Fim");
    }

    Finish() {

    }

    get app() {
        return this._app;
    }

    set app(app: App) {
        this._app = app;
    }
}

export default Level;