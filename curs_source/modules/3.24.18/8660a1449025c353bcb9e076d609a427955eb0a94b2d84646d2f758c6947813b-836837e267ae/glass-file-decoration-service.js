import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { eye, l9e } from "./decorations_2.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var T6i, L2v, MPs;
export { L2v, MPs, T6i };
var __wakaru_wtc_initialized = false;
export function wtc() {
if (__wakaru_wtc_initialized) return;
__wakaru_wtc_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), l9e(), T6i = jn("glassFileDecorationService"), L2v = {
    M: "modified",
    A: "added",
    D: "deleted",
    R: "renamed",
    U: "untracked",
    T: "modified",
    C: "added"
}, MPs = class extends st {
    constructor(t){
        super(), this._decorationsService = t;
    }
    getDecoration(t, e) {
        const n = this._decorationsService.getDecoration(t, e ?? !1);
        if (!n) return;
        const i = n.letter;
        if (!i) {
            n.dispose();
            return;
        }
        const r = L2v[i];
        if (!r) {
            n.dispose();
            return;
        }
        return n.dispose(), {
            letter: i,
            status: r
        };
    }
    onDidChange(t) {
        return this._decorationsService.onDidChangeDecorations(t);
    }
}, MPs = Re([
    F(0, eye)
], MPs), bn(T6i, MPs, 1);

}
