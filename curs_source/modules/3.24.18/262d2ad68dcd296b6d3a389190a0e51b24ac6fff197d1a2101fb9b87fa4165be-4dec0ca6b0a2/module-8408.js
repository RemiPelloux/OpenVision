"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = n.operators, s = {
    maximum: {
        okStr: "<=",
        ok: o.LTE,
        fail: o.GT
    },
    minimum: {
        okStr: ">=",
        ok: o.GTE,
        fail: o.LT
    },
    exclusiveMaximum: {
        okStr: "<",
        ok: o.LT,
        fail: o.GTE
    },
    exclusiveMinimum: {
        okStr: ">",
        ok: o.GT,
        fail: o.LTE
    }
}, i = {
    message: ({ keyword: e, schemaCode: t })=>n.str`must be ${s[e].okStr} ${t}`,
    params: ({ keyword: e, schemaCode: t })=>n._`{comparison: ${s[e].okStr}, limit: ${t}}`
}, a = {
    keyword: Object.keys(s),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code (e) {
        const { keyword: t, data: r, schemaCode: o } = e;
        e.fail$data(n._`${r} ${s[t].fail} ${o} || isNaN(${r})`);
    }
};
exports.default = a;
