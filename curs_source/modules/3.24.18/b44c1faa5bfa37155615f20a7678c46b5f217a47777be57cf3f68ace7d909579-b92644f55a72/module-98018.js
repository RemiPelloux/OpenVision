"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
const n = require("./module-28758.js"), s = require("./module-12173.js"), o = require("./module-34006.js"), i = require("./module-95183.js"), a = require("./module-79657.js");
var c;
function l(e) {
    const t = Array.isArray(e) ? e : e ? [
        e
    ] : [];
    if (t.every(n.isJSONType)) return t;
    throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
!function(e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
}(c || (exports.DataType = c = {})), exports.getSchemaTypes = function(e) {
    const t = l(e.type);
    if (t.includes("null")) {
        if (!1 === e.nullable) throw new Error("type: null contradicts nullable: false");
    } else {
        if (!t.length && void 0 !== e.nullable) throw new Error('"nullable" cannot be used without "type"');
        !0 === e.nullable && t.push("null");
    }
    return t;
}, exports.getJSONTypes = l, exports.coerceAndCheckDataType = function(e, t) {
    const { gen: r, data: n, opts: o } = e, a = function(e, t) {
        return t ? e.filter((e)=>u.has(e) || "array" === t && "array" === e) : [];
    }(t, o.coerceTypes), l = t.length > 0 && !(0 === a.length && 1 === t.length && (0, s.schemaHasRulesForType)(e, t[0]));
    if (l) {
        const s = p(t, n, o.strictNumbers, c.Wrong);
        r.if(s, ()=>{
            a.length ? function(e, t, r) {
                const { gen: n, data: s, opts: o } = e, a = n.let("dataType", i._`typeof ${s}`), c = n.let("coerced", i._`undefined`);
                "array" === o.coerceTypes && n.if(i._`${a} == 'object' && Array.isArray(${s}) && ${s}.length == 1`, ()=>n.assign(s, i._`${s}[0]`).assign(a, i._`typeof ${s}`).if(p(t, s, o.strictNumbers), ()=>n.assign(c, s)));
                n.if(i._`${c} !== undefined`);
                for (const e of r)(u.has(e) || "array" === e && "array" === o.coerceTypes) && l(e);
                function l(e) {
                    switch(e){
                        case "string":
                            return void n.elseIf(i._`${a} == "number" || ${a} == "boolean"`).assign(c, i._`"" + ${s}`).elseIf(i._`${s} === null`).assign(c, i._`""`);
                        case "number":
                            return void n.elseIf(i._`${a} == "boolean" || ${s} === null
              || (${a} == "string" && ${s} && ${s} == +${s})`).assign(c, i._`+${s}`);
                        case "integer":
                            return void n.elseIf(i._`${a} === "boolean" || ${s} === null
              || (${a} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`).assign(c, i._`+${s}`);
                        case "boolean":
                            return void n.elseIf(i._`${s} === "false" || ${s} === 0 || ${s} === null`).assign(c, !1).elseIf(i._`${s} === "true" || ${s} === 1`).assign(c, !0);
                        case "null":
                            return n.elseIf(i._`${s} === "" || ${s} === 0 || ${s} === false`), void n.assign(c, null);
                        case "array":
                            n.elseIf(i._`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${s} === null`).assign(c, i._`[${s}]`);
                    }
                }
                n.else(), h(e), n.endIf(), n.if(i._`${c} !== undefined`, ()=>{
                    n.assign(s, c), function({ gen: e, parentData: t, parentDataProperty: r }, n) {
                        e.if(i._`${t} !== undefined`, ()=>e.assign(i._`${t}[${r}]`, n));
                    }(e, c);
                });
            }(e, t, a) : h(e);
        });
    }
    return l;
};
const u = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
]);
function d(e, t, r, n = c.Correct) {
    const s = n === c.Correct ? i.operators.EQ : i.operators.NEQ;
    let o;
    switch(e){
        case "null":
            return i._`${t} ${s} null`;
        case "array":
            o = i._`Array.isArray(${t})`;
            break;
        case "object":
            o = i._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
            break;
        case "integer":
            o = a(i._`!(${t} % 1) && !isNaN(${t})`);
            break;
        case "number":
            o = a();
            break;
        default:
            return i._`typeof ${t} ${s} ${e}`;
    }
    return n === c.Correct ? o : (0, i.not)(o);
    function a(e = i.nil) {
        return (0, i.and)(i._`typeof ${t} == "number"`, e, r ? i._`isFinite(${t})` : i.nil);
    }
}
function p(e, t, r, n) {
    if (1 === e.length) return d(e[0], t, r, n);
    let s;
    const o = (0, a.toHash)(e);
    if (o.array && o.object) {
        const e = i._`typeof ${t} != "object"`;
        s = o.null ? e : i._`!${t} || ${e}`, delete o.null, delete o.array, delete o.object;
    } else s = i.nil;
    o.number && delete o.integer;
    for(const e in o)s = (0, i.and)(s, d(e, t, r, n));
    return s;
}
exports.checkDataType = d, exports.checkDataTypes = p;
const m = {
    message: ({ schema: e })=>`must be ${e}`,
    params: ({ schema: e, schemaValue: t })=>"string" == typeof e ? i._`{type: ${e}}` : i._`{type: ${t}}`
};
function h(e) {
    const t = function(e) {
        const { gen: t, data: r, schema: n } = e, s = (0, a.schemaRefOrVal)(e, n, "type");
        return {
            gen: t,
            keyword: "type",
            data: r,
            schema: n.type,
            schemaCode: s,
            schemaValue: s,
            parentSchema: n,
            params: {},
            it: e
        };
    }(e);
    (0, o.reportError)(t, m);
}
exports.reportTypeError = h;
