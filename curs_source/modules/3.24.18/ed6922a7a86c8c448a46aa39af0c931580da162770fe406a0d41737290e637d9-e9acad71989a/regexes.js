import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var t6l, zpf, n6l;
export { n6l, t6l, zpf };
var __wakaru_g6t_initialized = false;
export function g6t() {
if (__wakaru_g6t_initialized) return;
__wakaru_g6t_initialized = true;
x(), cv(), t6l = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", zpf = new RegExp(`^${t6l}$`), n6l = (e)=>{
    const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
};

}
