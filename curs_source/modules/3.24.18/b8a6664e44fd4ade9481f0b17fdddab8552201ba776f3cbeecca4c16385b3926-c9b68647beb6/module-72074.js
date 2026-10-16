"use strict";
const { kState: r, kError: s, kResult: o, kAborted: n, kLastProgressEventFired: i } = require("./module-13153.js"), { ProgressEvent: E } = require("./module-67997.js"), { getEncoding: Q } = require("./module-50159.js"), { DOMException: g } = require("./module-96687.js"), { serializeAMimeType: C, parseMIMEType: B } = require("./module-3631.js"), { types: a } = require(39023), { StringDecoder: I } = require(13193), { btoa: c } = require(20181);
function h(A, e) {
    const t = new E(A, {
        bubbles: !1,
        cancelable: !1
    });
    e.dispatchEvent(t);
}
function l(A, e, t, r) {
    switch(e){
        case "DataURL":
            {
                let e = "data:";
                const r = B(t || "application/octet-stream");
                "failure" !== r && (e += C(r)), e += ";base64,";
                const s = new I("latin1");
                for (const t of A)e += c(s.write(t));
                return e += c(s.end()), e;
            }
        case "Text":
            {
                let e = "failure";
                if (r && (e = Q(r)), "failure" === e && t) {
                    const A = B(t);
                    "failure" !== A && (e = Q(A.parameters.get("charset")));
                }
                return "failure" === e && (e = "UTF-8"), function(A, e) {
                    const t = u(A), r = function(A) {
                        const [e, t, r] = A;
                        if (239 === e && 187 === t && 191 === r) return "UTF-8";
                        if (254 === e && 255 === t) return "UTF-16BE";
                        if (255 === e && 254 === t) return "UTF-16LE";
                        return null;
                    }(t);
                    let s = 0;
                    null !== r && (e = r, s = "UTF-8" === r ? 3 : 2);
                    const o = t.slice(s);
                    return new TextDecoder(e).decode(o);
                }(A, e);
            }
        case "ArrayBuffer":
            return u(A).buffer;
        case "BinaryString":
            {
                let e = "";
                const t = new I("latin1");
                for (const r of A)e += t.write(r);
                return e += t.end(), e;
            }
    }
}
function u(A) {
    const e = A.reduce((A, e)=>A + e.byteLength, 0);
    let t = 0;
    return A.reduce((A, e)=>(A.set(e, t), t += e.byteLength, A), new Uint8Array(e));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(A, e, t, E) {
        if ("loading" === A[r]) throw new g("Invalid state", "InvalidStateError");
        A[r] = "loading", A[o] = null, A[s] = null;
        const Q = e.stream().getReader(), C = [];
        let B = Q.read(), I = !0;
        (async ()=>{
            for(; !A[n];)try {
                const { done: g, value: c } = await B;
                if (I && !A[n] && queueMicrotask(()=>{
                    h("loadstart", A);
                }), I = !1, !g && a.isUint8Array(c)) C.push(c), (void 0 === A[i] || Date.now() - A[i] >= 50) && !A[n] && (A[i] = Date.now(), queueMicrotask(()=>{
                    h("progress", A);
                })), B = Q.read();
                else if (g) {
                    queueMicrotask(()=>{
                        A[r] = "done";
                        try {
                            const r = l(C, t, e.type, E);
                            if (A[n]) return;
                            A[o] = r, h("load", A);
                        } catch (e) {
                            A[s] = e, h("error", A);
                        }
                        "loading" !== A[r] && h("loadend", A);
                    });
                    break;
                }
            } catch (e) {
                if (A[n]) return;
                queueMicrotask(()=>{
                    A[r] = "done", A[s] = e, h("error", A), "loading" !== A[r] && h("loadend", A);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: h
};
