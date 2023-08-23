!function(){"use strict";var t,e={6:function(t,e,n){var i=JSON.parse('[{"type":"block_for","message0":"Repetir %1 vezes %2 Faça %3","args0":[{"type":"field_number","name":"iterator","value":0},{"type":"input_dummy"},{"type":"input_statement","name":"command"}],"movable":false,"previousStatement":null,"nextStatement":null,"colour":135,"tooltip":"","helpUrl":""},{"type":"block_move","message0":"Andar para Frente","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_left","message0":"Virar Para Esquerda","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_right","message0":"Virar Para Direita","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_pickup","message0":"Pegar Item","colour":300,"previousStatement":null,"nextStatement":null,"tooltip":"","helpUrl":""},{"type":"block_if_else","message0":"Se item for %1 %2 então %3 se não %4","args0":[{"type":"field_dropdown","name":"NAME","options":[["Queijo","Queijo"],["Presunto","Presunto"],["Pao","Pao"]]},{"type":"input_dummy"},{"type":"input_statement","name":"true"},{"type":"input_statement","name":"false"}],"previousStatement":null,"nextStatement":null,"colour":225,"tooltip":"","helpUrl":""},{"type":"block_if","message0":"Se item for %1 %2 então %3","args0":[{"type":"field_dropdown","name":"NAME","options":[["banana","a"],["maça","b"],["pera","c"]]},{"type":"input_dummy"},{"type":"input_statement","name":"true"}],"previousStatement":null,"nextStatement":null,"colour":225,"tooltip":"","helpUrl":""}]'),o=n(747),s=n.n(o);class a{constructor(t){this._commands=[],this._options={},this._name=t}getCommands(){return this._commands}add(t){const e=new a(t);return this._commands.push(e),e}addOption(t,e){console.log(this._options),this._options[t]=e,console.log(this._options)}get name(){return this._name}set next(t){this._next=t}get next(){return this._next}}var r=a,l=class extends r{set command(t){this._command=t}get command(){return this._command}set iterator(t){this._iterator=t}get iterator(){return this._iterator}},c=class extends r{set true(t){this._true=t}set false(t){this._false=t}set value(t){this._value=t}get true(){return this._true}get false(){return this._false}get value(){return this._value}};class u{static Import(t){var e;const n=new r("block_start");return(null===(e=t[0])||void 0===e?void 0:e.inputs)&&(n.next=u.loadBlock(t[0].inputs.command.block)),n}static CreateCommand(t){return"block_for"==t?new l(t):"block_if"==t||"block_if_else"==t?new c(t):new r(t)}static loadBlock(t){var e,n,i;const o=u.CreateCommand(t.type);return t.next&&(o.next=u.loadBlock(t.next.block)),o instanceof l&&((null===(e=t.inputs)||void 0===e?void 0:e.command)&&(o.command=u.loadBlock(t.inputs.command.block)),o.iterator=t.fields.iterator),o instanceof c&&((null===(n=t.inputs)||void 0===n?void 0:n.true)&&(o.true=u.loadBlock(t.inputs.true.block)),(null===(i=t.inputs)||void 0===i?void 0:i.false)&&(o.false=u.loadBlock(t.inputs.false.block)),o.value=t.fields.NAME),o}}var m=u;class p{constructor(t="",e=""){this.setItem(t,e)}setItem(t,e){this._name=t,this._image=e}remove(){this.element.remove()}get name(){return this._name}get image(){return this._image}set element(t){this._element=t}get element(){return this._element}static Queijo(){return new p("Queijo","queijo.png")}static Pao(){return new p("Pao","pao.png")}static Presunto(){return new p("Presunto","presunto.png")}static Ovo(){return new p("Ovo","ovo.png")}static Leite(){return new p("Leite","leite.png")}static Farinha(){return new p("Farinha","farinha.png")}static Hidden(){return new p("Oculto","question.png")}static Chocolate(){return new p("Chocolate","chocolate.png")}}var h=p;class d{static Start(){this.mapElement=document.querySelector("#map"),this.homeElement=document.querySelector("#home"),this.map=[];for(let t=0;t<this.columns;t++){const e=document.createElement("div");e.setAttribute("x",String(t));const n=[];for(let i=0;i<this.lines;i++){const o=document.createElement("div");o.setAttribute("y",String(t)),o.setAttribute("x",String(i)),0==t||11==t||22==t||0==i||9==i||18==i?(o.classList.add("border"),n.push(null),o.setAttribute("solid","false"),o.innerHTML=`<span>${t}x${i}</span>`):(o.setAttribute("solid","true"),n.push(!0)),e.append(o)}this.map.push(n),this.mapElement.querySelector(".grid").append(e)}}static CreateItem(t,e,n){this.SetMap(e,n,t)}static GetItem(t,e){const n=this.GetMap(t,e);return n instanceof h&&n}static RemoveItem(t,e){const n=this.GetItem(t,e);return n instanceof h&&(this.SetMap(t,e,!0),n)}static IsCollider(t,e){return t<0||e<0||t>this.lines-1||e>this.columns-1||t>0&&t<this.columns&&e>0&&e<this.lines&&!0===this.GetMap(t,e)}static SetHome(t,e){const n=this.GetPosition(t,e);this.homeElement.style.top=n.y+"px",this.homeElement.style.left=n.x+"px",this.positionHome={x:t,y:e}}static GetHome(){return this.positionHome}static IsHome(t,e){return t==this.positionHome.x&&e==this.positionHome.y}static GetMap(t,e){return this.map[e][t]}static SetMap(t,e,n){if(n instanceof h){const i=this.GetPosition(t,e),o=document.createElement("img");o.classList.add("item"),o.style.top=i.y+"px",o.style.left=i.x+"px",o.src="/static/items/"+n.image,this.mapElement.querySelector("#items").append(o),n.element=o}const i=this.GetMap(t,e);i instanceof h&&i.remove(),this.map[t][e]=n}static GetPosition(t,e){return{x:t*this.size,y:e*this.size}}}d.positionHome={x:0,y:0},d.columns=23,d.lines=19,d.size=30,d.map=[];var f=d;class v{static Start(){this.playerElement=document.querySelector("#player"),this.transform={position:this._initialPosition,rotation:"up"},v.ChangeSkin("normal.png")}static AddItem(t){this.inventory=t,v.ChangeSkin(t.image)}static RemoveItem(){const t=this.inventory;return this.inventory=null,v.ChangeSkin("normal.png"),t}static ChangeSkin(t){this.playerElement.style.backgroundImage=`url(/static/player/${t})`}static Reset(){this.Rotation("up"),v.ChangeSkin("normal.png"),this.SetPosition(this._initialPosition.y,this._initialPosition.x)}static Run(){this.Reset()}static Move(){let{x:t,y:e}=this.transform.position;switch(this.rotation){case"up":t-=1;break;case"down":t+=1;break;case"left":e-=1;break;case"right":e+=1}f.IsCollider(t,e)||this.SetPosition(t,e)}static Left(){this.Rotation(v.hashRotation[this.rotation].previous)}static Right(){this.Rotation(v.hashRotation[this.rotation].next)}static Rotation(t){this.transform.rotation=t,this.playerElement.style.transform=`rotate(${{up:0,left:270,right:90,down:180}[t]}deg)`}static SetPosition(t,e){0==f.IsCollider(t,e)?(this.transform.position={x:t,y:e},this.UpdatePosition()):(console.log("Oi"),document.querySelector("#message").innerHTML="Não é possível caminhar")}static UpdatePosition(){const{x:t,y:e}=this.worldPosition;this.playerElement.style.top=t+"px",this.playerElement.style.left=e+"px"}static SetInitialPosition(t,e){this._initialPosition={x:t,y:e},this.SetPosition(this._initialPosition.y,this._initialPosition.x)}static get position(){return this.transform.position}static get worldPosition(){const{x:t,y:e}=this.transform.position;return f.GetPosition(t,e)}static get rotation(){return this.transform.rotation}static get initialPosition(){return this._initialPosition}}v._initialPosition={x:0,y:0},v.hashRotation={left:{previous:"down",next:"up"},up:{previous:"left",next:"right"},right:{previous:"up",next:"down"},down:{previous:"right",next:"left"}};var y=v,g=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};class _{constructor(t){this.command=t}static delay(t){return new Promise((e=>setTimeout(e,t)))}Run(){return g(this,void 0,void 0,(function*(){y.Reset();let t=this.command.next;for(;null!=t;)yield this.RunCommand(t),t=t.next}))}RunCommand(t){return g(this,void 0,void 0,(function*(){if(t instanceof c){const e=f.GetItem(y.position.x,y.position.y);if(e&&e.name==t.value){let e=t.true;for(;null!=e;)yield this.RunCommand(e),e=e.next}else{let e=t.false;for(;null!=e;)yield this.RunCommand(e),e=e.next}}else if(t instanceof l)for(let e=0;e<t.iterator;e++){let e=t.command;for(;null!=e;)yield this.RunCommand(e),e=e.next}else switch(t.name){case"block_move":y.Move();break;case"block_left":y.Left();break;case"block_right":y.Right();break;case"block_pickup":const t=f.RemoveItem(y.position.x,y.position.y);t&&y.AddItem(t)}yield _.delay(800)}))}}var b=_,k=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};const x=new class{constructor(t){this.level=t,t.app=this}Start(){f.Start(),y.Start(),this.level.Start(),this.workspace=s().inject("blocklyDiv",{toolbox:this.toolbox}),s().serialization.blocks.append({type:"block_start",x:200,y:200},this.workspace)}Run(){return t=this,e=void 0,i=function*(){const t=this.GenerateCommand(),e=new b(t);yield e.Run()},new((n=void 0)||(n=Promise))((function(o,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}));var t,e,n,i}Import(t){s().defineBlocksWithJsonArray(t),s().Blocks.block_start={init:function(){this.appendDummyInput().appendField("Começar"),this.appendStatementInput("command").setCheck(null),this.setColour(180),this.setEditable(!1),this.setMovable(!1),this.moveBy(0,0)}}}ToolBox(t){this.toolbox={kind:"flyoutToolbox",contents:t.map((t=>({type:t,kind:"block"})))}}GenerateCommand(){const t=s().serialization.workspaces.save(this.workspace);return m.Import(t.blocks.blocks)}}(new class{constructor(){this.playElement=document.querySelector("#play"),this.playElement.onclick=this._onClick.bind(this),this.playElement.classList.remove("disabled")}_onClick(){return k(this,void 0,void 0,(function*(){this.playElement.classList.add("disabled"),yield this.Run(),this.playElement.classList.remove("disabled")}))}Start(){this.app.ToolBox(["block_move","block_left","block_right","block_pickup","block_if","block_if_else","block_for"]),f.CreateItem(h.Ovo(),0,14),f.CreateItem(h.Ovo(),11,6),f.CreateItem(h.Farinha(),11,18),f.CreateItem(h.Leite(),22,3),y.SetInitialPosition(5,9),f.SetHome(5,9)}Run(){return k(this,void 0,void 0,(function*(){yield this.app.Run(),alert("Fim")}))}Finish(){}get app(){return this._app}set app(t){this._app=t}});x.Import(i),x.Start()}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,i),s.exports}i.m=e,t=[],i.O=function(e,n,o,s){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(r=!1,s<a&&(a=s));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,a=n[0],r=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var u=l(i)}for(e&&e(n);c<a.length;c++)s=a[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=i.O(void 0,[747],(function(){return i(6)}));o=i.O(o)}();
//# sourceMappingURL=main.a31c859b.js.map