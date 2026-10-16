"use strict";
require.d(exports, {
    NY: ()=>s,
    X5: ()=>i,
    z9: ()=>o
});
var n = require("./module-1771.js");
function o(e, t) {
    return !0 !== t?.[n.TI] ? e : {
        ...e,
        [n.TI]: !0
    };
}
function s(e) {
    return void 0 !== e && !0 !== e.destructiveHint && !0 === e.readOnlyHint;
}
function i(e) {
    return s(e) ? "declared_read" : !1 === e?.readOnlyHint || !0 === e?.destructiveHint ? "write" : "unannotated";
}
