"use strict";
require.r(exports), require.d(exports, {
    getRecursionDetectionPlugin: ()=>c,
    recursionDetectionMiddleware: ()=>a
});
const n = {
    step: "build",
    tags: [
        "RECURSION_DETECTION"
    ],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
};
var s = require("./module-6921.js"), i = require(50333);
const o = "X-Amzn-Trace-Id", a = ()=>(e)=>async (t)=>{
            const { request: r } = t;
            if (!i.K.isInstance(r)) return e(t);
            const n = Object.keys(r.headers ?? {}).find((e)=>e.toLowerCase() === o.toLowerCase()) ?? o;
            if (r.headers.hasOwnProperty(n)) return e(t);
            const a = process.env.AWS_LAMBDA_FUNCTION_NAME, c = process.env._X_AMZN_TRACE_ID, l = await s.A.getInstanceAsync(), u = l?.getXRayTraceId(), d = u ?? c, h = (e)=>"string" == typeof e && e.length > 0;
            return h(a) && h(d) && (r.headers[o] = d), e({
                ...t,
                request: r
            });
        }, c = (e)=>({
        applyToStack: (e)=>{
            e.add(a(), n);
        }
    });
