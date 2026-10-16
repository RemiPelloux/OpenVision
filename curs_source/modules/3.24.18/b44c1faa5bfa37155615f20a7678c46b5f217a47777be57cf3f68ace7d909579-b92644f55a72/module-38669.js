"use strict";
require.d(exports, {
    Y: ()=>n,
    r: ()=>s
});
const n = "hosted_mcp_routing_enabled";
async function s(e) {
    try {
        return !0 === await e.checkFeatureGate(n, {
            disableExposureLog: !0
        });
    } catch  {
        return !1;
    }
}
