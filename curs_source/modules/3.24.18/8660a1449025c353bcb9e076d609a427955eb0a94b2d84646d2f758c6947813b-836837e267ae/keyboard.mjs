import { ASv, MXl } from "./ofv.js";
import { pFi, xSv } from "./state.mjs";
import { E } from "./tslib.es6.js";
var RSv;
export { RSv };
var __wakaru_Zf0_initialized = false;
export function Zf0() {
if (__wakaru_Zf0_initialized) return;
__wakaru_Zf0_initialized = true;
E(), xSv(), RSv = (t, e)=>{
    const n = t.currentTarget;
    if (!n) return;
    const i = ASv(()=>{
        if (pFi.has(n)) return;
        MXl(n, "down");
        const r = ASv(()=>{
            MXl(n, "up");
        }), s = ()=>MXl(n, "cancel");
        n.addEventListener("keyup", r, e), n.addEventListener("blur", s, e);
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", ()=>n.removeEventListener("keydown", i), e);
};

}
