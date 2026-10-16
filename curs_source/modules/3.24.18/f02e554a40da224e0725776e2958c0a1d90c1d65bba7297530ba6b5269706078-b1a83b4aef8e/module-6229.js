"use strict";
require.d(exports, {
    B: ()=>u,
    Xg: ()=>a,
    hi: ()=>c
});
var n = require("./module-1187.js"), s = require("./module-216.js"), i = require("./module-328.js"), o = require("./module-8032.js");
const a = "1";
function u(t) {
    const e = t.get(n._U);
    if (null === e) throw new i.T(`missing required header: set ${n._U} to "${a}"`, o.C.InvalidArgument);
    if (e !== a) throw new i.T(`${n._U} must be "${a}": got "${e}"`, o.C.InvalidArgument);
}
function c(t) {
    const e = t.get(s.qE);
    if (null === e) throw new i.T(`missing required parameter: set ${s.qE} to "v${a}"`, o.C.InvalidArgument);
    if (e !== `v${a}`) throw new i.T(`${s.qE} must be "v${a}": got "${e}"`, o.C.InvalidArgument);
}
