import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Cl, Gu } from "./quickInput.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var xce, HPs;
export { HPs, xce };
var __wakaru_vYe_initialized = false;
export function vYe() {
if (__wakaru_vYe_initialized) return;
__wakaru_vYe_initialized = true;
"use strict";
E(), Rn(), It(), Gu(), Gu(), xce = Il("glassQuickInputService"), HPs = class {
    constructor(t){
        this._quickInputService = t;
    }
    pick(t, e, n) {
        return this._quickInputService.pick(t, e, n);
    }
    input(t, e) {
        return this._quickInputService.input(t, e);
    }
    createQuickPick(t) {
        return this._quickInputService.createQuickPick(t);
    }
}, HPs = Re([
    F(0, Cl)
], HPs), bn(xce, HPs, 1, 1);

}
