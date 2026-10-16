import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { HDd, aT } from "./controlled_2.ts";
import { VDd, cT } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var rkt;
export { rkt };
var __wakaru_tPd_initialized = false;
export function tPd() {
if (__wakaru_tPd_initialized) return;
__wakaru_tPd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), rkt = Nw(mw.shellStreamExecutor, (e)=>new VDd(e, wC("shellStreamArgs"), CC("shellStream")), (e, t)=>{
    t.register(new HDd(e, EC("shellStreamArgs"), TC("shellStream")));
});

}
