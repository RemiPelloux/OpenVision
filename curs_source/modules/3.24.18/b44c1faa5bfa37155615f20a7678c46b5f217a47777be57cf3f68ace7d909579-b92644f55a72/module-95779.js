"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeToString = exports.objectToString = void 0, exports.createPromiseCallback = function(e) {
    let t, r, n;
    const s = new Promise((e, t)=>{
        r = e, n = t;
    });
    t = "function" == typeof e ? (t, r)=>{
        try {
            t ? e(t) : e(null, r);
        } catch (e) {
            n(e instanceof Error ? e : new Error);
        }
    } : (e, t)=>{
        try {
            e ? n(e) : r(t);
        } catch (e) {
            n(e instanceof Error ? e : new Error);
        }
    };
    return {
        promise: s,
        callback: t,
        resolve: (e)=>(t(null, e), s),
        reject: (e)=>(t(e), s)
    };
}, exports.inOperator = function(e, t) {
    return e in t;
};
exports.objectToString = (e)=>Object.prototype.toString.call(e);
const r = (e, n = new WeakSet)=>"object" != typeof e || null === e ? String(e) : "function" == typeof e.toString ? Array.isArray(e) ? ((e, n)=>"function" != typeof e.join ? (0, exports.objectToString)(e) : (n.add(e), e.map((e)=>null == e || n.has(e) ? "" : r(e, n)).join()))(e, n) : String(e) : (0, exports.objectToString)(e);
exports.safeToString = (e)=>r(e);
