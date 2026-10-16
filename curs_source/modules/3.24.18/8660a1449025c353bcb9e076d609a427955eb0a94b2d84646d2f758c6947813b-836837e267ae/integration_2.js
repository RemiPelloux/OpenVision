import { CFw, Eqf, IFw, Mqf, TFw, V0s, _Fw, _Ul, bFw, eZ, i1, kFw, kqf, wFw } from "./BA.js";
import { JK } from "./browserTracingIntegration.js";
import { qv, uce } from "./debug-build_3.js";
import { so } from "./debug-logger.js";
import { fh } from "./index_10.js";
import { eL } from "./inp.js";
import { JN } from "./spanUtils.js";
import { AFw } from "./startProfileForSpan.js";
import { Pqf, xFw } from "./traceLifecycleProfiler.js";
import { E } from "./tslib.es6.js";
var Dqf, Nqf, Lqf;
export { Dqf, Lqf, Nqf };
var __wakaru_RFw_initialized = false;
export function RFw() {
if (__wakaru_RFw_initialized) return;
__wakaru_RFw_initialized = true;
E(), fh(), uce(), eZ(), xFw(), AFw(), _Ul(), Dqf = "BrowserProfiling", Nqf = (()=>({
        name: Dqf,
        setup (t) {
            const e = t.getOptions();
            if (!V0s(e) && !e.profileLifecycle && (e.profileLifecycle = "manual"), V0s(e) && !e.profilesSampleRate) {
                qv && so.log("[Profiling] Profiling disabled, no profiling options found.");
                return;
            }
            const n = eL(), i = n && JN(n);
            if (V0s(e) && e.profileSessionSampleRate !== void 0 && qv && so.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled."), V0s(e)) i && kqf(i) && Eqf(i) && Mqf(i), t.on("spanStart", (r)=>{
                r === JN(r) && Eqf(r) && Mqf(r);
            }), t.on("beforeEnvelope", (r)=>{
                if (!CFw()) return;
                const s = bFw(r);
                if (!s.length) return;
                const o = [];
                for (const a of s){
                    const l = a?.contexts, c = l?.profile?.profile_id, u = l?.profile?.start_timestamp;
                    if (typeof c != "string") {
                        qv && so.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    if (!c) {
                        qv && so.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    l?.profile && delete l.profile;
                    const d = TFw(c);
                    if (!d) {
                        qv && so.log(`[Profiling] Could not retrieve profile for span: ${c}`);
                        continue;
                    }
                    const h = wFw(c, u, d, a);
                    h && o.push(h);
                }
                _Fw(r, o);
            });
            else {
                const r = kFw(e);
                if (r || qv && so.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), e.profileLifecycle === "trace") {
                    if (!JK(e)) {
                        qv && so.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
                        return;
                    }
                    const o = new Pqf;
                    o.initialize(t, r), i && o.notifyRootSpanActive(i), i1.setTimeout(()=>{
                        const a = eL(), l = a && JN(a);
                        l && o.notifyRootSpanActive(l);
                    }, 0);
                }
            }
        },
        processEvent (t) {
            return IFw(t);
        }
    })), Lqf = Nqf;

}
