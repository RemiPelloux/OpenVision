"use strict";
require.d(exports, {
    u: ()=>s
});
var n = require(96851);
const s = (e)=>{
    const t = {};
    for(const r in e){
        if (!(0, n.hasOwn)(e, r)) continue;
        const s = e[r];
        t[r] = Array.isArray(s) ? s.join(",") : s;
    }
    return t;
};
