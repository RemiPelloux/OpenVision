import { Di, _r, gdn, xa } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var xsi, tWo, nWo;
export { nWo, tWo, xsi };
var __wakaru_fBt_initialized = false;
export function fBt() {
if (__wakaru_fBt_initialized) return;
__wakaru_fBt_initialized = true;
"use strict";
E(), Bs(), Di(), xsi = xa ? '"Segoe WPC", "Segoe UI", sans-serif' : _r ? "-apple-system, BlinkMacSystemFont, sans-serif" : 'system-ui, "Ubuntu", "Droid Sans", sans-serif', tWo = async ()=>{
    try {
        return [
            ...await $t.queryLocalFonts()
        ].map((i)=>i.family);
    } catch (t) {
        return console.error(`Failed to query fonts: ${t}`), [];
    }
}, nWo = async ()=>gdn ? (await tWo()).map((n)=>({
            body: `${n}`
        })) : [];

}
