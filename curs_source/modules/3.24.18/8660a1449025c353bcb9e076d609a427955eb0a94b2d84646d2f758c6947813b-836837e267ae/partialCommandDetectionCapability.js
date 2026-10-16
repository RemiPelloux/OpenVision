import { Gt, Nt, Qe, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var sPg;
export { sPg };
var __wakaru__Dk_initialized = false;
export function _Dk() {
if (__wakaru__Dk_initialized) return;
__wakaru__Dk_initialized = true;
"use strict";
E(), Gt(), Qe(), sPg = class extends Nt {
    constructor(t, e){
        super(), this._terminal = t, this._onDidExecuteText = e, this.type = 3, this._commands = [], this._onCommandFinished = this.add(new tt), this.onCommandFinished = this._onCommandFinished.event, this.add(this._terminal.onData((n)=>this._onData(n))), this.add(this._terminal.parser.registerCsiHandler({
            final: "J"
        }, (n)=>(n.length >= 1 && (n[0] === 2 || n[0] === 3) && this._clearCommandsInViewport(), !1))), this._onDidExecuteText && this.add(this._onDidExecuteText(()=>this._onEnter()));
    }
    get commands() {
        return this._commands;
    }
    _onData(t) {
        t === "\r" && this._onEnter();
    }
    _onEnter() {
        if (this._terminal && this._terminal.buffer.active.cursorX >= 2) {
            const t = this._terminal.registerMarker(0);
            t && (this._commands.push(t), this._onCommandFinished.fire(t));
        }
    }
    _clearCommandsInViewport() {
        let t = 0;
        for(let e = this._commands.length - 1; e >= 0 && !(this._commands[e].line < this._terminal.buffer.active.baseY); e--)t++;
        this._commands.splice(this._commands.length - t, t);
    }
    clearCommands() {
        this._commands.length = 0;
    }
};

}
