import { require_codegen } from "./codegen/index.js";
import { require_names2 } from "./names.js";
import { require_util16 } from "./util.js";
var __wakaru_require_errors3_cache;
export function require_errors3() {
if (__wakaru_require_errors3_cache) return __wakaru_require_errors3_cache;
var exports2 = {};
__wakaru_require_errors3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.extendErrors = exports2.resetErrorsCount = exports2.reportExtraError = exports2.reportError = exports2.keyword$DataError = exports2.keywordError = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
var names_1 = require_names2();
exports2.keywordError = {
    message: ({ keyword })=>(0, codegen_1.str)`must pass "${keyword}" keyword validation`
};
exports2.keyword$DataError = {
    message: ({ keyword, schemaType })=>schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
};
function reportError(cxt, error3 = exports2.keywordError, errorPaths, overrideAllErrors) {
    const { it: it2 } = cxt;
    const { gen, compositeRule, allErrors } = it2;
    const errObj = errorObjectCode(cxt, error3, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
    } else {
        returnErrors(it2, (0, codegen_1._)`[${errObj}]`);
    }
}
exports2.reportError = reportError;
function reportExtraError(cxt, error3 = exports2.keywordError, errorPaths) {
    const { it: it2 } = cxt;
    const { gen, compositeRule, allErrors } = it2;
    const errObj = errorObjectCode(cxt, error3, errorPaths);
    addError(gen, errObj);
    if (!(compositeRule || allErrors)) {
        returnErrors(it2, names_1.default.vErrors);
    }
}
exports2.reportExtraError = reportExtraError;
function resetErrorsCount(gen, errsCount) {
    gen.assign(names_1.default.errors, errsCount);
    gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, ()=>gen.if(errsCount, ()=>gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), ()=>gen.assign(names_1.default.vErrors, null)));
}
exports2.resetErrorsCount = resetErrorsCount;
function extendErrors({ gen, keyword, schemaValue, data, errsCount, it: it2 }) {
    if (errsCount === void 0) throw new Error("ajv implementation error");
    const err = gen.name("err");
    gen.forRange("i", errsCount, names_1.default.errors, (i)=>{
        gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i}]`);
        gen.if((0, codegen_1._)`${err}.instancePath === undefined`, ()=>gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it2.errorPath)));
        gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it2.errSchemaPath}/${keyword}`);
        if (it2.opts.verbose) {
            gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
            gen.assign((0, codegen_1._)`${err}.data`, data);
        }
    });
}
exports2.extendErrors = extendErrors;
function addError(gen, errObj) {
    const err = gen.const("err", errObj);
    gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, ()=>gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
    gen.code((0, codegen_1._)`${names_1.default.errors}++`);
}
function returnErrors(it2, errs) {
    const { gen, validateName, schemaEnv } = it2;
    if (schemaEnv.$async) {
        gen.throw((0, codegen_1._)`new ${it2.ValidationError}(${errs})`);
    } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
        gen.return(false);
    }
}
var E = {
    keyword: new codegen_1.Name("keyword"),
    schemaPath: new codegen_1.Name("schemaPath"),
    params: new codegen_1.Name("params"),
    propertyName: new codegen_1.Name("propertyName"),
    message: new codegen_1.Name("message"),
    schema: new codegen_1.Name("schema"),
    parentSchema: new codegen_1.Name("parentSchema")
};
function errorObjectCode(cxt, error3, errorPaths) {
    const { createErrors } = cxt.it;
    if (createErrors === false) return (0, codegen_1._)`{}`;
    return errorObject(cxt, error3, errorPaths);
}
function errorObject(cxt, error3, errorPaths = {}) {
    const { gen, it: it2 } = cxt;
    const keyValues = [
        errorInstancePath(it2, errorPaths),
        errorSchemaPath(cxt, errorPaths)
    ];
    extraErrorProps(cxt, error3, keyValues);
    return gen.object(...keyValues);
}
function errorInstancePath({ errorPath }, { instancePath }) {
    const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
    return [
        names_1.default.instancePath,
        (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)
    ];
}
function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
    let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
    if (schemaPath) {
        schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
    }
    return [
        E.schemaPath,
        schPath
    ];
}
function extraErrorProps(cxt, { params, message }, keyValues) {
    const { keyword, data, schemaValue, it: it2 } = cxt;
    const { opts, propertyName, topSchemaRef, schemaPath } = it2;
    keyValues.push([
        E.keyword,
        keyword
    ], [
        E.params,
        typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`
    ]);
    if (opts.messages) {
        keyValues.push([
            E.message,
            typeof message == "function" ? message(cxt) : message
        ]);
    }
    if (opts.verbose) {
        keyValues.push([
            E.schema,
            schemaValue
        ], [
            E.parentSchema,
            (0, codegen_1._)`${topSchemaRef}${schemaPath}`
        ], [
            names_1.default.data,
            data
        ]);
    }
    if (propertyName) keyValues.push([
        E.propertyName,
        propertyName
    ]);
}

return exports2;
}
