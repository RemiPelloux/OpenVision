"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEvent = void 0;
const n = require("./module-51078.js"), s = require("./module-65683.js"), o = [
    "addListener",
    "removeListener"
], i = [
    "addEventListener",
    "removeEventListener"
], a = [
    "on",
    "off"
];
function c(e, t, r, n, s) {
    const [c, p] = d(m = r) ? i : l(m) ? o : u(m) ? a : [];
    var m;
    if (!c || !p) throw new TypeError("Invalid event target");
    r[c](n, e, s), t.add(()=>r[p](n, e, s));
}
function l(e) {
    return (0, n.isFunction)(e.addListener) && (0, n.isFunction)(e.removeListener);
}
function u(e) {
    return (0, n.isFunction)(e.on) && (0, n.isFunction)(e.off);
}
function d(e) {
    return (0, n.isFunction)(e.addEventListener) && (0, n.isFunction)(e.removeEventListener);
}
exports.fromEvent = function e(t, r, o, i) {
    if ((0, n.isFunction)(o) && (i = o, o = void 0), i) return (0, s.mapOneOrManyArgs)(i)(e(t, r, o));
    const a = l(t) || u(t) || d(t);
    if (!a && !(0, n.isArrayLike)(t)) throw new TypeError("Invalid event target");
    return new n.Observable((e)=>{
        const n = (...t)=>e.next(1 < t.length ? t : t[0]);
        if (a) c(n, e, t, r, o);
        else for(let s = 0; s < t.length && !e.closed; s++){
            const i = t[s];
            c(n, e, i, r, o);
        }
    });
};
