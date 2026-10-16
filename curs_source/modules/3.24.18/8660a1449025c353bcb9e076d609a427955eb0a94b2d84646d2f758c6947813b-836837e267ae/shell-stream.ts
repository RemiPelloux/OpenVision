import { Sym, wA } from "./controlled_2.ts";
import { CA, Cym } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var lGt;
export { lGt };
var __wakaru_NSm_initialized = false;
export function NSm() {
if (__wakaru_NSm_initialized) return;
__wakaru_NSm_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), lGt = BT(pT.shellStreamExecutor, (t)=>new Cym(t, kE("shellStreamArgs"), wE("shellStream")), (t, e)=>{
    e.register(new Sym(t, TE("shellStreamArgs"), CE("shellStream")));
});

}
