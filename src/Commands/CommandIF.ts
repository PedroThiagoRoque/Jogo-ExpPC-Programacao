import Command, { BlockJSON } from "./Command";

class CommandIF extends Command {

    private _true: Command;
    private _false: Command;
    private _value: string

    set true(block: Command) {
        this._true = block;
    }

    set false(block: Command) {
        this._false = block;
    }

    set value(value: string) {
        this._value = value;
    }

    get true() {
        return this._true;
    }
    get false() {
        return this._false;
    }
    get value() {
        return this._value;
    }
}

export default CommandIF;