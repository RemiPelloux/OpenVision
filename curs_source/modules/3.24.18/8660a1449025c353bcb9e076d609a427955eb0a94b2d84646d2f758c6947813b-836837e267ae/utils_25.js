import { Pze, VTi } from "./trustedDomains.js";
import { E } from "./tslib.es6.js";
var Ong;
export { Ong };
var __wakaru_Bhk_initialized = false;
export function Bhk() {
if (__wakaru_Bhk_initialized) return;
__wakaru_Bhk_initialized = true;
"use strict";
E(), VTi(), Ong = (t, e)=>{
    try {
        const n = t.get(Pze, -1);
        let i = [];
        n && (i = JSON.parse(n));
        const r = i.indexOf(e) !== -1;
        return r || (i.push(e), t.store(Pze, JSON.stringify(i), -1, 0)), ()=>{
            if (!r) try {
                const s = t.get(Pze, -1);
                if (s) {
                    const a = JSON.parse(s).filter((l)=>l !== e);
                    t.store(Pze, JSON.stringify(a), -1, 0);
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
