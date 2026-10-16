import { le } from "./async.js";
import { bw } from "./bcIdFromAuthority.js";
import { Ie, Jn, Mt } from "./cancellation.js";
import { unt } from "./continuousProfilingService.js";
import { Fr, si } from "./environment.js";
import { Ve, kt } from "./errors.js";
import { N, se } from "./event.js";
import { B, Hn } from "./ipc.js";
import { J, ei, j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Ia } from "./processMainService.js";
import { Tt, et } from "./productService.js";
import { Cs } from "./storage_3.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Wn, vt } from "./uuid.js";
import { dG, dS, lS } from "./windowProfiling.js";
import { ct, pt } from "./windows.js";
import Po from "path";
import hnt from "electron";
import { tmpdir as mnt } from "os";
import { createGzip as pnt } from "zlib";
import ss from "fs";
function cnt(e) {
    const t = e?.samples;
    if (!Array.isArray(t)) return {
        sampleCount: 0,
        sampledBytes: 0
    };
    let n = 0;
    for (const r of t){
        const s = r?.size;
        typeof s == "number" && (n += s);
    }
    return {
        sampleCount: t.length,
        sampledBytes: n
    };
}
function gnt(e, t, n, r, s = Ie.None) {
    if (s.isCancellationRequested) return Promise.reject(new kt);
    const i = new ve, a = new Promise((o, l)=>{
        i.add(Hn(()=>l(new Y2(t, r)), r)), i.add(s.onCancellationRequested(()=>l(new kt)));
    });
    return Promise.race([
        e.debugger.sendCommand(t, n),
        a
    ]).finally(()=>i.dispose());
}
var _ve, Y2, vve, J1;
export { J1, Y2, _ve, cnt, gnt, vve };
var __wakaru_fnt_initialized = false;
export function fnt() {
if (__wakaru_fnt_initialized) return;
__wakaru_fnt_initialized = true;
"use strict";
h(), le(), Mt(), Ve(), se(), j(), Wn(), Fr(), te(), Tt(), pt(), unt(), bw(), dG(), _ve = 6e4, Y2 = class extends Error {
    constructor(e, t){
        super(`DevTools command ${e} did not answer within ${t}ms`), this.method = e, this.timeoutMs = t, this.name = "ProfilerCommandTimeoutError";
    }
}, vve = class {
    constructor(e){
        this.isCanceled = !1, this.captureId = e.captureId, this.targetId = e.targetId, this.targetWebContents = e.targetWebContents, this.profileTypes = e.profileTypes, this.processType = e.processType, this.startTime = Date.now(), this.duration = e.duration, this.profileConfig = e.profileConfig, this.profilingLock = e.profilingLock, this.didAttachDebugger = e.didAttachDebugger;
    }
    waitForDuration() {
        return new Promise((e)=>{
            this._cancelResolve = e, setTimeout(e, this.duration * 1e3);
        });
    }
    cancel() {
        this.isCanceled = !0, this._cancelResolve?.();
    }
    getDescription() {
        return `Profile ${this.captureId} (target: ${this.targetId}, types: ${this.profileTypes.join(", ")}, duration: ${this.duration}s)`;
    }
}, J1 = class extends J {
    constructor(e, t, n, r){
        super(), this.environmentService = e, this.logService = t, this.productService = n, this.windowsMainService = r, this._isEnabled = !1, this._isPrivacyMode = !1, this._activeSessions = new Map, this._emergencyCaptures = this._register(new ei), this._renderersWithLostHeapProfileReply = new Set, this._commandTimeoutMs = _ve, this._profileCaptureStatusChangeEvent = this._register(new N), this.onProfileCaptureStatusChange = this._profileCaptureStatusChangeEvent.event, this.logService.debug("ContinuousProfilingMainService: initialized in main process");
    }
    async captureProfile(e) {
        if (!this._isEnabled) return "";
        if (this._isPrivacyMode) return this.logService.debug("ContinuousProfilingMainService: skipping profile capture due to privacy mode"), "";
        const t = this._getProfileTypes(e.profileConfig);
        if (t.length === 0) return this.logService.warn(`ContinuousProfilingMainService: No profile types (CPU or Heap) configured for capture. (captureId: ${e.captureId})`), "";
        const n = e.captureId ?? vt();
        let r, s, i = !1, a;
        try {
            let o, l;
            if (e.processType === "renderer") {
                if (typeof e.windowId != "number") throw new Error("windowId must be provided for renderer profiling");
                const d = this.windowsMainService.getWindowById(e.windowId);
                if (!d?.win?.webContents) throw new Error(`Could not find webContents for windowId ${e.windowId}`);
                s = d.win.webContents, o = s.id, l = d.remoteAuthority ? Ia(d.remoteAuthority) : void 0;
            } else throw e.processType === "main" ? new Error("Main process profiling not yet implemented") : new Error(`Unknown process type: ${e.processType}`);
            try {
                r = lS(o, n);
            } catch (d) {
                if (d instanceof dS) return this.logService.debug(`ContinuousProfilingMainService: ${d.message}`), this._profileCaptureStatusChangeEvent.fire({
                    state: "error",
                    captureId: n,
                    error: d.message,
                    cause: "LOCK_CONFLICT"
                }), "";
                throw d;
            }
            if (s.debugger.isAttached()) this.logService.debug(`ContinuousProfilingMainService: Debugger already attached to target ${o}. Reusing existing attachment for capture ${n}.`);
            else try {
                s.debugger.attach("1.3"), i = !0, this.logService.debug(`ContinuousProfilingMainService: Successfully attached debugger to target ${o} for capture ${n}.`);
            } catch (d) {
                const u = `Failed to attach debugger to target ${o} for capture ${n}. Error: ${d.message}`;
                return this.logService.debug(`ContinuousProfilingMainService: ${u}`), this._profileCaptureStatusChangeEvent.fire({
                    state: "error",
                    captureId: n,
                    error: u,
                    cause: "DEBUGGER_ATTACH_FAILED"
                }), r.dispose(), "";
            }
            return a = new vve({
                captureId: n,
                targetId: o,
                targetWebContents: s,
                profileTypes: t,
                processType: e.processType,
                duration: e.duration,
                profileConfig: e.profileConfig,
                profilingLock: r,
                didAttachDebugger: i
            }), this._activeSessions.set(n, a), this.logService.debug(`ContinuousProfilingMainService: Created session for ${a.getDescription()}`), this._profileCaptureStatusChangeEvent.fire({
                state: "started",
                captureId: n
            }), await this._captureAndCompressProfile(a, l), n;
        } catch (o) {
            if (this.logService.debug(`ContinuousProfilingMainService: failed to capture profile ${n}`, o), this._profileCaptureStatusChangeEvent.fire({
                state: "error",
                captureId: n,
                error: String(o)
            }), a) await this._cleanupSession(a, []);
            else {
                if (i && s && !s.isDestroyed() && s.debugger.isAttached()) try {
                    s.debugger.detach(), this.logService.debug(`ContinuousProfilingMainService: Detached debugger during early cleanup for capture ${n}.`);
                } catch (l) {
                    this.logService.debug(`ContinuousProfilingMainService: Error detaching debugger during early cleanup for capture ${n}`, l);
                }
                r?.dispose();
            }
            return n;
        }
    }
    async setIsPrivacyMode(e) {
        this._isPrivacyMode = e, this.logService.debug(`ContinuousProfilingMainService: set privacy mode to ${e}`);
    }
    async setRendererContinuousProfilingEnabled(e) {
        this._isEnabled = e, e || await this.cancelAllProfiles();
    }
    async cancelProfile(e, t = "Canceled by user or configuration change") {
        const n = this._activeSessions.get(e);
        if (!n) {
            this.logService.debug(`ContinuousProfilingMainService: No active profile found for ID ${e} during cancellation`);
            return;
        }
        this.logService.debug(`ContinuousProfilingMainService: Canceling ${n.getDescription()} with reason: ${t}`), n.cancel();
        const r = {
            state: "canceled",
            captureId: e,
            reason: t
        };
        this._profileCaptureStatusChangeEvent.fire(r);
    }
    async cancelAllProfiles() {
        const e = Array.from(this._activeSessions.values());
        if (e.length !== 0) {
            this.logService.debug(`ContinuousProfilingMainService: Canceling all ${e.length} active profiles`);
            for (const t of e)await this.cancelProfile(t.captureId);
        }
    }
    _getProfileTypes(e) {
        const t = [];
        return e.cpu && t.push("cpu"), e.heap && t.push("heap"), t;
    }
    async _captureAndCompressProfile(e, t) {
        const { captureId: n, targetWebContents: r, targetId: s } = e, i = Po.join(mnt(), `vscode-profile-${n}`), a = [];
        try {
            await ss.promises.mkdir(i, {
                recursive: !0
            });
            const o = [];
            if (e.profileConfig.cpu) {
                const d = Po.join(i, "profile.cpuprofile");
                await this._sendCommand(r, "Profiler.enable");
                const u = e.profileConfig.cpu.interval ?? 1e3;
                await this._sendCommand(r, "Profiler.setSamplingInterval", {
                    interval: u
                }), await this._sendCommand(r, "Profiler.start"), a.push("cpu"), this.logService.debug(`ContinuousProfilingMainService: CPU Profiler started on wc ${s}, duration ${e.duration}s`), o.push({
                    type: "cpu",
                    file: d
                });
            }
            if (e.profileConfig.heap) {
                const d = Po.join(i, "profile.heapprofile");
                await this._sendCommand(r, "HeapProfiler.enable");
                const u = e.profileConfig.heap.samplingInterval ?? 32768, m = e.profileConfig.heap.includeObjectsCollectedByMajorGC ?? !1, f = e.profileConfig.heap.includeObjectsCollectedByMinorGC ?? !1;
                await this._sendCommand(r, "HeapProfiler.startSampling", {
                    samplingInterval: u,
                    includeObjectsCollectedByMajorGC: m,
                    includeObjectsCollectedByMinorGC: f
                }), a.push("heap"), this.logService.debug(`ContinuousProfilingMainService: Heap Profiler started on wc ${s}, duration ${e.duration}s, samplingInterval: ${u}`), o.push({
                    type: "heap",
                    file: d
                });
            }
            if (o.length === 0) throw new Error("No profile types configured for capture");
            if (await e.waitForDuration(), e.isCanceled) {
                this.logService.debug(`ContinuousProfilingMainService: Capture ${n} was canceled, skipping save.`);
                return;
            }
            if (r.isDestroyed()) this.logService.warn(`ContinuousProfilingMainService: Target webContents ${s} destroyed before profile ${n} could be stopped/saved.`);
            else for (const d of o)if (d.type === "cpu") try {
                const u = await this._sendCommand(r, "Profiler.stop");
                a.splice(a.indexOf("cpu"), 1), await this._sendCommand(r, "Profiler.disable"), this.logService.debug(`ContinuousProfilingMainService: CPU Profiler stopped on wc ${s}`), await ss.promises.writeFile(d.file, JSON.stringify(u.profile)), this.logService.debug(`ContinuousProfilingMainService: CPU Profile saved to ${d.file}`);
            } catch (u) {
                this.logService.error(`ContinuousProfilingMainService: Error stopping/saving CPU profile for ${n}`, u);
            }
            else if (d.type === "heap") try {
                const u = await this._sendCommand(r, "HeapProfiler.stopSampling");
                a.splice(a.indexOf("heap"), 1), await this._sendCommand(r, "HeapProfiler.disable"), this.logService.debug(`ContinuousProfilingMainService: Heap Profiler stopped on wc ${s}`), await ss.promises.writeFile(d.file, JSON.stringify(u.profile)), this.logService.debug(`ContinuousProfilingMainService: Heap Profile saved to ${d.file}`);
            } catch (u) {
                this.logService.error(`ContinuousProfilingMainService: Error stopping/saving Heap profile for ${n}`, u);
            }
            const l = [];
            for (const d of o)try {
                if (await ss.promises.stat(d.file)) {
                    const u = `${d.file}.gz`;
                    await this._compressFile(d.file, u), this.logService.debug(`ContinuousProfilingMainService: Profile compressed to ${u}`), l.push(u);
                } else this.logService.warn(`ContinuousProfilingMainService: Raw profile file ${d.file} not found for compression.`);
            } catch (u) {
                u.code !== "ENOENT" && this.logService.error(`ContinuousProfilingMainService: Error compressing profile file ${d.file}`, u);
            }
            for (const d of l){
                const u = {
                    state: "completed",
                    captureId: n,
                    filePath: d,
                    timestamp: Date.now(),
                    duration: e.duration * 1e3,
                    profileConfig: e.profileConfig,
                    bcId: t
                };
                this._profileCaptureStatusChangeEvent.fire(u);
            }
        } catch (o) {
            this.logService.debug(`ContinuousProfilingMainService: Error during profile capture ${n}`, o);
            const l = {
                state: "error",
                captureId: n,
                error: String(o)
            };
            this._profileCaptureStatusChangeEvent.fire(l);
        } finally{
            await this._cleanupSession(e, a);
        }
    }
    async _cleanupSession(e, t) {
        const { captureId: n, targetWebContents: r, didAttachDebugger: s } = e;
        this.logService.debug(`ContinuousProfilingMainService: Cleaning up session ${n}.`);
        try {
            if (!r.isDestroyed() && r.debugger.isAttached()) {
                for (const i of t)if (i === "cpu") {
                    try {
                        await this._sendCommand(r, "Profiler.stop");
                    } catch (a) {
                        this.logService.debug(`ContinuousProfilingMainService: Error stopping CPU profiler during cleanup for capture ${n}`, a);
                    }
                    try {
                        await this._sendCommand(r, "Profiler.disable");
                    } catch (a) {
                        this.logService.debug(`ContinuousProfilingMainService: Error disabling CPU profiler during cleanup for capture ${n}`, a);
                    }
                } else {
                    try {
                        await this._sendCommand(r, "HeapProfiler.stopSampling");
                    } catch (a) {
                        this.logService.debug(`ContinuousProfilingMainService: Error stopping heap profiler during cleanup for capture ${n}`, a);
                    }
                    try {
                        await this._sendCommand(r, "HeapProfiler.disable");
                    } catch (a) {
                        this.logService.debug(`ContinuousProfilingMainService: Error disabling heap profiler during cleanup for capture ${n}`, a);
                    }
                }
                if (s && r.debugger.isAttached()) try {
                    r.debugger.detach(), this.logService.debug(`ContinuousProfilingMainService: Detached debugger during cleanup for capture ${n}.`);
                } catch (i) {
                    this.logService.debug(`ContinuousProfilingMainService: Error during cleanup for capture ${n}`, i);
                }
            }
        } finally{
            this._endSession(n) || e.profilingLock.dispose();
        }
    }
    _getEmergencyProfileDir() {
        return Po.join(hnt.app.getPath("userData"), "emergency-profiles");
    }
    async captureEmergencyProfile(e) {
        if (this._isPrivacyMode) return this.logService.debug("ContinuousProfilingMainService: skipping emergency profile due to privacy mode"), null;
        const t = vt();
        let n;
        try {
            if (e.processType === "renderer") {
                const d = e.windowId;
                if (typeof d != "number") throw new Error("windowId must be provided for renderer emergency profiling");
                const u = this.windowsMainService.getWindowById(d);
                if (!u?.win?.webContents) throw new Error(`Could not find webContents for windowId ${d}`);
                n = u.win.webContents;
            } else throw new Error(`Unsupported process type for emergency profiling: ${e.processType}`);
            const r = n.id;
            if (this._renderersWithLostHeapProfileReply.has(r)) return this.logService.debug(`ContinuousProfilingMainService: skipping emergency profile ${t}; an earlier heap profile reply from this renderer was lost`), null;
            let s;
            try {
                s = lS(r, t);
            } catch (d) {
                if (d instanceof dS) {
                    this.logService.info(`ContinuousProfilingMainService: emergency profile preempting active profiling session: ${d.message}`), await this.cancelAllProfiles(), await new Promise((u)=>setTimeout(u, 0));
                    try {
                        s = lS(r, t);
                    } catch (u) {
                        return this.logService.warn(`ContinuousProfilingMainService: emergency profile failed to acquire lock after cancellation: ${u}`), null;
                    }
                } else throw d;
            }
            let i = !1, a = !1;
            const o = new Jn;
            this._emergencyCaptures.set(t, o);
            const l = o.token;
            try {
                if (n.debugger.isAttached() || (n.debugger.attach("1.3"), i = !0), await this._sendCommand(n, "HeapProfiler.enable", void 0, l), await this._sendCommand(n, "HeapProfiler.startSampling", {
                    samplingInterval: e.samplingInterval,
                    includeObjectsCollectedByMajorGC: !1,
                    includeObjectsCollectedByMinorGC: !1
                }, l), a = !0, this.logService.info(`ContinuousProfilingMainService: emergency heap profiler started for ${t}, duration ${e.duration}s`), await this._waitForEmergencyCapture(e.duration, l), n.isDestroyed()) return this.logService.warn(`ContinuousProfilingMainService: target webContents destroyed during emergency profile ${t}`), null;
                {
                    let d;
                    try {
                        d = await this._sendCommand(n, "HeapProfiler.stopSampling", void 0, l);
                    } catch (y) {
                        throw y instanceof Y2 && this._renderersWithLostHeapProfileReply.add(r), y;
                    }
                    a = !1, await this._sendCommand(n, "HeapProfiler.disable", void 0, l);
                    const { sampleCount: u, sampledBytes: m } = cnt(d.profile);
                    if (u === 0) return this.logService.warn(`ContinuousProfilingMainService: emergency profile ${t} captured zero heap samples; discarding it instead of uploading.`), {
                        captureId: t,
                        zipPath: void 0,
                        sampleCount: u,
                        sampledBytes: m
                    };
                    const f = this._getEmergencyProfileDir();
                    await ss.promises.mkdir(f, {
                        recursive: !0
                    });
                    const v = Po.join(f, `${t}.heapprofile`);
                    await ss.promises.writeFile(v, JSON.stringify(d.profile));
                    const T = Po.join(f, `${t}.metadata.json`);
                    await ss.promises.writeFile(T, JSON.stringify({
                        captureId: t,
                        version: this.productService.version,
                        commit: this.productService.commit,
                        ...e.metadata,
                        sampleCount: u,
                        sampledBytes: m
                    }, null, 2));
                    const S = (await import("archiver")).default, k = Po.join(f, `${t}.zip`);
                    return await new Promise((y, b)=>{
                        const I = S("zip"), G = ss.createWriteStream(k);
                        G.on("close", ()=>y()), G.on("error", (U)=>b(U)), I.on("error", (U)=>b(U)), I.pipe(G), I.file(v, {
                            name: `${t}.heapprofile`
                        }), I.file(T, {
                            name: `${t}.metadata.json`
                        }), I.finalize();
                    }), await ss.promises.unlink(v).catch(()=>{}), await ss.promises.unlink(T).catch(()=>{}), this.logService.info(`ContinuousProfilingMainService: emergency profile saved to ${k} (${u} samples, ${m} sampled bytes)`), {
                        captureId: t,
                        zipPath: k,
                        sampleCount: u,
                        sampledBytes: m
                    };
                }
            } finally{
                if (this._emergencyCaptures.deleteAndDispose(t), s.dispose(), !n.isDestroyed() && n.debugger.isAttached()) if (i) try {
                    n.debugger.detach();
                } catch  {}
                else a && this._sendCommand(n, "HeapProfiler.stopSampling").catch((d)=>{
                    this.logService.debug(`ContinuousProfilingMainService: Error stopping heap profiler during emergency cleanup for ${t}`, d);
                });
            }
        } catch (r) {
            return Cs(r) ? (this.logService.info(`ContinuousProfilingMainService: emergency profile ${t} was canceled; discarding it.`), null) : (this.logService.error(`ContinuousProfilingMainService: emergency profile capture failed for ${t}`, r), null);
        }
    }
    async cancelEmergencyProfiles() {
        for (const e of [
            ...this._emergencyCaptures.values()
        ])e.cancel();
    }
    _waitForEmergencyCapture(e, t) {
        return t.isCancellationRequested ? Promise.reject(new kt) : new Promise((n, r)=>{
            const s = new ve;
            s.add(Hn(()=>{
                s.dispose(), n();
            }, e * 1e3)), s.add(t.onCancellationRequested(()=>{
                s.dispose(), r(new kt);
            }));
        });
    }
    _sendCommand(e, t, n, r) {
        return gnt(e, t, n, this._commandTimeoutMs, r);
    }
    async getOrphanedEmergencyProfiles() {
        const e = this._getEmergencyProfileDir();
        try {
            return ss.existsSync(e) ? (await ss.promises.readdir(e)).filter((n)=>n.endsWith(".zip")).map((n)=>Po.join(e, n)) : [];
        } catch  {
            return [];
        }
    }
    async _compressFile(e, t) {
        return new Promise((n, r)=>{
            const s = pnt(), i = ss.createReadStream(e), a = ss.createWriteStream(t);
            i.pipe(s).pipe(a), a.on("finish", ()=>{
                n();
            }), a.on("error", (o)=>{
                r(o);
            });
        });
    }
    _endSession(e) {
        const t = this._activeSessions.get(e);
        if (t) {
            t.profilingLock.dispose();
            const n = this._activeSessions.delete(e);
            return n ? this.logService.debug(`ContinuousProfilingMainService: Successfully ended session for ${t.getDescription()}`) : this.logService.warn(`ContinuousProfilingMainService: Failed to delete session entry for ${e} after finding it.`), n;
        } else return this.logService.debug(`ContinuousProfilingMainService: No active session found for ${e} during _endSession.`), !1;
    }
    dispose() {
        this.cancelAllProfiles(), this.cancelEmergencyProfiles(), super.dispose();
    }
}, J1 = B([
    w(0, si),
    w(1, Z),
    w(2, et),
    w(3, ct)
], J1);

}
