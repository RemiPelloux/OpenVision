"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), o = require("./module-79657.js"), s = require("./module-95183.js"), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
        message: ({ schemaCode: e })=>s.str`must match pattern "${e}"`,
        params: ({ schemaCode: e })=>s._`{pattern: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schema: a, schemaCode: l, it: c } = e, u = c.opts.unicodeRegExp ? "u" : "";
        if (i) {
            const { regExp: n } = c.opts.code, i = "new RegExp" === n.code ? s._`new RegExp` : (0, o.useFunc)(t, n), a = t.let("valid");
            t.try(()=>t.assign(a, s._`${i}(${l}, ${u}).test(${r})`), ()=>t.assign(a, !1)), e.fail$data(s._`!${a}`);
        } else {
            const t = (0, n.usePattern)(e, a);
            e.fail$data(s._`!${t}.test(${r})`);
        }
    }
};
exports.default = i;
