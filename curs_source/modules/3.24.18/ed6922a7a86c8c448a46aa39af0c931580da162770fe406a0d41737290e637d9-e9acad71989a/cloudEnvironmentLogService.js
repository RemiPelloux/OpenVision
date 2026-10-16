import { Oxv, _ji } from "./A3u.js";
import { Pk, Se, we, z3e } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { bn, wE } from "./async.js";
import { $n_, UAh } from "./cloudEnvironmentStartupLoadingState.js";
import { TN } from "./connectErrors.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { BNn, _Ue } from "./pod_event_pb.js";
import { mn, pd } from "./qIc.js";
import { N1, UGt, gh } from "./reactive.js";
import { x } from "./tslib.es6.js";
import { TAh, mn_ } from "./waterfallFixtures.js";
import { ln_ } from "./waterfallStateReducer.js";
import { EAh, b8e, rEo, xAh } from "./waterfallTaxonomy.js";
import { OAh } from "./waterfallViewModel.js";
import { FJi, LJi, NJi, OJi, PJi, X3n, eEo, tEo } from "./waterfall_state_pb.js";
import { Akt, BD, m1e, uet } from "./waterfall_update_pb.js";
function bAh() {
    return new PJi({
        spans: []
    });
}
function yAh(e, t) {
    switch(t.update.case){
        case "spanStart":
            return nn_(e, t.update.value, t.timestamp);
        case "spanEnd":
            return in_(e, t.update.value, t.timestamp);
        case "spanLog":
            return rn_(e, t.update.value);
        case "spanStatusUpdate":
            return sn_(e, t.update.value);
        case "spanUpdate":
            return on_(e, t.update.value);
        case "sentinel":
            return Btt(e);
        case void 0:
            return Btt(e);
    }
}
function nn_(e, t, n) {
    return t.spanId === "" ? Btt(e) : Z3n(e, t.spanId, (i)=>(i.parentSpanId = t.parentSpanId, i.phaseType = t.phaseType, i.fallbackPhaseLabel = t.fallbackPhaseLabel, i.startTime = n, i.end = void 0, i.logs = [], i.status = void 0, i.callToAction = void 0, i.spanState = cn_(t) ?? i.spanState, i));
}
function in_(e, t, n) {
    return t.spanId === "" ? Btt(e) : Z3n(e, t.spanId, (i)=>(i.end = new NJi({
            timestamp: n,
            endStatus: t.endStatus
        }), i));
}
function rn_(e, t) {
    return t.spanId === "" ? Btt(e) : Z3n(e, t.spanId, (n)=>(n.logs = [
            ...n.logs,
            new X3n({
                timestamp: t.timestamp,
                message: t.message,
                level: t.level
            })
        ], n));
}
function sn_(e, t) {
    return t.spanId === "" ? Btt(e) : Z3n(e, t.spanId, (n)=>(n.status = new FJi({
            timestamp: t.timestamp,
            message: t.message,
            statusType: t.statusType
        }), n.callToAction = t.callToAction === void 0 ? void 0 : SAh(t.callToAction), n));
}
function on_(e, t) {
    if (t.spanId === "") return Btt(e);
    switch(t.spanUpdate.case){
        case "genericLog":
            return an_(e, t.spanId, t.spanUpdate.value);
        case void 0:
            return Btt(e);
    }
}
function an_(e, t, n) {
    return Z3n(e, t, (i)=>(i.logs = [
            ...i.logs,
            new X3n({
                timestamp: n.timestamp,
                message: n.message,
                level: n.level
            })
        ], i));
}
function Z3n(e, t, n) {
    let i = !1;
    const r = e.spans.map((s)=>s.spanId !== t ? nEo(s) : (i = !0, n(nEo(s))));
    return i || r.push(n(new LJi({
        spanId: t
    }))), new PJi({
        spans: r
    });
}
function cn_(e) {
    switch(e.spanDetails.case){
        case "gitReposSetup":
            return new OJi({
                spanState: {
                    case: "gitReposSetup",
                    value: new eEo
                }
            });
        case "gitRepoSetup":
            return new OJi({
                spanState: {
                    case: "gitRepoSetup",
                    value: new tEo({
                        repoDisplayName: e.spanDetails.value.repoDisplayName
                    })
                }
            });
        case void 0:
            return;
    }
}
function Btt(e) {
    return new PJi({
        spans: e.spans.map(nEo)
    });
}
function nEo(e) {
    return new LJi({
        spanId: e.spanId,
        parentSpanId: e.parentSpanId,
        phaseType: e.phaseType,
        fallbackPhaseLabel: e.fallbackPhaseLabel,
        startTime: e.startTime,
        end: e.end === void 0 ? void 0 : new NJi({
            timestamp: e.end.timestamp,
            endStatus: e.end.endStatus
        }),
        logs: e.logs.map((t)=>new X3n({
                timestamp: t.timestamp,
                message: t.message,
                level: t.level
            })),
        status: e.status === void 0 ? void 0 : new FJi({
            timestamp: e.status.timestamp,
            message: e.status.message,
            statusType: e.status.statusType
        }),
        callToAction: e.callToAction === void 0 ? void 0 : SAh(e.callToAction),
        spanState: e.spanState?.clone()
    });
}
function SAh(e) {
    return e.clone();
}
function pn_(e) {
    return TAh[e]();
}
function gn_(e) {
    return EAh[e];
}
function fn_(e) {
    if (e === void 0 || e === "") return;
    const t = e.indexOf(":"), n = t === -1 ? e : e.slice(0, t);
    return xAh[n];
}
function vn_(e) {
    return e?.startsWith("checkpointPod") === !0;
}
function iEo(e, t) {
    if (e in rEo) return rEo[e];
    const n = _n_(e, t);
    return {
        runningLabel: n,
        doneLabel: n
    };
}
function _n_(e, t) {
    if (t !== void 0 && t !== "") return t;
    const n = e.replace(/[_-]+/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").trim();
    return n === "" ? "Working" : n.charAt(0).toUpperCase() + n.slice(1);
}
function AAh(e) {
    const t = new Map;
    for (const F of e.spans)t.set(F.spanId, F);
    const n = new Map, i = [];
    for (const F of e.spans){
        const H = F.parentSpanId;
        if (H !== void 0 && H !== "" && t.has(H)) {
            const $ = n.get(H) ?? [];
            $.push(F), n.set(H, $);
        } else i.push(F);
    }
    let r;
    for (const F of i)F.phaseType === BD.ENVIRONMENT && (r = F);
    const s = r ? y8e(r.end?.timestamp) : void 0, o = (F, H)=>{
        H.push(F);
        for (const $ of n.get(F.spanId) ?? [])o($, H);
        return H;
    }, a = (F)=>{
        const H = o(F, []), $ = DAh(H.map(MAh)), W = y8e(F.startTime), G = y8e(F.end?.timestamp), q = l(F), z = H.find((se)=>MAh(se) === "error"), X = y8e(z?.status?.timestamp), Y = G ?? ($ === "error" ? X : void 0), Z = W !== void 0 && Y !== void 0 ? Math.max(0, Y - W) : void 0, K = iEo(q ?? "", NAh(F)), J = RAh(K, $), ne = z !== void 0 ? PAh(z) : void 0, ee = $ === "warning" ? H.filter((se)=>se.status?.statusType === uet.WARN && se.status.message !== "").map(PAh) : [];
        return {
            spanId: F.spanId,
            categoryKey: q ?? F.spanId,
            label: J,
            status: $,
            startedAtMs: W,
            endedAtMs: Y,
            durationMs: Z,
            durationLabel: Z === void 0 ? void 0 : Q3n(Z),
            showDuration: $ !== "running" && Z !== void 0,
            logs: u(F),
            warnings: ee,
            warningCount: $ === "warning" ? ee.length : 0,
            error: $ === "error" ? ne : void 0,
            children: []
        };
    }, c = new Map, l = (F)=>{
        if (c.has(F.spanId)) return c.get(F.spanId);
        let H = LAh(F);
        if (H === void 0) {
            const $ = new Set([
                F.spanId
            ]);
            let W = F.parentSpanId;
            for(; W !== void 0 && W !== "" && !$.has(W);){
                const G = t.get(W);
                if (G === void 0 || G.phaseType === BD.ENVIRONMENT || ($.add(W), H = LAh(G), H !== void 0)) break;
                W = G.parentSpanId;
            }
        }
        return c.set(F.spanId, H), H;
    }, u = (F)=>{
        const H = F.logs.map(Sn_);
        for (const $ of n.get(F.spanId) ?? [])H.push(...u($));
        return H.sort(($, W)=>($.timestampMs ?? 0) - (W.timestampMs ?? 0)), H;
    }, h = [];
    for (const F of i)F.phaseType === BD.ENVIRONMENT ? h.push(...n.get(F.spanId) ?? []) : h.push(F);
    const p = h.filter((F)=>l(F) !== void 0), g = (F)=>{
        const H = F.map(a), $ = H[0].categoryKey, W = DAh(H.map((ee)=>ee.status)), G = iEo($, NAh(F[0])), q = H.map((ee)=>ee.startedAtMs).filter((ee)=>ee !== void 0), z = q.length > 0 ? Math.min(...q) : void 0, X = H.map((ee)=>ee.endedAtMs).filter((ee)=>ee !== void 0), Y = W !== "running" && X.length > 0 ? Math.max(...X) : void 0, Z = z !== void 0 && Y !== void 0 ? Math.max(0, Y - z) : void 0, K = H.flatMap((ee)=>ee.warnings), J = H.find((ee)=>ee.status === "error"), ne = H.flatMap((ee)=>ee.logs).sort((ee, se)=>(ee.timestampMs ?? 0) - (se.timestampMs ?? 0));
        return {
            spanId: H[0].spanId,
            categoryKey: $,
            label: RAh(G, W),
            status: W,
            startedAtMs: z,
            endedAtMs: Y,
            durationMs: Z,
            durationLabel: Z === void 0 ? void 0 : Q3n(Z),
            showDuration: W !== "running" && Z !== void 0,
            logs: ne,
            warnings: K,
            warningCount: W === "warning" ? K.length : 0,
            error: W === "error" ? J?.error : void 0,
            children: []
        };
    }, f = yn_(p, l).map((F)=>F.length === 1 ? a(F[0]) : g(F)), v = f.some((F)=>F.status === "running"), b = f.some((F)=>F.status === "error"), y = f.reduce((F, H)=>F + H.warningCount, 0), T = y > 0, E = !v && (r !== void 0 ? s !== void 0 : f.length > 0), A = b ? "failed" : !E || f.length === 0 ? "setting-up" : T ? "ready-with-warnings" : "ready", D = f.find((F)=>F.status === "error")?.spanId, P = D === void 0 ? [] : [
        D
    ], N = E || b ? Cn_(e.spans, r ? y8e(r.startTime) : void 0, s) : void 0, O = N === void 0 ? void 0 : Math.max(0, N.endMs - N.startMs);
    return {
        buckets: f,
        overallStatus: A,
        headerLabel: Tn_(A),
        totalSpan: N,
        totalDurationMs: O,
        totalDurationLabel: O === void 0 ? void 0 : Q3n(O),
        totalWarningCount: y,
        isComplete: E,
        firstErrorSpanId: D,
        expandedSpanIds: P
    };
}
function RAh(e, t) {
    return t === "error" ? e.failedLabel ?? e.runningLabel : t === "running" ? e.runningLabel : e.doneLabel;
}
function DAh(e) {
    return e.includes("error") ? "error" : e.includes("running") ? "running" : e.includes("warning") ? "warning" : "done";
}
function yn_(e, t) {
    const n = [];
    for (const i of e){
        const r = t(i), s = n[n.length - 1];
        s !== void 0 && t(s[0]) === r ? s.push(i) : n.push([
            i
        ]);
    }
    return n;
}
function MAh(e) {
    return e.status?.statusType === uet.ERROR || e.end?.endStatus === Akt.FAILURE ? "error" : e.end !== void 0 ? e.status?.statusType === uet.WARN ? "warning" : "done" : "running";
}
function PAh(e) {
    const t = e.status?.message ?? "", n = e.callToAction, i = n !== void 0 && n.callToAction.case === "openUrl" ? {
        url: n.callToAction.value.url,
        buttonText: n.callToAction.value.buttonText
    } : void 0;
    return {
        message: t,
        callToAction: i
    };
}
function LAh(e) {
    if (vn_(e.fallbackPhaseLabel)) return "saveSnapshot";
    if (e.phaseType !== BD.UNSPECIFIED) {
        const n = gn_(e.phaseType);
        if (n !== void 0) return n;
    }
    const t = e.spanState?.spanState.case;
    return t !== void 0 ? t : fn_(e.fallbackPhaseLabel);
}
function NAh(e) {
    if (e.fallbackPhaseLabel !== void 0 && e.fallbackPhaseLabel !== "") return e.fallbackPhaseLabel;
    const t = e.spanState?.spanState;
    if (t?.case === "gitRepoSetup") return t.value.repoDisplayName;
}
function Sn_(e) {
    return {
        timestampMs: y8e(e.timestamp),
        message: e.message,
        level: kn_(e.level)
    };
}
function kn_(e) {
    switch(e){
        case m1e.ERROR:
            return "error";
        case m1e.WARN:
            return "warn";
        case m1e.DEBUG:
            return "debug";
        case m1e.INFO:
        case m1e.UNSPECIFIED:
            return "info";
        default:
            return "info";
    }
}
function Cn_(e, t, n) {
    if (t !== void 0 && n !== void 0) return {
        startMs: t,
        endMs: n
    };
    let i, r;
    for (const s of e){
        const o = y8e(s.startTime);
        o !== void 0 && (i = i === void 0 ? o : Math.min(i, o));
        const a = y8e(s.end?.timestamp) ?? y8e(s.status?.timestamp);
        a !== void 0 && (r = r === void 0 ? a : Math.max(r, a));
    }
    if (!(i === void 0 || r === void 0)) return {
        startMs: i,
        endMs: r
    };
}
function Tn_(e) {
    switch(e){
        case "failed":
            return b8e.failed;
        case "ready":
            return b8e.ready;
        case "ready-with-warnings":
            return b8e.readyWithWarnings;
        case "setting-up":
            return b8e.settingUp;
        default:
            return b8e.settingUp;
    }
}
function y8e(e) {
    if (e === void 0) return;
    const t = e.toDate().getTime();
    return Number.isFinite(t) ? t : void 0;
}
function Q3n(e) {
    if (e < 1e3) return `${Math.max(0, Math.round(e))}ms`;
    const t = Math.round(e / 1e3);
    if (t < 60) return `${t}s`;
    const n = Math.floor(t / 60), i = t % 60;
    return i === 0 ? `${n}m` : `${n}m ${i}s`;
}
function sEo(e) {
    if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
    if (typeof e == "bigint") return e > BigInt(Number.MAX_SAFE_INTEGER) || e < BigInt(Number.MIN_SAFE_INTEGER) ? void 0 : Number(e);
    if (typeof e == "string") {
        const t = Number(e);
        return Number.isFinite(t) ? t : void 0;
    }
}
function BJi(e) {
    if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
    if (typeof e == "bigint") return Number(e);
    if (typeof e == "string") {
        const t = Number(e);
        return Number.isFinite(t) ? t : void 0;
    }
}
function En_(e) {
    return e === _Ue.UNSPECIFIED ? void 0 : e;
}
function Q1e() {
    return {
        show: !1,
        startedAtMs: void 0,
        completedAtMs: void 0,
        status: "not_started"
    };
}
function Njt() {
    return {
        ...Q1e(),
        currentLogIndex: 0,
        commands: [],
        installOutputRouting: "unknown"
    };
}
function xn_() {
    return FAh({
        show: !1,
        phaseOrder: [],
        substates: {
            hydration: Q1e(),
            repoStateLock: Q1e(),
            repositorySetup: {
                ...Q1e(),
                cloneStartedAtMs: void 0,
                cloneCompletedAtMs: void 0,
                checkoutStartedAtMs: void 0,
                checkoutCompletedAtMs: void 0
            },
            imagePull: Q1e(),
            build: Q1e(),
            prepare: Njt(),
            installDependencies: Njt(),
            install: Njt(),
            verify: Njt(),
            start: Njt(),
            extensionInstall: Q1e(),
            snapshot: Q1e(),
            postStart: Njt(),
            extensionStart: Q1e(),
            waitingForWorker: {
                ...Q1e(),
                retryCount: void 0,
                maxRetries: void 0,
                waitReason: void 0
            },
            completion: {
                ...Q1e(),
                creationCompleted: !1,
                startupCompleted: !1
            }
        },
        eventIds: new Set
    });
}
function Utt(e) {
    const t = e.show || e.startedAtMs !== void 0, n = t ? e.completedAtMs !== void 0 ? "completed" : "in_progress" : "not_started";
    return {
        ...e,
        show: t,
        status: n
    };
}
function In_(e) {
    const t = [
        e.startedAtMs,
        e.cloneStartedAtMs,
        e.checkoutStartedAtMs
    ].find((a)=>a !== void 0), n = e.cloneStartedAtMs !== void 0 && e.cloneCompletedAtMs === void 0, i = e.checkoutStartedAtMs !== void 0 && e.checkoutCompletedAtMs === void 0, r = e.show || t !== void 0, s = !n && !i ? Dn_(e.cloneCompletedAtMs, e.checkoutCompletedAtMs) : void 0;
    return {
        ...e,
        show: r,
        startedAtMs: t,
        completedAtMs: s,
        status: r ? s !== void 0 ? "completed" : "in_progress" : "not_started"
    };
}
function Ojt(e) {
    const t = e.commands.at(-1), n = e.startedAtMs ?? e.commands.find((o)=>o.startedAtMs !== void 0)?.startedAtMs, i = t?.exitCode !== null && t?.completedAtMs !== void 0 ? t.completedAtMs : void 0, r = e.show || n !== void 0 || e.commands.length > 0, s = r ? e.commands.length === 0 || t?.exitCode === null ? "in_progress" : "completed" : "not_started";
    return {
        ...e,
        show: r,
        startedAtMs: n,
        completedAtMs: i,
        status: s
    };
}
function An_(e, t) {
    const n = e.show || e.startedAtMs !== void 0 || e.creationCompleted || e.startupCompleted, i = e.startupCompleted || t ? e.completedAtMs ?? e.startedAtMs : void 0;
    return {
        ...e,
        show: n,
        completedAtMs: i,
        status: n ? i !== void 0 ? "completed" : "in_progress" : "not_started"
    };
}
function FAh(e) {
    const t = {
        hydration: Utt(e.substates.hydration),
        repoStateLock: Utt(e.substates.repoStateLock),
        repositorySetup: In_(e.substates.repositorySetup),
        imagePull: Utt(e.substates.imagePull),
        build: Utt(e.substates.build),
        prepare: Ojt(e.substates.prepare),
        installDependencies: Ojt(e.substates.installDependencies),
        install: Ojt(e.substates.install),
        verify: Ojt(e.substates.verify),
        start: Ojt(e.substates.start),
        extensionInstall: Utt(e.substates.extensionInstall),
        snapshot: Utt(e.substates.snapshot),
        postStart: Ojt(e.substates.postStart),
        extensionStart: Utt(e.substates.extensionStart),
        waitingForWorker: Utt(e.substates.waitingForWorker)
    }, n = e.phaseOrder.filter((c)=>c !== "completion"), i = n.length > 0 && n.every((c)=>t[c].status === "completed"), r = An_(e.substates.completion, i), s = {
        ...t,
        completion: r
    }, o = e.show || e.phaseOrder.length > 0 || Object.values(s).some((c)=>c.show), a = o ? r.status === "completed" ? "completed" : "in_progress" : "not_started";
    return {
        ...e,
        show: o,
        substates: s,
        status: a
    };
}
function Rn_(e, t) {
    return e.phaseOrder.includes(t) ? e.phaseOrder : [
        ...e.phaseOrder,
        t
    ];
}
function Dn_(...e) {
    return e.reduce((t, n)=>n === void 0 ? t : t === void 0 ? n : Math.max(t, n), void 0);
}
function hG(e, t, n) {
    return n === "start" ? {
        ...e,
        show: !0,
        startedAtMs: e.startedAtMs ?? t
    } : {
        ...e,
        show: !0,
        startedAtMs: e.startedAtMs ?? t,
        completedAtMs: e.completedAtMs ?? t
    };
}
function UJi(e, t, n, i) {
    if (t === void 0) return e;
    const r = {
        index: e.currentLogIndex,
        status: n,
        timestampMs: t,
        data: i
    }, s = [
        ...e.commands
    ];
    let o = s.at(-1);
    (!o || o.exitCode !== null) && (o = {
        index: s.length,
        name: null,
        logs: [],
        exitCode: null,
        startedAtMs: t,
        completedAtMs: void 0
    }, s.push(o));
    const c = o.logs.length >= UAh ? [
        ...o.logs.slice(1),
        r
    ] : [
        ...o.logs,
        r
    ];
    return s[s.length - 1] = {
        ...o,
        logs: c
    }, {
        ...e,
        show: !0,
        currentLogIndex: e.currentLogIndex + 1,
        startedAtMs: e.startedAtMs ?? t,
        commands: s
    };
}
function Mn_(e, t, n, i) {
    if (t === void 0) return e;
    const r = {
        index: e.currentLogIndex,
        status: "stdin",
        timestampMs: t,
        data: i
    }, s = [
        ...e.commands,
        {
            index: e.commands.length,
            name: n,
            logs: [
                r
            ],
            exitCode: null,
            startedAtMs: t,
            completedAtMs: void 0
        }
    ];
    return {
        ...e,
        show: !0,
        currentLogIndex: e.currentLogIndex + 1,
        startedAtMs: e.startedAtMs ?? t,
        commands: s
    };
}
function BAh(e, t, n) {
    if (t === void 0) return e;
    const i = [
        ...e.commands
    ], r = i.at(-1);
    return !r || r.exitCode !== null ? i.push({
        index: i.length,
        name: null,
        logs: [],
        exitCode: n,
        startedAtMs: t,
        completedAtMs: t
    }) : i[i.length - 1] = {
        ...r,
        exitCode: n,
        completedAtMs: r.completedAtMs ?? t
    }, {
        ...e,
        show: !0,
        startedAtMs: e.startedAtMs ?? t,
        commands: i,
        installOutputRouting: e.installOutputRouting === "inactive" ? "unknown" : e.installOutputRouting
    };
}
function Pn_(e, t) {
    switch(e){
        case "all":
            return !0;
        case "system":
            return t;
        case "user":
            return !t;
        default:
            return e;
    }
}
function oEo(e, t) {
    if (t === "all") return "accept";
    switch(e.installOutputRouting){
        case "active":
            return "accept";
        case "inactive":
            return "ignore";
        case "unknown":
            return t === "user" ? "accept" : "ignore";
        default:
            return e.installOutputRouting;
    }
}
function Ln_(e) {
    const t = e.commands.at(-1);
    return t !== void 0 && t.exitCode === null;
}
function $Ji(e, t, n) {
    const i = sEo(t.creationTimestamp);
    switch(t.payload.case){
        case "installCommand":
            {
                const r = t.payload.value, s = Pn_(n, r.isSystem);
                return {
                    ...s ? Mn_(e, i, r.name || "update", r.command || "") : e,
                    installOutputRouting: s ? "active" : "inactive"
                };
            }
        case "installStdout":
            return oEo(e, n) === "ignore" ? e : {
                ...UJi(e, i, "stdout", t.payload.value),
                installOutputRouting: "active"
            };
        case "installStderr":
            return oEo(e, n) === "ignore" ? e : {
                ...UJi(e, i, "stderr", t.payload.value),
                installOutputRouting: "active"
            };
        case "installExitCode":
            return oEo(e, n) === "ignore" || !Ln_(e) ? e.installOutputRouting === "inactive" ? {
                ...e,
                installOutputRouting: "unknown"
            } : e : {
                ...BAh(e, i, BJi(t.payload.value) ?? 0),
                installOutputRouting: "unknown"
            };
        default:
            return e;
    }
}
function HJi(e, t, n) {
    const i = sEo(t.creationTimestamp);
    switch(`${n}:${t.payload.case}`){
        case "prepare:prepareStdout":
        case "verify:verifyStdout":
        case "start:startStdout":
        case "postStart:postStartStdout":
            return UJi(e, i, "stdout", String(t.payload.value ?? ""));
        case "prepare:prepareStderr":
        case "verify:verifyStderr":
        case "start:startStderr":
        case "postStart:postStartStderr":
            return UJi(e, i, "stderr", String(t.payload.value ?? ""));
        case "prepare:prepareExitCode":
        case "verify:verifyExitCode":
        case "start:startExitCode":
        case "postStart:postStartExitCode":
            return BAh(e, i, BJi(t.payload.value) ?? 0);
        default:
            return e;
    }
}
function Nn_(e, t) {
    return e.substates[t].startedAtMs;
}
function On_(e, t) {
    return e.substates[t].completedAtMs;
}
function Fn_(e, t, n) {
    let i = e;
    for (const r of [
        "imagePull",
        "build"
    ])r === t || Nn_(i, t) === void 0 || i.substates[r].status === "in_progress" && On_(i, r) === void 0 && (i = {
        ...i,
        substates: {
            ...i.substates,
            [r]: hG(i.substates[r], n, "complete")
        }
    });
    return i;
}
function Bn_(e, t, n) {
    if (n && e.eventIds.has(n)) return e;
    const i = sEo(t.creationTimestamp);
    let r = e, s;
    switch(t.payload.case){
        case "hydrationStarted":
        case "hydrationProgress":
            s = "hydration", r = {
                ...r,
                substates: {
                    ...r.substates,
                    hydration: hG(r.substates.hydration, i, "start")
                }
            };
            break;
        case "hydrationCompleted":
            s = "hydration", r = {
                ...r,
                substates: {
                    ...r.substates,
                    hydration: hG(r.substates.hydration, i, "complete")
                }
            };
            break;
        case "blockedRepoState":
            s = "repoStateLock", r = {
                ...r,
                substates: {
                    ...r.substates,
                    repoStateLock: hG(r.substates.repoStateLock, i, "start")
                }
            };
            break;
        case "acquiredRepoState":
            s = "repoStateLock", r = {
                ...r,
                substates: {
                    ...r.substates,
                    repoStateLock: hG(r.substates.repoStateLock, i, "complete")
                }
            };
            break;
        case "checkoutStarted":
        case "checkoutCompleted":
        case "cloneStartedV2":
        case "cloneCompletedV2":
            {
                if ((t.payload.case === "cloneStartedV2" || t.payload.case === "cloneCompletedV2" ? t.payload.value?.purpose : BNn.WORKSPACE_SETUP) === BNn.DOCKER_BUILD) {
                    s = "build", r = {
                        ...r,
                        substates: {
                            ...r.substates,
                            build: hG(r.substates.build, i, t.payload.case === "cloneCompletedV2" ? "complete" : "start")
                        }
                    };
                    break;
                }
                s = "repositorySetup";
                const a = r.substates.repositorySetup;
                r = {
                    ...r,
                    substates: {
                        ...r.substates,
                        repositorySetup: {
                            ...a,
                            show: !0,
                            startedAtMs: a.startedAtMs ?? i,
                            cloneStartedAtMs: t.payload.case === "cloneStartedV2" ? a.cloneStartedAtMs ?? i : a.cloneStartedAtMs,
                            cloneCompletedAtMs: t.payload.case === "cloneCompletedV2" ? a.cloneCompletedAtMs ?? i : a.cloneCompletedAtMs,
                            checkoutStartedAtMs: t.payload.case === "checkoutStarted" ? a.checkoutStartedAtMs ?? i : a.checkoutStartedAtMs,
                            checkoutCompletedAtMs: t.payload.case === "checkoutCompleted" ? a.checkoutCompletedAtMs ?? i : a.checkoutCompletedAtMs
                        }
                    }
                };
                break;
            }
        case "imagePullStarted":
        case "imagePullLayerUpdate":
        case "imagePullStatusUpdate":
            s = "imagePull", r = {
                ...r,
                substates: {
                    ...r.substates,
                    imagePull: hG(r.substates.imagePull, i, "start")
                }
            };
            break;
        case "imagePullCompleted":
            s = "imagePull", r = {
                ...r,
                substates: {
                    ...r.substates,
                    imagePull: hG(r.substates.imagePull, i, "complete")
                }
            };
            break;
        case "buildStarted":
        case "buildStatusMessage":
        case "buildStepStarted":
        case "buildStatusLine":
        case "internalBuildMessage":
            s = "build", r = {
                ...r,
                substates: {
                    ...r.substates,
                    build: hG(r.substates.build, i, "start")
                }
            };
            break;
        case "buildExitCode":
            s = "build", r = {
                ...r,
                substates: {
                    ...r.substates,
                    build: hG(r.substates.build, i, "complete")
                }
            };
            break;
        case "prepareStdout":
        case "prepareStderr":
        case "prepareExitCode":
            s = "prepare", r = {
                ...r,
                substates: {
                    ...r.substates,
                    prepare: HJi(r.substates.prepare, t, "prepare")
                }
            };
            break;
        case "installCommand":
            s = t.payload.value.isSystem ? "installDependencies" : "install", r = {
                ...r,
                substates: {
                    ...r.substates,
                    installDependencies: $Ji(r.substates.installDependencies, t, "system"),
                    install: $Ji(r.substates.install, t, "user")
                }
            };
            break;
        case "installStdout":
        case "installStderr":
        case "installExitCode":
            {
                const o = $Ji(r.substates.install, t, "user"), a = $Ji(r.substates.installDependencies, t, "system");
                s = o !== r.substates.install ? "install" : a !== r.substates.installDependencies ? "installDependencies" : void 0, r = {
                    ...r,
                    substates: {
                        ...r.substates,
                        installDependencies: a,
                        install: o
                    }
                };
                break;
            }
        case "verifyStdout":
        case "verifyStderr":
        case "verifyExitCode":
            s = "verify", r = {
                ...r,
                substates: {
                    ...r.substates,
                    verify: HJi(r.substates.verify, t, "verify")
                }
            };
            break;
        case "startStdout":
        case "startStderr":
        case "startExitCode":
            s = "start", r = {
                ...r,
                substates: {
                    ...r.substates,
                    start: HJi(r.substates.start, t, "start")
                }
            };
            break;
        case "extensionInstallStdout":
        case "extensionInstallStderr":
            s = "extensionInstall", r = {
                ...r,
                substates: {
                    ...r.substates,
                    extensionInstall: hG(r.substates.extensionInstall, i, "start")
                }
            };
            break;
        case "extensionInstallExitCode":
            s = "extensionInstall", r = {
                ...r,
                substates: {
                    ...r.substates,
                    extensionInstall: hG(r.substates.extensionInstall, i, "complete")
                }
            };
            break;
        case "snapshotStarted":
            s = "snapshot", r = {
                ...r,
                substates: {
                    ...r.substates,
                    snapshot: hG(r.substates.snapshot, i, "start")
                }
            };
            break;
        case "snapshotCompleted":
            s = "snapshot", r = {
                ...r,
                substates: {
                    ...r.substates,
                    snapshot: hG(r.substates.snapshot, i, "complete")
                }
            };
            break;
        case "postStartStdout":
        case "postStartStderr":
        case "postStartExitCode":
            s = "postStart", r = {
                ...r,
                substates: {
                    ...r.substates,
                    postStart: HJi(r.substates.postStart, t, "postStart")
                }
            };
            break;
        case "extensionStartStdout":
        case "extensionStartStderr":
            s = "extensionStart", r = {
                ...r,
                substates: {
                    ...r.substates,
                    extensionStart: hG(r.substates.extensionStart, i, "start")
                }
            };
            break;
        case "extensionStartExitCode":
            s = "extensionStart", r = {
                ...r,
                substates: {
                    ...r.substates,
                    extensionStart: hG(r.substates.extensionStart, i, "complete")
                }
            };
            break;
        case "waitingForWorker":
            s = "waitingForWorker", r = {
                ...r,
                substates: {
                    ...r.substates,
                    waitingForWorker: {
                        ...hG(r.substates.waitingForWorker, i, "start"),
                        retryCount: BJi(t.payload.value?.retryCount),
                        maxRetries: BJi(t.payload.value?.maxRetries),
                        waitReason: En_(t.payload.value.waitReason)
                    }
                }
            };
            break;
        case "privateWorkerReady":
            s = "completion", r = {
                ...r,
                substates: {
                    ...r.substates,
                    waitingForWorker: {
                        ...r.substates.waitingForWorker,
                        ...hG(r.substates.waitingForWorker, i, "complete")
                    },
                    completion: {
                        ...r.substates.completion,
                        show: !0,
                        startedAtMs: r.substates.completion.startedAtMs ?? i,
                        completedAtMs: r.substates.completion.completedAtMs ?? i,
                        startupCompleted: !0
                    }
                }
            };
            break;
        case "creationCompleted":
        case "startupCompleted":
            s = "completion", r = {
                ...r,
                substates: {
                    ...r.substates,
                    completion: {
                        ...r.substates.completion,
                        show: !0,
                        startedAtMs: r.substates.completion.startedAtMs ?? i,
                        completedAtMs: t.payload.case === "startupCompleted" ? r.substates.completion.completedAtMs ?? i : r.substates.completion.completedAtMs,
                        creationCompleted: t.payload.case === "creationCompleted" ? !0 : r.substates.completion.creationCompleted,
                        startupCompleted: t.payload.case === "startupCompleted" ? !0 : r.substates.completion.startupCompleted
                    }
                }
            };
            break;
        default:
            break;
    }
    return s && (r = {
        ...r,
        show: !0,
        phaseOrder: Rn_(r, s)
    }, r = Fn_(r, s, i)), n && r.eventIds.add(n), FAh(r);
}
function Un_(e) {
    if (!e || e.phaseOrder.length === 0) return;
    let t;
    for(let n = e.phaseOrder.length - 1; n >= 0; n--){
        const i = e.phaseOrder[n];
        if (e.substates[i].status === "in_progress") {
            if (i === "completion") {
                t = i;
                continue;
            }
            return i;
        }
    }
    return t;
}
function Hn_(e) {
    return !e.setupComplete && e.eventsReceived > 0;
}
function Wn_(e) {
    return !e.receivedAnyResponse && e.recordAgeMs < HAh;
}
function $Ah(e) {
    return e.hasWaterfallSpans ? e.waterfallComplete || e.waterfallFailed : e.legacyStartupCompleted;
}
function Gn_(e) {
    switch(e){
        case "hydration":
        case "repoStateLock":
        case "repositorySetup":
        case "imagePull":
        case "build":
        case "prepare":
        case "verify":
        case "start":
        case "extensionInstall":
        case "snapshot":
        case "postStart":
        case "extensionStart":
        case "waitingForWorker":
        case "completion":
            return e;
        case "installDependencies":
        case "install":
            return "install";
        default:
            return e;
    }
}
var HAh, WJi, c8, aEo, WAh;
export { $Ah, $Ji, AAh, An_, BAh, BJi, Bn_, Btt, Cn_, DAh, Dn_, En_, FAh, Fn_, Gn_, HAh, HJi, Hn_, In_, LAh, Ln_, MAh, Mn_, NAh, Njt, Nn_, Ojt, On_, PAh, Pn_, Q1e, Q3n, RAh, Rn_, SAh, Sn_, Tn_, UJi, Un_, Utt, WAh, WJi, Wn_, Z3n, _n_, aEo, an_, bAh, c8, cn_, fn_, gn_, hG, iEo, in_, kn_, nEo, nn_, oEo, on_, pn_, rn_, sEo, sn_, vn_, xn_, y8e, yAh, yn_ };
var __wakaru_cEo_initialized = false;
export function cEo() {
if (__wakaru_cEo_initialized) return;
__wakaru_cEo_initialized = true;
"use strict";
x(), Se(), bn(), Pn(), Ze(), ln_(), mn_(), OAh(), Sg(), TN(), Vr(), N1(), $n_(), HAh = 300 * 1e3, WJi = pd("cloudEnvironmentLogService"), c8 = class extends we {
    constructor(e, t){
        super(), this._aiService = e, this._environmentService = t, this._records = new Map, this._references = new WAh((n)=>this._ensureRecord(n), (n)=>this._ensureAttached(n), (n, i)=>this._releaseRecord(n, i));
    }
    getState(e) {
        const t = this._references.acquire(e);
        let n = !1;
        return {
            get value () {
                return t.object.reactive.value;
            },
            onChange (i) {
                return t.object.reactive.onChange(i);
            },
            dispose: ()=>{
                n || (n = !0, t.dispose());
            }
        };
    }
    getStartupLoadingState(e) {
        const t = this._references.acquire(e), n = new UGt([
            t.object.reactive
        ], (r)=>r.startupLoadingState);
        let i = !1;
        return {
            get value () {
                return n.value;
            },
            onChange (r) {
                return n.onChange(r);
            },
            dispose: ()=>{
                i || (i = !0, Pk(n, t));
            }
        };
    }
    peekState(e) {
        return this._records.get(e)?.reactive.value;
    }
    peekWaterfallState(e) {
        return this._records.get(e)?.reactive.value.waterfallState;
    }
    peekWaterfallDebugLog(e) {
        return this._records.get(e)?.waterfallDebugLog ?? [];
    }
    listActiveBcIds() {
        return [
            ...this._records.keys()
        ];
    }
    injectSimulatedWaterfall(e, t) {
        const n = this._ensureRecord(e), i = pn_(t);
        this._clearSimulationTimers(n);
        const r = n.reactive.value.waterfallState;
        n.reactive.set({
            ...n.reactive.value,
            waterfallState: bAh(),
            isSimulatingWaterfall: !0
        });
        const s = new Map;
        for (const c of i){
            const l = s.get(c.atMs);
            l ? l.push(c) : s.set(c.atMs, [
                c
            ]);
        }
        let o = 0;
        for (const [c, l] of s){
            o = Math.max(o, c);
            const u = setTimeout(()=>{
                if (n.simulationTimers.delete(u), this._records.get(e) !== n) return;
                const h = n.reactive.value;
                let p = h.waterfallState;
                for (const g of l)p = yAh(p, g.update);
                n.reactive.set({
                    ...h,
                    waterfallState: p
                });
            }, c);
            n.simulationTimers.add(u);
        }
        const a = setTimeout(()=>{
            n.simulationTimers.delete(a), this._records.get(e) === n && n.reactive.set({
                ...n.reactive.value,
                waterfallState: r,
                isSimulatingWaterfall: !1
            });
        }, o + c8.SIMULATION_RESTORE_DELAY_MS);
        n.simulationTimers.add(a);
    }
    _clearSimulationTimers(e) {
        for (const t of e.simulationTimers)clearTimeout(t);
        e.simulationTimers.clear();
    }
    _ensureRecord(e) {
        const t = this._records.get(e);
        if (t) return t;
        const n = {
            bcId: e,
            createdAtMs: Date.now(),
            receivedAnyResponse: !1,
            missingComposerAttempts: 0,
            reactive: new gh({
                bcId: e,
                startupLoadingState: xn_(),
                waterfallState: bAh(),
                isSimulatingWaterfall: !1,
                currentSetupPhase: void 0
            }),
            seenEventIds: new Set,
            lastNonDockerBuildEventId: void 0,
            lastDockerBuildEventId: void 0,
            disposeTimer: new wE,
            detachTimer: new wE,
            simulationTimers: new Set,
            waterfallDebugLog: [],
            pendingLogUpdates: []
        };
        return this._records.set(e, n), n;
    }
    setMachineLogAttachPredicate(e) {
        this._machineLogAttachPredicate = e;
    }
    _ensureAttached(e) {
        if (e.disposeTimer.cancel(), e.detachTimer.cancel(), e.attachPromise || this._machineLogAttachPredicate?.(e.bcId) === !1) return;
        const t = new AbortController;
        e.attachAbortController = t, e.attachPromise = this._attachLoop(e, t.signal).finally(()=>{
            e.attachAbortController === t && this._detach(e);
        });
    }
    _detach(e) {
        e.attachAbortController?.abort(), e.attachAbortController = void 0, e.attachPromise = void 0, this._flushPendingLogUpdatesNow(e);
    }
    _releaseRecord(e, t) {
        t.detachTimer.cancelAndSet(()=>{
            this._records.get(e) === t && this._detach(t);
        }, c8.DETACH_DELAY_MS), t.disposeTimer.cancelAndSet(()=>{
            this._records.get(e) === t && (this._detach(t), this._records.delete(e), this._clearSimulationTimers(t), t.disposeTimer.dispose(), t.detachTimer.dispose());
        }, c8.RECORD_DISPOSE_DELAY_MS);
    }
    async _attachLoop(e, t) {
        for(; !t.aborted;){
            if (this._machineLogAttachPredicate?.(e.bcId) === !1) return;
            try {
                const n = this._aiService.backgroundComposerSyncClient, i = e.lastNonDockerBuildEventId, r = e.lastDockerBuildEventId, s = n.attachBackgroundComposerLogs({
                    bcId: e.bcId,
                    lastEventId: i,
                    lastDockerBuildEventId: r
                }, {
                    signal: t
                });
                let o = 0;
                for await (const a of s)o += 1, e.receivedAnyResponse = !0, e.pendingLogUpdates.push({
                    event: a.event
                }), this._scheduleLogFlush(e);
                if (this._flushPendingLogUpdatesNow(e), t.aborted || !Hn_({
                    setupComplete: this._isSetupStreamComplete(e),
                    eventsReceived: o
                })) return;
                await this._sleep(c8.REATTACH_DELAY_MS, t);
            } catch (n) {
                if (t.aborted) return;
                if (_ji(n) === "terminal") {
                    if (Oxv(n) && Wn_({
                        receivedAnyResponse: e.receivedAnyResponse,
                        recordAgeMs: Date.now() - e.createdAtMs
                    })) {
                        const r = Math.min(c8.REATTACH_DELAY_MS * 2 ** e.missingComposerAttempts, c8.MISSING_COMPOSER_MAX_RETRY_DELAY_MS);
                        e.missingComposerAttempts += 1, await this._sleep(r, t);
                        continue;
                    }
                    return;
                }
                await this._sleep(c8.REATTACH_DELAY_MS, t);
            }
        }
    }
    _isSetupStreamComplete(e) {
        const { waterfallState: t, startupLoadingState: n } = e.reactive.value;
        if (t.spans.length > 0) {
            const i = AAh(t);
            return $Ah({
                hasWaterfallSpans: !0,
                waterfallComplete: i.isComplete,
                waterfallFailed: i.overallStatus === "failed",
                legacyStartupCompleted: !1
            });
        }
        return $Ah({
            hasWaterfallSpans: !1,
            waterfallComplete: !1,
            waterfallFailed: !1,
            legacyStartupCompleted: n.substates.completion.startupCompleted === !0 || n.status === "completed"
        });
    }
    _scheduleLogFlush(e) {
        const t = Date.now();
        e.firstPendingLogAtMs ??= t;
        const n = e.firstPendingLogAtMs + c8.LOG_FLUSH_MAX_WAIT_MS, i = Math.max(0, Math.min(c8.LOG_FLUSH_QUIET_MS, n - t));
        e.logFlushTimer !== void 0 && clearTimeout(e.logFlushTimer), e.logFlushTimer = setTimeout(()=>{
            if (e.logFlushTimer = void 0, e.firstPendingLogAtMs = void 0, this._records.get(e.bcId) !== e) return;
            const r = e.pendingLogUpdates.splice(0, e.pendingLogUpdates.length);
            r.length > 0 && this._applyLogUpdates(e, r);
        }, i);
    }
    _flushPendingLogUpdatesNow(e) {
        e.logFlushTimer !== void 0 && (clearTimeout(e.logFlushTimer), e.logFlushTimer = void 0), e.firstPendingLogAtMs = void 0;
        const t = e.pendingLogUpdates.splice(0, e.pendingLogUpdates.length);
        t.length > 0 && this._records.get(e.bcId) === e && this._applyLogUpdates(e, t);
    }
    _recordWaterfallDebugEntry(e, t) {
        if (this._environmentService.isBuilt) return;
        const n = Date.now();
        let i, r;
        if (t.waterfallUpdate) {
            const s = t.waterfallUpdate;
            i = `waterfall:${s.update?.case ?? "unknown"}`, r = s;
        } else if (t.event) {
            i = `pod:${t.event.payload?.case ?? "unknown"}`;
            const s = t.event.payload;
            r = s?.case === "spanStarted" || s?.case === "spanEnded" ? {
                creationTimestamp: String(t.event.creationTimestamp),
                ...s.value
            } : s?.case === "installCommand" ? {
                creationTimestamp: String(t.event.creationTimestamp),
                name: s.value.name,
                isSystem: s.value.isSystem
            } : {
                creationTimestamp: String(t.event.creationTimestamp)
            };
        } else return;
        e.waterfallDebugLog.push({
            arrivedAtMs: n,
            eventId: t.eventId,
            kind: i,
            detail: r
        }), e.waterfallDebugLog.length > aEo && e.waterfallDebugLog.splice(0, e.waterfallDebugLog.length - aEo);
    }
    _applyLogUpdates(e, t) {
        const n = e.reactive.value;
        let i = n.startupLoadingState, r = n.waterfallState;
        for (const o of t)if (o.event) {
            this._recordWaterfallDebugEntry(e, o.event);
            const a = o.event.eventId;
            (a === void 0 || !e.seenEventIds.has(a)) && (a !== void 0 && e.seenEventIds.add(a), a !== void 0 && a.startsWith("docker-build:") ? e.lastDockerBuildEventId = a : e.lastNonDockerBuildEventId = a), o.event.event && (i = Bn_(i, o.event.event, o.event.eventId));
            const c = o.event.waterfallUpdate;
            c && (r = yAh(r, c));
        }
        const s = Un_(i);
        e.reactive.set({
            bcId: n.bcId,
            startupLoadingState: i,
            waterfallState: r,
            isSimulatingWaterfall: n.isSimulatingWaterfall,
            currentSetupPhase: s !== void 0 ? Gn_(s) : void 0
        });
    }
    async _sleep(e, t) {
        await new Promise((n)=>{
            const i = setTimeout(()=>{
                t.removeEventListener("abort", r), n();
            }, e), r = ()=>{
                clearTimeout(i), t.removeEventListener("abort", r), n();
            };
            t.addEventListener("abort", r, {
                once: !0
            });
        });
    }
    dispose() {
        const e = [];
        for (const t of this._records.values())this._clearSimulationTimers(t), e.push(t.disposeTimer, t.detachTimer);
        try {
            Pk(...e);
        } finally{
            for (const t of this._records.values())this._detach(t);
            this._records.clear(), super.dispose();
        }
    }
}, c8.RECORD_DISPOSE_DELAY_MS = 240 * 1e3, c8.DETACH_DELAY_MS = 100, c8.REATTACH_DELAY_MS = 1e3, c8.MISSING_COMPOSER_MAX_RETRY_DELAY_MS = 15e3, c8.SIMULATION_RESTORE_DELAY_MS = 3e4, c8.LOG_FLUSH_QUIET_MS = 150, c8.LOG_FLUSH_MAX_WAIT_MS = 400, c8 = ie([
    C(0, jp),
    C(1, Yi)
], c8), mn(WJi, c8, 1, 1), aEo = 4e3, WAh = class extends z3e {
    constructor(e, t, n){
        super(), this.ensureRecord = e, this.attach = t, this.releaseRecord = n;
    }
    createReferencedObject(e) {
        const t = this.ensureRecord(e);
        return this.attach(t), t;
    }
    destroyReferencedObject(e, t) {
        this.releaseRecord(e, t);
    }
};

}
