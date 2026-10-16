import { APu, hpv } from "./AsyncAction.js";
import { RPu, mpv } from "./AsyncScheduler.js";
import { x } from "./tslib.es6.js";
var zUi;
export { zUi };
var __wakaru_Jzs_initialized = false;
export function Jzs() {
if (__wakaru_Jzs_initialized) return;
__wakaru_Jzs_initialized = true;
x(), hpv(), mpv(), zUi = new RPu(APu);

}
