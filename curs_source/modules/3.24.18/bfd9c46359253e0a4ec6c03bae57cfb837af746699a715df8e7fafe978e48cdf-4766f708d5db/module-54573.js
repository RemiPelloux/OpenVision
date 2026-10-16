"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-90247.js"), i = {
    keyword: [
        "maxLength",
        "minLength"
    ],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
        message ({ keyword: e, schemaCode: t }) {
            const r = "maxLength" === e ? "more" : "fewer";
            return n.str`must NOT have ${r} than ${t} characters`;
        },
        params: ({ schemaCode: e })=>n._`{limit: ${e}}`
    },
    code (e) {
        const { keyword: t, data: r, schemaCode: i, it: a } = e, c = "maxLength" === t ? n.operators.GT : n.operators.LT, l = !1 === a.opts.unicode ? n._`${r}.length` : n._`${(0, s.useFunc)(e.gen, o.default)}(${r})`;
        e.fail$data(n._`${l} ${c} ${i}`);
    }
};
exports.default = i;
