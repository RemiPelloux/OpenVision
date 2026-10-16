import { jrf } from "./Ycg.js";
import { h8k } from "./realtime-session.ts";
import { YPn } from "./realtime-wire.ts";
import { p8k } from "./system-clock.ts";
import { E } from "./tslib.es6.js";
var __wakaru_afs_initialized = false;
export function afs() {
if (__wakaru_afs_initialized) return;
__wakaru_afs_initialized = true;
E(), YPn(), h8k(), jrf(), p8k();

}
