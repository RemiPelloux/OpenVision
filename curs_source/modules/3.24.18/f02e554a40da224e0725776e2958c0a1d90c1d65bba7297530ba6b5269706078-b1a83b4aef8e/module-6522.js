"use strict";
const { isBlobLike: n, toUSVString: s, makeIterator: i } = require("./module-8116.js"), { kState: o } = require("./module-7271.js"), { File: a, FileLike: u, isFileLike: c } = require("./module-8142.js"), { webidl: l } = require("./module-8193.js"), { Blob: m, File: d } = require("./module-181.js"), f = d ?? a;
class p {
    constructor(t){
        if (void 0 !== t) throw l.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[o] = [];
    }
    append(t, e, r = void 0) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        }), 3 === arguments.length && !n(e)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s = h(t = l.converters.USVString(t), e = n(e) ? l.converters.Blob(e, {
            strict: !1
        }) : l.converters.USVString(e), r = 3 === arguments.length ? l.converters.USVString(r) : void 0);
        this[o].push(s);
    }
    delete(t) {
        l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        }), t = l.converters.USVString(t), this[o] = this[o].filter((e)=>e.name !== t);
    }
    get(t) {
        l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        }), t = l.converters.USVString(t);
        const e = this[o].findIndex((e)=>e.name === t);
        return -1 === e ? null : this[o][e].value;
    }
    getAll(t) {
        return l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        }), t = l.converters.USVString(t), this[o].filter((e)=>e.name === t).map((t)=>t.value);
    }
    has(t) {
        return l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        }), t = l.converters.USVString(t), -1 !== this[o].findIndex((e)=>e.name === t);
    }
    set(t, e, r = void 0) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        }), 3 === arguments.length && !n(e)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        t = l.converters.USVString(t), e = n(e) ? l.converters.Blob(e, {
            strict: !1
        }) : l.converters.USVString(e), r = 3 === arguments.length ? s(r) : void 0;
        const i = h(t, e, r), a = this[o].findIndex((e)=>e.name === t);
        -1 !== a ? this[o] = [
            ...this[o].slice(0, a),
            i,
            ...this[o].slice(a + 1).filter((e)=>e.name !== t)
        ] : this[o].push(i);
    }
    entries() {
        return l.brandCheck(this, p), i(()=>this[o].map((t)=>[
                    t.name,
                    t.value
                ]), "FormData", "key+value");
    }
    keys() {
        return l.brandCheck(this, p), i(()=>this[o].map((t)=>[
                    t.name,
                    t.value
                ]), "FormData", "key");
    }
    values() {
        return l.brandCheck(this, p), i(()=>this[o].map((t)=>[
                    t.name,
                    t.value
                ]), "FormData", "value");
    }
    forEach(t, e = globalThis) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        }), "function" != typeof t) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [r, n] of this)t.apply(e, [
            n,
            r,
            this
        ]);
    }
}
function h(t, e, r) {
    if (t = Buffer.from(t).toString("utf8"), "string" == typeof e) e = Buffer.from(e).toString("utf8");
    else if (c(e) || (e = e instanceof m ? new f([
        e
    ], "blob", {
        type: e.type
    }) : new u(e, "blob", {
        type: e.type
    })), void 0 !== r) {
        const t = {
            type: e.type,
            lastModified: e.lastModified
        };
        e = d && e instanceof d || e instanceof a ? new f([
            e
        ], r, t) : new u(e, r, t);
    }
    return {
        name: t,
        value: e
    };
}
p.prototype[Symbol.iterator] = p.prototype.entries, Object.defineProperties(p.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: p
};
