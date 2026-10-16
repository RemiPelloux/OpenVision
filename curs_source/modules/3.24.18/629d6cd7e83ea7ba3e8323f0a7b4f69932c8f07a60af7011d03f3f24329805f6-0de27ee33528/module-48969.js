"use strict";
const { kConstruct: r } = require("./module-76992.js"), { kEnumerableProperty: s } = require("./module-55201.js"), { iteratorMixin: o, isValidHeaderName: n, isValidHeaderValue: i } = require("./module-48215.js"), { webidl: a } = require("./module-43290.js"), Q = require(56970), g = require(57975), E = Symbol("headers map"), B = Symbol("headers map sorted");
function c(A) {
    return 10 === A || 13 === A || 9 === A || 32 === A;
}
function I(A) {
    let e = 0, t = A.length;
    for(; t > e && c(A.charCodeAt(t - 1));)--t;
    for(; t > e && c(A.charCodeAt(e));)++e;
    return 0 === e && t === A.length ? A : A.substring(e, t);
}
function C(A, e) {
    if (Array.isArray(e)) for(let t = 0; t < e.length; ++t){
        const r = e[t];
        if (2 !== r.length) throw a.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${r.length}.`
        });
        h(A, r[0], r[1]);
    }
    else {
        if ("object" != typeof e || null === e) throw a.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const t = Object.keys(e);
            for(let r = 0; r < t.length; ++r)h(A, t[r], e[t[r]]);
        }
    }
}
function h(A, e, t) {
    if (t = I(t), !n(e)) throw a.errors.invalidArgument({
        prefix: "Headers.append",
        value: e,
        type: "header name"
    });
    if (!i(t)) throw a.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header value"
    });
    if ("immutable" === f(A)) throw new TypeError("immutable");
    return y(A).append(e, t, !1);
}
function l(A, e) {
    return A[0] < e[0] ? -1 : 1;
}
class u {
    cookies = null;
    constructor(A){
        A instanceof u ? (this[E] = new Map(A[E]), this[B] = A[B], this.cookies = null === A.cookies ? null : [
            ...A.cookies
        ]) : (this[E] = new Map(A), this[B] = null);
    }
    contains(A, e) {
        return this[E].has(e ? A : A.toLowerCase());
    }
    clear() {
        this[E].clear(), this[B] = null, this.cookies = null;
    }
    append(A, e, t) {
        this[B] = null;
        const r = t ? A : A.toLowerCase(), s = this[E].get(r);
        if (s) {
            const A = "cookie" === r ? "; " : ", ";
            this[E].set(r, {
                name: s.name,
                value: `${s.value}${A}${e}`
            });
        } else this[E].set(r, {
            name: A,
            value: e
        });
        "set-cookie" === r && (this.cookies ??= []).push(e);
    }
    set(A, e, t) {
        this[B] = null;
        const r = t ? A : A.toLowerCase();
        "set-cookie" === r && (this.cookies = [
            e
        ]), this[E].set(r, {
            name: A,
            value: e
        });
    }
    delete(A, e) {
        this[B] = null, e || (A = A.toLowerCase()), "set-cookie" === A && (this.cookies = null), this[E].delete(A);
    }
    get(A, e) {
        return this[E].get(e ? A : A.toLowerCase())?.value ?? null;
    }
    *[Symbol.iterator]() {
        for (const { 0: A, 1: { value: e } } of this[E])yield [
            A,
            e
        ];
    }
    get entries() {
        const A = {};
        if (0 !== this[E].size) for (const { name: e, value: t } of this[E].values())A[e] = t;
        return A;
    }
    rawValues() {
        return this[E].values();
    }
    get entriesList() {
        const A = [];
        if (0 !== this[E].size) for (const { 0: e, 1: { name: t, value: r } } of this[E])if ("set-cookie" === e) for (const e of this.cookies)A.push([
            t,
            e
        ]);
        else A.push([
            t,
            r
        ]);
        return A;
    }
    toSortedArray() {
        const A = this[E].size, e = new Array(A);
        if (A <= 32) {
            if (0 === A) return e;
            const t = this[E][Symbol.iterator](), r = t.next().value;
            e[0] = [
                r[0],
                r[1].value
            ], Q(null !== r[1].value);
            for(let r, s, o = 1, n = 0, i = 0, a = 0, g = 0; o < A; ++o){
                for(s = t.next().value, r = e[o] = [
                    s[0],
                    s[1].value
                ], Q(null !== r[1]), a = 0, i = o; a < i;)g = a + (i - a >> 1), e[g][0] <= r[0] ? a = g + 1 : i = g;
                if (o !== g) {
                    for(n = o; n > a;)e[n] = e[--n];
                    e[a] = r;
                }
            }
            if (!t.next().done) throw new TypeError("Unreachable");
            return e;
        }
        {
            let A = 0;
            for (const { 0: t, 1: { value: r } } of this[E])e[A++] = [
                t,
                r
            ], Q(null !== r);
            return e.sort(l);
        }
    }
}
class d {
    #G;
    #J;
    constructor(A = void 0){
        a.util.markAsUncloneable(this), A !== r && (this.#J = new u, this.#G = "none", void 0 !== A && C(this, A = a.converters.HeadersInit(A, "Headers contructor", "init")));
    }
    append(A, e) {
        a.brandCheck(this, d), a.argumentLengthCheck(arguments, 2, "Headers.append");
        const t = "Headers.append";
        return h(this, A = a.converters.ByteString(A, t, "name"), e = a.converters.ByteString(e, t, "value"));
    }
    delete(A) {
        a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.delete");
        if (A = a.converters.ByteString(A, "Headers.delete", "name"), !n(A)) throw a.errors.invalidArgument({
            prefix: "Headers.delete",
            value: A,
            type: "header name"
        });
        if ("immutable" === this.#G) throw new TypeError("immutable");
        this.#J.contains(A, !1) && this.#J.delete(A, !1);
    }
    get(A) {
        a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.get");
        const e = "Headers.get";
        if (A = a.converters.ByteString(A, e, "name"), !n(A)) throw a.errors.invalidArgument({
            prefix: e,
            value: A,
            type: "header name"
        });
        return this.#J.get(A, !1);
    }
    has(A) {
        a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.has");
        const e = "Headers.has";
        if (A = a.converters.ByteString(A, e, "name"), !n(A)) throw a.errors.invalidArgument({
            prefix: e,
            value: A,
            type: "header name"
        });
        return this.#J.contains(A, !1);
    }
    set(A, e) {
        a.brandCheck(this, d), a.argumentLengthCheck(arguments, 2, "Headers.set");
        const t = "Headers.set";
        if (A = a.converters.ByteString(A, t, "name"), e = I(e = a.converters.ByteString(e, t, "value")), !n(A)) throw a.errors.invalidArgument({
            prefix: t,
            value: A,
            type: "header name"
        });
        if (!i(e)) throw a.errors.invalidArgument({
            prefix: t,
            value: e,
            type: "header value"
        });
        if ("immutable" === this.#G) throw new TypeError("immutable");
        this.#J.set(A, e, !1);
    }
    getSetCookie() {
        a.brandCheck(this, d);
        const A = this.#J.cookies;
        return A ? [
            ...A
        ] : [];
    }
    get [B]() {
        if (this.#J[B]) return this.#J[B];
        const A = [], e = this.#J.toSortedArray(), t = this.#J.cookies;
        if (null === t || 1 === t.length) return this.#J[B] = e;
        for(let r = 0; r < e.length; ++r){
            const { 0: s, 1: o } = e[r];
            if ("set-cookie" === s) for(let e = 0; e < t.length; ++e)A.push([
                s,
                t[e]
            ]);
            else A.push([
                s,
                o
            ]);
        }
        return this.#J[B] = A;
    }
    [g.inspect.custom](A, e) {
        return e.depth ??= A, `Headers ${g.formatWithOptions(e, this.#J.entries)}`;
    }
    static getHeadersGuard(A) {
        return A.#G;
    }
    static setHeadersGuard(A, e) {
        A.#G = e;
    }
    static getHeadersList(A) {
        return A.#J;
    }
    static setHeadersList(A, e) {
        A.#J = e;
    }
}
const { getHeadersGuard: f, setHeadersGuard: w, getHeadersList: y, setHeadersList: D } = d;
Reflect.deleteProperty(d, "getHeadersGuard"), Reflect.deleteProperty(d, "setHeadersGuard"), Reflect.deleteProperty(d, "getHeadersList"), Reflect.deleteProperty(d, "setHeadersList"), o("Headers", d, B, 0, 1), Object.defineProperties(d.prototype, {
    append: s,
    delete: s,
    get: s,
    has: s,
    set: s,
    getSetCookie: s,
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: !0
    },
    [g.inspect.custom]: {
        enumerable: !1
    }
}), a.converters.HeadersInit = function(A, e, t) {
    if ("Object" === a.util.Type(A)) {
        const r = Reflect.get(A, Symbol.iterator);
        if (!g.types.isProxy(A) && r === d.prototype.entries) try {
            return y(A).entriesList;
        } catch  {}
        return "function" == typeof r ? a.converters["sequence<sequence<ByteString>>"](A, e, t, r.bind(A)) : a.converters["record<ByteString, ByteString>"](A, e, t);
    }
    throw a.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: C,
    compareHeaderName: l,
    Headers: d,
    HeadersList: u,
    getHeadersGuard: f,
    setHeadersGuard: w,
    setHeadersList: D,
    getHeadersList: y
};
