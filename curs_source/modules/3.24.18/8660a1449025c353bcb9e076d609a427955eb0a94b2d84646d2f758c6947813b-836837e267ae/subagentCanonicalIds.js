import { _P, ju } from "./agent_pb.js";
import { E } from "./tslib.es6.js";
var iFm;
export { iFm };
var __wakaru_Aot_initialized = false;
export function Aot() {
if (__wakaru_Aot_initialized) return;
__wakaru_Aot_initialized = true;
"use strict";
E(), ju(), iFm = new Set([
    _P.RUNNING,
    _P.BACKGROUNDED
]);

}
