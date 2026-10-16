"use strict";
require.d(exports, {
    G: ()=>s,
    eq: ()=>o
});
var n = require("./module-98517.js");
const o = n.ZS.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
class s extends Error {
    get errors() {
        return this.issues;
    }
    constructor(e){
        super(), this.issues = [], this.addIssue = (e)=>{
            this.issues = [
                ...this.issues,
                e
            ];
        }, this.addIssues = (e = [])=>{
            this.issues = [
                ...this.issues,
                ...e
            ];
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
    }
    format(e) {
        const t = e || function(e) {
            return e.message;
        }, r = {
            _errors: []
        }, n = (e)=>{
            for (const o of e.issues)if ("invalid_union" === o.code) o.unionErrors.map(n);
            else if ("invalid_return_type" === o.code) n(o.returnTypeError);
            else if ("invalid_arguments" === o.code) n(o.argumentsError);
            else if (0 === o.path.length) r._errors.push(t(o));
            else {
                let e = r, n = 0;
                for(; n < o.path.length;){
                    const r = o.path[n];
                    n === o.path.length - 1 ? (e[r] = e[r] || {
                        _errors: []
                    }, e[r]._errors.push(t(o))) : e[r] = e[r] || {
                        _errors: []
                    }, e = e[r], n++;
                }
            }
        };
        return n(this), r;
    }
    static assert(e) {
        if (!(e instanceof s)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, n.ZS.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return 0 === this.issues.length;
    }
    flatten(e = (e)=>e.message) {
        const t = {}, r = [];
        for (const n of this.issues)if (n.path.length > 0) {
            const r = n.path[0];
            t[r] = t[r] || [], t[r].push(e(n));
        } else r.push(e(n));
        return {
            formErrors: r,
            fieldErrors: t
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
s.create = (e)=>new s(e);
