"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-79657.js"), s = {
    keyword: "not",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: !0,
    code (e) {
        const { gen: t, schema: r, it: s } = e;
        if ((0, n.alwaysValidSchema)(s, r)) return void e.fail();
        const o = t.name("valid");
        e.subschema({
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
        }, o), e.failResult(o, ()=>e.reset(), ()=>e.error());
    },
    error: {
        message: "must NOT be valid"
    }
};
exports.default = s;
