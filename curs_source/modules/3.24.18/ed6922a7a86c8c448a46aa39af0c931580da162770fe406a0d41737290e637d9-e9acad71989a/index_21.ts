import { kp_ } from "./telemetry-log.ts";
import { A4h } from "./transcript-book.ts";
import { x } from "./tslib.es6.js";
import { Pp_ } from "./turn-feed.ts";
import { L4h } from "./voice-storage.ts";
import { hrr } from "./words.ts";
var __wakaru_N4h_initialized = false;
export function N4h() {
if (__wakaru_N4h_initialized) return;
__wakaru_N4h_initialized = true;
x(), kp_(), A4h(), Pp_(), L4h(), hrr();

}
