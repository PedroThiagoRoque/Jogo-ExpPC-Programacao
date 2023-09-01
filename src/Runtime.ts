import Command from "./Commands/Command";
import CommandFor from "./Commands/CommandFor";
import CommandIF from "./Commands/CommandIF";
import Map from "./MapController";
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
            await this.RunCommand(command);
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

    async RunCommand(command: Command) {
        if (command instanceof CommandIF) {
            const item = Map.GetItem(Player.position.x, Player.position.y);
            if (item && item.name == command.value) {
                let commandTrue: Command = command.true;
                while (commandTrue != null) {
                    await this.RunCommand(commandTrue);
                    commandTrue = commandTrue.next;
                }
            } else {
                let commandFalse: Command = command.false;
                while (commandFalse != null) {
                    await this.RunCommand(commandFalse);
                    commandFalse = commandFalse.next;
                }
            }
        } else if (command instanceof CommandFor) {
            for (let i = 0; i < command.iterator; i++) {
                let commandFor: Command = command.command;
                while (commandFor != null) {
                    await this.RunCommand(commandFor);
                    commandFor = commandFor.next;
                }
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
                    if (item) {
                        Player.AddItem(item);
                    }
                    break;
            }
        }
        await Runtime.delay(800);
    }

}

export default Runtime;