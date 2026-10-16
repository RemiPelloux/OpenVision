"use strict";
require.d(exports, {
    eA: ()=>i,
    y2: ()=>a,
    yT: ()=>c
});
const n = "Selected Agent Host turn runtime", s = "placement-routing-mcp:call";
function o(e) {
    return !0 === e.logger?.startsWith("@anysphere/agent-client:");
}
function i(e, t) {
    return {
        log: (r, n)=>{
            o(n) ? t(n) : e.log(r, n);
        }
    };
}
function a(e) {
    return {
        log: (t, r)=>{
            const i = o(r);
            i && e.structuredTransport(r);
            const a = function(e) {
                return "storage" === e.metadata?.component;
            }(r) ? e.storageChannel : void 0, c = "info" === r.level && (r.message === n || function(e) {
                return e.logger === s;
            }(r));
            if (void 0 === a && "error" !== r.level && "warn" !== r.level && !c) return;
            const l = a ?? e.channel;
            let u = "";
            if (void 0 !== r.metadata && Object.keys(r.metadata).length > 0) try {
                u = ` ${JSON.stringify(r.metadata)}`;
            } catch  {
                u = " [metadata not serializable]";
            }
            const d = `${r.message}${u}`;
            "error" === r.level ? (l.error(d, r.error), i || e.structuredError(r.message, r.error instanceof Error ? r.error : void 0, r.metadata)) : "warn" === r.level ? (l.warn(d), i || e.structuredWarn(r.message, r.metadata)) : "debug" === r.level && void 0 !== a ? a.debug(d) : l.info(d);
        }
    };
}
function c(e, t) {
    return e ?? t;
}
