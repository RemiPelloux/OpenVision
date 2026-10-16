"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cookieCompare = function(e, t) {
    let n;
    const s = e.path ? e.path.length : 0, o = t.path ? t.path.length : 0;
    if (n = o - s, 0 !== n) return n;
    const i = e.creation && e.creation instanceof Date ? e.creation.getTime() : r, a = t.creation && t.creation instanceof Date ? t.creation.getTime() : r;
    if (n = i - a, 0 !== n) return n;
    return n = (e.creationIndex || 0) - (t.creationIndex || 0), n;
};
const r = 2147483647e3;
