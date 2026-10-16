import { Df, so } from "./ECo.js";
import { c_ } from "./jotaiSolidBridge.js";
import { $_, nc } from "./markers.js";
import { qn } from "./qIc.js";
import { Vs } from "./solidContext.js";
import { x } from "./tslib.es6.js";
var Vzt, S9n, jHh, qHh, zHh, KHh;
export { KHh, S9n, Vzt, jHh, qHh, zHh };
var __wakaru_ib__initialized = false;
export function ib_() {
if (__wakaru_ib__initialized) return;
__wakaru_ib__initialized = true;
"use strict";
x(), Df(), qn(), $_(), Vs(), c_(), Vzt = so([]), S9n = (e)=>so((t)=>t(Vzt).filter((n)=>n.severity === e)), jHh = S9n(nc.Error), qHh = S9n(nc.Warning), zHh = S9n(nc.Info), KHh = S9n(nc.Hint);

}
