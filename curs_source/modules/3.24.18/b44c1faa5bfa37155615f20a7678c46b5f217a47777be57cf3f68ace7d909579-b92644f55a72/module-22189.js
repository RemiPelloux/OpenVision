"use strict";
require.d(exports, {
    G: ()=>o,
    V: ()=>s
});
var n = require("./module-70569.js");
function s(e) {
    return 401 === e || 403 === e;
}
function o(e, t) {
    return async (r, o)=>{
        const i = await t.getApiKey(), a = await e(r, (0, n.ld)(o, i));
        if (!s(a.status) || !function(e) {
            if (null == e || "string" == typeof e) return !0;
            if ("undefined" != typeof ReadableStream && e instanceof ReadableStream) return !1;
            return !0;
        }(o?.body)) return a;
        const c = await t.refreshAfterRejection(i);
        return void 0 === c || c === i ? a : (a.body?.cancel().catch((e)=>{}), e(r, (0, n.ld)(o, c)));
    };
}
