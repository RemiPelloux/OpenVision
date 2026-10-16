import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var Zus, Qus, Jus;
export { Jus, Qus, Zus };
var __wakaru_FX_initialized = false;
export function FX() {
if (__wakaru_FX_initialized) return;
__wakaru_FX_initialized = true;
"use strict";
E(), Eo(), ((t)=>{
    function e() {
        return Jus.INSTANCE.getTerminalContributions();
    }
    t.getTerminalContributions = e;
})(Zus || (Zus = {})), Qus = class {
    constructor(){
        this._terminalContributions = [];
    }
    registerTerminalContribution(e) {
        this._terminalContributions.push(e);
    }
    getTerminalContributions() {
        return this._terminalContributions.slice(0);
    }
}, Qus.INSTANCE = new Qus, Jus = Qus, Fi.add("terminal.contributions", Jus.INSTANCE);

}
