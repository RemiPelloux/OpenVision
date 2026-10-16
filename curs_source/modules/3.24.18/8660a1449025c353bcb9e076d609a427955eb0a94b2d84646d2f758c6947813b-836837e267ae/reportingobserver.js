import { t0o } from "./Iwo.js";
import { TOe } from "./composerDataCreation.js";
import { fh } from "./index_10.js";
import { ah } from "./spanUtils.js";
import { s7 } from "./trace.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
var DHf, NHf, s7l, LHf, OHf;
export { DHf, LHf, NHf, OHf, s7l };
var __wakaru_yNw_initialized = false;
export function yNw() {
if (__wakaru_yNw_initialized) return;
__wakaru_yNw_initialized = true;
E(), fh(), DHf = o_, NHf = "ReportingObserver", s7l = new WeakMap, LHf = ((t = {})=>{
    const e = t.types || [
        "crash",
        "deprecation",
        "intervention"
    ];
    function n(i) {
        if (s7l.has(ah())) for (const r of i)s7((s)=>{
            s.setExtra("url", r.url);
            const o = `ReportingObserver [${r.type}]`;
            let a = "No details available";
            if (r.body) {
                const l = {};
                for(const c in r.body)l[c] = r.body[c];
                if (s.setExtra("body", l), r.type === "crash") {
                    const c = r.body;
                    a = [
                        c.crashId || "",
                        c.reason || ""
                    ].join(" ").trim() || a;
                } else a = r.body.message || a;
            }
            TOe(`${o}: ${a}`);
        });
    }
    return {
        name: NHf,
        setupOnce () {
            if (!t0o()) return;
            new DHf.ReportingObserver(n, {
                buffered: !0,
                types: e
            }).observe();
        },
        setup (i) {
            s7l.set(i, !0);
        }
    };
}), OHf = LHf;

}
