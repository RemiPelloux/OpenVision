"use strict";
require.d(exports, {
    Ay: ()=>L,
    Ik: ()=>U
});
const n = Symbol("Let zodToJsonSchema decide on which parser to use"), s = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: !0,
    rejectedAdditionalProperties: !1,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: !1,
    definitions: {},
    errorMessages: !1,
    markdownDescription: !1,
    patternStrategy: "escape",
    applyRegexFlags: !1,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
}, o = (e)=>{
    const t = ((e)=>"string" == typeof e ? {
            ...s,
            name: e
        } : {
            ...s,
            ...e
        })(e), r = void 0 !== t.name ? [
        ...t.basePath,
        t.definitionPath,
        t.name
    ] : t.basePath;
    return {
        ...t,
        currentPath: r,
        propertyPath: void 0,
        seen: new Map(Object.entries(t.definitions).map(([e, r])=>[
                r._def,
                {
                    def: r._def,
                    path: [
                        ...t.basePath,
                        t.definitionPath,
                        e
                    ],
                    jsonSchema: void 0
                }
            ]))
    };
};
var i = require("./module-81958.js");
function a(e, t, r, n) {
    n?.errorMessages && r && (e.errorMessage = {
        ...e.errorMessage,
        [t]: r
    });
}
function c(e, t, r, n, s) {
    e[t] = r, a(e, t, n, s);
}
function l(e, t) {
    return D(e.type._def, t);
}
function u(e, t, r) {
    const n = r ?? t.dateStrategy;
    if (Array.isArray(n)) return {
        anyOf: n.map((r, n)=>u(e, t, r))
    };
    switch(n){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return d(e, t);
    }
}
const d = (e, t)=>{
    const r = {
        type: "integer",
        format: "unix-time"
    };
    if ("openApi3" === t.target) return r;
    for (const n of e.checks)switch(n.kind){
        case "min":
            c(r, "minimum", n.value, n.message, t);
            break;
        case "max":
            c(r, "maximum", n.value, n.message, t);
    }
    return r;
};
let p;
const m = /^[cC][^\s-]{8,}$/, h = /^[0-9a-z]+$/, f = /^[0-9A-HJKMNP-TV-Z]{26}$/, g = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/, y = ()=>(void 0 === p && (p = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), p), w = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, v = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, b = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, S = /^[a-zA-Z0-9_-]{21}$/, k = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
function x(e, t) {
    const r = {
        type: "string"
    };
    if (e.checks) for (const n of e.checks)switch(n.kind){
        case "min":
            c(r, "minLength", "number" == typeof r.minLength ? Math.max(r.minLength, n.value) : n.value, n.message, t);
            break;
        case "max":
            c(r, "maxLength", "number" == typeof r.maxLength ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
            break;
        case "email":
            switch(t.emailStrategy){
                case "format:email":
                    T(r, "email", n.message, t);
                    break;
                case "format:idn-email":
                    T(r, "idn-email", n.message, t);
                    break;
                case "pattern:zod":
                    C(r, g, n.message, t);
            }
            break;
        case "url":
            T(r, "uri", n.message, t);
            break;
        case "uuid":
            T(r, "uuid", n.message, t);
            break;
        case "regex":
            C(r, n.regex, n.message, t);
            break;
        case "cuid":
            C(r, m, n.message, t);
            break;
        case "cuid2":
            C(r, h, n.message, t);
            break;
        case "startsWith":
            C(r, RegExp(`^${E(n.value, t)}`), n.message, t);
            break;
        case "endsWith":
            C(r, RegExp(`${E(n.value, t)}$`), n.message, t);
            break;
        case "datetime":
            T(r, "date-time", n.message, t);
            break;
        case "date":
            T(r, "date", n.message, t);
            break;
        case "time":
            T(r, "time", n.message, t);
            break;
        case "duration":
            T(r, "duration", n.message, t);
            break;
        case "length":
            c(r, "minLength", "number" == typeof r.minLength ? Math.max(r.minLength, n.value) : n.value, n.message, t), c(r, "maxLength", "number" == typeof r.maxLength ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
            break;
        case "includes":
            C(r, RegExp(E(n.value, t)), n.message, t);
            break;
        case "ip":
            "v6" !== n.version && T(r, "ipv4", n.message, t), "v4" !== n.version && T(r, "ipv6", n.message, t);
            break;
        case "base64url":
            C(r, b, n.message, t);
            break;
        case "jwt":
            C(r, k, n.message, t);
            break;
        case "cidr":
            "v6" !== n.version && C(r, w, n.message, t), "v4" !== n.version && C(r, v, n.message, t);
            break;
        case "emoji":
            C(r, y(), n.message, t);
            break;
        case "ulid":
            C(r, f, n.message, t);
            break;
        case "base64":
            switch(t.base64Strategy){
                case "format:binary":
                    T(r, "binary", n.message, t);
                    break;
                case "contentEncoding:base64":
                    c(r, "contentEncoding", "base64", n.message, t);
                    break;
                case "pattern:zod":
                    C(r, _, n.message, t);
            }
            break;
        case "nanoid":
            C(r, S, n.message, t);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
            break;
        default:
            (()=>{})();
    }
    return r;
}
function E(e, t) {
    return "escape" === t.patternStrategy ? function(e) {
        let t = "";
        for(let r = 0; r < e.length; r++)I.has(e[r]) || (t += "\\"), t += e[r];
        return t;
    }(e) : e;
}
const I = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function T(e, t, r, n) {
    e.format || e.anyOf?.some((e)=>e.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
        format: e.format,
        ...e.errorMessage && n.errorMessages && {
            errorMessage: {
                format: e.errorMessage.format
            }
        }
    }), delete e.format, e.errorMessage && (delete e.errorMessage.format, 0 === Object.keys(e.errorMessage).length && delete e.errorMessage)), e.anyOf.push({
        format: t,
        ...r && n.errorMessages && {
            errorMessage: {
                format: r
            }
        }
    })) : c(e, "format", t, r, n);
}
function C(e, t, r, n) {
    e.pattern || e.allOf?.some((e)=>e.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
        pattern: e.pattern,
        ...e.errorMessage && n.errorMessages && {
            errorMessage: {
                pattern: e.errorMessage.pattern
            }
        }
    }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, 0 === Object.keys(e.errorMessage).length && delete e.errorMessage)), e.allOf.push({
        pattern: P(t, n),
        ...r && n.errorMessages && {
            errorMessage: {
                pattern: r
            }
        }
    })) : c(e, "pattern", P(t, n), r, n);
}
function P(e, t) {
    if (!t.applyRegexFlags || !e.flags) return e.source;
    const r = e.flags.includes("i"), n = e.flags.includes("m"), s = e.flags.includes("s"), o = r ? e.source.toLowerCase() : e.source;
    let i = "", a = !1, c = !1, l = !1;
    for(let e = 0; e < o.length; e++)if (a) i += o[e], a = !1;
    else {
        if (r) {
            if (c) {
                if (o[e].match(/[a-z]/)) {
                    l ? (i += o[e], i += `${o[e - 2]}-${o[e]}`.toUpperCase(), l = !1) : "-" === o[e + 1] && o[e + 2]?.match(/[a-z]/) ? (i += o[e], l = !0) : i += `${o[e]}${o[e].toUpperCase()}`;
                    continue;
                }
            } else if (o[e].match(/[a-z]/)) {
                i += `[${o[e]}${o[e].toUpperCase()}]`;
                continue;
            }
        }
        if (n) {
            if ("^" === o[e]) {
                i += "(^|(?<=[\r\n]))";
                continue;
            }
            if ("$" === o[e]) {
                i += "($|(?=[\r\n]))";
                continue;
            }
        }
        s && "." === o[e] ? i += c ? `${o[e]}\r\n` : `[${o[e]}\r\n]` : (i += o[e], "\\" === o[e] ? a = !0 : c && "]" === o[e] ? c = !1 : c || "[" !== o[e] || (c = !0));
    }
    try {
        new RegExp(i);
    } catch  {
        return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
    }
    return i;
}
function A(e, t) {
    if ("openAi" === t.target && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), "openApi3" === t.target && e.keyType?._def.typeName === i.kY.ZodEnum) return {
        type: "object",
        required: e.keyType._def.values,
        properties: e.keyType._def.values.reduce((r, n)=>({
                ...r,
                [n]: D(e.valueType._def, {
                    ...t,
                    currentPath: [
                        ...t.currentPath,
                        "properties",
                        n
                    ]
                }) ?? {}
            }), {}),
        additionalProperties: t.rejectedAdditionalProperties
    };
    const r = {
        type: "object",
        additionalProperties: D(e.valueType._def, {
            ...t,
            currentPath: [
                ...t.currentPath,
                "additionalProperties"
            ]
        }) ?? t.allowedAdditionalProperties
    };
    if ("openApi3" === t.target) return r;
    if (e.keyType?._def.typeName === i.kY.ZodString && e.keyType._def.checks?.length) {
        const { type: n, ...s } = x(e.keyType._def, t);
        return {
            ...r,
            propertyNames: s
        };
    }
    if (e.keyType?._def.typeName === i.kY.ZodEnum) return {
        ...r,
        propertyNames: {
            enum: e.keyType._def.values
        }
    };
    if (e.keyType?._def.typeName === i.kY.ZodBranded && e.keyType._def.type._def.typeName === i.kY.ZodString && e.keyType._def.type._def.checks?.length) {
        const { type: n, ...s } = l(e.keyType._def, t);
        return {
            ...r,
            propertyNames: s
        };
    }
    return r;
}
const R = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
const M = (e, t)=>{
    const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((e, r)=>D(e._def, {
            ...t,
            currentPath: [
                ...t.currentPath,
                "anyOf",
                `${r}`
            ]
        })).filter((e)=>!!e && (!t.strictUnions || "object" == typeof e && Object.keys(e).length > 0));
    return r.length ? {
        anyOf: r
    } : void 0;
};
function J(e, t) {
    const r = "openAi" === t.target, n = {
        type: "object",
        properties: {}
    }, s = [], o = e.shape();
    for(const e in o){
        let a = o[e];
        if (void 0 === a || void 0 === a._def) continue;
        let c = O(a);
        c && r && (a instanceof i.Ii && (a = a._def.innerType), a.isNullable() || (a = a.nullable()), c = !1);
        const l = D(a._def, {
            ...t,
            currentPath: [
                ...t.currentPath,
                "properties",
                e
            ],
            propertyPath: [
                ...t.currentPath,
                "properties",
                e
            ]
        });
        void 0 !== l && (n.properties[e] = l, c || s.push(e));
    }
    s.length && (n.required = s);
    const a = function(e, t) {
        if ("ZodNever" !== e.catchall._def.typeName) return D(e.catchall._def, {
            ...t,
            currentPath: [
                ...t.currentPath,
                "additionalProperties"
            ]
        });
        switch(e.unknownKeys){
            case "passthrough":
                return t.allowedAdditionalProperties;
            case "strict":
                return t.rejectedAdditionalProperties;
            case "strip":
                return "strict" === t.removeAdditionalStrategy ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
        }
    }(e, t);
    return void 0 !== a && (n.additionalProperties = a), n;
}
function O(e) {
    try {
        return e.isOptional();
    } catch  {
        return !0;
    }
}
const B = (e, t, r)=>{
    switch(t){
        case i.kY.ZodString:
            return x(e, r);
        case i.kY.ZodNumber:
            return function(e, t) {
                const r = {
                    type: "number"
                };
                if (!e.checks) return r;
                for (const n of e.checks)switch(n.kind){
                    case "int":
                        r.type = "integer", a(r, "type", n.message, t);
                        break;
                    case "min":
                        "jsonSchema7" === t.target ? n.inclusive ? c(r, "minimum", n.value, n.message, t) : c(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), c(r, "minimum", n.value, n.message, t));
                        break;
                    case "max":
                        "jsonSchema7" === t.target ? n.inclusive ? c(r, "maximum", n.value, n.message, t) : c(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), c(r, "maximum", n.value, n.message, t));
                        break;
                    case "multipleOf":
                        c(r, "multipleOf", n.value, n.message, t);
                }
                return r;
            }(e, r);
        case i.kY.ZodObject:
            return J(e, r);
        case i.kY.ZodBigInt:
            return function(e, t) {
                const r = {
                    type: "integer",
                    format: "int64"
                };
                if (!e.checks) return r;
                for (const n of e.checks)switch(n.kind){
                    case "min":
                        "jsonSchema7" === t.target ? n.inclusive ? c(r, "minimum", n.value, n.message, t) : c(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), c(r, "minimum", n.value, n.message, t));
                        break;
                    case "max":
                        "jsonSchema7" === t.target ? n.inclusive ? c(r, "maximum", n.value, n.message, t) : c(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), c(r, "maximum", n.value, n.message, t));
                        break;
                    case "multipleOf":
                        c(r, "multipleOf", n.value, n.message, t);
                }
                return r;
            }(e, r);
        case i.kY.ZodBoolean:
            return {
                type: "boolean"
            };
        case i.kY.ZodDate:
            return u(e, r);
        case i.kY.ZodUndefined:
            return {
                not: {}
            };
        case i.kY.ZodNull:
            return function(e) {
                return "openApi3" === e.target ? {
                    enum: [
                        "null"
                    ],
                    nullable: !0
                } : {
                    type: "null"
                };
            }(r);
        case i.kY.ZodArray:
            return function(e, t) {
                const r = {
                    type: "array"
                };
                return e.type?._def && e.type?._def?.typeName !== i.kY.ZodAny && (r.items = D(e.type._def, {
                    ...t,
                    currentPath: [
                        ...t.currentPath,
                        "items"
                    ]
                })), e.minLength && c(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && c(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (c(r, "minItems", e.exactLength.value, e.exactLength.message, t), c(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
            }(e, r);
        case i.kY.ZodUnion:
        case i.kY.ZodDiscriminatedUnion:
            return function(e, t) {
                if ("openApi3" === t.target) return M(e, t);
                const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
                if (r.every((e)=>e._def.typeName in R && (!e._def.checks || !e._def.checks.length))) {
                    const e = r.reduce((e, t)=>{
                        const r = R[t._def.typeName];
                        return r && !e.includes(r) ? [
                            ...e,
                            r
                        ] : e;
                    }, []);
                    return {
                        type: e.length > 1 ? e : e[0]
                    };
                }
                if (r.every((e)=>"ZodLiteral" === e._def.typeName && !e.description)) {
                    const e = r.reduce((e, t)=>{
                        const r = typeof t._def.value;
                        switch(r){
                            case "string":
                            case "number":
                            case "boolean":
                                return [
                                    ...e,
                                    r
                                ];
                            case "bigint":
                                return [
                                    ...e,
                                    "integer"
                                ];
                            case "object":
                                if (null === t._def.value) return [
                                    ...e,
                                    "null"
                                ];
                            default:
                                return e;
                        }
                    }, []);
                    if (e.length === r.length) {
                        const t = e.filter((e, t, r)=>r.indexOf(e) === t);
                        return {
                            type: t.length > 1 ? t : t[0],
                            enum: r.reduce((e, t)=>e.includes(t._def.value) ? e : [
                                    ...e,
                                    t._def.value
                                ], [])
                        };
                    }
                } else if (r.every((e)=>"ZodEnum" === e._def.typeName)) return {
                    type: "string",
                    enum: r.reduce((e, t)=>[
                            ...e,
                            ...t._def.values.filter((t)=>!e.includes(t))
                        ], [])
                };
                return M(e, t);
            }(e, r);
        case i.kY.ZodIntersection:
            return function(e, t) {
                const r = [
                    D(e.left._def, {
                        ...t,
                        currentPath: [
                            ...t.currentPath,
                            "allOf",
                            "0"
                        ]
                    }),
                    D(e.right._def, {
                        ...t,
                        currentPath: [
                            ...t.currentPath,
                            "allOf",
                            "1"
                        ]
                    })
                ].filter((e)=>!!e);
                let n = "jsonSchema2019-09" === t.target ? {
                    unevaluatedProperties: !1
                } : void 0;
                const s = [];
                return r.forEach((e)=>{
                    if ("type" in (t = e) && "string" === t.type || !("allOf" in t)) {
                        let t = e;
                        if ("additionalProperties" in e && !1 === e.additionalProperties) {
                            const { additionalProperties: r, ...n } = e;
                            t = n;
                        } else n = void 0;
                        s.push(t);
                    } else s.push(...e.allOf), void 0 === e.unevaluatedProperties && (n = void 0);
                    var t;
                }), s.length ? {
                    allOf: s,
                    ...n
                } : void 0;
            }(e, r);
        case i.kY.ZodTuple:
            return function(e, t) {
                return e.rest ? {
                    type: "array",
                    minItems: e.items.length,
                    items: e.items.map((e, r)=>D(e._def, {
                            ...t,
                            currentPath: [
                                ...t.currentPath,
                                "items",
                                `${r}`
                            ]
                        })).reduce((e, t)=>void 0 === t ? e : [
                            ...e,
                            t
                        ], []),
                    additionalItems: D(e.rest._def, {
                        ...t,
                        currentPath: [
                            ...t.currentPath,
                            "additionalItems"
                        ]
                    })
                } : {
                    type: "array",
                    minItems: e.items.length,
                    maxItems: e.items.length,
                    items: e.items.map((e, r)=>D(e._def, {
                            ...t,
                            currentPath: [
                                ...t.currentPath,
                                "items",
                                `${r}`
                            ]
                        })).reduce((e, t)=>void 0 === t ? e : [
                            ...e,
                            t
                        ], [])
                };
            }(e, r);
        case i.kY.ZodRecord:
            return A(e, r);
        case i.kY.ZodLiteral:
            return function(e, t) {
                const r = typeof e.value;
                return "bigint" !== r && "number" !== r && "boolean" !== r && "string" !== r ? {
                    type: Array.isArray(e.value) ? "array" : "object"
                } : "openApi3" === t.target ? {
                    type: "bigint" === r ? "integer" : r,
                    enum: [
                        e.value
                    ]
                } : {
                    type: "bigint" === r ? "integer" : r,
                    const: e.value
                };
            }(e, r);
        case i.kY.ZodEnum:
            return function(e) {
                return {
                    type: "string",
                    enum: Array.from(e.values)
                };
            }(e);
        case i.kY.ZodNativeEnum:
            return function(e) {
                const t = e.values, r = Object.keys(e.values).filter((e)=>"number" != typeof t[t[e]]).map((e)=>t[e]), n = Array.from(new Set(r.map((e)=>typeof e)));
                return {
                    type: 1 === n.length ? "string" === n[0] ? "string" : "number" : [
                        "string",
                        "number"
                    ],
                    enum: r
                };
            }(e);
        case i.kY.ZodNullable:
            return function(e, t) {
                if ([
                    "ZodString",
                    "ZodNumber",
                    "ZodBigInt",
                    "ZodBoolean",
                    "ZodNull"
                ].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return "openApi3" === t.target ? {
                    type: R[e.innerType._def.typeName],
                    nullable: !0
                } : {
                    type: [
                        R[e.innerType._def.typeName],
                        "null"
                    ]
                };
                if ("openApi3" === t.target) {
                    const r = D(e.innerType._def, {
                        ...t,
                        currentPath: [
                            ...t.currentPath
                        ]
                    });
                    return r && "$ref" in r ? {
                        allOf: [
                            r
                        ],
                        nullable: !0
                    } : r && {
                        ...r,
                        nullable: !0
                    };
                }
                const r = D(e.innerType._def, {
                    ...t,
                    currentPath: [
                        ...t.currentPath,
                        "anyOf",
                        "0"
                    ]
                });
                return r && {
                    anyOf: [
                        r,
                        {
                            type: "null"
                        }
                    ]
                };
            }(e, r);
        case i.kY.ZodOptional:
            return ((e, t)=>{
                if (t.currentPath.toString() === t.propertyPath?.toString()) return D(e.innerType._def, t);
                const r = D(e.innerType._def, {
                    ...t,
                    currentPath: [
                        ...t.currentPath,
                        "anyOf",
                        "1"
                    ]
                });
                return r ? {
                    anyOf: [
                        {
                            not: {}
                        },
                        r
                    ]
                } : {};
            })(e, r);
        case i.kY.ZodMap:
            return function(e, t) {
                return "record" === t.mapStrategy ? A(e, t) : {
                    type: "array",
                    maxItems: 125,
                    items: {
                        type: "array",
                        items: [
                            D(e.keyType._def, {
                                ...t,
                                currentPath: [
                                    ...t.currentPath,
                                    "items",
                                    "items",
                                    "0"
                                ]
                            }) || {},
                            D(e.valueType._def, {
                                ...t,
                                currentPath: [
                                    ...t.currentPath,
                                    "items",
                                    "items",
                                    "1"
                                ]
                            }) || {}
                        ],
                        minItems: 2,
                        maxItems: 2
                    }
                };
            }(e, r);
        case i.kY.ZodSet:
            return function(e, t) {
                const r = {
                    type: "array",
                    uniqueItems: !0,
                    items: D(e.valueType._def, {
                        ...t,
                        currentPath: [
                            ...t.currentPath,
                            "items"
                        ]
                    })
                };
                return e.minSize && c(r, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && c(r, "maxItems", e.maxSize.value, e.maxSize.message, t), r;
            }(e, r);
        case i.kY.ZodLazy:
            return ()=>e.getter()._def;
        case i.kY.ZodPromise:
            return function(e, t) {
                return D(e.type._def, t);
            }(e, r);
        case i.kY.ZodNaN:
        case i.kY.ZodNever:
            return {
                not: {}
            };
        case i.kY.ZodEffects:
            return function(e, t) {
                return "input" === t.effectStrategy ? D(e.schema._def, t) : {};
            }(e, r);
        case i.kY.ZodAny:
        case i.kY.ZodUnknown:
            return {};
        case i.kY.ZodDefault:
            return function(e, t) {
                return {
                    ...D(e.innerType._def, t),
                    default: e.defaultValue()
                };
            }(e, r);
        case i.kY.ZodBranded:
            return l(e, r);
        case i.kY.ZodReadonly:
        case i.kY.ZodCatch:
            return ((e, t)=>D(e.innerType._def, t))(e, r);
        case i.kY.ZodPipeline:
            return ((e, t)=>{
                if ("input" === t.pipeStrategy) return D(e.in._def, t);
                if ("output" === t.pipeStrategy) return D(e.out._def, t);
                const r = D(e.in._def, {
                    ...t,
                    currentPath: [
                        ...t.currentPath,
                        "allOf",
                        "0"
                    ]
                });
                return {
                    allOf: [
                        r,
                        D(e.out._def, {
                            ...t,
                            currentPath: [
                                ...t.currentPath,
                                "allOf",
                                r ? "1" : "0"
                            ]
                        })
                    ].filter((e)=>void 0 !== e)
                };
            })(e, r);
        case i.kY.ZodFunction:
        case i.kY.ZodVoid:
        case i.kY.ZodSymbol:
        default:
            return;
    }
};
function D(e, t, r = !1) {
    const s = t.seen.get(e);
    if (t.override) {
        const o = t.override?.(e, t, s, r);
        if (o !== n) return o;
    }
    if (s && !r) {
        const e = q(s, t);
        if (void 0 !== e) return e;
    }
    const o = {
        def: e,
        path: t.currentPath,
        jsonSchema: void 0
    };
    t.seen.set(e, o);
    const i = B(e, e.typeName, t), a = "function" == typeof i ? D(i(), t) : i;
    if (a && F(e, t, a), t.postProcess) {
        const r = t.postProcess(a, e, t);
        return o.jsonSchema = a, r;
    }
    return o.jsonSchema = a, a;
}
const q = (e, t)=>{
    switch(t.$refStrategy){
        case "root":
            return {
                $ref: e.path.join("/")
            };
        case "relative":
            return {
                $ref: N(t.currentPath, e.path)
            };
        case "none":
        case "seen":
            return e.path.length < t.currentPath.length && e.path.every((e, r)=>t.currentPath[r] === e) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : "seen" === t.$refStrategy ? {} : void 0;
    }
}, N = (e, t)=>{
    let r = 0;
    for(; r < e.length && r < t.length && e[r] === t[r]; r++);
    return [
        (e.length - r).toString(),
        ...t.slice(r)
    ].join("/");
}, F = (e, t, r)=>(e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), U = (e, t)=>{
    const r = o(t), n = "object" == typeof t && t.definitions ? Object.entries(t.definitions).reduce((e, [t, n])=>({
            ...e,
            [t]: D(n._def, {
                ...r,
                currentPath: [
                    ...r.basePath,
                    r.definitionPath,
                    t
                ]
            }, !0) ?? {}
        }), {}) : void 0, s = "string" == typeof t ? t : "title" === t?.nameStrategy ? void 0 : t?.name, i = D(e._def, void 0 === s ? r : {
        ...r,
        currentPath: [
            ...r.basePath,
            r.definitionPath,
            s
        ]
    }, !1) ?? {}, a = "object" == typeof t && void 0 !== t.name && "title" === t.nameStrategy ? t.name : void 0;
    void 0 !== a && (i.title = a);
    const c = void 0 === s ? n ? {
        ...i,
        [r.definitionPath]: n
    } : i : {
        $ref: [
            ..."relative" === r.$refStrategy ? [] : r.basePath,
            r.definitionPath,
            s
        ].join("/"),
        [r.definitionPath]: {
            ...n,
            [s]: i
        }
    };
    return "jsonSchema7" === r.target ? c.$schema = "http://json-schema.org/draft-07/schema#" : "jsonSchema2019-09" !== r.target && "openAi" !== r.target || (c.$schema = "https://json-schema.org/draft/2019-09/schema#"), "openAi" === r.target && ("anyOf" in c || "oneOf" in c || "allOf" in c || "type" in c && Array.isArray(c.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), c;
}, L = U;
