"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-44489.js"), i = require("./module-79657.js");
function a(e) {
    return e.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: n._`Object.prototype.hasOwnProperty`
    });
}
function c(e, t, r) {
    return n._`${a(e)}.call(${t}, ${r})`;
}
function l(e, t, r, s) {
    const o = n._`${t}${(0, n.getProperty)(r)} === undefined`;
    return s ? (0, n.or)(o, (0, n.not)(c(e, t, r))) : o;
}
function u(e) {
    return e ? Object.keys(e).filter((e)=>"__proto__" !== e) : [];
}
exports.checkReportMissingProp = function(e, t) {
    const { gen: r, data: s, it: o } = e;
    r.if(l(r, s, t, o.opts.ownProperties), ()=>{
        e.setParams({
            missingProperty: n._`${t}`
        }, !0), e.error();
    });
}, exports.checkMissingProp = function({ gen: e, data: t, it: { opts: r } }, s, o) {
    return (0, n.or)(...s.map((s)=>(0, n.and)(l(e, t, s, r.ownProperties), n._`${o} = ${s}`)));
}, exports.reportMissingProp = function(e, t) {
    e.setParams({
        missingProperty: t
    }, !0), e.error();
}, exports.hasPropFunc = a, exports.isOwnProperty = c, exports.propertyInData = function(e, t, r, s) {
    const o = n._`${t}${(0, n.getProperty)(r)} !== undefined`;
    return s ? n._`${o} && ${c(e, t, r)}` : o;
}, exports.noPropertyInData = l, exports.allSchemaProperties = u, exports.schemaProperties = function(e, t) {
    return u(t).filter((r)=>!(0, s.alwaysValidSchema)(e, t[r]));
}, exports.callValidateCode = function({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: s, schemaPath: i, errorPath: a }, it: c }, l, u, d) {
    const p = d ? n._`${e}, ${t}, ${s}${i}` : t, m = [
        [
            o.default.instancePath,
            (0, n.strConcat)(o.default.instancePath, a)
        ],
        [
            o.default.parentData,
            c.parentData
        ],
        [
            o.default.parentDataProperty,
            c.parentDataProperty
        ],
        [
            o.default.rootData,
            o.default.rootData
        ]
    ];
    c.opts.dynamicRef && m.push([
        o.default.dynamicAnchors,
        o.default.dynamicAnchors
    ]);
    const h = n._`${p}, ${r.object(...m)}`;
    return u !== n.nil ? n._`${l}.call(${u}, ${h})` : n._`${l}(${h})`;
};
const d = n._`new RegExp`;
exports.usePattern = function({ gen: e, it: { opts: t } }, r) {
    const s = t.unicodeRegExp ? "u" : "", { regExp: o } = t.code, a = o(r, s);
    return e.scopeValue("pattern", {
        key: a.toString(),
        ref: a,
        code: n._`${"new RegExp" === o.code ? d : (0, i.useFunc)(e, o)}(${r}, ${s})`
    });
}, exports.validateArray = function(e) {
    const { gen: t, data: r, keyword: o, it: i } = e, a = t.name("valid");
    if (i.allErrors) {
        const e = t.let("valid", !0);
        return c(()=>t.assign(e, !1)), e;
    }
    return t.var(a, !0), c(()=>t.break()), a;
    function c(i) {
        const c = t.const("len", n._`${r}.length`);
        t.forRange("i", 0, c, (r)=>{
            e.subschema({
                keyword: o,
                dataProp: r,
                dataPropType: s.Type.Num
            }, a), t.if((0, n.not)(a), i);
        });
    }
}, exports.validateUnion = function(e) {
    const { gen: t, schema: r, keyword: o, it: i } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((e)=>(0, s.alwaysValidSchema)(i, e)) && !i.opts.unevaluated) return;
    const a = t.let("valid", !1), c = t.name("_valid");
    t.block(()=>r.forEach((r, s)=>{
            const i = e.subschema({
                keyword: o,
                schemaProp: s,
                compositeRule: !0
            }, c);
            t.assign(a, n._`${a} || ${c}`);
            e.mergeValidEvaluated(i, c) || t.if((0, n.not)(a));
        })), e.result(a, ()=>e.reset(), ()=>e.error(!0));
};
