import Command, { BlockJSON } from "./Command";

class CommandIF extends Command {

    private _true: BlockJSON;
    private _false: BlockJSON;


    set true(block: BlockJSON) {
        this._true = block;
    }

    set false(block: BlockJSON) {
        this._false = block;
    }

    get true() {
        return this._true;
    }
    get false() {
        return this._false;
    }
}

export default CommandIF;