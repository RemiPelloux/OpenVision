"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = n.operators, o = {
    maximum: {
        okStr: "<=",
        ok: s.LTE,
        fail: s.GT
    },
    minimum: {
        okStr: ">=",
        ok: s.GTE,
        fail: s.LT
    },
    exclusiveMaximum: {
        okStr: "<",
        ok: s.LT,
        fail: s.GTE
    },
    exclusiveMinimum: {
        okStr: ">",
        ok: s.GT,
        fail: s.LTE
    }
}, i = {
    message: ({ keyword: e, schemaCode: t })=>n.str`must be ${o[e].okStr} ${t}`,
    params: ({ keyword: e, schemaCode: t })=>n._`{comparison: ${o[e].okStr}, limit: ${t}}`
}, a = {
    keyword: Object.keys(o),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code (e) {
        const { keyword: t, data: r, schemaCode: s } = e;
        e.fail$data(n._`${r} ${o[t].fail} ${s} || isNaN(${r})`);
    }
};
exports.default = a;
