"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cookieCompare = function(t, e) {
    let n;
    const s = t.path ? t.path.length : 0, i = e.path ? e.path.length : 0;
    if (n = i - s, 0 !== n) return n;
    const o = t.creation && t.creation instanceof Date ? t.creation.getTime() : r, a = e.creation && e.creation instanceof Date ? e.creation.getTime() : r;
    if (n = o - a, 0 !== n) return n;
    return n = (t.creationIndex || 0) - (e.creationIndex || 0), n;
};
const r = 2147483647e3;
