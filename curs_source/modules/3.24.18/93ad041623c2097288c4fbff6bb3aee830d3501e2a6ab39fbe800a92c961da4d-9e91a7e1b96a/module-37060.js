"use strict";
require.d(exports, {
    H: ()=>s
});
var n = require("./module-88141.js");
const s = ({ headers: e }, t, r)=>{
    const s = {};
    for (const i of Object.keys(e).sort()){
        if (null == e[i]) continue;
        const o = i.toLowerCase();
        (o in n.SN || t?.has(o) || n.Ir.test(o) || n.lP.test(o)) && (!r || r && !r.has(o)) || (s[o] = e[i].trim().replace(/\s+/g, " "));
    }
    return s;
};
