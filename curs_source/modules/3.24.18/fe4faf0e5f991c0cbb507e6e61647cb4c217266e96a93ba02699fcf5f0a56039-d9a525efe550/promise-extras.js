import { i } from "./plugin-brand-icon.js";
function orr(r) {
    return new Promise((e)=>{
        setTimeout(e, r);
    });
}
export { orr };
var __wakaru_Rki_initialized = false;
export function Rki() {
if (__wakaru_Rki_initialized) return;
__wakaru_Rki_initialized = true;
"use strict";
i(orr, "delay");

}
