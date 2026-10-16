import { cSn, lds } from "./shared.js";
import { x } from "./tslib.es6.js";
var o0i;
export { o0i };
var __wakaru_hds_initialized = false;
export function hds() {
if (__wakaru_hds_initialized) return;
__wakaru_hds_initialized = true;
x(), lds(), o0i = /jsdom|happydom/.test(cSn);

}
