"use strict";
const { isBlobLike: a, toUSVString: s, makeIterator: o } = require("./module-5728.js"), { kState: r } = require("./module-5899.js"), { File: i, FileLike: A, isFileLike: c } = require("./module-3322.js"), { webidl: l } = require("./module-8005.js"), { Blob: d, File: m } = require("./module-181.js"), u = m ?? i;
class g {
    constructor(e){
        if (void 0 !== e) throw l.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[r] = [];
    }
    append(e, n, t = void 0) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !a(n)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = p(e = l.converters.USVString(e), n = a(n) ? l.converters.Blob(n, {
            strict: !1
        }) : l.converters.USVString(n), t = 3 === arguments.length ? l.converters.USVString(t) : void 0);
        this[r].push(s);
    }
    delete(e) {
        l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), e = l.converters.USVString(e), this[r] = this[r].filter((n)=>n.name !== e);
    }
    get(e) {
        l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), e = l.converters.USVString(e);
        const n = this[r].findIndex((n)=>n.name === e);
        return -1 === n ? null : this[r][n].value;
    }
    getAll(e) {
        return l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), e = l.converters.USVString(e), this[r].filter((n)=>n.name === e).map((e)=>e.value);
    }
    has(e) {
        return l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), e = l.converters.USVString(e), -1 !== this[r].findIndex((n)=>n.name === e);
    }
    set(e, n, t = void 0) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !a(n)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e = l.converters.USVString(e), n = a(n) ? l.converters.Blob(n, {
            strict: !1
        }) : l.converters.USVString(n), t = 3 === arguments.length ? s(t) : void 0;
        const o = p(e, n, t), i = this[r].findIndex((n)=>n.name === e);
        -1 !== i ? this[r] = [
            ...this[r].slice(0, i),
            o,
            ...this[r].slice(i + 1).filter((n)=>n.name !== e)
        ] : this[r].push(o);
    }
    entries() {
        return l.brandCheck(this, g), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key+value");
    }
    keys() {
        return l.brandCheck(this, g), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "key");
    }
    values() {
        return l.brandCheck(this, g), o(()=>this[r].map((e)=>[
                    e.name,
                    e.value
                ]), "FormData", "value");
    }
    forEach(e, n = globalThis) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [t, a] of this)e.apply(n, [
            a,
            t,
            this
        ]);
    }
}
function p(e, n, t) {
    if (e = Buffer.from(e).toString("utf8"), "string" == typeof n) n = Buffer.from(n).toString("utf8");
    else if (c(n) || (n = n instanceof d ? new u([
        n
    ], "blob", {
        type: n.type
    }) : new A(n, "blob", {
        type: n.type
    })), void 0 !== t) {
        const e = {
            type: n.type,
            lastModified: n.lastModified
        };
        n = m && n instanceof m || n instanceof i ? new u([
            n
        ], t, e) : new A(n, t, e);
    }
    return {
        name: e,
        value: n
    };
}
g.prototype[Symbol.iterator] = g.prototype.entries, Object.defineProperties(g.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: g
};
