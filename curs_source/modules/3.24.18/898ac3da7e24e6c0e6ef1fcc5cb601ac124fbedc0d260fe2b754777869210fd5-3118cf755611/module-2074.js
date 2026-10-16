"use strict";
const { kState: t, kError: s, kResult: o, kAborted: r, kLastProgressEventFired: i } = require("./module-3153.js"), { ProgressEvent: A } = require("./module-7997.js"), { getEncoding: l } = require("./module-159.js"), { DOMException: c } = require("./module-6687.js"), { serializeAMimeType: m, parseMIMEType: d } = require("./module-3631.js"), { types: g } = require("./module-9023.js"), { StringDecoder: u } = require("./module-3193.js"), { btoa: E } = require("./module-181.js");
function p(e, n) {
    const a = new A(e, {
        bubbles: !1,
        cancelable: !1
    });
    n.dispatchEvent(a);
}
function T(e, n, a, t) {
    switch(n){
        case "DataURL":
            {
                let n = "data:";
                const t = d(a || "application/octet-stream");
                "failure" !== t && (n += m(t)), n += ";base64,";
                const s = new u("latin1");
                for (const a of e)n += E(s.write(a));
                return n += E(s.end()), n;
            }
        case "Text":
            {
                let n = "failure";
                if (t && (n = l(t)), "failure" === n && a) {
                    const e = d(a);
                    "failure" !== e && (n = l(e.parameters.get("charset")));
                }
                return "failure" === n && (n = "UTF-8"), function(e, n) {
                    const a = k(e), t = function(e) {
                        const [n, a, t] = e;
                        if (239 === n && 187 === a && 191 === t) return "UTF-8";
                        if (254 === n && 255 === a) return "UTF-16BE";
                        if (255 === n && 254 === a) return "UTF-16LE";
                        return null;
                    }(a);
                    let s = 0;
                    null !== t && (n = t, s = "UTF-8" === t ? 3 : 2);
                    const o = a.slice(s);
                    return new TextDecoder(n).decode(o);
                }(e, n);
            }
        case "ArrayBuffer":
            return k(e).buffer;
        case "BinaryString":
            {
                let n = "";
                const a = new u("latin1");
                for (const t of e)n += a.write(t);
                return n += a.end(), n;
            }
    }
}
function k(e) {
    const n = e.reduce((e, n)=>e + n.byteLength, 0);
    let a = 0;
    return e.reduce((e, n)=>(e.set(n, a), a += n.byteLength, e), new Uint8Array(n));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, n, a, A) {
        if ("loading" === e[t]) throw new c("Invalid state", "InvalidStateError");
        e[t] = "loading", e[o] = null, e[s] = null;
        const l = n.stream().getReader(), m = [];
        let d = l.read(), u = !0;
        (async ()=>{
            for(; !e[r];)try {
                const { done: c, value: E } = await d;
                if (u && !e[r] && queueMicrotask(()=>{
                    p("loadstart", e);
                }), u = !1, !c && g.isUint8Array(E)) m.push(E), (void 0 === e[i] || Date.now() - e[i] >= 50) && !e[r] && (e[i] = Date.now(), queueMicrotask(()=>{
                    p("progress", e);
                })), d = l.read();
                else if (c) {
                    queueMicrotask(()=>{
                        e[t] = "done";
                        try {
                            const t = T(m, a, n.type, A);
                            if (e[r]) return;
                            e[o] = t, p("load", e);
                        } catch (n) {
                            e[s] = n, p("error", e);
                        }
                        "loading" !== e[t] && p("loadend", e);
                    });
                    break;
                }
            } catch (n) {
                if (e[r]) return;
                queueMicrotask(()=>{
                    e[t] = "done", e[s] = n, p("error", e), "loading" !== e[t] && p("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: p
};
