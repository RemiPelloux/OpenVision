"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-8255.js"), i = require("./module-8063.js"), a = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    error: {
        message: ({ params: { len: e } })=>n.str`must NOT have more than ${e} items`,
        params: ({ params: { len: e } })=>n._`{limit: ${e}}`
    },
    code (e) {
        const { schema: t, parentSchema: r, it: n } = e, { prefixItems: a } = r;
        n.items = !0, (0, o.alwaysValidSchema)(n, t) || (a ? (0, i.validateAdditionalItems)(e, a) : e.ok((0, s.validateArray)(e)));
    }
};
exports.default = a;
