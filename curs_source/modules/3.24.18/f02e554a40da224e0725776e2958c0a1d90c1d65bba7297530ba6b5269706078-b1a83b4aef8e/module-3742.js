"use strict";
const { kState: n, kError: s, kResult: i, kAborted: o, kLastProgressEventFired: a } = require("./module-749.js"), { ProgressEvent: u } = require("./module-4017.js"), { getEncoding: c } = require("./module-1035.js"), { DOMException: l } = require("./module-2955.js"), { serializeAMimeType: m, parseMIMEType: d } = require("./module-4387.js"), { types: f } = require("./module-9023.js"), { StringDecoder: p } = require("./module-3193.js"), { btoa: h } = require("./module-181.js");
function g(t, e) {
    const r = new u(t, {
        bubbles: !1,
        cancelable: !1
    });
    e.dispatchEvent(r);
}
function A(t, e, r, n) {
    switch(e){
        case "DataURL":
            {
                let e = "data:";
                const n = d(r || "application/octet-stream");
                "failure" !== n && (e += m(n)), e += ";base64,";
                const s = new p("latin1");
                for (const r of t)e += h(s.write(r));
                return e += h(s.end()), e;
            }
        case "Text":
            {
                let e = "failure";
                if (n && (e = c(n)), "failure" === e && r) {
                    const t = d(r);
                    "failure" !== t && (e = c(t.parameters.get("charset")));
                }
                return "failure" === e && (e = "UTF-8"), function(t, e) {
                    const r = _(t), n = function(t) {
                        const [e, r, n] = t;
                        if (239 === e && 187 === r && 191 === n) return "UTF-8";
                        if (254 === e && 255 === r) return "UTF-16BE";
                        if (255 === e && 254 === r) return "UTF-16LE";
                        return null;
                    }(r);
                    let s = 0;
                    null !== n && (e = n, s = "UTF-8" === n ? 3 : 2);
                    const i = r.slice(s);
                    return new TextDecoder(e).decode(i);
                }(t, e);
            }
        case "ArrayBuffer":
            return _(t).buffer;
        case "BinaryString":
            {
                let e = "";
                const r = new p("latin1");
                for (const n of t)e += r.write(n);
                return e += r.end(), e;
            }
    }
}
function _(t) {
    const e = t.reduce((t, e)=>t + e.byteLength, 0);
    let r = 0;
    return t.reduce((t, e)=>(t.set(e, r), r += e.byteLength, t), new Uint8Array(e));
}
module.exports = {
    staticPropertyDescriptors: {
        enumerable: !0,
        writable: !1,
        configurable: !1
    },
    readOperation: function(t, e, r, u) {
        if ("loading" === t[n]) throw new l("Invalid state", "InvalidStateError");
        t[n] = "loading", t[i] = null, t[s] = null;
        const c = e.stream().getReader(), m = [];
        let d = c.read(), p = !0;
        (async ()=>{
            for(; !t[o];)try {
                const { done: l, value: h } = await d;
                if (p && !t[o] && queueMicrotask(()=>{
                    g("loadstart", t);
                }), p = !1, !l && f.isUint8Array(h)) m.push(h), (void 0 === t[a] || Date.now() - t[a] >= 50) && !t[o] && (t[a] = Date.now(), queueMicrotask(()=>{
                    g("progress", t);
                })), d = c.read();
                else if (l) {
                    queueMicrotask(()=>{
                        t[n] = "done";
                        try {
                            const n = A(m, r, e.type, u);
                            if (t[o]) return;
                            t[i] = n, g("load", t);
                        } catch (e) {
                            t[s] = e, g("error", t);
                        }
                        "loading" !== t[n] && g("loadend", t);
                    });
                    break;
                }
            } catch (e) {
                if (t[o]) return;
                queueMicrotask(()=>{
                    t[n] = "done", t[s] = e, g("error", t), "loading" !== t[n] && g("loadend", t);
                });
                break;
            }
        })();
    },
    fireAProgressEvent: g
};
