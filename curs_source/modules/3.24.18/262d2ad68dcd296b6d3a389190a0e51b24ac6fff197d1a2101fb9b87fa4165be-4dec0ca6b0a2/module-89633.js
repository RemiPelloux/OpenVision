"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = require("./module-79244.js"), i = {
    keyword: "const",
    $data: !0,
    error: {
        message: "must be equal to constant",
        params: ({ schemaCode: e })=>n._`{allowedValue: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schemaCode: a, schema: l } = e;
        i || l && "object" == typeof l ? e.fail$data(n._`!${(0, o.useFunc)(t, s.default)}(${r}, ${a})`) : e.fail(n._`${l} !== ${r}`);
    }
};
exports.default = i;
