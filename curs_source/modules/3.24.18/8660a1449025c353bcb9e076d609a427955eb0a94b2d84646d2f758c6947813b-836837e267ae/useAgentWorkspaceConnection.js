import { Qe } from "./Iwo.js";
import { Am, cs } from "./Sol.js";
import { e_ } from "./jotaiSolidBridge.js";
import { E } from "./tslib.es6.js";
import { Lpe } from "./workspaceConnectionService.js";
import { pi } from "./ze.js";
var gDi, awf;
export { awf, gDi };
var __wakaru_Gow_initialized = false;
export function Gow() {
if (__wakaru_Gow_initialized) return;
__wakaru_Gow_initialized = true;
"use strict";
E(), Am(), pi(), Qe(), Lpe(), e_(), gDi = cs({
    version: 0,
    service: void 0
}), awf = cs(null, (t, e, n)=>{
    e(gDi, {
        version: t(gDi).version + 1,
        service: n.service
    });
});

}
