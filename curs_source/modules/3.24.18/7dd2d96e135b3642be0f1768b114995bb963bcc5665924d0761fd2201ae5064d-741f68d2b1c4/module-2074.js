"use strict";
const { kState: a, kError: s, kResult: o, kAborted: r, kLastProgressEventFired: i } = require("./module-3153.js"), { ProgressEvent: A } = require("./module-7997.js"), { getEncoding: c } = require("./module-159.js"), { DOMException: l } = require("./module-6687.js"), { serializeAMimeType: d, parseMIMEType: m } = require("./module-3631.js"), { types: u } = require("./module-9023.js"), { StringDecoder: g } = require("./module-3193.js"), { btoa: p } = require("./module-181.js");
function E(e, n) {
    const t = new A(e, {
        bubbles: !1,
        cancelable: !1
    });
    n.dispatchEvent(t);
}
function h(e, n, t, a) {
    switch(n){
        case "DataURL":
            {
                let n = "data:";
                const a = m(t || "application/octet-stream");
                "failure" !== a && (n += d(a)), n += ";base64,";
                const s = new g("latin1");
                for (const t of e)n += p(s.write(t));
                return n += p(s.end()), n;
            }
        case "Text":
            {
                let n = "failure";
                if (a && (n = c(a)), "failure" === n && t) {
                    const e = m(t);
                    "failure" !== e && (n = c(e.parameters.get("charset")));
                }
                return "failure" === n && (n = "UTF-8"), function(e, n) {
                    const t = T(e), a = function(e) {
                        const [n, t, a] = e;
                        if (239 === n && 187 === t && 191 === a) return "UTF-8";
                        if (254 === n && 255 === t) return "UTF-16BE";
                        if (255 === n && 254 === t) return "UTF-16LE";
                        return null;
                    }(t);
                    let s = 0;
                    null !== a && (n = a, s = "UTF-8" === a ? 3 : 2);
                    const o = t.slice(s);
                    return new TextDecoder(n).decode(o);
                }(e, n);
            }
        case "ArrayBuffer":
            return T(e).buffer;
        case "BinaryString":
            {
                let n = "";
                const t = new g("latin1");
                for (const a of e)n += t.write(a);
                return n += t.end(), n;
            }
    }
}
function T(e) {
    const n = e.reduce((e, n)=>e + n.byteLength, 0);
    let t = 0;
    return e.reduce((e, n)=>(e.set(n, t), t += n.byteLength, e), new Uint8Array(n));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(e, n, t, A) {
        if ("loading" === e[a]) throw new l("Invalid state", "InvalidStateError");
        e[a] = "loading", e[o] = null, e[s] = null;
        const c = n.stream().getReader(), d = [];
        let m = c.read(), g = !0;
        (async ()=>{
            for(; !e[r];)try {
                const { done: l, value: p } = await m;
                if (g && !e[r] && queueMicrotask(()=>{
                    E("loadstart", e);
                }), g = !1, !l && u.isUint8Array(p)) d.push(p), (void 0 === e[i] || Date.now() - e[i] >= 50) && !e[r] && (e[i] = Date.now(), queueMicrotask(()=>{
                    E("progress", e);
                })), m = c.read();
                else if (l) {
                    queueMicrotask(()=>{
                        e[a] = "done";
                        try {
                            const a = h(d, t, n.type, A);
                            if (e[r]) return;
                            e[o] = a, E("load", e);
                        } catch (n) {
                            e[s] = n, E("error", e);
                        }
                        "loading" !== e[a] && E("loadend", e);
                    });
                    break;
                }
            } catch (n) {
                if (e[r]) return;
                queueMicrotask(()=>{
                    e[a] = "done", e[s] = n, E("error", e), "loading" !== e[a] && E("loadend", e);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: E
};
