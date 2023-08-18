import Command from "./Commands/Command";

class Runtime{

    private command : Command;
    private player: HTMLDivElement;

    constructor(command: Command){
        this.command = command;
        this.player = document.querySelector("#player");
    }

    Run(){
        let command = this.command.next;

        while(command != null){

            console.log(command)
            command = command.next;
        }
        /*
        for(let command of commands){
            switch(command.name){
                case "block_move":
                    const left  = this.player.style.left;
                    this.player.style.left = (parseInt(left.replace(/px/,""))+10)+"px"
                break;
            }
        }*/
    }
}

export default Runtime;