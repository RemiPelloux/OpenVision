"use strict";
require.d(exports, {
    NO: ()=>i,
    eu: ()=>s,
    yw: ()=>o
});
var n = require("./module-496.js");
const o = 3e5;
function s(e) {
    const t = (0, n.v)("focusRetryCooldownMs", e) ?? o;
    return Math.max(o, Math.min(t, 36e5));
}
function i(e, t, r) {
    return void 0 !== t && e - t < r;
}
