"use strict";
const { kHeadersList: n, kConstruct: r } = require("./module-8832.js"), { kGuard: o } = require("./module-5899.js"), { kEnumerableProperty: s } = require("./module-9361.js"), { makeIterator: i, isValidHeaderName: a, isValidHeaderValue: c } = require("./module-5728.js"), l = require("./module-9023.js"), { webidl: u } = require("./module-8005.js"), g = require("./module-2613.js"), E = Symbol("headers map"), h = Symbol("headers map sorted");
function d(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function I(e) {
    let t = 0, A = e.length;
    for(; A > t && d(e.charCodeAt(A - 1));)--A;
    for(; A > t && d(e.charCodeAt(t));)++t;
    return 0 === t && A === e.length ? e : e.substring(t, A);
}
function B(e, t) {
    if (Array.isArray(t)) for(let A = 0; A < t.length; ++A){
        const n = t[A];
        if (2 !== n.length) throw u.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${n.length}.`
        });
        Q(e, n[0], n[1]);
    }
    else {
        if ("object" != typeof t || null === t) throw u.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const A = Object.keys(t);
            for(let n = 0; n < A.length; ++n)Q(e, A[n], t[A[n]]);
        }
    }
}
function Q(e, t, A) {
    if (A = I(A), !a(t)) throw u.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header name"
    });
    if (!c(A)) throw u.errors.invalidArgument({
        prefix: "Headers.append",
        value: A,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[n].append(t, A);
}
class f {
    cookies = null;
    constructor(e){
        e instanceof f ? (this[E] = new Map(e[E]), this[h] = e[h], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[E] = new Map(e), this[h] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[E].has(e);
    }
    clear() {
        this[E].clear(), this[h] = null, this.cookies = null;
    }
    append(e, t) {
        this[h] = null;
        const A = e.toLowerCase(), n = this[E].get(A);
        if (n) {
            const e = "cookie" === A ? "; " : ", ";
            this[E].set(A, {
                name: n.name,
                value: `${n.value}${e}${t}`
            });
        } else this[E].set(A, {
            name: e,
            value: t
        });
        "set-cookie" === A && (this.cookies ??= [], this.cookies.push(t));
    }
    set(e, t) {
        this[h] = null;
        const A = e.toLowerCase();
        "set-cookie" === A && (this.cookies = [
            t
        ]), this[E].set(A, {
            name: e,
            value: t
        });
    }
    delete(e) {
        this[h] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[E].delete(e);
    }
    get(e) {
        const t = this[E].get(e.toLowerCase());
        return void 0 === t ? null : t.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: t }] of this[E])yield [
            e,
            t
        ];
    }
    get entries() {
        const e = {};
        if (this[E].size) for (const { name: t, value: A } of this[E].values())e[t] = A;
        return e;
    }
}
class C {
    constructor(e = void 0){
        e !== r && (this[n] = new f, this[o] = "none", void 0 !== e && B(this, e = u.converters.HeadersInit(e)));
    }
    append(e, t) {
        return u.brandCheck(this, C), u.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), Q(this, e = u.converters.ByteString(e), t = u.converters.ByteString(t));
    }
    delete(e) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = u.converters.ByteString(e), !a(e)) throw u.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].contains(e) && this[n].delete(e);
    }
    get(e) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = u.converters.ByteString(e), !a(e)) throw u.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[n].get(e);
    }
    has(e) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = u.converters.ByteString(e), !a(e)) throw u.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[n].contains(e);
    }
    set(e, t) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = u.converters.ByteString(e), t = I(t = u.converters.ByteString(t)), !a(e)) throw u.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!c(t)) throw u.errors.invalidArgument({
            prefix: "Headers.set",
            value: t,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].set(e, t);
    }
    getSetCookie() {
        u.brandCheck(this, C);
        const e = this[n].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [h]() {
        if (this[n][h]) return this[n][h];
        const e = [], t = [
            ...this[n]
        ].sort((e, t)=>e[0] < t[0] ? -1 : 1), A = this[n].cookies;
        for(let n = 0; n < t.length; ++n){
            const [r, o] = t[n];
            if ("set-cookie" === r) for(let t = 0; t < A.length; ++t)e.push([
                r,
                A[t]
            ]);
            else g(null !== o), e.push([
                r,
                o
            ]);
        }
        return this[n][h] = e, e;
    }
    keys() {
        if (u.brandCheck(this, C), "immutable" === this[o]) {
            const e = this[h];
            return i(()=>e, "Headers", "key");
        }
        return i(()=>[
                ...this[h].values()
            ], "Headers", "key");
    }
    values() {
        if (u.brandCheck(this, C), "immutable" === this[o]) {
            const e = this[h];
            return i(()=>e, "Headers", "value");
        }
        return i(()=>[
                ...this[h].values()
            ], "Headers", "value");
    }
    entries() {
        if (u.brandCheck(this, C), "immutable" === this[o]) {
            const e = this[h];
            return i(()=>e, "Headers", "key+value");
        }
        return i(()=>[
                ...this[h].values()
            ], "Headers", "key+value");
    }
    forEach(e, t = globalThis) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [A, n] of this)e.apply(t, [
            n,
            A,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return u.brandCheck(this, C), this[n];
    }
}
C.prototype[Symbol.iterator] = C.prototype.entries, Object.defineProperties(C.prototype, {
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
}), u.converters.HeadersInit = function(e) {
    if ("Object" === u.util.Type(e)) return e[Symbol.iterator] ? u.converters["sequence<sequence<ByteString>>"](e) : u.converters["record<ByteString, ByteString>"](e);
    throw u.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: B,
    Headers: C,
    HeadersList: f
};
