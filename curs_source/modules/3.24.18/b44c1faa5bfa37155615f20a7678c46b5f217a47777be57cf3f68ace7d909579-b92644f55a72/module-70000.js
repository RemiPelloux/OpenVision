"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), s = require("./module-79657.js"), o = require("./module-95183.js"), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
        message: ({ schemaCode: e })=>o.str`must match pattern "${e}"`,
        params: ({ schemaCode: e })=>o._`{pattern: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schema: a, schemaCode: c, it: l } = e, u = l.opts.unicodeRegExp ? "u" : "";
        if (i) {
            const { regExp: n } = l.opts.code, i = "new RegExp" === n.code ? o._`new RegExp` : (0, s.useFunc)(t, n), a = t.let("valid");
            t.try(()=>t.assign(a, o._`${i}(${c}, ${u}).test(${r})`), ()=>t.assign(a, !1)), e.fail$data(o._`!${a}`);
        } else {
            const t = (0, n.usePattern)(e, a);
            e.fail$data(o._`!${t}.test(${r})`);
        }
    }
};
exports.default = i;
