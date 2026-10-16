"use strict";
var n, s;
require.d(exports, {
    CR: ()=>i,
    ZS: ()=>n,
    Zp: ()=>o
}), function(e) {
    e.assertEqual = (e)=>{}, e.assertIs = function(e) {}, e.assertNever = function(e) {
        throw new Error;
    }, e.arrayToEnum = (e)=>{
        const t = {};
        for (const r of e)t[r] = r;
        return t;
    }, e.getValidEnumValues = (t)=>{
        const r = e.objectKeys(t).filter((e)=>"number" != typeof t[t[e]]), n = {};
        for (const e of r)n[e] = t[e];
        return e.objectValues(n);
    }, e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
            return t[e];
        }), e.objectKeys = "function" == typeof Object.keys ? (e)=>Object.keys(e) : (e)=>{
        const t = [];
        for(const r in e)Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        return t;
    }, e.find = (e, t)=>{
        for (const r of e)if (t(r)) return r;
    }, e.isInteger = "function" == typeof Number.isInteger ? (e)=>Number.isInteger(e) : (e)=>"number" == typeof e && Number.isFinite(e) && Math.floor(e) === e, e.joinValues = function(e, t = " | ") {
        return e.map((e)=>"string" == typeof e ? `'${e}'` : e).join(t);
    }, e.jsonStringifyReplacer = (e, t)=>"bigint" == typeof t ? t.toString() : t;
}(n || (n = {})), function(e) {
    e.mergeShapes = (e, t)=>({
            ...e,
            ...t
        });
}(s || (s = {}));
const o = n.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]), i = (e)=>{
    switch(typeof e){
        case "undefined":
            return o.undefined;
        case "string":
            return o.string;
        case "number":
            return Number.isNaN(e) ? o.nan : o.number;
        case "boolean":
            return o.boolean;
        case "function":
            return o.function;
        case "bigint":
            return o.bigint;
        case "symbol":
            return o.symbol;
        case "object":
            return Array.isArray(e) ? o.array : null === e ? o.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? o.promise : "undefined" != typeof Map && e instanceof Map ? o.map : "undefined" != typeof Set && e instanceof Set ? o.set : "undefined" != typeof Date && e instanceof Date ? o.date : o.object;
        default:
            return o.unknown;
    }
};
