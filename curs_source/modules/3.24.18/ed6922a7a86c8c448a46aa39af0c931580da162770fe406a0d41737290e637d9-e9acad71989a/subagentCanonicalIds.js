import { Ux, zd } from "./agent_pb.js";
import { x } from "./tslib.es6.js";
var qIv;
export { qIv };
var __wakaru_jkt_initialized = false;
export function jkt() {
if (__wakaru_jkt_initialized) return;
__wakaru_jkt_initialized = true;
"use strict";
x(), zd(), qIv = new Set([
    Ux.RUNNING,
    Ux.BACKGROUNDED
]);

}
