"use strict";
require.d(exports, {
    Dk: ()=>s,
    Vi: ()=>i
});
var n = require("./module-496.js");
const o = 5;
function s(e) {
    if (!e.sawSession404) return {
        nextCount: 0,
        shouldTombstone: !1
    };
    const t = e.currentCount + 1;
    return t >= e.threshold ? {
        nextCount: 0,
        shouldTombstone: !0
    } : {
        nextCount: t,
        shouldTombstone: !1
    };
}
function i(e) {
    const t = (0, n.v)("streamableHttpSession404TombstoneThreshold", e) ?? o, r = Math.trunc(t);
    return Math.max(1, Math.min(r, 50));
}
