import { E } from "./tslib.es6.js";
var opp, qt1, app;
export { app, opp, qt1 };
var __wakaru_zt1_initialized = false;
export function zt1() {
if (__wakaru_zt1_initialized) return;
__wakaru_zt1_initialized = true;
E(), opp = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", qt1 = new RegExp(`^${opp}$`), app = (t)=>{
    const e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${e}$`);
};

}
