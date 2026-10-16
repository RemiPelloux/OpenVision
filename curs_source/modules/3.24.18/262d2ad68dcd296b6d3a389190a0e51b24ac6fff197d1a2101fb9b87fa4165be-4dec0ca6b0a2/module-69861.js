"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js");
exports.getSubschema = function(e, { keyword: t, schemaProp: r, schema: s, schemaPath: i, errSchemaPath: a, topSchemaRef: l }) {
    if (void 0 !== t && void 0 !== s) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (void 0 !== t) {
        const s = e.schema[t];
        return void 0 === r ? {
            schema: s,
            schemaPath: n._`${e.schemaPath}${(0, n.getProperty)(t)}`,
            errSchemaPath: `${e.errSchemaPath}/${t}`
        } : {
            schema: s[r],
            schemaPath: n._`${e.schemaPath}${(0, n.getProperty)(t)}${(0, n.getProperty)(r)}`,
            errSchemaPath: `${e.errSchemaPath}/${t}/${(0, o.escapeFragment)(r)}`
        };
    }
    if (void 0 !== s) {
        if (void 0 === i || void 0 === a || void 0 === l) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return {
            schema: s,
            schemaPath: i,
            topSchemaRef: l,
            errSchemaPath: a
        };
    }
    throw new Error('either "keyword" or "schema" must be passed');
}, exports.extendSubschemaData = function(e, t, { dataProp: r, dataPropType: s, data: i, dataTypes: a, propertyName: l }) {
    if (void 0 !== i && void 0 !== r) throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: c } = t;
    if (void 0 !== r) {
        const { errorPath: i, dataPathArr: a, opts: l } = t;
        u(c.let("data", n._`${t.data}${(0, n.getProperty)(r)}`, !0)), e.errorPath = n.str`${i}${(0, o.getErrorPath)(r, s, l.jsPropertySyntax)}`, e.parentDataProperty = n._`${r}`, e.dataPathArr = [
            ...a,
            e.parentDataProperty
        ];
    }
    if (void 0 !== i) {
        u(i instanceof n.Name ? i : c.let("data", i, !0)), void 0 !== l && (e.propertyName = l);
    }
    function u(r) {
        e.data = r, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = new Set, e.parentData = t.data, e.dataNames = [
            ...t.dataNames,
            r
        ];
    }
    a && (e.dataTypes = a);
}, exports.extendSubschemaMode = function(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: n, createErrors: o, allErrors: s }) {
    void 0 !== n && (e.compositeRule = n), void 0 !== o && (e.createErrors = o), void 0 !== s && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = r;
};
