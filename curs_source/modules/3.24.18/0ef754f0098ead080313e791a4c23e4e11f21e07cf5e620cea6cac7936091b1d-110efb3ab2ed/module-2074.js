"use strict";
const { kState: t, kError: s, kResult: o, kAborted: r, kLastProgressEventFired: i } = require("./module-3153.js"), { ProgressEvent: l } = require("./module-7997.js"), { getEncoding: d } = require("./module-159.js"), { DOMException: m } = require("./module-6687.js"), { serializeAMimeType: c, parseMIMEType: p } = require("./module-3631.js"), { types: A } = require("./module-9023.js"), { StringDecoder: u } = require("./module-3193.js"), { btoa: g } = require("./module-181.js");
function T(e, a) {
    const n = new l(e, {
        bubbles: !1,
        cancelable: !1
    });
    a.dispatchEvent(n);
}
function h(e, a, n, t) {
    switch(a){
        case "DataURL":
            {
                let a = "data:";
                const t = p(n || "application/octet-stream");
                "failure" !== t && (a += c(t)), a += ";base64,";
                const s = new u("latin1");
                for (const n of e)a += g(s.write(n));
                return a += g(s.end()), a;
            }
        case "Text":
            {
                let a = "failure";
                if (t && (a = d(t)), "failure" === a && n) {
                    const e = p(n);
                    "failure" !== e && (a = d(e.parameters.get("charset")));
                }
                return "failure" === a && (a = "UTF-8"), function(e, a) {
                    const n = k(e), t = function(e) {
                        const [a, n, t] = e;
                        if (239 === a && 187 === n && 191 === t) return "UTF-8";
                        if (254 === a && 255 === n) return "UTF-16BE";
                        if (255 === a && 254 === n) return "UTF-16LE";
                        return null;
                    }(n);
                    let s = 0;
                    null !== t && (a = t, s = "UTF-8" === t ? 3 : 2);
                    const o = n.slice(s);
                    return new TextDecoder(a).decode(o);
                }(e, a);
            }
        case "ArrayBuffer":
            return k(e).buffer;
        case "BinaryString":
            {
                let a = "";
                const n = new u("latin1");
                for (const t of e)a += n.write(t);
                return a += n.end(), a;
            }
    }
}
function k(e) {
    const a = e.reduce((e, a)=>e + a.byteLength, 0);
    let n = 0;
    return e.reduce((e, a)=>(e.set(a, n), n += a.byteLength, e), new Uint8Array(a));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, a, n, l) {
        if ("loading" === e[t]) throw new m("Invalid state", "InvalidStateError");
        e[t] = "loading", e[o] = null, e[s] = null;
        const d = a.stream().getReader(), c = [];
        let p = d.read(), u = !0;
        (async ()=>{
            for(; !e[r];)try {
                const { done: m, value: g } = await p;
                if (u && !e[r] && queueMicrotask(()=>{
                    T("loadstart", e);
                }), u = !1, !m && A.isUint8Array(g)) c.push(g), (void 0 === e[i] || Date.now() - e[i] >= 50) && !e[r] && (e[i] = Date.now(), queueMicrotask(()=>{
                    T("progress", e);
                })), p = d.read();
                else if (m) {
                    queueMicrotask(()=>{
                        e[t] = "done";
                        try {
                            const t = h(c, n, a.type, l);
                            if (e[r]) return;
                            e[o] = t, T("load", e);
                        } catch (a) {
                            e[s] = a, T("error", e);
                        }
                        "loading" !== e[t] && T("loadend", e);
                    });
                    break;
                }
            } catch (a) {
                if (e[r]) return;
                queueMicrotask(()=>{
                    e[t] = "done", e[s] = a, T("error", e), "loading" !== e[t] && T("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: T
};
