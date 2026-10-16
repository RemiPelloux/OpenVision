import { Ai, Oo, jn, mNt } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var nFt, Q9c, Zes;
export { Q9c, Zes, nFt };
var __wakaru_zpt_initialized = false;
export function zpt() {
if (__wakaru_zpt_initialized) return;
__wakaru_zpt_initialized = true;
"use strict";
x(), lo(), jn(), nFt = Oo ? '"Segoe WPC", "Segoe UI", sans-serif' : Ai ? "-apple-system, BlinkMacSystemFont, sans-serif" : 'system-ui, "Ubuntu", "Droid Sans", sans-serif', Q9c = async ()=>{
    try {
        return [
            ...await on.queryLocalFonts()
        ].map((i)=>i.family);
    } catch (e) {
        return console.error(`Failed to query fonts: ${e}`), [];
    }
}, Zes = async ()=>mNt ? (await Q9c()).map((n)=>({
            body: `${n}`
        })) : [];

}
