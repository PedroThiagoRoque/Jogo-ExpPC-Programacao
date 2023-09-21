import Item, { ItemHidden } from "./Item";
import MapController from "./MapController";

type Transform = {
    position: Vector2,
    rotation: Rotation
}

type Vector2 = {
    x: number,
    y: number;
}
type Rotation = "left" | "up" | "right" | "down";

type HashRotation = Record<Rotation, {
    next: Rotation,
    previous: Rotation
}>
class Player {

    private static playerElement: HTMLDivElement;
    private static transform: Transform;
    private static inventory: Item[] = [];
    private static current?: Item;
    private static _initialPosition = { x: 0, y: 0 };

    static Awake() {
        this.playerElement = document.querySelector("#player");
        this.transform = {
            position: this._initialPosition,
            rotation: "up"
        }
        Player.ChangeSkin("normal.png");
    }

    static GetInventory(): Item[] {
        return this.inventory;
    }

    static AddItem(item: Item) {
        this.current = item;
        const image = item instanceof ItemHidden ? "normal.png": item.image
        Player.ChangeSkin(image);
        //this.playerElement.style.backgroundImage = `url(personagem2${item.name}.png)`;
    }

    static RemoveItem() {
        const item = this.current;
        this.current = null;
        this.inventory.push(item)
        Player.ChangeSkin("normal.png");
        return item;
        //this.playerElement.style.backgroundImage = `url(personagem2${item.name}.png)`;
    }

    static ChangeSkin(image: string) {
        this.playerElement.style.backgroundImage = `url(/static/player/${image})`;
    }

    static Reset() {
        this.inventory = [];
        // this.playerElement.style.backgroundImage = `url(personagem2.png)`;
        this.Rotation("up");
        Player.ChangeSkin("normal.png");
        this.SetPosition(this._initialPosition.x, this._initialPosition.y);
    }

    static Run() {
        this.Reset();
    }

    static Move() {
        let { x, y } = this.transform.position;
        switch (this.rotation) {
            case "up":
                x -= 1;
                break;
            case "down":
                x += 1;
                break;
            case "left":
                y -= 1;
                break;
            case "right":
                y += 1;
                break;
        }
        const home = MapController.GetHome();
        if (home.x == x && home.y == y) {
            this.RemoveItem();
        }
        if (!MapController.IsCollider(x, y))
            this.SetPosition(x, y);
    }

    static hashRotation: HashRotation = {
        left: { previous: "down", next: "up" },
        up: { previous: "left", next: "right" },
        right: { previous: "up", next: "down" },
        down: { previous: "right", next: "left" },
    }

    //["left","up","right","down"]; 

    static Left() {
        this.Rotation(Player.hashRotation[this.rotation].previous);
    }

    static Right() {
        this.Rotation(Player.hashRotation[this.rotation].next);
    }

    static Rotation(direction: Rotation) {
        this.transform.rotation = direction;
        const angle: Record<Rotation, number> = {
            up: 0,
            left: 270,
            right: 90,
            down: 180,
        }
        this.playerElement.style.transform = `rotate(${angle[direction]}deg)`;
    }

    static SetPosition(x: number, y: number) {
        if (MapController.IsCollider(x, y) == false) {
            this.transform.position = { x, y }
            this.UpdatePosition();
        } else {
            console.log("Oi");
            document.querySelector("#message").innerHTML = "Não é possível caminhar";
        }
        // this._position = Map.GetPosition(0, 0);
    }

    static UpdatePosition() {
        const { x, y } = this.worldPosition;
        this.playerElement.style.top = x + "px";
        this.playerElement.style.left = y + "px";
    }

    public static SetInitialPosition(x: number, y: number) {
        this._initialPosition = { x, y };
        this.SetPosition(this._initialPosition.x, this._initialPosition.y);
    }

    public static get position() {
        return this.transform.position;
    }
    public static get worldPosition() {
        const { x, y } = this.transform.position;
        return MapController.GetPosition(x, y);
    }
    public static get rotation() {
        return this.transform.rotation;
    }

    public static get initialPosition() {
        return this._initialPosition;
    }
}

export default Player;