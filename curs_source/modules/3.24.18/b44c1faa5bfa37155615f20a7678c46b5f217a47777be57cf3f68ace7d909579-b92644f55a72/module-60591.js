"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [
        "object",
        "boolean"
    ],
    error: {
        message: "property name must be valid",
        params: ({ params: e })=>n._`{propertyName: ${e.propertyName}}`
    },
    code (e) {
        const { gen: t, schema: r, data: o, it: i } = e;
        if ((0, s.alwaysValidSchema)(i, r)) return;
        const a = t.name("valid");
        t.forIn("key", o, (r)=>{
            e.setParams({
                propertyName: r
            }), e.subschema({
                keyword: "propertyNames",
                data: r,
                dataTypes: [
                    "string"
                ],
                propertyName: r,
                compositeRule: !0
            }, a), t.if((0, n.not)(a), ()=>{
                e.error(!0), i.allErrors || t.break();
            });
        }), e.ok(a);
    }
};
exports.default = o;
