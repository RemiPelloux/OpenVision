"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-9244.js"), i = {
    keyword: "const",
    $data: !0,
    error: {
        message: "must be equal to constant",
        params: ({ schemaCode: e })=>n._`{allowedValue: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schemaCode: a, schema: c } = e;
        i || c && "object" == typeof c ? e.fail$data(n._`!${(0, o.useFunc)(t, s.default)}(${r}, ${a})`) : e.fail(n._`${c} !== ${r}`);
    }
};
exports.default = i;
