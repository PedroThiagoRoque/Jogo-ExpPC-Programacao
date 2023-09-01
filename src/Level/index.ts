import App from "../App";
import Item from "../Item";
import MapController from '../MapController';
import Player from "../Player";
class Level {

    public static id = "?";
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

    Awake() {

    }

    Init() {

    }

    Start() {

    }

    async Run() {
        this.Start();
        await this.app.Run();
        this.Finish();
        // this.Init();
        this.app.Finish();
    }

    Finish() {
    }

    Reset(){
        MapController.ClearItens();
        this.Init();
    }

    get app() {
        return this._app;
    }

    set app(app: App) {
        this._app = app;
    }
}

export default Level;