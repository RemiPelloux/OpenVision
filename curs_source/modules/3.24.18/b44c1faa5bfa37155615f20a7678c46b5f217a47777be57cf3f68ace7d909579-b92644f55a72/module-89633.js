"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-79244.js"), i = {
    keyword: "const",
    $data: !0,
    error: {
        message: "must be equal to constant",
        params: ({ schemaCode: e })=>n._`{allowedValue: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schemaCode: a, schema: c } = e;
        i || c && "object" == typeof c ? e.fail$data(n._`!${(0, s.useFunc)(t, o.default)}(${r}, ${a})`) : e.fail(n._`${c} !== ${r}`);
    }
};
exports.default = i;
