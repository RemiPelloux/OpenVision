"use strict";
const { isBlobLike: n, toUSVString: r, makeIterator: o } = require("./module-5728.js"), { kState: s } = require("./module-5899.js"), { File: a, FileLike: i, isFileLike: c } = require("./module-3322.js"), { webidl: l } = require("./module-8005.js"), { Blob: g, File: E } = require("./module-181.js"), u = E ?? a;
class d {
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
    append(e, A, t = void 0) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !n(A)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const r = I(e = l.converters.USVString(e), A = n(A) ? l.converters.Blob(A, {
            strict: !1
        }) : l.converters.USVString(A), t = 3 === arguments.length ? l.converters.USVString(t) : void 0);
        this[s].push(r);
    }
    delete(e) {
        l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = l.converters.USVString(e), this[s] = this[s].filter((A)=>A.name !== e);
    }
    get(e) {
        l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = l.converters.USVString(e);
        const A = this[s].findIndex((A)=>A.name === e);
        return -1 === A ? null : this[s][A].value;
    }
    getAll(e) {
        return l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = l.converters.USVString(e), this[s].filter((A)=>A.name === e).map((e)=>e.value);
    }
    has(e) {
        return l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = l.converters.USVString(e), -1 !== this[s].findIndex((A)=>A.name === e);
    }
    set(e, A, t = void 0) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !n(A)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = l.converters.USVString(e), A = n(A) ? l.converters.Blob(A, {
            strict: !1
        }) : l.converters.USVString(A), t = 3 === arguments.length ? r(t) : void 0;
        const o = I(e, A, t), a = this[s].findIndex((A)=>A.name === e);
        -1 !== a ? this[s] = [
            ...this[s].slice(0, a),
            o,
            ...this[s].slice(a + 1).filter((A)=>A.name !== e)
        ] : this[s].push(o);
    }
    entries() {
        return l.brandCheck(this, d), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return l.brandCheck(this, d), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return l.brandCheck(this, d), o(()=>this[s].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, A = globalThis) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [t, n] of this)e.apply(A, [
            n,
            t,
            this
        ]);
    }
}
function I(e, A, t) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof A) A = Buffer.from(A).toString("utf8");
    else if (c(A) || (A = A instanceof g ? new u([
        A
    ], "blob", {
        type: A.type
    }) : new i(A, "blob", {
        type: A.type
    })), void 0 !== t) {
        const e = {
            type: A.type,
            lastModified: A.lastModified
        };
        A = E && A instanceof E || A instanceof a ? new u([
            A
        ], t, e) : new i(A, t, e);
    }
    return {
        name: e,
        value: A
    };
}
d.prototype[Symbol.iterator] = d.prototype.entries, Object.defineProperties(d.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: d
};
