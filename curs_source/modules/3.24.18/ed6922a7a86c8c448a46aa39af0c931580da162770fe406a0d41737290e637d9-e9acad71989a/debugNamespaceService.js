import { Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { lr, mn, pd, qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var KU, aji;
export { KU, aji };
var __wakaru_Hee_initialized = false;
export function Hee() {
if (__wakaru_Hee_initialized) return;
__wakaru_Hee_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), Qn(), qn(), bt(), KU = pd("devConsoleService"), aji = class extends we {
    constructor(e){
        super(), this.logService = e, this._onDidRegisterFunction = this._register(new ve), this.onDidRegisterFunction = this._onDidRegisterFunction.event, this.debugFunctions = new Map, this.registrationStacks = new Map;
    }
    register(e, t) {
        this.debugFunctions.has(e) && this.logService.trace(`[Debug] Function '${e}' already registered, shadowing the previous registration until this one is disposed`);
        const n = (...s)=>lr(()=>t(...s)), i = {
            fn: n
        };
        let r = this.registrationStacks.get(e);
        return r || (r = [], this.registrationStacks.set(e, r)), r.push(i), this.debugFunctions.set(e, n), this._onDidRegisterFunction.fire({
            name: e,
            fn: n
        }), rn(()=>{
            const s = this.registrationStacks.get(e);
            if (!s) return;
            const o = s.indexOf(i);
            if (o === -1) return;
            const a = o === s.length - 1;
            s.splice(o, 1), s.length === 0 ? (this.registrationStacks.delete(e), this.debugFunctions.delete(e)) : a && this.debugFunctions.set(e, s[s.length - 1].fn);
        });
    }
    getDebugFunctions() {
        return this.debugFunctions;
    }
}, aji = ie([
    C(0, Wn)
], aji), mn(KU, aji, 1, 1);

}
