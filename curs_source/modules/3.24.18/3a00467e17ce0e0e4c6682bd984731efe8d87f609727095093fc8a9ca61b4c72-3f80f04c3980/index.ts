import { vl } from "./desktop-bridge.ts";
import { Tl } from "./permissions.ts";
import { w } from "./tslib.es6.js";
var __wakaru_Ol_initialized = false;
export function Ol() {
if (__wakaru_Ol_initialized) return;
__wakaru_Ol_initialized = true;
w(), vl(), Tl();

}
