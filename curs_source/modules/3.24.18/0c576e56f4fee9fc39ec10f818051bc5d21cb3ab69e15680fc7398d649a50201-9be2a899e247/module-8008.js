"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assignDefaults = void 0;
const n = require("./module-5183.js"), o = require("./module-9657.js");
function s(e, t, r) {
    const { gen: s, compositeRule: i, data: a, opts: c } = e;
    if (void 0 === r) return;
    const u = n._`${a}${(0, n.getProperty)(t)}`;
    if (i) return void (0, o.checkStrictMode)(e, `default is ignored for: ${u}`);
    let l = n._`${u} === undefined`;
    "empty" === c.useDefaults && (l = n._`${l} || ${u} === null || ${u} === ""`), s.if(l, n._`${u} = ${(0, n.stringify)(r)}`);
}
exports.assignDefaults = function(e, t) {
    const { properties: r, items: n } = e.schema;
    if ("object" === t && r) for(const t in r)s(e, t, r[t].default);
    else "array" === t && Array.isArray(n) && n.forEach((t, r)=>s(e, r, t.default));
};
