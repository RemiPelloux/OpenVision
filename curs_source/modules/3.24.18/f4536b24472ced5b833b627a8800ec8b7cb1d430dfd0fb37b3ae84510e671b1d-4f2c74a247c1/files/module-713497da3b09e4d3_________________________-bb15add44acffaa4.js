import { R6 } from "./ar-x-fm.json";
import { N6 } from "./ar.json";
import { P6 } from "./bg.json";
import { _6 } from "./bn.json";
import { M6 } from "./ca.json";
import { O6 } from "./cs.json";
import { D6 } from "./da.json";
import { L6 } from "./de.json";
import { F6 } from "./el.json";
import { V6 } from "./en-gb.json";
import { B6 } from "./en-ss.json";
import { U6 } from "./en-xx.json";
import { j6 } from "./en.json";
import { z6 } from "./es.json";
import { H6 } from "./fa.json";
import { G6 } from "./fi.json";
import { $6 } from "./fil.json";
import { K6 } from "./fr.json";
import { W6 } from "./gu.json";
import { Y6 } from "./he.json";
import { X6 } from "./hi.json";
import { Z6 } from "./hr.json";
import { q6 } from "./hu.json";
import { Q6 } from "./id.json";
import { J6 } from "./it.json";
import { eV } from "./ja.json";
import { tV } from "./kn.json";
import { rV } from "./ko.json";
import { nV } from "./mr.json";
import { oV } from "./msa.json";
import { aV } from "./nl.json";
import { iV } from "./no.json";
import { sV } from "./pl.json";
import { cV } from "./pt.json";
import { lV } from "./ro.json";
import { mV } from "./ru.json";
import { uV } from "./sk.json";
import { dV } from "./sr.json";
import { pV } from "./sv.json";
import { fV } from "./ta.json";
import { hV } from "./th.json";
import { xV } from "./tr.json";
import { gV } from "./uk.json";
import { vV } from "./vi.json";
import { bV } from "./zh-cn.json";
import { yV } from "./zh-tw.json";
var WF = Object.create, rc = Object.defineProperty, YF = Object.getOwnPropertyDescriptor, Wu = Object.getOwnPropertyNames, XF = Object.getPrototypeOf, ZF = Object.prototype.hasOwnProperty, qF = (e)=>(t)=>{
        var r = e[t];
        if (r) return r();
        throw new Error("Module not found in bundle: " + t);
    }, QF = (e, t, r, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of Wu(t))!ZF.call(e, o) && o !== r && rc(e, o, {
        get: ()=>t[o],
        enumerable: !(n = YF(t, o)) || n.enumerable
    });
    return e;
}, Te = (e, t, r)=>(r = e != null ? WF(XF(e)) : {}, QF(t || !e || !e.__esModule ? rc(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
var T2;
export { T2, Te, WF, Wu, XF, YF, ZF, qF };
var __wakaru_wV_initialized = false;
export function wV() {
if (__wakaru_wV_initialized) return;
__wakaru_wV_initialized = true;
T2 = qF({
    "../messages/ar-x-fm.json": ()=>Promise.resolve().then(()=>Te(R6())),
    "../messages/ar.json": ()=>Promise.resolve().then(()=>Te(N6())),
    "../messages/bg.json": ()=>Promise.resolve().then(()=>Te(P6())),
    "../messages/bn.json": ()=>Promise.resolve().then(()=>Te(_6())),
    "../messages/ca.json": ()=>Promise.resolve().then(()=>Te(M6())),
    "../messages/cs.json": ()=>Promise.resolve().then(()=>Te(O6())),
    "../messages/da.json": ()=>Promise.resolve().then(()=>Te(D6())),
    "../messages/de.json": ()=>Promise.resolve().then(()=>Te(L6())),
    "../messages/el.json": ()=>Promise.resolve().then(()=>Te(F6())),
    "../messages/en-gb.json": ()=>Promise.resolve().then(()=>Te(V6())),
    "../messages/en-ss.json": ()=>Promise.resolve().then(()=>Te(B6())),
    "../messages/en-xx.json": ()=>Promise.resolve().then(()=>Te(U6())),
    "../messages/en.json": ()=>Promise.resolve().then(()=>Te(j6())),
    "../messages/es.json": ()=>Promise.resolve().then(()=>Te(z6())),
    "../messages/fa.json": ()=>Promise.resolve().then(()=>Te(H6())),
    "../messages/fi.json": ()=>Promise.resolve().then(()=>Te(G6())),
    "../messages/fil.json": ()=>Promise.resolve().then(()=>Te($6())),
    "../messages/fr.json": ()=>Promise.resolve().then(()=>Te(K6())),
    "../messages/gu.json": ()=>Promise.resolve().then(()=>Te(W6())),
    "../messages/he.json": ()=>Promise.resolve().then(()=>Te(Y6())),
    "../messages/hi.json": ()=>Promise.resolve().then(()=>Te(X6())),
    "../messages/hr.json": ()=>Promise.resolve().then(()=>Te(Z6())),
    "../messages/hu.json": ()=>Promise.resolve().then(()=>Te(q6())),
    "../messages/id.json": ()=>Promise.resolve().then(()=>Te(Q6())),
    "../messages/it.json": ()=>Promise.resolve().then(()=>Te(J6())),
    "../messages/ja.json": ()=>Promise.resolve().then(()=>Te(eV())),
    "../messages/kn.json": ()=>Promise.resolve().then(()=>Te(tV())),
    "../messages/ko.json": ()=>Promise.resolve().then(()=>Te(rV())),
    "../messages/mr.json": ()=>Promise.resolve().then(()=>Te(nV())),
    "../messages/msa.json": ()=>Promise.resolve().then(()=>Te(oV())),
    "../messages/nl.json": ()=>Promise.resolve().then(()=>Te(aV())),
    "../messages/no.json": ()=>Promise.resolve().then(()=>Te(iV())),
    "../messages/pl.json": ()=>Promise.resolve().then(()=>Te(sV())),
    "../messages/pt.json": ()=>Promise.resolve().then(()=>Te(cV())),
    "../messages/ro.json": ()=>Promise.resolve().then(()=>Te(lV())),
    "../messages/ru.json": ()=>Promise.resolve().then(()=>Te(mV())),
    "../messages/sk.json": ()=>Promise.resolve().then(()=>Te(uV())),
    "../messages/sr.json": ()=>Promise.resolve().then(()=>Te(dV())),
    "../messages/sv.json": ()=>Promise.resolve().then(()=>Te(pV())),
    "../messages/ta.json": ()=>Promise.resolve().then(()=>Te(fV())),
    "../messages/th.json": ()=>Promise.resolve().then(()=>Te(hV())),
    "../messages/tr.json": ()=>Promise.resolve().then(()=>Te(xV())),
    "../messages/uk.json": ()=>Promise.resolve().then(()=>Te(gV())),
    "../messages/vi.json": ()=>Promise.resolve().then(()=>Te(vV())),
    "../messages/zh-cn.json": ()=>Promise.resolve().then(()=>Te(bV())),
    "../messages/zh-tw.json": ()=>Promise.resolve().then(()=>Te(yV()))
});

}
