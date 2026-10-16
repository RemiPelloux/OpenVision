"use strict";
require.d(exports, {
    d: ()=>o
});
var n = require("./module-81958.js");
const s = n.g1(n.L5());
function o(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    const r = s.safeParse(t);
    return r.success ? r.data : void 0;
}
