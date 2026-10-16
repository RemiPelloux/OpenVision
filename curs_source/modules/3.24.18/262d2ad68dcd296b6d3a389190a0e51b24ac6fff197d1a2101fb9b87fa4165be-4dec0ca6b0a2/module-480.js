"use strict";
require.d(exports, {
    c: ()=>o
});
var n = require("./module-75504.js");
const o = (...e)=>async ()=>{
        if (0 === e.length) throw new n.m("No providers in chain");
        let t;
        for (const r of e)try {
            return await r();
        } catch (e) {
            if (t = e, e?.tryNextLink) continue;
            throw e;
        }
        throw t;
    };
