import { x } from "./tslib.es6.js";
var Ktu, GHf, Ytu;
export { GHf, Ktu, Ytu };
var __wakaru_VHf_initialized = false;
export function VHf() {
if (__wakaru_VHf_initialized) return;
__wakaru_VHf_initialized = true;
x(), Ktu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", GHf = new RegExp(`^${Ktu}$`), Ytu = (e)=>{
    const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
};

}
