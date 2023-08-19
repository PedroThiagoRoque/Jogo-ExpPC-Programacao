import Command, { BlockJSON } from "./Command";

class CommandIF extends Command {

    private _true: BlockJSON;
    private _false: BlockJSON;
    private _nameItem: string
    private _commandsTrue: Command[] = [];
    private _commandsFalse: Command[] = [];

    public addTrue(name: string): Command {
        const command = new Command(name);
        this._commandsTrue.push(command);
        return command;
    }
    public addFalse(name: string): Command {
        const command = new Command(name);
        this._commandsFalse.push(command);
        return command;
    }
    set true(block: BlockJSON) {
        this._true = block;
    }

    set false(block: BlockJSON) {
        this._false = block;
    }

    set nameItem(_nameItem: string) {
        this._nameItem = _nameItem;
    }

    get true() {
        return this._true;
    }
    get false() {
        return this._false;
    }
    get nameItem() {
        return this._nameItem;
    }
    get commandsTrue() {
        return this._commandsTrue;
    }
    get commandsFalse() {
        return this._commandsFalse;
    }
}

export default CommandIF;