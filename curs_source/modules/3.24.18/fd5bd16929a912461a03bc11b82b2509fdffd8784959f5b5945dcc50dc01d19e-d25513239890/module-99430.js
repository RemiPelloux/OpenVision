"use strict";
require.d(exports, {
    $: ()=>i
});
var n = require(73931), s = require("./module-88141.js");
const i = ({ query: e = {} })=>{
    const t = [], r = {};
    for (const i of Object.keys(e)){
        if (i.toLowerCase() === s.D8) continue;
        const o = (0, n.escapeUri)(i);
        t.push(o);
        const a = e[i];
        "string" == typeof a ? r[o] = `${o}=${(0, n.escapeUri)(a)}` : Array.isArray(a) && (r[o] = a.slice(0).reduce((e, t)=>e.concat([
                `${o}=${(0, n.escapeUri)(t)}`
            ]), []).sort().join("&"));
    }
    return t.sort().map((e)=>r[e]).filter((e)=>e).join("&");
};
