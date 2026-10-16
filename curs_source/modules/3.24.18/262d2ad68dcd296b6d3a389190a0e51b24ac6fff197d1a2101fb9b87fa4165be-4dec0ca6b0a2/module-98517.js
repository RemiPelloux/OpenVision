"use strict";
var n, o;
require.d(exports, {
    CR: ()=>i,
    ZS: ()=>n,
    Zp: ()=>s
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
}(o || (o = {}));
const s = n.arrayToEnum([
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
            return s.undefined;
        case "string":
            return s.string;
        case "number":
            return Number.isNaN(e) ? s.nan : s.number;
        case "boolean":
            return s.boolean;
        case "function":
            return s.function;
        case "bigint":
            return s.bigint;
        case "symbol":
            return s.symbol;
        case "object":
            return Array.isArray(e) ? s.array : null === e ? s.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? s.promise : "undefined" != typeof Map && e instanceof Map ? s.map : "undefined" != typeof Set && e instanceof Set ? s.set : "undefined" != typeof Date && e instanceof Date ? s.date : s.object;
        default:
            return s.unknown;
    }
};
