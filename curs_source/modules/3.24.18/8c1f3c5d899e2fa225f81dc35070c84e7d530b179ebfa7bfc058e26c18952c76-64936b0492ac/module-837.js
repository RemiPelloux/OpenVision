Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Iterable = void 0;
const i = require("./module-166.js");
var r;
!function(e) {
    function t(e) {
        return e && "object" == typeof e && "function" == typeof e[Symbol.iterator];
    }
    e.is = t;
    const n = Object.freeze([]);
    function* r(e) {
        yield e;
    }
    e.empty = function() {
        return n;
    }, e.single = r, e.wrap = function(e) {
        return t(e) ? e : r(e);
    }, e.from = function(e) {
        return e || n;
    }, e.reverse = function*(e) {
        for(let t = e.length - 1; t >= 0; t--)yield e[t];
    }, e.isEmpty = function(e) {
        return !e || !0 === e[Symbol.iterator]().next().done;
    }, e.first = function(e) {
        return e[Symbol.iterator]().next().value;
    }, e.some = function(e, t) {
        let n = 0;
        for (const i of e)if (t(i, n++)) return !0;
        return !1;
    }, e.find = function(e, t) {
        for (const n of e)if (t(n)) return n;
    }, e.filter = function*(e, t) {
        for (const n of e)t(n) && (yield n);
    }, e.map = function*(e, t) {
        let n = 0;
        for (const i of e)yield t(i, n++);
    }, e.flatMap = function*(e, t) {
        let n = 0;
        for (const i of e)yield* t(i, n++);
    }, e.concat = function*(...e) {
        for (const t of e)(0, i.isIterable)(t) ? yield* t : yield t;
    }, e.reduce = function(e, t, n) {
        let i = n;
        for (const n of e)i = t(i, n);
        return i;
    }, e.length = function(e) {
        let t = 0;
        for (const n of e)t++;
        return t;
    }, e.slice = function*(e, t, n = e.length) {
        for(t < -e.length && (t = 0), t < 0 && (t += e.length), n < 0 ? n += e.length : n > e.length && (n = e.length); t < n; t++)yield e[t];
    }, e.consume = function(t, n = Number.POSITIVE_INFINITY) {
        const i = [];
        if (0 === n) return [
            i,
            t
        ];
        const r = t[Symbol.iterator]();
        for(let t = 0; t < n; t++){
            const t = r.next();
            if (t.done) return [
                i,
                e.empty()
            ];
            i.push(t.value);
        }
        return [
            i,
            {
                [Symbol.iterator]: ()=>r
            }
        ];
    }, e.asyncToArray = async function(e) {
        const t = [];
        for await (const n of e)t.push(n);
        return Promise.resolve(t);
    };
}(r || (exports.Iterable = r = {}));
