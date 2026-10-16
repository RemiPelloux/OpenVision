import { Mt } from "./index_197.js";
import { Jka } from "./ipa.js";
import { E } from "./tslib.es6.js";
var wOs;
export { wOs };
var __wakaru_zt__initialized = false;
export function zt_() {
if (__wakaru_zt__initialized) return;
__wakaru_zt__initialized = true;
"use strict";
E(), Mt(), ((t)=>{
    function e(n, i) {
        if (n.length < 2) return n;
        const r = Jka(n.map((a)=>({
                path: i(a)
            }))), s = new Map(r.map((a, l)=>[
                a,
                l
            ])), o = r.length;
        return [
            ...n
        ].sort((a, l)=>(s.get(i(a)) ?? o) - (s.get(i(l)) ?? o));
    }
    t.orderByFileTree = e;
})(wOs || (wOs = {}));

}
