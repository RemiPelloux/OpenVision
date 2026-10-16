"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateTuple = void 0;
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-8255.js"), i = {
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
    const { gen: s, parentSchema: i, data: a, keyword: c, it: u } = e;
    !function(e) {
        const { opts: n, errSchemaPath: s } = u, i = r.length, a = i === e.minItems && (i === e.maxItems || !1 === e[t]);
        if (n.strictTuples && !a) {
            const e = `"${c}" is ${i}-tuple, but minItems or maxItems/${t} are not specified or different at path "${s}"`;
            (0, o.checkStrictMode)(u, e, n.strictTuples);
        }
    }(i), u.opts.unevaluated && r.length && !0 !== u.items && (u.items = o.mergeEvaluated.items(s, r.length, u.items));
    const l = s.name("valid"), d = s.const("len", n._`${a}.length`);
    r.forEach((t, r)=>{
        (0, o.alwaysValidSchema)(u, t) || (s.if(n._`${d} > ${r}`, ()=>e.subschema({
                keyword: c,
                schemaProp: r,
                dataProp: r
            }, l)), e.ok(l));
    });
}
exports.validateTuple = a, exports.default = i;
