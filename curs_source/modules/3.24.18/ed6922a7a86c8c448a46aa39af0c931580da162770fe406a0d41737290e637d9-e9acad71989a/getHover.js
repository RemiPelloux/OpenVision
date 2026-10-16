import { si } from "./HVr.js";
import { bn } from "./async.js";
import { Ar, Ji } from "./cancellation.js";
import { yc } from "./editorExtensions.js";
import { Jc, kh } from "./languageFeatures.js";
import { G$c, IK } from "./qIc.js";
import { x } from "./tslib.es6.js";
var V$c;
export { V$c };
var __wakaru_j$c_initialized = false;
export function j$c() {
if (__wakaru_j$c_initialized) return;
__wakaru_j$c_initialized = true;
"use strict";
x(), bn(), Ar(), si(), yc(), kh(), V$c = class {
    constructor(e, t, n){
        this.provider = e, this.hover = t, this.ordinal = n;
    }
}, IK("_executeHoverProvider", (e, t, n)=>{
    const i = e.get(Jc);
    return G$c(i.hoverProvider, t, n, Ji.None);
}), IK("_executeHoverProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc);
    return G$c(i.hoverProvider, t, n, Ji.None, !0);
});

}
