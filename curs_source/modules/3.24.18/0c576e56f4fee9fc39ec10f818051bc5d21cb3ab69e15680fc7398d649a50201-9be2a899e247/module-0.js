"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-8255.js"), o = require("./module-9657.js"), s = require("./module-5183.js"), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
        message: ({ schemaCode: e })=>s.str`must match pattern "${e}"`,
        params: ({ schemaCode: e })=>s._`{pattern: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schema: a, schemaCode: c, it: u } = e, l = u.opts.unicodeRegExp ? "u" : "";
        if (i) {
            const { regExp: n } = u.opts.code, i = "new RegExp" === n.code ? s._`new RegExp` : (0, o.useFunc)(t, n), a = t.let("valid");
            t.try(()=>t.assign(a, s._`${i}(${c}, ${l}).test(${r})`), ()=>t.assign(a, !1)), e.fail$data(s._`!${a}`);
        } else {
            const t = (0, n.usePattern)(e, a);
            e.fail$data(s._`!${t}.test(${r})`);
        }
    }
};
exports.default = i;
