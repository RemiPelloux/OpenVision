import { jTe, nit } from "./agentProcessClassification.js";
import { $Te, VTe, dE } from "./cursorProclist.js";
import { Fr, ii } from "./environment.js";
import { N, se } from "./event.js";
import { Jl, Qa } from "./hash.js";
import { B } from "./ipc.js";
import { Z, rd, te } from "./log.js";
import { JTe, dit } from "./nettopNetworkBandwidthSource.js";
import { cit, qTe } from "./networkBandwidthSource.js";
import { gn, ie } from "./pfs.js";
import { ku } from "./processMainService.js";
import { HTe, b9, oit } from "./processTreeSanitizer.js";
import { OD } from "./ps.js";
import { Ae, Ft } from "./resources.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Wn, vt } from "./uuid.js";
import { readFileSync as QTe } from "fs";
import { execFile as XTe } from "child_process";
import { cpus as ZTe } from "os";
import { freemem as mit } from "os";
import { totalmem as pit } from "os";
import { promises as uE } from "fs";
import { createRequire as uit } from "node:module";
async function $4e(e) {
    const n = new TextEncoder().encode(e), r = await crypto.subtle.digest("SHA-256", n);
    return Jl(r);
}
function Yst(e) {
    const t = e.max ?? VTe, n = [
        ...e.existing,
        ...e.incoming
    ];
    return n.length > t ? n.slice(n.length - t) : n;
}
function Jst(e, t) {
    return e.pressureLevel !== void 0 ? e.pressureLevel >= 2 : e.availPct < t.lowMemoryAvailablePct || e.availGb < t.lowMemoryAvailableAbsGb;
}
function Xst(e, t) {
    return e >= t.cpuHighPct;
}
function Qst(e) {
    const t = /^cpu\s+(.+)$/m.exec(e)?.[1].trim().split(/\s+/).map(Number);
    if (!t || t.length < 6 || t.some((o)=>!Number.isFinite(o))) return;
    const [n, r, s, i, , a] = t;
    return {
        idle: i,
        total: n + r + s + i + a
    };
}
function BTe(e, t) {
    return t <= 0 ? 1 : Math.max(1, Math.ceil(e / t));
}
function Zst(e, t, n) {
    const r = t ? e.consecutiveLowSamples + 1 : 0, s = t ? 0 : e.consecutiveHealthySamples + 1;
    if (e.episodeActive) {
        const a = s < n;
        return {
            state: {
                episodeActive: a,
                consecutiveLowSamples: r,
                consecutiveHealthySamples: s
            },
            emitReport: a,
            isEpisodeStart: !1
        };
    }
    const i = r >= n;
    return {
        state: {
            episodeActive: i,
            consecutiveLowSamples: r,
            consecutiveHealthySamples: s
        },
        emitReport: i,
        isEpisodeStart: i
    };
}
function eit(e) {
    return e.name.startsWith("extensionHost") && !e.processTitle.includes("(user)");
}
function tit(e, t) {
    const n = new Map;
    for (const i of e){
        let a = n.get(i.ppid);
        a || (a = [], n.set(i.ppid, a)), a.push(i);
    }
    const r = new Map, s = [];
    for (const i of t)s.push(...n.get(i) ?? []);
    for(; s.length > 0;){
        const i = s.pop();
        if (r.has(i.pid) || jTe.test(i.name)) continue;
        r.set(i.pid, i);
        const a = n.get(i.pid);
        a && s.push(...a);
    }
    return r;
}
function rit(e) {
    if (e.includes("Cursor Helper") || e.includes("Cursor Dev Helper")) return e.slice(0, b9);
    const n = iit(e).split(/[\\/]/).filter((s)=>s.length > 0);
    return (n.length > 0 ? n[n.length - 1] : "").slice(0, b9);
}
function sit(e) {
    return e.includes("Cursor Helper") || e.includes("Cursor Dev Helper") ? e : e.split(" ", 1)[0] ?? "";
}
function iit(e) {
    const t = e.trim();
    if (t.length === 0) return "";
    if (t.startsWith('"')) {
        const r = t.indexOf('"', 1);
        if (r > 0) return t.slice(1, r);
    }
    if (/^[a-zA-Z]:[\\/]/.test(t) || t.startsWith("\\\\")) {
        const r = /^.*?\.(?:exe|com|bat|cmd)(?=$|\s)/i.exec(t);
        if (r) return r[0];
    }
    return t.split(/\s+/, 1)[0] ?? "";
}
function ait(e, t = HTe) {
    const n = new Set;
    let r = 0, s = 0, i = 0, a = !1;
    const o = (d)=>{
        n.add(d.pid), r++;
        const u = Number.isFinite(d.load) ? d.load : 0;
        s += u, u > i && (i = u);
        const m = {
            pid: d.pid,
            ppid: d.ppid,
            name: rit(d.name),
            cpuPct: u,
            mem: Number.isFinite(d.mem) ? d.mem : 0
        };
        if (d.children && d.children.length > 0) {
            const f = [];
            for (const v of d.children)if (!n.has(v.pid)) {
                if (r >= t) {
                    a = !0;
                    break;
                }
                f.push(o(v));
            }
            f.length > 0 && (m.children = f);
        }
        return m;
    };
    return {
        root: o(e),
        totalCpuPct: s,
        maxProcessCpuPct: i,
        truncated: a
    };
}
var eke, R9, tke, nke, pl;
export { $4e, BTe, Jst, Qst, R9, Xst, Yst, Zst, ait, eit, eke, iit, nke, pl, rit, sit, tit, tke };
var __wakaru_hit_initialized = false;
export function hit() {
if (__wakaru_hit_initialized) return;
__wakaru_hit_initialized = true;
"use strict";
h(), Wn(), te(), Fr(), ye(), Ft(), gn(), OD(), se(), $Te(), nit(), oit(), Qa(), cit(), dit(), eke = uit(import.meta.url), R9 = 1, tke = 300, nke = 50, pl = class {
    constructor(e, t, n){
        this.logService = e, this.loggerService = t, this.environmentService = n, this.isScanning = !1, this.agentProcessObservedSamples = new Map, this.latestAgentProcessCandidates = new Map, this.episodeState = dE, this.episodeStartPending = !1, this._onAgentMemoryPressureReport = new N, this.onAgentMemoryPressureReport = this._onAgentMemoryPressureReport.event, this.processTrackers = new Map, this.sampleSeq = 0, this.networkSource = new qTe, this.liveNetworkRatesKbPerSec = new Map, this.liveNetworkReadInFlight = !1, this.lastLiveNetworkReadMs = 0, this.samplePeakTotalMemMb = -1, this.samplePeakTotalCpuUtilPct = -1, this.BUCKET_MS = 14400 * 1e3, this.MAX_BUCKETS = 6, this.pendingUploadChain = Promise.resolve(), this.sessionId = vt(), this.loadNativeModule(), process.platform === "darwin" && (this.networkSource = new JTe(this.logService)), this.monitorDir = Ae(x.file(this.environmentService.userDataPath), "process-monitor");
    }
    setUtilityProcessInfoProvider(e) {
        this.utilityProcessInfoProvider = e;
    }
    computeBucketStartMs(e) {
        return Math.floor(e / this.BUCKET_MS) * this.BUCKET_MS;
    }
    getShardPath(e) {
        return Ae(this.monitorDir, `${e}.log`);
    }
    async ensureMonitorDir() {
        try {
            await uE.mkdir(this.monitorDir.fsPath, {
                recursive: !0
            });
        } catch (e) {
            this.logService.warn("[CursorProclistService] Failed to ensure monitor dir:", e);
        }
    }
    async listShardFiles() {
        try {
            await this.ensureMonitorDir();
            const e = await ie.readdir(this.monitorDir.fsPath), t = [];
            for (const n of e){
                if (!n.endsWith(".log")) continue;
                const r = n.slice(0, -4), s = Number(r);
                Number.isFinite(s) && t.push(s);
            }
            return t.sort((n, r)=>n - r), t;
        } catch (e) {
            return this.logService.warn("[CursorProclistService] Failed to list shard files:", e), [];
        }
    }
    async pruneOldShards() {
        try {
            const e = await this.listShardFiles();
            if (e.length <= this.MAX_BUCKETS) return;
            const t = e.slice(0, e.length - this.MAX_BUCKETS);
            for (const n of t){
                const r = this.getShardPath(n);
                try {
                    await ie.rm(r.fsPath);
                } catch  {}
            }
        } catch (e) {
            this.logService.warn("[CursorProclistService] Failed to prune old shards:", e);
        }
    }
    async ensureLoggerForNow(e) {
        const t = this.computeBucketStartMs(e);
        if (this.currentLogger && this.currentBucketStartMs === t) return;
        if (await this.ensureMonitorDir(), await this.pruneOldShards(), this.currentLoggerResource) {
            try {
                this.loggerService.deregisterLogger(this.currentLoggerResource);
            } catch  {}
            this.currentLogger = void 0, this.currentLoggerResource = void 0;
        }
        const n = this.getShardPath(t);
        this.currentLogger = this.loggerService.createLogger(n, {
            logLevel: "always",
            donotRotate: !0,
            donotUseFormatters: !0,
            hidden: !0,
            name: "process-monitor"
        }), this.currentLoggerResource = n, this.currentBucketStartMs = t;
    }
    async appendSampleToFile(e) {
        try {
            if (await this.ensureLoggerForNow(Date.now()), !this.currentLogger) return;
            const t = await Promise.all(e.rows.map(async (r)=>({
                    pid: r.pid,
                    ppid: r.ppid,
                    processName: sit(r.name),
                    processNameHash: await $4e(r.name),
                    extensionId: r.extensionId ?? "",
                    ownerAgentId: r.ownerAgentId ?? "",
                    requestId: r.requestId ?? "",
                    rendererRole: r.rendererRole,
                    argv: r.argv,
                    sampleCpuTimeMs: r.cpuTimeMsSample,
                    sampleAvgMemMb: r.sampleAvgMemMb,
                    samplePeakMemMb: r.samplePeakMemMb,
                    sessionPeakMemMb: r.sessionPeakMemMb,
                    memoryDuringSamplePeakMb: r.memoryDuringPeakMb,
                    cpuDuringSamplePeakPct: r.cpuDuringPeakPct,
                    networkRxBytes: r.networkRxBytes,
                    networkTxBytes: r.networkTxBytes
                }))), n = {
                sampleStart: e.sample_start,
                sampleEnd: e.sample_end,
                numSubsamples: e.num_subsamples,
                networkWindowMs: e.networkWindowMs,
                sessionId: e.session_id,
                rows: t
            };
            e.origin && (n.origin = e.origin), e.remoteOs && (n.remoteOs = e.remoteOs), e.remoteAuthority && (n.remoteAuthority = e.remoteAuthority), this.currentLogger.info(JSON.stringify(n) + `
`);
        } catch (t) {
            this.logService.warn("[CursorProclistService] Failed to append sample to shard:", t);
        }
    }
    async readProcessMonitorData() {
        try {
            await this.ensureMonitorDir();
            const e = await this.listShardFiles();
            if (e.length === 0) return "";
            const t = e.slice(-this.MAX_BUCKETS), n = [];
            for (const r of t){
                const s = this.getShardPath(r);
                try {
                    const i = await uE.readFile(s.fsPath, {
                        encoding: "utf8"
                    });
                    i && i.length > 0 && n.push(i);
                } catch  {
                    this.logService.trace("[CursorProclistService] Skipping unreadable shard:", s.fsPath);
                }
            }
            return n.join("");
        } catch (e) {
            return this.logService.warn("[CursorProclistService] Failed to read process monitor data:", e), "";
        }
    }
    resetSampleAggregates() {
        for (const e of this.processTrackers.values())e.cpuLastMs !== void 0 && (e.cpuBaselineMs = e.cpuLastMs), e.memSumMb = 0, e.memCount = 0, e.memPeakMb = 0, e.memoryAtSamplePeakMb = 0, e.cpuUtilAtSamplePeakPct = 0;
        this.samplePeakTotalMemMb = -1, this.samplePeakTotalCpuUtilPct = -1;
    }
    loadNativeModule() {
        if (process.platform !== "darwin" && process.platform !== "linux" && process.platform !== "win32") {
            this.logService.trace("[CursorProclistService] Native module disabled: unsupported platform"), this.nativeModule = void 0;
            return;
        }
        try {
            this.nativeModule = eke("cursor-proclist"), this.logService.debug("[CursorProclistService] Native module loaded successfully");
        } catch (e) {
            this.logService.warn("[CursorProclistService] Native module unavailable; disabling proclist metrics:", e), this.nativeModule = void 0;
        }
    }
    stopTimer() {
        this.updateTimer && (clearInterval(this.updateTimer), this.updateTimer = void 0), this.cleanupLogger(), this.processTrackers.clear(), this.agentProcessObservedSamples.clear(), this.latestAgentProcessCandidates = new Map, this.episodeState = dE, this.episodeStartPending = !1, this.previousCpuTimes = void 0, this.lastSampleStartMs = void 0, this.samplePeakTotalMemMb = -1, this.samplePeakTotalCpuUtilPct = -1, this.lastNetworkCumulative = void 0, this.lastNetworkSampleMs = void 0;
    }
    cleanupLogger() {
        if (this.currentLogger) try {
            this.currentLogger.flush();
        } catch (e) {
            this.logService.warn("[CursorProclistService] Failed to flush logger on cleanup:", e);
        }
        if (this.currentLoggerResource) try {
            this.loggerService.deregisterLogger(this.currentLoggerResource);
        } catch  {}
        this.currentLogger = void 0, this.currentLoggerResource = void 0, this.currentBucketStartMs = void 0;
    }
    applyConfig(e) {
        if (!this.nativeModule || process.platform !== "darwin" && process.platform !== "linux" && process.platform !== "win32") {
            this.logService.trace("[CursorProclistService] Config ignored: feature unavailable"), this.currentConfig = e;
            return;
        }
        if (this.currentConfig = e, !e.localEnabled) {
            this.logService.info("[CursorProclistService] Config disabled local collection"), this.stopTimer();
            return;
        }
        const t = Math.max(R9, Math.min(tke, e.subsamplePollingRateSec)), n = e.agentMemoryPressureMonitor?.monitorEnabled === !0;
        this.logService.info(`[CursorProclistService] Config enabled feature (subsample every ${t}s; memoryPressureMonitorEnabled=${n})`), this.stopTimer(), this.subsampleRateSec = t, this.startAsyncPolling(t * 1e3);
    }
    startAsyncPolling(e) {
        this.scanTick(), this.updateTimer = setInterval(()=>void this.scanTick(), e);
    }
    async scanTick() {
        const e = this.nativeModule;
        if (!(this.isScanning || !e)) {
            this.isScanning = !0;
            try {
                const t = await e.cursor_proclist_scan_async();
                this.recordSubsample(t);
                const n = this.updateAgentProcessCandidates(t);
                this.evaluateMemoryPressure(t, n);
            } catch (t) {
                this.logService.error("[CursorProclistService] Async scan failed:", t);
            } finally{
                this.isScanning = !1;
            }
        }
    }
    readSystemMemory() {
        let e = pit(), t = mit(), n;
        try {
            const s = this.nativeModule?.cursor_proclist_system_memory?.();
            if (s && s.totalBytes > 0) e = s.totalBytes, t = s.availableBytes, n = s.pressureLevel;
            else if (process.platform === "linux") {
                const i = /MemAvailable:\s+(\d+) kB/.exec(QTe("/proc/meminfo", "utf8"));
                i && (t = parseInt(i[1], 10) * 1024);
            }
        } catch (s) {
            this.logService.trace("[CursorProclistService] System memory read failed:", s);
        }
        const r = 1024 * 1024 * 1024;
        return {
            availPct: e > 0 ? t / e * 100 : 0,
            availGb: t / r,
            totalGb: e / r,
            pressureLevel: n
        };
    }
    readSystemCpu() {
        const e = this.readCpuTimes();
        if (!e) return 0;
        const t = this.previousCpuTimes;
        if (this.previousCpuTimes = e, !t) return 0;
        const n = e.idle - t.idle, r = e.total - t.total;
        return r <= 0 ? 0 : Math.max(0, Math.min(100, (1 - n / r) * 100));
    }
    readCpuTimes() {
        if (process.platform === "linux") try {
            return Qst(QTe("/proc/stat", "utf8"));
        } catch (n) {
            this.logService.trace("[CursorProclistService] /proc/stat read failed:", n);
            return;
        }
        let e = 0, t = 0;
        for (const n of ZTe()){
            const r = n.times;
            e += r.idle, t += r.user + r.nice + r.sys + r.idle + r.irq;
        }
        return {
            idle: e,
            total: t
        };
    }
    evaluateMemoryPressure(e, t) {
        const n = this.currentConfig?.agentMemoryPressureMonitor;
        if (this.currentConfig?.localEnabled !== !0 || n?.monitorEnabled !== !0) {
            this.episodeState = dE, this.episodeStartPending = !1, this.previousCpuTimes = void 0;
            return;
        }
        try {
            const r = this.readSystemMemory(), s = Jst(r, n), i = this.readSystemCpu(), a = Xst(i, n), o = this.subsampleRateSec ?? R9, l = BTe(n.cpuHighSustainedSec, o), d = Zst(this.episodeState, a, l);
            if (this.episodeState = d.state, d.isEpisodeStart ? this.episodeStartPending = !0 : d.state.episodeActive || (this.episodeStartPending = !1), this.logService.trace(`[CursorProclistService] System sample: cpu=${i.toFixed(1)}% high=${a} mem=${r.availPct.toFixed(1)}% memLow=${s} episodeActive=${d.state.episodeActive} cpuStreak=${d.state.consecutiveLowSamples}/${l}`), !d.emitReport) return;
            const u = BTe(n.minAgentProcessAgeSec, o), m = new Map, f = new Map, v = new Map;
            for (const k of e){
                m.set(k[0], k[5]), v.set(k[0], k[7] || "");
                const y = k[6];
                f.set(k[0], Array.isArray(y) ? y.slice(1).join(" ") : "");
            }
            const T = [];
            for (const [k, y] of t){
                const b = this.agentProcessObservedSamples.get(k) ?? 0;
                if (b < u) continue;
                const I = m.get(k) ?? 0, G = this.processTrackers.get(k)?.latestCpuUtilPct ?? 0;
                G < n.minReportedCpuPct || T.push({
                    pid: k,
                    name: y.name,
                    memoryMB: I,
                    cpuUtilPct: G,
                    observedSamples: b,
                    args: f.get(k) ?? "",
                    ownerAgentId: v.get(k) ?? ""
                });
            }
            T.sort((k, y)=>y.cpuUtilPct - k.cpuUtilPct);
            const S = this.episodeStartPending && T.length > 0;
            S && (this.episodeStartPending = !1), this.logService.trace(`[CursorProclistService] Agent memory pressure report (episodeStart=${S}): ${T.length} processes`), this._onAgentMemoryPressureReport.fire({
                memory: r,
                processes: T,
                isEpisodeStart: S
            });
        } catch (r) {
            this.logService.warn("[CursorProclistService] Memory sampling failed:", r);
        }
    }
    updateAgentProcessCandidates(e) {
        if (this.currentConfig?.localEnabled !== !0 || this.currentConfig.agentMemoryPressureMonitor?.monitorEnabled !== !0) return this.agentProcessObservedSamples.clear(), this.latestAgentProcessCandidates = new Map, new Map;
        try {
            const t = new Set;
            try {
                for (const s of this.utilityProcessInfoProvider?.() ?? [])eit(s) && t.add(s.pid);
            } catch (s) {
                this.logService.trace("[CursorProclistService] Utility process lookup failed:", s);
            }
            const n = e.map((s)=>({
                    pid: s[0],
                    ppid: s[1],
                    name: s[2]
                })), r = tit(n, t);
            for (const s of Array.from(this.agentProcessObservedSamples.keys()))r.has(s) || this.agentProcessObservedSamples.delete(s);
            for (const s of r.keys())this.agentProcessObservedSamples.set(s, (this.agentProcessObservedSamples.get(s) ?? 0) + 1);
            return this.latestAgentProcessCandidates = r, r;
        } catch (t) {
            return this.logService.warn("[CursorProclistService] Agent process classification failed:", t), new Map;
        }
    }
    signalProcess(e, t) {
        try {
            return process.kill(e, t), "signaled";
        } catch (n) {
            return n.code === "ESRCH" ? "exited" : "failed";
        }
    }
    killAgentProcessTree(e, t) {
        const n = this.latestAgentProcessCandidates.get(e);
        if (!n || n.name !== t) {
            const u = this.signalProcess(e, 0) === "exited";
            return this.logService.info(`[CursorProclistService] Kill refused for pid ${e}: not a current agent-process candidate (alreadyExited=${u})`), u;
        }
        const r = new Map;
        for (const u of this.latestAgentProcessCandidates.values()){
            let m = r.get(u.ppid);
            m || (m = [], r.set(u.ppid, m)), m.push(u.pid);
        }
        const s = [], i = [
            e
        ];
        for(; i.length > 0;){
            const u = i.pop();
            s.push(u), i.push(...r.get(u) ?? []);
        }
        let a = 0, o = 0, l = 0, d = !1;
        for (const u of s){
            const m = this.signalProcess(u, "SIGTERM");
            m === "signaled" ? a++ : m === "exited" ? o++ : (l++, u === e && (d = !0));
        }
        return this.logService.info(`[CursorProclistService] Killed agent process tree rooted at ${e} (signaled=${a} alreadyExited=${o} failed=${l} of ${s.length})`), !d;
    }
    async getProcessTreeSnapshot() {
        const e = this.nativeModule;
        if (!e || this.isScanning) return [];
        this.isScanning = !0;
        try {
            const n = (await e.cursor_proclist_scan_async()).map((r)=>{
                const s = r[6];
                return {
                    pid: r[0],
                    name: r[2],
                    memoryMB: r[5],
                    cpuUtilPct: this.processTrackers.get(r[0])?.latestCpuUtilPct ?? 0,
                    observedSamples: 0,
                    args: Array.isArray(s) ? s.slice(1).join(" ") : "",
                    ownerAgentId: r[7] || ""
                };
            });
            return n.sort((r, s)=>s.memoryMB - r.memoryMB), n.slice(0, nke);
        } catch (t) {
            return this.logService.warn("[CursorProclistService] Process tree snapshot failed:", t), [];
        } finally{
            this.isScanning = !1;
        }
    }
    recordSubsample(e) {
        try {
            const t = Date.now();
            let n = 0, r = 0;
            const s = [];
            for (const i of e){
                const [a, o, l, d, u, m, f, v, T] = i, S = d || "", k = v || "", y = T || "", b = Array.isArray(f) ? f : [];
                let I = this.processTrackers.get(a);
                I || (I = {
                    pid: a,
                    ppid: o,
                    name: l,
                    extensionId: S,
                    ownerAgentId: k,
                    requestId: y,
                    argv: b,
                    cpuBaselineMs: void 0,
                    cpuLastMs: void 0,
                    memSumMb: 0,
                    memCount: 0,
                    memPeakMb: 0,
                    sessionPeakMemMB: m,
                    lastSeenMs: t,
                    lastSampleTimeMs: void 0,
                    lastCpuMsForUtil: void 0,
                    latestMemMb: m,
                    latestCpuUtilPct: 0,
                    memoryAtSamplePeakMb: 0,
                    cpuUtilAtSamplePeakPct: 0
                }, this.processTrackers.set(a, I)), I.ppid = o, I.name = l, I.extensionId = S, I.ownerAgentId = k, I.requestId = y, I.argv = b, I.lastSeenMs = t, I.latestMemMb = m, m > I.sessionPeakMemMB && (I.sessionPeakMemMB = m), I.cpuBaselineMs === void 0 && (I.cpuBaselineMs = u), I.cpuLastMs = u, I.memSumMb += m, I.memCount++, m > I.memPeakMb && (I.memPeakMb = m);
                let G = 0;
                if (I.lastSampleTimeMs !== void 0 && I.lastCpuMsForUtil !== void 0) {
                    const U = t - I.lastSampleTimeMs;
                    U > 0 && (G = Math.max(0, u - I.lastCpuMsForUtil) / U * 100);
                }
                I.latestCpuUtilPct = G, I.lastSampleTimeMs = t, I.lastCpuMsForUtil = u, n += m, r += G, s.push(I);
            }
            if (n > this.samplePeakTotalMemMb) {
                this.samplePeakTotalMemMb = n;
                for (const i of this.processTrackers.values())i.memoryAtSamplePeakMb = 0;
                for (const i of s)i.memoryAtSamplePeakMb = i.latestMemMb;
            }
            if (r > this.samplePeakTotalCpuUtilPct) {
                this.samplePeakTotalCpuUtilPct = r;
                for (const i of this.processTrackers.values())i.cpuUtilAtSamplePeakPct = 0;
                for (const i of s)i.cpuUtilAtSamplePeakPct = i.latestCpuUtilPct;
            }
        } catch (t) {
            this.logService.error("[CursorProclistService] Error collecting subsample:", t);
        }
    }
    async createSample() {
        if (!this.nativeModule || !this.currentConfig?.localEnabled) return null;
        try {
            const e = Date.now();
            if (this.lastSampleStartMs === void 0) {
                let a = e;
                for (const o of this.processTrackers.values())o.lastSeenMs < a && (a = o.lastSeenMs);
                this.lastSampleStartMs = this.processTrackers.size > 0 ? a : e;
            }
            const t = [];
            let n = 0;
            const r = this.lastSampleStartMs;
            for (const a of this.processTrackers.values()){
                if (a.memCount === 0 || a.cpuBaselineMs === void 0 || a.cpuLastMs === void 0) continue;
                const o = Math.max(0, a.cpuLastMs - a.cpuBaselineMs), l = a.memSumMb / a.memCount, d = a.memPeakMb;
                t.push({
                    pid: a.pid,
                    ppid: a.ppid,
                    name: a.name,
                    extensionId: a.extensionId,
                    ownerAgentId: a.ownerAgentId,
                    requestId: a.requestId,
                    argv: a.argv,
                    cpuTimeMsSample: o,
                    sampleAvgMemMb: l,
                    samplePeakMemMb: d,
                    sessionPeakMemMb: a.sessionPeakMemMB,
                    memoryDuringPeakMb: a.memoryAtSamplePeakMb,
                    cpuDuringPeakPct: a.cpuUtilAtSamplePeakPct
                }), a.memCount > n && (n = a.memCount);
            }
            if (t.length === 0) return null;
            const s = await this.applyNetworkVolumes(t), i = {
                sample_start: this.lastSampleStartMs,
                sample_end: e,
                num_subsamples: n,
                window_seq: this.sampleSeq++,
                session_id: this.sessionId,
                rows: t,
                networkWindowMs: s
            };
            this.resetSampleAggregates(), this.lastSampleStartMs = e;
            for (const a of Array.from(this.processTrackers.keys())){
                const o = this.processTrackers.get(a);
                o && o.lastSeenMs < r && this.processTrackers.delete(a);
            }
            return this.logService.debug(`[CursorProclistService] Sample ${i.window_seq} created: ${t.length} processes, ${i.num_subsamples} subsamples`), i;
        } catch (e) {
            return this.logService.error("[CursorProclistService] Error creating Sample:", e), null;
        }
    }
    async applyNetworkVolumes(e) {
        if (!this.currentConfig?.networkDiagnosticsReportingEnabled) return;
        let t;
        try {
            t = await this.networkSource.sampleCumulativeBytes(e.map((a)=>a.pid));
        } catch (a) {
            this.logService.trace("[CursorProclistService] Network bandwidth read failed:", a);
            return;
        }
        const n = Date.now(), r = this.lastNetworkCumulative, s = this.lastNetworkSampleMs !== void 0 ? n - this.lastNetworkSampleMs : 0;
        if (t.size === 0 || (this.lastNetworkCumulative = t, this.lastNetworkSampleMs = n, r === void 0 || s <= 0)) return;
        const i = (a, o)=>Math.max(0, a - o);
        for (const a of e){
            const o = t.get(a.pid), l = r.get(a.pid);
            o === void 0 || l === void 0 || (a.networkRxBytes = i(o.rxBytes, l.rxBytes), a.networkTxBytes = i(o.txBytes, l.txBytes));
        }
        return s;
    }
    getLiveNetworkBytesPerSec() {
        return this.maybeRefreshLiveNetwork(), Array.from(this.liveNetworkRatesKbPerSec.entries());
    }
    maybeRefreshLiveNetwork() {
        if (!this.currentConfig?.networkDiagnosticsReportingEnabled) {
            this.liveNetworkRatesKbPerSec.size > 0 && (this.liveNetworkRatesKbPerSec = new Map), this.liveNetworkCumulative = void 0, this.liveNetworkSampleMs = void 0;
            return;
        }
        const e = Date.now();
        this.liveNetworkReadInFlight || e - this.lastLiveNetworkReadMs < pl.LIVE_NETWORK_MIN_INTERVAL_MS || (this.liveNetworkReadInFlight = !0, this.lastLiveNetworkReadMs = e, this.networkSource.sampleCumulativeBytes([]).then((t)=>{
            const n = Date.now(), r = this.liveNetworkCumulative, s = this.liveNetworkSampleMs !== void 0 ? n - this.liveNetworkSampleMs : 0;
            if (t.size === 0 || (this.liveNetworkCumulative = t, this.liveNetworkSampleMs = n, r === void 0 || s <= 0)) return;
            const i = s / 1e3, a = new Map;
            for (const [o, l] of t){
                const d = r.get(o);
                if (d === void 0) continue;
                const u = Math.max(0, l.rxBytes - d.rxBytes) / i, m = Math.max(0, l.txBytes - d.txBytes) / i;
                a.set(o, (u + m) / 1024);
            }
            this.liveNetworkRatesKbPerSec = a;
        }).catch((t)=>this.logService.trace("[CursorProclistService] Live network read failed:", t)).finally(()=>{
            this.liveNetworkReadInFlight = !1;
        }));
    }
    async writeSample(e) {
        await this.appendSampleToFile(e);
    }
    getPendingUploadsPath() {
        return Ae(this.monitorDir, "pending-uploads.json").fsPath;
    }
    async readPendingUploadSamples() {
        try {
            const e = await uE.readFile(this.getPendingUploadsPath(), {
                encoding: "utf8"
            }), t = JSON.parse(e);
            return Array.isArray(t) ? t : [];
        } catch  {
            return [];
        }
    }
    async writePendingUploadSamples(e) {
        await this.ensureMonitorDir(), await uE.writeFile(this.getPendingUploadsPath(), JSON.stringify(e), {
            encoding: "utf8"
        });
    }
    enqueuePendingUploadOp(e) {
        const t = this.pendingUploadChain.then(e, e);
        return this.pendingUploadChain = t.catch(()=>{}), t;
    }
    stashPendingUploadSamples(e) {
        return e.length === 0 ? Promise.resolve() : this.enqueuePendingUploadOp(async ()=>{
            try {
                const t = await this.readPendingUploadSamples(), n = Yst({
                    existing: t,
                    incoming: e
                });
                await this.writePendingUploadSamples(n), this.logService.debug(`[CursorProclistService] Stashed ${e.length} pending upload sample(s) (${n.length} total)`);
            } catch (t) {
                this.logService.warn("[CursorProclistService] Failed to stash pending upload samples:", t);
            }
        });
    }
    takePendingUploadSamples() {
        return this.enqueuePendingUploadOp(async ()=>{
            try {
                const e = await this.readPendingUploadSamples();
                return e.length === 0 || (await this.writePendingUploadSamples([]), this.logService.debug(`[CursorProclistService] Took ${e.length} pending upload sample(s) for replay`)), e;
            } catch (e) {
                return this.logService.warn("[CursorProclistService] Failed to take pending upload samples:", e), [];
            }
        });
    }
    async getCpuProcessTreeSnapshot() {
        try {
            const e = await ku(process.pid), { root: t, totalCpuPct: n, maxProcessCpuPct: r, truncated: s } = ait(e);
            return {
                timestampMs: Date.now(),
                cpuCount: ZTe().length || 1,
                totalCpuPct: n,
                maxProcessCpuPct: r,
                rootProcess: t,
                truncated: s
            };
        } catch (e) {
            return this.logService.warn("[CursorProclistService] Failed to take process tree snapshot:", e), null;
        }
    }
    async getSystemProcessList(e) {
        const t = Math.max(1, Math.min(500, Math.floor(e) || 1));
        try {
            const n = process.platform === "win32" ? await this.listSystemProcessesWindows() : await this.listSystemProcessesPosix();
            return n.sort((r, s)=>s.cpuPct - r.cpuPct), n.slice(0, t);
        } catch (n) {
            return this.logService.warn("[CursorProclistService] Failed to list system processes:", n), [];
        }
    }
    listSystemProcessesPosix() {
        const e = process.platform === "darwin" ? [
            "-A",
            "-c",
            "-o",
            "pid=,ppid=,pcpu=,rss=,comm="
        ] : [
            "-A",
            "-o",
            "pid=,ppid=,pcpu=,rss=,comm="
        ];
        return new Promise((t, n)=>{
            XTe("ps", e, {
                maxBuffer: 10 * 1024 * 1024,
                timeout: 1e4,
                env: {
                    ...process.env,
                    LC_ALL: "en_US.UTF-8",
                    LC_NUMERIC: "en_US.UTF-8"
                }
            }, (r, s, i)=>{
                if (r) {
                    n(r instanceof Error ? r : new Error(String(i)));
                    return;
                }
                const a = [], o = /^\s*(\d+)\s+(\d+)\s+([\d.]+)\s+(\d+)\s+(.+)$/;
                for (const l of s.split(`
`)){
                    const d = o.exec(l);
                    if (!d) continue;
                    const u = d[5].trim(), m = u.split("/").pop() || u;
                    a.push({
                        pid: parseInt(d[1], 10),
                        ppid: parseInt(d[2], 10),
                        name: m,
                        cpuPct: parseFloat(d[3]),
                        memMB: parseInt(d[4], 10) / 1024
                    });
                }
                t(a);
            });
        });
    }
    listSystemProcessesWindows() {
        const e = "Get-CimInstance Win32_PerfFormattedData_PerfProc_Process | Where-Object { $_.Name -ne '_Total' -and $_.Name -ne 'Idle' } | Select-Object Name,IDProcess,PercentProcessorTime,WorkingSetPrivate | ConvertTo-Json -Compress";
        return new Promise((t, n)=>{
            XTe("powershell.exe", [
                "-NoProfile",
                "-NonInteractive",
                "-Command",
                e
            ], {
                maxBuffer: 10 * 1024 * 1024,
                timeout: 3e4,
                windowsHide: !0
            }, (r, s)=>{
                if (r) {
                    n(r);
                    return;
                }
                try {
                    const i = s.trim(), a = i.length > 0 ? JSON.parse(i) : [], o = Array.isArray(a) ? a : [
                        a
                    ];
                    t(o.map((l)=>{
                        const d = Number(l?.IDProcess), u = Number(l?.PercentProcessorTime), m = Number(l?.WorkingSetPrivate);
                        return {
                            pid: d,
                            ppid: 0,
                            name: String(l?.Name ?? ""),
                            cpuPct: Number.isFinite(u) ? u : 0,
                            memMB: Number.isFinite(m) ? m / (1024 * 1024) : 0
                        };
                    }).filter((l)=>Number.isFinite(l.pid) && l.pid > 0));
                } catch (i) {
                    n(i);
                }
            });
        });
    }
}, pl.LIVE_NETWORK_MIN_INTERVAL_MS = 2e3, pl = B([
    w(0, Z),
    w(1, rd),
    w(2, ii)
], pl);

}
