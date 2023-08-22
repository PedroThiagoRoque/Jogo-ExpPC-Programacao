import Item from "./Item";

type MapType = Array<Array<Item | true | null>>
class Map {

    private static mapElement: HTMLDivElement;
    private static homeElement: HTMLDivElement;
    private static positionHome = { x: 0, y: 0 };
    private static columns = 23;
    private static lines = 19;
    private static size = 30;
    private static map: MapType = [];

    static Start() {
        this.mapElement = document.querySelector("#map");
        this.homeElement = document.querySelector("#home");
        this.map = [];
        for (let i = 0; i < this.columns; i++) {
            const gridItem = document.createElement("div");
            gridItem.setAttribute("x", String(i));
            const items = [] as MapType[0];
            for (let j = 0; j < this.lines; j++) {
                const gridItemItem = document.createElement("div");
                gridItemItem.setAttribute("y", String(i));
                gridItemItem.setAttribute("x", String(j));
                if (i == 0 || i == 11 || i == 22 || j == 0 || j == 9 || j == 18) {
                    gridItemItem.classList.add("border");
                    items.push(null);
                    gridItemItem.setAttribute("solid", "false");
                    gridItemItem.innerHTML = `<span>${i}x${j}</span>`;
                } else {
                    gridItemItem.setAttribute("solid", "true");
                    items.push(true);
                }
                gridItem.append(gridItemItem);
            }
            this.map.push(items);
            this.mapElement.querySelector(".grid").append(gridItem)
        }
    }

    static CreateItem(item: Item, x: number, y: number) {
        this.SetMap(x, y, item);
        /*
        const item = new Item("Queijo", "queijo.png");
        this.SetMap(x, y, item);
    
        const item2 = new Item("Pao", "pao.png");
        this.SetMap(x, y-4, item2);
    
        const item3 = new Item("Presunto", "presunto.png");
        this.SetMap(x, y-8, item3);*/
    }

    static GetItem(x: number, y: number): Item | false {
        const item = this.GetMap(x, y);
        if (item instanceof Item) return item;
        return false;
    }
    static RemoveItem(x: number, y: number): Item | false {
        const item = this.GetItem(x, y);
        if (item instanceof Item) {
            this.SetMap(x, y, true);
            return item;
        }
        return false;
    }

    static IsCollider(x: number, y: number): boolean {
        if (x < 0 || y < 0 || x > this.lines - 1 || y > this.columns - 1) {
            return true;
        }
        else if (x > 0 && x < this.columns && y > 0 && y < this.lines) {
            return this.GetMap(x, y) === true;
        }
        return false;
    }

    static SetHome(x: number, y: number) {
        const position = this.GetPosition(x, y);
        this.homeElement.style.top = position.y + "px";
        this.homeElement.style.left = position.x + "px";
        this.positionHome = { x, y };
    }

    static GetHome(){
        return this.positionHome;
    }

    static IsHome(x: number, y: number) {
        return x == this.positionHome.x && y == this.positionHome.y;
    }

    static GetMap(x: number, y: number) {
        return this.map[y][x];
    }

    static SetMap(x: number, y: number, value: Item | true) {
        if (value instanceof Item) {
            const position = this.GetPosition(x, y);
            const img = document.createElement("img");
            img.classList.add("item");
            img.style.top = position.y + "px";
            img.style.left = position.x + "px";
            img.src = "/items/" + value.image;
            //value
            this.mapElement.querySelector("#items").append(img);
            value.element = img;
        }
        const current = this.GetMap(x, y);
        if (current instanceof Item) current.remove();
        this.map[x][y] = value;
    }

    static GetPosition(x: number, y: number) {
        return {
            x: x * this.size,
            y: y * this.size,
        }
    }
}
export default Map;