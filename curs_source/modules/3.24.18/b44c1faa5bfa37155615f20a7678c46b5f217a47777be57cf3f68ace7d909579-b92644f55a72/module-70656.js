"use strict";
require.d(exports, {
    _: ()=>s
});
var n = require("./module-17819.js");
function s(e, t) {
    const r = `[${(0, n.s)(t)}]`;
    return e === r ? "" : e.startsWith(`${r} `) ? e.slice(r.length + 1) : e;
}
