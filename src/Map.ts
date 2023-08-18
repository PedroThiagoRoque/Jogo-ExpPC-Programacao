
type MapType = Array<Array<number>>
class Map{

    private static mapElement : HTMLDivElement;
    private static columns = 23;
    private static lines = 19;
    private static size = 30;
    private static map : MapType = [];

    static Start(){
        this.mapElement = document.querySelector("#map");
        this.map = [];
        for(let i = 0;i<this.columns;i++){
            const gridItem = document.createElement("div");
            gridItem.setAttribute("x",String(i));
            const items = [] as Array<number>;
            for(let j=0;j<this.lines;j++){
                const gridItemItem = document.createElement("div");
                gridItemItem.setAttribute("x",String(i));
                gridItemItem.setAttribute("y",String(j));
                if(i == 0 || i == 11 || i == 22 || j == 0 || j == 9 || j == 18){
                    gridItemItem.classList.add("border");
                    items.push(0);
                    gridItemItem.setAttribute("solid","false");
                }else{
                    gridItemItem.setAttribute("solid","true");
                    items.push(1);
                }
                gridItem.append(gridItemItem);
            }
            this.map.push(items);
            this.mapElement.querySelector(".grid").append(gridItem)
        }
    }

    static IsCollider(x : number, y: number) : boolean{
        if(x > 0 && x < this.columns && y > 0 && y < this.lines){
            return this.map[y][x] == 1;
        }
        return false;
    }

    static GetPosition(x : number, y: number){
        return {
            x: x * this.size,
            y: y * this.size,
        }
    }
}
export default Map;