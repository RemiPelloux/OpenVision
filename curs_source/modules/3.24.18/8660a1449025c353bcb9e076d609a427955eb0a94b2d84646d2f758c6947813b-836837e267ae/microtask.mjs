import { fbv } from "./batcher.mjs";
import { mbv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var SSv, Hf0;
export { Hf0, SSv };
var __wakaru_Wf0_initialized = false;
export function Wf0() {
if (__wakaru_Wf0_initialized) return;
__wakaru_Wf0_initialized = true;
E(), fbv(), { schedule: SSv, cancel: Hf0 } = mbv(queueMicrotask, !1);

}
