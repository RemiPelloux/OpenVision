"use strict";
const { kHeadersList: n, kConstruct: s } = require("./module-5532.js"), { kGuard: i } = require("./module-7271.js"), { kEnumerableProperty: o } = require("./module-3589.js"), { makeIterator: a, isValidHeaderName: u, isValidHeaderValue: c } = require("./module-8116.js"), l = require("./module-9023.js"), { webidl: m } = require("./module-8193.js"), d = require("./module-2613.js"), f = Symbol("headers map"), p = Symbol("headers map sorted");
function h(t) {
    return 10 === t || 13 === t || 9 === t || 32 === t;
}
function g(t) {
    let e = 0, r = t.length;
    for(; r > e && h(t.charCodeAt(r - 1));)--r;
    for(; r > e && h(t.charCodeAt(e));)++e;
    return 0 === e && r === t.length ? t : t.substring(e, r);
}
function A(t, e) {
    if (Array.isArray(e)) for(let r = 0; r < e.length; ++r){
        const n = e[r];
        if (2 !== n.length) throw m.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${n.length}.`
        });
        _(t, n[0], n[1]);
    }
    else {
        if ("object" != typeof e || null === e) throw m.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const r = Object.keys(e);
            for(let n = 0; n < r.length; ++n)_(t, r[n], e[r[n]]);
        }
    }
}
function _(t, e, r) {
    if (r = g(r), !u(e)) throw m.errors.invalidArgument({
        prefix: "Headers.append",
        value: e,
        type: "header name"
    });
    if (!c(r)) throw m.errors.invalidArgument({
        prefix: "Headers.append",
        value: r,
        type: "header value"
    });
    if ("immutable" === t[i]) throw new TypeError("immutable");
    return t[i], t[n].append(e, r);
}
class y {
    cookies = null;
    constructor(t){
        t instanceof y ? (this[f] = new Map(t[f]), this[p] = t[p], this.cookies = null === t.cookies ? null : [
            ...t.cookies
        ]) : (this[f] = new Map(t), this[p] = null);
    }
    contains(t) {
        return t = t.toLowerCase(), this[f].has(t);
    }
    clear() {
        this[f].clear(), this[p] = null, this.cookies = null;
    }
    append(t, e) {
        this[p] = null;
        const r = t.toLowerCase(), n = this[f].get(r);
        if (n) {
            const t = "cookie" === r ? "; " : ", ";
            this[f].set(r, {
                name: n.name,
                value: `${n.value}${t}${e}`
            });
        } else this[f].set(r, {
            name: t,
            value: e
        });
        "set-cookie" === r && (this.cookies ??= [], this.cookies.push(e));
    }
    set(t, e) {
        this[p] = null;
        const r = t.toLowerCase();
        "set-cookie" === r && (this.cookies = [
            e
        ]), this[f].set(r, {
            name: t,
            value: e
        });
    }
    delete(t) {
        this[p] = null, "set-cookie" === (t = t.toLowerCase()) && (this.cookies = null), this[f].delete(t);
    }
    get(t) {
        const e = this[f].get(t.toLowerCase());
        return void 0 === e ? null : e.value;
    }
    *[Symbol.iterator]() {
        for (const [t, { value: e }] of this[f])yield [
            t,
            e
        ];
    }
    get entries() {
        const t = {};
        if (this[f].size) for (const { name: e, value: r } of this[f].values())t[e] = r;
        return t;
    }
}
class w {
    constructor(t = void 0){
        t !== s && (this[n] = new y, this[i] = "none", void 0 !== t && A(this, t = m.converters.HeadersInit(t)));
    }
    append(t, e) {
        return m.brandCheck(this, w), m.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), _(this, t = m.converters.ByteString(t), e = m.converters.ByteString(e));
    }
    delete(t) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), t = m.converters.ByteString(t), !u(t)) throw m.errors.invalidArgument({
            prefix: "Headers.delete",
            value: t,
            type: "header name"
        });
        if ("immutable" === this[i]) throw new TypeError("immutable");
        this[i], this[n].contains(t) && this[n].delete(t);
    }
    get(t) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), t = m.converters.ByteString(t), !u(t)) throw m.errors.invalidArgument({
            prefix: "Headers.get",
            value: t,
            type: "header name"
        });
        return this[n].get(t);
    }
    has(t) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), t = m.converters.ByteString(t), !u(t)) throw m.errors.invalidArgument({
            prefix: "Headers.has",
            value: t,
            type: "header name"
        });
        return this[n].contains(t);
    }
    set(t, e) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), t = m.converters.ByteString(t), e = g(e = m.converters.ByteString(e)), !u(t)) throw m.errors.invalidArgument({
            prefix: "Headers.set",
            value: t,
            type: "header name"
        });
        if (!c(e)) throw m.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header value"
        });
        if ("immutable" === this[i]) throw new TypeError("immutable");
        this[i], this[n].set(t, e);
    }
    getSetCookie() {
        m.brandCheck(this, w);
        const t = this[n].cookies;
        return t ? [
            ...t
        ] : [];
    }
    get [p]() {
        if (this[n][p]) return this[n][p];
        const t = [], e = [
            ...this[n]
        ].sort((t, e)=>t[0] < e[0] ? -1 : 1), r = this[n].cookies;
        for(let n = 0; n < e.length; ++n){
            const [s, i] = e[n];
            if ("set-cookie" === s) for(let e = 0; e < r.length; ++e)t.push([
                s,
                r[e]
            ]);
            else d(null !== i), t.push([
                s,
                i
            ]);
        }
        return this[n][p] = t, t;
    }
    keys() {
        if (m.brandCheck(this, w), "immutable" === this[i]) {
            const t = this[p];
            return a(()=>t, "Headers", "key");
        }
        return a(()=>[
                ...this[p].values()
            ], "Headers", "key");
    }
    values() {
        if (m.brandCheck(this, w), "immutable" === this[i]) {
            const t = this[p];
            return a(()=>t, "Headers", "value");
        }
        return a(()=>[
                ...this[p].values()
            ], "Headers", "value");
    }
    entries() {
        if (m.brandCheck(this, w), "immutable" === this[i]) {
            const t = this[p];
            return a(()=>t, "Headers", "key+value");
        }
        return a(()=>[
                ...this[p].values()
            ], "Headers", "key+value");
    }
    forEach(t, e = globalThis) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof t) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [r, n] of this)t.apply(e, [
            n,
            r,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return m.brandCheck(this, w), this[n];
    }
}
w.prototype[Symbol.iterator] = w.prototype.entries, Object.defineProperties(w.prototype, {
    append: o,
    delete: o,
    get: o,
    has: o,
    set: o,
    getSetCookie: o,
    keys: o,
    values: o,
    entries: o,
    forEach: o,
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
}), m.converters.HeadersInit = function(t) {
    if ("Object" === m.util.Type(t)) return t[Symbol.iterator] ? m.converters["sequence<sequence<ByteString>>"](t) : m.converters["record<ByteString, ByteString>"](t);
    throw m.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
}, module.exports = {
    fill: A,
    Headers: w,
    HeadersList: y
};
