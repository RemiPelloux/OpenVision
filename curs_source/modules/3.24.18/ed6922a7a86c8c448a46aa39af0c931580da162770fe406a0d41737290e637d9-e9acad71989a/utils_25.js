import { JPe, WFn } from "./trustedDomains.js";
import { x } from "./tslib.es6.js";
var lvh;
export { lvh };
var __wakaru_wVv_initialized = false;
export function wVv() {
if (__wakaru_wVv_initialized) return;
__wakaru_wVv_initialized = true;
"use strict";
x(), WFn(), lvh = (e, t)=>{
    try {
        const n = e.get(JPe, -1);
        let i = [];
        n && (i = JSON.parse(n));
        const r = i.indexOf(t) !== -1;
        return r || (i.push(t), e.store(JPe, JSON.stringify(i), -1, 0)), ()=>{
            if (!r) try {
                const s = e.get(JPe, -1);
                if (s) {
                    const a = JSON.parse(s).filter((c)=>c !== t);
                    e.store(JPe, JSON.stringify(a), -1, 0);
                }
            } catch (s) {
                console.warn("Failed to remove URL from trusted domains:", s);
            }
        };
    } catch (n) {
        return console.warn("Failed to temporarily trust URL:", n), ()=>{};
    }
};

}
