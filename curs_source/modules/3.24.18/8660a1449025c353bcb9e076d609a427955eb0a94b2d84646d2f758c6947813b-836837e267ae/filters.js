import { Fa } from "./Iwo.js";
import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
import { GHd, HWo, JHd, NCr, OCr, g3y, jfn, qHd } from "./ze.js";
var x3y, xyt, GWo, jCr, iWd, rWd, qWo, rnt, zWo, $Cr, C5e, snt, $fn, sWd, one, Hfn;
export { $Cr, $fn, C5e, GWo, Hfn, iWd, jCr, one, qWo, rWd, rnt, sWd, snt, x3y, xyt, zWo };
var __wakaru_s6_initialized = false;
export function s6() {
if (__wakaru_s6_initialized) return;
__wakaru_s6_initialized = true;
"use strict";
E(), du(), g3y(), Fa(), x3y = GHd.bind(void 0, !1), xyt = GHd.bind(void 0, !0), GWo = new Set, "()[]{}<>`'\"-/;:,.?!".split("").forEach((t)=>GWo.add(t.charCodeAt(0))), jCr = new Map, iWd = jfn(xyt, OCr, NCr), rWd = jfn(xyt, OCr, qHd), qWo = new kv(1e4), rnt = 128, zWo = JHd(2 * rnt), $Cr = JHd(2 * rnt), C5e = HWo(), snt = HWo(), $fn = HWo(), sWd = !1, ((t)=>{
    t.Default = [
        -100,
        0
    ];
    function e(n) {
        return !n || n.length === 2 && n[0] === -100 && n[1] === 0;
    }
    t.isDefault = e;
})(one || (one = {})), Hfn = class {
    constructor(t, e){
        this.firstMatchCanBeWeak = t, this.boostFullMatch = e;
    }
}, Hfn.default = {
    boostFullMatch: !0,
    firstMatchCanBeWeak: !1
};

}
