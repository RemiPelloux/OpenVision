"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assignDefaults = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js");
function s(e, t, r) {
    const { gen: s, compositeRule: i, data: a, opts: l } = e;
    if (void 0 === r) return;
    const c = n._`${a}${(0, n.getProperty)(t)}`;
    if (i) return void (0, o.checkStrictMode)(e, `default is ignored for: ${c}`);
    let u = n._`${c} === undefined`;
    "empty" === l.useDefaults && (u = n._`${u} || ${c} === null || ${c} === ""`), s.if(u, n._`${c} = ${(0, n.stringify)(r)}`);
}
exports.assignDefaults = function(e, t) {
    const { properties: r, items: n } = e.schema;
    if ("object" === t && r) for(const t in r)s(e, t, r[t].default);
    else "array" === t && Array.isArray(n) && n.forEach((t, r)=>s(e, r, t.default));
};
