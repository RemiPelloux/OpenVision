import { require_codegen } from "../codegen/index.js";
import { require_errors3 } from "../errors.js";
import { require_names2 } from "../names.js";
import { require_code3 } from "../../vocabularies/code.js";
var __wakaru_require_keyword_cache;
export function require_keyword() {
if (__wakaru_require_keyword_cache) return __wakaru_require_keyword_cache;
var exports2 = {};
__wakaru_require_keyword_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateKeywordUsage = exports2.validSchemaType = exports2.funcKeywordCode = exports2.macroKeywordCode = void 0;
var codegen_1 = require_codegen();
var names_1 = require_names2();
var code_1 = require_code3();
var errors_1 = require_errors3();
function macroKeywordCode(cxt, def) {
    const { gen, keyword, schema: schema2, parentSchema, it: it2 } = cxt;
    const macroSchema = def.macro.call(it2.self, schema2, parentSchema, it2);
    const schemaRef = useKeyword(gen, keyword, macroSchema);
    if (it2.opts.validateSchema !== false) it2.self.validateSchema(macroSchema, true);
    const valid = gen.name("valid");
    cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it2.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true
    }, valid);
    cxt.pass(valid, ()=>cxt.error(true));
}
exports2.macroKeywordCode = macroKeywordCode;
function funcKeywordCode(cxt, def) {
    var _a18;
    const { gen, keyword, schema: schema2, parentSchema, $data, it: it2 } = cxt;
    checkAsyncKeyword(it2, def);
    const validate = !$data && def.compile ? def.compile.call(it2.self, schema2, parentSchema, it2) : def.validate;
    const validateRef = useKeyword(gen, keyword, validate);
    const valid = gen.let("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a18 = def.valid) !== null && _a18 !== void 0 ? _a18 : valid);
    function validateKeyword() {
        if (def.errors === false) {
            assignValid();
            if (def.modifying) modifyData(cxt);
            reportErrs(()=>cxt.error());
        } else {
            const ruleErrs = def.async ? validateAsync() : validateSync();
            if (def.modifying) modifyData(cxt);
            reportErrs(()=>addErrs(cxt, ruleErrs));
        }
    }
    function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(()=>assignValid((0, codegen_1._)`await `), (e)=>gen.assign(valid, false).if((0, codegen_1._)`${e} instanceof ${it2.ValidationError}`, ()=>gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), ()=>gen.throw(e)));
        return ruleErrs;
    }
    function validateSync() {
        const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
    }
    function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
        const passCxt = it2.opts.passContext ? names_1.default.this : names_1.default.self;
        const passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
    }
    function reportErrs(errors) {
        var _a19;
        gen.if((0, codegen_1.not)((_a19 = def.valid) !== null && _a19 !== void 0 ? _a19 : valid), errors);
    }
}
exports2.funcKeywordCode = funcKeywordCode;
function modifyData(cxt) {
    const { gen, data, it: it2 } = cxt;
    gen.if(it2.parentData, ()=>gen.assign(data, (0, codegen_1._)`${it2.parentData}[${it2.parentDataProperty}]`));
}
function addErrs(cxt, errs) {
    const { gen } = cxt;
    gen.if((0, codegen_1._)`Array.isArray(${errs})`, ()=>{
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
        (0, errors_1.extendErrors)(cxt);
    }, ()=>cxt.error());
}
function checkAsyncKeyword({ schemaEnv }, def) {
    if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
}
function useKeyword(gen, keyword, result) {
    if (result === void 0) throw new Error(`keyword "${keyword}" failed to compile`);
    return gen.scopeValue("keyword", typeof result == "function" ? {
        ref: result
    } : {
        ref: result,
        code: (0, codegen_1.stringify)(result)
    });
}
function validSchemaType(schema2, schemaType, allowUndefined = false) {
    return !schemaType.length || schemaType.some((st2)=>st2 === "array" ? Array.isArray(schema2) : st2 === "object" ? schema2 && typeof schema2 == "object" && !Array.isArray(schema2) : typeof schema2 == st2 || allowUndefined && typeof schema2 == "undefined");
}
exports2.validSchemaType = validSchemaType;
function validateKeywordUsage({ schema: schema2, opts, self: self2, errSchemaPath }, def, keyword) {
    if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
    }
    const deps = def.dependencies;
    if (deps === null || deps === void 0 ? void 0 : deps.some((kwd)=>!Object.prototype.hasOwnProperty.call(schema2, kwd))) {
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
    }
    if (def.validateSchema) {
        const valid = def.validateSchema(schema2[keyword]);
        if (!valid) {
            const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self2.errorsText(def.validateSchema.errors);
            if (opts.validateSchema === "log") self2.logger.error(msg);
            else throw new Error(msg);
        }
    }
}
exports2.validateKeywordUsage = validateKeywordUsage;

return exports2;
}
