import { nkt, wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var SMd, kMd;
export { SMd, kMd };
var __wakaru_Kkv_initialized = false;
export function Kkv() {
if (__wakaru_Kkv_initialized) return;
__wakaru_Kkv_initialized = true;
"use strict";
x(), wX(), VU(), SMd = (e)=>typeof e == "string", kMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    if (e == null || Object.keys(e).length === 0) return wN(!0, []);
    const n = [];
    if (!nkt(e)) return n.push("PreCompact response must be an object"), wN(!1, n);
    const i = e;
    return i.user_message !== void 0 && !SMd(i.user_message) && n.push("user_message must be a string"), wN(n.length === 0, n);
};

}
