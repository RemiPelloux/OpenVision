import { axo, uO } from "./SZu.js";
import { pvr } from "./to-json-schema.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var tad, YRo, XRo, ZRo, QRo, JRo, e2o, t2o, n2o, i2o, r2o, s2o, o2o, a2o, l2o, c2o, u2o, d2o, h2o, p2o, m2o, g2o, f2o, v2o, _2o, b2o, mvr, y2o, S2o, k2o, w2o, C2o, T2o, E2o, I2o, x2o, A2o, R2o, gvr, P2o, fvr;
export { A2o, C2o, E2o, I2o, JRo, P2o, QRo, R2o, S2o, T2o, XRo, YRo, ZRo, _2o, a2o, b2o, c2o, d2o, e2o, f2o, fvr, g2o, gvr, h2o, i2o, k2o, l2o, m2o, mvr, n2o, o2o, p2o, r2o, s2o, t2o, tad, u2o, v2o, w2o, x2o, y2o };
var __wakaru_EQn_initialized = false;
export function EQn() {
if (__wakaru_EQn_initialized) return;
__wakaru_EQn_initialized = true;
E(), pvr(), ky(), tad = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
}, YRo = (t, e, n, i)=>{
    const r = n;
    r.type = "string";
    const { minimum: s, maximum: o, format: a, patterns: l, contentEncoding: c } = t._zod.bag;
    if (typeof s == "number" && (r.minLength = s), typeof o == "number" && (r.maxLength = o), a && (r.format = tad[a] ?? a, r.format === "" && delete r.format, a === "time" && delete r.format), c && (r.contentEncoding = c), l && l.size > 0) {
        const u = [
            ...l
        ];
        u.length === 1 ? r.pattern = u[0].source : u.length > 1 && (r.allOf = [
            ...u.map((d)=>({
                    ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? {
                        type: "string"
                    } : {},
                    pattern: d.source
                }))
        ]);
    }
}, XRo = (t, e, n, i)=>{
    const r = n, { minimum: s, maximum: o, format: a, multipleOf: l, exclusiveMaximum: c, exclusiveMinimum: u } = t._zod.bag;
    typeof a == "string" && a.includes("int") ? r.type = "integer" : r.type = "number", typeof u == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.minimum = u, r.exclusiveMinimum = !0) : r.exclusiveMinimum = u), typeof s == "number" && (r.minimum = s, typeof u == "number" && e.target !== "draft-04" && (u >= s ? delete r.minimum : delete r.exclusiveMinimum)), typeof c == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.maximum = c, r.exclusiveMaximum = !0) : r.exclusiveMaximum = c), typeof o == "number" && (r.maximum = o, typeof c == "number" && e.target !== "draft-04" && (c <= o ? delete r.maximum : delete r.exclusiveMaximum)), typeof l == "number" && (r.multipleOf = l);
}, ZRo = (t, e, n, i)=>{
    n.type = "boolean";
}, QRo = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
}, JRo = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
}, e2o = (t, e, n, i)=>{
    e.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [
        null
    ]) : n.type = "null";
}, t2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
}, n2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
}, i2o = (t, e, n, i)=>{
    n.not = {};
}, r2o = (t, e, n, i)=>{}, s2o = (t, e, n, i)=>{}, o2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
}, a2o = (t, e, n, i)=>{
    const r = t._zod.def, s = axo(r.entries);
    s.every((o)=>typeof o == "number") && (n.type = "number"), s.every((o)=>typeof o == "string") && (n.type = "string"), n.enum = s;
}, l2o = (t, e, n, i)=>{
    const r = t._zod.def, s = [];
    for (const o of r.values)if (o === void 0) {
        if (e.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof o == "bigint") {
        if (e.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
        s.push(Number(o));
    } else s.push(o);
    if (s.length !== 0) if (s.length === 1) {
        const o = s[0];
        n.type = o === null ? "null" : typeof o, e.target === "draft-04" || e.target === "openapi-3.0" ? n.enum = [
            o
        ] : n.const = o;
    } else s.every((o)=>typeof o == "number") && (n.type = "number"), s.every((o)=>typeof o == "string") && (n.type = "string"), s.every((o)=>typeof o == "boolean") && (n.type = "boolean"), s.every((o)=>o === null) && (n.type = "null"), n.enum = s;
}, c2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
}, u2o = (t, e, n, i)=>{
    const r = n, s = t._zod.pattern;
    if (!s) throw new Error("Pattern not found in template literal");
    r.type = "string", r.pattern = s.source;
}, d2o = (t, e, n, i)=>{
    const r = n, s = {
        type: "string",
        format: "binary",
        contentEncoding: "binary"
    }, { minimum: o, maximum: a, mime: l } = t._zod.bag;
    o !== void 0 && (s.minLength = o), a !== void 0 && (s.maxLength = a), l ? l.length === 1 ? (s.contentMediaType = l[0], Object.assign(r, s)) : (Object.assign(r, s), r.anyOf = l.map((c)=>({
            contentMediaType: c
        }))) : Object.assign(r, s);
}, h2o = (t, e, n, i)=>{
    n.type = "boolean";
}, p2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, m2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
}, g2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, f2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
}, v2o = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
}, _2o = (t, e, n, i)=>{
    const r = n, s = t._zod.def, { minimum: o, maximum: a } = t._zod.bag;
    typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = uO(s.element, e, {
        ...i,
        path: [
            ...i.path,
            "items"
        ]
    });
}, b2o = (t, e, n, i)=>{
    const r = n, s = t._zod.def;
    r.type = "object", r.properties = {};
    const o = s.shape;
    for(const c in o)r.properties[c] = uO(o[c], e, {
        ...i,
        path: [
            ...i.path,
            "properties",
            c
        ]
    });
    const a = new Set(Object.keys(o)), l = new Set([
        ...a
    ].filter((c)=>{
        const u = s.shape[c]._zod;
        return e.io === "input" ? u.optin === void 0 : u.optout === void 0;
    }));
    l.size > 0 && (r.required = Array.from(l)), s.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : s.catchall ? s.catchall && (r.additionalProperties = uO(s.catchall, e, {
        ...i,
        path: [
            ...i.path,
            "additionalProperties"
        ]
    })) : e.io === "output" && (r.additionalProperties = !1);
}, mvr = (t, e, n, i)=>{
    const r = t._zod.def, s = r.inclusive === !1, o = r.options.map((a, l)=>uO(a, e, {
            ...i,
            path: [
                ...i.path,
                s ? "oneOf" : "anyOf",
                l
            ]
        }));
    s ? n.oneOf = o : n.anyOf = o;
}, y2o = (t, e, n, i)=>{
    const r = t._zod.def, s = uO(r.left, e, {
        ...i,
        path: [
            ...i.path,
            "allOf",
            0
        ]
    }), o = uO(r.right, e, {
        ...i,
        path: [
            ...i.path,
            "allOf",
            1
        ]
    }), a = (c)=>"allOf" in c && Object.keys(c).length === 1, l = [
        ...a(s) ? s.allOf : [
            s
        ],
        ...a(o) ? o.allOf : [
            o
        ]
    ];
    n.allOf = l;
}, S2o = (t, e, n, i)=>{
    const r = n, s = t._zod.def;
    r.type = "array";
    const o = e.target === "draft-2020-12" ? "prefixItems" : "items", a = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems", l = s.items.map((h, p)=>uO(h, e, {
            ...i,
            path: [
                ...i.path,
                o,
                p
            ]
        })), c = s.rest ? uO(s.rest, e, {
        ...i,
        path: [
            ...i.path,
            a,
            ...e.target === "openapi-3.0" ? [
                s.items.length
            ] : []
        ]
    }) : null;
    e.target === "draft-2020-12" ? (r.prefixItems = l, c && (r.items = c)) : e.target === "openapi-3.0" ? (r.items = {
        anyOf: l
    }, c && r.items.anyOf.push(c), r.minItems = l.length, c || (r.maxItems = l.length)) : (r.items = l, c && (r.additionalItems = c));
    const { minimum: u, maximum: d } = t._zod.bag;
    typeof u == "number" && (r.minItems = u), typeof d == "number" && (r.maxItems = d);
}, k2o = (t, e, n, i)=>{
    const r = n, s = t._zod.def;
    r.type = "object";
    const o = s.keyType, l = o._zod.bag?.patterns;
    if (s.mode === "loose" && l && l.size > 0) {
        const u = uO(s.valueType, e, {
            ...i,
            path: [
                ...i.path,
                "patternProperties",
                "*"
            ]
        });
        r.patternProperties = {};
        for (const d of l)r.patternProperties[d.source] = u;
    } else (e.target === "draft-07" || e.target === "draft-2020-12") && (r.propertyNames = uO(s.keyType, e, {
        ...i,
        path: [
            ...i.path,
            "propertyNames"
        ]
    })), r.additionalProperties = uO(s.valueType, e, {
        ...i,
        path: [
            ...i.path,
            "additionalProperties"
        ]
    });
    const c = o._zod.values;
    if (c) {
        const u = [
            ...c
        ].filter((d)=>typeof d == "string" || typeof d == "number");
        u.length > 0 && (r.required = u);
    }
}, w2o = (t, e, n, i)=>{
    const r = t._zod.def, s = uO(r.innerType, e, i), o = e.seen.get(t);
    e.target === "openapi-3.0" ? (o.ref = r.innerType, n.nullable = !0) : n.anyOf = [
        s,
        {
            type: "null"
        }
    ];
}, C2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
}, T2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, E2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, e.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, I2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
    let o;
    try {
        o = r.catchValue(void 0);
    } catch  {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    n.default = o;
}, x2o = (t, e, n, i)=>{
    const r = t._zod.def, s = e.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
    uO(s, e, i);
    const o = e.seen.get(t);
    o.ref = s;
}, A2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, n.readOnly = !0;
}, R2o = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
}, gvr = (t, e, n, i)=>{
    const r = t._zod.def;
    uO(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
}, P2o = (t, e, n, i)=>{
    const r = t._zod.innerType;
    uO(r, e, i);
    const s = e.seen.get(t);
    s.ref = r;
}, fvr = {
    string: YRo,
    number: XRo,
    boolean: ZRo,
    bigint: QRo,
    symbol: JRo,
    null: e2o,
    undefined: t2o,
    void: n2o,
    never: i2o,
    any: r2o,
    unknown: s2o,
    date: o2o,
    enum: a2o,
    literal: l2o,
    nan: c2o,
    template_literal: u2o,
    file: d2o,
    success: h2o,
    custom: p2o,
    function: m2o,
    transform: g2o,
    map: f2o,
    set: v2o,
    array: _2o,
    object: b2o,
    union: mvr,
    intersection: y2o,
    tuple: S2o,
    record: k2o,
    nullable: w2o,
    nonoptional: C2o,
    default: T2o,
    prefault: E2o,
    catch: I2o,
    pipe: x2o,
    readonly: A2o,
    promise: R2o,
    optional: gvr,
    lazy: P2o
};

}
