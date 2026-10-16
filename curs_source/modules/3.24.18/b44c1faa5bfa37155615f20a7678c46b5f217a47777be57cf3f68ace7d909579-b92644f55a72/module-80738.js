"use strict";
require.d(exports, {
    NY: ()=>i,
    cB: ()=>o,
    hT: ()=>c,
    yC: ()=>a
});
var n = require("./module-61771.js");
const s = 256;
function o(e) {
    return !0 === e?.[n.TI];
}
function i(e) {
    return void 0 !== e && !0 !== e.destructiveHint && !0 === e.readOnlyHint;
}
function a(e) {
    if (void 0 !== e && 0 !== e.length) try {
        const t = JSON.parse(e);
        if ("object" == typeof t && null !== t && !Array.isArray(t)) return t;
    } catch  {}
}
function c(e) {
    if (void 0 === e) return {};
    const t = {};
    "string" == typeof e.title && e.title.length > 0 && (t.title = e.title.slice(0, s));
    for (const r of [
        "readOnlyHint",
        "destructiveHint",
        "idempotentHint",
        "openWorldHint"
    ])"boolean" == typeof e[r] && (t[r] = e[r]);
    return o(e) && (t[n.TI] = !0), 0 === Object.keys(t).length ? {} : {
        annotationsJson: JSON.stringify(t)
    };
}
