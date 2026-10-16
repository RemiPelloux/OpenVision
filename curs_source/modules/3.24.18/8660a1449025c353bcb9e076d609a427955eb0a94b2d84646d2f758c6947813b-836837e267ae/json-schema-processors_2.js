import { E8h, Fne } from "./ipa.js";
import { rFr } from "./to-json-schema_2.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var qUh, zUh, VUh, KUh, YUh, XUh, ZUh, QUh, JUh, ejh, tjh, njh, ijh, rjh, sjh, ojh, ajh, ljh, cjh, ujh, nva;
export { JUh, KUh, QUh, VUh, XUh, YUh, ZUh, ajh, cjh, ejh, ijh, ljh, njh, nva, ojh, qUh, rjh, sjh, tjh, ujh, zUh };
var __wakaru_sFr_initialized = false;
export function sFr() {
if (__wakaru_sFr_initialized) return;
__wakaru_sFr_initialized = true;
E(), rFr(), yb(), qUh = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
}, zUh = (t, e, n, i)=>{
    const r = n;
    r.type = "string";
    const { minimum: s, maximum: o, format: a, patterns: l, contentEncoding: c } = t._zod.bag;
    if (typeof s == "number" && (r.minLength = s), typeof o == "number" && (r.maxLength = o), a && (r.format = qUh[a] ?? a, r.format === "" && delete r.format, a === "time" && delete r.format), c && (r.contentEncoding = c), l && l.size > 0) {
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
}, VUh = (t, e, n, i)=>{
    const r = n, { minimum: s, maximum: o, format: a, multipleOf: l, exclusiveMaximum: c, exclusiveMinimum: u } = t._zod.bag;
    typeof a == "string" && a.includes("int") ? r.type = "integer" : r.type = "number", typeof u == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.minimum = u, r.exclusiveMinimum = !0) : r.exclusiveMinimum = u), typeof s == "number" && (r.minimum = s, typeof u == "number" && e.target !== "draft-04" && (u >= s ? delete r.minimum : delete r.exclusiveMinimum)), typeof c == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.maximum = c, r.exclusiveMaximum = !0) : r.exclusiveMaximum = c), typeof o == "number" && (r.maximum = o, typeof c == "number" && e.target !== "draft-04" && (c <= o ? delete r.maximum : delete r.exclusiveMaximum)), typeof l == "number" && (r.multipleOf = l);
}, KUh = (t, e, n, i)=>{
    n.type = "boolean";
}, YUh = (t, e, n, i)=>{
    n.not = {};
}, XUh = (t, e, n, i)=>{}, ZUh = (t, e, n, i)=>{
    const r = t._zod.def, s = E8h(r.entries);
    s.every((o)=>typeof o == "number") && (n.type = "number"), s.every((o)=>typeof o == "string") && (n.type = "string"), n.enum = s;
}, QUh = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, JUh = (t, e, n, i)=>{
    if (e.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, ejh = (t, e, n, i)=>{
    const r = n, s = t._zod.def, { minimum: o, maximum: a } = t._zod.bag;
    typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = Fne(s.element, e, {
        ...i,
        path: [
            ...i.path,
            "items"
        ]
    });
}, tjh = (t, e, n, i)=>{
    const r = n, s = t._zod.def;
    r.type = "object", r.properties = {};
    const o = s.shape;
    for(const c in o)r.properties[c] = Fne(o[c], e, {
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
    l.size > 0 && (r.required = Array.from(l)), s.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : s.catchall ? s.catchall && (r.additionalProperties = Fne(s.catchall, e, {
        ...i,
        path: [
            ...i.path,
            "additionalProperties"
        ]
    })) : e.io === "output" && (r.additionalProperties = !1);
}, njh = (t, e, n, i)=>{
    const r = t._zod.def, s = r.inclusive === !1, o = r.options.map((a, l)=>Fne(a, e, {
            ...i,
            path: [
                ...i.path,
                s ? "oneOf" : "anyOf",
                l
            ]
        }));
    s ? n.oneOf = o : n.anyOf = o;
}, ijh = (t, e, n, i)=>{
    const r = t._zod.def, s = Fne(r.left, e, {
        ...i,
        path: [
            ...i.path,
            "allOf",
            0
        ]
    }), o = Fne(r.right, e, {
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
}, rjh = (t, e, n, i)=>{
    const r = t._zod.def, s = Fne(r.innerType, e, i), o = e.seen.get(t);
    e.target === "openapi-3.0" ? (o.ref = r.innerType, n.nullable = !0) : n.anyOf = [
        s,
        {
            type: "null"
        }
    ];
}, sjh = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
}, ojh = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, ajh = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, e.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, ljh = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
    let o;
    try {
        o = r.catchValue(void 0);
    } catch  {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    n.default = o;
}, cjh = (t, e, n, i)=>{
    const r = t._zod.def, s = e.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
    Fne(s, e, i);
    const o = e.seen.get(t);
    o.ref = s;
}, ujh = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType, n.readOnly = !0;
}, nva = (t, e, n, i)=>{
    const r = t._zod.def;
    Fne(r.innerType, e, i);
    const s = e.seen.get(t);
    s.ref = r.innerType;
};

}
