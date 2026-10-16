import { a } from "./business-error.js";
function mc(e, t) {
    const r = t && t.cache ? t.cache : Ow, n = t && t.serializer ? t.serializer : _w;
    return (t && t.strategy ? t.strategy : Rw)(e, {
        cache: r,
        serializer: n
    });
}
function Aw(e) {
    return e == null || typeof e == "number" || typeof e == "boolean";
}
function gd(e, t, r, n) {
    const o = Aw(n) ? n : r(n);
    let i = t.get(o);
    return typeof i > "u" && (i = e.call(this, n), t.set(o, i)), i;
}
function vd(e, t, r) {
    const n = Array.prototype.slice.call(arguments, 3), o = r(n);
    let i = t.get(o);
    return typeof i > "u" && (i = e.apply(this, n), t.set(o, i)), i;
}
function uc(e, t, r, n, o) {
    return r.bind(t, e, n, o);
}
function Rw(e, t) {
    const r = e.length === 1 ? gd : vd;
    return uc(e, this, r, t.cache.create(), t.serializer);
}
function Nw(e, t) {
    return uc(e, this, vd, t.cache.create(), t.serializer);
}
function Pw(e, t) {
    return uc(e, this, gd, t.cache.create(), t.serializer);
}
var _w, Mw, Ow, dc;
export { Aw, Mw, Nw, Ow, Pw, Rw, _w, dc, gd, mc, uc, vd };
var __wakaru_f6_initialized = false;
export function f6() {
if (__wakaru_f6_initialized) return;
__wakaru_f6_initialized = true;
a(mc, "memoize"), a(Aw, "isPrimitive"), a(gd, "monadic"), a(vd, "variadic"), a(uc, "assemble"), a(Rw, "strategyDefault"), a(Nw, "strategyVariadic"), a(Pw, "strategyMonadic"), _w = a(function() {
    return JSON.stringify(arguments);
}, "serializerDefault"), Mw = class {
    static{
        a(this, "ObjectWithoutPrototypeCache");
    }
    constructor(){
        this.cache = Object.create(null);
    }
    get(e) {
        return this.cache[e];
    }
    set(e, t) {
        this.cache[e] = t;
    }
}, Ow = {
    create: a(function() {
        return new Mw;
    }, "create")
}, dc = {
    variadic: Nw,
    monadic: Pw
};

}
