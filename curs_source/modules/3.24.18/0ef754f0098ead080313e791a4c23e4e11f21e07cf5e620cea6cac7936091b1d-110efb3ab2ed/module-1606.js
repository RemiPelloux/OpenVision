"use strict";
const { isBlobLike: t, toUSVString: s, makeIterator: o } = require("./module-5728.js"), { kState: r } = require("./module-5899.js"), { File: i, FileLike: l, isFileLike: d } = require("./module-3322.js"), { webidl: m } = require("./module-8005.js"), { Blob: c, File: p } = require("./module-181.js"), A = p ?? i;
class u {
    constructor(e){
        if (void 0 !== e) throw m.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[r] = [];
    }
    append(e, a, n = void 0) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !t(a)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = g(e = m.converters.USVString(e), a = t(a) ? m.converters.Blob(a, {
            strict: !1
        }) : m.converters.USVString(a), n = 3 === arguments.length ? m.converters.USVString(n) : void 0);
        this[r].push(s);
    }
    delete(e) {
        m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = m.converters.USVString(e), this[r] = this[r].filter((a)=>a.name !== e);
    }
    get(e) {
        m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = m.converters.USVString(e);
        const a = this[r].findIndex((a)=>a.name === e);
        return -1 === a ? null : this[r][a].value;
    }
    getAll(e) {
        return m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = m.converters.USVString(e), this[r].filter((a)=>a.name === e).map((e)=>e.value);
    }
    has(e) {
        return m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = m.converters.USVString(e), -1 !== this[r].findIndex((a)=>a.name === e);
    }
    set(e, a, n = void 0) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !t(a)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = m.converters.USVString(e), a = t(a) ? m.converters.Blob(a, {
            strict: !1
        }) : m.converters.USVString(a), n = 3 === arguments.length ? s(n) : void 0;
        const o = g(e, a, n), i = this[r].findIndex((a)=>a.name === e);
        -1 !== i ? this[r] = [
            ...this[r].slice(0, i),
            o,
            ...this[r].slice(i + 1).filter((a)=>a.name !== e)
        ] : this[r].push(o);
    }
    entries() {
        return m.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return m.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return m.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, a = globalThis) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [n, t] of this)e.apply(a, [
            t,
            n,
            this
        ]);
    }
}
function g(e, a, n) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof a) a = Buffer.from(a).toString("utf8");
    else if (d(a) || (a = a instanceof c ? new A([
        a
    ], "blob", {
        type: a.type
    }) : new l(a, "blob", {
        type: a.type
    })), void 0 !== n) {
        const e = {
            type: a.type,
            lastModified: a.lastModified
        };
        a = p && a instanceof p || a instanceof i ? new A([
            a
        ], n, e) : new l(a, n, e);
    }
    return {
        name: e,
        value: a
    };
}
u.prototype[Symbol.iterator] = u.prototype.entries, Object.defineProperties(u.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: u
};
