import { M5e } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zXc, qKe;
export { qKe, zXc };
var __wakaru_Nwi_initialized = false;
export function Nwi() {
if (__wakaru_Nwi_initialized) return;
__wakaru_Nwi_initialized = true;
x(), zXc = (e)=>e.replace(/^(?!$)(?: $)?/gm, "#"), qKe = (e, t, n)=>e.endsWith(`
`) ? M5e(n, t) : n.includes(`
`) ? `
` + M5e(n, t) : (e.endsWith(" ") ? "" : " ") + n;

}
