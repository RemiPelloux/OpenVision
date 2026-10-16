import { Fr, ii } from "./environment.js";
import { A1, M1 } from "./extensionsProfileScannerService.js";
import { Wt, cn } from "./files.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us } from "./userDataProfile.js";
var O1;
export { O1 };
var __wakaru_ret_initialized = false;
export function ret() {
if (__wakaru_ret_initialized) return;
__wakaru_ret_initialized = true;
"use strict";
h(), te(), Us(), Oi(), M1(), Wt(), Fr(), ye(), O1 = class extends A1 {
    constructor(e, t, n, r, s){
        super(x.file(e.extensionsPath), t, n, r, s);
    }
}, O1 = B([
    w(0, ii),
    w(1, cn),
    w(2, Ls),
    w(3, Br),
    w(4, Z)
], O1);

}
