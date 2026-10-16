"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-4489.js"), i = require("./module-9657.js");
function a(e) {
    return e.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: n._`Object.prototype.hasOwnProperty`
    });
}
function c(e, t, r) {
    return n._`${a(e)}.call(${t}, ${r})`;
}
function u(e, t, r, o) {
    const s = n._`${t}${(0, n.getProperty)(r)} === undefined`;
    return o ? (0, n.or)(s, (0, n.not)(c(e, t, r))) : s;
}
function l(e) {
    return e ? Object.keys(e).filter((e)=>"__proto__" !== e) : [];
}
exports.checkReportMissingProp = function(e, t) {
    const { gen: r, data: o, it: s } = e;
    r.if(u(r, o, t, s.opts.ownProperties), ()=>{
        e.setParams({
            missingProperty: n._`${t}`
        }, !0), e.error();
    });
}, exports.checkMissingProp = function({ gen: e, data: t, it: { opts: r } }, o, s) {
    return (0, n.or)(...o.map((o)=>(0, n.and)(u(e, t, o, r.ownProperties), n._`${s} = ${o}`)));
}, exports.reportMissingProp = function(e, t) {
    e.setParams({
        missingProperty: t
    }, !0), e.error();
}, exports.hasPropFunc = a, exports.isOwnProperty = c, exports.propertyInData = function(e, t, r, o) {
    const s = n._`${t}${(0, n.getProperty)(r)} !== undefined`;
    return o ? n._`${s} && ${c(e, t, r)}` : s;
}, exports.noPropertyInData = u, exports.allSchemaProperties = l, exports.schemaProperties = function(e, t) {
    return l(t).filter((r)=>!(0, o.alwaysValidSchema)(e, t[r]));
}, exports.callValidateCode = function({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: o, schemaPath: i, errorPath: a }, it: c }, u, l, d) {
    const p = d ? n._`${e}, ${t}, ${o}${i}` : t, f = [
        [
            s.default.instancePath,
            (0, n.strConcat)(s.default.instancePath, a)
        ],
        [
            s.default.parentData,
            c.parentData
        ],
        [
            s.default.parentDataProperty,
            c.parentDataProperty
        ],
        [
            s.default.rootData,
            s.default.rootData
        ]
    ];
    c.opts.dynamicRef && f.push([
        s.default.dynamicAnchors,
        s.default.dynamicAnchors
    ]);
    const h = n._`${p}, ${r.object(...f)}`;
    return l !== n.nil ? n._`${u}.call(${l}, ${h})` : n._`${u}(${h})`;
};
const d = n._`new RegExp`;
exports.usePattern = function({ gen: e, it: { opts: t } }, r) {
    const o = t.unicodeRegExp ? "u" : "", { regExp: s } = t.code, a = s(r, o);
    return e.scopeValue("pattern", {
        key: a.toString(),
        ref: a,
        code: n._`${"new RegExp" === s.code ? d : (0, i.useFunc)(e, s)}(${r}, ${o})`
    });
}, exports.validateArray = function(e) {
    const { gen: t, data: r, keyword: s, it: i } = e, a = t.name("valid");
    if (i.allErrors) {
        const e = t.let("valid", !0);
        return c(()=>t.assign(e, !1)), e;
    }
    return t.var(a, !0), c(()=>t.break()), a;
    function c(i) {
        const c = t.const("len", n._`${r}.length`);
        t.forRange("i", 0, c, (r)=>{
            e.subschema({
                keyword: s,
                dataProp: r,
                dataPropType: o.Type.Num
            }, a), t.if((0, n.not)(a), i);
        });
    }
}, exports.validateUnion = function(e) {
    const { gen: t, schema: r, keyword: s, it: i } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((e)=>(0, o.alwaysValidSchema)(i, e)) && !i.opts.unevaluated) return;
    const a = t.let("valid", !1), c = t.name("_valid");
    t.block(()=>r.forEach((r, o)=>{
            const i = e.subschema({
                keyword: s,
                schemaProp: o,
                compositeRule: !0
            }, c);
            t.assign(a, n._`${a} || ${c}`);
            e.mergeValidEvaluated(i, c) || t.if((0, n.not)(a));
        })), e.result(a, ()=>e.reset(), ()=>e.error(!0));
};
