import Command, { BlockJSON } from "./Command";
import CommandFor from './CommandFor';
import CommandIF from './CommandIF';

class CommandController {
    static Import(blocks: BlockJSON[]) {
        const command = new Command("block_start");
        command.next = CommandController.loadBlock(blocks[0].inputs.command.block);
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
        if (block.inputs) {
            /*
            if (block.inputs.command) command.loadBlock(block.inputs.command.block)
            if (block.inputs.true) command.loadBlock(block.inputs.true.block)
            if (block.inputs.false) command.loadBlock(block.inputs.false.block)
            // command.add();
            */
            //     console.log(block.inputs)
        }
        if (command instanceof CommandIF) {
            if (block.inputs.true) command.true = block.inputs.true.block;
            if (block.inputs.false) command.false = block.inputs.false.block;
        }
        if (command instanceof CommandFor) {
            command.command = block.inputs.command.block;
            command.iterator = block.fields.iterator;
        }
        return command;
    }
}

export default CommandController;