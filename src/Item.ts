class Item {

    private _name: string;
    private _image: string;
    private _element: HTMLImageElement;

    constructor(name: string = "", image: string = "") {
        this.setItem(name, image);
    }

    setItem(name: string, image: string) {
        this._name = name;
        this._image = image;
    }

    remove(){
        this.element.remove();
    }

    public get name() {
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
}

export default Item;