import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
import { U2u } from "./web_fetch_allowlist_precheck_exec_pb.js";
var RPd;
export { RPd };
var __wakaru_o0v_initialized = false;
export function o0v() {
if (__wakaru_o0v_initialized) return;
__wakaru_o0v_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), U2u(), RPd = Nw(mw.webFetchAllowlistPrecheckExecutor, (e)=>new kC(e, wC("webFetchAllowlistPrecheckArgs"), CC("webFetchAllowlistPrecheckResult")), (e, t)=>{
    t.register(new SC(e, EC("webFetchAllowlistPrecheckArgs"), TC("webFetchAllowlistPrecheckResult")));
});

}
