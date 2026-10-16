"use strict";
const { kState: n, kError: s, kResult: o, kAborted: i, kLastProgressEventFired: a } = require("./module-10749.js"), { ProgressEvent: c } = require("./module-74017.js"), { getEncoding: l } = require("./module-61035.js"), { DOMException: u } = require("./module-22955.js"), { serializeAMimeType: d, parseMIMEType: p } = require("./module-64387.js"), { types: m } = require("./module-39023.js"), { StringDecoder: h } = require("./module-13193.js"), { btoa: f } = require("./module-20181.js");
function g(e, t) {
    const r = new c(e, {
        bubbles: !1,
        cancelable: !1
    });
    t.dispatchEvent(r);
}
function y(e, t, r, n) {
    switch(t){
        case "DataURL":
            {
                let t = "data:";
                const n = p(r || "application/octet-stream");
                "failure" !== n && (t += d(n)), t += ";base64,";
                const s = new h("latin1");
                for (const r of e)t += f(s.write(r));
                return t += f(s.end()), t;
            }
        case "Text":
            {
                let t = "failure";
                if (n && (t = l(n)), "failure" === t && r) {
                    const e = p(r);
                    "failure" !== e && (t = l(e.parameters.get("charset")));
                }
                return "failure" === t && (t = "UTF-8"), function(e, t) {
                    const r = w(e), n = function(e) {
                        const [t, r, n] = e;
                        if (239 === t && 187 === r && 191 === n) return "UTF-8";
                        if (254 === t && 255 === r) return "UTF-16BE";
                        if (255 === t && 254 === r) return "UTF-16LE";
                        return null;
                    }(r);
                    let s = 0;
                    null !== n && (t = n, s = "UTF-8" === n ? 3 : 2);
                    const o = r.slice(s);
                    return new TextDecoder(t).decode(o);
                }(e, t);
            }
        case "ArrayBuffer":
            return w(e).buffer;
        case "BinaryString":
            {
                let t = "";
                const r = new h("latin1");
                for (const n of e)t += r.write(n);
                return t += r.end(), t;
            }
    }
}
function w(e) {
    const t = e.reduce((e, t)=>e + t.byteLength, 0);
    let r = 0;
    return e.reduce((e, t)=>(e.set(t, r), r += t.byteLength, e), new Uint8Array(t));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, t, r, c) {
        if ("loading" === e[n]) throw new u("Invalid state", "InvalidStateError");
        e[n] = "loading", e[o] = null, e[s] = null;
        const l = t.stream().getReader(), d = [];
        let p = l.read(), h = !0;
        (async ()=>{
            for(; !e[i];)try {
                const { done: u, value: f } = await p;
                if (h && !e[i] && queueMicrotask(()=>{
                    g("loadstart", e);
                }), h = !1, !u && m.isUint8Array(f)) d.push(f), (void 0 === e[a] || Date.now() - e[a] >= 50) && !e[i] && (e[a] = Date.now(), queueMicrotask(()=>{
                    g("progress", e);
                })), p = l.read();
                else if (u) {
                    queueMicrotask(()=>{
                        e[n] = "done";
                        try {
                            const n = y(d, r, t.type, c);
                            if (e[i]) return;
                            e[o] = n, g("load", e);
                        } catch (t) {
                            e[s] = t, g("error", e);
                        }
                        "loading" !== e[n] && g("loadend", e);
                    });
                    break;
                }
            } catch (t) {
                if (e[i]) return;
                queueMicrotask(()=>{
                    e[n] = "done", e[s] = t, g("error", e), "loading" !== e[n] && g("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: g
};
