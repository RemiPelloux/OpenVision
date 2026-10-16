import { fbv } from "./batcher.mjs";
import { xR } from "./index_10.mjs";
import { NQt } from "./noop.mjs";
import { mbv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var oEe, BAs, sFi, tg0;
export { BAs, oEe, sFi, tg0 };
var __wakaru_bRt_initialized = false;
export function bRt() {
if (__wakaru_bRt_initialized) return;
__wakaru_bRt_initialized = true;
E(), xR(), fbv(), { schedule: oEe, cancel: BAs, state: sFi, steps: tg0 } = mbv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : NQt, !0);

}
