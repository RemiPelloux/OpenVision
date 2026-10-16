"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEvent = void 0;
const n = require("./module-51078.js"), o = require("./module-65683.js"), s = [
    "addListener",
    "removeListener"
], i = [
    "addEventListener",
    "removeEventListener"
], a = [
    "on",
    "off"
];
function l(e, t, r, n, o) {
    const [l, p] = d(h = r) ? i : c(h) ? s : u(h) ? a : [];
    var h;
    if (!l || !p) throw new TypeError("Invalid event target");
    r[l](n, e, o), t.add(()=>r[p](n, e, o));
}
function c(e) {
    return (0, n.isFunction)(e.addListener) && (0, n.isFunction)(e.removeListener);
}
function u(e) {
    return (0, n.isFunction)(e.on) && (0, n.isFunction)(e.off);
}
function d(e) {
    return (0, n.isFunction)(e.addEventListener) && (0, n.isFunction)(e.removeEventListener);
}
exports.fromEvent = function e(t, r, s, i) {
    if ((0, n.isFunction)(s) && (i = s, s = void 0), i) return (0, o.mapOneOrManyArgs)(i)(e(t, r, s));
    const a = c(t) || u(t) || d(t);
    if (!a && !(0, n.isArrayLike)(t)) throw new TypeError("Invalid event target");
    return new n.Observable((e)=>{
        const n = (...t)=>e.next(1 < t.length ? t : t[0]);
        if (a) l(n, e, t, r, s);
        else for(let o = 0; o < t.length && !e.closed; o++){
            const i = t[o];
            l(n, e, i, r, s);
        }
    });
};
