import Command, { BlockJSON } from "./Command";
import CommandFor from './CommandFor';
import CommandIF from './CommandIF';

class CommandController {
    static Import(blocks: BlockJSON[]) {
        const command = new Command("block_start");
        if(blocks[0]?.inputs){
            command.next = CommandController.loadBlock(blocks[0].inputs.command.block);
        }
        return command;
    }

    static CreateCommand(name: string) {
        if (name == "block_for") return new CommandFor(name);
        if (name == "block_if") return new CommandIF(name);
        if (name == "block_if_else") return new CommandIF(name);
        return new Command(name);
    }

    static loadBlock(block: BlockJSON) {
        const command = CommandController.CreateCommand(block.type)//new Command(block.type);//this.add(block.type);
        if (block.next) {
            command.next = CommandController.loadBlock(block.next.block);
        }
        if (command instanceof CommandFor) { 
            if (block.inputs?.command) command.command = CommandController.loadBlock(block.inputs.command.block)
            command.iterator = block.fields.iterator;

        }
        if (command instanceof CommandIF) {
            if (block.inputs?.true) command.true = CommandController.loadBlock(block.inputs.true.block);
            if (block.inputs?.false) command.false = CommandController.loadBlock(block.inputs.false.block);
            command.value = block.fields.NAME;
            
        }
        return command;
    }
}

export default CommandController;