import CommandController from "./CommandController"
// import CommandFor from './CommandFor';
// import CommandIF from './CommandIF';

export type CommandBlock = { block: BlockJSON }

export type BlockJSON = {
    id: string
    type: string
    inputs: {
        command: CommandBlock,
        true: CommandBlock,
        false: CommandBlock
    }
    next: CommandBlock
    fields: Record<string, any>
}

class Command {

    private _id: string;
    private _name: string;
    private _commands: Command[] = [];
    private _options: any = {};
    private _next: Command;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        //if (block) this.next = CommandController.loadBlock(block);
    }

    public getCommands() {
        return this._commands;
    }

    public add(id: string, name: string): Command {
        // if (name == "block_for") {
        //     const command = new CommandFor(name);
        //     this._commands.push(command);
        //     return command;
        // }
        // if (name == "block_if") {
        //     const command = new CommandIF(name);
        //     this._commands.push(command);
        //     return command;
        // }
        // if (name == "block_if_else") {
        //     const command = new CommandIF(name);
        //     this._commands.push(command);
        //     return command;
        // }

        const command = new Command(id, name);
        this._commands.push(command);
        return command;
    }

    public addOption(name: string, value: string) {
        console.log(this._options)
        this._options[name] = value;
        console.log(this._options)
    }

    public get name() {
        return this._name;
    }

    public set next(command: Command) {
        this._next = command;
    }

    public get next() {
        return this._next;
    }

    public get id() {
        return this._id;
    }
}
export default Command;
