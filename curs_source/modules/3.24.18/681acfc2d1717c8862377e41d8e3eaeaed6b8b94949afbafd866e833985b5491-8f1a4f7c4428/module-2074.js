"use strict";
const { kState: n, kError: r, kResult: o, kAborted: s, kLastProgressEventFired: i } = require("./module-3153.js"), { ProgressEvent: a } = require("./module-7997.js"), { getEncoding: c } = require("./module-159.js"), { DOMException: l } = require("./module-6687.js"), { serializeAMimeType: u, parseMIMEType: g } = require("./module-3631.js"), { types: E } = require("./module-9023.js"), { StringDecoder: h } = require("./module-3193.js"), { btoa: d } = require("./module-181.js");
function I(e, t) {
    const A = new a(e, {
        bubbles: !1,
        cancelable: !1
    });
    t.dispatchEvent(A);
}
function B(e, t, A, n) {
    switch(t){
        case "DataURL":
            {
                let t = "data:";
                const n = g(A || "application/octet-stream");
                "failure" !== n && (t += u(n)), t += ";base64,";
                const r = new h("latin1");
                for (const A of e)t += d(r.write(A));
                return t += d(r.end()), t;
            }
        case "Text":
            {
                let t = "failure";
                if (n && (t = c(n)), "failure" === t && A) {
                    const e = g(A);
                    "failure" !== e && (t = c(e.parameters.get("charset")));
                }
                return "failure" === t && (t = "UTF-8"), function(e, t) {
                    const A = Q(e), n = function(e) {
                        const [t, A, n] = e;
                        if (239 === t && 187 === A && 191 === n) return "UTF-8";
                        if (254 === t && 255 === A) return "UTF-16BE";
                        if (255 === t && 254 === A) return "UTF-16LE";
                        return null;
                    }(A);
                    let r = 0;
                    null !== n && (t = n, r = "UTF-8" === n ? 3 : 2);
                    const o = A.slice(r);
                    return new TextDecoder(t).decode(o);
                }(e, t);
            }
        case "ArrayBuffer":
            return Q(e).buffer;
        case "BinaryString":
            {
                let t = "";
                const A = new h("latin1");
                for (const n of e)t += A.write(n);
                return t += A.end(), t;
            }
    }
}
function Q(e) {
    const t = e.reduce((e, t)=>e + t.byteLength, 0);
    let A = 0;
    return e.reduce((e, t)=>(e.set(t, A), A += t.byteLength, e), new Uint8Array(t));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, t, A, a) {
        if ("loading" === e[n]) throw new l("Invalid state", "InvalidStateError");
        e[n] = "loading", e[o] = null, e[r] = null;
        const c = t.stream().getReader(), u = [];
        let g = c.read(), h = !0;
        (async ()=>{
            for(; !e[s];)try {
                const { done: l, value: d } = await g;
                if (h && !e[s] && queueMicrotask(()=>{
                    I("loadstart", e);
                }), h = !1, !l && E.isUint8Array(d)) u.push(d), (void 0 === e[i] || Date.now() - e[i] >= 50) && !e[s] && (e[i] = Date.now(), queueMicrotask(()=>{
                    I("progress", e);
                })), g = c.read();
                else if (l) {
                    queueMicrotask(()=>{
                        e[n] = "done";
                        try {
                            const n = B(u, A, t.type, a);
                            if (e[s]) return;
                            e[o] = n, I("load", e);
                        } catch (t) {
                            e[r] = t, I("error", e);
                        }
                        "loading" !== e[n] && I("loadend", e);
                    });
                    break;
                }
            } catch (t) {
                if (e[s]) return;
                queueMicrotask(()=>{
                    e[n] = "done", e[r] = t, I("error", e), "loading" !== e[n] && I("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: I
};
