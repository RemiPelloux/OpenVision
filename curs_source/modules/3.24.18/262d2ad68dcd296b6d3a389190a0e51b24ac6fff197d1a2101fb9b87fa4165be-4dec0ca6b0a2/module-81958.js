"use strict";
require.d(exports, {
    kY: ()=>De,
    bv: ()=>ae,
    Ii: ()=>ke,
    ND: ()=>W,
    bz: ()=>$e,
    YO: ()=>Je,
    zM: ()=>Ue,
    Ie: ()=>Oe,
    gM: ()=>We,
    k5: ()=>Ze,
    Nl: ()=>Ne,
    RZ: ()=>Ve,
    eu: ()=>Ke,
    fc: ()=>Xe,
    Zm: ()=>je,
    ch: ()=>Be,
    ai: ()=>Le,
    Ik: ()=>ze,
    lq: ()=>Qe,
    vk: ()=>et,
    g1: ()=>Ye,
    Yj: ()=>Fe,
    PV: ()=>Ge,
    KC: ()=>He,
    L5: ()=>qe
});
var n = require("./module-82590.js"), o = require("./module-98517.js");
const s = (e, t)=>{
    let r;
    switch(e.code){
        case n.eq.invalid_type:
            r = e.received === o.Zp.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
            break;
        case n.eq.invalid_literal:
            r = `Invalid literal value, expected ${JSON.stringify(e.expected, o.ZS.jsonStringifyReplacer)}`;
            break;
        case n.eq.unrecognized_keys:
            r = `Unrecognized key(s) in object: ${o.ZS.joinValues(e.keys, ", ")}`;
            break;
        case n.eq.invalid_union:
            r = "Invalid input";
            break;
        case n.eq.invalid_union_discriminator:
            r = `Invalid discriminator value. Expected ${o.ZS.joinValues(e.options)}`;
            break;
        case n.eq.invalid_enum_value:
            r = `Invalid enum value. Expected ${o.ZS.joinValues(e.options)}, received '${e.received}'`;
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
            "object" == typeof e.validation ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : o.ZS.assertNever(e.validation) : r = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
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
            r = t.defaultError, o.ZS.assertNever(e);
    }
    return {
        message: r
    };
};
let i = s;
function a() {
    return i;
}
var l;
!function(e) {
    e.errToObj = (e)=>"string" == typeof e ? {
            message: e
        } : e || {}, e.toString = (e)=>"string" == typeof e ? e : e?.message;
}(l || (l = {}));
const c = (e)=>{
    const { data: t, path: r, errorMaps: n, issueData: o } = e, s = [
        ...r,
        ...o.path || []
    ], i = {
        ...o,
        path: s
    };
    if (void 0 !== o.message) return {
        ...o,
        path: s,
        message: o.message
    };
    let a = "";
    const l = n.filter((e)=>!!e).slice().reverse();
    for (const e of l)a = e(i, {
        data: t,
        defaultError: a
    }).message;
    return {
        ...o,
        path: s,
        message: a
    };
};
function u(e, t) {
    const r = a(), n = c({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            r,
            r === s ? void 0 : s
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
            const { key: t, value: o } = n;
            if ("aborted" === t.status) return p;
            if ("aborted" === o.status) return p;
            "dirty" === t.status && e.dirty(), "dirty" === o.status && e.dirty(), "__proto__" === t.value || void 0 === o.value && !n.alwaysSet || (r[t.value] = o.value);
        }
        return {
            status: e.value,
            value: r
        };
    }
}
const p = Object.freeze({
    status: "aborted"
}), h = (e)=>({
        status: "dirty",
        value: e
    }), m = (e)=>({
        status: "valid",
        value: e
    }), f = (e)=>"aborted" === e.status, g = (e)=>"dirty" === e.status, y = (e)=>"valid" === e.status, v = (e)=>"undefined" != typeof Promise && e instanceof Promise;
class w {
    constructor(e, t, r, n){
        this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = n;
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
}
const b = (e, t)=>{
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
function _(e) {
    if (!e) return {};
    const { errorMap: t, invalid_type_error: r, required_error: n, description: o } = e;
    if (t && (r || n)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    if (t) return {
        errorMap: t,
        description: o
    };
    return {
        errorMap: (t, o)=>{
            const { message: s } = e;
            return "invalid_enum_value" === t.code ? {
                message: s ?? o.defaultError
            } : void 0 === o.data ? {
                message: s ?? n ?? o.defaultError
            } : "invalid_type" !== t.code ? {
                message: o.defaultError
            } : {
                message: s ?? r ?? o.defaultError
            };
        },
        description: o
    };
}
class S {
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return (0, o.CR)(e.data);
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: (0, o.CR)(e.data),
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
                parsedType: (0, o.CR)(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        };
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (v(t)) throw new Error("Synchronous parse encountered promise.");
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
            parsedType: (0, o.CR)(e)
        }, n = this._parseSync({
            data: e,
            path: r.path,
            parent: r
        });
        return b(r, n);
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
            parsedType: (0, o.CR)(e)
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
            parsedType: (0, o.CR)(e)
        }, n = this._parse({
            data: e,
            path: r.path,
            parent: r
        }), s = await (v(n) ? n : Promise.resolve(n));
        return b(r, s);
    }
    refine(e, t) {
        const r = (e)=>"string" == typeof t || void 0 === t ? {
                message: t
            } : "function" == typeof t ? t(e) : t;
        return this._refinement((t, o)=>{
            const s = e(t), i = ()=>o.addIssue({
                    code: n.eq.custom,
                    ...r(t)
                });
            return "undefined" != typeof Promise && s instanceof Promise ? s.then((e)=>!!e || (i(), !1)) : !!s || (i(), !1);
        });
    }
    refinement(e, t) {
        return this._refinement((r, n)=>!!e(r) || (n.addIssue("function" == typeof t ? t(r, n) : t), !1));
    }
    _refinement(e) {
        return new xe({
            schema: this,
            typeName: De.ZodEffects,
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
        return ke.create(this, this._def);
    }
    nullable() {
        return Ee.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return se.create(this);
    }
    promise() {
        return Se.create(this, this._def);
    }
    or(e) {
        return le.create([
            this,
            e
        ], this._def);
    }
    and(e) {
        return pe.create(this, e, this._def);
    }
    transform(e) {
        return new xe({
            ..._(this._def),
            schema: this,
            typeName: De.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        });
    }
    default(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new Te({
            ..._(this._def),
            innerType: this,
            defaultValue: t,
            typeName: De.ZodDefault
        });
    }
    brand() {
        return new Ae({
            typeName: De.ZodBranded,
            type: this,
            ..._(this._def)
        });
    }
    catch(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new Ce({
            ..._(this._def),
            innerType: this,
            catchValue: t,
            typeName: De.ZodCatch
        });
    }
    describe(e) {
        return new (0, this.constructor)({
            ...this._def,
            description: e
        });
    }
    pipe(e) {
        return Pe.create(this, e);
    }
    readonly() {
        return Me.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const x = /^c[^\s-]{8,}$/i, k = /^[0-9a-z]+$/, E = /^[0-9A-HJKMNP-TV-Z]{26}$/i, T = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, C = /^[a-z0-9_-]{21}$/i, I = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, A = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, P = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let M;
const R = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, O = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, D = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, N = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, F = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, L = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, U = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", B = new RegExp(`^${U}$`);
function $(e) {
    let t = "[0-5]\\d";
    e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`);
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision ? "+" : "?"}`;
}
function q(e) {
    return new RegExp(`^${$(e)}$`);
}
function j(e) {
    let t = `${U}T${$(e)}`;
    const r = [];
    return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function J(e, t) {
    return !("v4" !== t && t || !R.test(e)) || !("v6" !== t && t || !D.test(e));
}
function z(e, t) {
    if (!I.test(e)) return !1;
    try {
        const [r] = e.split(".");
        if (!r) return !1;
        const n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), o = JSON.parse(atob(n));
        return "object" == typeof o && null !== o && (!("typ" in o) || "JWT" === o?.typ) && !!o.alg && (!t || o.alg === t);
    } catch  {
        return !1;
    }
}
function H(e, t) {
    return !("v4" !== t && t || !O.test(e)) || !("v6" !== t && t || !N.test(e));
}
class W extends S {
    _parse(e) {
        this._def.coerce && (e.data = String(e.data));
        if (this._getType(e) !== o.Zp.string) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.string,
                received: t.parsedType
            }), p;
        }
        const t = new d;
        let r;
        for (const s of this._def.checks)if ("min" === s.kind) e.data.length < s.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_small,
            minimum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message
        }), t.dirty());
        else if ("max" === s.kind) e.data.length > s.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message
        }), t.dirty());
        else if ("length" === s.kind) {
            const o = e.data.length > s.value, i = e.data.length < s.value;
            (o || i) && (r = this._getOrReturnCtx(e, r), o ? u(r, {
                code: n.eq.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message
            }) : i && u(r, {
                code: n.eq.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message
            }), t.dirty());
        } else if ("email" === s.kind) P.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "email",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("emoji" === s.kind) M || (M = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), M.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "emoji",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("uuid" === s.kind) T.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "uuid",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("nanoid" === s.kind) C.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "nanoid",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("cuid" === s.kind) x.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cuid",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("cuid2" === s.kind) k.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cuid2",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("ulid" === s.kind) E.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "ulid",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty());
        else if ("url" === s.kind) try {
            new URL(e.data);
        } catch  {
            r = this._getOrReturnCtx(e, r), u(r, {
                validation: "url",
                code: n.eq.invalid_string,
                message: s.message
            }), t.dirty();
        }
        else if ("regex" === s.kind) {
            s.regex.lastIndex = 0;
            s.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                validation: "regex",
                code: n.eq.invalid_string,
                message: s.message
            }), t.dirty());
        } else if ("trim" === s.kind) e.data = e.data.trim();
        else if ("includes" === s.kind) e.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                includes: s.value,
                position: s.position
            },
            message: s.message
        }), t.dirty());
        else if ("toLowerCase" === s.kind) e.data = e.data.toLowerCase();
        else if ("toUpperCase" === s.kind) e.data = e.data.toUpperCase();
        else if ("startsWith" === s.kind) e.data.startsWith(s.value) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                startsWith: s.value
            },
            message: s.message
        }), t.dirty());
        else if ("endsWith" === s.kind) e.data.endsWith(s.value) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.invalid_string,
            validation: {
                endsWith: s.value
            },
            message: s.message
        }), t.dirty());
        else if ("datetime" === s.kind) {
            j(s).test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "datetime",
                message: s.message
            }), t.dirty());
        } else if ("date" === s.kind) {
            B.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "date",
                message: s.message
            }), t.dirty());
        } else if ("time" === s.kind) {
            q(s).test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
                code: n.eq.invalid_string,
                validation: "time",
                message: s.message
            }), t.dirty());
        } else "duration" === s.kind ? A.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "duration",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : "ip" === s.kind ? J(e.data, s.version) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "ip",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : "jwt" === s.kind ? z(e.data, s.alg) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "jwt",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : "cidr" === s.kind ? H(e.data, s.version) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "cidr",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : "base64" === s.kind ? F.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "base64",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : "base64url" === s.kind ? L.test(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            validation: "base64url",
            code: n.eq.invalid_string,
            message: s.message
        }), t.dirty()) : o.ZS.assertNever(s);
        return {
            status: t.value,
            value: e.data
        };
    }
    _regex(e, t, r) {
        return this.refinement((t)=>e.test(t), {
            validation: t,
            code: n.eq.invalid_string,
            ...l.errToObj(r)
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
            ...l.errToObj(e)
        });
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...l.errToObj(e)
        });
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...l.errToObj(e)
        });
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...l.errToObj(e)
        });
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...l.errToObj(e)
        });
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...l.errToObj(e)
        });
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...l.errToObj(e)
        });
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...l.errToObj(e)
        });
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...l.errToObj(e)
        });
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...l.errToObj(e)
        });
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...l.errToObj(e)
        });
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...l.errToObj(e)
        });
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...l.errToObj(e)
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
            ...l.errToObj(e?.message)
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
            ...l.errToObj(e?.message)
        });
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...l.errToObj(e)
        });
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...l.errToObj(t)
        });
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t?.position,
            ...l.errToObj(t?.message)
        });
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...l.errToObj(t)
        });
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...l.errToObj(t)
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...l.errToObj(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...l.errToObj(t)
        });
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...l.errToObj(t)
        });
    }
    nonempty(e) {
        return this.min(1, l.errToObj(e));
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
function G(e, t) {
    const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, o = r > n ? r : n;
    return Number.parseInt(e.toFixed(o).replace(".", "")) % Number.parseInt(t.toFixed(o).replace(".", "")) / 10 ** o;
}
W.create = (e)=>new W({
        checks: [],
        typeName: De.ZodString,
        coerce: e?.coerce ?? !1,
        ..._(e)
    });
class Y extends S {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e) {
        this._def.coerce && (e.data = Number(e.data));
        if (this._getType(e) !== o.Zp.number) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.number,
                received: t.parsedType
            }), p;
        }
        let t;
        const r = new d;
        for (const s of this._def.checks)if ("int" === s.kind) o.ZS.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message
        }), r.dirty());
        else if ("min" === s.kind) {
            (s.inclusive ? e.data < s.value : e.data <= s.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_small,
                minimum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }), r.dirty());
        } else if ("max" === s.kind) {
            (s.inclusive ? e.data > s.value : e.data >= s.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }), r.dirty());
        } else "multipleOf" === s.kind ? 0 !== G(e.data, s.value) && (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_multiple_of,
            multipleOf: s.value,
            message: s.message
        }), r.dirty()) : "finite" === s.kind ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_finite,
            message: s.message
        }), r.dirty()) : o.ZS.assertNever(s);
        return {
            status: r.value,
            value: e.data
        };
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, l.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, l.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, l.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, l.toString(t));
    }
    setLimit(e, t, r, n) {
        return new Y({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: t,
                    inclusive: r,
                    message: l.toString(n)
                }
            ]
        });
    }
    _addCheck(e) {
        return new Y({
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
            message: l.toString(e)
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: l.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: l.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: l.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: l.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: l.toString(t)
        });
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: l.toString(e)
        });
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: l.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: l.toString(e)
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
        return !!this._def.checks.find((e)=>"int" === e.kind || "multipleOf" === e.kind && o.ZS.isInteger(e.value));
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
Y.create = (e)=>new Y({
        checks: [],
        typeName: De.ZodNumber,
        coerce: e?.coerce || !1,
        ..._(e)
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
        if (this._getType(e) !== o.Zp.bigint) return this._getInvalidInput(e);
        let t;
        const r = new d;
        for (const s of this._def.checks)if ("min" === s.kind) {
            (s.inclusive ? e.data < s.value : e.data <= s.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }), r.dirty());
        } else if ("max" === s.kind) {
            (s.inclusive ? e.data > s.value : e.data >= s.value) && (t = this._getOrReturnCtx(e, t), u(t, {
                code: n.eq.too_big,
                type: "bigint",
                maximum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }), r.dirty());
        } else "multipleOf" === s.kind ? e.data % s.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), u(t, {
            code: n.eq.not_multiple_of,
            multipleOf: s.value,
            message: s.message
        }), r.dirty()) : o.ZS.assertNever(s);
        return {
            status: r.value,
            value: e.data
        };
    }
    _getInvalidInput(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: n.eq.invalid_type,
            expected: o.Zp.bigint,
            received: t.parsedType
        }), p;
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, l.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, l.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, l.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, l.toString(t));
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
                    message: l.toString(n)
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
            message: l.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: l.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: l.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: l.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: l.toString(t)
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
        typeName: De.ZodBigInt,
        coerce: e?.coerce ?? !1,
        ..._(e)
    });
class K extends S {
    _parse(e) {
        this._def.coerce && (e.data = Boolean(e.data));
        if (this._getType(e) !== o.Zp.boolean) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.boolean,
                received: t.parsedType
            }), p;
        }
        return m(e.data);
    }
}
K.create = (e)=>new K({
        typeName: De.ZodBoolean,
        coerce: e?.coerce || !1,
        ..._(e)
    });
class Z extends S {
    _parse(e) {
        this._def.coerce && (e.data = new Date(e.data));
        if (this._getType(e) !== o.Zp.date) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.date,
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
        for (const s of this._def.checks)"min" === s.kind ? e.data.getTime() < s.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: "date"
        }), t.dirty()) : "max" === s.kind ? e.data.getTime() > s.value && (r = this._getOrReturnCtx(e, r), u(r, {
            code: n.eq.too_big,
            message: s.message,
            inclusive: !0,
            exact: !1,
            maximum: s.value,
            type: "date"
        }), t.dirty()) : o.ZS.assertNever(s);
        return {
            status: t.value,
            value: new Date(e.data.getTime())
        };
    }
    _addCheck(e) {
        return new Z({
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
            message: l.toString(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: l.toString(t)
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
Z.create = (e)=>new Z({
        checks: [],
        coerce: e?.coerce || !1,
        typeName: De.ZodDate,
        ..._(e)
    });
class X extends S {
    _parse(e) {
        if (this._getType(e) !== o.Zp.symbol) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.symbol,
                received: t.parsedType
            }), p;
        }
        return m(e.data);
    }
}
X.create = (e)=>new X({
        typeName: De.ZodSymbol,
        ..._(e)
    });
class Q extends S {
    _parse(e) {
        if (this._getType(e) !== o.Zp.undefined) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.undefined,
                received: t.parsedType
            }), p;
        }
        return m(e.data);
    }
}
Q.create = (e)=>new Q({
        typeName: De.ZodUndefined,
        ..._(e)
    });
class ee extends S {
    _parse(e) {
        if (this._getType(e) !== o.Zp.null) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.null,
                received: t.parsedType
            }), p;
        }
        return m(e.data);
    }
}
ee.create = (e)=>new ee({
        typeName: De.ZodNull,
        ..._(e)
    });
class te extends S {
    constructor(){
        super(...arguments), this._any = !0;
    }
    _parse(e) {
        return m(e.data);
    }
}
te.create = (e)=>new te({
        typeName: De.ZodAny,
        ..._(e)
    });
class re extends S {
    constructor(){
        super(...arguments), this._unknown = !0;
    }
    _parse(e) {
        return m(e.data);
    }
}
re.create = (e)=>new re({
        typeName: De.ZodUnknown,
        ..._(e)
    });
class ne extends S {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: n.eq.invalid_type,
            expected: o.Zp.never,
            received: t.parsedType
        }), p;
    }
}
ne.create = (e)=>new ne({
        typeName: De.ZodNever,
        ..._(e)
    });
class oe extends S {
    _parse(e) {
        if (this._getType(e) !== o.Zp.undefined) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.void,
                received: t.parsedType
            }), p;
        }
        return m(e.data);
    }
}
oe.create = (e)=>new oe({
        typeName: De.ZodVoid,
        ..._(e)
    });
class se extends S {
    _parse(e) {
        const { ctx: t, status: r } = this._processInputParams(e), s = this._def;
        if (t.parsedType !== o.Zp.array) return u(t, {
            code: n.eq.invalid_type,
            expected: o.Zp.array,
            received: t.parsedType
        }), p;
        if (null !== s.exactLength) {
            const e = t.data.length > s.exactLength.value, o = t.data.length < s.exactLength.value;
            (e || o) && (u(t, {
                code: e ? n.eq.too_big : n.eq.too_small,
                minimum: o ? s.exactLength.value : void 0,
                maximum: e ? s.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: s.exactLength.message
            }), r.dirty());
        }
        if (null !== s.minLength && t.data.length < s.minLength.value && (u(t, {
            code: n.eq.too_small,
            minimum: s.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.minLength.message
        }), r.dirty()), null !== s.maxLength && t.data.length > s.maxLength.value && (u(t, {
            code: n.eq.too_big,
            maximum: s.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.maxLength.message
        }), r.dirty()), t.common.async) return Promise.all([
            ...t.data
        ].map((e, r)=>s.type._parseAsync(new w(t, e, t.path, r)))).then((e)=>d.mergeArray(r, e));
        const i = [
            ...t.data
        ].map((e, r)=>s.type._parseSync(new w(t, e, t.path, r)));
        return d.mergeArray(r, i);
    }
    get element() {
        return this._def.type;
    }
    min(e, t) {
        return new se({
            ...this._def,
            minLength: {
                value: e,
                message: l.toString(t)
            }
        });
    }
    max(e, t) {
        return new se({
            ...this._def,
            maxLength: {
                value: e,
                message: l.toString(t)
            }
        });
    }
    length(e, t) {
        return new se({
            ...this._def,
            exactLength: {
                value: e,
                message: l.toString(t)
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
            t[r] = ke.create(ie(n));
        }
        return new ae({
            ...e._def,
            shape: ()=>t
        });
    }
    return e instanceof se ? new se({
        ...e._def,
        type: ie(e.element)
    }) : e instanceof ke ? ke.create(ie(e.unwrap())) : e instanceof Ee ? Ee.create(ie(e.unwrap())) : e instanceof he ? he.create(e.items.map((e)=>ie(e))) : e;
}
se.create = (e, t)=>new se({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: De.ZodArray,
        ..._(t)
    });
class ae extends S {
    constructor(){
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
        if (null !== this._cached) return this._cached;
        const e = this._def.shape(), t = o.ZS.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }, this._cached;
    }
    _parse(e) {
        if (this._getType(e) !== o.Zp.object) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.object,
                received: t.parsedType
            }), p;
        }
        const { status: t, ctx: r } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), a = [];
        if (!(this._def.catchall instanceof ne && "strip" === this._def.unknownKeys)) for(const e in r.data)i.includes(e) || a.push(e);
        const l = [];
        for (const e of i){
            const t = s[e], n = r.data[e];
            l.push({
                key: {
                    status: "valid",
                    value: e
                },
                value: t._parse(new w(r, n, r.path, e)),
                alwaysSet: e in r.data
            });
        }
        if (this._def.catchall instanceof ne) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e) for (const e of a)l.push({
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
                l.push({
                    key: {
                        status: "valid",
                        value: t
                    },
                    value: e._parse(new w(r, n, r.path, t)),
                    alwaysSet: t in r.data
                });
            }
        }
        return r.common.async ? Promise.resolve().then(async ()=>{
            const e = [];
            for (const t of l){
                const r = await t.key, n = await t.value;
                e.push({
                    key: r,
                    value: n,
                    alwaysSet: t.alwaysSet
                });
            }
            return e;
        }).then((e)=>d.mergeObjectSync(t, e)) : d.mergeObjectSync(t, l);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return l.errToObj, new ae({
            ...this._def,
            unknownKeys: "strict",
            ...void 0 !== e ? {
                errorMap: (t, r)=>{
                    const n = this._def.errorMap?.(t, r).message ?? r.defaultError;
                    return "unrecognized_keys" === t.code ? {
                        message: l.errToObj(e).message ?? n
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
            typeName: De.ZodObject
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
        for (const r of o.ZS.objectKeys(e))e[r] && this.shape[r] && (t[r] = this.shape[r]);
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    omit(e) {
        const t = {};
        for (const r of o.ZS.objectKeys(this.shape))e[r] || (t[r] = this.shape[r]);
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
        for (const r of o.ZS.objectKeys(this.shape)){
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
        for (const r of o.ZS.objectKeys(this.shape))if (e && !e[r]) t[r] = this.shape[r];
        else {
            let e = this.shape[r];
            for(; e instanceof ke;)e = e._def.innerType;
            t[r] = e;
        }
        return new ae({
            ...this._def,
            shape: ()=>t
        });
    }
    keyof() {
        return we(o.ZS.objectKeys(this.shape));
    }
}
ae.create = (e, t)=>new ae({
        shape: ()=>e,
        unknownKeys: "strip",
        catchall: ne.create(),
        typeName: De.ZodObject,
        ..._(t)
    }), ae.strictCreate = (e, t)=>new ae({
        shape: ()=>e,
        unknownKeys: "strict",
        catchall: ne.create(),
        typeName: De.ZodObject,
        ..._(t)
    }), ae.lazycreate = (e, t)=>new ae({
        shape: e,
        unknownKeys: "strip",
        catchall: ne.create(),
        typeName: De.ZodObject,
        ..._(t)
    });
class le extends S {
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
            const o = [];
            for (const n of r){
                const r = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }, s = n._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: r
                });
                if ("valid" === s.status) return s;
                "dirty" !== s.status || e || (e = {
                    result: s,
                    ctx: r
                }), r.common.issues.length && o.push(r.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const s = o.map((e)=>new n.G(e));
            return u(t, {
                code: n.eq.invalid_union,
                unionErrors: s
            }), p;
        }
    }
    get options() {
        return this._def.options;
    }
}
le.create = (e, t)=>new le({
        options: e,
        typeName: De.ZodUnion,
        ..._(t)
    });
const ce = (e)=>e instanceof ye ? ce(e.schema) : e instanceof xe ? ce(e.innerType()) : e instanceof ve ? [
        e.value
    ] : e instanceof be ? e.options : e instanceof _e ? o.ZS.objectValues(e.enum) : e instanceof Te ? ce(e._def.innerType) : e instanceof Q ? [
        void 0
    ] : e instanceof ee ? [
        null
    ] : e instanceof ke ? [
        void 0,
        ...ce(e.unwrap())
    ] : e instanceof Ee ? [
        null,
        ...ce(e.unwrap())
    ] : e instanceof Ae || e instanceof Me ? ce(e.unwrap()) : e instanceof Ce ? ce(e._def.innerType) : [];
class ue extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== o.Zp.object) return u(t, {
            code: n.eq.invalid_type,
            expected: o.Zp.object,
            received: t.parsedType
        }), p;
        const r = this.discriminator, s = t.data[r], i = this.optionsMap.get(s);
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
            const t = ce(r.shape[e]);
            if (!t.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const o of t){
                if (n.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
                n.set(o, r);
            }
        }
        return new ue({
            typeName: De.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ..._(r)
        });
    }
}
function de(e, t) {
    const r = (0, o.CR)(e), n = (0, o.CR)(t);
    if (e === t) return {
        valid: !0,
        data: e
    };
    if (r === o.Zp.object && n === o.Zp.object) {
        const r = o.ZS.objectKeys(t), n = o.ZS.objectKeys(e).filter((e)=>-1 !== r.indexOf(e)), s = {
            ...e,
            ...t
        };
        for (const r of n){
            const n = de(e[r], t[r]);
            if (!n.valid) return {
                valid: !1
            };
            s[r] = n.data;
        }
        return {
            valid: !0,
            data: s
        };
    }
    if (r === o.Zp.array && n === o.Zp.array) {
        if (e.length !== t.length) return {
            valid: !1
        };
        const r = [];
        for(let n = 0; n < e.length; n++){
            const o = de(e[n], t[n]);
            if (!o.valid) return {
                valid: !1
            };
            r.push(o.data);
        }
        return {
            valid: !0,
            data: r
        };
    }
    return r === o.Zp.date && n === o.Zp.date && +e === +t ? {
        valid: !0,
        data: e
    } : {
        valid: !1
    };
}
class pe extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e), o = (e, o)=>{
            if (f(e) || f(o)) return p;
            const s = de(e.value, o.value);
            return s.valid ? ((g(e) || g(o)) && t.dirty(), {
                status: t.value,
                value: s.data
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
        ]).then(([e, t])=>o(e, t)) : o(this._def.left._parseSync({
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
        typeName: De.ZodIntersection,
        ..._(r)
    });
class he extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== o.Zp.array) return u(r, {
            code: n.eq.invalid_type,
            expected: o.Zp.array,
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
        const s = [
            ...r.data
        ].map((e, t)=>{
            const n = this._def.items[t] || this._def.rest;
            return n ? n._parse(new w(r, e, r.path, t)) : null;
        }).filter((e)=>!!e);
        return r.common.async ? Promise.all(s).then((e)=>d.mergeArray(t, e)) : d.mergeArray(t, s);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new he({
            ...this._def,
            rest: e
        });
    }
}
he.create = (e, t)=>{
    if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new he({
        items: e,
        typeName: De.ZodTuple,
        rest: null,
        ..._(t)
    });
};
class me extends S {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== o.Zp.object) return u(r, {
            code: n.eq.invalid_type,
            expected: o.Zp.object,
            received: r.parsedType
        }), p;
        const s = [], i = this._def.keyType, a = this._def.valueType;
        for(const e in r.data)s.push({
            key: i._parse(new w(r, e, r.path, e)),
            value: a._parse(new w(r, r.data[e], r.path, e)),
            alwaysSet: e in r.data
        });
        return r.common.async ? d.mergeObjectAsync(t, s) : d.mergeObjectSync(t, s);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, t, r) {
        return new me(t instanceof S ? {
            keyType: e,
            valueType: t,
            typeName: De.ZodRecord,
            ..._(r)
        } : {
            keyType: W.create(),
            valueType: e,
            typeName: De.ZodRecord,
            ..._(t)
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
        if (r.parsedType !== o.Zp.map) return u(r, {
            code: n.eq.invalid_type,
            expected: o.Zp.map,
            received: r.parsedType
        }), p;
        const s = this._def.keyType, i = this._def.valueType, a = [
            ...r.data.entries()
        ].map(([e, t], n)=>({
                key: s._parse(new w(r, e, r.path, [
                    n,
                    "key"
                ])),
                value: i._parse(new w(r, t, r.path, [
                    n,
                    "value"
                ]))
            }));
        if (r.common.async) {
            const e = new Map;
            return Promise.resolve().then(async ()=>{
                for (const r of a){
                    const n = await r.key, o = await r.value;
                    if ("aborted" === n.status || "aborted" === o.status) return p;
                    "dirty" !== n.status && "dirty" !== o.status || t.dirty(), e.set(n.value, o.value);
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
                const n = r.key, o = r.value;
                if ("aborted" === n.status || "aborted" === o.status) return p;
                "dirty" !== n.status && "dirty" !== o.status || t.dirty(), e.set(n.value, o.value);
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
        typeName: De.ZodMap,
        ..._(r)
    });
class ge extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== o.Zp.set) return u(r, {
            code: n.eq.invalid_type,
            expected: o.Zp.set,
            received: r.parsedType
        }), p;
        const s = this._def;
        null !== s.minSize && r.data.size < s.minSize.value && (u(r, {
            code: n.eq.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message
        }), t.dirty()), null !== s.maxSize && r.data.size > s.maxSize.value && (u(r, {
            code: n.eq.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message
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
        const l = [
            ...r.data.values()
        ].map((e, t)=>i._parse(new w(r, e, r.path, t)));
        return r.common.async ? Promise.all(l).then((e)=>a(e)) : a(l);
    }
    min(e, t) {
        return new ge({
            ...this._def,
            minSize: {
                value: e,
                message: l.toString(t)
            }
        });
    }
    max(e, t) {
        return new ge({
            ...this._def,
            maxSize: {
                value: e,
                message: l.toString(t)
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
        typeName: De.ZodSet,
        ..._(t)
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
        typeName: De.ZodLazy,
        ..._(t)
    });
class ve extends S {
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
function we(e, t) {
    return new be({
        values: e,
        typeName: De.ZodEnum,
        ..._(t)
    });
}
ve.create = (e, t)=>new ve({
        value: e,
        typeName: De.ZodLiteral,
        ..._(t)
    });
class be extends S {
    _parse(e) {
        if ("string" != typeof e.data) {
            const t = this._getOrReturnCtx(e), r = this._def.values;
            return u(t, {
                expected: o.ZS.joinValues(r),
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
        return m(e.data);
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
        return be.create(e, {
            ...this._def,
            ...t
        });
    }
    exclude(e, t = this._def) {
        return be.create(this.options.filter((t)=>!e.includes(t)), {
            ...this._def,
            ...t
        });
    }
}
be.create = we;
class _e extends S {
    _parse(e) {
        const t = o.ZS.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
        if (r.parsedType !== o.Zp.string && r.parsedType !== o.Zp.number) {
            const e = o.ZS.objectValues(t);
            return u(r, {
                expected: o.ZS.joinValues(e),
                received: r.parsedType,
                code: n.eq.invalid_type
            }), p;
        }
        if (this._cache || (this._cache = new Set(o.ZS.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
            const e = o.ZS.objectValues(t);
            return u(r, {
                received: r.data,
                code: n.eq.invalid_enum_value,
                options: e
            }), p;
        }
        return m(e.data);
    }
    get enum() {
        return this._def.values;
    }
}
_e.create = (e, t)=>new _e({
        values: e,
        typeName: De.ZodNativeEnum,
        ..._(t)
    });
class Se extends S {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== o.Zp.promise && !1 === t.common.async) return u(t, {
            code: n.eq.invalid_type,
            expected: o.Zp.promise,
            received: t.parsedType
        }), p;
        const r = t.parsedType === o.Zp.promise ? t.data : Promise.resolve(t.data);
        return m(r.then((e)=>this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap
            })));
    }
}
Se.create = (e, t)=>new Se({
        type: e,
        typeName: De.ZodPromise,
        ..._(t)
    });
class xe extends S {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === De.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e), n = this._def.effect || null, s = {
            addIssue: (e)=>{
                u(r, e), e.fatal ? t.abort() : t.dirty();
            },
            get path () {
                return r.path;
            }
        };
        if (s.addIssue = s.addIssue.bind(s), "preprocess" === n.type) {
            const e = n.transform(r.data, s);
            if (r.common.async) return Promise.resolve(e).then(async (e)=>{
                if ("aborted" === t.value) return p;
                const n = await this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r
                });
                return "aborted" === n.status ? p : "dirty" === n.status || "dirty" === t.value ? h(n.value) : n;
            });
            {
                if ("aborted" === t.value) return p;
                const n = this._def.schema._parseSync({
                    data: e,
                    path: r.path,
                    parent: r
                });
                return "aborted" === n.status ? p : "dirty" === n.status || "dirty" === t.value ? h(n.value) : n;
            }
        }
        if ("refinement" === n.type) {
            const e = (e)=>{
                const t = n.refinement(e, s);
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
                const o = n.transform(e.value, s);
                if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: o
                };
            }
            return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then((e)=>y(e) ? Promise.resolve(n.transform(e.value, s)).then((e)=>({
                        status: t.value,
                        value: e
                    })) : p);
        }
        o.ZS.assertNever(n);
    }
}
xe.create = (e, t, r)=>new xe({
        schema: e,
        typeName: De.ZodEffects,
        effect: t,
        ..._(r)
    }), xe.createWithPreprocess = (e, t, r)=>new xe({
        schema: t,
        effect: {
            type: "preprocess",
            transform: e
        },
        typeName: De.ZodEffects,
        ..._(r)
    });
class ke extends S {
    _parse(e) {
        return this._getType(e) === o.Zp.undefined ? m(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ke.create = (e, t)=>new ke({
        innerType: e,
        typeName: De.ZodOptional,
        ..._(t)
    });
class Ee extends S {
    _parse(e) {
        return this._getType(e) === o.Zp.null ? m(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
Ee.create = (e, t)=>new Ee({
        innerType: e,
        typeName: De.ZodNullable,
        ..._(t)
    });
class Te extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === o.Zp.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
Te.create = (e, t)=>new Te({
        innerType: e,
        typeName: De.ZodDefault,
        defaultValue: "function" == typeof t.default ? t.default : ()=>t.default,
        ..._(t)
    });
class Ce extends S {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), r = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }, o = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return v(o) ? o.then((e)=>({
                status: "valid",
                value: "valid" === e.status ? e.value : this._def.catchValue({
                    get error () {
                        return new n.G(r.common.issues);
                    },
                    input: r.data
                })
            })) : {
            status: "valid",
            value: "valid" === o.status ? o.value : this._def.catchValue({
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
Ce.create = (e, t)=>new Ce({
        innerType: e,
        typeName: De.ZodCatch,
        catchValue: "function" == typeof t.catch ? t.catch : ()=>t.catch,
        ..._(t)
    });
class Ie extends S {
    _parse(e) {
        if (this._getType(e) !== o.Zp.nan) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                code: n.eq.invalid_type,
                expected: o.Zp.nan,
                received: t.parsedType
            }), p;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
}
Ie.create = (e)=>new Ie({
        typeName: De.ZodNaN,
        ..._(e)
    });
Symbol("zod_brand");
class Ae extends S {
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
class Pe extends S {
    _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.common.async) {
            return (async ()=>{
                const e = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), h(e.value)) : this._def.out._parseAsync({
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
        return new Pe({
            in: e,
            out: t,
            typeName: De.ZodPipeline
        });
    }
}
class Me extends S {
    _parse(e) {
        const t = this._def.innerType._parse(e), r = (e)=>(y(e) && (e.value = Object.freeze(e.value)), e);
        return v(t) ? t.then((e)=>r(e)) : r(t);
    }
    unwrap() {
        return this._def.innerType;
    }
}
function Re(e, t) {
    const r = "function" == typeof e ? e(t) : "string" == typeof e ? {
        message: e
    } : e;
    return "string" == typeof r ? {
        message: r
    } : r;
}
function Oe(e, t = {}, r) {
    return e ? te.create().superRefine((n, o)=>{
        const s = e(n);
        if (s instanceof Promise) return s.then((e)=>{
            if (!e) {
                const e = Re(t, n), s = e.fatal ?? r ?? !0;
                o.addIssue({
                    code: "custom",
                    ...e,
                    fatal: s
                });
            }
        });
        if (!s) {
            const e = Re(t, n), s = e.fatal ?? r ?? !0;
            o.addIssue({
                code: "custom",
                ...e,
                fatal: s
            });
        }
    }) : te.create();
}
Me.create = (e, t)=>new Me({
        innerType: e,
        typeName: De.ZodReadonly,
        ..._(t)
    });
ae.lazycreate;
var De;
!function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
}(De || (De = {}));
const Ne = (e, t = {
    message: `Input not instance of ${e.name}`
})=>Oe((t)=>t instanceof e, t), Fe = W.create, Le = Y.create, Ue = (Ie.create, V.create, K.create), Be = (Z.create, X.create, Q.create, ee.create), $e = te.create, qe = re.create, je = ne.create, Je = (oe.create, se.create), ze = ae.create, He = (ae.strictCreate, le.create), We = ue.create, Ge = (pe.create, he.create), Ye = me.create, Ve = (fe.create, ge.create, ye.create), Ke = ve.create, Ze = be.create, Xe = _e.create, Qe = (Se.create, xe.create, ke.create), et = (Ee.create, xe.createWithPreprocess);
Pe.create;
