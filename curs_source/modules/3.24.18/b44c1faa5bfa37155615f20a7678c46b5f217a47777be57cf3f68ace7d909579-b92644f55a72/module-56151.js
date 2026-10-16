"use strict";
require.d(exports, {
    Am: ()=>c,
    Oc: ()=>p,
    ct: ()=>d,
    kI: ()=>f,
    lJ: ()=>v,
    qk: ()=>_,
    qo: ()=>u
});
var n = require("./module-37949.js"), s = require("./module-98875.js"), o = require("./module-46144.js"), i = require("./module-51635.js");
const a = (0, n.h)("@anysphere/agent-host:local-loop-turn-telemetry");
function c(e, t) {
    return e.with(s.b6, {
        ...e.get(s.b6),
        requestId: t.attemptRequestId,
        reqId: t.attemptRequestId,
        "composer.id": t.composerId,
        "agent_host.local_loop": !0
    });
}
const l = "local_loop";
function u(e, t) {
    const r = (0, n.o1)(e, {
        loop: l
    });
    return r.with(o.Fm, (0, o.ts)({
        backend: r.get(o.Fm),
        labels: {
            loop: l,
            ...t
        }
    }));
}
function d(e, t) {
    return void 0 === t || 0 === Object.keys(t).length ? e : e.with(o.Fm, (0, o.ts)({
        backend: e.get(o.Fm),
        labels: {
            ...t
        }
    }));
}
function p() {
    let e = [];
    return {
        sink: {
            book: (t)=>{
                e.push(t);
            }
        },
        dropHeld: ()=>{
            e = [];
        },
        flushHeld: (t)=>{
            const r = e;
            e = [];
            for (const e of r)try {
                e();
            } catch (e) {
                a.warn(t, "Held turn teardown telemetry failed", {
                    error: e instanceof Error ? e.stack ?? e.message : String(e)
                });
            }
        }
    };
}
const m = "agent_host.local_loop.turn.result", h = "agent_host.local_loop.turn.duration_ms";
function f(e, t, r) {
    return void 0 === t ? e : {
        run: async (n)=>{
            const s = performance.now();
            let o = !1;
            try {
                await e.run(n);
            } catch (e) {
                throw o = !0, e;
            } finally{
                const e = performance.now() - s, a = {
                    ...r,
                    issubagent: (0, i.gy)(n.runOptions) ? "true" : "false",
                    outcome: g(n, o)
                };
                y(m, ()=>t.increment?.({
                        stat: m,
                        value: 1,
                        tags: a
                    })), y(h, ()=>t.distribution({
                        stat: h,
                        value: e,
                        tags: a
                    }));
            }
        },
        dispose: ()=>e.dispose()
    };
}
function g(e, t) {
    return e.ctx.canceled || e.conversationActionManager.abortRequested ? "aborted" : t ? "error" : "success";
}
function y(e, t) {
    try {
        t();
    } catch (t) {
        console.warn(`${e} not emitted`, t instanceof Error ? t.name : typeof t);
    }
}
const w = new Set([
    "textDelta",
    "thinkingDelta",
    "partialToolCall",
    "toolCallStarted",
    "toolCallDelta"
]);
function v(e) {
    const { onTtftBreakdown: t } = e;
    if (void 0 === t) return {
        beginAttempt: ()=>{},
        markRunStreamStart: ()=>{},
        markFirstInvocationStart: ()=>{},
        wrapListener: (e)=>e
    };
    const r = e.now ?? (()=>performance.now());
    let n, s = !1;
    const o = (o)=>{
        const i = n, c = i?.runStreamStartedAt;
        if (s || void 0 === i || void 0 === c) return;
        if (!function(e) {
            const t = e.message.case;
            if (void 0 === t || !w.has(t)) return !1;
            if ("textDelta" === e.message.case) {
                const t = e.message.value;
                return !t.isServerNotice && t.text.length > 0;
            }
            return !0;
        }(o)) return;
        s = !0;
        const l = r(), { firstInvocationStartedAt: u } = i, d = void 0 === u ? {
            providerTtftMs: l - c
        } : {
            providerTtftMs: l - u,
            clientPrepMs: u - c
        };
        try {
            t({
                serverFirstTokenMs: l - i.startedAt,
                preStreamSetupMs: c - i.startedAt,
                waitForFirstEventMs: 0,
                ...d,
                slowPoolWaitMs: 0,
                clock: "client"
            }, i.attempt);
        } catch (t) {
            a.warn(e.ctx, "onTtftBreakdown callback failed", {
                requestId: e.requestId,
                error: t instanceof Error ? t.stack ?? t.message : String(t)
            });
        }
    };
    return {
        beginAttempt: (e)=>{
            n = {
                attempt: e,
                startedAt: r()
            };
        },
        markRunStreamStart: ()=>{
            void 0 !== n && void 0 === n.runStreamStartedAt && (n.runStreamStartedAt = r());
        },
        markFirstInvocationStart: ()=>{
            void 0 !== n && void 0 !== n.runStreamStartedAt && void 0 === n.firstInvocationStartedAt && (n.firstInvocationStartedAt = r());
        },
        wrapListener: (e)=>{
            const { enqueuePostTurnEndedWork: t, flushPostTurnEndedWork: r } = e;
            return {
                sendUpdate: (t, r)=>(o(r), e.sendUpdate(t, r)),
                query: (t, r)=>e.query(t, r),
                enqueuePostTurnEndedWork: void 0 === t ? void 0 : (r)=>t.call(e, r),
                flushPostTurnEndedWork: void 0 === r ? void 0 : (t)=>r.call(e, t)
            };
        }
    };
}
function _(e) {
    try {
        const t = (0, s.mJ)(e);
        if (void 0 === t) return {};
        const r = `00-${t.traceId}-${t.spanId}-${t.traceFlags.toString(16).padStart(2, "0")}`;
        return {
            traceparent: r,
            "backend-traceparent": r
        };
    } catch  {
        return {};
    }
}
