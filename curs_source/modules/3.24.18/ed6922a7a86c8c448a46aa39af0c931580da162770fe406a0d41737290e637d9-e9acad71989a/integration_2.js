import { T7 } from "./browserTracingIntegration.js";
import { Adt } from "./constants.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { Y4, mD } from "./inp.js";
import { uAe } from "./moduleMetadata.js";
import { gI } from "./scope.js";
import { Pu, iv, nv, pD, sR } from "./spanUtils.js";
import { Q0_ } from "./startProfileForSpan.js";
import { x } from "./tslib.es6.js";
import { $Oo, BOo, HOo, S7e, UOo, VOo, WOo, Y9n, Ynt, Z0_, _Yh, eor, gYh, hYh, jOo, tor, uYh } from "./utils_29.js";
function P0_(e) {
    return !("thread_metadata" in e);
}
function L0_(e) {
    return P0_(e) ? $0_(e) : e;
}
function N0_(e) {
    const t = e.contexts?.trace?.trace_id;
    return typeof t == "string" && t.length !== 32 && kg && zr.log(`[Profiling] Invalid traceId: ${t} on profiled event`), typeof t != "string" ? "" : t;
}
function O0_(e, t, n, i) {
    if (i.type !== "transaction") throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (n == null) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
    const r = N0_(i), s = L0_(n), o = t || (typeof i.start_timestamp == "number" ? i.start_timestamp * 1e3 : sR() * 1e3), a = typeof i.timestamp == "number" ? i.timestamp * 1e3 : sR() * 1e3;
    return {
        event_id: e,
        timestamp: new Date(o).toISOString(),
        platform: "javascript",
        version: "1",
        release: i.release || "",
        environment: i.environment || Adt,
        runtime: {
            name: "javascript",
            version: z_.navigator.userAgent
        },
        os: {
            name: UOo,
            version: $Oo,
            build_number: eor
        },
        device: {
            locale: gYh,
            model: WOo,
            manufacturer: eor,
            architecture: HOo,
            is_emulator: !1
        },
        debug_meta: {
            images: uYh(n.resources)
        },
        profile: s,
        transactions: [
            {
                name: i.transaction || "",
                id: i.event_id || gI(),
                trace_id: r,
                active_thread_id: S7e,
                relative_start_ns: "0",
                relative_end_ns: ((a - o) * 1e6).toFixed(0)
            }
        ]
    };
}
function lYh(e) {
    return iv(e).op === "pageload";
}
function $0_(e) {
    let t, n = 0;
    const i = {
        samples: [],
        stacks: [],
        frames: [],
        thread_metadata: {
            [S7e]: {
                name: Y9n
            }
        }
    }, r = e.samples[0];
    if (!r) return i;
    const s = r.timestamp, o = Y4(), a = typeof performance.timeOrigin == "number" ? performance.timeOrigin : o || 0, c = a - (o || a);
    return e.samples.forEach((l, u)=>{
        if (l.stackId === void 0) {
            t === void 0 && (t = n, i.stacks[t] = [], n++), i.samples[u] = {
                elapsed_since_start_ns: ((l.timestamp + c - s) * BOo).toFixed(0),
                stack_id: t,
                thread_id: S7e
            };
            return;
        }
        let h = e.stacks[l.stackId];
        const p = [];
        for(; h;){
            p.push(h.frameId);
            const f = e.frames[h.frameId];
            f && i.frames[h.frameId] === void 0 && (i.frames[h.frameId] = {
                function: f.name,
                abs_path: typeof f.resourceId == "number" ? e.resources[f.resourceId] : void 0,
                lineno: f.line,
                colno: f.column
            }), h = h.parentId === void 0 ? void 0 : e.stacks[h.parentId];
        }
        const g = {
            elapsed_since_start_ns: ((l.timestamp + c - s) * BOo).toFixed(0),
            stack_id: n,
            thread_id: S7e
        };
        i.stacks[n] = p, i.samples[u] = g, n++;
    }), i;
}
function H0_(e, t) {
    if (!t.length) return e;
    for (const n of t)e[1].push([
        {
            type: "profile"
        },
        n
    ]);
    return e;
}
function W0_(e) {
    const t = [];
    return uAe(e, (n, i)=>{
        if (i === "transaction") for(let r = 1; r < n.length; r++)n[r]?.contexts?.profile?.profile_id && t.push(n[r]);
    }), t;
}
function dYh(e) {
    return typeof e != "number" && typeof e != "boolean" || typeof e == "number" && isNaN(e) ? (kg && zr.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), !1) : e === !0 || e === !1 ? !0 : e < 0 || e > 1 ? (kg && zr.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${e}.`), !1) : !0;
}
function G0_(e) {
    return e.samples.length < 2 ? (kg && zr.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : e.frames.length ? !0 : (kg && zr.log("[Profiling] Discarding profile because it contains no frames"), !1);
}
function pYh(e) {
    if (tor) return kg && zr.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
    if (!e.isRecording()) return kg && zr.log("[Profiling] Discarding profile because root span was not sampled."), !1;
    const n = Pu()?.getOptions();
    if (!n) return kg && zr.log("[Profiling] Profiling disabled, no options found."), !1;
    const i = n.profilesSampleRate;
    return dYh(i) ? i ? (i === !0 ? !0 : Math.random() < i) ? !0 : (kg && zr.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(i)})`), !1) : (kg && zr.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1) : (kg && zr.warn("[Profiling] Discarding profile because of invalid sample rate."), !1);
}
function j0_(e) {
    if (tor) return kg && zr.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
    if (e.profileLifecycle !== "trace") return !1;
    const t = e.profileSessionSampleRate;
    return dYh(t) ? t ? Math.random() <= t : (kg && zr.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0"), !1) : (kg && zr.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate."), !1);
}
function Jsr(e) {
    return typeof e.profilesSampleRate < "u";
}
function q0_(e, t, n, i) {
    return G0_(n) ? O0_(e, t, n, i) : null;
}
function z0_() {
    return Ynt.size;
}
function K0_(e) {
    const t = Ynt.get(e);
    return t && Ynt.delete(e), t;
}
function Y0_(e, t) {
    if (Ynt.set(e, t), Ynt.size > 30) {
        const n = Ynt.keys().next().value;
        n !== void 0 && Ynt.delete(n);
    }
}
function X0_(e) {
    return !e?.contexts?.profile || !e.contexts || (e.contexts.trace = {
        ...e.contexts?.trace ?? {},
        data: {
            ...e.contexts?.trace?.data ?? {},
            "thread.id": S7e,
            "thread.name": Y9n
        }
    }, e.spans?.forEach((t)=>{
        t.data = {
            ...t.data || {},
            "thread.id": S7e,
            "thread.name": Y9n
        };
    })), e;
}
function bYh(e) {
    let t;
    lYh(e) && (t = sR() * 1e3);
    const n = hYh();
    if (!n) return;
    kg && zr.log(`[Profiling] started profiling span: ${iv(e).description}`);
    const i = gI();
    let r = null;
    nv().setContext("profile", {
        profile_id: i,
        start_timestamp: t
    });
    async function s() {
        if (e && n) {
            if (r) {
                kg && zr.log("[Profiling] profile for:", iv(e).description, "already exists, returning early");
                return;
            }
            return n.stop().then((l)=>{
                if (o && (z_.clearTimeout(o), o = void 0), kg && zr.log(`[Profiling] stopped profiling of span: ${iv(e).description}`), !l) {
                    kg && zr.log(`[Profiling] profiler returned null profile for: ${iv(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                    return;
                }
                r = l, Y0_(i, l);
            }).catch((l)=>{
                kg && zr.log("[Profiling] error while stopping profiler:", l);
            });
        }
    }
    let o = z_.setTimeout(()=>{
        kg && zr.log("[Profiling] max profile duration elapsed, stopping profiling for:", iv(e).description), s();
    }, VOo);
    const a = e.end.bind(e);
    function c() {
        return e ? (s().then(()=>{
            a();
        }, ()=>{
            a();
        }), e) : a();
    }
    e.end = c;
}
var yYh, SYh, kYh;
export { $0_, G0_, H0_, Jsr, K0_, L0_, N0_, O0_, P0_, SYh, W0_, X0_, Y0_, bYh, dYh, j0_, kYh, lYh, pYh, q0_, yYh, z0_ };
var __wakaru_J0__initialized = false;
export function J0_() {
if (__wakaru_J0__initialized) return;
__wakaru_J0__initialized = true;
x(), $u(), _Z(), Q$(), Z0_(), Q0_(), jOo(), yYh = "BrowserProfiling", SYh = (()=>({
        name: yYh,
        setup (e) {
            const t = e.getOptions();
            if (!Jsr(t) && !t.profileLifecycle && (t.profileLifecycle = "manual"), Jsr(t) && !t.profilesSampleRate) {
                kg && zr.log("[Profiling] Profiling disabled, no profiling options found.");
                return;
            }
            const n = mD(), i = n && pD(n);
            if (Jsr(t) && t.profileSessionSampleRate !== void 0 && kg && zr.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled."), Jsr(t)) i && lYh(i) && pYh(i) && bYh(i), e.on("spanStart", (r)=>{
                r === pD(r) && pYh(r) && bYh(r);
            }), e.on("beforeEnvelope", (r)=>{
                if (!z0_()) return;
                const s = W0_(r);
                if (!s.length) return;
                const o = [];
                for (const a of s){
                    const c = a?.contexts, l = c?.profile?.profile_id, u = c?.profile?.start_timestamp;
                    if (typeof l != "string") {
                        kg && zr.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    if (!l) {
                        kg && zr.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    c?.profile && delete c.profile;
                    const h = K0_(l);
                    if (!h) {
                        kg && zr.log(`[Profiling] Could not retrieve profile for span: ${l}`);
                        continue;
                    }
                    const p = q0_(l, u, h, a);
                    p && o.push(p);
                }
                H0_(r, o);
            });
            else {
                const r = j0_(t);
                if (r || kg && zr.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), t.profileLifecycle === "trace") {
                    if (!T7(t)) {
                        kg && zr.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
                        return;
                    }
                    const o = new _Yh;
                    o.initialize(e, r), i && o.notifyRootSpanActive(i), z_.setTimeout(()=>{
                        const a = mD(), c = a && pD(a);
                        c && o.notifyRootSpanActive(c);
                    }, 0);
                }
            }
        },
        processEvent (e) {
            return X0_(e);
        }
    })), kYh = SYh;

}
