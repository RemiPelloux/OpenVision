import { require_codegen } from "../compile/codegen/index.js";
import { require_names2 } from "../compile/names.js";
import { require_util16 } from "../compile/util.js";
var __wakaru_require_code3_cache;
export function require_code3() {
if (__wakaru_require_code3_cache) return __wakaru_require_code3_cache;
var exports2 = {};
__wakaru_require_code3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateUnion = exports2.validateArray = exports2.usePattern = exports2.callValidateCode = exports2.schemaProperties = exports2.allSchemaProperties = exports2.noPropertyInData = exports2.propertyInData = exports2.isOwnProperty = exports2.hasPropFunc = exports2.reportMissingProp = exports2.checkMissingProp = exports2.checkReportMissingProp = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
var names_1 = require_names2();
var util_2 = require_util16();
function checkReportMissingProp(cxt, prop) {
    const { gen, data, it: it2 } = cxt;
    gen.if(noPropertyInData(gen, data, prop, it2.opts.ownProperties), ()=>{
        cxt.setParams({
            missingProperty: (0, codegen_1._)`${prop}`
        }, true);
        cxt.error();
    });
}
exports2.checkReportMissingProp = checkReportMissingProp;
function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
    return (0, codegen_1.or)(...properties.map((prop)=>(0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
}
exports2.checkMissingProp = checkMissingProp;
function reportMissingProp(cxt, missing) {
    cxt.setParams({
        missingProperty: missing
    }, true);
    cxt.error();
}
exports2.reportMissingProp = reportMissingProp;
function hasPropFunc(gen) {
    return gen.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
    });
}
exports2.hasPropFunc = hasPropFunc;
function isOwnProperty(gen, data, property) {
    return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
}
exports2.isOwnProperty = isOwnProperty;
function propertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
    return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
}
exports2.propertyInData = propertyInData;
function noPropertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
    return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
}
exports2.noPropertyInData = noPropertyInData;
function allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter((p2)=>p2 !== "__proto__") : [];
}
exports2.allSchemaProperties = allSchemaProperties;
function schemaProperties(it2, schemaMap) {
    return allSchemaProperties(schemaMap).filter((p2)=>!(0, util_1.alwaysValidSchema)(it2, schemaMap[p2]));
}
exports2.schemaProperties = schemaProperties;
function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it: it2 }, func, context2, passSchema) {
    const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
    const valCxt = [
        [
            names_1.default.instancePath,
            (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)
        ],
        [
            names_1.default.parentData,
            it2.parentData
        ],
        [
            names_1.default.parentDataProperty,
            it2.parentDataProperty
        ],
        [
            names_1.default.rootData,
            names_1.default.rootData
        ]
    ];
    if (it2.opts.dynamicRef) valCxt.push([
        names_1.default.dynamicAnchors,
        names_1.default.dynamicAnchors
    ]);
    const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
    return context2 !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context2}, ${args})` : (0, codegen_1._)`${func}(${args})`;
}
exports2.callValidateCode = callValidateCode;
var newRegExp = (0, codegen_1._)`new RegExp`;
function usePattern({ gen, it: { opts } }, pattern) {
    const u2 = opts.unicodeRegExp ? "u" : "";
    const { regExp } = opts.code;
    const rx = regExp(pattern, u2);
    return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u2})`
    });
}
exports2.usePattern = usePattern;
function validateArray(cxt) {
    const { gen, data, keyword, it: it2 } = cxt;
    const valid = gen.name("valid");
    if (it2.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(()=>gen.assign(validArr, false));
        return validArr;
    }
    gen.var(valid, true);
    validateItems(()=>gen.break());
    return valid;
    function validateItems(notValid) {
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        gen.forRange("i", 0, len, (i)=>{
            cxt.subschema({
                keyword,
                dataProp: i,
                dataPropType: util_1.Type.Num
            }, valid);
            gen.if((0, codegen_1.not)(valid), notValid);
        });
    }
}
exports2.validateArray = validateArray;
function validateUnion(cxt) {
    const { gen, schema: schema2, keyword, it: it2 } = cxt;
    if (!Array.isArray(schema2)) throw new Error("ajv implementation error");
    const alwaysValid = schema2.some((sch)=>(0, util_1.alwaysValidSchema)(it2, sch));
    if (alwaysValid && !it2.opts.unevaluated) return;
    const valid = gen.let("valid", false);
    const schValid = gen.name("_valid");
    gen.block(()=>schema2.forEach((_sch, i)=>{
            const schCxt = cxt.subschema({
                keyword,
                schemaProp: i,
                compositeRule: true
            }, schValid);
            gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`);
            const merged = cxt.mergeValidEvaluated(schCxt, schValid);
            if (!merged) gen.if((0, codegen_1.not)(valid));
        }));
    cxt.result(valid, ()=>cxt.reset(), ()=>cxt.error(true));
}
exports2.validateUnion = validateUnion;

return exports2;
}
