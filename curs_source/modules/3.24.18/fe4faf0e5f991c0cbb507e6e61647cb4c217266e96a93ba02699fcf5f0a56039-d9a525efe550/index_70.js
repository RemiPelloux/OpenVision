import { ik, vP } from "./index_69.js";
import { i } from "./plugin-brand-icon.js";
function pRt(r) {
    const e = {};
    let a = -1;
    for(; ++a < r.length;)Vlr(e, r[a]);
    return e;
}
function Vlr(r, e) {
    let a;
    for(a in e){
        const l = (mRt.call(r, a) ? r[a] : void 0) || (r[a] = {}), u = e[a];
        let p;
        if (u) for(p in u){
            mRt.call(l, p) || (l[p] = []);
            const m = u[p];
            Klr(l[p], Array.isArray(m) ? m : m ? [
                m
            ] : []);
        }
    }
}
function Klr(r, e) {
    let a = -1;
    const s = [];
    for(; ++a < e.length;)(e[a].add === "after" ? r : s).push(e[a]);
    ik(r, 0, 0, s);
}
var mRt;
export { Klr, Vlr, mRt, pRt };
var __wakaru_Xlr_initialized = false;
export function Xlr() {
if (__wakaru_Xlr_initialized) return;
__wakaru_Xlr_initialized = true;
vP(), mRt = {}.hasOwnProperty, i(pRt, "combineExtensions"), i(Vlr, "syntaxExtension"), i(Klr, "constructs");

}
