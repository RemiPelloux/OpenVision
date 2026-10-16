import { cjg } from "./dangerous.js";
import { ojg } from "./index_121.js";
import { ajg, uIi } from "./index_122.js";
import { x } from "./tslib.es6.js";
var jys, dIi, hIi, iEl;
export { dIi, hIi, iEl, jys };
var __wakaru_ujg_initialized = false;
export function ujg() {
if (__wakaru_ujg_initialized) return;
__wakaru_ujg_initialized = true;
x(), ojg(), ajg(), cjg(), jys = {}.hasOwnProperty, dIi = {};
for(hIi in uIi)jys.call(uIi, hIi) && (dIi[uIi[hIi]] = hIi);
iEl = /[^\dA-Za-z]/;

}
