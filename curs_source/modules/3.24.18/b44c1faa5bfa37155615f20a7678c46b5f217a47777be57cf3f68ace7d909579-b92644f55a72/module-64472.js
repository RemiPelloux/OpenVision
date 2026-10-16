"use strict";
require.d(exports, {
    b: ()=>a
});
var n = require("./module-91398.js");
const s = "mcp", o = {
    disableConsoleFallback: !0
}, i = (async ()=>{
    try {
        return await n.cursor.checkFeatureGate("mcp_structured_logging");
    } catch  {
        return !1;
    }
})();
function a(e) {
    var t;
    t = ()=>{
        n.cursor.logStructuredInfo(s, e.message, {
            mcpMeta: {
                ...e.metadata,
                subkey: e.subkey,
                mcp_version: "snapshots"
            }
        }, o);
    }, i.then((e)=>{
        e && t();
    });
}
