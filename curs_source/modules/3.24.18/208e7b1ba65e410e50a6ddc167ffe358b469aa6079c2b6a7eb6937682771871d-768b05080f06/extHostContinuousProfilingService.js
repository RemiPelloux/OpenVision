import { Md } from "./abstractUpdateService.js";
import { Ie, Mt } from "./cancellation.js";
import { Sr } from "./configurationRegistry.js";
import { Wm } from "./fileService.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { lze, xme } from "./profilingModel.js";
import { fs, li } from "./request_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { vG } from "./updateService.win32.js";
import { WebSocket as dze } from "ws";
import { cpus as uze } from "os";
function Cm(e) {
    return !Sr(e);
}
function jUe(e, t) {
    const n = IR;
    IR = e;
    try {
        return t();
    } finally{
        IR = n;
    }
}
var IR;
async function Pd(e, t) {
    if (!Md(e)) throw new Error("Server returned " + e.res.statusCode);
    if (vG(e)) return null;
    const n = await Wm(e.stream), r = jUe(t ?? {
        source: "http"
    }, ()=>n.toString());
    try {
        return JSON.parse(r);
    } catch (s) {
        throw s.message += `:
` + r, s;
    }
}
var wo;
export { Cm, IR, Pd, jUe, wo };
var __wakaru_Fme_initialized = false;
export function Fme() {
if (__wakaru_Fme_initialized) return;
__wakaru_Fme_initialized = true;
"use strict";
h(), Mt(), Ze(), te(), lze(), fs(), wo = class {
    constructor(e, t, n, r){
        this.logService = e, this.requestService = t, this._targets = n, this._getExtensionIdFromPath = r, this._cpuCoreCount = uze().length, this._extHostConnections = new Map, this._nextRequestId = 1, this._pendingRequestsByExtHost = new Map, this._isProfiling = !1;
    }
    async start() {
        this._isProfiling || (this._extHostConnections.clear(), await Promise.all(this._targets.map(async ({ extensionHostId: e, webSocketPort: t })=>{
            const n = await this._discoverDebugUrl(t);
            if (Cm(n)) {
                const r = new dze(n);
                this._extHostConnections.set(e, {
                    webSocket: r,
                    profilerState: {
                        cpuProfilerRunning: !1,
                        heapProfilerRunning: !1
                    }
                }), this._registerSocketListeners(e);
            }
        })), this._isProfiling = !0);
    }
    async stop() {
        if (!this._isProfiling) return;
        const e = Array.from(this._extHostConnections.entries());
        await Promise.all(e.map(async ([t, { webSocket: n, profilerState: r }])=>{
            const [s, i] = await Promise.allSettled([
                this._stopCPUProfiler(t),
                this._stopHeapProfiler(t)
            ]);
            r.cpuProfilerRunning = !1, r.heapProfilerRunning = !1, s.status === "rejected" && this.logService.error(`[ExtHostContinuousProfilingService] Error stopping CPU profiler for ${n.url}: ${s.reason}`), i.status === "rejected" && this.logService.error(`[ExtHostContinuousProfilingService] Error stopping heap profiler for ${n.url}: ${i.reason}`);
        })), e.forEach(([t, { webSocket: n }])=>{
            n.close();
        }), this._isProfiling = !1;
    }
    async captureMetricsForAllHosts() {
        if (!this._isProfiling) throw new Error("Profiling is not enabled");
        const t = Array.from(this._extHostConnections.entries()).map(async ([s, { profilerState: i }])=>{
            const a = await this._captureHostMetrics(s, i);
            return {
                extensionHostId: s,
                metricsByExtension: a
            };
        }), n = await Promise.all(t), r = {};
        return n.forEach(({ extensionHostId: s, metricsByExtension: i })=>{
            r[s] = i;
        }), r;
    }
    getProfilerStatus() {
        const e = {};
        return this._extHostConnections.forEach((t, n)=>{
            e[n] = {
                ...t.profilerState
            };
        }), e;
    }
    async _registerSocketListeners(e) {
        const t = this._extHostConnections.get(e);
        if (!t) throw new Error(`Connection not found for extension host ${e}`);
        const { webSocket: n } = t;
        n.addEventListener("open", (r)=>{
            this._setUpProfilers(e).catch((s)=>{
                this.logService.error(`[ExtHostContinuousProfilingService] Failed to setup profilers for ${n.url}: ${s}`);
            });
        }), n.addEventListener("message", (r)=>{
            this._handleMessage(r);
        }), n.addEventListener("error", (r)=>{
            this.logService.error(`[ExtHostContinuousProfilingService] Error communicating with '${n.url}': ${r}`);
        }), n.addEventListener("close", (r)=>{
            this.logService.info(`[ExtHostContinuousProfilingService] WebSocket closed for ${n.url}`), this._extHostConnections.delete(e), this._cleanUpPendingRequests(e);
        });
    }
    async _captureHostMetrics(e, t) {
        let n = new Map, r = new Map, s = 0, i = 0;
        if (t.cpuProfilerRunning) {
            let o = null;
            try {
                o = await this._captureCPUProfile(e);
            } catch (l) {
                this.logService.error(`[ExtHostContinuousProfilingService] Failed to capture CPU profile for ${e}: ${l}. Marking CPU profiler as broken.`), t.cpuProfilerRunning = !1;
            }
            if (o) {
                const l = this._computeCPUTimes(o, e);
                n = l.timeByExtension, s = l.totalExtHostTime, i = l.cpuProfileDuration;
            }
        }
        if (t.heapProfilerRunning) {
            let o = null;
            try {
                o = await this._captureMemoryProfile(e);
            } catch (l) {
                this.logService.error(`[ExtHostContinuousProfilingService] Failed to capture memory profile for ${e}: ${l}. Marking memory profiler as broken.`), t.heapProfilerRunning = !1;
            }
            o && (r = await this._computeMemoryAllocations(o.head, e));
        }
        const a = new Set([
            ...n.keys(),
            ...r.keys()
        ]);
        return this._buildMetricsByExtension(Array.from(a), s, i, n, r);
    }
    async _buildMetricsByExtension(e, t, n, r, s) {
        return Object.fromEntries(e.map((i)=>{
            let a = {};
            const o = r.get(i);
            o && t > 0 && (a.pctExtHost = Math.round(o.totalTime / t * 1e4) / 100, n > 0 && (a.pctCPU = Math.round(o.totalTime / (n * this._cpuCoreCount) * 1e4) / 100), a.maxBlockingTime = o.maxBlockingTime);
            const l = s.get(i);
            return l && (a.memKB = l / 1024), [
                i,
                a
            ];
        }));
    }
    async _captureCPUProfile(e) {
        const t = await this._sendCommand(e, "Profiler.stop");
        return await this._sendCommand(e, "Profiler.start"), xme(t.profile);
    }
    async _captureMemoryProfile(e) {
        const t = await this._sendCommand(e, "HeapProfiler.stopSampling");
        return await this._sendCommand(e, "HeapProfiler.startSampling"), t.profile;
    }
    _computeCPUTimes(e, t) {
        const n = new Map;
        let r = null, s = 0, i = 0;
        for(let a = 0; a < e.samples.length; a++){
            const o = e.samples[a], l = e.timeDeltas[a + 1] || 0, d = this._findExtensionInCallStack(o, e.nodes, e.locations, t);
            n.has(d) || n.set(d, {
                totalTime: 0,
                maxBlockingTime: 0
            });
            const u = n.get(d);
            if (u.totalTime += l, i += l, r === d) s += l;
            else {
                if (r !== null) {
                    const m = n.get(r);
                    m.maxBlockingTime = Math.max(m.maxBlockingTime, s);
                }
                r = d, s = l;
            }
        }
        if (r !== null) {
            const a = n.get(r);
            a.maxBlockingTime = Math.max(a.maxBlockingTime, s);
        }
        return {
            totalExtHostTime: i,
            cpuProfileDuration: e.duration,
            timeByExtension: n
        };
    }
    async _computeMemoryAllocations(e, t) {
        const n = new Map, r = (s, i)=>{
            i || (i = this._getExtensionIdFromPath(s.callFrame.url, t)), i ? n.set(i, (n.get(i) || 0) + s.selfSize) : n.set("<ext-host-runtime>", (n.get("<ext-host-runtime>") || 0) + s.selfSize), s.children.forEach((a)=>r(a, i));
        };
        return r(e), n;
    }
    async _setUpProfilers(e) {
        const t = this._extHostConnections.get(e);
        if (!t) throw new Error(`Connection not found for extension host ${e}`);
        const [n, r] = await Promise.allSettled([
            this._setUpCPUProfiler(e),
            this._setUpHeapProfiler(e)
        ]), { webSocket: s, profilerState: i } = t;
        i.cpuProfilerRunning = n.status === "fulfilled", i.heapProfilerRunning = r.status === "fulfilled", n.status === "rejected" && this.logService.error(`[ExtHostContinuousProfilingService] CPU profiler setup failed for ${s.url}: ${n.reason}`), r.status === "rejected" && this.logService.error(`[ExtHostContinuousProfilingService] Heap profiler setup failed for ${s.url}: ${r.reason}`);
    }
    async _setUpCPUProfiler(e) {
        try {
            await this._sendCommand(e, "Profiler.enable");
        } catch (t) {
            throw new Error(`Failed to enable CPU profiler: ${t}`);
        }
        try {
            await this._sendCommand(e, "Profiler.start");
        } catch (t) {
            try {
                await this._sendCommand(e, "Profiler.disable");
            } catch (n) {
                this.logService.warn(`[ExtHostContinuousProfilingService] Failed to disable CPU profiler during cleanup: ${n}`);
            }
            throw new Error(`Failed to start CPU profiler: ${t}`);
        }
    }
    async _setUpHeapProfiler(e) {
        try {
            await this._sendCommand(e, "HeapProfiler.enable");
        } catch (t) {
            throw new Error(`Failed to enable heap profiler: ${t}`);
        }
        try {
            await this._sendCommand(e, "HeapProfiler.startSampling");
        } catch (t) {
            try {
                await this._sendCommand(e, "HeapProfiler.disable");
            } catch (n) {
                this.logService.warn(`[ExtHostContinuousProfilingService] Failed to disable heap profiler during cleanup: ${n}`);
            }
            throw new Error(`Failed to start heap profiler: ${t}`);
        }
    }
    async _stopCPUProfiler(e) {
        await this._sendCommand(e, "Profiler.stop"), await this._sendCommand(e, "Profiler.disable");
    }
    async _stopHeapProfiler(e) {
        await this._sendCommand(e, "HeapProfiler.stopSampling"), await this._sendCommand(e, "HeapProfiler.disable");
    }
    _cleanUpPendingRequests(e) {
        const t = this._pendingRequestsByExtHost.get(e);
        t && (t.forEach((n, r)=>{
            clearTimeout(n.timeout), n.reject(new Error("WebSocket connection closed"));
        }), this._pendingRequestsByExtHost.delete(e));
    }
    async _sendCommand(e, t, n) {
        return new Promise((r, s)=>{
            const i = this._extHostConnections.get(e);
            if (!i) return s(new Error("Connection not found for extension host"));
            const { webSocket: a } = i, o = this._getNextRequestId(), l = {
                id: o,
                method: t
            };
            n && (l.params = n);
            const d = setTimeout(()=>{
                const u = this._pendingRequestsByExtHost.get(e);
                u?.get(o) && (u?.delete(o), s(new Error(`Timeout waiting for response to ${t} (id: ${o})`)));
            }, wo.WEBSOCKET_TIMEOUT_MS);
            this._pendingRequestsByExtHost.has(e) || this._pendingRequestsByExtHost.set(e, new Map), this._pendingRequestsByExtHost.get(e).set(o, {
                resolve: r,
                reject: s,
                timeout: d
            });
            try {
                a.send(JSON.stringify(l));
            } catch (u) {
                this._pendingRequestsByExtHost.get(e)?.delete(o), clearTimeout(d), s(u);
            }
        });
    }
    _handleMessage(e) {
        try {
            const t = JSON.parse(e.data.toString());
            if (t.id !== void 0) {
                let n = !1;
                for (const [r, s] of this._pendingRequestsByExtHost.entries()){
                    const i = s.get(t.id);
                    if (i) {
                        s.delete(t.id), clearTimeout(i.timeout), t.error ? i.reject(new Error(`Debugger error: ${JSON.stringify(t.error)}`)) : i.resolve(t.result), n = !0;
                        break;
                    }
                }
                n || this.logService.warn(`[ExtHostContinuousProfilingService] Received response for unknown request ID: ${t.id}`);
            } else this.logService.debug(`[ExtHostContinuousProfilingService] Received notification: ${JSON.stringify(t)}`);
        } catch (t) {
            this.logService.error(`[ExtHostContinuousProfilingService] Error parsing message: ${t}`);
        }
    }
    _getNextRequestId() {
        const e = this._nextRequestId;
        return this._nextRequestId = this._nextRequestId % 2147483647 + 1, e;
    }
    _findExtensionInCallStack(e, t, n, r) {
        let s = e;
        for(; s !== void 0;){
            const i = t[s], a = n[i.locationId], o = this._getExtensionIdFromPath(a.callFrame.url, r);
            if (o) return o;
            s = i.parent;
        }
        return "<ext-host-runtime>";
    }
    async _discoverDebugUrl(e) {
        try {
            const t = await this.requestService.request({
                url: `http://localhost:${e}/json/list`,
                type: "GET"
            }, Ie.None), n = await Pd(t);
            return Cm(n) ? n[0]?.webSocketDebuggerUrl ?? null : (this.logService.error(`[ExtHostContinuousProfilingService] Error parsing response from debug server via port ${e}`), null);
        } catch (t) {
            return this.logService.error(`[ExtHostContinuousProfilingService] Error discovering debug URL for port ${e}: ${t}`), null;
        }
    }
}, wo.WEBSOCKET_TIMEOUT_MS = 5e3, wo = B([
    w(0, Z),
    w(1, li)
], wo);

}
