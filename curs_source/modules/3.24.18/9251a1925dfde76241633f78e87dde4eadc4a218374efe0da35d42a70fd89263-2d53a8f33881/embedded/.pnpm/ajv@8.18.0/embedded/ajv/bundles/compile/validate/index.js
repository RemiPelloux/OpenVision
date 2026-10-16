import { require_codegen } from "../codegen/index.js";
import { require_errors3 } from "../errors.js";
import { require_names2 } from "../names.js";
import { require_resolve } from "../resolve.js";
import { require_util16 } from "../util.js";
import { require_applicability } from "./applicability.js";
import { require_boolSchema } from "./boolSchema.js";
import { require_dataType } from "./dataType.js";
import { require_defaults2 } from "./defaults.js";
import { require_keyword } from "./keyword.js";
import { require_subschema } from "./subschema.js";
var __wakaru_require_validate_cache;
export function require_validate() {
if (__wakaru_require_validate_cache) return __wakaru_require_validate_cache;
var exports2 = {};
__wakaru_require_validate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getData = exports2.KeywordCxt = exports2.validateFunctionCode = void 0;
var boolSchema_1 = require_boolSchema();
var dataType_1 = require_dataType();
var applicability_1 = require_applicability();
var dataType_2 = require_dataType();
var defaults_1 = require_defaults2();
var keyword_1 = require_keyword();
var subschema_1 = require_subschema();
var codegen_1 = require_codegen();
var names_1 = require_names2();
var resolve_1 = require_resolve();
var util_1 = require_util16();
var errors_1 = require_errors3();
function validateFunctionCode(it2) {
    if (isSchemaObj(it2)) {
        checkKeywords(it2);
        if (schemaCxtHasRules(it2)) {
            topSchemaObjCode(it2);
            return;
        }
    }
    validateFunction(it2, ()=>(0, boolSchema_1.topBoolOrEmptySchema)(it2));
}
exports2.validateFunctionCode = validateFunctionCode;
function validateFunction({ gen, validateName, schema: schema2, schemaEnv, opts }, body) {
    if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, ()=>{
            gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema2, opts)}`);
            destructureValCxtES5(gen, opts);
            gen.code(body);
        });
    } else {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, ()=>gen.code(funcSourceUrl(schema2, opts)).code(body));
    }
}
function destructureValCxt(opts) {
    return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
}
function destructureValCxtES5(gen, opts) {
    gen.if(names_1.default.valCxt, ()=>{
        gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
        gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
        if (opts.dynamicRef) gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
    }, ()=>{
        gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.rootData, names_1.default.data);
        if (opts.dynamicRef) gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
    });
}
function topSchemaObjCode(it2) {
    const { schema: schema2, opts, gen } = it2;
    validateFunction(it2, ()=>{
        if (opts.$comment && schema2.$comment) commentKeyword(it2);
        checkNoDefault(it2);
        gen.let(names_1.default.vErrors, null);
        gen.let(names_1.default.errors, 0);
        if (opts.unevaluated) resetEvaluated(it2);
        typeAndKeywords(it2);
        returnResults(it2);
    });
    return;
}
function resetEvaluated(it2) {
    const { gen, validateName } = it2;
    it2.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
    gen.if((0, codegen_1._)`${it2.evaluated}.dynamicProps`, ()=>gen.assign((0, codegen_1._)`${it2.evaluated}.props`, (0, codegen_1._)`undefined`));
    gen.if((0, codegen_1._)`${it2.evaluated}.dynamicItems`, ()=>gen.assign((0, codegen_1._)`${it2.evaluated}.items`, (0, codegen_1._)`undefined`));
}
function funcSourceUrl(schema2, opts) {
    const schId = typeof schema2 == "object" && schema2[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
}
function subschemaCode(it2, valid) {
    if (isSchemaObj(it2)) {
        checkKeywords(it2);
        if (schemaCxtHasRules(it2)) {
            subSchemaObjCode(it2, valid);
            return;
        }
    }
    (0, boolSchema_1.boolOrEmptySchema)(it2, valid);
}
function schemaCxtHasRules({ schema: schema2, self: self2 }) {
    if (typeof schema2 == "boolean") return !schema2;
    for(const key in schema2)if (self2.RULES.all[key]) return true;
    return false;
}
function isSchemaObj(it2) {
    return typeof it2.schema != "boolean";
}
function subSchemaObjCode(it2, valid) {
    const { schema: schema2, gen, opts } = it2;
    if (opts.$comment && schema2.$comment) commentKeyword(it2);
    updateContext(it2);
    checkAsyncSchema(it2);
    const errsCount = gen.const("_errs", names_1.default.errors);
    typeAndKeywords(it2, errsCount);
    gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
}
function checkKeywords(it2) {
    (0, util_1.checkUnknownRules)(it2);
    checkRefsAndKeywords(it2);
}
function typeAndKeywords(it2, errsCount) {
    if (it2.opts.jtd) return schemaKeywords(it2, [], false, errsCount);
    const types3 = (0, dataType_1.getSchemaTypes)(it2.schema);
    const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it2, types3);
    schemaKeywords(it2, types3, !checkedTypes, errsCount);
}
function checkRefsAndKeywords(it2) {
    const { schema: schema2, errSchemaPath, opts, self: self2 } = it2;
    if (schema2.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema2, self2.RULES)) {
        self2.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
    }
}
function checkNoDefault(it2) {
    const { schema: schema2, opts } = it2;
    if (schema2.default !== void 0 && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it2, "default is ignored in the schema root");
    }
}
function updateContext(it2) {
    const schId = it2.schema[it2.opts.schemaId];
    if (schId) it2.baseId = (0, resolve_1.resolveUrl)(it2.opts.uriResolver, it2.baseId, schId);
}
function checkAsyncSchema(it2) {
    if (it2.schema.$async && !it2.schemaEnv.$async) throw new Error("async schema in sync schema");
}
function commentKeyword({ gen, schemaEnv, schema: schema2, errSchemaPath, opts }) {
    const msg = schema2.$comment;
    if (opts.$comment === true) {
        gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
    } else if (typeof opts.$comment == "function") {
        const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
        const rootName = gen.scopeValue("root", {
            ref: schemaEnv.root
        });
        gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
    }
}
function returnResults(it2) {
    const { gen, schemaEnv, validateName, ValidationError, opts } = it2;
    if (schemaEnv.$async) {
        gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, ()=>gen.return(names_1.default.data), ()=>gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
    } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
        if (opts.unevaluated) assignEvaluated(it2);
        gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
    }
}
function assignEvaluated({ gen, evaluated, props, items }) {
    if (props instanceof codegen_1.Name) gen.assign((0, codegen_1._)`${evaluated}.props`, props);
    if (items instanceof codegen_1.Name) gen.assign((0, codegen_1._)`${evaluated}.items`, items);
}
function schemaKeywords(it2, types3, typeErrors, errsCount) {
    const { gen, schema: schema2, data, allErrors, opts, self: self2 } = it2;
    const { RULES } = self2;
    if (schema2.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema2, RULES))) {
        gen.block(()=>keywordCode(it2, "$ref", RULES.all.$ref.definition));
        return;
    }
    if (!opts.jtd) checkStrictTypes(it2, types3);
    gen.block(()=>{
        for (const group of RULES.rules)groupKeywords(group);
        groupKeywords(RULES.post);
    });
    function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema2, group)) return;
        if (group.type) {
            gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
            iterateKeywords(it2, group);
            if (types3.length === 1 && types3[0] === group.type && typeErrors) {
                gen.else();
                (0, dataType_2.reportTypeError)(it2);
            }
            gen.endIf();
        } else {
            iterateKeywords(it2, group);
        }
        if (!allErrors) gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
    }
}
function iterateKeywords(it2, group) {
    const { gen, schema: schema2, opts: { useDefaults } } = it2;
    if (useDefaults) (0, defaults_1.assignDefaults)(it2, group.type);
    gen.block(()=>{
        for (const rule of group.rules){
            if ((0, applicability_1.shouldUseRule)(schema2, rule)) {
                keywordCode(it2, rule.keyword, rule.definition, group.type);
            }
        }
    });
}
function checkStrictTypes(it2, types3) {
    if (it2.schemaEnv.meta || !it2.opts.strictTypes) return;
    checkContextTypes(it2, types3);
    if (!it2.opts.allowUnionTypes) checkMultipleTypes(it2, types3);
    checkKeywordTypes(it2, it2.dataTypes);
}
function checkContextTypes(it2, types3) {
    if (!types3.length) return;
    if (!it2.dataTypes.length) {
        it2.dataTypes = types3;
        return;
    }
    types3.forEach((t)=>{
        if (!includesType(it2.dataTypes, t)) {
            strictTypesError(it2, `type "${t}" not allowed by context "${it2.dataTypes.join(",")}"`);
        }
    });
    narrowSchemaTypes(it2, types3);
}
function checkMultipleTypes(it2, ts2) {
    if (ts2.length > 1 && !(ts2.length === 2 && ts2.includes("null"))) {
        strictTypesError(it2, "use allowUnionTypes to allow union type keyword");
    }
}
function checkKeywordTypes(it2, ts2) {
    const rules = it2.self.RULES.all;
    for(const keyword in rules){
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it2.schema, rule)) {
            const { type: type2 } = rule.definition;
            if (type2.length && !type2.some((t)=>hasApplicableType(ts2, t))) {
                strictTypesError(it2, `missing type "${type2.join(",")}" for keyword "${keyword}"`);
            }
        }
    }
}
function hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
}
function includesType(ts2, t) {
    return ts2.includes(t) || t === "integer" && ts2.includes("number");
}
function narrowSchemaTypes(it2, withTypes) {
    const ts2 = [];
    for (const t of it2.dataTypes){
        if (includesType(withTypes, t)) ts2.push(t);
        else if (withTypes.includes("integer") && t === "number") ts2.push("integer");
    }
    it2.dataTypes = ts2;
}
function strictTypesError(it2, msg) {
    const schemaPath = it2.schemaEnv.baseId + it2.errSchemaPath;
    msg += ` at "${schemaPath}" (strictTypes)`;
    (0, util_1.checkStrictMode)(it2, msg, it2.opts.strictTypes);
}
var KeywordCxt = class {
    constructor(it2, def, keyword){
        (0, keyword_1.validateKeywordUsage)(it2, def, keyword);
        this.gen = it2.gen;
        this.allErrors = it2.allErrors;
        this.keyword = keyword;
        this.data = it2.data;
        this.schema = it2.schema[keyword];
        this.$data = def.$data && it2.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it2, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it2.schema;
        this.params = {};
        this.it = it2;
        this.def = def;
        if (this.$data) {
            this.schemaCode = it2.gen.const("vSchema", getData(this.$data, it2));
        } else {
            this.schemaCode = this.schemaValue;
            if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
                throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
            }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
            this.errsCount = it2.gen.const("_errs", names_1.default.errors);
        }
    }
    result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
    }
    failResult(condition, successAction, failAction) {
        this.gen.if(condition);
        if (failAction) failAction();
        else this.error();
        if (successAction) {
            this.gen.else();
            successAction();
            if (this.allErrors) this.gen.endIf();
        } else {
            if (this.allErrors) this.gen.endIf();
            else this.gen.else();
        }
    }
    pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), void 0, failAction);
    }
    fail(condition) {
        if (condition === void 0) {
            this.error();
            if (!this.allErrors) this.gen.if(false);
            return;
        }
        this.gen.if(condition);
        this.error();
        if (this.allErrors) this.gen.endIf();
        else this.gen.else();
    }
    fail$data(condition) {
        if (!this.$data) return this.fail(condition);
        const { schemaCode } = this;
        this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
    }
    error(append, errorParams, errorPaths) {
        if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
        }
        this._error(append, errorPaths);
    }
    _error(append, errorPaths) {
        ;
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
    }
    $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
    }
    reset() {
        if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(cond) {
        if (!this.allErrors) this.gen.if(cond);
    }
    setParams(obj, assign) {
        if (assign) Object.assign(this.params, obj);
        else this.params = obj;
    }
    block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(()=>{
            this.check$data(valid, $dataValid);
            codeBlock();
        });
    }
    check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data) return;
        const { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
        if (valid !== codegen_1.nil) gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid !== codegen_1.nil) gen.assign(valid, false);
        }
        gen.else();
    }
    invalid$data() {
        const { gen, schemaCode, schemaType, def, it: it2 } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
            if (schemaType.length) {
                if (!(schemaCode instanceof codegen_1.Name)) throw new Error("ajv implementation error");
                const st2 = Array.isArray(schemaType) ? schemaType : [
                    schemaType
                ];
                return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st2, schemaCode, it2.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
            }
            return codegen_1.nil;
        }
        function invalid$DataSchema() {
            if (def.validateSchema) {
                const validateSchemaRef = gen.scopeValue("validate$data", {
                    ref: def.validateSchema
                });
                return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
            }
            return codegen_1.nil;
        }
    }
    subschema(appl, valid) {
        const subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        const nextContext = {
            ...this.it,
            ...subschema,
            items: void 0,
            props: void 0
        };
        subschemaCode(nextContext, valid);
        return nextContext;
    }
    mergeEvaluated(schemaCxt, toName2) {
        const { it: it2, gen } = this;
        if (!it2.opts.unevaluated) return;
        if (it2.props !== true && schemaCxt.props !== void 0) {
            it2.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it2.props, toName2);
        }
        if (it2.items !== true && schemaCxt.items !== void 0) {
            it2.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it2.items, toName2);
        }
    }
    mergeValidEvaluated(schemaCxt, valid) {
        const { it: it2, gen } = this;
        if (it2.opts.unevaluated && (it2.props !== true || it2.items !== true)) {
            gen.if(valid, ()=>this.mergeEvaluated(schemaCxt, codegen_1.Name));
            return true;
        }
    }
};
exports2.KeywordCxt = KeywordCxt;
function keywordCode(it2, keyword, def, ruleType) {
    const cxt = new KeywordCxt(it2, def, keyword);
    if ("code" in def) {
        def.code(cxt, ruleType);
    } else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
    } else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
    } else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
    }
}
var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, { dataLevel, dataNames, dataPathArr }) {
    let jsonPointer;
    let data;
    if ($data === "") return names_1.default.rootData;
    if ($data[0] === "/") {
        if (!JSON_POINTER.test($data)) throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = names_1.default.rootData;
    } else {
        const matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches) throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
            if (up >= dataLevel) throw new Error(errorMsg("property/index", up));
            return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel) throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer) return data;
    }
    let expr = data;
    const segments = jsonPointer.split("/");
    for (const segment of segments){
        if (segment) {
            data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
            expr = (0, codegen_1._)`${expr} && ${data}`;
        }
    }
    return expr;
    function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
    }
}
exports2.getData = getData;

return exports2;
}
