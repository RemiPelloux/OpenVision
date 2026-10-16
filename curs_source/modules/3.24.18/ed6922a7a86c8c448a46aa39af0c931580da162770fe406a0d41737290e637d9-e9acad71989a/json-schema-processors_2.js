import { UM, j6s } from "./f0s.js";
import { _5i } from "./to-json-schema_2.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var lyu, P8s, L8s, N8s, O8s, F8s, B8s, U8s, $8s, H8s, W8s, G8s, V8s, j8s, q8s, z8s, K8s, Y8s, X8s, Z8s, Q8s, J8s, e7s, t7s, n7s, i7s, b5i, r7s, s7s, o7s, a7s, c7s, l7s, u7s, d7s, h7s, p7s, m7s, y5i, g7s, S5i;
export { $8s, B8s, F8s, G8s, H8s, J8s, K8s, L8s, N8s, O8s, P8s, Q8s, S5i, U8s, V8s, W8s, X8s, Y8s, Z8s, a7s, b5i, c7s, d7s, e7s, g7s, h7s, i7s, j8s, l7s, lyu, m7s, n7s, o7s, p7s, q8s, r7s, s7s, t7s, u7s, y5i, z8s };
var __wakaru_dAn_initialized = false;
export function dAn() {
if (__wakaru_dAn_initialized) return;
__wakaru_dAn_initialized = true;
x(), _5i(), Fv(), lyu = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
}, P8s = (e, t, n, i)=>{
    const r = n;
    r.type = "string";
    const { minimum: s, maximum: o, format: a, patterns: c, contentEncoding: l } = e._zod.bag;
    if (typeof s == "number" && (r.minLength = s), typeof o == "number" && (r.maxLength = o), a && (r.format = lyu[a] ?? a, r.format === "" && delete r.format, a === "time" && delete r.format), l && (r.contentEncoding = l), c && c.size > 0) {
        const u = [
            ...c
        ];
        u.length === 1 ? r.pattern = u[0].source : u.length > 1 && (r.allOf = [
            ...u.map((h)=>({
                    ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
                        type: "string"
                    } : {},
                    pattern: h.source
                }))
        ]);
    }
}, L8s = (e, t, n, i)=>{
    const r = n, { minimum: s, maximum: o, format: a, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
    typeof a == "string" && a.includes("int") ? r.type = "integer" : r.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (r.minimum = u, r.exclusiveMinimum = !0) : r.exclusiveMinimum = u), typeof s == "number" && (r.minimum = s, typeof u == "number" && t.target !== "draft-04" && (u >= s ? delete r.minimum : delete r.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (r.maximum = l, r.exclusiveMaximum = !0) : r.exclusiveMaximum = l), typeof o == "number" && (r.maximum = o, typeof l == "number" && t.target !== "draft-04" && (l <= o ? delete r.maximum : delete r.exclusiveMaximum)), typeof c == "number" && (r.multipleOf = c);
}, N8s = (e, t, n, i)=>{
    n.type = "boolean";
}, O8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
}, F8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
}, B8s = (e, t, n, i)=>{
    t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [
        null
    ]) : n.type = "null";
}, U8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
}, $8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
}, H8s = (e, t, n, i)=>{
    n.not = {};
}, W8s = (e, t, n, i)=>{}, G8s = (e, t, n, i)=>{}, V8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
}, j8s = (e, t, n, i)=>{
    const r = e._zod.def, s = j6s(r.entries);
    s.every((o)=>typeof o == "number") && (n.type = "number"), s.every((o)=>typeof o == "string") && (n.type = "string"), n.enum = s;
}, q8s = (e, t, n, i)=>{
    const r = e._zod.def, s = [];
    for (const o of r.values)if (o === void 0) {
        if (t.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof o == "bigint") {
        if (t.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
        s.push(Number(o));
    } else s.push(o);
    if (s.length !== 0) if (s.length === 1) {
        const o = s[0];
        n.type = o === null ? "null" : typeof o, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [
            o
        ] : n.const = o;
    } else s.every((o)=>typeof o == "number") && (n.type = "number"), s.every((o)=>typeof o == "string") && (n.type = "string"), s.every((o)=>typeof o == "boolean") && (n.type = "boolean"), s.every((o)=>o === null) && (n.type = "null"), n.enum = s;
}, z8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
}, K8s = (e, t, n, i)=>{
    const r = n, s = e._zod.pattern;
    if (!s) throw new Error("Pattern not found in template literal");
    r.type = "string", r.pattern = s.source;
}, Y8s = (e, t, n, i)=>{
    const r = n, s = {
        type: "string",
        format: "binary",
        contentEncoding: "binary"
    }, { minimum: o, maximum: a, mime: c } = e._zod.bag;
    o !== void 0 && (s.minLength = o), a !== void 0 && (s.maxLength = a), c ? c.length === 1 ? (s.contentMediaType = c[0], Object.assign(r, s)) : (Object.assign(r, s), r.anyOf = c.map((l)=>({
            contentMediaType: l
        }))) : Object.assign(r, s);
}, X8s = (e, t, n, i)=>{
    n.type = "boolean";
}, Z8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, Q8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
}, J8s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, e7s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
}, t7s = (e, t, n, i)=>{
    if (t.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
}, n7s = (e, t, n, i)=>{
    const r = n, s = e._zod.def, { minimum: o, maximum: a } = e._zod.bag;
    typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = UM(s.element, t, {
        ...i,
        path: [
            ...i.path,
            "items"
        ]
    });
}, i7s = (e, t, n, i)=>{
    const r = n, s = e._zod.def;
    r.type = "object", r.properties = {};
    const o = s.shape;
    for(const l in o)r.properties[l] = UM(o[l], t, {
        ...i,
        path: [
            ...i.path,
            "properties",
            l
        ]
    });
    const a = new Set(Object.keys(o)), c = new Set([
        ...a
    ].filter((l)=>{
        const u = s.shape[l]._zod;
        return t.io === "input" ? u.optin === void 0 : u.optout === void 0;
    }));
    c.size > 0 && (r.required = Array.from(c)), s.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : s.catchall ? s.catchall && (r.additionalProperties = UM(s.catchall, t, {
        ...i,
        path: [
            ...i.path,
            "additionalProperties"
        ]
    })) : t.io === "output" && (r.additionalProperties = !1);
}, b5i = (e, t, n, i)=>{
    const r = e._zod.def, s = r.inclusive === !1, o = r.options.map((a, c)=>UM(a, t, {
            ...i,
            path: [
                ...i.path,
                s ? "oneOf" : "anyOf",
                c
            ]
        }));
    s ? n.oneOf = o : n.anyOf = o;
}, r7s = (e, t, n, i)=>{
    const r = e._zod.def, s = UM(r.left, t, {
        ...i,
        path: [
            ...i.path,
            "allOf",
            0
        ]
    }), o = UM(r.right, t, {
        ...i,
        path: [
            ...i.path,
            "allOf",
            1
        ]
    }), a = (l)=>"allOf" in l && Object.keys(l).length === 1, c = [
        ...a(s) ? s.allOf : [
            s
        ],
        ...a(o) ? o.allOf : [
            o
        ]
    ];
    n.allOf = c;
}, s7s = (e, t, n, i)=>{
    const r = n, s = e._zod.def;
    r.type = "array";
    const o = t.target === "draft-2020-12" ? "prefixItems" : "items", a = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = s.items.map((p, g)=>UM(p, t, {
            ...i,
            path: [
                ...i.path,
                o,
                g
            ]
        })), l = s.rest ? UM(s.rest, t, {
        ...i,
        path: [
            ...i.path,
            a,
            ...t.target === "openapi-3.0" ? [
                s.items.length
            ] : []
        ]
    }) : null;
    t.target === "draft-2020-12" ? (r.prefixItems = c, l && (r.items = l)) : t.target === "openapi-3.0" ? (r.items = {
        anyOf: c
    }, l && r.items.anyOf.push(l), r.minItems = c.length, l || (r.maxItems = c.length)) : (r.items = c, l && (r.additionalItems = l));
    const { minimum: u, maximum: h } = e._zod.bag;
    typeof u == "number" && (r.minItems = u), typeof h == "number" && (r.maxItems = h);
}, o7s = (e, t, n, i)=>{
    const r = n, s = e._zod.def;
    r.type = "object";
    const o = s.keyType, c = o._zod.bag?.patterns;
    if (s.mode === "loose" && c && c.size > 0) {
        const u = UM(s.valueType, t, {
            ...i,
            path: [
                ...i.path,
                "patternProperties",
                "*"
            ]
        });
        r.patternProperties = {};
        for (const h of c)r.patternProperties[h.source] = u;
    } else (t.target === "draft-07" || t.target === "draft-2020-12") && (r.propertyNames = UM(s.keyType, t, {
        ...i,
        path: [
            ...i.path,
            "propertyNames"
        ]
    })), r.additionalProperties = UM(s.valueType, t, {
        ...i,
        path: [
            ...i.path,
            "additionalProperties"
        ]
    });
    const l = o._zod.values;
    if (l) {
        const u = [
            ...l
        ].filter((h)=>typeof h == "string" || typeof h == "number");
        u.length > 0 && (r.required = u);
    }
}, a7s = (e, t, n, i)=>{
    const r = e._zod.def, s = UM(r.innerType, t, i), o = t.seen.get(e);
    t.target === "openapi-3.0" ? (o.ref = r.innerType, n.nullable = !0) : n.anyOf = [
        s,
        {
            type: "null"
        }
    ];
}, c7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType;
}, l7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, u7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, d7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType;
    let o;
    try {
        o = r.catchValue(void 0);
    } catch  {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    n.default = o;
}, h7s = (e, t, n, i)=>{
    const r = e._zod.def, s = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
    UM(s, t, i);
    const o = t.seen.get(e);
    o.ref = s;
}, p7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType, n.readOnly = !0;
}, m7s = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType;
}, y5i = (e, t, n, i)=>{
    const r = e._zod.def;
    UM(r.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = r.innerType;
}, g7s = (e, t, n, i)=>{
    const r = e._zod.innerType;
    UM(r, t, i);
    const s = t.seen.get(e);
    s.ref = r;
}, S5i = {
    string: P8s,
    number: L8s,
    boolean: N8s,
    bigint: O8s,
    symbol: F8s,
    null: B8s,
    undefined: U8s,
    void: $8s,
    never: H8s,
    any: W8s,
    unknown: G8s,
    date: V8s,
    enum: j8s,
    literal: q8s,
    nan: z8s,
    template_literal: K8s,
    file: Y8s,
    success: X8s,
    custom: Z8s,
    function: Q8s,
    transform: J8s,
    map: e7s,
    set: t7s,
    array: n7s,
    object: i7s,
    union: b5i,
    intersection: r7s,
    tuple: s7s,
    record: o7s,
    nullable: a7s,
    nonoptional: c7s,
    default: l7s,
    prefault: u7s,
    catch: d7s,
    pipe: h7s,
    readonly: p7s,
    promise: m7s,
    optional: y5i,
    lazy: g7s
};

}
