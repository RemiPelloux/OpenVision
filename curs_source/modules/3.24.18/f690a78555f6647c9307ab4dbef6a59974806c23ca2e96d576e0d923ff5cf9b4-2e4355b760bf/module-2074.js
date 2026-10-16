"use strict";
const { kState: n, kError: r, kResult: o, kAborted: s, kLastProgressEventFired: a } = require("./module-3153.js"), { ProgressEvent: i } = require("./module-7997.js"), { getEncoding: c } = require("./module-159.js"), { DOMException: l } = require("./module-6687.js"), { serializeAMimeType: g, parseMIMEType: E } = require("./module-3631.js"), { types: u } = require("./module-9023.js"), { StringDecoder: d } = require("./module-3193.js"), { btoa: I } = require("./module-181.js");
function h(e, A) {
    const t = new i(e, {
        bubbles: !1,
        cancelable: !1
    });
    A.dispatchEvent(t);
}
function Q(e, A, t, n) {
    switch(A){
        case "DataURL":
            {
                let A = "data:";
                const n = E(t || "application/octet-stream");
                "failure" !== n && (A += g(n)), A += ";base64,";
                const r = new d("latin1");
                for (const t of e)A += I(r.write(t));
                return A += I(r.end()), A;
            }
        case "Text":
            {
                let A = "failure";
                if (n && (A = c(n)), "failure" === A && t) {
                    const e = E(t);
                    "failure" !== e && (A = c(e.parameters.get("charset")));
                }
                return "failure" === A && (A = "UTF-8"), function(e, A) {
                    const t = m(e), n = function(e) {
                        const [A, t, n] = e;
                        if (239 === A && 187 === t && 191 === n) return "UTF-8";
                        if (254 === A && 255 === t) return "UTF-16BE";
                        if (255 === A && 254 === t) return "UTF-16LE";
                        return null;
                    }(t);
                    let r = 0;
                    null !== n && (A = n, r = "UTF-8" === n ? 3 : 2);
                    const o = t.slice(r);
                    return new TextDecoder(A).decode(o);
                }(e, A);
            }
        case "ArrayBuffer":
            return m(e).buffer;
        case "BinaryString":
            {
                let A = "";
                const t = new d("latin1");
                for (const n of e)A += t.write(n);
                return A += t.end(), A;
            }
    }
}
function m(e) {
    const A = e.reduce((e, A)=>e + A.byteLength, 0);
    let t = 0;
    return e.reduce((e, A)=>(e.set(A, t), t += A.byteLength, e), new Uint8Array(A));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, A, t, i) {
        if ("loading" === e[n]) throw new l("Invalid state", "InvalidStateError");
        e[n] = "loading", e[o] = null, e[r] = null;
        const c = A.stream().getReader(), g = [];
        let E = c.read(), d = !0;
        (async ()=>{
            for(; !e[s];)try {
                const { done: l, value: I } = await E;
                if (d && !e[s] && queueMicrotask(()=>{
                    h("loadstart", e);
                }), d = !1, !l && u.isUint8Array(I)) g.push(I), (void 0 === e[a] || Date.now() - e[a] >= 50) && !e[s] && (e[a] = Date.now(), queueMicrotask(()=>{
                    h("progress", e);
                })), E = c.read();
                else if (l) {
                    queueMicrotask(()=>{
                        e[n] = "done";
                        try {
                            const n = Q(g, t, A.type, i);
                            if (e[s]) return;
                            e[o] = n, h("load", e);
                        } catch (A) {
                            e[r] = A, h("error", e);
                        }
                        "loading" !== e[n] && h("loadend", e);
                    });
                    break;
                }
            } catch (A) {
                if (e[s]) return;
                queueMicrotask(()=>{
                    e[n] = "done", e[r] = A, h("error", e), "loading" !== e[n] && h("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: h
};
