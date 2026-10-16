"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
const n = require("./module-82989.js"), o = require("./module-98018.js"), s = require("./module-12173.js"), i = require("./module-98018.js"), a = require("./module-48008.js"), l = require("./module-27695.js"), c = require("./module-69861.js"), u = require("./module-95183.js"), d = require("./module-44489.js"), p = require("./module-23237.js"), h = require("./module-79657.js"), m = require("./module-34006.js");
function f({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: o }, s) {
    o.code.es5 ? e.func(t, u._`${d.default.data}, ${d.default.valCxt}`, n.$async, ()=>{
        e.code(u._`"use strict"; ${g(r, o)}`), function(e, t) {
            e.if(d.default.valCxt, ()=>{
                e.var(d.default.instancePath, u._`${d.default.valCxt}.${d.default.instancePath}`), e.var(d.default.parentData, u._`${d.default.valCxt}.${d.default.parentData}`), e.var(d.default.parentDataProperty, u._`${d.default.valCxt}.${d.default.parentDataProperty}`), e.var(d.default.rootData, u._`${d.default.valCxt}.${d.default.rootData}`), t.dynamicRef && e.var(d.default.dynamicAnchors, u._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
            }, ()=>{
                e.var(d.default.instancePath, u._`""`), e.var(d.default.parentData, u._`undefined`), e.var(d.default.parentDataProperty, u._`undefined`), e.var(d.default.rootData, d.default.data), t.dynamicRef && e.var(d.default.dynamicAnchors, u._`{}`);
            });
        }(e, o), e.code(s);
    }) : e.func(t, u._`${d.default.data}, ${function(e) {
        return u._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e.dynamicRef ? u._`, ${d.default.dynamicAnchors}={}` : u.nil}}={}`;
    }(o)}`, n.$async, ()=>e.code(g(r, o)).code(s));
}
function g(e, t) {
    const r = "object" == typeof e && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? u._`/*# sourceURL=${r} */` : u.nil;
}
function y(e, t) {
    w(e) && (b(e), v(e)) ? function(e, t) {
        const { schema: r, gen: n, opts: o } = e;
        o.$comment && r.$comment && S(e);
        (function(e) {
            const t = e.schema[e.opts.schemaId];
            t && (e.baseId = (0, p.resolveUrl)(e.opts.uriResolver, e.baseId, t));
        })(e), function(e) {
            if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
        }(e);
        const s = n.const("_errs", d.default.errors);
        _(e, s), n.var(t, u._`${s} === ${d.default.errors}`);
    }(e, t) : (0, n.boolOrEmptySchema)(e, t);
}
function v({ schema: e, self: t }) {
    if ("boolean" == typeof e) return !e;
    for(const r in e)if (t.RULES.all[r]) return !0;
    return !1;
}
function w(e) {
    return "boolean" != typeof e.schema;
}
function b(e) {
    (0, h.checkUnknownRules)(e), function(e) {
        const { schema: t, errSchemaPath: r, opts: n, self: o } = e;
        t.$ref && n.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
    }(e);
}
function _(e, t) {
    if (e.opts.jtd) return x(e, [], !1, t);
    const r = (0, o.getSchemaTypes)(e.schema);
    x(e, r, !(0, o.coerceAndCheckDataType)(e, r), t);
}
function S({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: o }) {
    const s = r.$comment;
    if (!0 === o.$comment) e.code(u._`${d.default.self}.logger.log(${s})`);
    else if ("function" == typeof o.$comment) {
        const r = u.str`${n}/$comment`, o = e.scopeValue("root", {
            ref: t.root
        });
        e.code(u._`${d.default.self}.opts.$comment(${s}, ${r}, ${o}.schema)`);
    }
}
function x(e, t, r, n) {
    const { gen: o, schema: a, data: l, allErrors: c, opts: p, self: m } = e, { RULES: f } = m;
    function g(h) {
        (0, s.shouldUseGroup)(a, h) && (h.type ? (o.if((0, i.checkDataType)(h.type, l, p.strictNumbers)), k(e, h), 1 === t.length && t[0] === h.type && r && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : k(e, h), c || o.if(u._`${d.default.errors} === ${n || 0}`));
    }
    !a.$ref || !p.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(a, f) ? (p.jtd || function(e, t) {
        if (e.schemaEnv.meta || !e.opts.strictTypes) return;
        (function(e, t) {
            if (!t.length) return;
            if (!e.dataTypes.length) return void (e.dataTypes = t);
            t.forEach((t)=>{
                T(e.dataTypes, t) || C(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
            }), function(e, t) {
                const r = [];
                for (const n of e.dataTypes)T(t, n) ? r.push(n) : t.includes("integer") && "number" === n && r.push("integer");
                e.dataTypes = r;
            }(e, t);
        })(e, t), e.opts.allowUnionTypes || function(e, t) {
            t.length > 1 && (2 !== t.length || !t.includes("null")) && C(e, "use allowUnionTypes to allow union type keyword");
        }(e, t);
        !function(e, t) {
            const r = e.self.RULES.all;
            for(const n in r){
                const o = r[n];
                if ("object" == typeof o && (0, s.shouldUseRule)(e.schema, o)) {
                    const { type: r } = o.definition;
                    r.length && !r.some((e)=>E(t, e)) && C(e, `missing type "${r.join(",")}" for keyword "${n}"`);
                }
            }
        }(e, e.dataTypes);
    }(e, t), o.block(()=>{
        for (const e of f.rules)g(e);
        g(f.post);
    })) : o.block(()=>A(e, "$ref", f.all.$ref.definition));
}
function k(e, t) {
    const { gen: r, schema: n, opts: { useDefaults: o } } = e;
    o && (0, a.assignDefaults)(e, t.type), r.block(()=>{
        for (const r of t.rules)(0, s.shouldUseRule)(n, r) && A(e, r.keyword, r.definition, t.type);
    });
}
function E(e, t) {
    return e.includes(t) || "number" === t && e.includes("integer");
}
function T(e, t) {
    return e.includes(t) || "integer" === t && e.includes("number");
}
function C(e, t) {
    t += ` at "${e.schemaEnv.baseId + e.errSchemaPath}" (strictTypes)`, (0, h.checkStrictMode)(e, t, e.opts.strictTypes);
}
exports.validateFunctionCode = function(e) {
    w(e) && (b(e), v(e)) ? function(e) {
        const { schema: t, opts: r, gen: n } = e;
        f(e, ()=>{
            r.$comment && t.$comment && S(e), function(e) {
                const { schema: t, opts: r } = e;
                void 0 !== t.default && r.useDefaults && r.strictSchema && (0, h.checkStrictMode)(e, "default is ignored in the schema root");
            }(e), n.let(d.default.vErrors, null), n.let(d.default.errors, 0), r.unevaluated && function(e) {
                const { gen: t, validateName: r } = e;
                e.evaluated = t.const("evaluated", u._`${r}.evaluated`), t.if(u._`${e.evaluated}.dynamicProps`, ()=>t.assign(u._`${e.evaluated}.props`, u._`undefined`)), t.if(u._`${e.evaluated}.dynamicItems`, ()=>t.assign(u._`${e.evaluated}.items`, u._`undefined`));
            }(e), _(e), function(e) {
                const { gen: t, schemaEnv: r, validateName: n, ValidationError: o, opts: s } = e;
                r.$async ? t.if(u._`${d.default.errors} === 0`, ()=>t.return(d.default.data), ()=>t.throw(u._`new ${o}(${d.default.vErrors})`)) : (t.assign(u._`${n}.errors`, d.default.vErrors), s.unevaluated && function({ gen: e, evaluated: t, props: r, items: n }) {
                    r instanceof u.Name && e.assign(u._`${t}.props`, r);
                    n instanceof u.Name && e.assign(u._`${t}.items`, n);
                }(e), t.return(u._`${d.default.errors} === 0`));
            }(e);
        });
    }(e) : f(e, ()=>(0, n.topBoolOrEmptySchema)(e));
};
class I {
    constructor(e, t, r){
        if ((0, l.validateKeywordUsage)(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(e, this.schema, r, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", R(this.$data, e));
        else if (this.schemaCode = this.schemaValue, !(0, l.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
        ("code" in t ? t.trackErrors : !1 !== t.errors) && (this.errsCount = e.gen.const("_errs", d.default.errors));
    }
    result(e, t, r) {
        this.failResult((0, u.not)(e), t, r);
    }
    failResult(e, t, r) {
        this.gen.if(e), r ? r() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(e, t) {
        this.failResult((0, u.not)(e), void 0, t);
    }
    fail(e) {
        if (void 0 === e) return this.error(), void (this.allErrors || this.gen.if(!1));
        this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(e) {
        if (!this.$data) return this.fail(e);
        const { schemaCode: t } = this;
        this.fail(u._`${t} !== undefined && (${(0, u.or)(this.invalid$data(), e)})`);
    }
    error(e, t, r) {
        if (t) return this.setParams(t), this._error(e, r), void this.setParams({});
        this._error(e, r);
    }
    _error(e, t) {
        (e ? m.reportExtraError : m.reportError)(this, this.def.error, t);
    }
    $dataError() {
        (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
        if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
        (0, m.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(e) {
        this.allErrors || this.gen.if(e);
    }
    setParams(e, t) {
        t ? Object.assign(this.params, e) : this.params = e;
    }
    block$data(e, t, r = u.nil) {
        this.gen.block(()=>{
            this.check$data(e, r), t();
        });
    }
    check$data(e = u.nil, t = u.nil) {
        if (!this.$data) return;
        const { gen: r, schemaCode: n, schemaType: o, def: s } = this;
        r.if((0, u.or)(u._`${n} === undefined`, t)), e !== u.nil && r.assign(e, !0), (o.length || s.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), e !== u.nil && r.assign(e, !1)), r.else();
    }
    invalid$data() {
        const { gen: e, schemaCode: t, schemaType: r, def: n, it: o } = this;
        return (0, u.or)(function() {
            if (r.length) {
                if (!(t instanceof u.Name)) throw new Error("ajv implementation error");
                const e = Array.isArray(r) ? r : [
                    r
                ];
                return u._`${(0, i.checkDataTypes)(e, t, o.opts.strictNumbers, i.DataType.Wrong)}`;
            }
            return u.nil;
        }(), function() {
            if (n.validateSchema) {
                const r = e.scopeValue("validate$data", {
                    ref: n.validateSchema
                });
                return u._`!${r}(${t})`;
            }
            return u.nil;
        }());
    }
    subschema(e, t) {
        const r = (0, c.getSubschema)(this.it, e);
        (0, c.extendSubschemaData)(r, this.it, e), (0, c.extendSubschemaMode)(r, e);
        const n = {
            ...this.it,
            ...r,
            items: void 0,
            props: void 0
        };
        return y(n, t), n;
    }
    mergeEvaluated(e, t) {
        const { it: r, gen: n } = this;
        r.opts.unevaluated && (!0 !== r.props && void 0 !== e.props && (r.props = h.mergeEvaluated.props(n, e.props, r.props, t)), !0 !== r.items && void 0 !== e.items && (r.items = h.mergeEvaluated.items(n, e.items, r.items, t)));
    }
    mergeValidEvaluated(e, t) {
        const { it: r, gen: n } = this;
        if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items)) return n.if(t, ()=>this.mergeEvaluated(e, u.Name)), !0;
    }
}
function A(e, t, r, n) {
    const o = new I(e, r, t);
    "code" in r ? r.code(o, n) : o.$data && r.validate ? (0, l.funcKeywordCode)(o, r) : "macro" in r ? (0, l.macroKeywordCode)(o, r) : (r.compile || r.validate) && (0, l.funcKeywordCode)(o, r);
}
exports.KeywordCxt = I;
const P = /^\/(?:[^~]|~0|~1)*$/, M = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function R(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
    let o, s;
    if ("" === e) return d.default.rootData;
    if ("/" === e[0]) {
        if (!P.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
        o = e, s = d.default.rootData;
    } else {
        const i = M.exec(e);
        if (!i) throw new Error(`Invalid JSON-pointer: ${e}`);
        const a = +i[1];
        if (o = i[2], "#" === o) {
            if (a >= t) throw new Error(l("property/index", a));
            return n[t - a];
        }
        if (a > t) throw new Error(l("data", a));
        if (s = r[t - a], !o) return s;
    }
    let i = s;
    const a = o.split("/");
    for (const e of a)e && (s = u._`${s}${(0, u.getProperty)((0, h.unescapeJsonPointer)(e))}`, i = u._`${i} && ${s}`);
    return i;
    function l(e, r) {
        return `Cannot access ${e} ${r} levels up, current level is ${t}`;
    }
}
exports.getData = R;
