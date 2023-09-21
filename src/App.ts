import Blockly, { WorkspaceSvg } from 'blockly';
import { ToolboxDefinition } from 'blockly/core/utils/toolbox';
import CommandController from './Commands/CommandController';
import MapController from './MapController';
import Player from './Player';
import Runtime from './Runtime';
import Level from './Level';
import Level1 from './Level/Level1';
import Level2 from './Level/Level2';
import Level3 from './Level/Level3';

type LevelType = typeof Level;

class App {

    private toolbox: ToolboxDefinition;
    private workspace: WorkspaceSvg;
    private level: Level;
    private modal: HTMLDivElement;

    constructor() {
        this.toolbox = {
            kind: "flyoutToolbox",
            contents: []
        }
        this.modal = document.querySelector(".modal");
    }

    SetLevel(level: LevelType) {
        if(this.level){
            this.level.Destroy();
            this.level.app = null;
            this.level = null;
        }
        const instance = new level;
        this.level = instance;
        instance.app = this;
        this.Awake();
    }

    Start() {
        MapController.Start();
        this.workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox });
        this.workspace.addChangeListener(Blockly.Events.disableOrphans);
        const fasesDiv = this.modal.querySelector("#fases");
        fasesDiv.append(this.CreateButton(Level1));
        fasesDiv.append(this.CreateButton(Level2));
        fasesDiv.append(this.CreateButton(Level3));
        (this.modal.querySelector("#finish button#reset") as HTMLButtonElement).onclick = () => {
            this.level.Reset();
            this.modal.classList.add("hide");
        }
        (this.modal.querySelector("#finish button#menu") as HTMLButtonElement).onclick = () => {
            this.level.Destroy();
            this.modal.querySelector("#welcome").classList.add("active");
            this.modal.querySelector("#finish").classList.remove("active");
        }
    }

    CreateButton(Level: LevelType) {
        const button = document.createElement("button");
        button.innerHTML = Level.id;
        button.onclick = () => {
            this.SetLevel(Level);
            this.modal.classList.add("hide");
        }
        return button;
    }

    Awake() {
        Player.Awake();
        this.level.Awake();
        this.level.Init();
        this.workspace.updateToolbox(this.toolbox)
        // this.workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox });
        //const temp = { "type": "block_start", "id": "gaoezOME?THl]Piw#@!r", "x": 200, "y": 200, "editable": false, "inputs": { "command": { "block": { "type": "block_left", "id": "vyM$.!o?wSPwfiw9l?h[", "next": { "block": { "type": "block_move", "id": "AYMk~fzzPB~CeqEt`s9t", "next": { "block": { "type": "block_move", "id": "%FbuCvOeohbbI6E}uh;M", "next": { "block": { "type": "block_pickup", "id": "EF=R*=C^{pc-Q+T]ca@H", "next": { "block": { "type": "block_right", "id": "~_bo]91PljD?70*l1HOs", "next": { "block": { "type": "block_right", "id": "^FjlEXPNmMUlsG5,:[EJ", "next": { "block": { "type": "block_move", "id": "4q4Q_TmQoA~aE/9-RsVC", "next": { "block": { "type": "block_move", "id": "#I[SdAUs9IfUB0J(jz.-", "next": { "block": { "type": "block_move", "id": "]ZWrWr[a;K)+YzP;XV;Z", "next": { "block": { "type": "block_pickup", "id": "Xr(a$S!FEsKP:yvHf{L6", "next": { "block": { "type": "block_right", "id": "c7(K1)}!|[C1q_C*#2L+", "next": { "block": { "type": "block_right", "id": "2xSr,T%oRR%?V7I8-$U]", "next": { "block": { "type": "block_move", "id": "16*[Mx8U*@`zYETx5clg", "next": { "block": { "type": "block_right", "id": "NP)Dh_DxGZV9JO~qSFs[", "next": { "block": { "type": "block_move", "id": "Rft5=_}}lz:2}AYSOr@]", "next": { "block": { "type": "block_pickup", "id": "l:yY/x$d9=1;D7m?ggmw", "next": { "block": { "type": "block_left", "id": "fuLiV||~Dc)F4kSEUp0l", "next": { "block": { "type": "block_left", "id": "{uW+5E|]zZC-y^Y.YPEk", "next": { "block": { "type": "block_move", "id": "cPcTP6Y=i069M@egEi]l", "next": { "block": { "type": "block_move", "id": "JM~R81c;6knDeLE%}T_)", "next": { "block": { "type": "block_pickup", "id": "iD+hh8O/qaGeXcp-QVZH", "next": { "block": { "type": "block_left", "id": "B:@/)sK{KrLYpc=q=Sb?", "next": { "block": { "type": "block_left", "id": "hCe#ud:0Nr;D?O?C[[u3", "next": { "block": { "type": "block_move", "id": "P,!.1ZrH=@0wC;Eq#$@$" } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } };
       // Blockly.serialization.blocks.append(temp, this.workspace);

        Blockly.serialization.blocks.append({ type: 'block_start', x: 200, y: 200 }, this.workspace);
    }

    async Run() {
        const commands = this.GenerateCommand();
        const runtime = new Runtime(commands);
        await runtime.Run(this.workspace);
    }

    Finish(result: boolean) {
        this.modal.classList.remove("hide");
        this.modal.querySelector("#welcome").classList.remove("active");
        const finishEl = this.modal.querySelector("#finish");
        finishEl.setAttribute("class", "modal-content " + (result ? "success" : "error"))
        finishEl.querySelector(".title").innerHTML = result ? "Você acertou" : "Você errou";
        finishEl.classList.add("active");
        const listItens = finishEl.querySelector("ul");
        listItens.innerHTML = "";
        const items = Player.GetInventory();
        items.forEach((item) => {
            const element = document.createElement("li");
            element.innerHTML = item.name;
            listItens.append(element)
        })
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
                this.setMovable(true);
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

    GenerateCommand() {
        const json = Blockly.serialization.workspaces.save(this.workspace);


        console.log(JSON.stringify(json.blocks.blocks))
        return CommandController.Import(json.blocks.blocks);
    }

}
export default App;