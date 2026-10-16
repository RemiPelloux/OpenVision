import { DsS } from "./to-decimal.js";
import { PsS } from "./to-hexadecimal.js";
import { BsS } from "./to-named.js";
import { E } from "./tslib.es6.js";
var __wakaru_jsS_initialized = false;
export function jsS() {
if (__wakaru_jsS_initialized) return;
__wakaru_jsS_initialized = true;
E(), PsS(), DsS(), BsS();

}
