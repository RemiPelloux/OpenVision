import { v6g } from "./check-emphasis.js";
import { Xfs } from "./encode-character-reference.js";
import { Vpl } from "./encode-info.js";
import { _6g, jpl } from "./qIc.js";
import { x } from "./tslib.es6.js";
var __wakaru_b6g_initialized = false;
export function b6g() {
if (__wakaru_b6g_initialized) return;
__wakaru_b6g_initialized = true;
x(), v6g(), Xfs(), Vpl(), jpl.peek = _6g;

}
