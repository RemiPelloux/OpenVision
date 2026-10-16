"use strict";
const { EMPTY_BUFFER: n } = require("./module-8864.js"), s = Buffer[Symbol.species];
function i(t, e, r, n, s) {
    for(let i = 0; i < s; i++)r[n + i] = t[i] ^ e[3 & i];
}
function o(t, e) {
    for(let r = 0; r < t.length; r++)t[r] ^= e[3 & r];
}
if (module.exports = {
    concat: function(t, e) {
        if (0 === t.length) return n;
        if (1 === t.length) return t[0];
        const r = Buffer.allocUnsafe(e);
        let i = 0;
        for(let e = 0; e < t.length; e++){
            const n = t[e];
            r.set(n, i), i += n.length;
        }
        return i < e ? new s(r.buffer, r.byteOffset, i) : r;
    },
    mask: i,
    toArrayBuffer: function(t) {
        return t.length === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.length);
    },
    toBuffer: function t(e) {
        if (t.readOnly = !0, Buffer.isBuffer(e)) return e;
        let r;
        return e instanceof ArrayBuffer ? r = new s(e) : ArrayBuffer.isView(e) ? r = new s(e.buffer, e.byteOffset, e.byteLength) : (r = Buffer.from(e), t.readOnly = !1), r;
    },
    unmask: o
}, !process.env.WS_NO_BUFFER_UTIL) try {
    const e = require("./module-1962.js");
    module.exports.mask = function(t, r, n, s, o) {
        o < 48 ? i(t, r, n, s, o) : e.mask(t, r, n, s, o);
    }, module.exports.unmask = function(t, r) {
        t.length < 32 ? o(t, r) : e.unmask(t, r);
    };
} catch (t) {}
