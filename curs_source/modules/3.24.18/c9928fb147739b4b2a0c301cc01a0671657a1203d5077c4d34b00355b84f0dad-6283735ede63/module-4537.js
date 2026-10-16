Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEvent = void 0;
const s = require("./module-1078.js"), o = require("./module-5683.js"), r = [
    "addListener",
    "removeListener"
], t = [
    "addEventListener",
    "removeEventListener"
], i = [
    "on",
    "off"
];
function m(e, a, n, s, o) {
    const [m, T] = c(p = n) ? t : l(p) ? r : d(p) ? i : [];
    var p;
    if (!m || !T) throw new TypeError("Invalid event target");
    n[m](s, e, o), a.add(()=>n[T](s, e, o));
}
function l(e) {
    return (0, s.isFunction)(e.addListener) && (0, s.isFunction)(e.removeListener);
}
function d(e) {
    return (0, s.isFunction)(e.on) && (0, s.isFunction)(e.off);
}
function c(e) {
    return (0, s.isFunction)(e.addEventListener) && (0, s.isFunction)(e.removeEventListener);
}
exports.fromEvent = function e(a, n, r, t) {
    if ((0, s.isFunction)(r) && (t = r, r = void 0), t) return (0, o.mapOneOrManyArgs)(t)(e(a, n, r));
    const i = l(a) || d(a) || c(a);
    if (!i && !(0, s.isArrayLike)(a)) throw new TypeError("Invalid event target");
    return new s.Observable((e)=>{
        const s = (...a)=>e.next(1 < a.length ? a : a[0]);
        if (i) m(s, e, a, n, r);
        else for(let o = 0; o < a.length && !e.closed; o++){
            const t = a[o];
            m(s, e, t, n, r);
        }
    });
};
