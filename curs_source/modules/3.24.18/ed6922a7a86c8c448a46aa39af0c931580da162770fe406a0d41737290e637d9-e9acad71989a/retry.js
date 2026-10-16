import { N5 } from "./Observable_3.js";
import { MPu } from "./identity_2.js";
import { Rpv } from "./timer.js";
import { x } from "./tslib.es6.js";
var __wakaru_jpv_initialized = false;
export function jpv() {
if (__wakaru_jpv_initialized) return;
__wakaru_jpv_initialized = true;
x(), N5(), MPu(), Rpv();

}
