"use strict";
const { isBlobLike: r, toUSVString: s, makeIterator: o } = require("./module-75728.js"), { kState: n } = require("./module-35899.js"), { File: i, FileLike: E, isFileLike: Q } = require("./module-13322.js"), { webidl: g } = require("./module-48005.js"), { Blob: C, File: B } = require(20181), a = B ?? i;
class I {
    constructor(A){
        if (void 0 !== A) throw g.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[n] = [];
    }
    append(A, e, t = void 0) {
        if (g.brandCheck(this, I), g.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !r(e)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = c(A = g.converters.USVString(A), e = r(e) ? g.converters.Blob(e, {
            strict: !1
        }) : g.converters.USVString(e), t = 3 === arguments.length ? g.converters.USVString(t) : void 0);
        this[n].push(s);
    }
    delete(A) {
        g.brandCheck(this, I), g.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), A = g.converters.USVString(A), this[n] = this[n].filter((e)=>e.name !== A);
    }
    get(A) {
        g.brandCheck(this, I), g.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), A = g.converters.USVString(A);
        const e = this[n].findIndex((e)=>e.name === A);
        return -1 === e ? null : this[n][e].value;
    }
    getAll(A) {
        return g.brandCheck(this, I), g.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), A = g.converters.USVString(A), this[n].filter((e)=>e.name === A).map((A)=>A.value);
    }
    has(A) {
        return g.brandCheck(this, I), g.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), A = g.converters.USVString(A), -1 !== this[n].findIndex((e)=>e.name === A);
    }
    set(A, e, t = void 0) {
        if (g.brandCheck(this, I), g.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !r(e)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        A = g.converters.USVString(A), e = r(e) ? g.converters.Blob(e, {
            strict: !1
        }) : g.converters.USVString(e), t = 3 === arguments.length ? s(t) : void 0;
        const o = c(A, e, t), i = this[n].findIndex((e)=>e.name === A);
        -1 !== i ? this[n] = [
            ...this[n].slice(0, i),
            o,
            ...this[n].slice(i + 1).filter((e)=>e.name !== A)
        ] : this[n].push(o);
    }
    entries() {
        return g.brandCheck(this, I), o(()=>this[n].map((A)=>[
                    A.name,
                    A.value
                ]), "FormData", "key+value");
    }
    keys() {
        return g.brandCheck(this, I), o(()=>this[n].map((A)=>[
                    A.name,
                    A.value
                ]), "FormData", "key");
    }
    values() {
        return g.brandCheck(this, I), o(()=>this[n].map((A)=>[
                    A.name,
                    A.value
                ]), "FormData", "value");
    }
    forEach(A, e = globalThis) {
        if (g.brandCheck(this, I), g.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof A) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [t, r] of this)A.apply(e, [
            r,
            t,
            this
        ]);
    }
}
function c(A, e, t) {
    if (A = Buffer.from(A).toString("utf8"), "string" == typeof e) e = Buffer.from(e).toString("utf8");
    else if (Q(e) || (e = e instanceof C ? new a([
        e
    ], "blob", {
        type: e.type
    }) : new E(e, "blob", {
        type: e.type
    })), void 0 !== t) {
        const A = {
            type: e.type,
            lastModified: e.lastModified
        };
        e = B && e instanceof B || e instanceof i ? new a([
            e
        ], t, A) : new E(e, t, A);
    }
    return {
        name: A,
        value: e
    };
}
I.prototype[Symbol.iterator] = I.prototype.entries, Object.defineProperties(I.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: I
};
