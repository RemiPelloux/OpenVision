"use strict";
require.d(exports, {
    X: ()=>i,
    s: ()=>s
});
var n = require("./module-84959.js");
function s(e) {
    const t = n.C[e];
    return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
}
let o;
function i(e) {
    if (!o) {
        o = {};
        for (const e of Object.values(n.C))"string" != typeof e && (o[s(e)] = e);
    }
    return o[e];
}
