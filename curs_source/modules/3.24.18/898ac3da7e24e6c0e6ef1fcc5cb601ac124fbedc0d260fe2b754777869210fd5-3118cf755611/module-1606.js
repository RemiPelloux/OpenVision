"use strict";
const { isBlobLike: t, toUSVString: s, makeIterator: o } = require("./module-5728.js"), { kState: r } = require("./module-5899.js"), { File: i, FileLike: A, isFileLike: l } = require("./module-3322.js"), { webidl: c } = require("./module-8005.js"), { Blob: m, File: d } = require("./module-181.js"), g = d ?? i;
class u {
    constructor(e){
        if (void 0 !== e) throw c.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[r] = [];
    }
    append(e, n, a = void 0) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !t(n)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = E(e = c.converters.USVString(e), n = t(n) ? c.converters.Blob(n, {
            strict: !1
        }) : c.converters.USVString(n), a = 3 === arguments.length ? c.converters.USVString(a) : void 0);
        this[r].push(s);
    }
    delete(e) {
        c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = c.converters.USVString(e), this[r] = this[r].filter((n)=>n.name !== e);
    }
    get(e) {
        c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = c.converters.USVString(e);
        const n = this[r].findIndex((n)=>n.name === e);
        return -1 === n ? null : this[r][n].value;
    }
    getAll(e) {
        return c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = c.converters.USVString(e), this[r].filter((n)=>n.name === e).map((e)=>e.value);
    }
    has(e) {
        return c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = c.converters.USVString(e), -1 !== this[r].findIndex((n)=>n.name === e);
    }
    set(e, n, a = void 0) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !t(n)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = c.converters.USVString(e), n = t(n) ? c.converters.Blob(n, {
            strict: !1
        }) : c.converters.USVString(n), a = 3 === arguments.length ? s(a) : void 0;
        const o = E(e, n, a), i = this[r].findIndex((n)=>n.name === e);
        -1 !== i ? this[r] = [
            ...this[r].slice(0, i),
            o,
            ...this[r].slice(i + 1).filter((n)=>n.name !== e)
        ] : this[r].push(o);
    }
    entries() {
        return c.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return c.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return c.brandCheck(this, u), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, n = globalThis) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [a, t] of this)e.apply(n, [
            t,
            a,
            this
        ]);
    }
}
function E(e, n, a) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof n) n = Buffer.from(n).toString("utf8");
    else if (l(n) || (n = n instanceof m ? new g([
        n
    ], "blob", {
        type: n.type
    }) : new A(n, "blob", {
        type: n.type
    })), void 0 !== a) {
        const e = {
            type: n.type,
            lastModified: n.lastModified
        };
        n = d && n instanceof d || n instanceof i ? new g([
            n
        ], a, e) : new A(n, a, e);
    }
    return {
        name: e,
        value: n
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
