"use strict";
const { kHeadersList: t, kConstruct: s } = require("./module-8832.js"), { kGuard: o } = require("./module-5899.js"), { kEnumerableProperty: r } = require("./module-9361.js"), { makeIterator: i, isValidHeaderName: l, isValidHeaderValue: d } = require("./module-5728.js"), m = require("./module-9023.js"), { webidl: c } = require("./module-8005.js"), p = require("./module-2613.js"), A = Symbol("headers map"), u = Symbol("headers map sorted");
function g(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function T(e) {
    let a = 0, n = e.length;
    for(; n > a && g(e.charCodeAt(n - 1));)--n;
    for(; n > a && g(e.charCodeAt(a));)++a;
    return 0 === a && n === e.length ? e : e.substring(a, n);
}
function h(e, a) {
    if (Array.isArray(a)) for(let n = 0; n < a.length; ++n){
        const t = a[n];
        if (2 !== t.length) throw c.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${t.length}.`
        });
        k(e, t[0], t[1]);
    }
    else {
        if ("object" != typeof a || null === a) throw c.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const n = Object.keys(a);
            for(let t = 0; t < n.length; ++t)k(e, n[t], a[n[t]]);
        }
    }
}
function k(e, a, n) {
    if (n = T(n), !l(a)) throw c.errors.invalidArgument({
        prefix: "Headers.append",
        value: a,
        type: "header name"
    });
    if (!d(n)) throw c.errors.invalidArgument({
        prefix: "Headers.append",
        value: n,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[t].append(a, n);
}
class _ {
    cookies = null;
    constructor(e){
        e instanceof _ ? (this[A] = new Map(e[A]), this[u] = e[u], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[A] = new Map(e), this[u] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[A].has(e);
    }
    clear() {
        this[A].clear(), this[u] = null, this.cookies = null;
    }
    append(e, a) {
        this[u] = null;
        const n = e.toLowerCase(), t = this[A].get(n);
        if (t) {
            const e = "cookie" === n ? "; " : ", ";
            this[A].set(n, {
                name: t.name,
                value: `${t.value}${e}${a}`
            });
        } else this[A].set(n, {
            name: e,
            value: a
        });
        "set-cookie" === n && (this.cookies ??= [], this.cookies.push(a));
    }
    set(e, a) {
        this[u] = null;
        const n = e.toLowerCase();
        "set-cookie" === n && (this.cookies = [
            a
        ]), this[A].set(n, {
            name: e,
            value: a
        });
    }
    delete(e) {
        this[u] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[A].delete(e);
    }
    get(e) {
        const a = this[A].get(e.toLowerCase());
        return void 0 === a ? null : a.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: a }] of this[A])yield [
            e,
            a
        ];
    }
    get entries() {
        const e = {};
        if (this[A].size) for (const { name: a, value: n } of this[A].values())e[a] = n;
        return e;
    }
}
class E {
    constructor(e = void 0){
        e !== s && (this[t] = new _, this[o] = "none", void 0 !== e && h(this, e = c.converters.HeadersInit(e)));
    }
    append(e, a) {
        return c.brandCheck(this, E), c.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), k(this, e = c.converters.ByteString(e), a = c.converters.ByteString(a));
    }
    delete(e) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = c.converters.ByteString(e), !l(e)) throw c.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[t].contains(e) && this[t].delete(e);
    }
    get(e) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = c.converters.ByteString(e), !l(e)) throw c.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[t].get(e);
    }
    has(e) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = c.converters.ByteString(e), !l(e)) throw c.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[t].contains(e);
    }
    set(e, a) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = c.converters.ByteString(e), a = T(a = c.converters.ByteString(a)), !l(e)) throw c.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!d(a)) throw c.errors.invalidArgument({
            prefix: "Headers.set",
            value: a,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[t].set(e, a);
    }
    getSetCookie() {
        c.brandCheck(this, E);
        const e = this[t].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [u]() {
        if (this[t][u]) return this[t][u];
        const e = [], a = [
            ...this[t]
        ].sort((e, a)=>e[0] < a[0] ? -1 : 1), n = this[t].cookies;
        for(let t = 0; t < a.length; ++t){
            const [s, o] = a[t];
            if ("set-cookie" === s) for(let a = 0; a < n.length; ++a)e.push([
                s,
                n[a]
            ]);
            else p(null !== o), e.push([
                s,
                o
            ]);
        }
        return this[t][u] = e, e;
    }
    keys() {
        if (c.brandCheck(this, E), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "key");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "key");
    }
    values() {
        if (c.brandCheck(this, E), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "value");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "value");
    }
    entries() {
        if (c.brandCheck(this, E), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "key+value");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "key+value");
    }
    forEach(e, a = globalThis) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [n, t] of this)e.apply(a, [
            t,
            n,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return c.brandCheck(this, E), this[t];
    }
}
E.prototype[Symbol.iterator] = E.prototype.entries, Object.defineProperties(E.prototype, {
    append: r,
    delete: r,
    get: r,
    has: r,
    set: r,
    getSetCookie: r,
    keys: r,
    values: r,
    entries: r,
    forEach: r,
    [Symbol.iterator]: {
        enumerable: !1
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: !0
    },
    [m.inspect.custom]: {
        enumerable: !1
    }
}), c.converters.HeadersInit = function(e) {
    if ("Object" === c.util.Type(e)) return e[Symbol.iterator] ? c.converters["sequence<sequence<ByteString>>"](e) : c.converters["record<ByteString, ByteString>"](e);
    throw c.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: h,
    Headers: E,
    HeadersList: _
};
