import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
var xnr, Inr, Anr;
export { Anr, Inr, xnr };
var __wakaru_Q6_initialized = false;
export function Q6() {
if (__wakaru_Q6_initialized) return;
__wakaru_Q6_initialized = true;
"use strict";
x(), rr(), ((e)=>{
    function t() {
        return Anr.INSTANCE.getTerminalContributions();
    }
    e.getTerminalContributions = t;
})(xnr || (xnr = {})), Inr = class {
    constructor(){
        this._terminalContributions = [];
    }
    registerTerminalContribution(t) {
        this._terminalContributions.push(t);
    }
    getTerminalContributions() {
        return this._terminalContributions.slice(0);
    }
}, Inr.INSTANCE = new Inr, Anr = Inr, kn.add("terminal.contributions", Anr.INSTANCE);

}
