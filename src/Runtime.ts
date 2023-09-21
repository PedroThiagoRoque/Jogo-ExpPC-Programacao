import { WorkspaceSvg } from "blockly";
import Command from "./Commands/Command";
import CommandFor from "./Commands/CommandFor";
import CommandIF from "./Commands/CommandIF";
import Map from "./MapController";
import Player from "./Player";

class Runtime {

    private command: Command;
    private workspace: WorkspaceSvg;
    constructor(command: Command) {
        this.command = command;
    }

    static delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async Run(workspace: WorkspaceSvg) {
        this.workspace = workspace;
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
        const block = this.workspace.getBlockById(command.id);
        block.select();
        if (command instanceof CommandIF) {
            await Runtime.delay(800);
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
                await Runtime.delay(800);
                block.select();
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
            await Runtime.delay(800);
        }
        block.unselect();
    }

}

export default Runtime;