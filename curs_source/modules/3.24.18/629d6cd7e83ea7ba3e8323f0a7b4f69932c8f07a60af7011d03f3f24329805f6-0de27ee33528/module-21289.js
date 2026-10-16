"use strict";
const { kState: r, kError: s, kResult: o, kAborted: n, kLastProgressEventFired: i } = require("./module-47192.js"), { ProgressEvent: a } = require("./module-2524.js"), { getEncoding: Q } = require("./module-79624.js"), { serializeAMimeType: g, parseMIMEType: E } = require("./module-52603.js"), { types: B } = require(57975), { StringDecoder: c } = require(13193), { btoa: I } = require(4573);
function C(A, e) {
    const t = new a(A, {
        bubbles: !1,
        cancelable: !1
    });
    e.dispatchEvent(t);
}
function h(A, e, t, r) {
    switch(e){
        case "DataURL":
            {
                let e = "data:";
                const r = E(t || "application/octet-stream");
                "failure" !== r && (e += g(r)), e += ";base64,";
                const s = new c("latin1");
                for (const t of A)e += I(s.write(t));
                return e += I(s.end()), e;
            }
        case "Text":
            {
                let e = "failure";
                if (r && (e = Q(r)), "failure" === e && t) {
                    const A = E(t);
                    "failure" !== A && (e = Q(A.parameters.get("charset")));
                }
                return "failure" === e && (e = "UTF-8"), function(A, e) {
                    const t = l(A), r = function(A) {
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
            return l(A).buffer;
        case "BinaryString":
            {
                let e = "";
                const t = new c("latin1");
                for (const r of A)e += t.write(r);
                return e += t.end(), e;
            }
    }
}
function l(A) {
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
    readOperation: function(A, e, t, a) {
        if ("loading" === A[r]) throw new DOMException("Invalid state", "InvalidStateError");
        A[r] = "loading", A[o] = null, A[s] = null;
        const Q = e.stream().getReader(), g = [];
        let E = Q.read(), c = !0;
        (async ()=>{
            for(; !A[n];)try {
                const { done: I, value: l } = await E;
                if (c && !A[n] && queueMicrotask(()=>{
                    C("loadstart", A);
                }), c = !1, !I && B.isUint8Array(l)) g.push(l), (void 0 === A[i] || Date.now() - A[i] >= 50) && !A[n] && (A[i] = Date.now(), queueMicrotask(()=>{
                    C("progress", A);
                })), E = Q.read();
                else if (I) {
                    queueMicrotask(()=>{
                        A[r] = "done";
                        try {
                            const r = h(g, t, e.type, a);
                            if (A[n]) return;
                            A[o] = r, C("load", A);
                        } catch (e) {
                            A[s] = e, C("error", A);
                        }
                        "loading" !== A[r] && C("loadend", A);
                    });
                    break;
                }
            } catch (e) {
                if (A[n]) return;
                queueMicrotask(()=>{
                    A[r] = "done", A[s] = e, C("error", A), "loading" !== A[r] && C("loadend", A);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: C
};
