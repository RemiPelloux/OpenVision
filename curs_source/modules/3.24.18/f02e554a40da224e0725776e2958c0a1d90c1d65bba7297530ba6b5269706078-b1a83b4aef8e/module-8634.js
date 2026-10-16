"use strict";
require.d(exports, {
    E4: ()=>u,
    Er: ()=>i,
    WN: ()=>s,
    Zo: ()=>n,
    Zw: ()=>o,
    fg: ()=>a
});
const n = "environment_setup_resume_config", s = "max_resume_age_ms", i = 6048e5, o = 36e5, a = 2592e6;
function u(t) {
    return "number" == typeof t && Number.isInteger(t) && t >= o && t <= a ? t : i;
}
