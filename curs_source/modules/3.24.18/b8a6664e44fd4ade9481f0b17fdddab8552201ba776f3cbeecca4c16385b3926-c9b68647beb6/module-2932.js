"use strict";
const { kHeadersList: r, kConstruct: s } = require("./module-58832.js"), { kGuard: o } = require("./module-35899.js"), { kEnumerableProperty: n } = require("./module-9361.js"), { makeIterator: i, isValidHeaderName: E, isValidHeaderValue: Q } = require("./module-75728.js"), g = require(39023), { webidl: C } = require("./module-48005.js"), B = require(42613), a = Symbol("headers map"), I = Symbol("headers map sorted");
function c(A) {
    return 10 === A || 13 === A || 9 === A || 32 === A;
}
function h(A) {
    let e = 0, t = A.length;
    for(; t > e && c(A.charCodeAt(t - 1));)--t;
    for(; t > e && c(A.charCodeAt(e));)++e;
    return 0 === e && t === A.length ? A : A.substring(e, t);
}
function l(A, e) {
    if (Array.isArray(e)) for(let t = 0; t < e.length; ++t){
        const r = e[t];
        if (2 !== r.length) throw C.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${r.length}.`
        });
        u(A, r[0], r[1]);
    }
    else {
        if ("object" != typeof e || null === e) throw C.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const t = Object.keys(e);
            for(let r = 0; r < t.length; ++r)u(A, t[r], e[t[r]]);
        }
    }
}
function u(A, e, t) {
    if (t = h(t), !E(e)) throw C.errors.invalidArgument({
        prefix: "Headers.append",
        value: e,
        type: "header name"
    });
    if (!Q(t)) throw C.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header value"
    });
    if ("immutable" === A[o]) throw new TypeError("immutable");
    return A[o], A[r].append(e, t);
}
class d {
    cookies = null;
    constructor(A){
        A instanceof d ? (this[a] = new Map(A[a]), this[I] = A[I], this.cookies = null === A.cookies ? null : [
            ...A.cookies
        ]) : (this[a] = new Map(A), this[I] = null);
    }
    contains(A) {
        return A = A.toLowerCase(), this[a].has(A);
    }
    clear() {
        this[a].clear(), this[I] = null, this.cookies = null;
    }
    append(A, e) {
        this[I] = null;
        const t = A.toLowerCase(), r = this[a].get(t);
        if (r) {
            const A = "cookie" === t ? "; " : ", ";
            this[a].set(t, {
                name: r.name,
                value: `${r.value}${A}${e}`
            });
        } else this[a].set(t, {
            name: A,
            value: e
        });
        "set-cookie" === t && (this.cookies ??= [], this.cookies.push(e));
    }
    set(A, e) {
        this[I] = null;
        const t = A.toLowerCase();
        "set-cookie" === t && (this.cookies = [
            e
        ]), this[a].set(t, {
            name: A,
            value: e
        });
    }
    delete(A) {
        this[I] = null, "set-cookie" === (A = A.toLowerCase()) && (this.cookies = null), this[a].delete(A);
    }
    get(A) {
        const e = this[a].get(A.toLowerCase());
        return void 0 === e ? null : e.value;
    }
    *[Symbol.iterator]() {
        for (const [A, { value: e }] of this[a])yield [
            A,
            e
        ];
    }
    get entries() {
        const A = {};
        if (this[a].size) for (const { name: e, value: t } of this[a].values())A[e] = t;
        return A;
    }
}
class f {
    constructor(A = void 0){
        A !== s && (this[r] = new d, this[o] = "none", void 0 !== A && l(this, A = C.converters.HeadersInit(A)));
    }
    append(A, e) {
        return C.brandCheck(this, f), C.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), u(this, A = C.converters.ByteString(A), e = C.converters.ByteString(e));
    }
    delete(A) {
        if (C.brandCheck(this, f), C.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), A = C.converters.ByteString(A), !E(A)) throw C.errors.invalidArgument({
            prefix: "Headers.delete",
            value: A,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[r].contains(A) && this[r].delete(A);
    }
    get(A) {
        if (C.brandCheck(this, f), C.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), A = C.converters.ByteString(A), !E(A)) throw C.errors.invalidArgument({
            prefix: "Headers.get",
            value: A,
            type: "header name"
        });
        return this[r].get(A);
    }
    has(A) {
        if (C.brandCheck(this, f), C.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), A = C.converters.ByteString(A), !E(A)) throw C.errors.invalidArgument({
            prefix: "Headers.has",
            value: A,
            type: "header name"
        });
        return this[r].contains(A);
    }
    set(A, e) {
        if (C.brandCheck(this, f), C.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), A = C.converters.ByteString(A), e = h(e = C.converters.ByteString(e)), !E(A)) throw C.errors.invalidArgument({
            prefix: "Headers.set",
            value: A,
            type: "header name"
        });
        if (!Q(e)) throw C.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[r].set(A, e);
    }
    getSetCookie() {
        C.brandCheck(this, f);
        const A = this[r].cookies;
        return A ? [
            ...A
        ] : [];
    }
    get [I]() {
        if (this[r][I]) return this[r][I];
        const A = [], e = [
            ...this[r]
        ].sort((A, e)=>A[0] < e[0] ? -1 : 1), t = this[r].cookies;
        for(let r = 0; r < e.length; ++r){
            const [s, o] = e[r];
            if ("set-cookie" === s) for(let e = 0; e < t.length; ++e)A.push([
                s,
                t[e]
            ]);
            else B(null !== o), A.push([
                s,
                o
            ]);
        }
        return this[r][I] = A, A;
    }
    keys() {
        if (C.brandCheck(this, f), "immutable" === this[o]) {
            const A = this[I];
            return i(()=>A, "Headers", "key");
        }
        return i(()=>[
                ...this[I].values()
            ], "Headers", "key");
    }
    values() {
        if (C.brandCheck(this, f), "immutable" === this[o]) {
            const A = this[I];
            return i(()=>A, "Headers", "value");
        }
        return i(()=>[
                ...this[I].values()
            ], "Headers", "value");
    }
    entries() {
        if (C.brandCheck(this, f), "immutable" === this[o]) {
            const A = this[I];
            return i(()=>A, "Headers", "key+value");
        }
        return i(()=>[
                ...this[I].values()
            ], "Headers", "key+value");
    }
    forEach(A, e = globalThis) {
        if (C.brandCheck(this, f), C.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof A) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [t, r] of this)A.apply(e, [
            r,
            t,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return C.brandCheck(this, f), this[r];
    }
}
f.prototype[Symbol.iterator] = f.prototype.entries, Object.defineProperties(f.prototype, {
    append: n,
    delete: n,
    get: n,
    has: n,
    set: n,
    getSetCookie: n,
    keys: n,
    values: n,
    entries: n,
    forEach: n,
    [Symbol.iterator]: {
        enumerable: !1
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: !0
    },
    [g.inspect.custom]: {
        enumerable: !1
    }
}), C.converters.HeadersInit = function(A) {
    if ("Object" === C.util.Type(A)) return A[Symbol.iterator] ? C.converters["sequence<sequence<ByteString>>"](A) : C.converters["record<ByteString, ByteString>"](A);
    throw C.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: l,
    Headers: f,
    HeadersList: d
};
