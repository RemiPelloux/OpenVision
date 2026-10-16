"use strict";
const { kHeadersList: a, kConstruct: s } = require("./module-8832.js"), { kGuard: o } = require("./module-5899.js"), { kEnumerableProperty: r } = require("./module-9361.js"), { makeIterator: i, isValidHeaderName: A, isValidHeaderValue: c } = require("./module-5728.js"), l = require("./module-9023.js"), { webidl: d } = require("./module-8005.js"), m = require("./module-2613.js"), u = Symbol("headers map"), g = Symbol("headers map sorted");
function p(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function E(e) {
    let n = 0, t = e.length;
    for(; t > n && p(e.charCodeAt(t - 1));)--t;
    for(; t > n && p(e.charCodeAt(n));)++n;
    return 0 === n && t === e.length ? e : e.substring(n, t);
}
function h(e, n) {
    if (Array.isArray(n)) for(let t = 0; t < n.length; ++t){
        const a = n[t];
        if (2 !== a.length) throw d.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${a.length}.`
        });
        T(e, a[0], a[1]);
    }
    else {
        if ("object" != typeof n || null === n) throw d.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const t = Object.keys(n);
            for(let a = 0; a < t.length; ++a)T(e, t[a], n[t[a]]);
        }
    }
}
function T(e, n, t) {
    if (t = E(t), !A(n)) throw d.errors.invalidArgument({
        prefix: "Headers.append",
        value: n,
        type: "header name"
    });
    if (!c(t)) throw d.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[a].append(n, t);
}
class k {
    cookies = null;
    constructor(e){
        e instanceof k ? (this[u] = new Map(e[u]), this[g] = e[g], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[u] = new Map(e), this[g] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[u].has(e);
    }
    clear() {
        this[u].clear(), this[g] = null, this.cookies = null;
    }
    append(e, n) {
        this[g] = null;
        const t = e.toLowerCase(), a = this[u].get(t);
        if (a) {
            const e = "cookie" === t ? "; " : ", ";
            this[u].set(t, {
                name: a.name,
                value: `${a.value}${e}${n}`
            });
        } else this[u].set(t, {
            name: e,
            value: n
        });
        "set-cookie" === t && (this.cookies ??= [], this.cookies.push(n));
    }
    set(e, n) {
        this[g] = null;
        const t = e.toLowerCase();
        "set-cookie" === t && (this.cookies = [
            n
        ]), this[u].set(t, {
            name: e,
            value: n
        });
    }
    delete(e) {
        this[g] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[u].delete(e);
    }
    get(e) {
        const n = this[u].get(e.toLowerCase());
        return void 0 === n ? null : n.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: n }] of this[u])yield [
            e,
            n
        ];
    }
    get entries() {
        const e = {};
        if (this[u].size) for (const { name: n, value: t } of this[u].values())e[n] = t;
        return e;
    }
}
class f {
    constructor(e = void 0){
        e !== s && (this[a] = new k, this[o] = "none", void 0 !== e && h(this, e = d.converters.HeadersInit(e)));
    }
    append(e, n) {
        return d.brandCheck(this, f), d.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), T(this, e = d.converters.ByteString(e), n = d.converters.ByteString(n));
    }
    delete(e) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = d.converters.ByteString(e), !A(e)) throw d.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[a].contains(e) && this[a].delete(e);
    }
    get(e) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = d.converters.ByteString(e), !A(e)) throw d.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[a].get(e);
    }
    has(e) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = d.converters.ByteString(e), !A(e)) throw d.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[a].contains(e);
    }
    set(e, n) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = d.converters.ByteString(e), n = E(n = d.converters.ByteString(n)), !A(e)) throw d.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!c(n)) throw d.errors.invalidArgument({
            prefix: "Headers.set",
            value: n,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[a].set(e, n);
    }
    getSetCookie() {
        d.brandCheck(this, f);
        const e = this[a].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [g]() {
        if (this[a][g]) return this[a][g];
        const e = [], n = [
            ...this[a]
        ].sort((e, n)=>e[0] < n[0] ? -1 : 1), t = this[a].cookies;
        for(let a = 0; a < n.length; ++a){
            const [s, o] = n[a];
            if ("set-cookie" === s) for(let n = 0; n < t.length; ++n)e.push([
                s,
                t[n]
            ]);
            else m(null !== o), e.push([
                s,
                o
            ]);
        }
        return this[a][g] = e, e;
    }
    keys() {
        if (d.brandCheck(this, f), "immutable" === this[o]) {
            const e = this[g];
            return i(()=>e, "Headers", "key");
        }
        return i(()=>[
                ...this[g].values()
            ], "Headers", "key");
    }
    values() {
        if (d.brandCheck(this, f), "immutable" === this[o]) {
            const e = this[g];
            return i(()=>e, "Headers", "value");
        }
        return i(()=>[
                ...this[g].values()
            ], "Headers", "value");
    }
    entries() {
        if (d.brandCheck(this, f), "immutable" === this[o]) {
            const e = this[g];
            return i(()=>e, "Headers", "key+value");
        }
        return i(()=>[
                ...this[g].values()
            ], "Headers", "key+value");
    }
    forEach(e, n = globalThis) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [t, a] of this)e.apply(n, [
            a,
            t,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return d.brandCheck(this, f), this[a];
    }
}
f.prototype[Symbol.iterator] = f.prototype.entries, Object.defineProperties(f.prototype, {
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
    [l.inspect.custom]: {
        enumerable: !1
    }
}), d.converters.HeadersInit = function(e) {
    if ("Object" === d.util.Type(e)) return e[Symbol.iterator] ? d.converters["sequence<sequence<ByteString>>"](e) : d.converters["record<ByteString, ByteString>"](e);
    throw d.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: h,
    Headers: f,
    HeadersList: k
};
