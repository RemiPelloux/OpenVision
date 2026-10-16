"use strict";
require.d(exports, {
    C: ()=>s
});
var n = require("./module-496.js");
const o = 3e5;
function s(e) {
    const t = (0, n.v)("inlineReconnectCooldownMs", e) ?? o;
    return Math.max(1e3, Math.min(t, 36e5));
}
