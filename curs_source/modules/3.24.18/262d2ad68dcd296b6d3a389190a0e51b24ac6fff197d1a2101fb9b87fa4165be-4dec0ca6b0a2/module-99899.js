"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isCompatible = exports._makeCompatibilityCheck = void 0;
const n = require("./module-14913.js"), o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function s(e) {
    const t = new Set([
        e
    ]), r = new Set, n = e.match(o);
    if (!n) return ()=>!1;
    const s = +n[1], i = +n[2], a = +n[3];
    if (null != n[4]) return function(t) {
        return t === e;
    };
    function l(e) {
        return r.add(e), !1;
    }
    function c(e) {
        return t.add(e), !0;
    }
    return function(e) {
        if (t.has(e)) return !0;
        if (r.has(e)) return !1;
        const n = e.match(o);
        if (!n) return l(e);
        const u = +n[1], d = +n[2], p = +n[3];
        return null != n[4] || s !== u ? l(e) : 0 === s ? i === d && a <= p ? c(e) : l(e) : i <= d ? c(e) : l(e);
    };
}
exports._makeCompatibilityCheck = s, exports.isCompatible = s(n.VERSION);
