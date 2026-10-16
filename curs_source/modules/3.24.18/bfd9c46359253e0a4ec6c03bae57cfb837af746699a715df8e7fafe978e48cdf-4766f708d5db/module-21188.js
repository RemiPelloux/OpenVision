"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
const n = require("./module-82989.js"), s = require("./module-98018.js"), o = require("./module-12173.js"), i = require("./module-98018.js"), a = require("./module-48008.js"), c = require("./module-27695.js"), l = require("./module-69861.js"), u = require("./module-95183.js"), d = require("./module-44489.js"), p = require("./module-23237.js"), m = require("./module-79657.js"), h = require("./module-34006.js");
function f({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: s }, o) {
    s.code.es5 ? e.func(t, u._`${d.default.data}, ${d.default.valCxt}`, n.$async, ()=>{
        e.code(u._`"use strict"; ${g(r, s)}`), function(e, t) {
            e.if(d.default.valCxt, ()=>{
                e.var(d.default.instancePath, u._`${d.default.valCxt}.${d.default.instancePath}`), e.var(d.default.parentData, u._`${d.default.valCxt}.${d.default.parentData}`), e.var(d.default.parentDataProperty, u._`${d.default.valCxt}.${d.default.parentDataProperty}`), e.var(d.default.rootData, u._`${d.default.valCxt}.${d.default.rootData}`), t.dynamicRef && e.var(d.default.dynamicAnchors, u._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
            }, ()=>{
                e.var(d.default.instancePath, u._`""`), e.var(d.default.parentData, u._`undefined`), e.var(d.default.parentDataProperty, u._`undefined`), e.var(d.default.rootData, d.default.data), t.dynamicRef && e.var(d.default.dynamicAnchors, u._`{}`);
            });
        }(e, s), e.code(o);
    }) : e.func(t, u._`${d.default.data}, ${function(e) {
        return u._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e.dynamicRef ? u._`, ${d.default.dynamicAnchors}={}` : u.nil}}={}`;
    }(s)}`, n.$async, ()=>e.code(g(r, s)).code(o));
}
function g(e, t) {
    const r = "object" == typeof e && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? u._`/*# sourceURL=${r} */` : u.nil;
}
function y(e, t) {
    v(e) && (_(e), w(e)) ? function(e, t) {
        const { schema: r, gen: n, opts: s } = e;
        s.$comment && r.$comment && S(e);
        (function(e) {
            const t = e.schema[e.opts.schemaId];
            t && (e.baseId = (0, p.resolveUrl)(e.opts.uriResolver, e.baseId, t));
        })(e), function(e) {
            if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
        }(e);
        const o = n.const("_errs", d.default.errors);
        b(e, o), n.var(t, u._`${o} === ${d.default.errors}`);
    }(e, t) : (0, n.boolOrEmptySchema)(e, t);
}
function w({ schema: e, self: t }) {
    if ("boolean" == typeof e) return !e;
    for(const r in e)if (t.RULES.all[r]) return !0;
    return !1;
}
function v(e) {
    return "boolean" != typeof e.schema;
}
function _(e) {
    (0, m.checkUnknownRules)(e), function(e) {
        const { schema: t, errSchemaPath: r, opts: n, self: s } = e;
        t.$ref && n.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(t, s.RULES) && s.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
    }(e);
}
function b(e, t) {
    if (e.opts.jtd) return k(e, [], !1, t);
    const r = (0, s.getSchemaTypes)(e.schema);
    k(e, r, !(0, s.coerceAndCheckDataType)(e, r), t);
}
function S({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: s }) {
    const o = r.$comment;
    if (!0 === s.$comment) e.code(u._`${d.default.self}.logger.log(${o})`);
    else if ("function" == typeof s.$comment) {
        const r = u.str`${n}/$comment`, s = e.scopeValue("root", {
            ref: t.root
        });
        e.code(u._`${d.default.self}.opts.$comment(${o}, ${r}, ${s}.schema)`);
    }
}
function k(e, t, r, n) {
    const { gen: s, schema: a, data: c, allErrors: l, opts: p, self: h } = e, { RULES: f } = h;
    function g(m) {
        (0, o.shouldUseGroup)(a, m) && (m.type ? (s.if((0, i.checkDataType)(m.type, c, p.strictNumbers)), x(e, m), 1 === t.length && t[0] === m.type && r && (s.else(), (0, i.reportTypeError)(e)), s.endIf()) : x(e, m), l || s.if(u._`${d.default.errors} === ${n || 0}`));
    }
    !a.$ref || !p.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(a, f) ? (p.jtd || function(e, t) {
        if (e.schemaEnv.meta || !e.opts.strictTypes) return;
        (function(e, t) {
            if (!t.length) return;
            if (!e.dataTypes.length) return void (e.dataTypes = t);
            t.forEach((t)=>{
                I(e.dataTypes, t) || T(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
            }), function(e, t) {
                const r = [];
                for (const n of e.dataTypes)I(t, n) ? r.push(n) : t.includes("integer") && "number" === n && r.push("integer");
                e.dataTypes = r;
            }(e, t);
        })(e, t), e.opts.allowUnionTypes || function(e, t) {
            t.length > 1 && (2 !== t.length || !t.includes("null")) && T(e, "use allowUnionTypes to allow union type keyword");
        }(e, t);
        !function(e, t) {
            const r = e.self.RULES.all;
            for(const n in r){
                const s = r[n];
                if ("object" == typeof s && (0, o.shouldUseRule)(e.schema, s)) {
                    const { type: r } = s.definition;
                    r.length && !r.some((e)=>E(t, e)) && T(e, `missing type "${r.join(",")}" for keyword "${n}"`);
                }
            }
        }(e, e.dataTypes);
    }(e, t), s.block(()=>{
        for (const e of f.rules)g(e);
        g(f.post);
    })) : s.block(()=>P(e, "$ref", f.all.$ref.definition));
}
function x(e, t) {
    const { gen: r, schema: n, opts: { useDefaults: s } } = e;
    s && (0, a.assignDefaults)(e, t.type), r.block(()=>{
        for (const r of t.rules)(0, o.shouldUseRule)(n, r) && P(e, r.keyword, r.definition, t.type);
    });
}
function E(e, t) {
    return e.includes(t) || "number" === t && e.includes("integer");
}
function I(e, t) {
    return e.includes(t) || "integer" === t && e.includes("number");
}
function T(e, t) {
    t += ` at "${e.schemaEnv.baseId + e.errSchemaPath}" (strictTypes)`, (0, m.checkStrictMode)(e, t, e.opts.strictTypes);
}
exports.validateFunctionCode = function(e) {
    v(e) && (_(e), w(e)) ? function(e) {
        const { schema: t, opts: r, gen: n } = e;
        f(e, ()=>{
            r.$comment && t.$comment && S(e), function(e) {
                const { schema: t, opts: r } = e;
                void 0 !== t.default && r.useDefaults && r.strictSchema && (0, m.checkStrictMode)(e, "default is ignored in the schema root");
            }(e), n.let(d.default.vErrors, null), n.let(d.default.errors, 0), r.unevaluated && function(e) {
                const { gen: t, validateName: r } = e;
                e.evaluated = t.const("evaluated", u._`${r}.evaluated`), t.if(u._`${e.evaluated}.dynamicProps`, ()=>t.assign(u._`${e.evaluated}.props`, u._`undefined`)), t.if(u._`${e.evaluated}.dynamicItems`, ()=>t.assign(u._`${e.evaluated}.items`, u._`undefined`));
            }(e), b(e), function(e) {
                const { gen: t, schemaEnv: r, validateName: n, ValidationError: s, opts: o } = e;
                r.$async ? t.if(u._`${d.default.errors} === 0`, ()=>t.return(d.default.data), ()=>t.throw(u._`new ${s}(${d.default.vErrors})`)) : (t.assign(u._`${n}.errors`, d.default.vErrors), o.unevaluated && function({ gen: e, evaluated: t, props: r, items: n }) {
                    r instanceof u.Name && e.assign(u._`${t}.props`, r);
                    n instanceof u.Name && e.assign(u._`${t}.items`, n);
                }(e), t.return(u._`${d.default.errors} === 0`));
            }(e);
        });
    }(e) : f(e, ()=>(0, n.topBoolOrEmptySchema)(e));
};
class C {
    constructor(e, t, r){
        if ((0, c.validateKeywordUsage)(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(e, this.schema, r, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", M(this.$data, e));
        else if (this.schemaCode = this.schemaValue, !(0, c.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
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
        (e ? h.reportExtraError : h.reportError)(this, this.def.error, t);
    }
    $dataError() {
        (0, h.reportError)(this, this.def.$dataError || h.keyword$DataError);
    }
    reset() {
        if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
        (0, h.resetErrorsCount)(this.gen, this.errsCount);
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
        const { gen: r, schemaCode: n, schemaType: s, def: o } = this;
        r.if((0, u.or)(u._`${n} === undefined`, t)), e !== u.nil && r.assign(e, !0), (s.length || o.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), e !== u.nil && r.assign(e, !1)), r.else();
    }
    invalid$data() {
        const { gen: e, schemaCode: t, schemaType: r, def: n, it: s } = this;
        return (0, u.or)(function() {
            if (r.length) {
                if (!(t instanceof u.Name)) throw new Error("ajv implementation error");
                const e = Array.isArray(r) ? r : [
                    r
                ];
                return u._`${(0, i.checkDataTypes)(e, t, s.opts.strictNumbers, i.DataType.Wrong)}`;
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
        const r = (0, l.getSubschema)(this.it, e);
        (0, l.extendSubschemaData)(r, this.it, e), (0, l.extendSubschemaMode)(r, e);
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
        r.opts.unevaluated && (!0 !== r.props && void 0 !== e.props && (r.props = m.mergeEvaluated.props(n, e.props, r.props, t)), !0 !== r.items && void 0 !== e.items && (r.items = m.mergeEvaluated.items(n, e.items, r.items, t)));
    }
    mergeValidEvaluated(e, t) {
        const { it: r, gen: n } = this;
        if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items)) return n.if(t, ()=>this.mergeEvaluated(e, u.Name)), !0;
    }
}
function P(e, t, r, n) {
    const s = new C(e, r, t);
    "code" in r ? r.code(s, n) : s.$data && r.validate ? (0, c.funcKeywordCode)(s, r) : "macro" in r ? (0, c.macroKeywordCode)(s, r) : (r.compile || r.validate) && (0, c.funcKeywordCode)(s, r);
}
exports.KeywordCxt = C;
const A = /^\/(?:[^~]|~0|~1)*$/, R = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function M(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
    let s, o;
    if ("" === e) return d.default.rootData;
    if ("/" === e[0]) {
        if (!A.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
        s = e, o = d.default.rootData;
    } else {
        const i = R.exec(e);
        if (!i) throw new Error(`Invalid JSON-pointer: ${e}`);
        const a = +i[1];
        if (s = i[2], "#" === s) {
            if (a >= t) throw new Error(c("property/index", a));
            return n[t - a];
        }
        if (a > t) throw new Error(c("data", a));
        if (o = r[t - a], !s) return o;
    }
    let i = o;
    const a = s.split("/");
    for (const e of a)e && (o = u._`${o}${(0, u.getProperty)((0, m.unescapeJsonPointer)(e))}`, i = u._`${i} && ${o}`);
    return i;
    function c(e, r) {
        return `Cannot access ${e} ${r} levels up, current level is ${t}`;
    }
}
exports.getData = M;
