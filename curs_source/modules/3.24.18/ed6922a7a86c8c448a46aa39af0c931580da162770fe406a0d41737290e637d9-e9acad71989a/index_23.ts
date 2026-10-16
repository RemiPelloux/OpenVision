import { C8h } from "./microphones.ts";
import { Zm_ } from "./realtime-session.ts";
import { Ezt } from "./realtime-wire.ts";
import { Qm_ } from "./system-clock.ts";
import { x } from "./tslib.es6.js";
var __wakaru_Trr_initialized = false;
export function Trr() {
if (__wakaru_Trr_initialized) return;
__wakaru_Trr_initialized = true;
x(), Ezt(), Zm_(), C8h(), Qm_();

}
