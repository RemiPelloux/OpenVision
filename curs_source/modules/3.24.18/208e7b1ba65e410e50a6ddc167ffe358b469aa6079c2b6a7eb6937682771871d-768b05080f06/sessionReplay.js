import { mW } from "./api.js";
import { le, xr } from "./async.js";
import { W_e, utt } from "./automaticDebuggingDataUploadGate.js";
import { rtt } from "./breadcrumbProvenance.js";
import { Ie, Mt } from "./cancellation.js";
import { ott } from "./childProcessCrashDedupe.js";
import { H_e, K1, K_e, Uu, W2, j_e, q_e, z1 } from "./coalescedScopeUpdate.js";
import { at, ot } from "./configuration.js";
import { U_e, ctt } from "./crashReportingRendererTagStore.js";
import { tt } from "./debug-build.js";
import { lt } from "./debug-logger.js";
import { Vtt, tve } from "./debuggingDataRetention.js";
import { G_e, ptt } from "./debuggingDataUploadValidation.js";
import { XB } from "./envelope_5.js";
import { Ye, qe } from "./environmentMainService.js";
import { $B } from "./error.js";
import { N, se } from "./event.js";
import { HC } from "./extraerrordata.js";
import { Ptt, Y_e } from "./fatalOomClassification.js";
import { Ho } from "./global.js";
import { Gp } from "./index_11.js";
import { B } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { Ztt, uve } from "./mainCrashMetricsUploader.js";
import { Pl, mr } from "./map.js";
import { KC } from "./moduleMetadata.js";
import { $e, Jt } from "./network.js";
import { L } from "./path.js";
import { ee } from "./platform.js";
import { Tt, et } from "./productService.js";
import { yW } from "./promisebuffer.js";
import { $tt, nve } from "./rateLimiter.js";
import { ttt } from "./recentSubdirs.js";
import { Itt } from "./register.js";
import { dtt, x_e } from "./rendererCrashContext.js";
import { Ae, Ft } from "./resources.js";
import { _a } from "./sentry.js";
import { On } from "./spanCollector.js";
import { Kn, Mp, Rr, dd, rk } from "./spanUtils.js";
import { gs } from "./storageMain.js";
import { tI } from "./syncpromise.js";
import { Wtt, eve } from "./syntheticSession.js";
import { KG, kS, qG, wA } from "./telemetrySource.js";
import { w } from "./themeMainService.js";
import { FO, Pa, WO, Whe, c1 } from "./tracingService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import { J_e, Q_e, X_e, Z_e, xtt } from "./windowsCommitFromMinidump.js";
import { Ot } from "./worldwide.js";
import B_e from "path";
import * as Btt from "path";
import { promises as O_e } from "fs";
import { app as Tf } from "electron";
import U2 from "fs";
import en from "path";
import { crashReporter as ent } from "electron";
import { promises as j2 } from "fs";
import kf from "node-fetch";
import { webContents as q2 } from "electron";
import { tmpdir as tnt } from "os";
import we from "fs";
function ms() {
    const e = dd();
    return Mp(e).getIsolationScope();
}
function Q3e(e, t) {
    const [n, r] = e;
    return [
        n,
        [
            ...r,
            t
        ]
    ];
}
function X8(e) {
    const t = rk(Ot);
    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Z3e(e) {
    const [t, n] = e;
    let r = JSON.stringify(t);
    function s(i) {
        typeof r == "string" ? r = typeof i == "string" ? r + i : [
            X8(r),
            i
        ] : r.push(typeof i == "string" ? X8(i) : i);
    }
    for (const i of n){
        const [a, o] = i;
        if (s(`
${JSON.stringify(a)}
`), typeof o == "string" || o instanceof Uint8Array) s(o);
        else {
            let l;
            try {
                l = JSON.stringify(o);
            } catch  {
                l = JSON.stringify(HC(o));
            }
            s(l);
        }
    }
    return typeof r == "string" ? r : eFe(r);
}
function eFe(e) {
    const t = e.reduce((s, i)=>s + i.length, 0), n = new Uint8Array(t);
    let r = 0;
    for (const s of e)n.set(s, r), r += s.length;
    return n;
}
function _Fe(e) {
    return new tI((t)=>{
        t(e);
    });
}
function vFe(e) {
    return new tI((t, n)=>{
        n(e);
    });
}
function yFe(e) {
    const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function wFe(e) {
    return `${yFe(e)}${e.projectId}/envelope/`;
}
function EFe(e, t) {
    const n = {
        sentry_version: mW
    };
    return e.publicKey && (n.sentry_key = e.publicKey), t && (n.sentry_client = `${t.name}/${t.version}`), new URLSearchParams(n).toString();
}
function uW(e, t, n) {
    return t || `${wFe(e)}?${EFe(e, n)}`;
}
function pW(e) {
    const t = Kn();
    if (!t) {
        tt && lt.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function jFe(e = 100) {
    const t = new Set;
    function n() {
        return t.size < e;
    }
    function r(a) {
        t.delete(a);
    }
    function s(a) {
        if (!n()) return vFe(yW);
        const o = a();
        return t.add(o), o.then(()=>r(o), ()=>r(o)), o;
    }
    function i(a) {
        if (!t.size) return _Fe(!0);
        const o = Promise.allSettled(Array.from(t)).then(()=>!0);
        if (!a) return o;
        const l = [
            o,
            new Promise((d)=>setTimeout(()=>d(!1), a))
        ];
        return Promise.race(l);
    }
    return {
        get $ () {
            return Array.from(t);
        },
        add: s,
        drain: i
    };
}
function JB(e) {
    let t;
    const n = [];
    let r;
    return KC(e, (s, i)=>{
        if (i === "event" || i === "transaction" || i === "feedback") t = Array.isArray(s) ? s[1] : void 0;
        else if (i === "attachment") {
            const [a, o] = s;
            n.push({
                filename: a.filename,
                attachmentType: a.attachment_type,
                contentType: a.content_type,
                data: o
            });
        } else i === "profile" && (r = s[1]);
    }), t ? [
        t,
        n,
        r
    ] : void 0;
}
function dGe(e) {
    const t = e[kS];
    return typeof t == "string" && KG.test(t) ? t : e["enable-smoke-test-driver"] ? qG : void 0;
}
function Fhe(e, t) {
    if (typeof e != "object" || e === null || Object.getPrototypeOf(e) !== Object.prototype) return !1;
    const n = Object.entries(e), r = t.includes(Pa) ? [
        Whe
    ] : [];
    return t.every((s)=>Object.prototype.hasOwnProperty.call(e, s)) && n.every(([s, i])=>(t.includes(s) || r.includes(s)) && typeof i == "string" && /^[a-z0-9_]{1,64}$/.test(i));
}
function MJe(e, t) {
    return Object.prototype.hasOwnProperty.call(FO, e) && Fhe(t, FO[e]);
}
function PJe(e, t, n) {
    return !Object.prototype.hasOwnProperty.call(WO, e) || typeof t != "number" || !Number.isFinite(t) || t < 0 ? !1 : Fhe(n, WO[e]);
}
async function ett(e, t) {
    const n = Date.now() - t;
    let r;
    try {
        r = await O_e.readdir(e);
    } catch  {
        return [];
    }
    const s = [];
    for (const o of r){
        const l = L(e, o);
        let d;
        try {
            d = await O_e.lstat(l);
        } catch  {
            continue;
        }
        d.isSymbolicLink() || !d.isDirectory() || s.push({
            path: l,
            startMs: d.birthtimeMs || d.mtimeMs
        });
    }
    const i = [];
    let a;
    for (const o of s)o.startMs >= n ? i.push(o.path) : (!a || o.startMs > a.startMs) && (a = o);
    return a && i.push(a.path), i;
}
function ntt(e, t) {
    return {
        ...e,
        data: {
            ...e.data,
            source_process: t
        }
    };
}
function L_e(e) {
    const t = e.contexts?.electron;
    if (!(t == null || typeof t != "object")) return t;
}
function stt(e) {
    if (e.level !== "fatal" || e.tags?.["event.environment"] !== "native") return;
    const n = L_e(e)?.details;
    if (n == null || typeof n != "object") return;
    const r = n;
    if (typeof r.type == "string") return `child-process-gone:${String(r.name)}:${String(r.exitCode)}:${String(r.reason)}`;
}
function itt(e) {
    const t = L_e(e);
    return t === void 0 ? !1 : Object.keys(t).some((n)=>n.startsWith("crashpad."));
}
function att(e, t, n, r) {
    const s = stt(e);
    if (s === void 0) return !1;
    const i = t.peek(s), a = i === void 0 || r - i >= n;
    return a && t.set(s, r), itt(e) ? !1 : !a;
}
function ltt(e) {
    if (e == null || typeof e != "object") return;
    const t = e;
    for (const n of x_e){
        const r = t[n], s = typeof r == "number" ? r : typeof r == "string" ? parseInt(r, 10) : NaN;
        if (Number.isFinite(s) && s > 0) return Math.trunc(s);
    }
}
function q1(e, t, n) {
    try {
        const r = new URL(e), s = r.hostname.toLowerCase(), i = G_e, a = new RegExp(`^${i}\\.s3([.-][a-z0-9-]+)?\\.amazonaws\\.com$`).test(s), o = /^s3([.-][a-z0-9-]+)?\.amazonaws\.com$/.test(s) && (r.pathname === `/${i}` || r.pathname.startsWith(`/${i}/`));
        if (r.protocol !== "https:" || r.username !== "" || r.password !== "") {
            n.warn(`TracingService: rejected debugging data upload URL from ${t} because it is not a plain HTTPS URL`);
            return;
        }
        if (!a && !o) {
            n.warn(`TracingService: rejected debugging data upload URL from ${t} because it is not for the trusted S3 bucket`);
            return;
        }
        return r;
    } catch (r) {
        n.warn(`TracingService: failed to parse debugging data upload URL from ${t}`, r);
        return;
    }
}
function mtt(e, t, n) {
    try {
        const r = U2.realpathSync(t), s = U2.realpathSync(e), i = B_e.relative(r, s);
        if (!(i !== "" && !i.startsWith("..") && !B_e.isAbsolute(i))) {
            n.warn("TracingService: rejected debugging data upload outside the trusted debugging-data directory");
            return;
        }
        if (!U2.statSync(s).isFile()) {
            n.warn("TracingService: rejected debugging data upload because the resolved path is not a file");
            return;
        }
        return s;
    } catch (r) {
        n.warn("TracingService: failed to validate debugging data upload path", r);
        return;
    }
}
function V_e(e) {
    return e.length <= W2 ? e : `${e.slice(0, W2)}\u2026`;
}
function x2(e, t, n) {
    if (e == null) return e;
    if (typeof e == "string") return V_e(e);
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "bigint") return `[BigInt ${e.toString()}]`;
    if (typeof e == "symbol") return `[Symbol ${String(e.description ?? "")}]`;
    if (typeof e == "function") return `[Function ${e.name || "anonymous"}]`;
    if (typeof e != "object") return String(e);
    if (e instanceof Date) return e.toISOString();
    if (e instanceof Error) return {
        name: e.name,
        message: V_e(e.message)
    };
    if (n >= H_e) return "[Truncated]";
    if (t.has(e)) return "[Circular]";
    if (t.add(e), Array.isArray(e)) {
        const i = [];
        for (const a of e.slice(0, K1))i.push(x2(a, t, n + 1));
        return e.length > K1 && i.push(`[... ${e.length - K1} more items]`), i;
    }
    const r = {}, s = Object.entries(e);
    for (const [i, a] of s.slice(0, z1))r[i] = x2(a, t, n + 1);
    return s.length > z1 && (r.__truncatedKeys = s.length - z1), r;
}
function $_e(e, t) {
    return F2(e, t, 0);
}
function F2(e, t, n) {
    if (n > t) return n;
    if (e === null) return n + 4;
    const r = typeof e;
    if (r === "string" || r === "number" || r === "boolean") return n + JSON.stringify(e).length;
    if (r !== "object") return n + 4;
    if (Array.isArray(e)) {
        n += 2;
        for(let i = 0; i < e.length; i++)if (i > 0 && (n += 1), n = F2(e[i], t, n), n > t) return n;
        return n;
    }
    n += 2;
    let s = !0;
    for (const [i, a] of Object.entries(e))if (!(a === void 0 || typeof a == "function" || typeof a == "symbol") && (s || (n += 1), s = !1, n += JSON.stringify(i).length + 1, n = F2(a, t, n), n > t)) return n;
    return n;
}
function htt(e) {
    let t = j_e;
    const n = [];
    for(let r = e.length - 1; r >= 0; r--){
        let s = e[r], i = $_e(s, t);
        if (i > t) {
            if (n.length > 0) break;
            if (s = {
                ...s,
                data: {
                    __truncatedBytes: i
                }
            }, i = $_e(s, t), i > t) continue;
        }
        t -= i, n.push(s);
    }
    return n.reverse();
}
function gtt(e) {
    return e.slice(-Uu).map((n)=>{
        const r = {};
        for (const [s, i] of Object.entries(n))r[s] = x2(i, new WeakSet, 0);
        return r;
    });
}
function ftt(e, t) {
    const n = t?.coalesceMs ?? q_e, r = t?.scheduler ?? K_e;
    let s = [], i, a = !1;
    const o = ()=>{
        if (i !== void 0 && (r.cancel(i), i = void 0), s.length === 0) return;
        const l = htt(s.slice(-Uu));
        s = [], l.length !== 0 && e({
            breadcrumbs: l
        });
    };
    return {
        enqueueBreadcrumbs: (l)=>{
            if (a || l.length === 0) return !1;
            const d = gtt(l);
            return d.length === 0 ? !1 : (s.length + d.length > Uu && o(), s = s.concat(d), s.length > Uu && (s = s.slice(-Uu)), i === void 0 && (i = r.schedule(o, n)), !0);
        },
        flush: o,
        dispose: ()=>{
            a || (a = !0, o());
        }
    };
}
function vtt() {
    if (!G2) {
        G2 = !0;
        try {
            const e = Jt.asBrowserUri("vs/platform/tracing/browser/media/sentryReplayCompressionWorker.js").toString(!0), t = globalThis.trustedTypes?.createPolicy("sentryReplayWorker", {
                createScriptURL: (n)=>n
            });
            B2 = t ? t.createScriptURL(e) : e;
        } catch  {
            B2 = void 0;
        }
    }
    return B2;
}
async function Ttt(e) {
    const t = e.getIntegrationByName("Replay");
    if (t) return t;
    try {
        const { replayIntegration: n, breadcrumbsIntegration: r } = await import("@sentry/browser");
        e.getIntegrationByName("Breadcrumbs") || pW(r({
            console: !0,
            dom: !1,
            fetch: !1,
            history: !1,
            xhr: !1
        }));
        const s = vtt();
        return pW(n({
            ...z_e,
            ...s !== void 0 ? {
                workerUrl: s
            } : {}
        })), e.getIntegrationByName("Replay");
    } catch  {
        return;
    }
}
function ktt(e) {
    const { fromProcess: t, enabled: n, isInternalUser: r, replaysSessionSampleRate: s, previousReplaysSessionSampleRate: i } = e;
    if (t !== "renderer") return;
    const a = Kn();
    if (!a) return;
    const o = a.getOptions();
    o.replaysSessionSampleRate = s;
    const l = n && r;
    V2 = V2.then(()=>ytt({
            client: a,
            previousSampleRate: i,
            newSampleRate: s,
            replayAllowed: l
        })).catch(()=>{});
}
function Stt(e) {
    const { previousSampleRate: t, newSampleRate: n, isRecording: r, roll: s } = e;
    if (r) {
        const a = t <= 0 || n >= t ? 1 : n / t;
        return s < a ? "none" : "stop";
    }
    const i = t <= 0 ? n : t >= 1 ? 0 : Math.max(0, n - t) / (1 - t);
    return s < i ? "start" : "none";
}
async function ytt(e) {
    const { client: t, previousSampleRate: n, newSampleRate: r, replayAllowed: s } = e;
    if (!(s && r > 0)) {
        await t.getIntegrationByName("Replay")?.stop?.();
        return;
    }
    const a = await Ttt(t);
    if (!a || n === r) return;
    const o = a.getReplayId?.() !== void 0, l = Stt({
        previousSampleRate: n,
        newSampleRate: r,
        isRecording: o,
        roll: Math.random()
    });
    l === "stop" ? await a.stop?.() : l === "start" && a.start?.();
}
var z_e, B2, G2, V2;
function Ett(e, t) {
    return t.onProcessConfigUpdate((n)=>{
        const r = On().replaysSessionSampleRate, s = n.isInternalUser === !0, a = n.enabled && s ? n.replaysSessionSampleRate : 0;
        On().enabled = n.enabled, On().allowCrashReportsWhenDisabled = n.allowCrashReportsWhenDisabled, On().loggerSampleRate = n.loggerSampleRate, On().profilesSampleRate = n.profilesSampleRate, On().jsonStringifySampleRate = n.jsonStringifySampleRate, On().replaysSessionSampleRate = a, On().isInternalUser = s, ktt({
            fromProcess: e,
            enabled: n.enabled,
            isInternalUser: s,
            replaysSessionSampleRate: a,
            previousReplaysSessionSampleRate: r
        });
    });
}
function btt(e, t, n, r = jFe(64)) {
    const s = {
        flush: (a)=>(n?.flush(), r.drain(a)),
        send: (a)=>(n?.flush(), r.add(()=>t.sendEnvelope(e, a)).then(()=>({
                    statusCode: 200
                }), (o)=>{
                if (o instanceof $B) return {};
                throw o;
            }))
    }, i = On().buffer;
    for (const a of i)s.send(a);
    return On().buffer = [], On().transport = s, J.None;
}
function Rtt(e, t, n) {
    return e === "main" || n === void 0 || (ms().addScopeListener((r)=>{
        n.enqueueBreadcrumbs(r.getScopeData().breadcrumbs) && ms().clearBreadcrumbs();
    }), n.enqueueBreadcrumbs(ms().getScopeData().breadcrumbs) && (n.flush(), ms().clearBreadcrumbs())), J.None;
}
function Ctt(e, t) {
    const n = new ve;
    n.add(Ett(e, t));
    const r = e === "main" ? void 0 : ftt((s)=>{
        t.sendScopeUpdate(e, s);
    });
    return r !== void 0 && n.add({
        dispose: ()=>r.dispose()
    }), n.add(btt(e, t, r)), n.add(Rtt(e, t, r)), n;
}
function Att(e) {
    return typeof e == "number" && Number.isFinite(e) && e >= 0 && e < Y_e;
}
function Mtt({ exitReason: e, v8OomLocation: t, windowsSystemCommitRemainingBytes: n, platformIsWindows: r = ee }) {
    if (e === "oom") return {
        crashType: "os",
        source: "exit_reason"
    };
    if (r && Att(n)) return {
        crashType: "os",
        source: "windows_commit_exhaustion"
    };
    if (typeof t == "string" && t.length > 0) return {
        crashType: "v8",
        source: "v8_oom_location"
    };
}
function Ntt(e) {
    const t = Ott(e, J_e);
    if (t === void 0) return;
    const n = Ltt(t, [
        7,
        1,
        2
    ]);
    if (n !== void 0) return n * Q_e;
}
function Dtt(e) {
    for (const t of e){
        if (t.attachmentType !== "event.minidump" || t.data === void 0) continue;
        const n = typeof t.data == "string" ? void 0 : t.data;
        if (n === void 0 || n.byteLength === 0) continue;
        const r = Ntt(n);
        if (r !== void 0) return r;
    }
}
function Ott(e, t) {
    if (e.byteLength < Z_e) return;
    const n = new DataView(e.buffer, e.byteOffset, e.byteLength);
    if (n.getUint32(0, !0) !== X_e) return;
    const r = n.getUint32(8, !0), s = n.getUint32(12, !0);
    if (!(r === 0 || s === 0)) for(let i = 0; i < r; i++){
        const a = s + i * 12;
        if (a + 12 > e.byteLength) return;
        const o = n.getUint32(a, !0), l = n.getUint32(a + 4, !0), d = n.getUint32(a + 8, !0);
        if (o === t) return d + l > e.byteLength ? void 0 : e.subarray(d, d + l);
    }
}
function Ltt(e, t) {
    let n = e;
    for(let r = 0; r < t.length; r++){
        if (n === void 0) return;
        const s = t[r], i = r === t.length - 1, a = Utt(n, s);
        if (a === void 0) return;
        if (i) return a.wireType !== 0 ? void 0 : a.varint;
        if (a.wireType !== 2 || a.bytes === void 0) return;
        n = a.bytes;
    }
}
function Utt(e, t) {
    let n = 0;
    for(; n < e.byteLength;){
        const r = $2(e, n);
        if (r === void 0) return;
        n = r.nextOffset;
        const s = r.value & 7, i = r.value >>> 3;
        if (s === 0) {
            const a = $2(e, n);
            if (a === void 0) return;
            if (n = a.nextOffset, i === t) return {
                wireType: s,
                varint: a.value
            };
            continue;
        }
        if (s === 2) {
            const a = $2(e, n);
            if (a === void 0) return;
            n = a.nextOffset;
            const o = n + a.value;
            if (o > e.byteLength) return;
            const l = e.subarray(n, o);
            if (n = o, i === t) return {
                wireType: s,
                bytes: l
            };
            continue;
        }
        if (s === 1) {
            n += 8;
            continue;
        }
        if (s === 5) {
            n += 4;
            continue;
        }
        return;
    }
}
function $2(e, t) {
    let n = 0, r = 0, s = t;
    for(; s < e.byteLength && r <= 28;){
        const i = e[s++];
        if (n |= (i & 127) << r, (i & 128) === 0) return {
            value: n >>> 0,
            nextOffset: s
        };
        r += 7;
    }
}
function Ftt(e) {
    return e == null ? !1 : eve.test(e);
}
async function Gtt(e, { nowMs: t, sessionStartMs: n, limits: r = tve }) {
    let s;
    try {
        s = await j2.readdir(e);
    } catch  {
        return [];
    }
    const i = [];
    let a = 0;
    for (const d of s){
        const u = Btt.join(e, d);
        try {
            const m = await j2.lstat(u);
            m.isFile() && (a += m.size, i.push({
                filePath: u,
                size: m.size,
                mtimeMs: m.mtimeMs
            }));
        } catch  {}
    }
    i.sort((d, u)=>d.mtimeMs - u.mtimeMs);
    const o = Math.max(n, t - r.inUseWindowMs), l = [];
    for (const d of i){
        const u = t - d.mtimeMs > r.maxAgeMs, m = a > r.maxTotalBytes && d.mtimeMs < o;
        if (!u && !m) break;
        try {
            await j2.unlink(d.filePath), l.push(d.filePath), a -= d.size;
        } catch (f) {
            f.code === "ENOENT" && (a -= d.size);
        }
    }
    return l;
}
var ft, mve;
export { $2, $_e, Att, B2, Ctt, Dtt, EFe, Ett, F2, Fhe, Ftt, G2, Gtt, JB, L_e, Ltt, MJe, Mtt, Ntt, Ott, PJe, Q3e, Rtt, Stt, Ttt, Utt, V2, V_e, X8, Z3e, _Fe, att, btt, dGe, eFe, ett, ft, ftt, gtt, htt, itt, jFe, ktt, ltt, ms, mtt, mve, ntt, pW, q1, stt, uW, vFe, vtt, wFe, x2, yFe, ytt, z_e };
var __wakaru_wtt_initialized = false;
export function wtt() {
if (__wakaru_wtt_initialized) return;
__wakaru_wtt_initialized = true;
"use strict";
h(), $e(), _a(), z_e = {
    maskAllText: !1,
    maskAllInputs: !1,
    blockAllMedia: !1,
    useCompression: !0
}, G2 = !1, V2 = Promise.resolve();

}
var __wakaru_nnt_initialized = false;
export function nnt() {
if (__wakaru_nnt_initialized) return;
__wakaru_nnt_initialized = true;
"use strict";
h(), le(), Mt(), se(), j(), mr(), Ft(), ttt(), rtt(), ott(), ctt(), dtt(), at(), Ye(), te(), utt(), ptt(), Ro(), Tt(), pt(), Ho(), Itt(), Ptt(), xtt(), Gp(), XB(), Wtt(), wA(), c1(), Vtt(), $tt(), Ztt(), ft = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.environmentService = e, this.loggerMainService = t, this.logService = n, this.productService = r, this.windowsMainService = s, this.configurationService = i, this._buffer = [], this._clientTracingConfig = {
            ...ft.DEFAULT_CLIENT_TRACING_CONFIG
        }, this._replayConfig = {
            ...ft.DEFAULT_REPLAY_CONFIG
        }, this._automaticUploadGate = new W_e, this._startedAtMs = Date.now(), this._debuggingDataPruner = this._register(new xr(()=>void this._pruneDebuggingData(), ft.DEBUGGING_DATA_PRUNE_DELAY_MS)), this._isLegacyPrivacyMode = null, this._isInternalUser = !1, this._transport = null, this._userEmail = null, this._userId = null, this._watchedRenderers = new Map, this._watcherDisposables = this._register(new ve), this._failedStatusCodes = [], this._eventIdToProfile = new Pl(100), this._rateLimiter = new nve(60 * 1e3), this._processConfigUpdateEvent = this._register(new N), this._rendererCrashTagStore = new U_e, this._crashMetricDedupeKeys = new Pl(ft.CRASH_METRIC_DEDUPE_MAX_ENTRIES), this._mainMetricUploadBuffer = [], this._shutdownHasBegun = !1, this.onProcessConfigUpdate = this._processConfigUpdateEvent.event, this._mainMetricsUploader = new uve(this.logService, this.productService, this.configurationService, ()=>this._isLegacyPrivacyMode, ()=>this._privateInferenceLockdown !== "disabled", kf, ()=>this._lastRegisteredUserIsDev, dGe(this.environmentService.args)), this._initializeTransport().then(()=>this._register(Ctt("main", this))).catch((a)=>this.logService.error("TracingService: failed to initialize transport", a)), Tf.on("before-quit", ()=>this.shutdownHasBegun()), this._debuggingDataPruner.schedule(), this._register(this.windowsMainService.onDidDestroyWindow((a)=>{
            this._rendererCrashTagStore.removeWindow(a.id);
        })), this._register(this.windowsMainService.onDidChangeWindowsCount(()=>{
            const a = new Set(this.windowsMainService.getWindows().map((o)=>o.id));
            this._rendererCrashTagStore.reconcileWithOpenWorkbenchWindows(a);
        })), this._register(this.windowsMainService.onDidOpenWindow((a)=>{
            const o = a.webContents;
            if (!o) return;
            let l = o.getOSProcessId();
            o.on("did-finish-load", ()=>{
                l = o.getOSProcessId();
            });
            const d = (u, m)=>{
                if (m.reason === "clean-exit" || m.reason === "normal-exit") return;
                const f = this._getCrashReportingTagsByWorkbenchWindowId(a.id) ?? this._getCrashReportingTagsByRendererOsPid(l), v = `${l}:application.crash`;
                if (this._claimCrashMetricDedupeKey(v) && this._uploadMainMetric("application.crash", {
                    "crash.process": "renderer",
                    ...f ?? {}
                }), m.reason === "oom") {
                    const T = `${l}:application.oom`;
                    this._claimCrashMetricDedupeKey(T) && this._uploadMainMetric("application.oom", {
                        "crash.process": "renderer",
                        "crash.type": "os",
                        ...f ?? {}
                    });
                }
                if (this._claimCrashMetricDedupeKey(`${l}:renderer_process_gone.event`)) try {
                    gs(new mve(m.reason, m.exitCode, a.id), {
                        captureContext: {
                            level: "warning",
                            tags: {
                                "event.process": "renderer",
                                client_error_type: "renderer_process_gone",
                                "gone.reason": m.reason,
                                "gone.exit_code": String(m.exitCode ?? "unknown"),
                                "gone.during_shutdown": String(this._shutdownHasBegun),
                                window_id: String(a.id),
                                ...f ?? {}
                            },
                            extra: {
                                renderer_pid: l
                            },
                            fingerprint: [
                                "renderer_process_gone"
                            ]
                        }
                    });
                } catch (T) {
                    this.logService.warn(`TracingService: failed to emit renderer_process_gone event: ${T}`);
                }
            };
            o.on("render-process-gone", d), this._register({
                dispose: ()=>o.removeListener("render-process-gone", d)
            });
        }));
    }
    async _getDirectorySize(e) {
        let t = 0;
        try {
            const n = await we.promises.readdir(e, {
                withFileTypes: !0
            });
            for (const r of n){
                const s = en.join(e, r.name);
                if (r.isDirectory()) t += await this._getDirectorySize(s);
                else if (r.isFile()) {
                    const i = await we.promises.stat(s);
                    t += i.size;
                }
            }
        } catch (n) {
            this.logService.warn(`TracingService: error calculating directory size for ${e}`, n);
        }
        return t;
    }
    async _collectRecentFiles(e, t) {
        const n = Date.now() - t, r = [], s = async (i)=>{
            let a;
            try {
                a = await we.promises.readdir(i, {
                    withFileTypes: !0
                });
            } catch  {
                return;
            }
            for (const o of a){
                const l = en.join(i, o.name);
                if (!o.isSymbolicLink()) {
                    if (o.isDirectory()) await s(l);
                    else if (o.isFile()) try {
                        const d = await we.promises.stat(l);
                        d.mtimeMs >= n && r.push({
                            absPath: l,
                            relPath: en.relative(e, l).split(en.sep).join(en.posix.sep),
                            size: d.size,
                            mtimeMs: d.mtimeMs
                        });
                    } catch  {}
                }
            }
        };
        try {
            await s(e);
        } catch (i) {
            this.logService.warn(`TracingService: error collecting recent files from ${e}`, i);
        }
        return r.sort((i, a)=>a.mtimeMs - i.mtimeMs), r;
    }
    async _flushAllLogs() {
        this.logService.info("TracingService: flushing all logs"), this.logService.flush();
        for (const t of this.loggerMainService.getRegisteredLoggers())this.loggerMainService.getLogger(t.resource)?.flush();
        const e = {
            id: "_cursor.flushExtensionHostLogs",
            from: "menu"
        };
        for (const t of this.windowsMainService.getWindows())t.sendWhenReady("vscode:runAction", Ie.None, e);
        await new Promise((t)=>setTimeout(t, 100));
    }
    _getDebuggingDataDir() {
        return en.join(Tf.getPath("userData"), ft.DEBUGGING_DATA_DIR_NAME);
    }
    async _pruneDebuggingData() {
        const e = await Gtt(this._getDebuggingDataDir(), {
            nowMs: Date.now(),
            sessionStartMs: this._startedAtMs
        });
        e.length > 0 && this.logService.info(`TracingService: pruned ${e.length} debugging data file(s)`);
    }
    async _readProcessMonitorData(e) {
        const t = en.join(e, ft.PROCESS_MONITOR_DIR_NAME);
        if (!we.existsSync(t)) return "";
        const r = (await we.promises.readdir(t)).filter((i)=>i.endsWith(".log")).map((i)=>({
                name: i,
                bucket: Number(i.slice(0, -4))
            })).filter((i)=>Number.isFinite(i.bucket)).sort((i, a)=>i.bucket - a.bucket), s = [];
        for (const i of r)try {
            const a = await we.promises.readFile(en.join(t, i.name), {
                encoding: "utf8"
            });
            a.length > 0 && s.push(a);
        } catch  {
            this.logService.trace("TracingService: skipping unreadable process-monitor shard", i.name);
        }
        return s.join("");
    }
    async captureAndSendDebuggingData(e, t) {
        const n = t.uploadUrl, r = n === void 0 || n === "";
        r && this.logService.info("TracingService: no upload URL provided, saving debugging data locally");
        const s = (await import("archiver")).default, i = this._getDebuggingDataDir();
        we.existsSync(i) || we.mkdirSync(i, {
            recursive: !0
        });
        const a = t.captureNewHeapSnapshot === !0 || t.rendererHeapSnapshotFile !== void 0, o = t.includeLogs !== !1, l = t.includeFeatureFlagsAndExtensionSummary !== !1, d = t.featureGatesData !== void 0 || t.extensionsData !== void 0, u = t.agentTranscriptsDir !== void 0 && (this._isLegacyPrivacyMode === !1 || t.userInitiated === !0), m = a ? t.rendererHeapSnapshotFile ?? en.join(i, `renderer-${e}-${Date.now()}.heapsnapshot`) : void 0;
        if (m !== void 0 && t.rendererHeapSnapshotFile === void 0 && this._isLegacyPrivacyMode === !1) {
            const ce = q2.getAllWebContents().filter((R)=>R.getOSProcessId() === e)[0];
            if (ce !== void 0) try {
                this.logService.info("TracingService: taking heap snapshot"), await ce.takeHeapSnapshot(m);
            } catch (R) {
                this.logService.warn("TracingService: failed to take heap snapshot", R);
            }
        }
        const f = Tf.getPath("userData"), v = en.join(f, "User");
        let T, S = !1, k;
        const y = 2 * 1024 * 1024 * 1024;
        if (t.excludeUserDirectory === !0) S = !0, k = "Excluded by request";
        else if (this._isLegacyPrivacyMode !== !1 && t.userInitiated !== !0) S = !0, k = "Legacy privacy mode is enabled";
        else if (we.existsSync(v)) {
            this.logService.info("TracingService: checking user directory size");
            try {
                T = await this._getDirectorySize(v);
                const ce = T / (1024 * 1024 * 1024);
                this.logService.info(`TracingService: user directory size is ${ce.toFixed(2)} GB`), T > y && (S = !0, k = `Directory size (${ce.toFixed(2)} GB) exceeds 2 GB limit`, this.logService.info(`TracingService: skipping user directory - ${k}`));
            } catch (ce) {
                S = !0, k = "Error calculating directory size", this.logService.warn("TracingService: error checking user directory size, will skip", ce);
            }
        } else we.existsSync(v) || (S = !0, k = "Directory does not exist");
        const b = [];
        let I = !1, G;
        if (t.agentTranscriptsDir === void 0) I = !0, G = "Not requested";
        else if (!u) I = !0, G = "Legacy privacy mode is enabled";
        else if (!we.existsSync(t.agentTranscriptsDir)) I = !0, G = "Directory does not exist";
        else {
            this.logService.info("TracingService: collecting recent agent transcripts");
            const ce = await this._collectRecentFiles(t.agentTranscriptsDir, ft.RECENT_AGENT_TRANSCRIPTS_WINDOW_MS);
            let R = 0;
            for (const A of ce){
                if (R + A.size > ft.MAX_AGENT_TRANSCRIPTS_SIZE_BYTES) {
                    G = `Truncated at ${ft.MAX_AGENT_TRANSCRIPTS_SIZE_BYTES} byte limit`;
                    break;
                }
                R += A.size, b.push({
                    absPath: A.absPath,
                    relPath: A.relPath
                });
            }
        }
        const U = t.includeProcessDiagnostics === !0, X = en.join(i, `process-diagnostics-${Date.now()}.jsonl`);
        let W = !1, K;
        if (!U) K = "Not requested";
        else {
            this.logService.info("TracingService: collecting process diagnostics history");
            try {
                const ce = await this._readProcessMonitorData(f);
                ce.length === 0 ? K = "No process diagnostics data available" : (await we.promises.writeFile(X, ce), W = !0);
            } catch (ce) {
                K = "Error reading process diagnostics data", this.logService.warn("TracingService: failed to collect process diagnostics history", ce);
            }
        }
        const H = en.join(i, `process-snapshot-${Date.now()}.json`);
        let ue = !1;
        if (t.processSnapshotData !== void 0) {
            this.logService.info("TracingService: writing process snapshot file");
            try {
                await we.promises.writeFile(H, t.processSnapshotData), ue = !0;
            } catch (ce) {
                this.logService.warn("TracingService: failed to write process snapshot file", ce);
            }
        }
        const Ee = en.join(i, `metadata-${Date.now()}.json`), me = this._getCrashReportingTagsByRendererOsPid(e)?.layout, Nt = t.isGlassRenderer ?? me === "glass";
        this.logService.info("TracingService: writing metadata file");
        try {
            await we.promises.writeFile(Ee, JSON.stringify({
                debuggerEvent: t.debuggerEvent,
                debuggerScripts: t.debuggerScripts,
                description: t.description,
                heapStatistics: t.rendererHeapStatistics,
                isGlassRenderer: Nt,
                layout: me,
                requestedData: {
                    heapSnapshot: a,
                    logs: o,
                    featureFlagsAndExtensionSummary: l && d,
                    userDirectory: t.excludeUserDirectory !== !0,
                    agentTranscripts: t.agentTranscriptsDir !== void 0,
                    processDiagnostics: U,
                    processSnapshot: t.processSnapshotData !== void 0
                },
                version: this.productService.version,
                workspaceId: this._isLegacyPrivacyMode === !1 ? t.workspaceId : void 0,
                userDirectory: {
                    included: !S,
                    skipped: S,
                    skipReason: k,
                    sizeBytes: T
                },
                agentTranscripts: {
                    included: b.length > 0,
                    skipped: I,
                    skipReason: G,
                    fileCount: b.length
                },
                processDiagnostics: {
                    included: W,
                    skipped: !W,
                    skipReason: K
                },
                processSnapshot: {
                    included: ue
                }
            }, null, 2));
        } catch (ce) {
            this.logService.warn("TracingService: failed to write metadata file", ce);
        }
        const Le = en.join(i, `feature-gates-${Date.now()}.json`);
        if (l && t.featureGatesData) {
            this.logService.info("TracingService: writing feature gates file");
            try {
                await we.promises.writeFile(Le, t.featureGatesData);
            } catch (ce) {
                this.logService.warn("TracingService: failed to write feature gates file", ce);
            }
        }
        const re = en.join(i, `extensions-summary-${Date.now()}.json`);
        if (l && t.extensionsData) {
            this.logService.info("TracingService: writing extensions summary file");
            try {
                await we.promises.writeFile(re, t.extensionsData);
            } catch (ce) {
                this.logService.warn("TracingService: failed to write extensions summary file", ce);
            }
        }
        const z = en.join(i, `debugging-data-${Date.now()}.zip`);
        o && await this._flushAllLogs();
        const he = en.join(f, "logs"), de = o ? await ett(he, ft.RECENT_LOGS_WINDOW_MS) : [];
        try {
            this.logService.info("TracingService: creating debugging data zip"), await new Promise((ce, R)=>{
                const A = s("zip"), M = we.createWriteStream(z);
                M.on("close", ()=>ce()), A.on("error", (Y)=>R(Y)), A.pipe(M), m !== void 0 && this._isLegacyPrivacyMode === !1 && we.existsSync(m) && A.file(m, {
                    name: "snapshots/renderer.heapsnapshot"
                });
                for (const Y of de)A.directory(Y, en.posix.join("logs", en.basename(Y)));
                !S && we.existsSync(v) && A.directory(v, "user");
                for (const Y of b)A.file(Y.absPath, {
                    name: en.posix.join("agent-transcripts", Y.relPath)
                });
                we.existsSync(Ee) && A.file(Ee, {
                    name: "metadata.json"
                }), we.existsSync(Le) && A.file(Le, {
                    name: "feature-gates.json"
                }), we.existsSync(re) && A.file(re, {
                    name: "extensions-summary.json"
                }), W && we.existsSync(X) && A.file(X, {
                    name: "process-diagnostics/process-history.jsonl"
                }), ue && we.existsSync(H) && A.file(H, {
                    name: "process-diagnostics/process-snapshot.json"
                }), A.finalize();
            });
        } catch (ce) {
            this.logService.warn("TracingService: failed to create debugging data zip", ce);
        }
        let _e = !1;
        if (!r) try {
            this.logService.info("TracingService: uploading debugging data");
            const ce = we.createReadStream(z), R = await kf(n, {
                method: "PUT",
                body: ce,
                headers: {
                    "Content-Length": we.statSync(z).size.toString()
                }
            });
            R.ok ? (this.logService.info("TracingService: successfully uploaded debugging data"), _e = !0) : this.logService.warn(`TracingService: upload failed with status ${R.status}`);
        } catch (ce) {
            this.logService.warn("TracingService: failed to upload debugging data", ce);
        }
        if (m !== void 0 && we.existsSync(m) && await we.promises.unlink(m), we.existsSync(Ee) && await we.promises.unlink(Ee), we.existsSync(Le) && await we.promises.unlink(Le), we.existsSync(re) && await we.promises.unlink(re), we.existsSync(X) && await we.promises.unlink(X), we.existsSync(H) && await we.promises.unlink(H), this._debuggingDataPruner.schedule(), _e) {
            we.existsSync(z) && await we.promises.unlink(z);
            return;
        } else return this.logService.info(`TracingService: debugging data saved locally at ${z}`), z;
    }
    _isEgressPolicyPending() {
        return this._isLegacyPrivacyMode === null || this._privateInferenceLockdown === void 0;
    }
    async incrementMainMetric(e, t) {
        if (!MJe(e, t)) {
            this.logService.warn("TracingService: dropped a main-process metric whose name or tags are not listed in MainMetricStat");
            return;
        }
        this._uploadMainMetric(e, t);
    }
    _uploadMainMetric(e, t, n = 1) {
        if (this._isEgressPolicyPending()) {
            this._mainMetricUploadBuffer.length < ft.MAX_STARTUP_BUFFER_SIZE && this._mainMetricUploadBuffer.push({
                kind: "increment",
                stat: e,
                tags: t,
                value: n
            });
            return;
        }
        this._mainMetricsUploader.uploadIncrement(e, t, n);
    }
    async distributionMainMetric(e, t, n) {
        if (!PJe(e, t, n)) {
            this.logService.warn("TracingService: dropped a main-process distribution whose name, value or tags are not listed in MainDistributionStat");
            return;
        }
        if (this._isEgressPolicyPending()) {
            this._mainMetricUploadBuffer.length < ft.MAX_STARTUP_BUFFER_SIZE && this._mainMetricUploadBuffer.push({
                kind: "distribution",
                stat: e,
                tags: n,
                value: t
            });
            return;
        }
        this._mainMetricsUploader.uploadDistribution(e, n, t);
    }
    _flushMainMetricUploadBuffer() {
        if (this._mainMetricUploadBuffer.length === 0) return;
        this.logService.debug(`TracingService: flushing main metric upload buffer with ${this._mainMetricUploadBuffer.length} items`);
        const e = this._mainMetricUploadBuffer.splice(0);
        for (const t of e)t.kind === "distribution" ? this._mainMetricsUploader.uploadDistribution(t.stat, t.tags, t.value) : this._mainMetricsUploader.uploadIncrement(t.stat, t.tags, t.value);
    }
    _claimCrashMetricDedupeKey(e) {
        if (e === void 0) return !0;
        const t = Date.now(), n = this._crashMetricDedupeKeys.peek(e);
        return n !== void 0 && t - n < ft.CRASH_METRIC_DEDUPE_TTL_MS ? !1 : (this._crashMetricDedupeKeys.set(e, t), !0);
    }
    getIsWatchingForCrashes() {
        return Promise.resolve(this._watchedRenderers.size > 0);
    }
    async sendEnvelope(e, t) {
        if (this._isEgressPolicyPending()) {
            this._buffer.length < ft.MAX_STARTUP_BUFFER_SIZE && this._buffer.push([
                e,
                t
            ]);
            return;
        }
        return e === "main" ? this._handleEnvelopeMain(t) : this._handleEnvelopeNotMain(e, t);
    }
    async sendScopeUpdate(e, t) {
        if (e === "main") {
            this.logService.warn("TracingService: unexpected scope update from main");
            return;
        }
        const n = ms();
        t.breadcrumbs !== void 0 && t.breadcrumbs.forEach((r)=>n?.addBreadcrumb(ntt(r, e)));
    }
    async setClientTracingConfig(e) {
        this._clientTracingConfig = {
            globalSampleRate: Math.min(1, Math.max(0, e.globalSampleRate)),
            loggerSampleRate: Math.min(1, Math.max(0, e.loggerSampleRate)),
            minidumpSampleRate: Math.min(1, Math.max(0, e.minidumpSampleRate)),
            errorRateLimit: Math.max(0, e.errorRateLimit),
            performanceUnitRateLimit: Math.max(0, e.performanceUnitRateLimit),
            profilesSampleRate: Math.min(1, Math.max(0, e.profilesSampleRate)),
            jsonStringifySampleRate: Math.min(1, Math.max(0, e.jsonStringifySampleRate))
        }, this.logService.debug(`TracingService: set client tracing config to ${JSON.stringify(this._clientTracingConfig)}`), this._fireProcessConfigUpdate();
    }
    async setSessionReplayConfig(e) {
        this._replayConfig = {
            replaysSessionSampleRate: Math.min(1, Math.max(0, e.replaysSessionSampleRate))
        }, this._isInternalUser = e.isInternalUser ?? !1, this.logService.debug(`TracingService: set session replay config to ${JSON.stringify(this._replayConfig)}, isInternalUser=${this._isInternalUser}`), this._fireProcessConfigUpdate();
    }
    async setDebuggingDataUploadUrl(e) {
        if (e === "") {
            this._automaticUploadGate.clearUploadUrl();
            return;
        }
        const t = q1(e, "setDebuggingDataUploadUrl", this.logService);
        if (!t) return;
        const n = this._automaticUploadGate.setUploadUrl(t, Date.now());
        n === "noLifetime" ? this.logService.warn("TracingService: rejected debugging data upload URL from setDebuggingDataUploadUrl because it has no presigned lifetime") : n === "privacyModeNotKnownOff" && this.logService.info("TracingService: ignored debugging data upload URL because privacy mode is on or not yet known");
    }
    async setIsPrivacyModeEnabled(e) {
        this._automaticUploadGate.setPrivacyModeEnabled(e);
    }
    async setIsLegacyPrivacyMode(e) {
        const t = this._isLegacyPrivacyMode;
        this._isLegacyPrivacyMode = e, this._automaticUploadGate.setLegacyPrivacyMode(e), this._releaseHeldEgressIfPolicyKnown(), t !== this._isLegacyPrivacyMode && (this.logService.debug(`TracingService: set is legacy privacy mode to ${e}`), this._fireProcessConfigUpdate());
    }
    async setPrivateInferenceLockdown(e) {
        const t = this._privateInferenceLockdown;
        this._privateInferenceLockdown = e, e === "enabled" && (this._buffer = [], this._mainMetricUploadBuffer.length = 0), this._releaseHeldEgressIfPolicyKnown(), t !== e && (this.logService.info(`TracingService: private inference lockdown ${e}`), this._fireProcessConfigUpdate());
    }
    _releaseHeldEgressIfPolicyKnown() {
        if (!this._isEgressPolicyPending()) {
            if (this._buffer.length > 0) {
                this.logService.debug(`TracingService: flushing buffer with ${this._buffer.length} items`);
                const e = this._buffer;
                this._buffer = [], e.forEach(([t, n])=>this.sendEnvelope(t, n));
            }
            this._flushMainMetricUploadBuffer();
        }
    }
    async getIsLegacyPrivacyMode() {
        return this._isLegacyPrivacyMode;
    }
    async setUser(e, t) {
        const n = this._userEmail, r = this._userId;
        this._userEmail = e, this._userId = t, this._userEmail !== null || this._userId !== null ? ms().setUser({
            email: this._userEmail ?? void 0,
            id: this._userId ?? void 0
        }) : ms().setUser(null), ms().setTag("synthetic_session", Ftt(this._userEmail) ? "true" : "false"), (n !== this._userEmail || r !== this._userId) && this.logService.debug(`TracingService: set user to ${JSON.stringify(ms()?.getUser())}`);
    }
    async toggleWatchForCrashes() {
        return this._watchedRenderers.size > 0 ? (this._unwatchRendererProcesses(), !1) : (this._watchRendererProcesses(), !0);
    }
    _fireProcessConfigUpdate() {
        const e = this._privateInferenceLockdown !== "disabled", t = {
            enabled: this._isLegacyPrivacyMode !== !0 ? this._clientTracingConfig.globalSampleRate > 0 : !1,
            allowCrashReportsWhenDisabled: this._isLegacyPrivacyMode === !0 && !e,
            loggerSampleRate: this._isLegacyPrivacyMode !== !0 ? this._clientTracingConfig.loggerSampleRate : 0,
            profilesSampleRate: this._isLegacyPrivacyMode !== !0 ? this._clientTracingConfig.profilesSampleRate : 0,
            jsonStringifySampleRate: this._isLegacyPrivacyMode !== !0 ? this._clientTracingConfig.jsonStringifySampleRate : 0,
            replaysSessionSampleRate: this._isLegacyPrivacyMode !== !0 ? this._replayConfig.replaysSessionSampleRate : 0,
            isInternalUser: this._isInternalUser
        };
        this._processConfigUpdateEvent.fire(t), this.logService.debug(`TracingService: fired process config update ${JSON.stringify(t)}`);
    }
    async _initializeTransport() {
        if (this._transport !== null) return;
        const e = Kn()?.getDsn();
        if (e === void 0) {
            this.logService.warn("TracingService: no dsn found");
            return;
        }
        const t = On().sentry.makeElectronOfflineTransport;
        if (t === void 0 || typeof t != "function") {
            this.logService.warn("TracingService: transport constructor is not available");
            return;
        }
        this._transport = t()({
            bufferSize: ft.MAX_TRANSPORT_BUFFER_SIZE,
            url: uW(e, Kn()?.getOptions().tunnel, Kn()?.getSdkMetadata()?.sdk),
            recordDroppedEvent: (n, r)=>{
                this.logService.debug(`TracingService: dropped ${r} event due to ${n}`);
            }
        }), this.logService.debug("TracingService: created transport");
    }
    _handleEnvelopeNotMain(e, t) {
        const n = JB(t);
        if (n === void 0) {
            const a = t[1].map((l)=>l[0]?.type);
            if (a.includes("replay_event") || a.includes("replay_recording")) {
                this._sendReplayEnvelope(t);
                return;
            }
            this.logService.warn("TracingService: dropping unsupported envelope");
            return;
        }
        const [r, s, i] = n;
        delete r.environment, delete r.sdk?.name, delete r.sdk?.version, delete r.sdk?.packages, r.tags = {
            ...r.tags,
            "event.process": e
        }, r.event_id !== void 0 && i !== void 0 && this._eventIdToProfile.set(r.event_id, i), Rr()?.captureEvent(r, {
            attachments: s
        });
    }
    _handleEnvelopeMain(e) {
        const t = JB(e);
        if (t === void 0) {
            if (this._isLegacyPrivacyMode === !0 || this._privateInferenceLockdown !== "disabled") {
                this.logService.debug("TracingService: dropping non-event envelope due to privacy policy");
                return;
            }
            return this._internalSendEnvelope(e);
        }
        const [n, r] = t, s = n.tags?.["event.process"], i = s === "main" || s === "renderer" || s === "browser", a = this._lookupRendererTagsForFatalEvent(n);
        a !== void 0 && (n.tags = {
            ...n.tags,
            ...a
        });
        const o = s === "renderer" ? this._extractRendererCrashPid(n) ?? this._parseOomRendererPidTag(n) : void 0, l = s === "browser" ? "main" : String(s);
        if (n.level === "fatal" && i) {
            const v = o !== void 0 ? `${o}:application.crash` : void 0;
            this._claimCrashMetricDedupeKey(v) && this._uploadMainMetric("application.crash", {
                "crash.process": l,
                ...a ?? {}
            });
        }
        const d = n.contexts?.electron?.["crashpad.v8-oom-location"], u = Dtt(r), m = Mtt({
            exitReason: n.tags?.["exit.reason"],
            v8OomLocation: d,
            windowsSystemCommitRemainingBytes: u
        });
        if (n.level === "fatal" && i && m !== void 0) {
            const v = o !== void 0 ? `${o}:application.oom` : void 0;
            this._claimCrashMetricDedupeKey(v) && this._uploadMainMetric("application.oom", {
                "crash.process": l,
                "crash.type": m.crashType,
                ...m.source === "windows_commit_exhaustion" ? {
                    "oom.source": m.source
                } : {},
                ...a ?? {}
            });
        }
        if (this._isLegacyPrivacyMode === !0 && n.tags?.["event.process"] !== "unknown" && this._writeSentryEventToMirror(n), this._shouldDropEvent(n, r)) return;
        const f = n.tags?.["event.process"];
        if ((f === void 0 || f === "browser") && (n.tags = {
            ...n.tags,
            "event.process": "main"
        }), n.event_id !== void 0) {
            const v = this._eventIdToProfile.get(n.event_id);
            v !== void 0 && (this._eventIdToProfile.remove(n.event_id), e = Q3e(e, [
                {
                    type: "profile"
                },
                v
            ]));
        }
        this._internalSendEnvelope(e);
    }
    _writeSentryEventToMirror(e) {
        try {
            if (this._sentryMirrorLogger === void 0) {
                const t = Ae(this.environmentService.logsHome, "cursor-sentry-events.log");
                this._sentryMirrorLogger = this._register(this.loggerMainService.createLogger(t, {
                    id: "cursorSentryEvents",
                    name: "Cursor Sentry Events"
                }));
            }
            this._sentryMirrorLogger.info(JSON.stringify(e));
        } catch (t) {
            this.logService.debug("TracingService: failed to mirror Sentry event locally", t);
        }
    }
    _shouldDropEvent(e, t) {
        if (this._privateInferenceLockdown !== "disabled" || e.tags?.["event.process"] === "unknown" || att(e, this._crashMetricDedupeKeys, ft.CRASH_METRIC_DEDUPE_TTL_MS, Date.now())) return !0;
        e.contexts?.electron?.["crashpad.exiting"] && (e.level = "error");
        const n = e.tags?.force_upload === "forced";
        if (this._isLegacyPrivacyMode === !0 && !n && e.level !== "fatal") return !0;
        if (e.exception?.values !== void 0) {
            for (const r of e.exception.values)if (this._shouldDropException(r)) return !0;
        }
        for (const r of t)if (this._shouldDropAttachment(r)) return !0;
        return this._shouldDropEventBasedOnRateLimit(e);
    }
    _shouldDropException(e) {
        return !1;
    }
    _shouldDropAttachment(e) {
        return e.attachmentType === "event.minidump" ? Math.random() >= this._clientTracingConfig.minidumpSampleRate : !1;
    }
    _shouldDropEventBasedOnRateLimit(e) {
        const t = this._clientTracingConfig.errorRateLimit, n = this._clientTracingConfig.performanceUnitRateLimit;
        return e.type === "transaction" ? this._rateLimiter.increment("performanceUnit", 1) > n : this._rateLimiter.increment("error", 1) > t;
    }
    _internalSendEnvelope(e) {
        if (this._privateInferenceLockdown !== "disabled") return;
        const t = this._clientTracingConfig.globalSampleRate;
        if (t <= 0 || t < 1 && Math.random() >= t) {
            this.logService.debug("TracingService: dropping envelope due to global sample rate");
            return;
        }
        this._transport?.send(e).then((n)=>{
            const r = n.statusCode ?? 0;
            r !== 200 && !this._failedStatusCodes.includes(r) && (this._failedStatusCodes.push(r), this.logService.info("TracingService: failed to send envelope", n.statusCode, n.headers));
        });
    }
    async _sendReplayEnvelope(e) {
        if (this._isLegacyPrivacyMode === !0 || this._privateInferenceLockdown !== "disabled" || !this._isInternalUser || this._replayConfig.replaysSessionSampleRate <= 0) return;
        const t = Kn(), n = t?.getDsn(), r = t?.getOptions(), s = t?.getSdkMetadata()?.sdk;
        if (!n || !r) return;
        if (this._userEmail !== null || this._userId !== null) {
            const l = e[1];
            for (const d of l){
                const [u, m] = d;
                if (u.type === "replay_event" && typeof m == "object" && m !== null) {
                    m.user = {
                        ...m.user,
                        email: this._userEmail ?? void 0,
                        id: this._userId ?? void 0
                    };
                    break;
                }
            }
        }
        const i = uW(n, r.tunnel, s), a = Z3e(e), o = typeof a == "string" ? a : Buffer.from(a);
        try {
            const l = await kf(i, {
                method: "POST",
                body: o,
                headers: {
                    "content-type": "application/x-sentry-envelope"
                }
            });
            l.ok || this.logService.info("TracingService: failed to send replay envelope", l.status, l.statusText);
        } catch (l) {
            this.logService.info("TracingService: error sending replay envelope", l);
        }
    }
    _toDebuggingDataGoLink(e, t) {
        const n = q1(e, t, this.logService);
        if (n) return `http://go/debugdata${n.pathname}`;
    }
    _tryClaimAutomaticCapture() {
        const e = Date.now();
        return this._automaticUploadGate.uploadUrl(e) === null || this._lastAutomaticCaptureMs !== void 0 && e - this._lastAutomaticCaptureMs < ft.AUTOMATIC_CAPTURE_COOLDOWN_MS ? !1 : (this._lastAutomaticCaptureMs = e, !0);
    }
    async _captureDebuggingDataAndEmitOomJsStackEvent(e, t, n, r) {
        const s = this._getCrashReportingTagsForOomWebContents(n);
        let i;
        try {
            const a = await this.captureAndSendDebuggingData(n.rendererOsPid, r);
            if (a !== void 0) {
                const o = this._automaticUploadGate.uploadUrl(Date.now());
                o !== null && await this.uploadDebuggingData({
                    localFilePath: a,
                    uploadUrl: o
                }) ? i = this._toDebuggingDataGoLink(o, "oomJsStackEvent") : this.logService.info("TracingService: discarding OOM debugging data whose upload failed"), await we.promises.rm(a, {
                    force: !0
                });
            }
        } catch (a) {
            this.logService.warn("TracingService: failed to capture debugging data for OOM event", a);
        }
        this._emitOomJsStackEvent(e, t, n, i, s);
    }
    _emitOomJsStackEvent(e, t, n, r, s) {
        const i = n.rendererOsPid;
        try {
            const a = e.callFrames ?? [];
            if (a.length === 0) return;
            const o = new Map;
            for (const k of t)k.scriptId && k.url && o.set(k.scriptId, k.url);
            const l = (k)=>k.replace(/^vscode-file:\/\/vscode-app/, ""), d = new Set, u = [];
            for(let k = a.length - 1; k >= 0; k--){
                const y = a[k], b = y.location?.scriptId ? o.get(y.location.scriptId) : void 0, I = y.url || b || "<unknown>", G = l(I);
                d.add(G), u.push({
                    filename: G,
                    function: y.functionName || "(anonymous)",
                    lineno: (y.location?.lineNumber ?? 0) + 1,
                    colno: (y.location?.columnNumber ?? 0) + 1,
                    in_app: !G.includes("node_modules")
                });
            }
            const m = [], f = Tf.getAppPath();
            for (const k of d){
                const y = k.startsWith("/") ? k : en.join(f, k), b = this._readDebugIdFromFile(y);
                b && m.push({
                    type: "sourcemap",
                    code_file: k,
                    debug_id: b
                });
            }
            const v = s ?? this._getCrashReportingTagsForOomWebContents(n), T = {
                level: "fatal",
                exception: {
                    values: [
                        {
                            type: "RendererOOM",
                            value: `Renderer process (pid ${i}) ran out of memory`,
                            stacktrace: {
                                frames: u
                            }
                        }
                    ]
                },
                tags: {
                    "event.process": "renderer",
                    "oom.source": "cdp_crash_watcher",
                    "oom.renderer_pid": String(i),
                    ...r ? {
                        "oom.debug_data_url": r
                    } : {},
                    ...v ?? {}
                },
                ...m.length > 0 ? {
                    debug_meta: {
                        images: m
                    }
                } : {}
            };
            Rr()?.captureEvent(T), this.logService.info(`TracingService: emitted OOM JS stack event with ${u.length} frames for renderer pid ${i}`);
            const S = `${i}:application.oom`;
            this._claimCrashMetricDedupeKey(S) && this._uploadMainMetric("application.oom", {
                "crash.process": "renderer",
                "crash.type": "v8",
                ...v ?? {}
            });
        } catch (a) {
            this.logService.warn("TracingService: failed to emit OOM JS stack event", a);
        }
    }
    _readDebugIdFromFile(e) {
        try {
            const t = we.openSync(e, "r");
            try {
                const n = we.fstatSync(t), r = Math.min(n.size, 500), s = Buffer.alloc(r);
                return we.readSync(t, s, 0, r, n.size - r), s.toString("utf-8").match(/\/\/# debugId=([0-9a-f-]+)/i)?.[1];
            } finally{
                we.closeSync(t);
            }
        } catch  {
            return;
        }
    }
    async _watchRendererProcess(e) {
        const t = q2.fromId(e);
        if (t === void 0 || t.getType() !== "window") return;
        const n = t.debugger;
        if (n.isAttached()) return;
        const r = [];
        this._watchedRenderers.set(t.id, r), this.logService.debug(`TracingService: watching renderer process ${e}`);
        const s = t.getOSProcessId(), i = en.join(tnt(), `renderer-${s}-${Date.now()}.heapsnapshot`), a = [], o = (m)=>{
            if (m.reason !== "OOM") {
                this.logService.debug("TracingService: ignoring non-OOM debugger pause", m), t.isDevToolsOpened() || n.sendCommand("Debugger.resume").catch(()=>{});
                return;
            }
            if (this.logService.info("TracingService: paused renderer before crash"), !this._tryClaimAutomaticCapture()) {
                const S = {
                    webContentsId: t.id,
                    rendererOsPid: s
                };
                this._emitOomJsStackEvent(m, a, S, void 0, this._getCrashReportingTagsForOomWebContents(S)), t.isDevToolsOpened() || n.sendCommand("Debugger.resume").catch(()=>{});
                return;
            }
            this.logService.info("TracingService: taking heap snapshot");
            const f = 3e4, v = n.sendCommand("HeapProfiler.takeHeapSnapshot"), T = new Promise((S, k)=>setTimeout(()=>k(new Error(`HeapProfiler.takeHeapSnapshot timed out after ${f}ms`)), f));
            Promise.race([
                v,
                T
            ]).then(()=>{
                this.logService.info("TracingService: heap snapshot succeeded");
            }).catch((S)=>{
                this.logService.warn("TracingService: heap snapshot failed", S);
            }).finally(()=>{
                t.isDevToolsOpened() || n.sendCommand("Debugger.resume").catch(()=>{}), setTimeout(()=>{
                    this._captureDebuggingDataAndEmitOomJsStackEvent(m, a, {
                        webContentsId: t.id,
                        rendererOsPid: s
                    }, {
                        debuggerEvent: m,
                        debuggerScripts: a,
                        rendererHeapSnapshotFile: i
                    }).catch(()=>{});
                }, 1e3);
            });
        }, l = (m)=>{
            a.push({
                scriptId: m?.scriptId,
                url: m?.url
            });
        }, d = (m)=>{
            we.appendFileSync(i, m.chunk);
        };
        n.attach(), r.push({
            dispose: ()=>n.detach()
        }), this.logService.debug(`TracingService: attached to renderer process ${e}`);
        const u = (m, f, v)=>{
            switch(f){
                case "Debugger.paused":
                    o(v);
                    break;
                case "Debugger.scriptParsed":
                    l(v);
                    break;
                case "HeapProfiler.addHeapSnapshotChunk":
                    d(v);
                    break;
            }
        };
        n.on("message", u), r.push({
            dispose: ()=>n.removeListener("message", u)
        }), await n.sendCommand("Debugger.enable"), await n.sendCommand("Debugger.setPauseOnExceptions", {
            state: "none"
        }), r.push({
            dispose: ()=>n.sendCommand("Debugger.disable").catch(()=>{})
        }), this.logService.debug(`TracingService: enabled debugger for renderer process ${e}`);
    }
    async _unwatchRendererProcess(e) {
        const t = this._watchedRenderers.get(e);
        if (t !== void 0) {
            for(; t.length > 0;)t.pop()?.dispose();
            this._watchedRenderers.delete(e), this.logService.debug(`TracingService: unwatching renderer process ${e}`);
        }
    }
    _watchRendererProcesses() {
        this._watcherDisposables.add(this.windowsMainService.onDidChangeWindowsCount(()=>{
            const e = new Set(this.windowsMainService.getWindows().map((t)=>t.id));
            for (const t of [
                ...this._watchedRenderers.keys()
            ])e.has(t) || this._unwatchRendererProcess(t).catch(()=>{});
            for (const t of e)this._watchedRenderers.has(t) || this._watchRendererProcess(t).catch(()=>{});
        })), this.windowsMainService.getWindows().forEach((e)=>{
            this._watchRendererProcess(e.id).catch(()=>{});
        });
    }
    _unwatchRendererProcesses() {
        this._watcherDisposables.clear();
        for (const e of [
            ...this._watchedRenderers.keys()
        ])this._unwatchRendererProcess(e).catch(()=>{});
    }
    async uploadDebuggingData({ localFilePath: e, uploadUrl: t }) {
        try {
            const n = mtt(e, this._getDebuggingDataDir(), this.logService);
            if (!n) return !1;
            const r = q1(t, "uploadDebuggingData", this.logService);
            if (!r) return !1;
            this.logService.info("TracingService: uploading previously saved debugging data");
            const s = we.statSync(n).size, i = we.createReadStream(n), a = await kf(r.toString(), {
                method: "PUT",
                body: i,
                headers: {
                    "Content-Length": s.toString()
                }
            });
            return a.ok ? (this.logService.info("TracingService: successfully uploaded debugging data"), !0) : (this.logService.warn(`TracingService: upload failed with status ${a.status}`), !1);
        } catch (n) {
            return this.logService.warn("TracingService: failed to upload debugging data", n), !1;
        }
    }
    async uploadEmergencyProfile(e, t) {
        if (!this._automaticUploadGate.allowsAutomaticDebuggingData()) return this.logService.info("TracingService: not uploading emergency profile because privacy mode is on or not yet known"), !1;
        try {
            const n = q1(t, "uploadEmergencyProfile", this.logService);
            if (!n) return !1;
            const r = we.realpathSync(en.join(Tf.getPath("userData"), "emergency-profiles")), s = we.realpathSync(e), i = en.relative(r, s);
            if (i === "" || i.startsWith("..") || en.isAbsolute(i)) return this.logService.warn("TracingService: rejected emergency profile upload outside the trusted emergency-profiles directory"), !1;
            if (!we.statSync(s).isFile()) return this.logService.warn("TracingService: rejected emergency profile upload because the resolved path is not a file"), !1;
            const a = we.statSync(s), o = we.createReadStream(s), l = await kf(n.toString(), {
                method: "PUT",
                body: o,
                headers: {
                    "Content-Length": a.size.toString()
                }
            });
            return l.ok ? (this.logService.info(`TracingService: successfully uploaded emergency profile ${s}`), await we.promises.unlink(s).catch((d)=>this.logService.warn("TracingService: failed to delete uploaded emergency profile", d)), !0) : (this.logService.warn(`TracingService: emergency profile upload failed with status ${l.status}`), !1);
        } catch (n) {
            return this.logService.warn("TracingService: failed to upload emergency profile", n), !1;
        }
    }
    async registerRendererTagsForCrashReporting(e, t) {
        if (Object.keys(t).length === 0) return;
        const n = t["user.is_dev"];
        (n === "true" || n === "false") && (this._lastRegisteredUserIsDev = n);
        const s = this.windowsMainService.getWindowById(e)?.webContents, i = s !== void 0 ? s.getOSProcessId() : void 0;
        this._rendererCrashTagStore.register(e, t, i);
    }
    async unregisterRendererTagsForCrashReporting(e, t) {
        this._rendererCrashTagStore.unregister(e, t);
    }
    _getCrashReportingTagsByWorkbenchWindowId(e) {
        return this._rendererCrashTagStore.getTagsForWorkbenchWindow(e);
    }
    _getCrashReportingTagsByRendererOsPid(e) {
        return this._rendererCrashTagStore.getTagsForRendererOsPid(e);
    }
    _getCrashReportingTagsByWebContentsId(e) {
        const t = q2.fromId(e);
        if (t !== void 0) {
            const n = this.windowsMainService.getWindowByWebContents(t);
            if (n !== void 0) {
                const s = this._getCrashReportingTagsByWorkbenchWindowId(n.id);
                if (s !== void 0) return s;
            }
            const r = this._getCrashReportingTagsByRendererOsPid(t.getOSProcessId());
            if (r !== void 0) return r;
        }
        return this._getCrashReportingTagsByWorkbenchWindowId(e);
    }
    _getCrashReportingTagsForOomWebContents(e) {
        return this._getCrashReportingTagsByWebContentsId(e.webContentsId) ?? this._getCrashReportingTagsByRendererOsPid(e.rendererOsPid);
    }
    _lookupRendererTagsForFatalEvent(e) {
        if (e.level !== "fatal" || e.tags?.["event.process"] !== "renderer") return;
        const t = this._extractRendererCrashPid(e);
        if (t !== void 0) return this._getCrashReportingTagsByRendererOsPid(t);
    }
    _extractRendererCrashPid(e) {
        return ltt(e.contexts?.electron);
    }
    _parseOomRendererPidTag(e) {
        const t = e.tags?.["oom.renderer_pid"];
        if (t === void 0) return;
        const n = typeof t == "string" ? parseInt(t, 10) : Number(t);
        return Number.isFinite(n) && n > 0 ? n : void 0;
    }
    shutdownHasBegun() {
        this._shutdownHasBegun = !0, ent.addExtraParameter("exiting", "true");
    }
}, ft.DEFAULT_CLIENT_TRACING_CONFIG = {
    errorRateLimit: 10,
    jsonStringifySampleRate: 0,
    loggerSampleRate: 1,
    minidumpSampleRate: 1,
    performanceUnitRateLimit: 100,
    profilesSampleRate: 0,
    globalSampleRate: 1
}, ft.DEFAULT_REPLAY_CONFIG = {
    replaysSessionSampleRate: 0
}, ft.DEBUGGING_DATA_DIR_NAME = "debugging-data", ft.PROCESS_MONITOR_DIR_NAME = "process-monitor", ft.RECENT_LOGS_WINDOW_MS = 1440 * 60 * 1e3, ft.RECENT_AGENT_TRANSCRIPTS_WINDOW_MS = 10080 * 60 * 1e3, ft.MAX_AGENT_TRANSCRIPTS_SIZE_BYTES = 512 * 1024 * 1024, ft.AUTOMATIC_CAPTURE_COOLDOWN_MS = 1440 * 60 * 1e3, ft.DEBUGGING_DATA_PRUNE_DELAY_MS = 30 * 1e3, ft.MAX_STARTUP_BUFFER_SIZE = 64, ft.MAX_TRANSPORT_BUFFER_SIZE = 128, ft.CRASH_METRIC_DEDUPE_TTL_MS = 120 * 1e3, ft.CRASH_METRIC_DEDUPE_MAX_ENTRIES = 256, ft = B([
    w(0, qe),
    w(1, Aa),
    w(2, Z),
    w(3, et),
    w(4, ct),
    w(5, ot)
], ft), mve = class extends Error {
    constructor(e, t, n){
        const r = Error.stackTraceLimit;
        Error.stackTraceLimit = 0, super(`RendererProcessGone: window ${n} renderer exited (reason ${e}, exit code ${t ?? "unknown"})`), Error.stackTraceLimit = r, this.name = "RendererProcessGone";
    }
};

}
