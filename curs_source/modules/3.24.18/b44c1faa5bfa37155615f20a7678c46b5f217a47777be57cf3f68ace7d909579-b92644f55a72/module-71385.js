"use strict";
require.d(exports, {
    createLiveExecRuntime: ()=>c,
    oD: ()=>a
});
var n = require("./module-91398.js"), s = require("./module-30306.js");
const o = 6e4, i = 10, a = "cursor-agent-exec registered an invalid agent runtime handle";
async function c(e = {}) {
    const t = e.acquire ?? (()=>n.cursor.acquireAgentHostRuntime()), r = e.reporting ?? function() {
        const e = void 0 !== n.env.remoteName ? "true" : "false";
        return {
            onSlowAcquire: (t, r)=>{
                s.gW.warn(`Still waiting for cursor-agent-exec to register the agent runtime after ${t}ms (report ${r})`), n.cursor.logStructuredWarn(s.XX, "Still waiting for cursor-agent-exec to register the agent runtime", (0, s.QE)({
                    waitedMs: t,
                    ordinal: r,
                    remote: e
                }), s.bn);
            },
            onAcquired: (t, r)=>{
                n.cursor.metricsDistribution({
                    stat: "agent_host.exec_runtime_acquire_ms",
                    value: t,
                    tags: {
                        slow: r ? "true" : "false",
                        remote: e
                    }
                });
            }
        };
    }(), c = e.slowAcquireReportIntervalMs ?? o, l = Date.now();
    let u = 0;
    const d = setInterval(()=>{
        u++, r.onSlowAcquire(Date.now() - l, u), u >= i && clearInterval(d);
    }, c);
    let p;
    try {
        p = await t();
    } finally{
        clearInterval(d);
    }
    if (r.onAcquired(Date.now() - l, u > 0), !function(e) {
        return "object" == typeof e && null !== e;
    }(m = p) || "function" != typeof m.activate || "function" != typeof m.deactivate || "function" != typeof m.getGitExecutor || "function" != typeof m.getMcpProvider || "function" != typeof m.createAgentHostResourceProvider || "string" != typeof m.extensionPath) throw new Error(a);
    var m;
    return function(e) {
        return {
            extensionPath: e.extensionPath,
            activate: (t, r)=>e.activate(t, r),
            deactivate: ()=>e.deactivate(),
            getGitExecutor: ()=>e.getGitExecutor(),
            getMcpProvider: ()=>e.getMcpProvider(),
            createAgentHostResourceProvider: (t)=>e.createAgentHostResourceProvider(t)
        };
    }(p);
}
