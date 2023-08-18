import Blockly from 'blockly';
import blocksData from '../blocks.json';

import App from './App';
import Runtime from './Runtime';

const app = new App;

app.Start();
app.Import(blocksData);

app.ToolBox(["block_move","block_left","block_right","block_pickup", "block_if", "block_if_else", "block_for"]);

app.Run();

/*
var toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
        {
            "kind": "block",
            "type": "block_move"
        },
        {
            "kind": "block",
            "type": "block_if"
        },
        {
            "kind": "block",
            "type": "block_if_else"
        },
        {
            "kind": "block",
            "type": "block_for"
        }
    ]
}

var workspace = Blockly.inject('blocklyDiv', { toolbox });
window.onkeydown = (e) => {
    if (e.key == "e") {
        const commands = app.GenerateCommand();
        const runtime = new Runtime(commands);
        runtime.Run();
    }
}
*/

export default {};