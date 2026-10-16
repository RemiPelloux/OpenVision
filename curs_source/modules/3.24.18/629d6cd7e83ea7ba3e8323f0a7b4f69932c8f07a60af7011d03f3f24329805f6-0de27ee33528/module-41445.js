"use strict";
const { isBlobLike: r, iteratorMixin: s } = require("./module-48215.js"), { kState: o } = require("./module-15978.js"), { kEnumerableProperty: n } = require("./module-55201.js"), { FileLike: i, isFileLike: a } = require("./module-90165.js"), { webidl: Q } = require("./module-43290.js"), { File: g } = require(4573), E = require(57975), B = globalThis.File ?? g;
class c {
    constructor(A){
        if (Q.util.markAsUncloneable(this), void 0 !== A) throw Q.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: [
                "undefined"
            ]
        });
        this[o] = [];
    }
    append(A, e, t = void 0) {
        Q.brandCheck(this, c);
        const s = "FormData.append";
        if (Q.argumentLengthCheck(arguments, 2, s), 3 === arguments.length && !r(e)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const n = I(A = Q.converters.USVString(A, s, "name"), e = r(e) ? Q.converters.Blob(e, s, "value", {
            strict: !1
        }) : Q.converters.USVString(e, s, "value"), t = 3 === arguments.length ? Q.converters.USVString(t, s, "filename") : void 0);
        this[o].push(n);
    }
    delete(A) {
        Q.brandCheck(this, c);
        const e = "FormData.delete";
        Q.argumentLengthCheck(arguments, 1, e), A = Q.converters.USVString(A, e, "name"), this[o] = this[o].filter((e)=>e.name !== A);
    }
    get(A) {
        Q.brandCheck(this, c);
        const e = "FormData.get";
        Q.argumentLengthCheck(arguments, 1, e), A = Q.converters.USVString(A, e, "name");
        const t = this[o].findIndex((e)=>e.name === A);
        return -1 === t ? null : this[o][t].value;
    }
    getAll(A) {
        Q.brandCheck(this, c);
        const e = "FormData.getAll";
        return Q.argumentLengthCheck(arguments, 1, e), A = Q.converters.USVString(A, e, "name"), this[o].filter((e)=>e.name === A).map((A)=>A.value);
    }
    has(A) {
        Q.brandCheck(this, c);
        const e = "FormData.has";
        return Q.argumentLengthCheck(arguments, 1, e), A = Q.converters.USVString(A, e, "name"), -1 !== this[o].findIndex((e)=>e.name === A);
    }
    set(A, e, t = void 0) {
        Q.brandCheck(this, c);
        const s = "FormData.set";
        if (Q.argumentLengthCheck(arguments, 2, s), 3 === arguments.length && !r(e)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        A = Q.converters.USVString(A, s, "name"), e = r(e) ? Q.converters.Blob(e, s, "name", {
            strict: !1
        }) : Q.converters.USVString(e, s, "name"), t = 3 === arguments.length ? Q.converters.USVString(t, s, "name") : void 0;
        const n = I(A, e, t), i = this[o].findIndex((e)=>e.name === A);
        -1 !== i ? this[o] = [
            ...this[o].slice(0, i),
            n,
            ...this[o].slice(i + 1).filter((e)=>e.name !== A)
        ] : this[o].push(n);
    }
    [E.inspect.custom](A, e) {
        const t = this[o].reduce((A, e)=>(A[e.name] ? Array.isArray(A[e.name]) ? A[e.name].push(e.value) : A[e.name] = [
                A[e.name],
                e.value
            ] : A[e.name] = e.value, A), {
            __proto__: null
        });
        e.depth ??= A, e.colors ??= !0;
        const r = E.formatWithOptions(e, t);
        return `FormData ${r.slice(r.indexOf("]") + 2)}`;
    }
}
function I(A, e, t) {
    if ("string" == typeof e) ;
    else if (a(e) || (e = e instanceof Blob ? new B([
        e
    ], "blob", {
        type: e.type
    }) : new i(e, "blob", {
        type: e.type
    })), void 0 !== t) {
        const A = {
            type: e.type,
            lastModified: e.lastModified
        };
        e = e instanceof g ? new B([
            e
        ], t, A) : new i(e, t, A);
    }
    return {
        name: A,
        value: e
    };
}
s("FormData", c, o, "name", "value"), Object.defineProperties(c.prototype, {
    append: n,
    delete: n,
    get: n,
    getAll: n,
    has: n,
    set: n,
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: !0
    }
}), module.exports = {
    FormData: c,
    makeEntry: I
};
