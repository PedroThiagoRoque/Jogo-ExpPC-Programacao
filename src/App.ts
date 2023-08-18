import Blockly, { WorkspaceSvg } from 'blockly';
import { ToolboxDefinition } from 'blockly/core/utils/toolbox';
import CommandController from './Commands/CommandController';

class App {

    private toolbox: ToolboxDefinition;
    private workspace: WorkspaceSvg;

    Import(blocks: any) {
        //defineBlocksWithJsonArray
        Blockly.defineBlocksWithJsonArray(blocks);
        Blockly.Blocks['block_start'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("Começar");
                this.appendStatementInput("command")
                    .setCheck(null);
                this.setColour(180);
                this.setEditable(false);
                this.setMovable(false);
                this.moveBy(0, 0)

            }
        };
    }

    ToolBox(blocks: string[]) {

        this.toolbox = {
            kind: "flyoutToolbox",
            contents: blocks.map((name) => ({
                type: name,
                kind: "block"
            }))
        }
    }

    Run() {
        this.workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox });
        const temp = { "type": "block_start", "id": "z+gnknX@a:gq2!SCxj29", "x": 200, "y": 154, "movable": false, "editable": false, "inputs": { "command": { "block": { "type": "block_move", "id": "~{7N^2ZshLSyMTfobrK.", "fields": { "direction": "up" }, "next": { "block": { "type": "block_if", "id": "|hN9T@HA*7iv:(/K-/`R", "fields": { "NAME": "a" }, "inputs": { "true": { "block": { "type": "block_move", "id": "c^4MjiZa;2g5=`CcgO(P", "fields": { "direction": "up" }, "next": { "block": { "type": "block_move", "id": "jQ,*/l8](O5qK5vZBscc", "fields": { "direction": "up" } } } } } }, "next": { "block": { "type": "block_if_else", "id": "m1F8g8Pv(%:$U|rfF?@k", "fields": { "NAME": "a" }, "inputs": { "true": { "block": { "type": "block_move", "id": "_I;7U]=m]3BH8e6VZQ}o", "fields": { "direction": "up" } } }, "false": { "block": { "type": "block_move", "id": "m1iYni-%Hp|D%czKcWX3", "fields": { "direction": "up" } } } }, "next": { "block": { "type": "block_for", "id": "s1q-`JOMZ7n*nAf[gPer", "fields": { "iterator": 0 }, "inputs": { "command": { "block": { "type": "block_move", "id": ":?503l65WIBfhDo{XyV;", "fields": { "direction": "up" } } } } } } } } } } } } } };
        Blockly.serialization.blocks.append(temp, this.workspace);
        //   Blockly.serialization.blocks.append({ type: 'block_start', x: 200, y: 200 }, this.workspace);
    }

    GenerateCommand() {
        const json = Blockly.serialization.workspaces.save(this.workspace);

        
        //     console.log(JSON.stringify(json.blocks.blocks))
        return CommandController.Import(json.blocks.blocks);
    }
    
}
export default App;