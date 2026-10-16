import { x } from "./tslib.es6.js";
var uth;
export { uth };
var __wakaru_NLv_initialized = false;
export function NLv() {
if (__wakaru_NLv_initialized) return;
__wakaru_NLv_initialized = true;
x(), uth = (e)=>{
    const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
};

}
