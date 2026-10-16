"use strict";
const { kHeadersList: n, kConstruct: s } = require("./module-15532.js"), { kGuard: o } = require("./module-77271.js"), { kEnumerableProperty: i } = require("./module-83589.js"), { makeIterator: a, isValidHeaderName: c, isValidHeaderValue: l } = require("./module-98116.js"), u = require("./module-39023.js"), { webidl: d } = require("./module-18193.js"), p = require("./module-42613.js"), m = Symbol("headers map"), h = Symbol("headers map sorted");
function f(e) {
    return 10 === e || 13 === e || 9 === e || 32 === e;
}
function g(e) {
    let t = 0, r = e.length;
    for(; r > t && f(e.charCodeAt(r - 1));)--r;
    for(; r > t && f(e.charCodeAt(t));)++t;
    return 0 === t && r === e.length ? e : e.substring(t, r);
}
function y(e, t) {
    if (Array.isArray(t)) for(let r = 0; r < t.length; ++r){
        const n = t[r];
        if (2 !== n.length) throw d.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${n.length}.`
        });
        w(e, n[0], n[1]);
    }
    else {
        if ("object" != typeof t || null === t) throw d.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
        {
            const r = Object.keys(t);
            for(let n = 0; n < r.length; ++n)w(e, r[n], t[r[n]]);
        }
    }
}
function w(e, t, r) {
    if (r = g(r), !c(t)) throw d.errors.invalidArgument({
        prefix: "Headers.append",
        value: t,
        type: "header name"
    });
    if (!l(r)) throw d.errors.invalidArgument({
        prefix: "Headers.append",
        value: r,
        type: "header value"
    });
    if ("immutable" === e[o]) throw new TypeError("immutable");
    return e[o], e[n].append(t, r);
}
class v {
    cookies = null;
    constructor(e){
        e instanceof v ? (this[m] = new Map(e[m]), this[h] = e[h], this.cookies = null === e.cookies ? null : [
            ...e.cookies
        ]) : (this[m] = new Map(e), this[h] = null);
    }
    contains(e) {
        return e = e.toLowerCase(), this[m].has(e);
    }
    clear() {
        this[m].clear(), this[h] = null, this.cookies = null;
    }
    append(e, t) {
        this[h] = null;
        const r = e.toLowerCase(), n = this[m].get(r);
        if (n) {
            const e = "cookie" === r ? "; " : ", ";
            this[m].set(r, {
                name: n.name,
                value: `${n.value}${e}${t}`
            });
        } else this[m].set(r, {
            name: e,
            value: t
        });
        "set-cookie" === r && (this.cookies ??= [], this.cookies.push(t));
    }
    set(e, t) {
        this[h] = null;
        const r = e.toLowerCase();
        "set-cookie" === r && (this.cookies = [
            t
        ]), this[m].set(r, {
            name: e,
            value: t
        });
    }
    delete(e) {
        this[h] = null, "set-cookie" === (e = e.toLowerCase()) && (this.cookies = null), this[m].delete(e);
    }
    get(e) {
        const t = this[m].get(e.toLowerCase());
        return void 0 === t ? null : t.value;
    }
    *[Symbol.iterator]() {
        for (const [e, { value: t }] of this[m])yield [
            e,
            t
        ];
    }
    get entries() {
        const e = {};
        if (this[m].size) for (const { name: t, value: r } of this[m].values())e[t] = r;
        return e;
    }
}
class _ {
    constructor(e = void 0){
        e !== s && (this[n] = new v, this[o] = "none", void 0 !== e && y(this, e = d.converters.HeadersInit(e)));
    }
    append(e, t) {
        return d.brandCheck(this, _), d.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        }), w(this, e = d.converters.ByteString(e), t = d.converters.ByteString(t));
    }
    delete(e) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        }), e = d.converters.ByteString(e), !c(e)) throw d.errors.invalidArgument({
            prefix: "Headers.delete",
            value: e,
            type: "header name"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].contains(e) && this[n].delete(e);
    }
    get(e) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        }), e = d.converters.ByteString(e), !c(e)) throw d.errors.invalidArgument({
            prefix: "Headers.get",
            value: e,
            type: "header name"
        });
        return this[n].get(e);
    }
    has(e) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        }), e = d.converters.ByteString(e), !c(e)) throw d.errors.invalidArgument({
            prefix: "Headers.has",
            value: e,
            type: "header name"
        });
        return this[n].contains(e);
    }
    set(e, t) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        }), e = d.converters.ByteString(e), t = g(t = d.converters.ByteString(t)), !c(e)) throw d.errors.invalidArgument({
            prefix: "Headers.set",
            value: e,
            type: "header name"
        });
        if (!l(t)) throw d.errors.invalidArgument({
            prefix: "Headers.set",
            value: t,
            type: "header value"
        });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].set(e, t);
    }
    getSetCookie() {
        d.brandCheck(this, _);
        const e = this[n].cookies;
        return e ? [
            ...e
        ] : [];
    }
    get [h]() {
        if (this[n][h]) return this[n][h];
        const e = [], t = [
            ...this[n]
        ].sort((e, t)=>e[0] < t[0] ? -1 : 1), r = this[n].cookies;
        for(let n = 0; n < t.length; ++n){
            const [s, o] = t[n];
            if ("set-cookie" === s) for(let t = 0; t < r.length; ++t)e.push([
                s,
                r[t]
            ]);
            else p(null !== o), e.push([
                s,
                o
            ]);
        }
        return this[n][h] = e, e;
    }
    keys() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
            const e = this[h];
            return a(()=>e, "Headers", "key");
        }
        return a(()=>[
                ...this[h].values()
            ], "Headers", "key");
    }
    values() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
            const e = this[h];
            return a(()=>e, "Headers", "value");
        }
        return a(()=>[
                ...this[h].values()
            ], "Headers", "value");
    }
    entries() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
            const e = this[h];
            return a(()=>e, "Headers", "key+value");
        }
        return a(()=>[
                ...this[h].values()
            ], "Headers", "key+value");
    }
    forEach(e, t = globalThis) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [r, n] of this)e.apply(t, [
            n,
            r,
            this
        ]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return d.brandCheck(this, _), this[n];
    }
}
_.prototype[Symbol.iterator] = _.prototype.entries, Object.defineProperties(_.prototype, {
    append: i,
    delete: i,
    get: i,
    has: i,
    set: i,
    getSetCookie: i,
    keys: i,
    values: i,
    entries: i,
    forEach: i,
    [Symbol.iterator]: {
        enumerable: !1
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: !0
    },
    [u.inspect.custom]: {
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
    fill: y,
    Headers: _,
    HeadersList: v
};
