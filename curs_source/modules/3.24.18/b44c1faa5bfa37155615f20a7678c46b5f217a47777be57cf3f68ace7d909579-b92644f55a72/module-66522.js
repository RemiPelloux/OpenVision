"use strict";
const { isBlobLike: n, toUSVString: s, makeIterator: o } = require("./module-98116.js"), { kState: i } = require("./module-77271.js"), { File: a, FileLike: c, isFileLike: l } = require("./module-18142.js"), { webidl: u } = require("./module-18193.js"), { Blob: d, File: p } = require("./module-20181.js"), m = p ?? a;
class h {
    constructor(e){
        if (void 0 !== e) throw u.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[i] = [];
    }
    append(e, t, r = void 0) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !n(t)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = f(e = u.converters.USVString(e), t = n(t) ? u.converters.Blob(t, {
            strict: !1
        }) : u.converters.USVString(t), r = 3 === arguments.length ? u.converters.USVString(r) : void 0);
        this[i].push(s);
    }
    delete(e) {
        u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = u.converters.USVString(e), this[i] = this[i].filter((t)=>t.name !== e);
    }
    get(e) {
        u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = u.converters.USVString(e);
        const t = this[i].findIndex((t)=>t.name === e);
        return -1 === t ? null : this[i][t].value;
    }
    getAll(e) {
        return u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = u.converters.USVString(e), this[i].filter((t)=>t.name === e).map((e)=>e.value);
    }
    has(e) {
        return u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = u.converters.USVString(e), -1 !== this[i].findIndex((t)=>t.name === e);
    }
    set(e, t, r = void 0) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !n(t)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = u.converters.USVString(e), t = n(t) ? u.converters.Blob(t, {
            strict: !1
        }) : u.converters.USVString(t), r = 3 === arguments.length ? s(r) : void 0;
        const o = f(e, t, r), a = this[i].findIndex((t)=>t.name === e);
        -1 !== a ? this[i] = [
            ...this[i].slice(0, a),
            o,
            ...this[i].slice(a + 1).filter((t)=>t.name !== e)
        ] : this[i].push(o);
    }
    entries() {
        return u.brandCheck(this, h), o(()=>this[i].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return u.brandCheck(this, h), o(()=>this[i].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return u.brandCheck(this, h), o(()=>this[i].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, t = globalThis) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [r, n] of this)e.apply(t, [
            n,
            r,
            this
        ]);
    }
}
function f(e, t, r) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof t) t = Buffer.from(t).toString("utf8");
    else if (l(t) || (t = t instanceof d ? new m([
        t
    ], "blob", {
        type: t.type
    }) : new c(t, "blob", {
        type: t.type
    })), void 0 !== r) {
        const e = {
            type: t.type,
            lastModified: t.lastModified
        };
        t = p && t instanceof p || t instanceof a ? new m([
            t
        ], r, e) : new c(t, r, e);
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
