"use strict";
const { isBlobLike: n, toUSVString: r, makeIterator: o } = require("./module-5728.js"), { kState: s } = require("./module-5899.js"), { File: i, FileLike: a, isFileLike: c } = require("./module-3322.js"), { webidl: l } = require("./module-8005.js"), { Blob: u, File: g } = require("./module-181.js"), E = g ?? i;
class h {
    constructor(e){
        if (void 0 !== e) throw l.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[s] = [];
    }
    append(e, t, A = void 0) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !n(t)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const r = d(e = l.converters.USVString(e), t = n(t) ? l.converters.Blob(t, {
            strict: !1
        }) : l.converters.USVString(t), A = 3 === arguments.length ? l.converters.USVString(A) : void 0);
        this[s].push(r);
    }
    delete(e) {
        l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = l.converters.USVString(e), this[s] = this[s].filter((t)=>t.name !== e);
    }
    get(e) {
        l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = l.converters.USVString(e);
        const t = this[s].findIndex((t)=>t.name === e);
        return -1 === t ? null : this[s][t].value;
    }
    getAll(e) {
        return l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = l.converters.USVString(e), this[s].filter((t)=>t.name === e).map((e)=>e.value);
    }
    has(e) {
        return l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = l.converters.USVString(e), -1 !== this[s].findIndex((t)=>t.name === e);
    }
    set(e, t, A = void 0) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !n(t)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = l.converters.USVString(e), t = n(t) ? l.converters.Blob(t, {
            strict: !1
        }) : l.converters.USVString(t), A = 3 === arguments.length ? r(A) : void 0;
        const o = d(e, t, A), i = this[s].findIndex((t)=>t.name === e);
        -1 !== i ? this[s] = [
            ...this[s].slice(0, i),
            o,
            ...this[s].slice(i + 1).filter((t)=>t.name !== e)
        ] : this[s].push(o);
    }
    entries() {
        return l.brandCheck(this, h), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return l.brandCheck(this, h), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return l.brandCheck(this, h), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, t = globalThis) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [A, n] of this)e.apply(t, [
            n,
            A,
            this
        ]);
    }
}
function d(e, t, A) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof t) t = Buffer.from(t).toString("utf8");
    else if (c(t) || (t = t instanceof u ? new E([
        t
    ], "blob", {
        type: t.type
    }) : new a(t, "blob", {
        type: t.type
    })), void 0 !== A) {
        const e = {
            type: t.type,
            lastModified: t.lastModified
        };
        t = g && t instanceof g || t instanceof i ? new E([
            t
        ], A, e) : new a(t, A, e);
    }
    return {
        name: e,
        value: t
    };
}
h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: h
};
