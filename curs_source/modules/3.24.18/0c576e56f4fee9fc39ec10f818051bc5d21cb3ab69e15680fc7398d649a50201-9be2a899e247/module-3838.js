"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-9657.js"), o = {
    keyword: "allOf",
    schemaType: "array",
    code (e) {
        const { gen: t, schema: r, it: o } = e;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        const s = t.name("valid");
        r.forEach((t, r)=>{
            if ((0, n.alwaysValidSchema)(o, t)) return;
            const i = e.subschema({
                keyword: "allOf",
                schemaProp: r
            }, s);
            e.ok(s), e.mergeEvaluated(i);
        });
    }
};
exports.default = o;
