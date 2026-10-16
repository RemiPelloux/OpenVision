"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
const n = require("./module-95183.js"), o = require("./module-98532.js"), s = require("./module-44489.js"), i = require("./module-23237.js"), a = require("./module-79657.js"), l = require("./module-21188.js");
class c {
    constructor(e){
        var t;
        let r;
        this.refs = {}, this.dynamicAnchors = {}, "object" == typeof e.schema && (r = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = null !== (t = e.baseId) && void 0 !== t ? t : (0, i.normalizeId)(null == r ? void 0 : r[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = null == r ? void 0 : r.$async, this.refs = {};
    }
}
function u(e) {
    const t = p.call(this, e);
    if (t) return t;
    const r = (0, i.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: a, lines: c } = this.opts.code, { ownProperties: u } = this.opts, d = new n.CodeGen(this.scope, {
        es5: a,
        lines: c,
        ownProperties: u
    });
    let h;
    e.$async && (h = d.scopeValue("Error", {
        ref: o.default,
        code: n._`require("ajv/dist/runtime/validation_error").default`
    }));
    const m = d.scopeName("validate");
    e.validateName = m;
    const f = {
        gen: d,
        allErrors: this.opts.allErrors,
        data: s.default.data,
        parentData: s.default.parentData,
        parentDataProperty: s.default.parentDataProperty,
        dataNames: [
            s.default.data
        ],
        dataPathArr: [
            n.nil
        ],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set,
        topSchemaRef: d.scopeValue("schema", !0 === this.opts.code.source ? {
            ref: e.schema,
            code: (0, n.stringify)(e.schema)
        } : {
            ref: e.schema
        }),
        validateName: m,
        ValidationError: h,
        schema: e.schema,
        schemaEnv: e,
        rootId: r,
        baseId: e.baseId || r,
        schemaPath: n.nil,
        errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: n._`""`,
        opts: this.opts,
        self: this
    };
    let g;
    try {
        this._compilations.add(e), (0, l.validateFunctionCode)(f), d.optimize(this.opts.code.optimize);
        const t = d.toString();
        g = `${d.scopeRefs(s.default.scope)}return ${t}`, this.opts.code.process && (g = this.opts.code.process(g, e));
        const r = new Function(`${s.default.self}`, `${s.default.scope}`, g)(this, this.scope.get());
        if (this.scope.value(m, {
            ref: r
        }), r.errors = null, r.schema = e.schema, r.schemaEnv = e, e.$async && (r.$async = !0), !0 === this.opts.code.source && (r.source = {
            validateName: m,
            validateCode: t,
            scopeValues: d._values
        }), this.opts.unevaluated) {
            const { props: e, items: t } = f;
            r.evaluated = {
                props: e instanceof n.Name ? void 0 : e,
                items: t instanceof n.Name ? void 0 : t,
                dynamicProps: e instanceof n.Name,
                dynamicItems: t instanceof n.Name
            }, r.source && (r.source.evaluated = (0, n.stringify)(r.evaluated));
        }
        return e.validate = r, e;
    } catch (t) {
        throw delete e.validate, delete e.validateName, g && this.logger.error("Error compiling schema, function code:", g), t;
    } finally{
        this._compilations.delete(e);
    }
}
function d(e) {
    return (0, i.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : u.call(this, e);
}
function p(e) {
    for (const t of this._compilations)if (h(t, e)) return t;
}
function h(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function m(e, t) {
    let r;
    for(; "string" == typeof (r = this.refs[t]);)t = r;
    return r || this.schemas[t] || f.call(this, e, t);
}
function f(e, t) {
    const r = this.opts.uriResolver.parse(t), n = (0, i._getFullPath)(this.opts.uriResolver, r);
    let o = (0, i.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && n === o) return y.call(this, r, e);
    const s = (0, i.normalizeId)(n), a = this.refs[s] || this.schemas[s];
    if ("string" == typeof a) {
        const t = f.call(this, e, a);
        if ("object" != typeof (null == t ? void 0 : t.schema)) return;
        return y.call(this, r, t);
    }
    if ("object" == typeof (null == a ? void 0 : a.schema)) {
        if (a.validate || u.call(this, a), s === (0, i.normalizeId)(t)) {
            const { schema: t } = a, { schemaId: r } = this.opts, n = t[r];
            return n && (o = (0, i.resolveUrl)(this.opts.uriResolver, o, n)), new c({
                schema: t,
                schemaId: r,
                root: e,
                baseId: o
            });
        }
        return y.call(this, r, a);
    }
}
exports.SchemaEnv = c, exports.compileSchema = u, exports.resolveRef = function(e, t, r) {
    var n;
    r = (0, i.resolveUrl)(this.opts.uriResolver, t, r);
    const o = e.refs[r];
    if (o) return o;
    let s = m.call(this, e, r);
    if (void 0 === s) {
        const o = null === (n = e.localRefs) || void 0 === n ? void 0 : n[r], { schemaId: i } = this.opts;
        o && (s = new c({
            schema: o,
            schemaId: i,
            root: e,
            baseId: t
        }));
    }
    return void 0 !== s ? e.refs[r] = d.call(this, s) : void 0;
}, exports.getCompilingSchema = p, exports.resolveSchema = f;
const g = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
]);
function y(e, { baseId: t, schema: r, root: n }) {
    var o;
    if ("/" !== (null === (o = e.fragment) || void 0 === o ? void 0 : o[0])) return;
    for (const n of e.fragment.slice(1).split("/")){
        if ("boolean" == typeof r) return;
        const e = r[(0, a.unescapeFragment)(n)];
        if (void 0 === e) return;
        const o = "object" == typeof (r = e) && r[this.opts.schemaId];
        !g.has(n) && o && (t = (0, i.resolveUrl)(this.opts.uriResolver, t, o));
    }
    let s;
    if ("boolean" != typeof r && r.$ref && !(0, a.schemaHasRulesButRef)(r, this.RULES)) {
        const e = (0, i.resolveUrl)(this.opts.uriResolver, t, r.$ref);
        s = f.call(this, n, e);
    }
    const { schemaId: l } = this.opts;
    return s = s || new c({
        schema: r,
        schemaId: l,
        root: n,
        baseId: t
    }), s.schema !== s.root.schema ? s : void 0;
}
