import { Ekf } from "./layout_2.js";
import { E } from "./tslib.es6.js";
var Ikf;
export { Ikf };
var __wakaru_Osw_initialized = false;
export function Osw() {
if (__wakaru_Osw_initialized) return;
__wakaru_Osw_initialized = true;
"use strict";
E(), Ekf(), Ikf = /[\u1100-\u11FF\u2E80-\u303F\u3040-\u30FF\u3130-\u318F\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA4CF\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/u;

}
