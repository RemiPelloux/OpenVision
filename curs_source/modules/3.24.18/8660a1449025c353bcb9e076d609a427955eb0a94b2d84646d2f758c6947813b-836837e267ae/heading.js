import { ura } from "./encode-character-reference.js";
import { iXy } from "./format-heading-as-setext.js";
import { E } from "./tslib.es6.js";
var __wakaru_sXy_initialized = false;
export function sXy() {
if (__wakaru_sXy_initialized) return;
__wakaru_sXy_initialized = true;
E(), ura(), iXy();

}
