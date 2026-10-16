"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-79657.js"), s = {
    keyword: "allOf",
    schemaType: "array",
    code (e) {
        const { gen: t, schema: r, it: s } = e;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        const o = t.name("valid");
        r.forEach((t, r)=>{
            if ((0, n.alwaysValidSchema)(s, t)) return;
            const i = e.subschema({
                keyword: "allOf",
                schemaProp: r
            }, o);
            e.ok(o), e.mergeEvaluated(i);
        });
    }
};
exports.default = s;
