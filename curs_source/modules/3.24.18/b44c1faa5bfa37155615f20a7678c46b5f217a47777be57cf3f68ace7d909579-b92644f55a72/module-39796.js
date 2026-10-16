"use strict";
const { EMPTY_BUFFER: n } = require("./module-78864.js"), s = Buffer[Symbol.species];
function o(e, t, r, n, s) {
    for(let o = 0; o < s; o++)r[n + o] = e[o] ^ t[3 & o];
}
function i(e, t) {
    for(let r = 0; r < e.length; r++)e[r] ^= t[3 & r];
}
if (module.exports = {
    concat: function(e, t) {
        if (0 === e.length) return n;
        if (1 === e.length) return e[0];
        const r = Buffer.allocUnsafe(t);
        let o = 0;
        for(let t = 0; t < e.length; t++){
            const n = e[t];
            r.set(n, o), o += n.length;
        }
        return o < t ? new s(r.buffer, r.byteOffset, o) : r;
    },
    mask: o,
    toArrayBuffer: function(e) {
        return e.length === e.buffer.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.length);
    },
    toBuffer: function e(t) {
        if (e.readOnly = !0, Buffer.isBuffer(t)) return t;
        let r;
        return t instanceof ArrayBuffer ? r = new s(t) : ArrayBuffer.isView(t) ? r = new s(t.buffer, t.byteOffset, t.byteLength) : (r = Buffer.from(t), e.readOnly = !1), r;
    },
    unmask: i
}, !process.env.WS_NO_BUFFER_UTIL) try {
    const t = require("./module-1962.js");
    module.exports.mask = function(e, r, n, s, i) {
        i < 48 ? o(e, r, n, s, i) : t.mask(e, r, n, s, i);
    }, module.exports.unmask = function(e, r) {
        e.length < 32 ? i(e, r) : t.unmask(e, r);
    };
} catch (e) {}
