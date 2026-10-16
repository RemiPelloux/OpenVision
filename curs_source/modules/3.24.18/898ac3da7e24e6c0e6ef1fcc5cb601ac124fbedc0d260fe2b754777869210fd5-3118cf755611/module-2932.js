"use strict";
const { kHeadersList: t, kConstruct: s } = require("./module-8832.js"), { kGuard: o } = require("./module-5899.js"), { kEnumerableProperty: r } = require("./module-9361.js"), { makeIterator: i, isValidHeaderName: A, isValidHeaderValue: l } = require("./module-5728.js"), c = require("./module-9023.js"), { webidl: m } = require("./module-8005.js"), d = require("./module-2613.js"), g = Symbol("headers map"), u = Symbol("headers map sorted");
function E(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function p(e) {
    let n = 0, a = e.length;
    for(; a > n && E(e.charCodeAt(a - 1));)--a;
    for(; a > n && E(e.charCodeAt(n));)++n;
    return 0 === n && a === e.length ? e : e.substring(n, a);
}
function T(e, n) {
    if (Array.isArray(n)) for(let a = 0; a < n.length; ++a){
        const t = n[a];
        if (2 !== t.length) throw m.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${t.length}.`
        });
        k(e, t[0], t[1]);
    }
    else {
        if ("object" != typeof n || null === n) throw m.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const a = Object.keys(n);
            for(let t = 0; t < a.length; ++t)k(e, a[t], n[a[t]]);
        }
    }
}
function k(e, n, a) {
    if (a = p(a), !A(n)) throw m.errors.invalidArgument({
        prefix: "Headers.append",
        value: n,
        type: "header name"
    });
    if (!l(a)) throw m.errors.invalidArgument({
        prefix: "Headers.append",
        value: a,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[t].append(n, a);
}
class I {
    cookies = null;
    constructor(e){
        e instanceof I ? (this[g] = new Map(e[g]), this[u] = e[u], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[g] = new Map(e), this[u] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[g].has(e);
    }
    clear() {
        this[g].clear(), this[u] = null, this.cookies = null;
    }
    append(e, n) {
        this[u] = null;
        const a = e.toLowerCase(), t = this[g].get(a);
        if (t) {
            const e = "cookie" === a ? "; " : ", ";
            this[g].set(a, {
                name: t.name,
                value: `${t.value}${e}${n}`
            });
        } else this[g].set(a, {
            name: e,
            value: n
        });
        "set-cookie" === a && (this.cookies ??= [], this.cookies.push(n));
    }
    set(e, n) {
        this[u] = null;
        const a = e.toLowerCase();
        "set-cookie" === a && (this.cookies = [
            n
        ]), this[g].set(a, {
            name: e,
            value: n
        });
    }
    delete(e) {
        this[u] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[g].delete(e);
    }
    get(e) {
        const n = this[g].get(e.toLowerCase());
        return void 0 === n ? null : n.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: n }] of this[g])yield [
            e,
            n
        ];
    }
    get entries() {
        const e = {};
        if (this[g].size) for (const { name: n, value: a } of this[g].values())e[n] = a;
        return e;
    }
}
class h {
    constructor(e = void 0){
        e !== s && (this[t] = new I, this[o] = "none", void 0 !== e && T(this, e = m.converters.HeadersInit(e)));
    }
    append(e, n) {
        return m.brandCheck(this, h), m.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), k(this, e = m.converters.ByteString(e), n = m.converters.ByteString(n));
    }
    delete(e) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = m.converters.ByteString(e), !A(e)) throw m.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[t].contains(e) && this[t].delete(e);
    }
    get(e) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = m.converters.ByteString(e), !A(e)) throw m.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[t].get(e);
    }
    has(e) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = m.converters.ByteString(e), !A(e)) throw m.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[t].contains(e);
    }
    set(e, n) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = m.converters.ByteString(e), n = p(n = m.converters.ByteString(n)), !A(e)) throw m.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!l(n)) throw m.errors.invalidArgument({
            prefix: "Headers.set",
            value: n,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[t].set(e, n);
    }
    getSetCookie() {
        m.brandCheck(this, h);
        const e = this[t].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [u]() {
        if (this[t][u]) return this[t][u];
        const e = [], n = [
            ...this[t]
        ].sort((e, n)=>e[0] < n[0] ? -1 : 1), a = this[t].cookies;
        for(let t = 0; t < n.length; ++t){
            const [s, o] = n[t];
            if ("set-cookie" === s) for(let n = 0; n < a.length; ++n)e.push([
                s,
                a[n]
            ]);
            else d(null !== o), e.push([
                s,
                o
            ]);
        }
        return this[t][u] = e, e;
    }
    keys() {
        if (m.brandCheck(this, h), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "key");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "key");
    }
    values() {
        if (m.brandCheck(this, h), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "value");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "value");
    }
    entries() {
        if (m.brandCheck(this, h), "immutable" === this[o]) {
            const e = this[u];
            return i(()=>e, "Headers", "key+value");
        }
        return i(()=>[
                ...this[u].values()
            ], "Headers", "key+value");
    }
    forEach(e, n = globalThis) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [a, t] of this)e.apply(n, [
            t,
            a,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return m.brandCheck(this, h), this[t];
    }
}
h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, {
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
    [c.inspect.custom]: {
        enumerable: !1
    }
}), m.converters.HeadersInit = function(e) {
    if ("Object" === m.util.Type(e)) return e[Symbol.iterator] ? m.converters["sequence<sequence<ByteString>>"](e) : m.converters["record<ByteString, ByteString>"](e);
    throw m.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: T,
    Headers: h,
    HeadersList: I
};
