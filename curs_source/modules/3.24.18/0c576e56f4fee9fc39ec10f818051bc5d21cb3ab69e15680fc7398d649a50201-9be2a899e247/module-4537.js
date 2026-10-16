"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEvent = void 0;
const n = require("./module-1078.js"), o = require("./module-5683.js"), s = [
    "addListener",
    "removeListener"
], i = [
    "addEventListener",
    "removeEventListener"
], a = [
    "on",
    "off"
];
function c(e, t, r, n, o) {
    const [c, p] = d(f = r) ? i : u(f) ? s : l(f) ? a : [];
    var f;
    if (!c || !p) throw new TypeError("Invalid event target");
    r[c](n, e, o), t.add(()=>r[p](n, e, o));
}
function u(e) {
    return (0, n.isFunction)(e.addListener) && (0, n.isFunction)(e.removeListener);
}
function l(e) {
    return (0, n.isFunction)(e.on) && (0, n.isFunction)(e.off);
}
function d(e) {
    return (0, n.isFunction)(e.addEventListener) && (0, n.isFunction)(e.removeEventListener);
}
exports.fromEvent = function e(t, r, s, i) {
    if ((0, n.isFunction)(s) && (i = s, s = void 0), i) return (0, o.mapOneOrManyArgs)(i)(e(t, r, s));
    const a = u(t) || l(t) || d(t);
    if (!a && !(0, n.isArrayLike)(t)) throw new TypeError("Invalid event target");
    return new n.Observable((e)=>{
        const n = (...t)=>e.next(1 < t.length ? t : t[0]);
        if (a) c(n, e, t, r, s);
        else for(let o = 0; o < t.length && !e.closed; o++){
            const i = t[o];
            c(n, e, i, r, s);
        }
    });
};
