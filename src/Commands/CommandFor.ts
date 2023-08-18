import Command, { BlockJSON } from "./Command";

class CommandFor extends Command {

    private _iterator: number;
    private _command: BlockJSON;

    public set command(value: BlockJSON){
        this._command = value;
    }

    public get command(){
        return this._command;
    }

    public set iterator(value: number){
        this._iterator = value;
    }

    public get iterator(){
        return this._iterator;
    }
}

export default CommandFor;