"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeToString = exports.objectToString = void 0, exports.createPromiseCallback = function(t) {
    let e, r, n;
    const s = new Promise((t, e)=>{
        r = t, n = e;
    });
    e = "function" == typeof t ? (e, r)=>{
        try {
            e ? t(e) : t(null, r);
        } catch (t) {
            n(t instanceof Error ? t : new Error);
        }
    } : (t, e)=>{
        try {
            t ? n(t) : r(e);
        } catch (t) {
            n(t instanceof Error ? t : new Error);
        }
    };
    return {
        promise: s,
        callback: e,
        resolve: (t)=>(e(null, t), s),
        reject: (t)=>(e(t), s)
    };
}, exports.inOperator = function(t, e) {
    return t in e;
};
exports.objectToString = (t)=>Object.prototype.toString.call(t);
const r = (t, n = new WeakSet)=>"object" != typeof t || null === t ? String(t) : "function" == typeof t.toString ? Array.isArray(t) ? ((t, n)=>"function" != typeof t.join ? (0, exports.objectToString)(t) : (n.add(t), t.map((t)=>null == t || n.has(t) ? "" : r(t, n)).join()))(t, n) : String(t) : (0, exports.objectToString)(t);
exports.safeToString = (t)=>r(t);
