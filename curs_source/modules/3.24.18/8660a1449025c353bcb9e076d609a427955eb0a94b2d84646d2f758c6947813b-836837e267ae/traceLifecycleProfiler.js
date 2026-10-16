import { Tqf, _Ul, gFw, mFw } from "./BA.js";
import { gFt } from "./Iwo.js";
import { fke } from "./client.js";
import { qv, uce } from "./debug-build_3.js";
import { so } from "./debug-logger.js";
import { fh } from "./index_10.js";
import { SOe, vM } from "./scope.js";
import { JN } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
function dve() {
    return gFt("globalScope", ()=>new SOe);
}
function Cde(t, e = []) {
    return [
        t,
        e
    ];
}
function Run(t) {
    if (!t?.sdk) return;
    const { name: e, version: n } = t.sdk;
    return {
        name: e,
        version: n
    };
}
var Aqf, Rqf, Pqf;
export { Aqf, Cde, Pqf, Rqf, Run, dve };
var __wakaru_xFw_initialized = false;
export function xFw() {
if (__wakaru_xFw_initialized) return;
__wakaru_xFw_initialized = true;
E(), fh(), uce(), _Ul(), Aqf = 6e4, Rqf = 3e5, Pqf = class {
    constructor(){
        this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1;
    }
    initialize(t, e) {
        this._profilerId = vM(), qv && so.log("[Profiling] Initializing profiler (lifecycle='trace')."), this._client = t, this._sessionSampled = e, t.on("spanStart", (n)=>{
            if (!this._sessionSampled) {
                qv && so.log("[Profiling] Session not sampled because of negative sampling decision.");
                return;
            }
            if (n !== JN(n)) return;
            if (!n.isRecording()) {
                qv && so.log("[Profiling] Discarding profile because root span was not sampled.");
                return;
            }
            dve().setContext("profile", {
                profiler_id: this._profilerId
            });
            const i = n.spanContext().spanId;
            if (!i || this._activeRootSpanIds.has(i)) return;
            this._activeRootSpanIds.add(i);
            const r = this._activeRootSpanIds.size, s = setTimeout(()=>{
                this._onRootSpanTimeout(i);
            }, Rqf);
            this._rootSpanTimeouts.set(i, s), r === 1 && (qv && so.log(`[Profiling] Root span with ID ${i} started. Will continue profiling for as long as there are active root spans (currently: ${r}).`), this.start());
        }), t.on("spanEnd", (n)=>{
            if (!this._sessionSampled) return;
            const i = n.spanContext().spanId;
            if (!i || !this._activeRootSpanIds.has(i)) return;
            this._activeRootSpanIds.delete(i);
            const r = this._activeRootSpanIds.size;
            qv && so.log(`[Profiling] Root span with ID ${i} ended. Will continue profiling for as long as there are active root spans (currently: ${r}).`), r === 0 && (this._collectCurrentChunk().catch((s)=>{
                qv && so.error("[Profiling] Failed to collect current profile chunk on `spanEnd`:", s);
            }), this.stop());
        });
    }
    notifyRootSpanActive(t) {
        if (!this._sessionSampled) return;
        const e = t.spanContext().spanId;
        if (!e || this._activeRootSpanIds.has(e)) return;
        this._activeRootSpanIds.add(e);
        const n = this._activeRootSpanIds.size;
        n === 1 && (qv && so.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this.start());
    }
    start() {
        if (!this._isRunning) {
            if (this._isRunning = !0, qv && so.log("[Profiling] Started profiling with profile ID:", this._profilerId), this._startProfilerInstance(), !this._profiler) {
                qv && so.log("[Profiling] Stopping trace lifecycle profiling."), this._resetProfilerInfo();
                return;
            }
            this._startPeriodicChunking();
        }
    }
    stop() {
        this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch((t)=>{
            qv && so.error("[Profiling] Failed to collect current profile chunk on `stop()`:", t);
        }));
    }
    _resetProfilerInfo() {
        this._isRunning = !1, dve().setContext("profile", {});
    }
    _clearAllRootSpanTimeouts() {
        this._rootSpanTimeouts.forEach((t)=>clearTimeout(t)), this._rootSpanTimeouts.clear();
    }
    _startProfilerInstance() {
        if (this._profiler?.stopped === !1) return;
        const t = Tqf();
        if (!t) {
            qv && so.log("[Profiling] Failed to start JS Profiler in trace lifecycle.");
            return;
        }
        this._profiler = t;
    }
    _startPeriodicChunking() {
        this._isRunning && (this._chunkTimer = setTimeout(()=>{
            if (this._collectCurrentChunk().catch((t)=>{
                qv && so.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", t);
            }), this._isRunning) {
                if (this._startProfilerInstance(), !this._profiler) {
                    this._resetProfilerInfo();
                    return;
                }
                this._startPeriodicChunking();
            }
        }, Aqf));
    }
    _onRootSpanTimeout(t) {
        if (!this._rootSpanTimeouts.has(t) || (this._rootSpanTimeouts.delete(t), !this._activeRootSpanIds.has(t))) return;
        qv && so.log(`[Profiling] Reached 5-minute timeout for root span ${t}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(t), this._activeRootSpanIds.size === 0 && this.stop();
    }
    async _collectCurrentChunk() {
        const t = this._profiler;
        if (this._profiler = void 0, !!t) try {
            const e = await t.stop(), n = mFw(e, this._client, this._profilerId), i = gFw(n);
            if ("reason" in i) {
                qv && so.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", i.reason);
                return;
            }
            this._sendProfileChunk(n), qv && so.log("[Profiling] Collected browser profile chunk.");
        } catch (e) {
            qv && so.log("[Profiling] Error while stopping JS Profiler for chunk:", e);
        }
    }
    _sendProfileChunk(t) {
        const e = this._client, n = Run(e.getSdkMetadata?.()), i = e.getDsn(), r = e.getOptions().tunnel, s = Cde({
            event_id: vM(),
            sent_at: new Date().toISOString(),
            ...n && {
                sdk: n
            },
            ...!!r && i && {
                dsn: fke(i)
            }
        }, [
            [
                {
                    type: "profile_chunk"
                },
                t
            ]
        ]);
        e.sendEnvelope(s).then(null, (o)=>{
            qv && so.error("Error while sending profile chunk envelope:", o);
        });
    }
};

}
