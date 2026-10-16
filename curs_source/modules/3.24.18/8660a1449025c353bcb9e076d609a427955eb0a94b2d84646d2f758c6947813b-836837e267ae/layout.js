import { IPS } from "./bidi.js";
import { Rqh, V_a } from "./ipa.js";
import { Hqh } from "./line-break.js";
import { E } from "./tslib.es6.js";
var __wakaru_s6r_initialized = false;
export function s6r() {
if (__wakaru_s6r_initialized) return;
__wakaru_s6r_initialized = true;
E(), IPS(), Rqh(), V_a(), Hqh();

}
