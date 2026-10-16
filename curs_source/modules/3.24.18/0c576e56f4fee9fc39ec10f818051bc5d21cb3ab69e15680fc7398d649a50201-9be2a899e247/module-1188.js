"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
const n = require("./module-2989.js"), o = require("./module-8018.js"), s = require("./module-2173.js"), i = require("./module-8018.js"), a = require("./module-8008.js"), c = require("./module-7695.js"), u = require("./module-9861.js"), l = require("./module-5183.js"), d = require("./module-4489.js"), p = require("./module-3237.js"), f = require("./module-9657.js"), h = require("./module-4006.js");
function m({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: o }, s) {
    o.code.es5 ? e.func(t, l._`${d.default.data}, ${d.default.valCxt}`, n.$async, ()=>{
        e.code(l._`"use strict"; ${g(r, o)}`), function(e, t) {
            e.if(d.default.valCxt, ()=>{
                e.var(d.default.instancePath, l._`${d.default.valCxt}.${d.default.instancePath}`), e.var(d.default.parentData, l._`${d.default.valCxt}.${d.default.parentData}`), e.var(d.default.parentDataProperty, l._`${d.default.valCxt}.${d.default.parentDataProperty}`), e.var(d.default.rootData, l._`${d.default.valCxt}.${d.default.rootData}`), t.dynamicRef && e.var(d.default.dynamicAnchors, l._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
            }, ()=>{
                e.var(d.default.instancePath, l._`""`), e.var(d.default.parentData, l._`undefined`), e.var(d.default.parentDataProperty, l._`undefined`), e.var(d.default.rootData, d.default.data), t.dynamicRef && e.var(d.default.dynamicAnchors, l._`{}`);
            });
        }(e, o), e.code(s);
    }) : e.func(t, l._`${d.default.data}, ${function(e) {
        return l._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e.dynamicRef ? l._`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
    }(o)}`, n.$async, ()=>e.code(g(r, o)).code(s));
}
function g(e, t) {
    const r = "object" == typeof e && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? l._`/*# sourceURL=${r} */` : l.nil;
}
function y(e, t) {
    v(e) && (w(e), _(e)) ? function(e, t) {
        const { schema: r, gen: n, opts: o } = e;
        o.$comment && r.$comment && S(e);
        (function(e) {
            const t = e.schema[e.opts.schemaId];
            t && (e.baseId = (0, p.resolveUrl)(e.opts.uriResolver, e.baseId, t));
        })(e), function(e) {
            if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
        }(e);
        const s = n.const("_errs", d.default.errors);
        b(e, s), n.var(t, l._`${s} === ${d.default.errors}`);
    }(e, t) : (0, n.boolOrEmptySchema)(e, t);
}
function _({ schema: e, self: t }) {
    if ("boolean" == typeof e) return !e;
    for(const r in e)if (t.RULES.all[r]) return !0;
    return !1;
}
function v(e) {
    return "boolean" != typeof e.schema;
}
function w(e) {
    (0, f.checkUnknownRules)(e), function(e) {
        const { schema: t, errSchemaPath: r, opts: n, self: o } = e;
        t.$ref && n.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
    }(e);
}
function b(e, t) {
    if (e.opts.jtd) return k(e, [], !1, t);
    const r = (0, o.getSchemaTypes)(e.schema);
    k(e, r, !(0, o.coerceAndCheckDataType)(e, r), t);
}
function S({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: o }) {
    const s = r.$comment;
    if (!0 === o.$comment) e.code(l._`${d.default.self}.logger.log(${s})`);
    else if ("function" == typeof o.$comment) {
        const r = l.str`${n}/$comment`, o = e.scopeValue("root", {
            ref: t.root
        });
        e.code(l._`${d.default.self}.opts.$comment(${s}, ${r}, ${o}.schema)`);
    }
}
function k(e, t, r, n) {
    const { gen: o, schema: a, data: c, allErrors: u, opts: p, self: h } = e, { RULES: m } = h;
    function g(f) {
        (0, s.shouldUseGroup)(a, f) && (f.type ? (o.if((0, i.checkDataType)(f.type, c, p.strictNumbers)), E(e, f), 1 === t.length && t[0] === f.type && r && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : E(e, f), u || o.if(l._`${d.default.errors} === ${n || 0}`));
    }
    !a.$ref || !p.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(a, m) ? (p.jtd || function(e, t) {
        if (e.schemaEnv.meta || !e.opts.strictTypes) return;
        (function(e, t) {
            if (!t.length) return;
            if (!e.dataTypes.length) return void (e.dataTypes = t);
            t.forEach((t)=>{
                T(e.dataTypes, t) || O(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
            }), function(e, t) {
                const r = [];
                for (const n of e.dataTypes)T(t, n) ? r.push(n) : t.includes("integer") && "number" === n && r.push("integer");
                e.dataTypes = r;
            }(e, t);
        })(e, t), e.opts.allowUnionTypes || function(e, t) {
            t.length > 1 && (2 !== t.length || !t.includes("null")) && O(e, "use allowUnionTypes to allow union type keyword");
        }(e, t);
        !function(e, t) {
            const r = e.self.RULES.all;
            for(const n in r){
                const o = r[n];
                if ("object" == typeof o && (0, s.shouldUseRule)(e.schema, o)) {
                    const { type: r } = o.definition;
                    r.length && !r.some((e)=>x(t, e)) && O(e, `missing type "${r.join(",")}" for keyword "${n}"`);
                }
            }
        }(e, e.dataTypes);
    }(e, t), o.block(()=>{
        for (const e of m.rules)g(e);
        g(m.post);
    })) : o.block(()=>I(e, "$ref", m.all.$ref.definition));
}
function E(e, t) {
    const { gen: r, schema: n, opts: { useDefaults: o } } = e;
    o && (0, a.assignDefaults)(e, t.type), r.block(()=>{
        for (const r of t.rules)(0, s.shouldUseRule)(n, r) && I(e, r.keyword, r.definition, t.type);
    });
}
function x(e, t) {
    return e.includes(t) || "number" === t && e.includes("integer");
}
function T(e, t) {
    return e.includes(t) || "integer" === t && e.includes("number");
}
function O(e, t) {
    t += ` at "${e.schemaEnv.baseId + e.errSchemaPath}" (strictTypes)`, (0, f.checkStrictMode)(e, t, e.opts.strictTypes);
}
exports.validateFunctionCode = function(e) {
    v(e) && (w(e), _(e)) ? function(e) {
        const { schema: t, opts: r, gen: n } = e;
        m(e, ()=>{
            r.$comment && t.$comment && S(e), function(e) {
                const { schema: t, opts: r } = e;
                void 0 !== t.default && r.useDefaults && r.strictSchema && (0, f.checkStrictMode)(e, "default is ignored in the schema root");
            }(e), n.let(d.default.vErrors, null), n.let(d.default.errors, 0), r.unevaluated && function(e) {
                const { gen: t, validateName: r } = e;
                e.evaluated = t.const("evaluated", l._`${r}.evaluated`), t.if(l._`${e.evaluated}.dynamicProps`, ()=>t.assign(l._`${e.evaluated}.props`, l._`undefined`)), t.if(l._`${e.evaluated}.dynamicItems`, ()=>t.assign(l._`${e.evaluated}.items`, l._`undefined`));
            }(e), b(e), function(e) {
                const { gen: t, schemaEnv: r, validateName: n, ValidationError: o, opts: s } = e;
                r.$async ? t.if(l._`${d.default.errors} === 0`, ()=>t.return(d.default.data), ()=>t.throw(l._`new ${o}(${d.default.vErrors})`)) : (t.assign(l._`${n}.errors`, d.default.vErrors), s.unevaluated && function({ gen: e, evaluated: t, props: r, items: n }) {
                    r instanceof l.Name && e.assign(l._`${t}.props`, r);
                    n instanceof l.Name && e.assign(l._`${t}.items`, n);
                }(e), t.return(l._`${d.default.errors} === 0`));
            }(e);
        });
    }(e) : m(e, ()=>(0, n.topBoolOrEmptySchema)(e));
};
class P {
    constructor(e, t, r){
        if ((0, c.validateKeywordUsage)(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(e, this.schema, r, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", $(this.$data, e));
        else if (this.schemaCode = this.schemaValue, !(0, c.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
        ("code" in t ? t.trackErrors : !1 !== t.errors) && (this.errsCount = e.gen.const("_errs", d.default.errors));
    }
    result(e, t, r) {
        this.failResult((0, l.not)(e), t, r);
    }
    failResult(e, t, r) {
        this.gen.if(e), r ? r() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(e, t) {
        this.failResult((0, l.not)(e), void 0, t);
    }
    fail(e) {
        if (void 0 === e) return this.error(), void (this.allErrors || this.gen.if(!1));
        this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(e) {
        if (!this.$data) return this.fail(e);
        const { schemaCode: t } = this;
        this.fail(l._`${t} !== undefined && (${(0, l.or)(this.invalid$data(), e)})`);
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
    block$data(e, t, r = l.nil) {
        this.gen.block(()=>{
            this.check$data(e, r), t();
        });
    }
    check$data(e = l.nil, t = l.nil) {
        if (!this.$data) return;
        const { gen: r, schemaCode: n, schemaType: o, def: s } = this;
        r.if((0, l.or)(l._`${n} === undefined`, t)), e !== l.nil && r.assign(e, !0), (o.length || s.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), e !== l.nil && r.assign(e, !1)), r.else();
    }
    invalid$data() {
        const { gen: e, schemaCode: t, schemaType: r, def: n, it: o } = this;
        return (0, l.or)(function() {
            if (r.length) {
                if (!(t instanceof l.Name)) throw new Error("ajv implementation error");
                const e = Array.isArray(r) ? r : [
                    r
                ];
                return l._`${(0, i.checkDataTypes)(e, t, o.opts.strictNumbers, i.DataType.Wrong)}`;
            }
            return l.nil;
        }(), function() {
            if (n.validateSchema) {
                const r = e.scopeValue("validate$data", {
                    ref: n.validateSchema
                });
                return l._`!${r}(${t})`;
            }
            return l.nil;
        }());
    }
    subschema(e, t) {
        const r = (0, u.getSubschema)(this.it, e);
        (0, u.extendSubschemaData)(r, this.it, e), (0, u.extendSubschemaMode)(r, e);
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
        r.opts.unevaluated && (!0 !== r.props && void 0 !== e.props && (r.props = f.mergeEvaluated.props(n, e.props, r.props, t)), !0 !== r.items && void 0 !== e.items && (r.items = f.mergeEvaluated.items(n, e.items, r.items, t)));
    }
    mergeValidEvaluated(e, t) {
        const { it: r, gen: n } = this;
        if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items)) return n.if(t, ()=>this.mergeEvaluated(e, l.Name)), !0;
    }
}
function I(e, t, r, n) {
    const o = new P(e, r, t);
    "code" in r ? r.code(o, n) : o.$data && r.validate ? (0, c.funcKeywordCode)(o, r) : "macro" in r ? (0, c.macroKeywordCode)(o, r) : (r.compile || r.validate) && (0, c.funcKeywordCode)(o, r);
}
exports.KeywordCxt = P;
const C = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function $(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
    let o, s;
    if ("" === e) return d.default.rootData;
    if ("/" === e[0]) {
        if (!C.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
        o = e, s = d.default.rootData;
    } else {
        const i = A.exec(e);
        if (!i) throw new Error(`Invalid JSON-pointer: ${e}`);
        const a = +i[1];
        if (o = i[2], "#" === o) {
            if (a >= t) throw new Error(c("property/index", a));
            return n[t - a];
        }
        if (a > t) throw new Error(c("data", a));
        if (s = r[t - a], !o) return s;
    }
    let i = s;
    const a = o.split("/");
    for (const e of a)e && (s = l._`${s}${(0, l.getProperty)((0, f.unescapeJsonPointer)(e))}`, i = l._`${i} && ${s}`);
    return i;
    function c(e, r) {
        return `Cannot access ${e} ${r} levels up, current level is ${t}`;
    }
}
exports.getData = $;
