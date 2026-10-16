import { hds } from "./env_2.js";
import { W5e } from "./os.js";
import { x } from "./tslib.es6.js";
var __wakaru_lj_initialized = false;
export function lj() {
if (__wakaru_lj_initialized) return;
__wakaru_lj_initialized = true;
x(), W5e(), hds();

}
