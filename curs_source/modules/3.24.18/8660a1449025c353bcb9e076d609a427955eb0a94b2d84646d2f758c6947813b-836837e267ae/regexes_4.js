import { E } from "./tslib.es6.js";
var njm;
export { njm };
var __wakaru_UV1_initialized = false;
export function UV1() {
if (__wakaru_UV1_initialized) return;
__wakaru_UV1_initialized = true;
E(), njm = (t)=>{
    const e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${e}$`);
};

}
