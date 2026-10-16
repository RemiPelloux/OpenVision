"use strict";
require.d(exports, {
    X: ()=>o,
    s: ()=>s
});
var n = require("./module-8032.js");
function s(t) {
    const e = n.C[t];
    return "string" != typeof e ? t.toString() : e[0].toLowerCase() + e.substring(1).replace(/[A-Z]/g, (t)=>"_" + t.toLowerCase());
}
let i;
function o(t) {
    if (!i) {
        i = {};
        for (const t of Object.values(n.C))"string" != typeof t && (i[s(t)] = t);
    }
    return i[t];
}
