"use strict";
require.d(exports, {
    B: ()=>c,
    Xg: ()=>a,
    hi: ()=>l
});
var n = require("./module-60284.js"), s = require("./module-24473.js"), o = require("./module-92801.js"), i = require("./module-84959.js");
const a = "1";
function c(e) {
    const t = e.get(n._U);
    if (null === t) throw new o.T(`missing required header: set ${n._U} to "${a}"`, i.C.InvalidArgument);
    if (t !== a) throw new o.T(`${n._U} must be "${a}": got "${t}"`, i.C.InvalidArgument);
}
function l(e) {
    const t = e.get(s.qE);
    if (null === t) throw new o.T(`missing required parameter: set ${s.qE} to "v${a}"`, i.C.InvalidArgument);
    if (t !== `v${a}`) throw new o.T(`${s.qE} must be "v${a}": got "${t}"`, i.C.InvalidArgument);
}
