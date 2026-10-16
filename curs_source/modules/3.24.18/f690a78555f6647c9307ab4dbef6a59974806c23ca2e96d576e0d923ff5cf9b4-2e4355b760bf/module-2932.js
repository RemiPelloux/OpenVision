"use strict";
const { kHeadersList: n, kConstruct: r } = require("./module-8832.js"), { kGuard: o } = require("./module-5899.js"), { kEnumerableProperty: s } = require("./module-9361.js"), { makeIterator: a, isValidHeaderName: i, isValidHeaderValue: c } = require("./module-5728.js"), l = require("./module-9023.js"), { webidl: g } = require("./module-8005.js"), E = require("./module-2613.js"), u = Symbol("headers map"), d = Symbol("headers map sorted");
function I(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function h(e) {
    let A = 0, t = e.length;
    for(; t > A && I(e.charCodeAt(t - 1));)--t;
    for(; t > A && I(e.charCodeAt(A));)++A;
    return 0 === A && t === e.length ? e : e.substring(A, t);
}
function Q(e, A) {
    if (Array.isArray(A)) for(let t = 0; t < A.length; ++t){
        const n = A[t];
        if (2 !== n.length) throw g.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${n.length}.`
        });
        m(e, n[0], n[1]);
    }
    else {
        if ("object" != typeof A || null === A) throw g.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const t = Object.keys(A);
            for(let n = 0; n < t.length; ++n)m(e, t[n], A[t[n]]);
        }
    }
}
function m(e, A, t) {
    if (t = h(t), !i(A)) throw g.errors.invalidArgument({
        prefix: "Headers.append",
        value: A,
        type: "header name"
    });
    if (!c(t)) throw g.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[n].append(A, t);
}
class C {
    cookies = null;
    constructor(e){
        e instanceof C ? (this[u] = new Map(e[u]), this[d] = e[d], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[u] = new Map(e), this[d] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[u].has(e);
    }
    clear() {
        this[u].clear(), this[d] = null, this.cookies = null;
    }
    append(e, A) {
        this[d] = null;
        const t = e.toLowerCase(), n = this[u].get(t);
        if (n) {
            const e = "cookie" === t ? "; " : ", ";
            this[u].set(t, {
                name: n.name,
                value: `${n.value}${e}${A}`
            });
        } else this[u].set(t, {
            name: e,
            value: A
        });
        "set-cookie" === t && (this.cookies ??= [], this.cookies.push(A));
    }
    set(e, A) {
        this[d] = null;
        const t = e.toLowerCase();
        "set-cookie" === t && (this.cookies = [
            A
        ]), this[u].set(t, {
            name: e,
            value: A
        });
    }
    delete(e) {
        this[d] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[u].delete(e);
    }
    get(e) {
        const A = this[u].get(e.toLowerCase());
        return void 0 === A ? null : A.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: A }] of this[u])yield [
            e,
            A
        ];
    }
    get entries() {
        const e = {};
        if (this[u].size) for (const { name: A, value: t } of this[u].values())e[A] = t;
        return e;
    }
}
class B {
    constructor(e = void 0){
        e !== r && (this[n] = new C, this[o] = "none", void 0 !== e && Q(this, e = g.converters.HeadersInit(e)));
    }
    append(e, A) {
        return g.brandCheck(this, B), g.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), m(this, e = g.converters.ByteString(e), A = g.converters.ByteString(A));
    }
    delete(e) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = g.converters.ByteString(e), !i(e)) throw g.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].contains(e) && this[n].delete(e);
    }
    get(e) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = g.converters.ByteString(e), !i(e)) throw g.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[n].get(e);
    }
    has(e) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = g.converters.ByteString(e), !i(e)) throw g.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[n].contains(e);
    }
    set(e, A) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = g.converters.ByteString(e), A = h(A = g.converters.ByteString(A)), !i(e)) throw g.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!c(A)) throw g.errors.invalidArgument({
            prefix: "Headers.set",
            value: A,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].set(e, A);
    }
    getSetCookie() {
        g.brandCheck(this, B);
        const e = this[n].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [d]() {
        if (this[n][d]) return this[n][d];
        const e = [], A = [
            ...this[n]
        ].sort((e, A)=>e[0] < A[0] ? -1 : 1), t = this[n].cookies;
        for(let n = 0; n < A.length; ++n){
            const [r, o] = A[n];
            if ("set-cookie" === r) for(let A = 0; A < t.length; ++A)e.push([
                r,
                t[A]
            ]);
            else E(null !== o), e.push([
                r,
                o
            ]);
        }
        return this[n][d] = e, e;
    }
    keys() {
        if (g.brandCheck(this, B), "immutable" === this[o]) {
            const e = this[d];
            return a(()=>e, "Headers", "key");
        }
        return a(()=>[
                ...this[d].values()
            ], "Headers", "key");
    }
    values() {
        if (g.brandCheck(this, B), "immutable" === this[o]) {
            const e = this[d];
            return a(()=>e, "Headers", "value");
        }
        return a(()=>[
                ...this[d].values()
            ], "Headers", "value");
    }
    entries() {
        if (g.brandCheck(this, B), "immutable" === this[o]) {
            const e = this[d];
            return a(()=>e, "Headers", "key+value");
        }
        return a(()=>[
                ...this[d].values()
            ], "Headers", "key+value");
    }
    forEach(e, A = globalThis) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [t, n] of this)e.apply(A, [
            n,
            t,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return g.brandCheck(this, B), this[n];
    }
}
B.prototype[Symbol.iterator] = B.prototype.entries, Object.defineProperties(B.prototype, {
    append: s,
    delete: s,
    get: s,
    has: s,
    set: s,
    getSetCookie: s,
    keys: s,
    values: s,
    entries: s,
    forEach: s,
    [Symbol.iterator]: {
        enumerable: !1
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: !0
    },
    [l.inspect.custom]: {
        enumerable: !1
    }
}), g.converters.HeadersInit = function(e) {
    if ("Object" === g.util.Type(e)) return e[Symbol.iterator] ? g.converters["sequence<sequence<ByteString>>"](e) : g.converters["record<ByteString, ByteString>"](e);
    throw g.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: Q,
    Headers: B,
    HeadersList: C
};
