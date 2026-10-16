"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-9657.js"), o = {
    keyword: "not",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: !0,
    code (e) {
        const { gen: t, schema: r, it: o } = e;
        if ((0, n.alwaysValidSchema)(o, r)) return void e.fail();
        const s = t.name("valid");
        e.subschema({
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
        }, s), e.failResult(s, ()=>e.reset(), ()=>e.error());
    },
    error: {
        message: "must NOT be valid"
    }
};
exports.default = o;
