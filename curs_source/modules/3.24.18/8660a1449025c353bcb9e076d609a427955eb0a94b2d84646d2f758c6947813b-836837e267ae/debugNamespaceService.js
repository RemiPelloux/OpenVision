import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { ks, pi } from "./ze.js";
var UB, KZr;
export { KZr, UB };
var __wakaru_CJ_initialized = false;
export function CJ() {
if (__wakaru_CJ_initialized) return;
__wakaru_CJ_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Ji(), pi(), Gt(), UB = Il("devConsoleService"), KZr = class extends st {
    constructor(t){
        super(), this.logService = t, this._onDidRegisterFunction = this._register(new tt), this.onDidRegisterFunction = this._onDidRegisterFunction.event, this.debugFunctions = new Map, this.registrationStacks = new Map;
    }
    register(t, e) {
        this.debugFunctions.has(t) && this.logService.trace(`[Debug] Function '${t}' already registered, shadowing the previous registration until this one is disposed`);
        const n = (...s)=>ks(()=>e(...s)), i = {
            fn: n
        };
        let r = this.registrationStacks.get(t);
        return r || (r = [], this.registrationStacks.set(t, r)), r.push(i), this.debugFunctions.set(t, n), this._onDidRegisterFunction.fire({
            name: t,
            fn: n
        }), Pn(()=>{
            const s = this.registrationStacks.get(t);
            if (!s) return;
            const o = s.indexOf(i);
            if (o === -1) return;
            const a = o === s.length - 1;
            s.splice(o, 1), s.length === 0 ? (this.registrationStacks.delete(t), this.debugFunctions.delete(t)) : a && this.debugFunctions.set(t, s[s.length - 1].fn);
        });
    }
    getDebugFunctions() {
        return this.debugFunctions;
    }
}, KZr = Re([
    F(0, Li)
], KZr), bn(UB, KZr, 1, 1);

}
