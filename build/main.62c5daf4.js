/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 493:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./blocks.json
var blocks_namespaceObject = JSON.parse('[{"type":"block_for","message0":"Repetir %1 vezes %2 Faça %3","args0":[{"type":"field_number","name":"iterator","value":0},{"type":"input_dummy"},{"type":"input_statement","name":"command"}],"movable":false,"previousStatement":null,"nextStatement":null,"colour":135,"tooltip":"","helpUrl":""},{"type":"block_move","message0":"Andar para Frente","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_left","message0":"Virar Para Esquerda","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_right","message0":"Virar Para Direita","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_pickup","message0":"Pegar Item","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_if_else","message0":"Se item for %1 %2 então %3 se não %4","args0":[{"type":"field_dropdown","name":"NAME","options":[["Queijo","Queijo"],["Presunto","Presunto"],["Pao","Pao"]]},{"type":"input_dummy"},{"type":"input_statement","name":"true"},{"type":"input_statement","name":"false"}],"previousStatement":null,"nextStatement":null,"colour":225,"tooltip":"","helpUrl":""},{"type":"block_if","message0":"Se item for %1 %2 então %3","args0":[{"type":"field_dropdown","name":"NAME","options":[["banana","a"],["maça","b"],["pera","c"]]},{"type":"input_dummy"},{"type":"input_statement","name":"true"}],"previousStatement":null,"nextStatement":null,"colour":225,"tooltip":"","helpUrl":""}]');
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(948);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
;// CONCATENATED MODULE: ./src/Commands/Command.ts
class Command {
    constructor(name) {
        this._commands = [];
        this._options = {};
        this._name = name;
        //if (block) this.next = CommandController.loadBlock(block);
    }
    getCommands() {
        return this._commands;
    }
    add(name) {
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
        const command = new Command(name);
        this._commands.push(command);
        return command;
    }
    addOption(name, value) {
        console.log(this._options);
        this._options[name] = value;
        console.log(this._options);
    }
    get name() {
        return this._name;
    }
    set next(command) {
        this._next = command;
    }
    get next() {
        return this._next;
    }
}
/* harmony default export */ var Commands_Command = (Command);

;// CONCATENATED MODULE: ./src/Commands/CommandFor.ts

class CommandFor extends Commands_Command {
    set command(value) {
        this._command = value;
    }
    get command() {
        return this._command;
    }
    set iterator(value) {
        this._iterator = value;
    }
    get iterator() {
        return this._iterator;
    }
}
/* harmony default export */ var Commands_CommandFor = (CommandFor);

;// CONCATENATED MODULE: ./src/Commands/CommandIF.ts

class CommandIF extends Commands_Command {
    set true(block) {
        this._true = block;
    }
    set false(block) {
        this._false = block;
    }
    set value(value) {
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
/* harmony default export */ var Commands_CommandIF = (CommandIF);

;// CONCATENATED MODULE: ./src/Commands/CommandController.ts



class CommandController {
    static Import(blocks) {
        var _a;
        const command = new Commands_Command("block_start");
        if ((_a = blocks[0]) === null || _a === void 0 ? void 0 : _a.inputs) {
            command.next = CommandController.loadBlock(blocks[0].inputs.command.block);
        }
        return command;
    }
    static CreateCommand(name) {
        if (name == "block_for")
            return new Commands_CommandFor(name);
        if (name == "block_if")
            return new Commands_CommandIF(name);
        if (name == "block_if_else")
            return new Commands_CommandIF(name);
        return new Commands_Command(name);
    }
    static loadBlock(block) {
        var _a, _b, _c;
        const command = CommandController.CreateCommand(block.type); //new Command(block.type);//this.add(block.type);
        if (block.next) {
            command.next = CommandController.loadBlock(block.next.block);
        }
        if (command instanceof Commands_CommandFor) {
            if ((_a = block.inputs) === null || _a === void 0 ? void 0 : _a.command)
                command.command = CommandController.loadBlock(block.inputs.command.block);
            command.iterator = block.fields.iterator;
        }
        if (command instanceof Commands_CommandIF) {
            if ((_b = block.inputs) === null || _b === void 0 ? void 0 : _b.true)
                command.true = CommandController.loadBlock(block.inputs.true.block);
            if ((_c = block.inputs) === null || _c === void 0 ? void 0 : _c.false)
                command.false = CommandController.loadBlock(block.inputs.false.block);
            command.value = block.fields.NAME;
        }
        return command;
    }
}
/* harmony default export */ var Commands_CommandController = (CommandController);

;// CONCATENATED MODULE: ./src/Item.ts
class Item {
    constructor(name = "", image = "") {
        this.setItem(name, image);
    }
    setItem(name, image) {
        this._name = name;
        this._image = image;
    }
    remove() {
        this.element.remove();
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._image;
    }
    set element(element) {
        this._element = element;
    }
    get element() {
        return this._element;
    }
    static Queijo() {
        return new Item("Queijo", "queijo.png");
    }
    static Pao() {
        return new Item("Pao", "pao.png");
    }
    static Presunto() {
        return new Item("Presunto", "presunto.png");
    }
    static Ovo() {
        return new Item("Ovo", "ovo.png");
    }
    static Leite() {
        return new Item("Leite", "leite.png");
    }
    static Farinha() {
        return new Item("Farinha", "farinha.png");
    }
    static Chocolate() {
        return new Item("Chocolate", "chocolate.png");
    }
}
/* harmony default export */ var src_Item = (Item);

;// CONCATENATED MODULE: ./src/Map.ts

class Map {
    static Start() {
        this.mapElement = document.querySelector("#map");
        this.homeElement = document.querySelector("#home");
        this.map = [];
        for (let i = 0; i < this.columns; i++) {
            const gridItem = document.createElement("div");
            gridItem.setAttribute("x", String(i));
            const items = [];
            for (let j = 0; j < this.lines; j++) {
                const gridItemItem = document.createElement("div");
                gridItemItem.setAttribute("y", String(i));
                gridItemItem.setAttribute("x", String(j));
                if (i == 0 || i == 11 || i == 22 || j == 0 || j == 9 || j == 18) {
                    gridItemItem.classList.add("border");
                    items.push(null);
                    gridItemItem.setAttribute("solid", "false");
                    gridItemItem.innerHTML = `<span>${i}x${j}</span>`;
                }
                else {
                    gridItemItem.setAttribute("solid", "true");
                    items.push(true);
                }
                gridItem.append(gridItemItem);
            }
            this.map.push(items);
            this.mapElement.querySelector(".grid").append(gridItem);
        }
    }
    static CreateItem(item, x, y) {
        this.SetMap(x, y, item);
        /*
        const item = new Item("Queijo", "queijo.png");
        this.SetMap(x, y, item);
    
        const item2 = new Item("Pao", "pao.png");
        this.SetMap(x, y-4, item2);
    
        const item3 = new Item("Presunto", "presunto.png");
        this.SetMap(x, y-8, item3);*/
    }
    static GetItem(x, y) {
        const item = this.GetMap(x, y);
        if (item instanceof src_Item)
            return item;
        return false;
    }
    static RemoveItem(x, y) {
        const item = this.GetItem(x, y);
        if (item instanceof src_Item) {
            this.SetMap(x, y, true);
            return item;
        }
        return false;
    }
    static IsCollider(x, y) {
        if (x < 0 || y < 0 || x > this.lines - 1 || y > this.columns - 1) {
            return true;
        }
        else if (x > 0 && x < this.columns && y > 0 && y < this.lines) {
            return this.GetMap(x, y) === true;
        }
        return false;
    }
    static SetHome(x, y) {
        const position = this.GetPosition(x, y);
        this.homeElement.style.top = position.y + "px";
        this.homeElement.style.left = position.x + "px";
        this.positionHome = { x, y };
    }
    static GetHome() {
        return this.positionHome;
    }
    static IsHome(x, y) {
        return x == this.positionHome.x && y == this.positionHome.y;
    }
    static GetMap(x, y) {
        return this.map[y][x];
    }
    static SetMap(x, y, value) {
        if (value instanceof src_Item) {
            const position = this.GetPosition(x, y);
            const img = document.createElement("img");
            img.classList.add("item");
            img.style.top = position.y + "px";
            img.style.left = position.x + "px";
            img.src = "/items/" + value.image;
            //value
            this.mapElement.querySelector("#items").append(img);
            value.element = img;
        }
        const current = this.GetMap(x, y);
        if (current instanceof src_Item)
            current.remove();
        this.map[x][y] = value;
    }
    static GetPosition(x, y) {
        return {
            x: x * this.size,
            y: y * this.size,
        };
    }
}
Map.positionHome = { x: 0, y: 0 };
Map.columns = 23;
Map.lines = 19;
Map.size = 30;
Map.map = [];
/* harmony default export */ var src_Map = (Map);

;// CONCATENATED MODULE: ./src/Player.ts

class Player {
    static Start() {
        this.playerElement = document.querySelector("#player");
        this.transform = {
            position: this._initialPosition,
            rotation: "up"
        };
        Player.ChangeSkin("normal.png");
    }
    static AddItem(item) {
        this.inventory = item;
        Player.ChangeSkin(item.image);
        //this.playerElement.style.backgroundImage = `url(personagem2${item.name}.png)`;
    }
    static RemoveItem() {
        const item = this.inventory;
        this.inventory = null;
        Player.ChangeSkin("normal.png");
        return item;
        //this.playerElement.style.backgroundImage = `url(personagem2${item.name}.png)`;
    }
    static ChangeSkin(image) {
        this.playerElement.style.backgroundImage = `url(/player/${image})`;
    }
    static Reset() {
        // this.playerElement.style.backgroundImage = `url(personagem2.png)`;
        this.Rotation("up");
        Player.ChangeSkin("normal.png");
        this.SetPosition(this._initialPosition.y, this._initialPosition.x);
    }
    static Run() {
        this.Reset();
    }
    static Move() {
        let { x, y } = this.transform.position;
        switch (this.rotation) {
            case "up":
                x -= 1;
                break;
            case "down":
                x += 1;
                break;
            case "left":
                y -= 1;
                break;
            case "right":
                y += 1;
                break;
        }
        if (!src_Map.IsCollider(x, y))
            this.SetPosition(x, y);
    }
    //["left","up","right","down"]; 
    static Left() {
        this.Rotation(Player.hashRotation[this.rotation].previous);
    }
    static Right() {
        this.Rotation(Player.hashRotation[this.rotation].next);
    }
    static Rotation(direction) {
        this.transform.rotation = direction;
        const angle = {
            up: 0,
            left: 270,
            right: 90,
            down: 180,
        };
        this.playerElement.style.transform = `rotate(${angle[direction]}deg)`;
    }
    static SetPosition(x, y) {
        if (src_Map.IsCollider(x, y) == false) {
            this.transform.position = { x, y };
            this.UpdatePosition();
        }
        else {
            console.log("Oi");
            document.querySelector("#message").innerHTML = "Não é possível caminhar";
        }
        // this._position = Map.GetPosition(0, 0);
    }
    static UpdatePosition() {
        const { x, y } = this.worldPosition;
        this.playerElement.style.top = x + "px";
        this.playerElement.style.left = y + "px";
    }
    static SetInitialPosition(x, y) {
        this._initialPosition = { x, y };
        this.SetPosition(this._initialPosition.y, this._initialPosition.x);
    }
    static get position() {
        return this.transform.position;
    }
    static get worldPosition() {
        const { x, y } = this.transform.position;
        return src_Map.GetPosition(x, y);
    }
    static get rotation() {
        return this.transform.rotation;
    }
    static get initialPosition() {
        return this._initialPosition;
    }
}
Player._initialPosition = { x: 0, y: 0 };
Player.hashRotation = {
    left: { previous: "down", next: "up" },
    up: { previous: "left", next: "right" },
    right: { previous: "up", next: "down" },
    down: { previous: "right", next: "left" },
};
/* harmony default export */ var src_Player = (Player);

;// CONCATENATED MODULE: ./src/Runtime.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Runtime {
    constructor(command) {
        this.command = command;
    }
    static delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    Run() {
        return __awaiter(this, void 0, void 0, function* () {
            src_Player.Reset();
            let command = this.command.next;
            while (command != null) {
                yield this.RunCommand(command);
                command = command.next;
            }
            /*
            for(let command of commands){
                switch(command.name){
                    case "block_move":
                    break;
                }
            }*/
        });
    }
    RunCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (command instanceof Commands_CommandIF) {
                const item = src_Map.GetItem(src_Player.position.x, src_Player.position.y);
                if (item && item.name == command.value) {
                    let commandTrue = command.true;
                    while (commandTrue != null) {
                        yield this.RunCommand(commandTrue);
                        commandTrue = commandTrue.next;
                    }
                }
                else {
                    let commandFalse = command.false;
                    while (commandFalse != null) {
                        yield this.RunCommand(commandFalse);
                        commandFalse = commandFalse.next;
                    }
                }
            }
            else if (command instanceof Commands_CommandFor) {
                for (let i = 0; i < command.iterator; i++) {
                    let commandFor = command.command;
                    while (commandFor != null) {
                        yield this.RunCommand(commandFor);
                        commandFor = commandFor.next;
                    }
                }
            }
            else {
                switch (command.name) {
                    case "block_move":
                        src_Player.Move();
                        break;
                    case "block_left":
                        src_Player.Left();
                        break;
                    case "block_right":
                        src_Player.Right();
                        break;
                    case "block_pickup":
                        const item = src_Map.RemoveItem(src_Player.position.x, src_Player.position.y);
                        if (item) {
                            src_Player.AddItem(item);
                        }
                        break;
                }
            }
            yield Runtime.delay(800);
        });
    }
}
/* harmony default export */ var src_Runtime = (Runtime);

;// CONCATENATED MODULE: ./src/App.ts
var App_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class App {
    constructor(level) {
        this.level = level;
        level.app = this;
    }
    Start() {
        src_Map.Start();
        src_Player.Start();
        this.level.Start();
        this.workspace = blockly_default().inject('blocklyDiv', { toolbox: this.toolbox });
        //   const temp = { "type": "block_start", "id": "Q@]:+vc8mu`XtIUv^]n)", "x": 200, "y": 200, "movable": false, "editable": false, "inputs": { "command": { "block": { "type": "block_right", "id": "cCX:@%8lo#QEDBMNZ*RM", "next": { "block": { "type": "block_move", "id": "73T0qIE@{D(%38Pg1W,^", "next": { "block": { "type": "block_left", "id": "D#q,}-jzb~~-vRO7ar=$", "next": { "block": { "type": "block_left", "id": "m/CY2UTKl(-UM|JG2a:;", "next": { "block": { "type": "block_move", "id": "NnLw^cSq6q1KpCw-O~*V" } } } } } } } } } } } };
        //    Blockly.serialization.blocks.append(temp, this.workspace);
        blockly_default().serialization.blocks.append({ type: 'block_start', x: 200, y: 200 }, this.workspace);
    }
    Run() {
        return App_awaiter(this, void 0, void 0, function* () {
            const commands = this.GenerateCommand();
            const runtime = new src_Runtime(commands);
            yield runtime.Run();
        });
    }
    Import(blocks) {
        //defineBlocksWithJsonArray
        blockly_default().defineBlocksWithJsonArray(blocks);
        (blockly_default()).Blocks['block_start'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("Começar");
                this.appendStatementInput("command")
                    .setCheck(null);
                this.setColour(180);
                this.setEditable(false);
                this.setMovable(false);
                this.moveBy(0, 0);
            }
        };
    }
    ToolBox(blocks) {
        this.toolbox = {
            kind: "flyoutToolbox",
            contents: blocks.map((name) => ({
                type: name,
                kind: "block"
            }))
        };
    }
    GenerateCommand() {
        const json = blockly_default().serialization.workspaces.save(this.workspace);
        //     console.log(JSON.stringify(json.blocks.blocks))
        return Commands_CommandController.Import(json.blocks.blocks);
    }
}
/* harmony default export */ var src_App = (App);

;// CONCATENATED MODULE: ./src/Level/index.ts
var Level_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Level {
    constructor() {
        this.playElement = document.querySelector("#play");
        this.playElement.onclick = this._onClick.bind(this);
        this.playElement.classList.remove("disabled");
    }
    _onClick() {
        return Level_awaiter(this, void 0, void 0, function* () {
            this.playElement.classList.add("disabled");
            yield this.Run();
            this.playElement.classList.remove("disabled");
        });
    }
    Start() {
        this.app.ToolBox(["block_move", "block_left", "block_right", "block_pickup", "block_if", "block_if_else", "block_for"]);
        src_Map.CreateItem(src_Item.Pao(), 7, 9);
        src_Map.CreateItem(src_Item.Presunto(), 11, 5);
        src_Map.CreateItem(src_Item.Queijo(), 7, 0);
        src_Map.CreateItem(src_Item.Pao(), 0, 3);
        src_Player.SetInitialPosition(5, 9);
        src_Map.SetHome(5, 9);
    }
    Run() {
        return Level_awaiter(this, void 0, void 0, function* () {
            yield this.app.Run();
            alert("Fim");
        });
    }
    Finish() {
    }
    get app() {
        return this._app;
    }
    set app(app) {
        this._app = app;
    }
}
/* harmony default export */ var src_Level = (Level);

;// CONCATENATED MODULE: ./src/index.ts



const level = new src_Level;
const app = new src_App(level);
app.Import(blocks_namespaceObject);
app.Start();
/* harmony default export */ var src = ({});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjogo_exppc_programacao"] = self["webpackChunkjogo_exppc_programacao"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [948], function() { return __webpack_require__(493); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.62c5daf4.js.map