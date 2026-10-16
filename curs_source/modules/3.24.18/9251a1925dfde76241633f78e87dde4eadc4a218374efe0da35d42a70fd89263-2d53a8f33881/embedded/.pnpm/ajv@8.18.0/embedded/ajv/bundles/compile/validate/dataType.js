import { require_codegen } from "../codegen/index.js";
import { require_errors3 } from "../errors.js";
import { require_rules } from "../rules.js";
import { require_util16 } from "../util.js";
import { require_applicability } from "./applicability.js";
var __wakaru_require_dataType_cache;
export function require_dataType() {
if (__wakaru_require_dataType_cache) return __wakaru_require_dataType_cache;
var exports2 = {};
__wakaru_require_dataType_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.reportTypeError = exports2.checkDataTypes = exports2.checkDataType = exports2.coerceAndCheckDataType = exports2.getJSONTypes = exports2.getSchemaTypes = exports2.DataType = void 0;
var rules_1 = require_rules();
var applicability_1 = require_applicability();
var errors_1 = require_errors3();
var codegen_1 = require_codegen();
var util_1 = require_util16();
var DataType;
(function(DataType2) {
    DataType2[DataType2["Correct"] = 0] = "Correct";
    DataType2[DataType2["Wrong"] = 1] = "Wrong";
})(DataType || (exports2.DataType = DataType = {}));
function getSchemaTypes(schema2) {
    const types3 = getJSONTypes(schema2.type);
    const hasNull = types3.includes("null");
    if (hasNull) {
        if (schema2.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
        if (!types3.length && schema2.nullable !== void 0) {
            throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema2.nullable === true) types3.push("null");
    }
    return types3;
}
exports2.getSchemaTypes = getSchemaTypes;
function getJSONTypes(ts2) {
    const types3 = Array.isArray(ts2) ? ts2 : ts2 ? [
        ts2
    ] : [];
    if (types3.every(rules_1.isJSONType)) return types3;
    throw new Error("type must be JSONType or JSONType[]: " + types3.join(","));
}
exports2.getJSONTypes = getJSONTypes;
function coerceAndCheckDataType(it2, types3) {
    const { gen, data, opts } = it2;
    const coerceTo = coerceToTypes(types3, opts.coerceTypes);
    const checkTypes = types3.length > 0 && !(coerceTo.length === 0 && types3.length === 1 && (0, applicability_1.schemaHasRulesForType)(it2, types3[0]));
    if (checkTypes) {
        const wrongType = checkDataTypes(types3, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, ()=>{
            if (coerceTo.length) coerceData(it2, types3, coerceTo);
            else reportTypeError(it2);
        });
    }
    return checkTypes;
}
exports2.coerceAndCheckDataType = coerceAndCheckDataType;
var COERCIBLE = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
]);
function coerceToTypes(types3, coerceTypes) {
    return coerceTypes ? types3.filter((t)=>COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
}
function coerceData(it2, types3, coerceTo) {
    const { gen, data, opts } = it2;
    const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
    const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
    if (opts.coerceTypes === "array") {
        gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, ()=>gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types3, data, opts.strictNumbers), ()=>gen.assign(coerced, data)));
    }
    gen.if((0, codegen_1._)`${coerced} !== undefined`);
    for (const t of coerceTo){
        if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
            coerceSpecificType(t);
        }
    }
    gen.else();
    reportTypeError(it2);
    gen.endIf();
    gen.if((0, codegen_1._)`${coerced} !== undefined`, ()=>{
        gen.assign(data, coerced);
        assignParentData(it2, coerced);
    });
    function coerceSpecificType(t) {
        switch(t){
            case "string":
                gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
                return;
            case "number":
                gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
                return;
            case "integer":
                gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
                return;
            case "boolean":
                gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
                return;
            case "null":
                gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
                gen.assign(coerced, null);
                return;
            case "array":
                gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
        }
    }
}
function assignParentData({ gen, parentData, parentDataProperty }, expr) {
    gen.if((0, codegen_1._)`${parentData} !== undefined`, ()=>gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
}
function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
    const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
    let cond;
    switch(dataType){
        case "null":
            return (0, codegen_1._)`${data} ${EQ} null`;
        case "array":
            cond = (0, codegen_1._)`Array.isArray(${data})`;
            break;
        case "object":
            cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
            break;
        case "integer":
            cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
            break;
        case "number":
            cond = numCond();
            break;
        default:
            return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
    }
    return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
    function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
    }
}
exports2.checkDataType = checkDataType;
function checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
    }
    let cond;
    const types3 = (0, util_1.toHash)(dataTypes);
    if (types3.array && types3.object) {
        const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
        cond = types3.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
        delete types3.null;
        delete types3.array;
        delete types3.object;
    } else {
        cond = codegen_1.nil;
    }
    if (types3.number) delete types3.integer;
    for(const t in types3)cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
    return cond;
}
exports2.checkDataTypes = checkDataTypes;
var typeError = {
    message: ({ schema: schema2 })=>`must be ${schema2}`,
    params: ({ schema: schema2, schemaValue })=>typeof schema2 == "string" ? (0, codegen_1._)`{type: ${schema2}}` : (0, codegen_1._)`{type: ${schemaValue}}`
};
function reportTypeError(it2) {
    const cxt = getTypeErrorContext(it2);
    (0, errors_1.reportError)(cxt, typeError);
}
exports2.reportTypeError = reportTypeError;
function getTypeErrorContext(it2) {
    const { gen, data, schema: schema2 } = it2;
    const schemaCode = (0, util_1.schemaRefOrVal)(it2, schema2, "type");
    return {
        gen,
        keyword: "type",
        data,
        schema: schema2.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema2,
        params: {},
        it: it2
    };
}

return exports2;
}
