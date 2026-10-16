"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isCompatible = exports._makeCompatibilityCheck = void 0;
const n = require("./module-14913.js"), s = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function o(e) {
    const t = new Set([
        e
    ]), r = new Set, n = e.match(s);
    if (!n) return ()=>!1;
    const o = +n[1], i = +n[2], a = +n[3];
    if (null != n[4]) return function(t) {
        return t === e;
    };
    function c(e) {
        return r.add(e), !1;
    }
    function l(e) {
        return t.add(e), !0;
    }
    return function(e) {
        if (t.has(e)) return !0;
        if (r.has(e)) return !1;
        const n = e.match(s);
        if (!n) return c(e);
        const u = +n[1], d = +n[2], p = +n[3];
        return null != n[4] || o !== u ? c(e) : 0 === o ? i === d && a <= p ? l(e) : c(e) : i <= d ? l(e) : c(e);
    };
}
exports._makeCompatibilityCheck = o, exports.isCompatible = o(n.VERSION);
