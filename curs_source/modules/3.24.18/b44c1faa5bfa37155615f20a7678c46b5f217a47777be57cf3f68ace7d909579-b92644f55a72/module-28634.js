"use strict";
require.d(exports, {
    E4: ()=>c,
    Er: ()=>o,
    WN: ()=>s,
    Zo: ()=>n,
    Zw: ()=>i,
    fg: ()=>a
});
const n = "environment_setup_resume_config", s = "max_resume_age_ms", o = 6048e5, i = 36e5, a = 2592e6;
function c(e) {
    return "number" == typeof e && Number.isInteger(e) && e >= i && e <= a ? e : o;
}
