"use strict";
require.d(exports, {
    t: ()=>i
});
var n = require("./module-93451.js"), s = require("./module-15235.js");
const i = (e, t)=>{
    const r = (0, s.O4)(e, "Endpoint URL", t);
    if ("string" == typeof r) try {
        return new URL(r);
    } catch (e) {
        throw console.error(`Failed to construct URL with ${r}`, e), e;
    }
    throw new n.c("Endpoint URL must be a string, got " + typeof r);
};
