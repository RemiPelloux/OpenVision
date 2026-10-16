import { require_codegen } from "./compile/codegen/index.js";
import { require_compile } from "./compile/index.js";
import { require_ref_error } from "./compile/ref_error.js";
import { require_resolve } from "./compile/resolve.js";
import { require_rules } from "./compile/rules.js";
import { require_util16 } from "./compile/util.js";
import { require_dataType } from "./compile/validate/dataType.js";
import { require_validate } from "./compile/validate/index.js";
import { require_data } from "./refs/data.json";
import { require_uri } from "./runtime/uri.js";
import { require_validation_error } from "./runtime/validation_error.js";
var __wakaru_require_core2_cache;
export function require_core2() {
if (__wakaru_require_core2_cache) return __wakaru_require_core2_cache;
var exports2 = {};
__wakaru_require_core2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = void 0;
var validate_1 = require_validate();
Object.defineProperty(exports2, "KeywordCxt", {
    enumerable: true,
    get: function() {
        return validate_1.KeywordCxt;
    }
});
var codegen_1 = require_codegen();
Object.defineProperty(exports2, "_", {
    enumerable: true,
    get: function() {
        return codegen_1._;
    }
});
Object.defineProperty(exports2, "str", {
    enumerable: true,
    get: function() {
        return codegen_1.str;
    }
});
Object.defineProperty(exports2, "stringify", {
    enumerable: true,
    get: function() {
        return codegen_1.stringify;
    }
});
Object.defineProperty(exports2, "nil", {
    enumerable: true,
    get: function() {
        return codegen_1.nil;
    }
});
Object.defineProperty(exports2, "Name", {
    enumerable: true,
    get: function() {
        return codegen_1.Name;
    }
});
Object.defineProperty(exports2, "CodeGen", {
    enumerable: true,
    get: function() {
        return codegen_1.CodeGen;
    }
});
var validation_error_1 = require_validation_error();
var ref_error_1 = require_ref_error();
var rules_1 = require_rules();
var compile_1 = require_compile();
var codegen_2 = require_codegen();
var resolve_1 = require_resolve();
var dataType_1 = require_dataType();
var util_1 = require_util16();
var $dataRefSchema = require_data();
var uri_1 = require_uri();
var defaultRegExp = (str3, flags)=>new RegExp(str3, flags);
defaultRegExp.code = "new RegExp";
var META_IGNORE_OPTIONS = [
    "removeAdditional",
    "useDefaults",
    "coerceTypes"
];
var EXT_SCOPE_NAMES = new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
]);
var removedOptions = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
};
var deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
};
var MAX_EXPRESSION = 200;
function requiredOptions(o) {
    var _a18, _b2, _c, _d, _e2, _f, _g, _h, _j, _k, _l, _m, _o2, _p, _q, _r2, _s2, _t2, _u, _v, _w, _x, _y, _z, _0;
    const s3 = o.strict;
    const _optz = (_a18 = o.code) === null || _a18 === void 0 ? void 0 : _a18.optimize;
    const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
    const regExp = (_c = (_b2 = o.code) === null || _b2 === void 0 ? void 0 : _b2.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
    const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
    return {
        strictSchema: (_f = (_e2 = o.strictSchema) !== null && _e2 !== void 0 ? _e2 : s3) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s3) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s3) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s3) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o2 = o.strictRequired) !== null && _o2 !== void 0 ? _o2 : s3) !== null && _p !== void 0 ? _p : false,
        code: o.code ? {
            ...o.code,
            optimize,
            regExp
        } : {
            optimize,
            regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r2 = o.loopEnum) !== null && _r2 !== void 0 ? _r2 : MAX_EXPRESSION,
        meta: (_s2 = o.meta) !== null && _s2 !== void 0 ? _s2 : true,
        messages: (_t2 = o.messages) !== null && _t2 !== void 0 ? _t2 : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver
    };
}
var Ajv3 = class {
    constructor(opts = {}){
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = {
            ...opts,
            ...requiredOptions(opts)
        };
        const { es5, lines: lines2 } = this.opts.code;
        this.scope = new codegen_2.ValueScope({
            scope: {},
            prefixes: EXT_SCOPE_NAMES,
            es5,
            lines: lines2
        });
        this.logger = getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats) addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object") this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
    }
    _addVocabularies() {
        this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
        const { $data, meta, schemaId } = this.opts;
        let _dataRefSchema = $dataRefSchema;
        if (schemaId === "id") {
            _dataRefSchema = {
                ...$dataRefSchema
            };
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
        }
        if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
    }
    defaultMeta() {
        const { meta, schemaId } = this.opts;
        return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : void 0;
    }
    validate(schemaKeyRef, data) {
        let v2;
        if (typeof schemaKeyRef == "string") {
            v2 = this.getSchema(schemaKeyRef);
            if (!v2) throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else {
            v2 = this.compile(schemaKeyRef);
        }
        const valid = v2(data);
        if (!("$async" in v2)) this.errors = v2.errors;
        return valid;
    }
    compile(schema2, _meta) {
        const sch = this._addSchema(schema2, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
    }
    compileAsync(schema2, meta) {
        if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
        }
        const { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema2, meta);
        async function runCompileAsync(_schema, _meta) {
            await loadMetaSchema.call(this, _schema.$schema);
            const sch = this._addSchema(_schema, _meta);
            return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
            if ($ref && !this.getSchema($ref)) {
                await runCompileAsync.call(this, {
                    $ref
                }, true);
            }
        }
        async function _compileAsync(sch) {
            try {
                return this._compileSchemaEnv(sch);
            } catch (e) {
                if (!(e instanceof ref_error_1.default)) throw e;
                checkLoaded.call(this, e);
                await loadMissingSchema.call(this, e.missingSchema);
                return _compileAsync.call(this, sch);
            }
        }
        function checkLoaded({ missingSchema: ref, missingRef }) {
            if (this.refs[ref]) {
                throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
            }
        }
        async function loadMissingSchema(ref) {
            const _schema = await _loadSchema.call(this, ref);
            if (!this.refs[ref]) await loadMetaSchema.call(this, _schema.$schema);
            if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
        }
        async function _loadSchema(ref) {
            const p2 = this._loading[ref];
            if (p2) return p2;
            try {
                return await (this._loading[ref] = loadSchema(ref));
            } finally{
                delete this._loading[ref];
            }
        }
    }
    addSchema(schema2, key, _meta, _validateSchema = this.opts.validateSchema) {
        if (Array.isArray(schema2)) {
            for (const sch of schema2)this.addSchema(sch, void 0, _meta, _validateSchema);
            return this;
        }
        let id;
        if (typeof schema2 === "object") {
            const { schemaId } = this.opts;
            id = schema2[schemaId];
            if (id !== void 0 && typeof id != "string") {
                throw new Error(`schema ${schemaId} must be string`);
            }
        }
        key = (0, resolve_1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema2, _meta, key, _validateSchema, true);
        return this;
    }
    addMetaSchema(schema2, key, _validateSchema = this.opts.validateSchema) {
        this.addSchema(schema2, key, true, _validateSchema);
        return this;
    }
    validateSchema(schema2, throwOrLogError) {
        if (typeof schema2 == "boolean") return true;
        let $schema;
        $schema = schema2.$schema;
        if ($schema !== void 0 && typeof $schema != "string") {
            throw new Error("$schema must be a string");
        }
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
        }
        const valid = this.validate($schema, schema2);
        if (!valid && throwOrLogError) {
            const message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(message);
            else throw new Error(message);
        }
        return valid;
    }
    getSchema(keyRef) {
        let sch;
        while(typeof (sch = getSchEnv.call(this, keyRef)) == "string")keyRef = sch;
        if (sch === void 0) {
            const { schemaId } = this.opts;
            const root = new compile_1.SchemaEnv({
                schema: {},
                schemaId
            });
            sch = compile_1.resolveSchema.call(this, root, keyRef);
            if (!sch) return;
            this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
    }
    removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
        }
        switch(typeof schemaKeyRef){
            case "undefined":
                this._removeAllSchemas(this.schemas);
                this._removeAllSchemas(this.refs);
                this._cache.clear();
                return this;
            case "string":
                {
                    const sch = getSchEnv.call(this, schemaKeyRef);
                    if (typeof sch == "object") this._cache.delete(sch.schema);
                    delete this.schemas[schemaKeyRef];
                    delete this.refs[schemaKeyRef];
                    return this;
                }
            case "object":
                {
                    const cacheKey2 = schemaKeyRef;
                    this._cache.delete(cacheKey2);
                    let id = schemaKeyRef[this.opts.schemaId];
                    if (id) {
                        id = (0, resolve_1.normalizeId)(id);
                        delete this.schemas[id];
                        delete this.refs[id];
                    }
                    return this;
                }
            default:
                throw new Error("ajv.removeSchema: invalid parameter");
        }
    }
    addVocabulary(definitions) {
        for (const def of definitions)this.addKeyword(def);
        return this;
    }
    addKeyword(kwdOrDef, def) {
        let keyword;
        if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (typeof def == "object") {
                this.logger.warn("these parameters are deprecated, see docs for addKeyword");
                def.keyword = keyword;
            }
        } else if (typeof kwdOrDef == "object" && def === void 0) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
                throw new Error("addKeywords: keyword must be string or non-empty array");
            }
        } else {
            throw new Error("invalid addKeywords parameters");
        }
        checkKeyword.call(this, keyword, def);
        if (!def) {
            (0, util_1.eachItem)(keyword, (kwd)=>addRule.call(this, kwd));
            return this;
        }
        keywordMetaschema.call(this, def);
        const definition = {
            ...def,
            type: (0, dataType_1.getJSONTypes)(def.type),
            schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
        };
        (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k2)=>addRule.call(this, k2, definition) : (k2)=>definition.type.forEach((t)=>addRule.call(this, k2, definition, t)));
        return this;
    }
    getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
    }
    removeKeyword(keyword) {
        const { RULES } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules){
            const i = group.rules.findIndex((rule)=>rule.keyword === keyword);
            if (i >= 0) group.rules.splice(i, 1);
        }
        return this;
    }
    addFormat(name17, format2) {
        if (typeof format2 == "string") format2 = new RegExp(format2);
        this.formats[name17] = format2;
        return this;
    }
    errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
        if (!errors || errors.length === 0) return "No errors";
        return errors.map((e)=>`${dataVar}${e.instancePath} ${e.message}`).reduce((text4, msg)=>text4 + separator + msg);
    }
    $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers){
            const segments = jsonPointer.split("/").slice(1);
            let keywords = metaSchema;
            for (const seg of segments)keywords = keywords[seg];
            for(const key in rules){
                const rule = rules[key];
                if (typeof rule != "object") continue;
                const { $data } = rule.definition;
                const schema2 = keywords[key];
                if ($data && schema2) keywords[key] = schemaOrData(schema2);
            }
        }
        return metaSchema;
    }
    _removeAllSchemas(schemas, regex) {
        for(const keyRef in schemas){
            const sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
                if (typeof sch == "string") {
                    delete schemas[keyRef];
                } else if (sch && !sch.meta) {
                    this._cache.delete(sch.schema);
                    delete schemas[keyRef];
                }
            }
        }
    }
    _addSchema(schema2, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId } = this.opts;
        if (typeof schema2 == "object") {
            id = schema2[schemaId];
        } else {
            if (this.opts.jtd) throw new Error("schema must be object");
            else if (typeof schema2 != "boolean") throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema2);
        if (sch !== void 0) return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        const localRefs = resolve_1.getSchemaRefs.call(this, schema2, baseId);
        sch = new compile_1.SchemaEnv({
            schema: schema2,
            schemaId,
            meta,
            baseId,
            localRefs
        });
        this._cache.set(sch.schema, sch);
        if (addSchema && !baseId.startsWith("#")) {
            if (baseId) this._checkUnique(baseId);
            this.refs[baseId] = sch;
        }
        if (validateSchema) this.validateSchema(schema2, true);
        return sch;
    }
    _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) {
            throw new Error(`schema with key or id "${id}" already exists`);
        }
    }
    _compileSchemaEnv(sch) {
        if (sch.meta) this._compileMetaSchema(sch);
        else compile_1.compileSchema.call(this, sch);
        if (!sch.validate) throw new Error("ajv implementation error");
        return sch.validate;
    }
    _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
            compile_1.compileSchema.call(this, sch);
        } finally{
            this.opts = currentOpts;
        }
    }
};
Ajv3.ValidationError = validation_error_1.default;
Ajv3.MissingRefError = ref_error_1.default;
exports2.default = Ajv3;
function checkOptions(checkOpts, options2, msg, log5 = "error") {
    for(const key in checkOpts){
        const opt = key;
        if (opt in options2) this.logger[log5](`${msg}: option ${key}. ${checkOpts[opt]}`);
    }
}
function getSchEnv(keyRef) {
    keyRef = (0, resolve_1.normalizeId)(keyRef);
    return this.schemas[keyRef] || this.refs[keyRef];
}
function addInitialSchemas() {
    const optsSchemas = this.opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);
    else for(const key in optsSchemas)this.addSchema(optsSchemas[key], key);
}
function addInitialFormats() {
    for(const name17 in this.opts.formats){
        const format2 = this.opts.formats[name17];
        if (format2) this.addFormat(name17, format2);
    }
}
function addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for(const keyword in defs){
        const def = defs[keyword];
        if (!def.keyword) def.keyword = keyword;
        this.addKeyword(def);
    }
}
function getMetaSchemaOptions() {
    const metaOpts = {
        ...this.opts
    };
    for (const opt of META_IGNORE_OPTIONS)delete metaOpts[opt];
    return metaOpts;
}
var noLogs = {
    log () {},
    warn () {},
    error () {}
};
function getLogger(logger146) {
    if (logger146 === false) return noLogs;
    if (logger146 === void 0) return console;
    if (logger146.log && logger146.warn && logger146.error) return logger146;
    throw new Error("logger must implement log, warn and error methods");
}
var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
function checkKeyword(keyword, def) {
    const { RULES } = this;
    (0, util_1.eachItem)(keyword, (kwd)=>{
        if (RULES.keywords[kwd]) throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd)) throw new Error(`Keyword ${kwd} has invalid name`);
    });
    if (!def) return;
    if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
    }
}
function addRule(keyword, definition, dataType) {
    var _a18;
    const post = definition === null || definition === void 0 ? void 0 : definition.post;
    if (dataType && post) throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES } = this;
    let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t })=>t === dataType);
    if (!ruleGroup) {
        ruleGroup = {
            type: dataType,
            rules: []
        };
        RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword] = true;
    if (!definition) return;
    const rule = {
        keyword,
        definition: {
            ...definition,
            type: (0, dataType_1.getJSONTypes)(definition.type),
            schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        }
    };
    if (definition.before) addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else ruleGroup.rules.push(rule);
    RULES.all[keyword] = rule;
    (_a18 = definition.implements) === null || _a18 === void 0 ? void 0 : _a18.forEach((kwd)=>this.addKeyword(kwd));
}
function addBeforeRule(ruleGroup, rule, before) {
    const i = ruleGroup.rules.findIndex((_rule)=>_rule.keyword === before);
    if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
    } else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
    }
}
function keywordMetaschema(def) {
    let { metaSchema } = def;
    if (metaSchema === void 0) return;
    if (def.$data && this.opts.$data) metaSchema = schemaOrData(metaSchema);
    def.validateSchema = this.compile(metaSchema, true);
}
var $dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
};
function schemaOrData(schema2) {
    return {
        anyOf: [
            schema2,
            $dataRef
        ]
    };
}

return exports2;
}
