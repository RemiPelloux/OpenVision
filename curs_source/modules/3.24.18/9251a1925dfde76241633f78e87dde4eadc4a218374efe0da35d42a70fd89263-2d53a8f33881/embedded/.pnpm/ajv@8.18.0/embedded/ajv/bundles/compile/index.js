import { require_codegen } from "./codegen/index.js";
import { require_names2 } from "./names.js";
import { require_resolve } from "./resolve.js";
import { require_util16 } from "./util.js";
import { require_validate } from "./validate/index.js";
import { require_validation_error } from "../runtime/validation_error.js";
var __wakaru_require_compile_cache;
export function require_compile() {
if (__wakaru_require_compile_cache) return __wakaru_require_compile_cache;
var exports2 = {};
__wakaru_require_compile_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.resolveSchema = exports2.getCompilingSchema = exports2.resolveRef = exports2.compileSchema = exports2.SchemaEnv = void 0;
var codegen_1 = require_codegen();
var validation_error_1 = require_validation_error();
var names_1 = require_names2();
var resolve_1 = require_resolve();
var util_1 = require_util16();
var validate_1 = require_validate();
var SchemaEnv = class {
    constructor(env){
        var _a18;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema2;
        if (typeof env.schema == "object") schema2 = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a18 = env.baseId) !== null && _a18 !== void 0 ? _a18 : (0, resolve_1.normalizeId)(schema2 === null || schema2 === void 0 ? void 0 : schema2[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema2 === null || schema2 === void 0 ? void 0 : schema2.$async;
        this.refs = {};
    }
};
exports2.SchemaEnv = SchemaEnv;
function compileSchema(sch) {
    const _sch = getCompilingSchema.call(this, sch);
    if (_sch) return _sch;
    const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
    const { es5, lines: lines2 } = this.opts.code;
    const { ownProperties } = this.opts;
    const gen = new codegen_1.CodeGen(this.scope, {
        es5,
        lines: lines2,
        ownProperties
    });
    let _ValidationError;
    if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
            ref: validation_error_1.default,
            code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
        });
    }
    const validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    const schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [
            names_1.default.data
        ],
        dataPathArr: [
            codegen_1.nil
        ],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
            ref: sch.schema,
            code: (0, codegen_1.stringify)(sch.schema)
        } : {
            ref: sch.schema
        }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._)`""`,
        opts: this.opts,
        self: this
    };
    let sourceCode;
    try {
        this._compilations.add(sch);
        (0, validate_1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
        if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
        const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
        const validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, {
            ref: validate
        });
        validate.errors = null;
        validate.schema = sch.schema;
        validate.schemaEnv = sch;
        if (sch.$async) validate.$async = true;
        if (this.opts.code.source === true) {
            validate.source = {
                validateName,
                validateCode,
                scopeValues: gen._values
            };
        }
        if (this.opts.unevaluated) {
            const { props, items } = schemaCxt;
            validate.evaluated = {
                props: props instanceof codegen_1.Name ? void 0 : props,
                items: items instanceof codegen_1.Name ? void 0 : items,
                dynamicProps: props instanceof codegen_1.Name,
                dynamicItems: items instanceof codegen_1.Name
            };
            if (validate.source) validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
        }
        sch.validate = validate;
        return sch;
    } catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode);
        throw e;
    } finally{
        this._compilations.delete(sch);
    }
}
exports2.compileSchema = compileSchema;
function resolveRef(root, baseId, ref) {
    var _a18;
    ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    const schOrFunc = root.refs[ref];
    if (schOrFunc) return schOrFunc;
    let _sch = resolve36.call(this, root, ref);
    if (_sch === void 0) {
        const schema2 = (_a18 = root.localRefs) === null || _a18 === void 0 ? void 0 : _a18[ref];
        const { schemaId } = this.opts;
        if (schema2) _sch = new SchemaEnv({
            schema: schema2,
            schemaId,
            root,
            baseId
        });
    }
    if (_sch === void 0) return;
    return root.refs[ref] = inlineOrCompile.call(this, _sch);
}
exports2.resolveRef = resolveRef;
function inlineOrCompile(sch) {
    if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
    return sch.validate ? sch : compileSchema.call(this, sch);
}
function getCompilingSchema(schEnv) {
    for (const sch of this._compilations){
        if (sameSchemaEnv(sch, schEnv)) return sch;
    }
}
exports2.getCompilingSchema = getCompilingSchema;
function sameSchemaEnv(s1, s22) {
    return s1.schema === s22.schema && s1.root === s22.root && s1.baseId === s22.baseId;
}
function resolve36(root, ref) {
    let sch;
    while(typeof (sch = this.refs[ref]) == "string")ref = sch;
    return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
}
function resolveSchema(root, ref) {
    const p2 = this.opts.uriResolver.parse(ref);
    const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p2);
    let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
    if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p2, root);
    }
    const id = (0, resolve_1.normalizeId)(refPath);
    const schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
        const sch = resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
        return getJsonPointer.call(this, p2, sch);
    }
    if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
    if (!schOrRef.validate) compileSchema.call(this, schOrRef);
    if (id === (0, resolve_1.normalizeId)(ref)) {
        const { schema: schema2 } = schOrRef;
        const { schemaId } = this.opts;
        const schId = schema2[schemaId];
        if (schId) baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({
            schema: schema2,
            schemaId,
            root,
            baseId
        });
    }
    return getJsonPointer.call(this, p2, schOrRef);
}
exports2.resolveSchema = resolveSchema;
var PREVENT_SCOPE_CHANGE = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
]);
function getJsonPointer(parsedRef, { baseId, schema: schema2, root }) {
    var _a18;
    if (((_a18 = parsedRef.fragment) === null || _a18 === void 0 ? void 0 : _a18[0]) !== "/") return;
    for (const part of parsedRef.fragment.slice(1).split("/")){
        if (typeof schema2 === "boolean") return;
        const partSchema = schema2[(0, util_1.unescapeFragment)(part)];
        if (partSchema === void 0) return;
        schema2 = partSchema;
        const schId = typeof schema2 === "object" && schema2[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
            baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
    }
    let env;
    if (typeof schema2 != "boolean" && schema2.$ref && !(0, util_1.schemaHasRulesButRef)(schema2, this.RULES)) {
        const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema2.$ref);
        env = resolveSchema.call(this, root, $ref);
    }
    const { schemaId } = this.opts;
    env = env || new SchemaEnv({
        schema: schema2,
        schemaId,
        root,
        baseId
    });
    if (env.schema !== env.root.schema) return env;
    return void 0;
}

return exports2;
}
