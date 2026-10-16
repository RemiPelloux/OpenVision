"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assignDefaults = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js");
function o(e, t, r) {
    const { gen: o, compositeRule: i, data: a, opts: c } = e;
    if (void 0 === r) return;
    const l = n._`${a}${(0, n.getProperty)(t)}`;
    if (i) return void (0, s.checkStrictMode)(e, `default is ignored for: ${l}`);
    let u = n._`${l} === undefined`;
    "empty" === c.useDefaults && (u = n._`${u} || ${l} === null || ${l} === ""`), o.if(u, n._`${l} = ${(0, n.stringify)(r)}`);
}
exports.assignDefaults = function(e, t) {
    const { properties: r, items: n } = e.schema;
    if ("object" === t && r) for(const t in r)o(e, t, r[t].default);
    else "array" === t && Array.isArray(n) && n.forEach((t, r)=>o(e, r, t.default));
};
