import { require_codegen } from "../codegen/index.js";
import { require_util16 } from "../util.js";
var __wakaru_require_subschema_cache;
export function require_subschema() {
if (__wakaru_require_subschema_cache) return __wakaru_require_subschema_cache;
var exports2 = {};
__wakaru_require_subschema_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.extendSubschemaMode = exports2.extendSubschemaData = exports2.getSubschema = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
function getSubschema(it2, { keyword, schemaProp, schema: schema2, schemaPath, errSchemaPath, topSchemaRef }) {
    if (keyword !== void 0 && schema2 !== void 0) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
    }
    if (keyword !== void 0) {
        const sch = it2.schema[keyword];
        return schemaProp === void 0 ? {
            schema: sch,
            schemaPath: (0, codegen_1._)`${it2.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
            errSchemaPath: `${it2.errSchemaPath}/${keyword}`
        } : {
            schema: sch[schemaProp],
            schemaPath: (0, codegen_1._)`${it2.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
            errSchemaPath: `${it2.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
        };
    }
    if (schema2 !== void 0) {
        if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
            throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
            schema: schema2,
            schemaPath,
            topSchemaRef,
            errSchemaPath
        };
    }
    throw new Error('either "keyword" or "schema" must be passed');
}
exports2.getSubschema = getSubschema;
function extendSubschemaData(subschema, it2, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
    if (data !== void 0 && dataProp !== void 0) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
    }
    const { gen } = it2;
    if (dataProp !== void 0) {
        const { errorPath, dataPathArr, opts } = it2;
        const nextData = gen.let("data", (0, codegen_1._)`${it2.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
        subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
        subschema.dataPathArr = [
            ...dataPathArr,
            subschema.parentDataProperty
        ];
    }
    if (data !== void 0) {
        const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
        dataContextProps(nextData);
        if (propertyName !== void 0) subschema.propertyName = propertyName;
    }
    if (dataTypes) subschema.dataTypes = dataTypes;
    function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it2.dataLevel + 1;
        subschema.dataTypes = [];
        it2.definedProperties = new Set();
        subschema.parentData = it2.data;
        subschema.dataNames = [
            ...it2.dataNames,
            _nextData
        ];
    }
}
exports2.extendSubschemaData = extendSubschemaData;
function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
    if (compositeRule !== void 0) subschema.compositeRule = compositeRule;
    if (createErrors !== void 0) subschema.createErrors = createErrors;
    if (allErrors !== void 0) subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator;
    subschema.jtdMetadata = jtdMetadata;
}
exports2.extendSubschemaMode = extendSubschemaMode;

return exports2;
}
