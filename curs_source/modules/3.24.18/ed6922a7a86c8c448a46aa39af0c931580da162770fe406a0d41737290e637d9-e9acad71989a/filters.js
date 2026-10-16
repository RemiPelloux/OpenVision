import { Ps } from "./HVr.js";
import { ag, oc } from "./map.js";
import { Hts, N4c, Pts, Yze, cbi, lFt, wbg, x4c } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Nbg, Xze, Gts, dbi, U4c, $4c, Vts, c5e, jts, hbi, Dwe, l5e, uFt, H4c, jV, dFt;
export { $4c, Dwe, Gts, H4c, Nbg, U4c, Vts, Xze, c5e, dFt, dbi, hbi, jV, jts, l5e, uFt };
var __wakaru_Yy_initialized = false;
export function Yy() {
if (__wakaru_Yy_initialized) return;
__wakaru_Yy_initialized = true;
"use strict";
x(), oc(), wbg(), Ps(), Nbg = x4c.bind(void 0, !1), Xze = x4c.bind(void 0, !0), Gts = new Set, "()[]{}<>`'\"-/;:,.?!".split("").forEach((e)=>Gts.add(e.charCodeAt(0))), dbi = new Map, U4c = lFt(Xze, cbi, Yze), $4c = lFt(Xze, cbi, Pts), Vts = new ag(1e4), c5e = 128, jts = N4c(2 * c5e), hbi = N4c(2 * c5e), Dwe = Hts(), l5e = Hts(), uFt = Hts(), H4c = !1, ((e)=>{
    e.Default = [
        -100,
        0
    ];
    function t(n) {
        return !n || n.length === 2 && n[0] === -100 && n[1] === 0;
    }
    e.isDefault = t;
})(jV || (jV = {})), dFt = class {
    constructor(e, t){
        this.firstMatchCanBeWeak = e, this.boostFullMatch = t;
    }
}, dFt.default = {
    boostFullMatch: !0,
    firstMatchCanBeWeak: !1
};

}
