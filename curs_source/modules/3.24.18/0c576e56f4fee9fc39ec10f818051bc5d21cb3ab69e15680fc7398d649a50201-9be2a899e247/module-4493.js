"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
        message: ({ schemaCode: e })=>n.str`must be multiple of ${e}`,
        params: ({ schemaCode: e })=>n._`{multipleOf: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, schemaCode: o, it: s } = e, i = s.opts.multipleOfPrecision, a = t.let("res"), c = i ? n._`Math.abs(Math.round(${a}) - ${a}) > 1e-${i}` : n._`${a} !== parseInt(${a})`;
        e.fail$data(n._`(${o} === 0 || (${a} = ${r}/${o}, ${c}))`);
    }
};
exports.default = o;
