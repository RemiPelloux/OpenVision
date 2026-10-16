import { He, Se, bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var I9h;
export { I9h };
var __wakaru_uh__initialized = false;
export function uh_() {
if (__wakaru_uh__initialized) return;
__wakaru_uh__initialized = true;
"use strict";
x(), bt(), Se(), I9h = class extends He {
    constructor(e, t){
        super(), this._terminal = e, this._onDidExecuteText = t, this.type = 3, this._commands = [], this._onCommandFinished = this.add(new ve), this.onCommandFinished = this._onCommandFinished.event, this.add(this._terminal.onData((n)=>this._onData(n))), this.add(this._terminal.parser.registerCsiHandler({
            final: "J"
        }, (n)=>(n.length >= 1 && (n[0] === 2 || n[0] === 3) && this._clearCommandsInViewport(), !1))), this._onDidExecuteText && this.add(this._onDidExecuteText(()=>this._onEnter()));
    }
    get commands() {
        return this._commands;
    }
    _onData(e) {
        e === "\r" && this._onEnter();
    }
    _onEnter() {
        if (this._terminal && this._terminal.buffer.active.cursorX >= 2) {
            const e = this._terminal.registerMarker(0);
            e && (this._commands.push(e), this._onCommandFinished.fire(e));
        }
    }
    _clearCommandsInViewport() {
        let e = 0;
        for(let t = this._commands.length - 1; t >= 0 && !(this._commands[t].line < this._terminal.buffer.active.baseY); t--)e++;
        this._commands.splice(this._commands.length - e, e);
    }
    clearCommands() {
        this._commands.length = 0;
    }
};

}
