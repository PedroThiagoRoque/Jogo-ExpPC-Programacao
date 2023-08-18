import Blockly, { WorkspaceSvg } from 'blockly';
import { ToolboxDefinition } from 'blockly/core/utils/toolbox';
import CommandController from './Commands/CommandController';
import Map from './Map';
import Player from './Player';
import Runtime from './Runtime';

class App {

    private toolbox: ToolboxDefinition;
    private workspace: WorkspaceSvg;
    private playElement : HTMLDivElement;

    Start(){
        this.playElement = document.querySelector("#play");
        this.playElement.onclick = this.OnPlay.bind(this);
        Map.Start();
        Player.Start();
    }

    async OnPlay(){
        this.playElement.classList.add("disabled");
        const commands = this.GenerateCommand();
        const runtime = new Runtime(commands);
        await runtime.Run();
        this.playElement.classList.remove("disabled");
    }

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
        const temp = { "type": "block_start", "id": "Q@]:+vc8mu`XtIUv^]n)", "x": 200, "y": 200, "movable": false, "editable": false, "inputs": { "command": { "block": { "type": "block_right", "id": "cCX:@%8lo#QEDBMNZ*RM", "next": { "block": { "type": "block_move", "id": "73T0qIE@{D(%38Pg1W,^", "next": { "block": { "type": "block_left", "id": "D#q,}-jzb~~-vRO7ar=$", "next": { "block": { "type": "block_left", "id": "m/CY2UTKl(-UM|JG2a:;", "next": { "block": { "type": "block_move", "id": "NnLw^cSq6q1KpCw-O~*V" } } } } } } } } } } } };
        Blockly.serialization.blocks.append(temp, this.workspace);

        this.playElement.classList.remove("disabled");
        //   Blockly.serialization.blocks.append({ type: 'block_start', x: 200, y: 200 }, this.workspace);
    }

    GenerateCommand() {
        const json = Blockly.serialization.workspaces.save(this.workspace);


        //     console.log(JSON.stringify(json.blocks.blocks))
        return CommandController.Import(json.blocks.blocks);
    }

}
export default App;