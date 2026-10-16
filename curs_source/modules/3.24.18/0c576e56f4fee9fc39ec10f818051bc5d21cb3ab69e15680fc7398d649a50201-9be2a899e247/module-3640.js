"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = {
    keyword: [
        "maxProperties",
        "minProperties"
    ],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
        message ({ keyword: e, schemaCode: t }) {
            const r = "maxProperties" === e ? "more" : "fewer";
            return n.str`must NOT have ${r} than ${t} properties`;
        },
        params: ({ schemaCode: e })=>n._`{limit: ${e}}`
    },
    code (e) {
        const { keyword: t, data: r, schemaCode: o } = e, s = "maxProperties" === t ? n.operators.GT : n.operators.LT;
        e.fail$data(n._`Object.keys(${r}).length ${s} ${o}`);
    }
};
exports.default = o;
