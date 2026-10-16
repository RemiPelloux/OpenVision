import { ELv } from "./checks_6.js";
import { x } from "./tslib.es6.js";
import { dGt } from "./util_4.js";
var __wakaru_eth_initialized = false;
export function eth() {
if (__wakaru_eth_initialized) return;
__wakaru_eth_initialized = true;
x(), ELv(), dGt();

}
