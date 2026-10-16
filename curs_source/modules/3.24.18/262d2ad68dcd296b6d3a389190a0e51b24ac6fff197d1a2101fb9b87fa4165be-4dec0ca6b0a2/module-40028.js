"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateTuple = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = require("./module-68255.js"), i = {
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
        r.items = !0, (0, o.alwaysValidSchema)(r, t) || e.ok((0, s.validateArray)(e));
    }
};
function a(e, t, r = e.schema) {
    const { gen: s, parentSchema: i, data: a, keyword: l, it: c } = e;
    !function(e) {
        const { opts: n, errSchemaPath: s } = c, i = r.length, a = i === e.minItems && (i === e.maxItems || !1 === e[t]);
        if (n.strictTuples && !a) {
            const e = `"${l}" is ${i}-tuple, but minItems or maxItems/${t} are not specified or different at path "${s}"`;
            (0, o.checkStrictMode)(c, e, n.strictTuples);
        }
    }(i), c.opts.unevaluated && r.length && !0 !== c.items && (c.items = o.mergeEvaluated.items(s, r.length, c.items));
    const u = s.name("valid"), d = s.const("len", n._`${a}.length`);
    r.forEach((t, r)=>{
        (0, o.alwaysValidSchema)(c, t) || (s.if(n._`${d} > ${r}`, ()=>e.subschema({
                keyword: l,
                schemaProp: r,
                dataProp: r
            }, u)), e.ok(u));
    });
}
exports.validateTuple = a, exports.default = i;
