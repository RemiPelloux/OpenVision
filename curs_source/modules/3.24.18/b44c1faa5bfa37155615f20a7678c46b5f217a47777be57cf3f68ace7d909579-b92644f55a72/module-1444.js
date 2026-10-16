"use strict";
require.d(exports, {
    UD: ()=>o,
    YR: ()=>s
});
const n = "agent_host.remote_agent_service_route", s = "none";
function o(e) {
    let t = !1;
    return {
        emit (r) {
            if (t) return;
            t = !0;
            const s = function(e) {
                return {
                    kind: e.kind,
                    source: e.source,
                    reason: e.reason
                };
            }(r);
            if (e.metricsIncrement(n, s), "builtin" === r.kind) {
                const t = `agent host: AgentService stays on the remote (${r.source})`;
                e.info(t), e.structuredInfo(t, s);
            }
        }
    };
}
