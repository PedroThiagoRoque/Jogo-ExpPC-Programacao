import Command from "./Commands/Command";
import CommandFor from "./Commands/CommandFor";
import CommandIF from "./Commands/CommandIF";
import Map from "./Map";
import Player from "./Player";

class Runtime {

    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    static delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async Run() {
        Player.Reset();
        let command = this.command.next;

        while (command != null) {
            if (command instanceof CommandIF) {

            } else if (command instanceof CommandFor) {
                for (let i = 0; i < command.iterator; i++) {
                    Player.Move();
                    await Runtime.delay(800);
                }
            } else {
                switch (command.name) {
                    case "block_move":
                        Player.Move();
                        break;
                    case "block_left":
                        Player.Left();
                        break;
                    case "block_right":
                        Player.Right();
                        break;
                    case "block_pickup":
                        const item = Map.RemoveItem(Player.position.x, Player.position.y);
                        if(item){
                            Player.AddItem(item);
                        }
                        break;
                }
            }
            await Runtime.delay(800);
            command = command.next;
        }
        /*
        for(let command of commands){
            switch(command.name){
                case "block_move":
                break;
            }
        }*/
    }
}

export default Runtime;