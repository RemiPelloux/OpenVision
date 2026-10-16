"use strict";
require.d(exports, {
    kY: ()=>Oe,
    bv: ()=>ae,
    Ii: ()=>xe,
    ND: ()=>W,
    bz: ()=>Ue,
    YO: ()=>je,
    zM: ()=>Ne,
    Ie: ()=>Je,
    gM: ()=>We,
    k5: ()=>Qe,
    Nl: ()=>Be,
    RZ: ()=>Ve,
    eu: ()=>Ye,
    fc: ()=>Xe,
    Zm: ()=>$e,
    ch: ()=>Fe,
    ai: ()=>qe,
    Ik: ()=>Ge,
    lq: ()=>Ze,
    vk: ()=>et,
    g1: ()=>Ke,
    Yj: ()=>De,
    PV: ()=>He,
    KC: ()=>ze,
    L5: ()=>Le
});
var n = require("./module-82590.js"), s = require("./module-98517.js");
const o = (e, t)=>{
    let r;
    switch(e.code){
        case n.eq.invalid_type:
            r = e.received === s.Zp.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
            break;
        case n.eq.invalid_literal:
            r = `Invalid literal value, expected ${JSON.stringify(e.expected, s.ZS.jsonStringifyReplacer)}`;
            break;
        case n.eq.unrecognized_keys:
            r = `Unrecognized key(s) in object: ${s.ZS.joinValues(e.keys, ", ")}`;
            break;
        case n.eq.invalid_union:
            r = "Invalid input";
            break;
        case n.eq.invalid_union_discriminator:
            r = `Invalid discriminator value. Expected ${s.ZS.joinValues(e.options)}`;
            break;
        case n.eq.invalid_enum_value:
            r = `Invalid enum value. Expected ${s.ZS.joinValues(e.options)}, received '${e.received}'`;
            break;
        case n.eq.invalid_arguments:
            r = "Invalid function arguments";
            break;
        case n.eq.invalid_return_type:
            r = "Invalid function return type";
            break;
        case n.eq.invalid_date:
            r = "Invalid date";
            break;
        case n.eq.invalid_string:
            "object" == typeof e.validation ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : s.ZS.assertNever(e.validation) : r = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
            break;
        case n.eq.too_small:
            r = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : "number" === e.type || "bigint" === e.type ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
            break;
        case n.eq.too_big:
            r = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
            break;
        case n.eq.custom:
            r = "Invalid input";
            break;
        case n.eq.invalid_intersection_types:
            r = "Intersection results could not be merged";
            break;
        case n.eq.not_multiple_of:
            r = `Number must be a multiple of ${e.multipleOf}`;
            break;
        case n.eq.not_finite:
            r = "Number must be finite";
            break;
        default:
            r = t.defaultError, s.ZS.assertNever(e);
    }
    return {
        message: r
    };
};
let i = o;
function a() {
    return i;
}
var c;
!function(e) {
    e.errToObj = (e)=>"string" == typeof e ? {
            message: e
        } : e || {}, e.toString = (e)=>"string" == typeof e ? e : e?.message;
}(c || (c = {}));
const l = (e)=>{
    const { data: t, path: r, errorMaps: n, issueData: s } = e, o = [
        ...r,
        ...s.path || []
    ], i = {
        ...s,
        path: o
    };
    if (void 0 !== s.message) return {
        ...s,
        path: o,
        message: s.message
    };
    let a = "";
    const c = n.filter((e)=>!!e).slice().reverse();
    for (const e of c)a = e(i, {
        data: t,
        defaultError: a
    }).message;
    return {
        ...s,
        path: o,
        message: a
    };
};
function u(e, t) {
    const r = a(), n = l({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            r,
            r === o ? void 0 : o
        ].filter((e)=>!!e)
    });
    e.common.issues.push(n);
}
class d {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        "valid" === this.value && (this.value = "dirty");
    }
    abort() {
        "aborted" !== this.value && (this.value = "aborted");
    }
    static mergeArray(e, t) {
        const r = [];
        for (const n of t){
            if ("aborted" === n.status) return p;
            "dirty" === n.status && e.dirty(), r.push(n.value);
        }
        return {
            status: e.value,
            value: r
        };
    }
    static async mergeObjectAsync(e, t) {
        const r = [];
        for (const e of t){
            const t = await e.key, n = await e.value;
            r.push({
                key: t,
                value: n
            });
        }
        return d.mergeObjectSync(e, r);
    }
    static mergeObjectSync(e, t) {
        const r = {};
        for (const n of t){
            const { key: t, value: s } = n;
            if ("aborted" === t.status) return p;
            if ("aborted" === s.status) return p;
            "dirty" === t.status && e.dirty(), "dirty" === s.status && e.dirty(), "__proto__" === t.value || void 0 === s.value && !n.alwaysSet || (r[t.value] = s.value);
        }
        return {
            status: e.value,
            value: r
        };
    }
}
const p = Object.freeze({
    status: "aborted"
}), m = (e)=>({
        status: "dirty",
        value: e
    }), h = (e)=>({
        status: "valid",
        value: e
    }), f = (e)=>"aborted" === e.status, g = (e)=>"dirty" === e.status, y = (e)=>"valid" === e.status, w = (e)=>"undefined" != typeof Promise && e instanceof Promise;
class v {
    constructor(e, t, r, n){
        this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = n;
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
}
const _ = (e, t)=>{
    if (y(t)) return {
        success: !0,
        data: t.value
    };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error () {
            if (this._error) return this._error;
            const t = new n.G(e.common.issues);
            return this._error = t, this._error;
        }
    };
};
function b(e) {
    if (!e) return {};
    const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
    if (t && (r || n)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    if (t) return {
        errorMap: t,
        description: s
    };
    return {
        errorMap: (t, s)=>{
            const { message: o } = e;
            return "invalid_enum_value" === t.code ? {
                message: o ?? s.defaultError
            } : void 0 === s.data ? {
                message: o ?? n ?? s.defaultError
            } : "invalid_type" !== t.code ? {
                message: s.defaultError
            } : {
                message: o ?? r ?? s.defaultError
            };
        },
        description: s
    };
}
class S {
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return (0, s.CR)(e.data);
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: (0, s.CR)(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        };
    }
    _processInputParams(e) {
        return {
            status: new d,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: (0, s.CR)(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        };
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (w(t)) throw new Error("Synchronous parse encountered promise.");
        return t;
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t);
    }
    parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success) return r.data;
        throw r.error;
    }
    safeParse(e, t) {
        const r = {
            common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: (0, s.CR)(e)
        }, n = this._parseSync({
            data: e,
            path: r.path,
            parent: r
        });
        return _(r, n);
    }
    "~validate"(e) {
        const t = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: (0, s.CR)(e)
        };
        if (!this["~standard"].async) try {
            const r = this._parseSync({
                data: e,
                path: [],
                parent: t
            });
            return y(r) ? {
                value: r.value
            } : {
                issues: t.common.issues
            };
        } catch (e) {
            e?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
                issues: [],
                async: !0
            };
        }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then((e)=>y(e) ? {
                value: e.value
            } : {
                issues: t.common.issues
            });
    }
    async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success) return r.data;
        throw r.error;
    }
    async safeParseAsync(e, t) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: t?.errorMap,
                async: !0
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: (0, s.CR)(e)
        }, n = this._parse({
            data: e,
            path: r.path,
            parent: r
        }), o = await (w(n) ? n : Promise.resolve(n));
        return _(r, o);
    }
    refine(e, t) {
        const r = (e)=>"string" == typeof t || void 0 === t ? {
                message: t
            } : "function" == typeof t ? t(e) : t;
        return this._refinement((t, s)=>{
            const o = e(t), i = ()=>s.addIssue({
                    code: n.eq.custom,
                    ...r(t)
                });
            return "undefined" != typeof Promise && o instanceof Promise ? o.then((e)=>!!e || (i(), !1)) : !!o || (i(), !1);
        });
    }
    refinement(e, t) {
        return this._refinement((r, n)=>!!e(r) || (n.addIssue("function" == typeof t ? t(r, n) : t), !1));
    }
    _refinement(e) {
        return new ke({
            schema: this,
            typeName: Oe.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        });
    }
    superRefine(e) {
        return this._refinement(e);
    }
    constructor(e){
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (e)=>this["~validate"](e)
        };
    }
    optional() {
        return xe.create(this, this._def);
    }
    nullable() {
        return Ee.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return oe.create(this);
    }
    promise() {
        return Se.create(this, this._def);
    }
    or(e) {
        return ce.create([
            this,
            e
        ], this._def);
    }
    and(e) {
        return pe.create(this, e, this._def);
    }
    transform(e) {
        return new ke({
            ...b(this._def),
            schema: this,
            typeName: Oe.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        });
    }
    default(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new Ie({
            ...b(this._def),
            innerType: this,
            defaultValue: t,
            typeName: Oe.ZodDefault
        });
    }
    brand() {
        return new Pe({
            typeName: Oe.ZodBranded,
            type: this,
            ...b(this._def)
        });
    }
    catch(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new Te({
            ...b(this._def),
            innerType: this,
            catchValue: t,
            typeName: Oe.ZodCatch
        });
    }
    describe(e) {
        return new (0, this.constructor)({
            ...this._def,
            description: e
        });
    }
    pipe(e) {
        return Ae.create(this, e);
    }
    readonly() {
        return Re.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const k = /^c[^\s-]{8,}$/i, x = /^[0-9a-z]+$/, E = /^[0-9A-HJKMNP-TV-Z]{26}$/i, I = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, T = /^[a-z0-9_-]{21}$/i, C = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, P = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, A = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let R;
const M = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, J = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, O = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, B = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, D = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, q = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, N = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", F = new RegExp(`^${N}$`);
function U(e) {
    let t = "[0-5]\\d";
    e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`);
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision ? "+" : "?"}`;
}
function L(e) {
    return new RegExp(`^${U(e)}$`);
}
function $(e) {
    let t = `${N}T${U(e)}`;
    const r = [];
    return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function j(e, t) {
    return !("v4" !== t && t || !M.test(e)) || !("v6" !== t && t || !O.test(e));
}
function G(e, t) {
    if (!C.test(e)) return !1;
    try {
        const [r] = e.split(".");
        if (!r) return !1;
        const n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(n));
        return "object" == typeof s && null !== s && (!("typ" in s) || "JWT" === s?.typ) && !!s.alg && (!t || s.alg === t);
    } catch  {
        return !1;
    }
}
function z(e, t) {
    return !("v4" !== t && t || !J.test(e)) || !("v6" !== t && t || !B.test(e));
}
class W extends S {
    _parse(e) {
        this._def.coerce && (e.data = String(e.data));
        if (this._getType(e) !== s.Zp.string) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.string,
                received: t.parsedType
            }), p;
        }
        const t = new d;
        let r;
        for (const o of this._def.checks)if ("min" === o.kind) e.data.length < o.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message
        }), t.dirty());
        else if ("max" === o.kind) e.data.length > o.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message
        }), t.dirty());
        else if ("length" === o.kind) {
            const s = e.data.length > o.value, i = e.data.length < o.value;
            (s || i) && (r = this._getOrReturnCtx(e, r), s ? u(r, {
                code: n.eq.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message
            }) : i && u(r, {
                code: n.eq.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message
            }), t.dirty());
        } else if ("email" === o.kind) A.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "email",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("emoji" === o.kind) R || (R = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), R.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "emoji",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("uuid" === o.kind) I.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "uuid",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("nanoid" === o.kind) T.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "nanoid",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("cuid" === o.kind) k.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cuid",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("cuid2" === o.kind) x.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cuid2",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("ulid" === o.kind) E.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "ulid",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty());
        else if ("url" === o.kind) try {
            new URL(e.data);
        } catch  {
            r = this._getOrReturnCtx(e, r), u(r, {
                validation: "url",
                code: n.eq.invalid_string,
                message: o.message
            }), t.dirty();
        }
        else if ("regex" === o.kind) {
            o.regex.lastIndex = 0;
            o.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                validation: "regex",
                code: n.eq.invalid_string,
                message: o.message
            }), t.dirty());
        } else if ("trim" === o.kind) e.data = e.data.trim();
        else if ("includes" === o.kind) e.data.includes(o.value, o.position) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                includes: o.value,
                position: o.position
            },
            message: o.message
        }), t.dirty());
        else if ("toLowerCase" === o.kind) e.data = e.data.toLowerCase();
        else if ("toUpperCase" === o.kind) e.data = e.data.toUpperCase();
        else if ("startsWith" === o.kind) e.data.startsWith(o.value) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                startsWith: o.value
            },
            message: o.message
        }), t.dirty());
        else if ("endsWith" === o.kind) e.data.endsWith(o.value) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                endsWith: o.value
            },
            message: o.message
        }), t.dirty());
        else if ("datetime" === o.kind) {
            $(o).test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "datetime",
                message: o.message
            }), t.dirty());
        } else if ("date" === o.kind) {
            F.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "date",
                message: o.message
            }), t.dirty());
        } else if ("time" === o.kind) {
            L(o).test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "time",
                message: o.message
            }), t.dirty());
        } else "duration" === o.kind ? P.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "duration",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : "ip" === o.kind ? j(e.data, o.version) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "ip",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : "jwt" === o.kind ? G(e.data, o.alg) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "jwt",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : "cidr" === o.kind ? z(e.data, o.version) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cidr",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : "base64" === o.kind ? D.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "base64",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : "base64url" === o.kind ? q.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "base64url",
            code: n.eq.invalid_string,
            message: o.message
        }), t.dirty()) : s.ZS.assertNever(o);
        return {
            status: t.value,
            value: e.data
        };
    }
    _regex(e, t, r) {
        return this.refinement((t)=>e.test(t), {
            validation: t,
            code: n.eq.invalid_string,
            ...c.errToObj(r)
        });
    }
    _addCheck(e) {
        return new W({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...c.errToObj(e)
        });
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...c.errToObj(e)
        });
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...c.errToObj(e)
        });
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...c.errToObj(e)
        });
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...c.errToObj(e)
        });
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...c.errToObj(e)
        });
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...c.errToObj(e)
        });
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...c.errToObj(e)
        });
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...c.errToObj(e)
        });
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...c.errToObj(e)
        });
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...c.errToObj(e)
        });
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...c.errToObj(e)
        });
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...c.errToObj(e)
        });
    }
    datetime(e) {
        return "string" == typeof e ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: void 0 === e?.precision ? null : e?.precision,
            offset: e?.offset ?? !1,
            local: e?.local ?? !1,
            ...c.errToObj(e?.message)
        });
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        });
    }
    time(e) {
        return "string" == typeof e ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: void 0 === e?.precision ? null : e?.precision,
            ...c.errToObj(e?.message)
        });
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...c.errToObj(e)
        });
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...c.errToObj(t)
        });
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t?.position,
            ...c.errToObj(t?.message)
        });
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...c.errToObj(t)
        });
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...c.errToObj(t)
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...c.errToObj(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...c.errToObj(t)
        });
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...c.errToObj(t)
        });
    }
    nonempty(e) {
        return this.min(1, c.errToObj(e));
    }
    trim() {
        return new W({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new W({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new W({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((e)=>"datetime" === e.kind);
    }
    get isDate() {
        return !!this._def.checks.find((e)=>"date" === e.kind);
    }
    get isTime() {
        return !!this._def.checks.find((e)=>"time" === e.kind);
    }
    get isDuration() {
        return !!this._def.checks.find((e)=>"duration" === e.kind);
    }
    get isEmail() {
        return !!this._def.checks.find((e)=>"email" === e.kind);
    }
    get isURL() {
        return !!this._def.checks.find((e)=>"url" === e.kind);
    }
    get isEmoji() {
        return !!this._def.checks.find((e)=>"emoji" === e.kind);
    }
    get isUUID() {
        return !!this._def.checks.find((e)=>"uuid" === e.kind);
    }
    get isNANOID() {
        return !!this._def.checks.find((e)=>"nanoid" === e.kind);
    }
    get isCUID() {
        return !!this._def.checks.find((e)=>"cuid" === e.kind);
    }
    get isCUID2() {
        return !!this._def.checks.find((e)=>"cuid2" === e.kind);
    }
    get isULID() {
        return !!this._def.checks.find((e)=>"ulid" === e.kind);
    }
    get isIP() {
        return !!this._def.checks.find((e)=>"ip" === e.kind);
    }
    get isCIDR() {
        return !!this._def.checks.find((e)=>"cidr" === e.kind);
    }
    get isBase64() {
        return !!this._def.checks.find((e)=>"base64" === e.kind);
    }
    get isBase64url() {
        return !!this._def.checks.find((e)=>"base64url" === e.kind);
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
}
function H(e, t) {
    const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n;
    return Number.parseInt(e.toFixed(s).replace(".", "")) % Number.parseInt(t.toFixed(s).replace(".", "")) / 10 ** s;
}
W.create = (e)=>new W({
        checks: [],
        typeName: Oe.ZodString,
        coerce: e?.coerce ?? !1,
        ...b(e)
    });
class K extends S {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e) {
        this._def.coerce && (e.data = Number(e.data));
        if (this._getType(e) !== s.Zp.number) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.number,
                received: t.parsedType
            }), p;
        }
        let t;
        const r = new d;
        for (const o of this._def.checks)if ("int" === o.kind) s.ZS.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.invalid_type,
            expected: "integer",
            received: "float",
            message: o.message
        }), r.dirty());
        else if ("min" === o.kind) {
            (o.inclusive ? e.data < o.value : e.data <= o.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_small,
                minimum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }), r.dirty());
        } else if ("max" === o.kind) {
            (o.inclusive ? e.data > o.value : e.data >= o.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }), r.dirty());
        } else "multipleOf" === o.kind ? 0 !== H(e.data, o.value) && (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_multiple_of,
            multipleOf: o.value,
            message: o.message
        }), r.dirty()) : "finite" === o.kind ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_finite,
            message: o.message
        }), r.dirty()) : s.ZS.assertNever(o);
        return {
            status: r.value,
            value: e.data
        };
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, c.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, c.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, c.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, c.toString(t));
    }
    setLimit(e, t, r, n) {
        return new K({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: t,
                    inclusive: r,
                    message: c.toString(n)
                }
            ]
        });
    }
    _addCheck(e) {
        return new K({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: c.toString(e)
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: c.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: c.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: c.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: c.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: c.toString(t)
        });
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: c.toString(e)
        });
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: c.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: c.toString(e)
        });
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
    get isInt() {
        return !!this._def.checks.find((e)=>"int" === e.kind || "multipleOf" === e.kind && s.ZS.isInteger(e.value));
    }
    get isFinite() {
        let e = null, t = null;
        for (const r of this._def.checks){
            if ("finite" === r.kind || "int" === r.kind || "multipleOf" === r.kind) return !0;
            "min" === r.kind ? (null === t || r.value > t) && (t = r.value) : "max" === r.kind && (null === e || r.value < e) && (e = r.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
    }
}
K.create = (e)=>new K({
        checks: [],
        typeName: Oe.ZodNumber,
        coerce: e?.coerce || !1,
        ...b(e)
    });
class V extends S {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(e) {
        if (this._def.coerce) try {
            e.data = BigInt(e.data);
        } catch  {
            return this._getInvalidInput(e);
        }
        if (this._getType(e) !== s.Zp.bigint) return this._getInvalidInput(e);
        let t;
        const r = new d;
        for (const o of this._def.checks)if ("min" === o.kind) {
            (o.inclusive ? e.data < o.value : e.data <= o.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_small,
                type: "bigint",
                minimum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }), r.dirty());
        } else if ("max" === o.kind) {
            (o.inclusive ? e.data > o.value : e.data >= o.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_big,
                type: "bigint",
                maximum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }), r.dirty());
        } else "multipleOf" === o.kind ? e.data % o.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_multiple_of,
            multipleOf: o.value,
            message: o.message
        }), r.dirty()) : s.ZS.assertNever(o);
        return {
            status: r.value,
            value: e.data
        };
    }
    _getInvalidInput(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: n.eq.invalid_type,
            expected: s.Zp.bigint,
            received: t.parsedType
        }), p;
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, c.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, c.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, c.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, c.toString(t));
    }
    setLimit(e, t, r, n) {
        return new V({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: t,
                    inclusive: r,
                    message: c.toString(n)
                }
            ]
        });
    }
    _addCheck(e) {
        return new V({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: c.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: c.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: c.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: c.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: c.toString(t)
        });
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
}
V.create = (e)=>new V({
        checks: [],
        typeName: Oe.ZodBigInt,
        coerce: e?.coerce ?? !1,
        ...b(e)
    });
class Y extends S {
    _parse(e) {
        this._def.coerce && (e.data = Boolean(e.data));
        if (this._getType(e) !== s.Zp.boolean) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.boolean,
                received: t.parsedType
            }), p;
        }
        return h(e.data);
    }
}
Y.create = (e)=>new Y({
        typeName: Oe.ZodBoolean,
        coerce: e?.coerce || !1,
        ...b(e)
    });
class Q extends S {
    _parse(e) {
        this._def.coerce && (e.data = new Date(e.data));
        if (this._getType(e) !== s.Zp.date) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.date,
                received: t.parsedType
            }), p;
        }
        if (Number.isNaN(e.data.getTime())) {
            return u(this._getOrReturnCtx(e), {
                code: n.eq.invalid_date
            }), p;
        }
        const t = new d;
        let r;
        for (const o of this._def.checks)"min" === o.kind ? e.data.getTime() < o.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: "date"
        }), t.dirty()) : "max" === o.kind ? e.data.getTime() > o.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_big,
            message: o.message,
            inclusive: !0,
            exact: !1,
            maximum: o.value,
            type: "date"
        }), t.dirty()) : s.ZS.assertNever(o);
        return {
            status: t.value,
            value: new Date(e.data.getTime())
        };
    }
    _addCheck(e) {
        return new Q({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: c.toString(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: c.toString(t)
        });
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
}
Q.create = (e)=>new Q({
        checks: [],
        coerce: e?.coerce || !1,
        typeName: Oe.ZodDate,
        ...b(e)
    });
class X extends S {
    _parse(e) {
        if (this._getType(e) !== s.Zp.symbol) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.symbol,
                received: t.parsedType
            }), p;
        }
        return h(e.data);
    }
}
X.create = (e)=>new X({
        typeName: Oe.ZodSymbol,
        ...b(e)
    });
class Z extends S {
    _parse(e) {
        if (this._getType(e) !== s.Zp.undefined) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.undefined,
                received: t.parsedType
            }), p;
        }
        return h(e.data);
    }
}
Z.create = (e)=>new Z({
        typeName: Oe.ZodUndefined,
        ...b(e)
    });
class ee extends S {
    _parse(e) {
        if (this._getType(e) !== s.Zp.null) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.null,
                received: t.parsedType
            }), p;
        }
        return h(e.data);
    }
}
ee.create = (e)=>new ee({
        typeName: Oe.ZodNull,
        ...b(e)
    });
class te extends S {
    constructor(){
        super(...arguments), this._any = !0;
    }
    _parse(e) {
        return h(e.data);
    }
}
te.create = (e)=>new te({
        typeName: Oe.ZodAny,
        ...b(e)
    });
class re extends S {
    constructor(){
        super(...arguments), this._unknown = !0;
    }
    _parse(e) {
        return h(e.data);
    }
}
re.create = (e)=>new re({
        typeName: Oe.ZodUnknown,
        ...b(e)
    });
class ne extends S {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: n.eq.invalid_type,
            expected: s.Zp.never,
            received: t.parsedType
        }), p;
    }
}
ne.create = (e)=>new ne({
        typeName: Oe.ZodNever,
        ...b(e)
    });
class se extends S {
    _parse(e) {
        if (this._getType(e) !== s.Zp.undefined) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.void,
                received: t.parsedType
            }), p;
        }
        return h(e.data);
    }
}
se.create = (e)=>new se({
        typeName: Oe.ZodVoid,
        ...b(e)
    });
class oe extends S {
    _parse(e) {
        const { ctx: t, status: r } = this._processInputParams(e), o = this._def;
        if (t.parsedType !== s.Zp.array) return u(t, {
            code: n.eq.invalid_type,
            expected: s.Zp.array,
            received: t.parsedType
        }), p;
        if (null !== o.exactLength) {
            const e = t.data.length > o.exactLength.value, s = t.data.length < o.exactLength.value;
            (e || s) && (u(t, {
                code: e ? n.eq.too_big : n.eq.too_small,
                minimum: s ? o.exactLength.value : void 0,
                maximum: e ? o.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: o.exactLength.message
            }), r.dirty());
        }
        if (null !== o.minLength && t.data.length < o.minLength.value && (u(t, {
            code: n.eq.too_small,
            minimum: o.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.minLength.message
        }), r.dirty()), null !== o.maxLength && t.data.length > o.maxLength.value && (u(t, {
            code: n.eq.too_big,
            maximum: o.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.maxLength.message
        }), r.dirty()), t.common.async) return Promise.all([
            ...t.data
        ].map((e, r)=>o.type._parseAsync(new v(t, e, t.path, r)))).then((e)=>d.mergeArray(r, e));
        const i = [
            ...t.data
        ].map((e, r)=>o.type._parseSync(new v(t, e, t.path, r)));
        return d.mergeArray(r, i);
    }
    get element() {
        return this._def.type;
    }
    min(e, t) {
        return new oe({
            ...this._def,
            minLength: {
                value: e,
                message: c.toString(t)
            }
        });
    }
    max(e, t) {
        return new oe({
            ...this._def,
            maxLength: {
                value: e,
                message: c.toString(t)
            }
        });
    }
    length(e, t) {
        return new oe({
            ...this._def,
            exactLength: {
                value: e,
                message: c.toString(t)
            }
        });
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
function ie(e) {
    if (e instanceof ae) {
        const t = {};
        for(const r in e.shape){
            const n = e.shape[r];
            t[r] = xe.create(ie(n));
        }
        return new ae({
            ...e._def,
            shape: ()=>t
        });
    }
    return e instanceof oe ? new oe({
        ...e._def,
        type: ie(e.element)
    }) : e instanceof xe ? xe.create(ie(e.unwrap())) : e instanceof Ee ? Ee.create(ie(e.unwrap())) : e instanceof me ? me.create(e.items.map((e)=>ie(e))) : e;
}
oe.create = (e, t)=>new oe({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: Oe.ZodArray,
        ...b(t)
    });
class ae extends S {
    constructor(){
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
        if (null !== this._cached) return this._cached;
        const e = this._def.shape(), t = s.ZS.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }, this._cached;
    }
    _parse(e) {
        if (this._getType(e) !== s.Zp.object) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.object,
                received: t.parsedType
            }), p;
        }
        const { status: t, ctx: r } = this._processInputParams(e), { shape: o, keys: i } = this._getCached(), a = [];
        if (!(this._def.catchall instanceof ne && "strip" === this._def.unknownKeys)) for(const e in r.data)i.includes(e) || a.push(e);
        const c = [];
        for (const e of i){
            const t = o[e], n = r.data[e];
            c.push({
                key: {
                    status: "valid",
                    value: e
                },
                value: t._parse(new v(r, n, r.path, e)),
                alwaysSet: e in r.data
            });
        }
        if (this._def.catchall instanceof ne) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e) for (const e of a)c.push({
                key: {
                    status: "valid",
                    value: e
                },
                value: {
                    status: "valid",
                    value: r.data[e]
                }
            });
            else if ("strict" === e) a.length > 0 && (u(r, {
                code: n.eq.unrecognized_keys,
                keys: a
            }), t.dirty());
            else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
            const e = this._def.catchall;
            for (const t of a){
                const n = r.data[t];
                c.push({
                    key: {
                        status: "valid",
                        value: t
                    },
                    value: e._parse(new v(r, n, r.path, t)),
                    alwaysSet: t in r.data
                });
            }
        }
        return r.common.async ? Promise.resolve().then(async ()=>{
            const e = [];
            for (const t of c){
                const r = await t.key, n = await t.value;
                e.push({
                    key: r,
                    value: n,
                    alwaysSet: t.alwaysSet
                });
            }
            return e;
        }).then((e)=>d.mergeObjectSync(t, e)) : d.mergeObjectSync(t, c);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return c.errToObj, new ae({
            ...this._def,
            unknownKeys: "strict",
            ...void 0 !== e ? {
                errorMap: (t, r)=>{
                    const n = this._def.errorMap?.(t, r).message ?? r.defaultError;
                    return "unrecognized_keys" === t.code ? {
                        message: c.errToObj(e).message ?? n
                    } : {
                        message: n
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ae({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ae({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    extend(e) {
        return new ae({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...e
                })
        });
    }
    merge(e) {
        return new ae({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...e._def.shape()
                }),
            typeName: Oe.ZodObject
        });
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        });
    }
    catchall(e) {
        return new ae({
            ...this._def,
            catchall: e
        });
    }
    pick(e) {
        const t = {};
        for (const r of s.ZS.objectKeys(e))e[r] && this.shape[r] && (t[r] = this.shape[r]);
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    omit(e) {
        const t = {};
        for (const r of s.ZS.objectKeys(this.shape))e[r] || (t[r] = this.shape[r]);
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    deepPartial() {
        return ie(this);
    }
    partial(e) {
        const t = {};
        for (const r of s.ZS.objectKeys(this.shape)){
            const n = this.shape[r];
            e && !e[r] ? t[r] = n : t[r] = n.optional();
        }
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    required(e) {
        const t = {};
        for (const r of s.ZS.objectKeys(this.shape))if (e && !e[r]) t[r] = this.shape[r];
        else {
            let e = this.shape[r];
            for(; e instanceof xe;)e = e._def.innerType;
            t[r] = e;
        }
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    keyof() {
        return ve(s.ZS.objectKeys(this.shape));
    }
}
ae.create = (e, t)=>new ae({
        shape: ()=>e,
        unknownKeys: "strip",
        catchall: ne.create(),
        typeName: Oe.ZodObject,
        ...b(t)
    }), ae.strictCreate = (e, t)=>new ae({
        shape: ()=>e,
        unknownKeys: "strict",
        catchall: ne.create(),
        typeName: Oe.ZodObject,
        ...b(t)
    }), ae.lazycreate = (e, t)=>new ae({
        shape: e,
        unknownKeys: "strip",
        catchall: ne.create(),
        typeName: Oe.ZodObject,
        ...b(t)
    });
class ce extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), r = this._def.options;
        if (t.common.async) return Promise.all(r.map(async (e)=>{
            const r = {
                ...t,
                common: {
                    ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r
                }),
                ctx: r
            };
        })).then(function(e) {
            for (const t of e)if ("valid" === t.result.status) return t.result;
            for (const r of e)if ("dirty" === r.result.status) return t.common.issues.push(...r.ctx.common.issues), r.result;
            const r = e.map((e)=>new n.G(e.ctx.common.issues));
            return u(t, {
                code: n.eq.invalid_union,
                unionErrors: r
            }), p;
        });
        {
            let e;
            const s = [];
            for (const n of r){
                const r = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }, o = n._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: r
                });
                if ("valid" === o.status) return o;
                "dirty" !== o.status || e || (e = {
                    result: o,
                    ctx: r
                }), r.common.issues.length && s.push(r.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const o = s.map((e)=>new n.G(e));
            return u(t, {
                code: n.eq.invalid_union,
                unionErrors: o
            }), p;
        }
    }
    get options() {
        return this._def.options;
    }
}
ce.create = (e, t)=>new ce({
        options: e,
        typeName: Oe.ZodUnion,
        ...b(t)
    });
const le = (e)=>e instanceof ye ? le(e.schema) : e instanceof ke ? le(e.innerType()) : e instanceof we ? [
        e.value
    ] : e instanceof _e ? e.options : e instanceof be ? s.ZS.objectValues(e.enum) : e instanceof Ie ? le(e._def.innerType) : e instanceof Z ? [
        void 0
    ] : e instanceof ee ? [
        null
    ] : e instanceof xe ? [
        void 0,
        ...le(e.unwrap())
    ] : e instanceof Ee ? [
        null,
        ...le(e.unwrap())
    ] : e instanceof Pe || e instanceof Re ? le(e.unwrap()) : e instanceof Te ? le(e._def.innerType) : [];
class ue extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== s.Zp.object) return u(t, {
            code: n.eq.invalid_type,
            expected: s.Zp.object,
            received: t.parsedType
        }), p;
        const r = this.discriminator, o = t.data[r], i = this.optionsMap.get(o);
        return i ? t.common.async ? i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (u(t, {
            code: n.eq.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [
                r
            ]
        }), p);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    static create(e, t, r) {
        const n = new Map;
        for (const r of t){
            const t = le(r.shape[e]);
            if (!t.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const s of t){
                if (n.has(s)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);
                n.set(s, r);
            }
        }
        return new ue({
            typeName: Oe.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...b(r)
        });
    }
}
function de(e, t) {
    const r = (0, s.CR)(e), n = (0, s.CR)(t);
    if (e === t) return {
        valid: !0,
        data: e
    };
    if (r === s.Zp.object && n === s.Zp.object) {
        const r = s.ZS.objectKeys(t), n = s.ZS.objectKeys(e).filter((e)=>-1 !== r.indexOf(e)), o = {
            ...e,
            ...t
        };
        for (const r of n){
            const n = de(e[r], t[r]);
            if (!n.valid) return {
                valid: !1
            };
            o[r] = n.data;
        }
        return {
            valid: !0,
            data: o
        };
    }
    if (r === s.Zp.array && n === s.Zp.array) {
        if (e.length !== t.length) return {
            valid: !1
        };
        const r = [];
        for(let n = 0; n < e.length; n++){
            const s = de(e[n], t[n]);
            if (!s.valid) return {
                valid: !1
            };
            r.push(s.data);
        }
        return {
            valid: !0,
            data: r
        };
    }
    return r === s.Zp.date && n === s.Zp.date && +e === +t ? {
        valid: !0,
        data: e
    } : {
        valid: !1
    };
}
class pe extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e), s = (e, s)=>{
            if (f(e) || f(s)) return p;
            const o = de(e.value, s.value);
            return o.valid ? ((g(e) || g(s)) && t.dirty(), {
                status: t.value,
                value: o.data
            }) : (u(r, {
                code: n.eq.invalid_intersection_types
            }), p);
        };
        return r.common.async ? Promise.all([
            this._def.left._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }),
            this._def.right._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            })
        ]).then(([e, t])=>s(e, t)) : s(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }));
    }
}
pe.create = (e, t, r)=>new pe({
        left: e,
        right: t,
        typeName: Oe.ZodIntersection,
        ...b(r)
    });
class me extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== s.Zp.array) return u(r, {
            code: n.eq.invalid_type,
            expected: s.Zp.array,
            received: r.parsedType
        }), p;
        if (r.data.length < this._def.items.length) return u(r, {
            code: n.eq.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), p;
        !this._def.rest && r.data.length > this._def.items.length && (u(r, {
            code: n.eq.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), t.dirty());
        const o = [
            ...r.data
        ].map((e, t)=>{
            const n = this._def.items[t] || this._def.rest;
            return n ? n._parse(new v(r, e, r.path, t)) : null;
        }).filter((e)=>!!e);
        return r.common.async ? Promise.all(o).then((e)=>d.mergeArray(t, e)) : d.mergeArray(t, o);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new me({
            ...this._def,
            rest: e
        });
    }
}
me.create = (e, t)=>{
    if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new me({
        items: e,
        typeName: Oe.ZodTuple,
        rest: null,
        ...b(t)
    });
};
class he extends S {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== s.Zp.object) return u(r, {
            code: n.eq.invalid_type,
            expected: s.Zp.object,
            received: r.parsedType
        }), p;
        const o = [], i = this._def.keyType, a = this._def.valueType;
        for(const e in r.data)o.push({
            key: i._parse(new v(r, e, r.path, e)),
            value: a._parse(new v(r, r.data[e], r.path, e)),
            alwaysSet: e in r.data
        });
        return r.common.async ? d.mergeObjectAsync(t, o) : d.mergeObjectSync(t, o);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, t, r) {
        return new he(t instanceof S ? {
            keyType: e,
            valueType: t,
            typeName: Oe.ZodRecord,
            ...b(r)
        } : {
            keyType: W.create(),
            valueType: e,
            typeName: Oe.ZodRecord,
            ...b(t)
        });
    }
}
class fe extends S {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== s.Zp.map) return u(r, {
            code: n.eq.invalid_type,
            expected: s.Zp.map,
            received: r.parsedType
        }), p;
        const o = this._def.keyType, i = this._def.valueType, a = [
            ...r.data.entries()
        ].map(([e, t], n)=>({
                key: o._parse(new v(r, e, r.path, [
                    n,
                    "key"
                ])),
                value: i._parse(new v(r, t, r.path, [
                    n,
                    "value"
                ]))
            }));
        if (r.common.async) {
            const e = new Map;
            return Promise.resolve().then(async ()=>{
                for (const r of a){
                    const n = await r.key, s = await r.value;
                    if ("aborted" === n.status || "aborted" === s.status) return p;
                    "dirty" !== n.status && "dirty" !== s.status || t.dirty(), e.set(n.value, s.value);
                }
                return {
                    status: t.value,
                    value: e
                };
            });
        }
        {
            const e = new Map;
            for (const r of a){
                const n = r.key, s = r.value;
                if ("aborted" === n.status || "aborted" === s.status) return p;
                "dirty" !== n.status && "dirty" !== s.status || t.dirty(), e.set(n.value, s.value);
            }
            return {
                status: t.value,
                value: e
            };
        }
    }
}
fe.create = (e, t, r)=>new fe({
        valueType: t,
        keyType: e,
        typeName: Oe.ZodMap,
        ...b(r)
    });
class ge extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== s.Zp.set) return u(r, {
            code: n.eq.invalid_type,
            expected: s.Zp.set,
            received: r.parsedType
        }), p;
        const o = this._def;
        null !== o.minSize && r.data.size < o.minSize.value && (u(r, {
            code: n.eq.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message
        }), t.dirty()), null !== o.maxSize && r.data.size > o.maxSize.value && (u(r, {
            code: n.eq.too_big,
            maximum: o.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.maxSize.message
        }), t.dirty());
        const i = this._def.valueType;
        function a(e) {
            const r = new Set;
            for (const n of e){
                if ("aborted" === n.status) return p;
                "dirty" === n.status && t.dirty(), r.add(n.value);
            }
            return {
                status: t.value,
                value: r
            };
        }
        const c = [
            ...r.data.values()
        ].map((e, t)=>i._parse(new v(r, e, r.path, t)));
        return r.common.async ? Promise.all(c).then((e)=>a(e)) : a(c);
    }
    min(e, t) {
        return new ge({
            ...this._def,
            minSize: {
                value: e,
                message: c.toString(t)
            }
        });
    }
    max(e, t) {
        return new ge({
            ...this._def,
            maxSize: {
                value: e,
                message: c.toString(t)
            }
        });
    }
    size(e, t) {
        return this.min(e, t).max(e, t);
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
ge.create = (e, t)=>new ge({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: Oe.ZodSet,
        ...b(t)
    });
class ye extends S {
    get schema() {
        return this._def.getter();
    }
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        });
    }
}
ye.create = (e, t)=>new ye({
        getter: e,
        typeName: Oe.ZodLazy,
        ...b(t)
    });
class we extends S {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                received: t.data,
                code: n.eq.invalid_literal,
                expected: this._def.value
            }), p;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
    get value() {
        return this._def.value;
    }
}
function ve(e, t) {
    return new _e({
        values: e,
        typeName: Oe.ZodEnum,
        ...b(t)
    });
}
we.create = (e, t)=>new we({
        value: e,
        typeName: Oe.ZodLiteral,
        ...b(t)
    });
class _e extends S {
    _parse(e) {
        if ("string" != typeof e.data) {
            const t = this._getOrReturnCtx(e), r = this._def.values;
            return u(t, {
                expected: s.ZS.joinValues(r),
                received: t.parsedType,
                code: n.eq.invalid_type
            }), p;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
            const t = this._getOrReturnCtx(e), r = this._def.values;
            return u(t, {
                received: t.data,
                code: n.eq.invalid_enum_value,
                options: r
            }), p;
        }
        return h(e.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    get Values() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    extract(e, t = this._def) {
        return _e.create(e, {
            ...this._def,
            ...t
        });
    }
    exclude(e, t = this._def) {
        return _e.create(this.options.filter((t)=>!e.includes(t)), {
            ...this._def,
            ...t
        });
    }
}
_e.create = ve;
class be extends S {
    _parse(e) {
        const t = s.ZS.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
        if (r.parsedType !== s.Zp.string && r.parsedType !== s.Zp.number) {
            const e = s.ZS.objectValues(t);
            return u(r, {
                expected: s.ZS.joinValues(e),
                received: r.parsedType,
                code: n.eq.invalid_type
            }), p;
        }
        if (this._cache || (this._cache = new Set(s.ZS.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
            const e = s.ZS.objectValues(t);
            return u(r, {
                received: r.data,
                code: n.eq.invalid_enum_value,
                options: e
            }), p;
        }
        return h(e.data);
    }
    get enum() {
        return this._def.values;
    }
}
be.create = (e, t)=>new be({
        values: e,
        typeName: Oe.ZodNativeEnum,
        ...b(t)
    });
class Se extends S {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== s.Zp.promise && !1 === t.common.async) return u(t, {
            code: n.eq.invalid_type,
            expected: s.Zp.promise,
            received: t.parsedType
        }), p;
        const r = t.parsedType === s.Zp.promise ? t.data : Promise.resolve(t.data);
        return h(r.then((e)=>this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap
            })));
    }
}
Se.create = (e, t)=>new Se({
        type: e,
        typeName: Oe.ZodPromise,
        ...b(t)
    });
class ke extends S {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === Oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e), n = this._def.effect || null, o = {
            addIssue: (e)=>{
                u(r, e), e.fatal ? t.abort() : t.dirty();
            },
            get path () {
                return r.path;
            }
        };
        if (o.addIssue = o.addIssue.bind(o), "preprocess" === n.type) {
            const e = n.transform(r.data, o);
            if (r.common.async) return Promise.resolve(e).then(async (e)=>{
                if ("aborted" === t.value) return p;
                const n = await this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r
                });
                return "aborted" === n.status ? p : "dirty" === n.status || "dirty" === t.value ? m(n.value) : n;
            });
            {
                if ("aborted" === t.value) return p;
                const n = this._def.schema._parseSync({
                    data: e,
                    path: r.path,
                    parent: r
                });
                return "aborted" === n.status ? p : "dirty" === n.status || "dirty" === t.value ? m(n.value) : n;
            }
        }
        if ("refinement" === n.type) {
            const e = (e)=>{
                const t = n.refinement(e, o);
                if (r.common.async) return Promise.resolve(t);
                if (t instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return e;
            };
            if (!1 === r.common.async) {
                const n = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return "aborted" === n.status ? p : ("dirty" === n.status && t.dirty(), e(n.value), {
                    status: t.value,
                    value: n.value
                });
            }
            return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then((r)=>"aborted" === r.status ? p : ("dirty" === r.status && t.dirty(), e(r.value).then(()=>({
                        status: t.value,
                        value: r.value
                    }))));
        }
        if ("transform" === n.type) {
            if (!1 === r.common.async) {
                const e = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!y(e)) return p;
                const s = n.transform(e.value, o);
                if (s instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: s
                };
            }
            return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then((e)=>y(e) ? Promise.resolve(n.transform(e.value, o)).then((e)=>({
                        status: t.value,
                        value: e
                    })) : p);
        }
        s.ZS.assertNever(n);
    }
}
ke.create = (e, t, r)=>new ke({
        schema: e,
        typeName: Oe.ZodEffects,
        effect: t,
        ...b(r)
    }), ke.createWithPreprocess = (e, t, r)=>new ke({
        schema: t,
        effect: {
            type: "preprocess",
            transform: e
        },
        typeName: Oe.ZodEffects,
        ...b(r)
    });
class xe extends S {
    _parse(e) {
        return this._getType(e) === s.Zp.undefined ? h(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
xe.create = (e, t)=>new xe({
        innerType: e,
        typeName: Oe.ZodOptional,
        ...b(t)
    });
class Ee extends S {
    _parse(e) {
        return this._getType(e) === s.Zp.null ? h(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
Ee.create = (e, t)=>new Ee({
        innerType: e,
        typeName: Oe.ZodNullable,
        ...b(t)
    });
class Ie extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === s.Zp.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
Ie.create = (e, t)=>new Ie({
        innerType: e,
        typeName: Oe.ZodDefault,
        defaultValue: "function" == typeof t.default ? t.default : ()=>t.default,
        ...b(t)
    });
class Te extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), r = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }, s = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return w(s) ? s.then((e)=>({
                status: "valid",
                value: "valid" === e.status ? e.value : this._def.catchValue({
                    get error () {
                        return new n.G(r.common.issues);
                    },
                    input: r.data
                })
            })) : {
            status: "valid",
            value: "valid" === s.status ? s.value : this._def.catchValue({
                get error () {
                    return new n.G(r.common.issues);
                },
                input: r.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
Te.create = (e, t)=>new Te({
        innerType: e,
        typeName: Oe.ZodCatch,
        catchValue: "function" == typeof t.catch ? t.catch : ()=>t.catch,
        ...b(t)
    });
class Ce extends S {
    _parse(e) {
        if (this._getType(e) !== s.Zp.nan) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: s.Zp.nan,
                received: t.parsedType
            }), p;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
}
Ce.create = (e)=>new Ce({
        typeName: Oe.ZodNaN,
        ...b(e)
    });
Symbol("zod_brand");
class Pe extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), r = t.data;
        return this._def.type._parse({
            data: r,
            path: t.path,
            parent: t
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class Ae extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.common.async) {
            return (async ()=>{
                const e = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), m(e.value)) : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r
                });
            })();
        }
        {
            const e = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), {
                status: "dirty",
                value: e.value
            }) : this._def.out._parseSync({
                data: e.value,
                path: r.path,
                parent: r
            });
        }
    }
    static create(e, t) {
        return new Ae({
            in: e,
            out: t,
            typeName: Oe.ZodPipeline
        });
    }
}
class Re extends S {
    _parse(e) {
        const t = this._def.innerType._parse(e), r = (e)=>(y(e) && (e.value = Object.freeze(e.value)), e);
        return w(t) ? t.then((e)=>r(e)) : r(t);
    }
    unwrap() {
        return this._def.innerType;
    }
}
function Me(e, t) {
    const r = "function" == typeof e ? e(t) : "string" == typeof e ? {
        message: e
    } : e;
    return "string" == typeof r ? {
        message: r
    } : r;
}
function Je(e, t = {}, r) {
    return e ? te.create().superRefine((n, s)=>{
        const o = e(n);
        if (o instanceof Promise) return o.then((e)=>{
            if (!e) {
                const e = Me(t, n), o = e.fatal ?? r ?? !0;
                s.addIssue({
                    code: "custom",
                    ...e,
                    fatal: o
                });
            }
        });
        if (!o) {
            const e = Me(t, n), o = e.fatal ?? r ?? !0;
            s.addIssue({
                code: "custom",
                ...e,
                fatal: o
            });
        }
    }) : te.create();
}
Re.create = (e, t)=>new Re({
        innerType: e,
        typeName: Oe.ZodReadonly,
        ...b(t)
    });
ae.lazycreate;
var Oe;
!function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
}(Oe || (Oe = {}));
const Be = (e, t = {
    message: `Input not instance of ${e.name}`
})=>Je((t)=>t instanceof e, t), De = W.create, qe = K.create, Ne = (Ce.create, V.create, Y.create), Fe = (Q.create, X.create, Z.create, ee.create), Ue = te.create, Le = re.create, $e = ne.create, je = (se.create, oe.create), Ge = ae.create, ze = (ae.strictCreate, ce.create), We = ue.create, He = (pe.create, me.create), Ke = he.create, Ve = (fe.create, ge.create, ye.create), Ye = we.create, Qe = _e.create, Xe = be.create, Ze = (Se.create, ke.create, xe.create), et = (Ee.create, ke.createWithPreprocess);
Ae.create;
