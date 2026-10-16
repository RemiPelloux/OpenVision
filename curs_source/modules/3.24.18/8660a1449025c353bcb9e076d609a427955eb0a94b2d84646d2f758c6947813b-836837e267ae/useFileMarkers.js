import { Am, cs } from "./Sol.js";
import { e_ } from "./jotaiSolidBridge.js";
import { ed, rT } from "./markers.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var N3n, tNi, dLf, hLf, pLf, mLf;
export { N3n, dLf, hLf, mLf, pLf, tNi };
var __wakaru_X1w_initialized = false;
export function X1w() {
if (__wakaru_X1w_initialized) return;
__wakaru_X1w_initialized = true;
"use strict";
E(), Am(), pi(), rT(), vo(), e_(), N3n = cs([]), tNi = (t)=>cs((e)=>e(N3n).filter((n)=>n.severity === t)), dLf = tNi(ed.Error), hLf = tNi(ed.Warning), pLf = tNi(ed.Info), mLf = tNi(ed.Hint);

}
