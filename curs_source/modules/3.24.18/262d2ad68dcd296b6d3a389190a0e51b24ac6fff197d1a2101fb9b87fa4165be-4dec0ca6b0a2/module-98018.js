"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
const n = require("./module-28758.js"), o = require("./module-12173.js"), s = require("./module-34006.js"), i = require("./module-95183.js"), a = require("./module-79657.js");
var l;
function c(e) {
    const t = Array.isArray(e) ? e : e ? [
        e
    ] : [];
    if (t.every(n.isJSONType)) return t;
    throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
!function(e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
}(l || (exports.DataType = l = {})), exports.getSchemaTypes = function(e) {
    const t = c(e.type);
    if (t.includes("null")) {
        if (!1 === e.nullable) throw new Error("type: null contradicts nullable: false");
    } else {
        if (!t.length && void 0 !== e.nullable) throw new Error('"nullable" cannot be used without "type"');
        !0 === e.nullable && t.push("null");
    }
    return t;
}, exports.getJSONTypes = c, exports.coerceAndCheckDataType = function(e, t) {
    const { gen: r, data: n, opts: s } = e, a = function(e, t) {
        return t ? e.filter((e)=>u.has(e) || "array" === t && "array" === e) : [];
    }(t, s.coerceTypes), c = t.length > 0 && !(0 === a.length && 1 === t.length && (0, o.schemaHasRulesForType)(e, t[0]));
    if (c) {
        const o = p(t, n, s.strictNumbers, l.Wrong);
        r.if(o, ()=>{
            a.length ? function(e, t, r) {
                const { gen: n, data: o, opts: s } = e, a = n.let("dataType", i._`typeof ${o}`), l = n.let("coerced", i._`undefined`);
                "array" === s.coerceTypes && n.if(i._`${a} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, ()=>n.assign(o, i._`${o}[0]`).assign(a, i._`typeof ${o}`).if(p(t, o, s.strictNumbers), ()=>n.assign(l, o)));
                n.if(i._`${l} !== undefined`);
                for (const e of r)(u.has(e) || "array" === e && "array" === s.coerceTypes) && c(e);
                function c(e) {
                    switch(e){
                        case "string":
                            return void n.elseIf(i._`${a} == "number" || ${a} == "boolean"`).assign(l, i._`"" + ${o}`).elseIf(i._`${o} === null`).assign(l, i._`""`);
                        case "number":
                            return void n.elseIf(i._`${a} == "boolean" || ${o} === null
              || (${a} == "string" && ${o} && ${o} == +${o})`).assign(l, i._`+${o}`);
                        case "integer":
                            return void n.elseIf(i._`${a} === "boolean" || ${o} === null
              || (${a} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`).assign(l, i._`+${o}`);
                        case "boolean":
                            return void n.elseIf(i._`${o} === "false" || ${o} === 0 || ${o} === null`).assign(l, !1).elseIf(i._`${o} === "true" || ${o} === 1`).assign(l, !0);
                        case "null":
                            return n.elseIf(i._`${o} === "" || ${o} === 0 || ${o} === false`), void n.assign(l, null);
                        case "array":
                            n.elseIf(i._`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${o} === null`).assign(l, i._`[${o}]`);
                    }
                }
                n.else(), m(e), n.endIf(), n.if(i._`${l} !== undefined`, ()=>{
                    n.assign(o, l), function({ gen: e, parentData: t, parentDataProperty: r }, n) {
                        e.if(i._`${t} !== undefined`, ()=>e.assign(i._`${t}[${r}]`, n));
                    }(e, l);
                });
            }(e, t, a) : m(e);
        });
    }
    return c;
};
const u = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
]);
function d(e, t, r, n = l.Correct) {
    const o = n === l.Correct ? i.operators.EQ : i.operators.NEQ;
    let s;
    switch(e){
        case "null":
            return i._`${t} ${o} null`;
        case "array":
            s = i._`Array.isArray(${t})`;
            break;
        case "object":
            s = i._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
            break;
        case "integer":
            s = a(i._`!(${t} % 1) && !isNaN(${t})`);
            break;
        case "number":
            s = a();
            break;
        default:
            return i._`typeof ${t} ${o} ${e}`;
    }
    return n === l.Correct ? s : (0, i.not)(s);
    function a(e = i.nil) {
        return (0, i.and)(i._`typeof ${t} == "number"`, e, r ? i._`isFinite(${t})` : i.nil);
    }
}
function p(e, t, r, n) {
    if (1 === e.length) return d(e[0], t, r, n);
    let o;
    const s = (0, a.toHash)(e);
    if (s.array && s.object) {
        const e = i._`typeof ${t} != "object"`;
        o = s.null ? e : i._`!${t} || ${e}`, delete s.null, delete s.array, delete s.object;
    } else o = i.nil;
    s.number && delete s.integer;
    for(const e in s)o = (0, i.and)(o, d(e, t, r, n));
    return o;
}
exports.checkDataType = d, exports.checkDataTypes = p;
const h = {
    message: ({ schema: e })=>`must be ${e}`,
    params: ({ schema: e, schemaValue: t })=>"string" == typeof e ? i._`{type: ${e}}` : i._`{type: ${t}}`
};
function m(e) {
    const t = function(e) {
        const { gen: t, data: r, schema: n } = e, o = (0, a.schemaRefOrVal)(e, n, "type");
        return {
            gen: t,
            keyword: "type",
            data: r,
            schema: n.type,
            schemaCode: o,
            schemaValue: o,
            parentSchema: n,
            params: {},
            it: e
        };
    }(e);
    (0, s.reportError)(t, h);
}
exports.reportTypeError = m;
