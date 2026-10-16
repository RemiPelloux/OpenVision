"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateTuple = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-68255.js"), i = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "array",
        "boolean"
    ],
    before: "uniqueItems",
    code (e) {
        const { schema: t, it: r } = e;
        if (Array.isArray(t)) return a(e, "additionalItems", t);
        r.items = !0, (0, s.alwaysValidSchema)(r, t) || e.ok((0, o.validateArray)(e));
    }
};
function a(e, t, r = e.schema) {
    const { gen: o, parentSchema: i, data: a, keyword: c, it: l } = e;
    !function(e) {
        const { opts: n, errSchemaPath: o } = l, i = r.length, a = i === e.minItems && (i === e.maxItems || !1 === e[t]);
        if (n.strictTuples && !a) {
            const e = `"${c}" is ${i}-tuple, but minItems or maxItems/${t} are not specified or different at path "${o}"`;
            (0, s.checkStrictMode)(l, e, n.strictTuples);
        }
    }(i), l.opts.unevaluated && r.length && !0 !== l.items && (l.items = s.mergeEvaluated.items(o, r.length, l.items));
    const u = o.name("valid"), d = o.const("len", n._`${a}.length`);
    r.forEach((t, r)=>{
        (0, s.alwaysValidSchema)(l, t) || (o.if(n._`${d} > ${r}`, ()=>e.subschema({
                keyword: c,
                schemaProp: r,
                dataProp: r
            }, u)), e.ok(u));
    });
}
exports.validateTuple = a, exports.default = i;
