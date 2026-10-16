import { e4g } from "./check-strong.js";
import { Xfs } from "./encode-character-reference.js";
import { Vpl } from "./encode-info.js";
import { sml, t4g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var __wakaru_n4g_initialized = false;
export function n4g() {
if (__wakaru_n4g_initialized) return;
__wakaru_n4g_initialized = true;
x(), e4g(), Xfs(), Vpl(), sml.peek = t4g;

}
