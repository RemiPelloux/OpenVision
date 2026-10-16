import { bdt } from "./HVr.js";
import { zce } from "./client.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { Y4 } from "./inp.js";
import { xGr } from "./qIc.js";
import { gI, zke } from "./scope.js";
import { Pu, pD } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function Pie() {
    return bdt("globalScope", ()=>new zke);
}
function eJ(e, t = []) {
    return [
        e,
        t
    ];
}
function TLt(e) {
    if (!e?.sdk) return;
    const { name: t, version: n } = e.sdk;
    return {
        name: t,
        version: n
    };
}
function M0_(e) {
    return typeof e == "object" && e !== null && "getHighEntropyValues" in e;
}
function F0_(e, t, n) {
    if (e == null) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
    const i = U0_(e), r = t.getOptions(), s = t.getSdkMetadata?.()?.sdk;
    return {
        chunk_id: gI(),
        client_sdk: {
            name: s?.name ?? "sentry.javascript.browser",
            version: s?.version ?? "0.0.0"
        },
        profiler_id: n || gI(),
        platform: "javascript",
        version: "2",
        release: r.release ?? "",
        environment: r.environment ?? "production",
        debug_meta: {
            images: uYh(e.resources)
        },
        profile: i
    };
}
function B0_(e) {
    try {
        if (!e || typeof e != "object") return {
            reason: "chunk is not an object"
        };
        const t = (i)=>typeof i == "string" && /^[a-f0-9]{32}$/.test(i);
        if (!t(e.profiler_id)) return {
            reason: "missing or invalid profiler_id"
        };
        if (!t(e.chunk_id)) return {
            reason: "missing or invalid chunk_id"
        };
        if (!e.client_sdk) return {
            reason: "missing client_sdk metadata"
        };
        const n = e.profile;
        return n ? !Array.isArray(n.frames) || !n.frames.length ? {
            reason: "profile has no frames"
        } : !Array.isArray(n.stacks) || !n.stacks.length ? {
            reason: "profile has no stacks"
        } : !Array.isArray(n.samples) || !n.samples.length ? {
            reason: "profile has no samples"
        } : {
            valid: !0
        } : {
            reason: "missing profile data"
        };
    } catch (t) {
        return {
            reason: `unknown validation error: ${t}`
        };
    }
}
function U0_(e) {
    const t = [];
    for(let a = 0; a < e.frames.length; a++){
        const c = e.frames[a];
        c && (t[a] = {
            function: c.name,
            abs_path: typeof c.resourceId == "number" ? e.resources[c.resourceId] : void 0,
            lineno: c.line,
            colno: c.column
        });
    }
    const n = [];
    for(let a = 0; a < e.stacks.length; a++){
        const c = e.stacks[a];
        if (!c) continue;
        const l = [];
        let u = c;
        for(; u;)l.push(u.frameId), u = u.parentId === void 0 ? void 0 : e.stacks[u.parentId];
        n[a] = l;
    }
    const i = Y4(), r = typeof performance.timeOrigin == "number" ? performance.timeOrigin : i || 0, s = r - (i || r), o = [];
    for(let a = 0; a < e.samples.length; a++){
        const c = e.samples[a];
        if (!c) continue;
        const l = (r + (c.timestamp - s)) / 1e3;
        o[a] = {
            stack_id: c.stackId ?? 0,
            thread_id: S7e,
            timestamp: l
        };
    }
    return {
        frames: t,
        stacks: n,
        samples: o,
        thread_metadata: {
            [S7e]: {
                name: Y9n
            }
        }
    };
}
function uYh(e) {
    const i = Pu()?.getOptions()?.stackParser;
    return i ? xGr(i, e) : [];
}
function V0_(e) {
    return typeof e == "function";
}
function hYh() {
    const e = z_.Profiler;
    if (!V0_(e)) {
        kg && zr.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
        return;
    }
    const t = 10, n = Math.floor(VOo / t);
    try {
        return new e({
            sampleInterval: t,
            maxBufferSize: n
        });
    } catch  {
        kg && (zr.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), zr.log("[Profiling] Disabling profiling for current user session.")), tor = !0;
    }
}
var BOo, mYh, S7e, Y9n, X9n, UOo, $Oo, HOo, eor, WOo, gYh, GOo, tor, VOo, Ynt, fYh, vYh, _Yh;
export { $Oo, B0_, BOo, F0_, GOo, HOo, M0_, Pie, S7e, TLt, U0_, UOo, V0_, VOo, WOo, X9n, Y9n, Ynt, _Yh, eJ, eor, fYh, gYh, hYh, mYh, tor, uYh, vYh };
var __wakaru_jOo_initialized = false;
export function jOo() {
if (__wakaru_jOo_initialized) return;
__wakaru_jOo_initialized = true;
x(), $u(), _Z(), Q$(), BOo = 1e6, mYh = "window" in Og && Og.window === Og && typeof importScripts > "u", S7e = String(0), Y9n = mYh ? "main" : "worker", X9n = z_.navigator, UOo = "", $Oo = "", HOo = "", eor = X9n?.userAgent || "", WOo = "", gYh = X9n?.language || X9n?.languages?.[0] || "", GOo = X9n?.userAgentData, M0_(GOo) && GOo.getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList"
]).then((e)=>{
    if (UOo = e.platform || "", HOo = e.architecture || "", WOo = e.model || "", $Oo = e.platformVersion || "", e.fullVersionList?.length) {
        const t = e.fullVersionList[e.fullVersionList.length - 1];
        eor = `${t.brand} ${t.version}`;
    }
}).catch((e)=>{}), tor = !1, VOo = 3e4, Ynt = new Map;

}
var __wakaru_Z0__initialized = false;
export function Z0_() {
if (__wakaru_Z0__initialized) return;
__wakaru_Z0__initialized = true;
x(), $u(), _Z(), jOo(), fYh = 6e4, vYh = 3e5, _Yh = class {
    constructor(){
        this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1;
    }
    initialize(e, t) {
        this._profilerId = gI(), kg && zr.log("[Profiling] Initializing profiler (lifecycle='trace')."), this._client = e, this._sessionSampled = t, e.on("spanStart", (n)=>{
            if (!this._sessionSampled) {
                kg && zr.log("[Profiling] Session not sampled because of negative sampling decision.");
                return;
            }
            if (n !== pD(n)) return;
            if (!n.isRecording()) {
                kg && zr.log("[Profiling] Discarding profile because root span was not sampled.");
                return;
            }
            Pie().setContext("profile", {
                profiler_id: this._profilerId
            });
            const i = n.spanContext().spanId;
            if (!i || this._activeRootSpanIds.has(i)) return;
            this._activeRootSpanIds.add(i);
            const r = this._activeRootSpanIds.size, s = setTimeout(()=>{
                this._onRootSpanTimeout(i);
            }, vYh);
            this._rootSpanTimeouts.set(i, s), r === 1 && (kg && zr.log(`[Profiling] Root span with ID ${i} started. Will continue profiling for as long as there are active root spans (currently: ${r}).`), this.start());
        }), e.on("spanEnd", (n)=>{
            if (!this._sessionSampled) return;
            const i = n.spanContext().spanId;
            if (!i || !this._activeRootSpanIds.has(i)) return;
            this._activeRootSpanIds.delete(i);
            const r = this._activeRootSpanIds.size;
            kg && zr.log(`[Profiling] Root span with ID ${i} ended. Will continue profiling for as long as there are active root spans (currently: ${r}).`), r === 0 && (this._collectCurrentChunk().catch((s)=>{
                kg && zr.error("[Profiling] Failed to collect current profile chunk on `spanEnd`:", s);
            }), this.stop());
        });
    }
    notifyRootSpanActive(e) {
        if (!this._sessionSampled) return;
        const t = e.spanContext().spanId;
        if (!t || this._activeRootSpanIds.has(t)) return;
        this._activeRootSpanIds.add(t);
        const n = this._activeRootSpanIds.size;
        n === 1 && (kg && zr.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this.start());
    }
    start() {
        if (!this._isRunning) {
            if (this._isRunning = !0, kg && zr.log("[Profiling] Started profiling with profile ID:", this._profilerId), this._startProfilerInstance(), !this._profiler) {
                kg && zr.log("[Profiling] Stopping trace lifecycle profiling."), this._resetProfilerInfo();
                return;
            }
            this._startPeriodicChunking();
        }
    }
    stop() {
        this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch((e)=>{
            kg && zr.error("[Profiling] Failed to collect current profile chunk on `stop()`:", e);
        }));
    }
    _resetProfilerInfo() {
        this._isRunning = !1, Pie().setContext("profile", {});
    }
    _clearAllRootSpanTimeouts() {
        this._rootSpanTimeouts.forEach((e)=>clearTimeout(e)), this._rootSpanTimeouts.clear();
    }
    _startProfilerInstance() {
        if (this._profiler?.stopped === !1) return;
        const e = hYh();
        if (!e) {
            kg && zr.log("[Profiling] Failed to start JS Profiler in trace lifecycle.");
            return;
        }
        this._profiler = e;
    }
    _startPeriodicChunking() {
        this._isRunning && (this._chunkTimer = setTimeout(()=>{
            if (this._collectCurrentChunk().catch((e)=>{
                kg && zr.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", e);
            }), this._isRunning) {
                if (this._startProfilerInstance(), !this._profiler) {
                    this._resetProfilerInfo();
                    return;
                }
                this._startPeriodicChunking();
            }
        }, fYh));
    }
    _onRootSpanTimeout(e) {
        if (!this._rootSpanTimeouts.has(e) || (this._rootSpanTimeouts.delete(e), !this._activeRootSpanIds.has(e))) return;
        kg && zr.log(`[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(e), this._activeRootSpanIds.size === 0 && this.stop();
    }
    async _collectCurrentChunk() {
        const e = this._profiler;
        if (this._profiler = void 0, !!e) try {
            const t = await e.stop(), n = F0_(t, this._client, this._profilerId), i = B0_(n);
            if ("reason" in i) {
                kg && zr.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", i.reason);
                return;
            }
            this._sendProfileChunk(n), kg && zr.log("[Profiling] Collected browser profile chunk.");
        } catch (t) {
            kg && zr.log("[Profiling] Error while stopping JS Profiler for chunk:", t);
        }
    }
    _sendProfileChunk(e) {
        const t = this._client, n = TLt(t.getSdkMetadata?.()), i = t.getDsn(), r = t.getOptions().tunnel, s = eJ({
            event_id: gI(),
            sent_at: new Date().toISOString(),
            ...n && {
                sdk: n
            },
            ...!!r && i && {
                dsn: zce(i)
            }
        }, [
            [
                {
                    type: "profile_chunk"
                },
                e
            ]
        ]);
        t.sendEnvelope(s).then(null, (o)=>{
            kg && zr.error("Error while sending profile chunk envelope:", o);
        });
    }
};

}
