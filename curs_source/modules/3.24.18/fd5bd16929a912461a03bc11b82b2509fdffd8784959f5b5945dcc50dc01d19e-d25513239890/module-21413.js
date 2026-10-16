"use strict";
require.r(exports), require.d(exports, {
    getHostHeaderPlugin: ()=>a,
    hostHeaderMiddleware: ()=>i,
    hostHeaderMiddlewareOptions: ()=>o,
    resolveHostHeaderConfig: ()=>s
});
var n = require(50333);
function s(e) {
    return e;
}
const i = (e)=>(t)=>async (r)=>{
            if (!n.K.isInstance(r.request)) return t(r);
            const { request: s } = r, { handlerProtocol: i = "" } = e.requestHandler.metadata || {};
            if (i.indexOf("h2") >= 0 && !s.headers[":authority"]) delete s.headers.host, s.headers[":authority"] = s.hostname + (s.port ? ":" + s.port : "");
            else if (!s.headers.host) {
                let e = s.hostname;
                null != s.port && (e += `:${s.port}`), s.headers.host = e;
            }
            return t(r);
        }, o = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: [
        "HOST"
    ],
    override: !0
}, a = (e)=>({
        applyToStack: (t)=>{
            t.add(i(e), o);
        }
    });
