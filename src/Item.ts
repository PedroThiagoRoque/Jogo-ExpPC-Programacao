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

    static Queijo(){
        return new Item("Queijo", "queijo.png");
    }

    static Pao(){
        return new Item("Pao", "pao.png");
    }
    
    static Presunto(){
        return new Item("Presunto", "presunto.png");
    }

    static Ovo(){
        return new Item("Ovo", "ovo.png");
    }

    static Leite(){
        return new Item("Leite", "leite.png");
    }

    static Farinha(){
        return new Item("Farinha", "farinha.png");
    }

    static Hidden(){
        return new Item("Oculto", "question.png");
    }
    
    static Chocolate(){
        return new Item("Chocolate", "chocolate.png");
    }
}

export default Item;