import { dfk } from "./default-auth.ts";
import { E } from "./tslib.es6.js";
var __wakaru_hfk_initialized = false;
export function hfk() {
if (__wakaru_hfk_initialized) return;
__wakaru_hfk_initialized = true;
E(), dfk();

}
