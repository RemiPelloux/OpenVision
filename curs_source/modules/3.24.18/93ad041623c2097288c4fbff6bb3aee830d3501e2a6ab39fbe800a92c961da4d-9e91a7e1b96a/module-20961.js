"use strict";
require.d(exports, {
    w: ()=>i
});
var n = require("./module-93451.js"), s = require("./module-15235.js");
const i = (e, t)=>Object.entries(e ?? {}).reduce((e, [r, i])=>(e[r] = i.map((e)=>{
            const i = (0, s.O4)(e, "Header value entry", t);
            if ("string" != typeof i) throw new n.c(`Header '${r}' value '${i}' is not a string`);
            return i;
        }), e), {});
