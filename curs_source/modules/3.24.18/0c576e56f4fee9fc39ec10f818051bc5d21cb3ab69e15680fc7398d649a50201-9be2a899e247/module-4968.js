"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
var n = require("./module-1188.js");
Object.defineProperty(exports, "KeywordCxt", {
    enumerable: !0,
    get: function() {
        return n.KeywordCxt;
    }
});
var o = require("./module-5183.js");
Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function() {
        return o._;
    }
}), Object.defineProperty(exports, "str", {
    enumerable: !0,
    get: function() {
        return o.str;
    }
}), Object.defineProperty(exports, "stringify", {
    enumerable: !0,
    get: function() {
        return o.stringify;
    }
}), Object.defineProperty(exports, "nil", {
    enumerable: !0,
    get: function() {
        return o.nil;
    }
}), Object.defineProperty(exports, "Name", {
    enumerable: !0,
    get: function() {
        return o.Name;
    }
}), Object.defineProperty(exports, "CodeGen", {
    enumerable: !0,
    get: function() {
        return o.CodeGen;
    }
});
const s = require("./module-8532.js"), i = require("./module-4989.js"), a = require("./module-8758.js"), c = require("./module-6257.js"), u = require("./module-5183.js"), l = require("./module-3237.js"), d = require("./module-8018.js"), p = require("./module-9657.js"), f = require("./module-3411.js"), h = require("./module-7902.js"), m = (e, t)=>new RegExp(e, t);
m.code = "new RegExp";
const g = [
    "removeAdditional",
    "useDefaults",
    "coerceTypes"
], y = new Set([
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
]), _ = {
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
}, v = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
};
function w(e) {
    var t, r, n, o, s, i, a, c, u, l, d, p, f, g, y, _, v, w, b, S, k, E, x, T, O;
    const P = e.strict, I = null === (t = e.code) || void 0 === t ? void 0 : t.optimize, C = !0 === I || void 0 === I ? 1 : I || 0, A = null !== (n = null === (r = e.code) || void 0 === r ? void 0 : r.regExp) && void 0 !== n ? n : m, $ = null !== (o = e.uriResolver) && void 0 !== o ? o : h.default;
    return {
        strictSchema: null === (i = null !== (s = e.strictSchema) && void 0 !== s ? s : P) || void 0 === i || i,
        strictNumbers: null === (c = null !== (a = e.strictNumbers) && void 0 !== a ? a : P) || void 0 === c || c,
        strictTypes: null !== (l = null !== (u = e.strictTypes) && void 0 !== u ? u : P) && void 0 !== l ? l : "log",
        strictTuples: null !== (p = null !== (d = e.strictTuples) && void 0 !== d ? d : P) && void 0 !== p ? p : "log",
        strictRequired: null !== (g = null !== (f = e.strictRequired) && void 0 !== f ? f : P) && void 0 !== g && g,
        code: e.code ? {
            ...e.code,
            optimize: C,
            regExp: A
        } : {
            optimize: C,
            regExp: A
        },
        loopRequired: null !== (y = e.loopRequired) && void 0 !== y ? y : 200,
        loopEnum: null !== (_ = e.loopEnum) && void 0 !== _ ? _ : 200,
        meta: null === (v = e.meta) || void 0 === v || v,
        messages: null === (w = e.messages) || void 0 === w || w,
        inlineRefs: null === (b = e.inlineRefs) || void 0 === b || b,
        schemaId: null !== (S = e.schemaId) && void 0 !== S ? S : "$id",
        addUsedSchema: null === (k = e.addUsedSchema) || void 0 === k || k,
        validateSchema: null === (E = e.validateSchema) || void 0 === E || E,
        validateFormats: null === (x = e.validateFormats) || void 0 === x || x,
        unicodeRegExp: null === (T = e.unicodeRegExp) || void 0 === T || T,
        int32range: null === (O = e.int32range) || void 0 === O || O,
        uriResolver: $
    };
}
class b {
    constructor(e = {}){
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, this._loading = {}, this._cache = new Map, e = this.opts = {
            ...e,
            ...w(e)
        };
        const { es5: t, lines: r } = this.opts.code;
        this.scope = new u.ValueScope({
            scope: {},
            prefixes: y,
            es5: t,
            lines: r
        }), this.logger = function(e) {
            if (!1 === e) return P;
            if (void 0 === e) return console;
            if (e.log && e.warn && e.error) return e;
            throw new Error("logger must implement log, warn and error methods");
        }(e.logger);
        const n = e.validateFormats;
        e.validateFormats = !1, this.RULES = (0, a.getRules)(), S.call(this, _, e, "NOT SUPPORTED"), S.call(this, v, e, "DEPRECATED", "warn"), this._metaOpts = O.call(this), e.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && T.call(this, e.keywords), "object" == typeof e.meta && this.addMetaSchema(e.meta), E.call(this), e.validateFormats = n;
    }
    _addVocabularies() {
        this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
        const { $data: e, meta: t, schemaId: r } = this.opts;
        let n = f;
        "id" === r && (n = {
            ...f
        }, n.id = n.$id, delete n.$id), t && e && this.addMetaSchema(n, n[r], !1);
    }
    defaultMeta() {
        const { meta: e, schemaId: t } = this.opts;
        return this.opts.defaultMeta = "object" == typeof e ? e[t] || e : void 0;
    }
    validate(e, t) {
        let r;
        if ("string" == typeof e) {
            if (r = this.getSchema(e), !r) throw new Error(`no schema with key or ref "${e}"`);
        } else r = this.compile(e);
        const n = r(t);
        return "$async" in r || (this.errors = r.errors), n;
    }
    compile(e, t) {
        const r = this._addSchema(e, t);
        return r.validate || this._compileSchemaEnv(r);
    }
    compileAsync(e, t) {
        if ("function" != typeof this.opts.loadSchema) throw new Error("options.loadSchema should be a function");
        const { loadSchema: r } = this.opts;
        return n.call(this, e, t);
        async function n(e, t) {
            await o.call(this, e.$schema);
            const r = this._addSchema(e, t);
            return r.validate || s.call(this, r);
        }
        async function o(e) {
            e && !this.getSchema(e) && await n.call(this, {
                $ref: e
            }, !0);
        }
        async function s(e) {
            try {
                return this._compileSchemaEnv(e);
            } catch (t) {
                if (!(t instanceof i.default)) throw t;
                return a.call(this, t), await c.call(this, t.missingSchema), s.call(this, e);
            }
        }
        function a({ missingSchema: e, missingRef: t }) {
            if (this.refs[e]) throw new Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
        }
        async function c(e) {
            const r = await u.call(this, e);
            this.refs[e] || await o.call(this, r.$schema), this.refs[e] || this.addSchema(r, e, t);
        }
        async function u(e) {
            const t = this._loading[e];
            if (t) return t;
            try {
                return await (this._loading[e] = r(e));
            } finally{
                delete this._loading[e];
            }
        }
    }
    addSchema(e, t, r, n = this.opts.validateSchema) {
        if (Array.isArray(e)) {
            for (const t of e)this.addSchema(t, void 0, r, n);
            return this;
        }
        let o;
        if ("object" == typeof e) {
            const { schemaId: t } = this.opts;
            if (o = e[t], void 0 !== o && "string" != typeof o) throw new Error(`schema ${t} must be string`);
        }
        return t = (0, l.normalizeId)(t || o), this._checkUnique(t), this.schemas[t] = this._addSchema(e, r, t, n, !0), this;
    }
    addMetaSchema(e, t, r = this.opts.validateSchema) {
        return this.addSchema(e, t, !0, r), this;
    }
    validateSchema(e, t) {
        if ("boolean" == typeof e) return !0;
        let r;
        if (r = e.$schema, void 0 !== r && "string" != typeof r) throw new Error("$schema must be a string");
        if (r = r || this.opts.defaultMeta || this.defaultMeta(), !r) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const n = this.validate(r, e);
        if (!n && t) {
            const e = "schema is invalid: " + this.errorsText();
            if ("log" !== this.opts.validateSchema) throw new Error(e);
            this.logger.error(e);
        }
        return n;
    }
    getSchema(e) {
        let t;
        for(; "string" == typeof (t = k.call(this, e));)e = t;
        if (void 0 === t) {
            const { schemaId: r } = this.opts, n = new c.SchemaEnv({
                schema: {},
                schemaId: r
            });
            if (t = c.resolveSchema.call(this, n, e), !t) return;
            this.refs[e] = t;
        }
        return t.validate || this._compileSchemaEnv(t);
    }
    removeSchema(e) {
        if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
        switch(typeof e){
            case "undefined":
                return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
            case "string":
                {
                    const t = k.call(this, e);
                    return "object" == typeof t && this._cache.delete(t.schema), delete this.schemas[e], delete this.refs[e], this;
                }
            case "object":
                {
                    const t = e;
                    this._cache.delete(t);
                    let r = e[this.opts.schemaId];
                    return r && (r = (0, l.normalizeId)(r), delete this.schemas[r], delete this.refs[r]), this;
                }
            default:
                throw new Error("ajv.removeSchema: invalid parameter");
        }
    }
    addVocabulary(e) {
        for (const t of e)this.addKeyword(t);
        return this;
    }
    addKeyword(e, t) {
        let r;
        if ("string" == typeof e) r = e, "object" == typeof t && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = r);
        else {
            if ("object" != typeof e || void 0 !== t) throw new Error("invalid addKeywords parameters");
            if (r = (t = e).keyword, Array.isArray(r) && !r.length) throw new Error("addKeywords: keyword must be string or non-empty array");
        }
        if (C.call(this, r, t), !t) return (0, p.eachItem)(r, (e)=>A.call(this, e)), this;
        R.call(this, t);
        const n = {
            ...t,
            type: (0, d.getJSONTypes)(t.type),
            schemaType: (0, d.getJSONTypes)(t.schemaType)
        };
        return (0, p.eachItem)(r, 0 === n.type.length ? (e)=>A.call(this, e, n) : (e)=>n.type.forEach((t)=>A.call(this, e, n, t))), this;
    }
    getKeyword(e) {
        const t = this.RULES.all[e];
        return "object" == typeof t ? t.definition : !!t;
    }
    removeKeyword(e) {
        const { RULES: t } = this;
        delete t.keywords[e], delete t.all[e];
        for (const r of t.rules){
            const t = r.rules.findIndex((t)=>t.keyword === e);
            t >= 0 && r.rules.splice(t, 1);
        }
        return this;
    }
    addFormat(e, t) {
        return "string" == typeof t && (t = new RegExp(t)), this.formats[e] = t, this;
    }
    errorsText(e = this.errors, { separator: t = ", ", dataVar: r = "data" } = {}) {
        return e && 0 !== e.length ? e.map((e)=>`${r}${e.instancePath} ${e.message}`).reduce((e, r)=>e + t + r) : "No errors";
    }
    $dataMetaSchema(e, t) {
        const r = this.RULES.all;
        e = JSON.parse(JSON.stringify(e));
        for (const n of t){
            const t = n.split("/").slice(1);
            let o = e;
            for (const e of t)o = o[e];
            for(const e in r){
                const t = r[e];
                if ("object" != typeof t) continue;
                const { $data: n } = t.definition, s = o[e];
                n && s && (o[e] = M(s));
            }
        }
        return e;
    }
    _removeAllSchemas(e, t) {
        for(const r in e){
            const n = e[r];
            t && !t.test(r) || ("string" == typeof n ? delete e[r] : n && !n.meta && (this._cache.delete(n.schema), delete e[r]));
        }
    }
    _addSchema(e, t, r, n = this.opts.validateSchema, o = this.opts.addUsedSchema) {
        let s;
        const { schemaId: i } = this.opts;
        if ("object" == typeof e) s = e[i];
        else {
            if (this.opts.jtd) throw new Error("schema must be object");
            if ("boolean" != typeof e) throw new Error("schema must be object or boolean");
        }
        let a = this._cache.get(e);
        if (void 0 !== a) return a;
        r = (0, l.normalizeId)(s || r);
        const u = l.getSchemaRefs.call(this, e, r);
        return a = new c.SchemaEnv({
            schema: e,
            schemaId: i,
            meta: t,
            baseId: r,
            localRefs: u
        }), this._cache.set(a.schema, a), o && !r.startsWith("#") && (r && this._checkUnique(r), this.refs[r] = a), n && this.validateSchema(e, !0), a;
    }
    _checkUnique(e) {
        if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`);
    }
    _compileSchemaEnv(e) {
        if (e.meta ? this._compileMetaSchema(e) : c.compileSchema.call(this, e), !e.validate) throw new Error("ajv implementation error");
        return e.validate;
    }
    _compileMetaSchema(e) {
        const t = this.opts;
        this.opts = this._metaOpts;
        try {
            c.compileSchema.call(this, e);
        } finally{
            this.opts = t;
        }
    }
}
function S(e, t, r, n = "error") {
    for(const o in e){
        const s = o;
        s in t && this.logger[n](`${r}: option ${o}. ${e[s]}`);
    }
}
function k(e) {
    return e = (0, l.normalizeId)(e), this.schemas[e] || this.refs[e];
}
function E() {
    const e = this.opts.schemas;
    if (e) if (Array.isArray(e)) this.addSchema(e);
    else for(const t in e)this.addSchema(e[t], t);
}
function x() {
    for(const e in this.opts.formats){
        const t = this.opts.formats[e];
        t && this.addFormat(e, t);
    }
}
function T(e) {
    if (Array.isArray(e)) this.addVocabulary(e);
    else {
        this.logger.warn("keywords option as map is deprecated, pass array");
        for(const t in e){
            const r = e[t];
            r.keyword || (r.keyword = t), this.addKeyword(r);
        }
    }
}
function O() {
    const e = {
        ...this.opts
    };
    for (const t of g)delete e[t];
    return e;
}
b.ValidationError = s.default, b.MissingRefError = i.default, exports.default = b;
const P = {
    log () {},
    warn () {},
    error () {}
};
const I = /^[a-z_$][a-z0-9_$:-]*$/i;
function C(e, t) {
    const { RULES: r } = this;
    if ((0, p.eachItem)(e, (e)=>{
        if (r.keywords[e]) throw new Error(`Keyword ${e} is already defined`);
        if (!I.test(e)) throw new Error(`Keyword ${e} has invalid name`);
    }), t && t.$data && !("code" in t) && !("validate" in t)) throw new Error('$data keyword must have "code" or "validate" function');
}
function A(e, t, r) {
    var n;
    const o = null == t ? void 0 : t.post;
    if (r && o) throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: s } = this;
    let i = o ? s.post : s.rules.find(({ type: e })=>e === r);
    if (i || (i = {
        type: r,
        rules: []
    }, s.rules.push(i)), s.keywords[e] = !0, !t) return;
    const a = {
        keyword: e,
        definition: {
            ...t,
            type: (0, d.getJSONTypes)(t.type),
            schemaType: (0, d.getJSONTypes)(t.schemaType)
        }
    };
    t.before ? $.call(this, i, a, t.before) : i.rules.push(a), s.all[e] = a, null === (n = t.implements) || void 0 === n || n.forEach((e)=>this.addKeyword(e));
}
function $(e, t, r) {
    const n = e.rules.findIndex((e)=>e.keyword === r);
    n >= 0 ? e.rules.splice(n, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${r} is not defined`));
}
function R(e) {
    let { metaSchema: t } = e;
    void 0 !== t && (e.$data && this.opts.$data && (t = M(t)), e.validateSchema = this.compile(t, !0));
}
const N = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
};
function M(e) {
    return {
        anyOf: [
            e,
            N
        ]
    };
}
