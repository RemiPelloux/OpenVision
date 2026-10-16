import { Ei } from "./Iwo.js";
import { qn } from "./async.js";
import { Xs, yo } from "./cancellation.js";
import { Ud } from "./editorExtensions.js";
import { Dg, Nd } from "./languageFeatures.js";
import { E } from "./tslib.es6.js";
import { LVd, Zde } from "./ze.js";
var OVd;
export { OVd };
var __wakaru_FVd_initialized = false;
export function FVd() {
if (__wakaru_FVd_initialized) return;
__wakaru_FVd_initialized = true;
"use strict";
E(), qn(), yo(), Ei(), Ud(), Dg(), OVd = class {
    constructor(t, e, n){
        this.provider = t, this.hover = e, this.ordinal = n;
    }
}, Zde("_executeHoverProvider", (t, e, n)=>{
    const i = t.get(Nd);
    return LVd(i.hoverProvider, e, n, Xs.None);
}), Zde("_executeHoverProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd);
    return LVd(i.hoverProvider, e, n, Xs.None, !0);
});

}
