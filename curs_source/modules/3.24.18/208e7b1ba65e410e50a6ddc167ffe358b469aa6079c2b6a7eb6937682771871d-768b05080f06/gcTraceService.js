import { le, oT } from "./async.js";
import { J, j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
import { createReadStream as Ect } from "fs";
import { contentTracing as GU } from "electron";
import { createInterface as Rct } from "readline";
import { promises as bct } from "fs";
var C2e, I2e, VU, A2e;
export { A2e, C2e, I2e, VU };
var __wakaru_Cct_initialized = false;
export function Cct() {
if (__wakaru_Cct_initialized) return;
__wakaru_Cct_initialized = true;
"use strict";
h(), le(), j(), C2e = 10, I2e = 300, VU = 60, A2e = class extends J {
    constructor(){
        super(), this._drainTimer = this._register(new oT), this._recording = !1, this._draining = !1, this._enabled = !1, this._measurements = new Map, this._lastLiveHeapMB = new Map;
    }
    applyConfig(e) {
        if (e.enabled !== this._enabled) if (this._enabled = e.enabled, !e.enabled) console.log("[gc-trace] Disabled by config"), this._stopRecording();
        else {
            const t = Math.max(C2e, Math.min(I2e, e.drainIntervalSec));
            console.log(`[gc-trace] Enabled (drain every ${t}s)`), this._startRecording(t * 1e3);
        }
    }
    getMeasurements() {
        const e = [];
        for (const t of this._measurements.values())e.push(...t);
        return this._measurements.clear(), e;
    }
    async _drain() {
        if (!(!this._recording || this._draining)) {
            this._draining = !0;
            try {
                const e = await GU.stopRecording();
                this._recording = !1, this._enabled && await this._startRecording();
                const t = Rct({
                    input: Ect(e, "utf-8"),
                    crlfDelay: 1 / 0
                }), n = new Map, r = new Map;
                for await (const i of t){
                    const a = i.replace(/,\s*$/, "");
                    try {
                        const o = JSON.parse(a);
                        if (o.ph === "M" && o.name === "thread_name" && o.args?.name === "CrRendererMain") {
                            n.set(o.pid, o.tid);
                            continue;
                        }
                        if (o.name !== "V8.GCTraceGCNVP") continue;
                        const l = JSON.parse(o.args?.value ?? "{}"), d = o.pid, u = o.tid, m = `${d}:${u}`;
                        let f = r.get(m);
                        f || (f = {
                            pid: d,
                            tid: u,
                            totalAllocated: 0,
                            totalMutator: 0,
                            gcCount: 0,
                            lastMajorLiveHeap: void 0
                        }, r.set(m, f)), typeof l.allocated == "number" && typeof l.mutator == "number" && l.allocated >= 0 && l.allocated < 2 ** 53 && (f.totalAllocated += l.allocated, f.totalMutator += l.mutator), f.gcCount++, l.gc === "mc" && (f.lastMajorLiveHeap = (l.end_object_size ?? 0) - (l.end_holes_size ?? 0));
                    } catch  {}
                }
                const s = Date.now();
                for (const [i, a] of r){
                    if (n.get(a.pid) !== a.tid) continue;
                    const o = a.totalMutator > 0 ? a.totalAllocated / a.totalMutator / 1024 : void 0, l = a.lastMajorLiveHeap !== void 0 ? a.lastMajorLiveHeap / 1024 / 1024 : this._lastLiveHeapMB.get(a.pid);
                    l !== void 0 && this._lastLiveHeapMB.set(a.pid, l);
                    const d = {
                        pid: a.pid,
                        timestamp: s,
                        gcCount: a.gcCount,
                        allocRateMBs: o,
                        liveHeapMB: l
                    };
                    let u = this._measurements.get(a.pid);
                    u || (u = [], this._measurements.set(a.pid, u)), u.push(d), u.length > VU && u.splice(0, u.length - VU), console.log(`[gc-trace] pid=${a.pid} events=${a.gcCount} alloc_rate=${o !== void 0 ? o.toFixed(1) : "N/A"}MB/s live_heap=${l !== void 0 ? l.toFixed(1) : "N/A"}MB`);
                }
                await bct.unlink(e).catch(()=>{});
            } catch (e) {
                console.warn("[gc-trace] drain failed:", e), this._enabled && await this._startRecording();
            } finally{
                this._draining = !1;
            }
        }
    }
    _stopRecording() {
        this._drainTimer.cancel(), this._recording && (GU.stopRecording("").catch(()=>{}), this._recording = !1), this._measurements.clear(), this._lastLiveHeapMB.clear();
    }
    async _startRecording(e) {
        try {
            await GU.startRecording({
                included_categories: [
                    "disabled-by-default-v8.gc"
                ],
                excluded_categories: [
                    "*"
                ],
                recording_mode: "record-continuously"
            }), this._recording = !0, e !== void 0 && this._drainTimer.cancelAndSet(()=>this._drain(), e);
        } catch (t) {
            console.warn("[gc-trace] failed to start recording:", t);
        }
    }
    dispose() {
        this._stopRecording(), super.dispose();
    }
};

}
