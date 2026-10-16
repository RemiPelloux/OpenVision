require.d(exports, {
    createIdeObservabilityActivate: ()=>R
});
var r = require(75088), s = require(37949), n = require(33002), a = require(98875), i = require(76849), c = require(46144), l = require(91398), d = require(14521), u = require(30306), m = require("./module-28144.js"), p = require(82987);
const h = (0, c.v5)("vscode.agent_exec.event_loop_delay_ms", {
    description: "Event loop delay in milliseconds"
}), g = (0, c.wt)("vscode.agent_exec.event_loop_delay_min_ms", {
    description: "Minimum event loop delay in milliseconds"
}), w = (0, c.wt)("vscode.agent_exec.event_loop_delay_max_ms", {
    description: "Maximum event loop delay in milliseconds"
}), v = (0, c.wt)("vscode.agent_exec.event_loop_delay_mean_ms", {
    description: "Mean event loop delay in milliseconds"
}), y = (0, c.wt)("vscode.agent_exec.memory_heap_used_mb", {
    description: "V8 heap used memory in megabytes"
}), _ = (0, c.wt)("vscode.agent_exec.memory_heap_total_mb", {
    description: "V8 heap total memory in megabytes"
}), f = (0, c.wt)("vscode.agent_exec.memory_rss_mb", {
    description: "Resident set size memory in megabytes"
}), b = (0, c.wt)("vscode.agent_exec.memory_external_mb", {
    description: "External memory usage in megabytes"
}), M = (0, c.wt)("vscode.agent_exec.memory_array_buffers_mb", {
    description: "ArrayBuffers memory usage in megabytes"
}), x = (0, c.wt)("vscode.agent_exec.cpu_user_percent", {
    description: "CPU user time percentage"
}), C = (0, c.wt)("vscode.agent_exec.cpu_system_percent", {
    description: "CPU system time percentage"
}), k = 1048576;
function E(e) {
    return Number.isFinite(e) ? e / 1e6 : 0;
}
class S {
    constructor(e = ()=>p.monitorEventLoopDelay({
            resolution: 20
        })){
        this.createMonitor = e;
    }
    start() {
        if (void 0 !== this.monitor) throw new Error("Event-loop delay measurement is already running");
        this.monitor = this.createMonitor(), this.monitor.enable();
    }
    finish() {
        const e = this.monitor;
        if (void 0 === e) throw new Error("Event-loop delay measurement is not running");
        return this.monitor = void 0, e.disable(), {
            maxMs: E(e.max),
            meanMs: E(e.mean),
            p95Ms: E(e.percentile(95))
        };
    }
    dispose() {
        this.monitor?.disable(), this.monitor = void 0;
    }
}
class L {
    constructor(e, t = 1e4){
        this.intervalId = null, this.lastCpuUsage = null, this.lastCpuTime = 0, this.getContext = e, this.intervalMs = t, this.eventLoopMonitor = p.monitorEventLoopDelay({
            resolution: 20
        });
    }
    start() {
        if (null === this.intervalId) {
            this.eventLoopMonitor.enable();
            try {
                this.lastCpuUsage = process.cpuUsage(), this.lastCpuTime = Date.now(), this.collectMetrics(), this.intervalId = setInterval(()=>{
                    this.collectMetrics();
                }, this.intervalMs);
            } catch (e) {
                throw this.stop(), e;
            }
        }
    }
    stop() {
        null !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.eventLoopMonitor.disable();
    }
    collectMetrics() {
        const e = this.getContext();
        this.collectEventLoopMetrics(e), this.collectMemoryMetrics(e), this.collectCpuMetrics(e);
    }
    collectEventLoopMetrics(e) {
        h.histogram(e, E(this.eventLoopMonitor.mean)), g.gauge(e, E(this.eventLoopMonitor.min)), w.gauge(e, E(this.eventLoopMonitor.max)), v.gauge(e, E(this.eventLoopMonitor.mean)), this.eventLoopMonitor.reset();
    }
    collectMemoryMetrics(e) {
        const t = process.memoryUsage();
        y.gauge(e, t.heapUsed / k), _.gauge(e, t.heapTotal / k), f.gauge(e, t.rss / k), b.gauge(e, t.external / k), M.gauge(e, t.arrayBuffers / k);
    }
    collectCpuMetrics(e) {
        const t = process.cpuUsage(), o = Date.now();
        if (null !== this.lastCpuUsage) {
            const r = 1e3 * (o - this.lastCpuTime), s = (t.user - this.lastCpuUsage.user) / r * 100, n = (t.system - this.lastCpuUsage.system) / r * 100;
            x.gauge(e, s), C.gauge(e, n);
        }
        this.lastCpuUsage = t, this.lastCpuTime = o;
    }
}
var $ = require(91105);
const U = "ripgrep_invocation_monitor", D = "ripgrep_invocation_monitor_config", I = {
    windowMs: 1e4,
    threshold: 50,
    maxRecords: 100,
    cooldownMs: 3e5,
    reportToSentry: !0
};
async function T(e, t) {
    const o = ()=>!0 === t?.aborted;
    let r = !1;
    try {
        r = await l.cursor.checkFeatureGate(U);
    } catch  {
        r = !1;
    }
    if (!r || o()) return;
    let s = I;
    try {
        const e = await l.cursor.getDynamicConfigValue(D);
        e && (s = {
            windowMs: e.window_ms ?? I.windowMs,
            threshold: e.threshold ?? I.threshold,
            maxRecords: e.max_records ?? I.maxRecords,
            cooldownMs: e.cooldown_ms ?? I.cooldownMs,
            reportToSentry: e.report_to_sentry ?? I.reportToSentry
        });
    } catch  {
        s = I;
    }
    if (o()) return;
    const n = [];
    let a = 0;
    if (o()) return;
    (0, $.o9_)((t)=>{
        try {
            n.push(t);
            const o = Math.max(1, s.maxRecords, s.threshold);
            n.length > o && n.splice(0, n.length - o);
            const r = t.timestamp, i = r - s.windowMs;
            let c = 0;
            for(let e = n.length - 1; e >= 0 && n[e].timestamp >= i; e--)c++;
            if (c < s.threshold) return;
            if (!s.reportToSentry) return;
            if (r - a < s.cooldownMs) return;
            a = r, ((t, o)=>{
                const r = o - s.windowMs, a = n.filter((e)=>e.timestamp >= r), i = {}, c = {};
                for (const e of a)i[e.source] = (i[e.source] ?? 0) + 1, c[e.mode] = (c[e.mode] ?? 0) + 1;
                const d = Object.entries(i).sort((e, t)=>t[1] - e[1])[0]?.[0] ?? "unknown", u = a.length > 0 ? a[0].timestamp : o, m = s.windowMs > 0 ? t / s.windowMs * 1e3 : 0;
                try {
                    l.cursor.captureException(new Error(`Excessive ripgrep invocations (agent-exec): ${t} spawns in ${s.windowMs}ms`), {
                        client_error_type: "ripgrep_invocation_storm",
                        force_upload: "forced",
                        top_source: d,
                        "event.process": "extension-host"
                    }, {
                        level: "warning",
                        fingerprint: [
                            "ripgrep-invocation-storm",
                            "agent-exec",
                            d
                        ],
                        extra: {
                            windowCount: t,
                            windowMs: s.windowMs,
                            threshold: s.threshold,
                            maxRecords: s.maxRecords,
                            bufferSize: n.length,
                            distinctSources: Object.keys(i).length,
                            windowSpanMs: o - u,
                            ratePerSec: m.toFixed(1),
                            sourceCounts: JSON.stringify(i),
                            modeCounts: JSON.stringify(c)
                        },
                        jsonAttachments: [
                            {
                                filename: "ripgrep-invocations.json",
                                json: JSON.stringify({
                                    schemaVersion: 1,
                                    description: "Most recent ripgrep spawns from the agent-exec paths (agent grep/glob tool + ripwalk) before the storm threshold was crossed. No raw query text or paths are included.",
                                    windowMs: s.windowMs,
                                    threshold: s.threshold,
                                    windowCount: t,
                                    sourceCounts: i,
                                    modeCounts: c,
                                    records: n
                                }, null, 2)
                            }
                        ]
                    }), e?.(`[ripgrep-monitor] reported storm: ${t} spawns in ${s.windowMs}ms (top=${d})`);
                } catch (t) {
                    e?.(`[ripgrep-monitor] report failed: ${String(t)}`);
                }
            })(c, r);
        } catch  {}
    });
    const i = ()=>{
        (0, $.o9_)(void 0);
    };
    if (!o()) return e?.(`[ripgrep-monitor] enabled (window=${s.windowMs}ms threshold=${s.threshold} maxRecords=${s.maxRecords} report=${s.reportToSentry})`), i;
    i();
}
const A = (0, s.h)("cursor-agent-host"), O = (0, c.Pu)("vscode.agent_exec.activate_calls", {}), F = "cursorAgentExec.startEventLoopDelayMeasurementForTesting", j = "cursorAgentExec.finishEventLoopDelayMeasurementForTesting";
function R(e) {
    const t = [];
    try {
        const o = (0, u.km)(), p = new s.yt([
            (0, d.eA)(new m.e5, u.so),
            new m.jX(o)
        ]), h = new m.E5, g = (0, n.q6)().with(s._O, p).with(c.Fm, h);
        O.increment(g);
        const w = e.activationStartMs ?? Date.now(), v = (0, a.VI)(g.withName("CursorAgentExec.activate"));
        t.push(()=>v[Symbol.dispose]());
        const y = v.ctx, _ = new L(()=>(0, n.q6)().with(s._O, p).with(c.Fm, h));
        t.push(()=>_.stop()), _.start();
        const f = new S;
        t.push(()=>f.dispose());
        const b = l.commands.registerCommand(F, ()=>f.start());
        t.push(()=>b.dispose());
        const M = l.commands.registerCommand(j, ()=>f.finish());
        t.push(()=>M.dispose()), A.info(g, "cursor_agent_exec.startup.workspace_paths", {
            workspacePathCount: e.workspacePaths.length,
            workspacePaths: [
                ...e.workspacePaths
            ]
        });
        const x = (0, r.N7)({
            projectsDir: (0, i.m4)(),
            onCompleted: (e, t)=>{
                A.debug(g, "Agent data cleanup completed", {
                    ...e,
                    ...t
                });
            },
            onFailed: (e, t)=>{
                A.warn(g, "Agent data cleanup failed", {
                    ...t,
                    error: String(e)
                });
            }
        });
        t.push(()=>x());
        let C = !1;
        const k = new AbortController;
        let E;
        t.push(()=>k.abort()), T((e)=>o.appendLine(e), k.signal).then((e)=>{
            void 0 !== e && (E = e, (k.signal.aborted || C) && (E = void 0, e()));
        }).catch((e)=>{
            C || k.signal.aborted || o.appendLine(`[cursor-agent-host] ripgrep invocation monitor failed: ${String(e)}`);
        });
        let $ = !1;
        const U = ()=>{
            $ || ($ = !0, v[Symbol.dispose]());
        }, D = (e)=>C ? e : e.with(s._O, p).with(c.Fm, h), I = ()=>{
            C || $ || (A.info(g, "cursor_agent_exec.startup.activation_latency", {
                durationMs: Date.now() - w
            }), U());
        }, R = ()=>{
            C || (C = !0, k.abort(), E?.(), E = void 0, U(), x(), _.stop(), b.dispose(), M.dispose(), f.dispose());
        };
        return t.length = 0, {
            snapshot: {
                outputChannelCreated: !0,
                structuredLoggerWired: !0,
                metricsBackendWired: !0,
                performanceMetricsStarted: !0,
                eventLoopMonitorCommandsRegistered: !0,
                agentDataCleanupScheduled: !0,
                ripgrepInvocationMonitorAttempted: !0
            },
            serviceCtx: g,
            activationCtx: y,
            loggerBackend: p,
            metricsBackend: h,
            attachToTurnContext: D,
            markActivationComplete: I,
            dispose: R
        };
    } catch (e) {
        throw (()=>{
            for (const e of t.splice(0).reverse())try {
                e();
            } catch  {}
        })(), e;
    }
}
