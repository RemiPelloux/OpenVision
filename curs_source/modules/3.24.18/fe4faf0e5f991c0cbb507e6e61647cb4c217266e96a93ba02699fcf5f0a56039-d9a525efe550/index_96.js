import { A_i, E_i, HAt, yxi } from "./index_4.mjs";
import { i } from "./plugin-brand-icon.js";
import { wxi } from "./utilities.js";
var TY = Object.defineProperty, sYn = (r, e, a, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let l of HAt(e))!A_i.call(r, l) && l !== a && TY(r, l, {
        get: ()=>e[l],
        enumerable: !(s = E_i(e, l)) || s.enumerable
    });
    return r;
}, I_i = (r)=>sYn(TY({}, "__esModule", {
        value: !0
    }), r);
var Xmr = {};
export { I_i, Xmr };
var __wakaru__xi_cache;
export function _xi() {
if (__wakaru__xi_cache) return __wakaru__xi_cache.exports;
var r = {};
var e = { exports: r };
__wakaru__xi_cache = e;
"use strict";
var a = r && r.__importDefault || function(p) {
    return p && p.__esModule ? p : {
        default: p
    };
}, s = a((yxi(), I_i(Xmr))), l = wxi();
function u(p, m) {
    var b = {};
    return !p || typeof p != "string" || (0, s.default)(p, function(g, _) {
        g && _ && (b[(0, l.camelCase)(g, m)] = _);
    }), b;
}
i(u, "StyleToJS"), u.default = u, e.exports = u;

return e.exports;
}
