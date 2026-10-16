import { ucs } from "./anchors.js";
import { NE } from "./identity.js";
import { Nwi } from "./stringifyComment.js";
import { Uwi } from "./stringifyString.js";
import { x } from "./tslib.es6.js";
var __wakaru_$wi_initialized = false;
export function $wi() {
if (__wakaru_$wi_initialized) return;
__wakaru_$wi_initialized = true;
x(), ucs(), NE(), Nwi(), Uwi();

}
