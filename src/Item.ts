
type ItemName = "Pao" | "Queijo" | "Presunto" | "Ovo" | "Leite" | "Farinha" | "Chocolate"

class Item {

    private _name: ItemName;
    private _image: string;
    private _element: HTMLImageElement;

    constructor(name: ItemName, image: string = "") {
        this.setItem(name, image);
    }

    setItem(name: ItemName, image: string) {
        this._name = name;
        this._image = image;
    }

    remove() {
        this.element.remove();
    }

    public get name(): ItemName {
        return this._name;
    }

    public get image() {
        return this._image;
    }

    public set element(element: HTMLImageElement) {
        this._element = element;
    }

    public get element() {
        return this._element;
    }

    static Queijo() {
        return new Item("Queijo", "queijo.png");
    }

    static Pao() {
        return new Item("Pao", "pao.png");
    }

    static Presunto() {
        return new Item("Presunto", "presunto.png");
    }

    static Ovo() {
        return new Item("Ovo", "ovo.png");
    }

    static Leite() {
        return new Item("Leite", "leite.png");
    }

    static Farinha() {
        return new Item("Farinha", "farinha.png");
    }

    static Hidden(name: ItemName) {
        return new ItemHidden(name, "question.png");
    }

    static Chocolate() {
        return new Item("Chocolate", "chocolate.png");
    }

    static GetImageItem(name: ItemName) {
        const map: Record<ItemName, string> = {
            Pao: "",
            Queijo: "",
            Presunto: "",
            Ovo: "",
            Leite: "",
            Farinha: "",
            Chocolate: ""

        }
        return map[name];
    }
}

export class ItemHidden extends Item {
}

export default Item;