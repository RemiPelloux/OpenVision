import { bxi } from "./index_95.js";
var S_i = Object.create, TY = Object.defineProperty, E_i = Object.getOwnPropertyDescriptor, HAt = Object.getOwnPropertyNames, aYn = Object.getPrototypeOf, A_i = Object.prototype.hasOwnProperty, sYn = (r, e, a, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let l of HAt(e))!A_i.call(r, l) && l !== a && TY(r, l, {
        get: ()=>e[l],
        enumerable: !(s = E_i(e, l)) || s.enumerable
    });
    return r;
}, N$e = (r, e, a)=>(a = r != null ? S_i(aYn(r)) : {}, sYn(e || !r || !r.__esModule ? TY(a, "default", {
        value: r,
        enumerable: !0
    }) : a, r));
var fPt, Ymr;
export { A_i, E_i, HAt, N$e, S_i, Ymr, aYn, fPt };
var __wakaru_yxi_initialized = false;
export function yxi() {
if (__wakaru_yxi_initialized) return;
__wakaru_yxi_initialized = true;
fPt = N$e(bxi(), 1), Ymr = fPt.default.default || fPt.default;

}
