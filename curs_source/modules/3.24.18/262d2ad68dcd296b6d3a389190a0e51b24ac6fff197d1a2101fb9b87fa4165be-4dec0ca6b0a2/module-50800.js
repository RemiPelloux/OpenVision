"use strict";
require.d(exports, {
    Bz: ()=>o,
    Ch: ()=>n
});
const n = "AWS_PROFILE", o = (e)=>e.profile || process.env[n] || "default";
