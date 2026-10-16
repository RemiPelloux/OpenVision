"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = {
    keyword: [
        "maxItems",
        "minItems"
    ],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
        message ({ keyword: e, schemaCode: t }) {
            const r = "maxItems" === e ? "more" : "fewer";
            return n.str`must NOT have ${r} than ${t} items`;
        },
        params: ({ schemaCode: e })=>n._`{limit: ${e}}`
    },
    code (e) {
        const { keyword: t, data: r, schemaCode: o } = e, s = "maxItems" === t ? n.operators.GT : n.operators.LT;
        e.fail$data(n._`${r}.length ${s} ${o}`);
    }
};
exports.default = o;
