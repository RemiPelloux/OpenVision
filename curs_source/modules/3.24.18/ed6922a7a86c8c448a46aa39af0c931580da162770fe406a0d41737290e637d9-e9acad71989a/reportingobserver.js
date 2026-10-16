import { gjr } from "./HVr.js";
import { Zke } from "./composerDataCreation.js";
import { $u } from "./index_10.js";
import { Pu } from "./spanUtils.js";
import { XB } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
var yqh, Sqh, M2o, kqh, wqh;
export { M2o, Sqh, kqh, wqh, yqh };
var __wakaru_GS__initialized = false;
export function GS_() {
if (__wakaru_GS__initialized) return;
__wakaru_GS__initialized = true;
x(), $u(), yqh = Og, Sqh = "ReportingObserver", M2o = new WeakMap, kqh = ((e = {})=>{
    const t = e.types || [
        "crash",
        "deprecation",
        "intervention"
    ];
    function n(i) {
        if (M2o.has(Pu())) for (const r of i)XB((s)=>{
            s.setExtra("url", r.url);
            const o = `ReportingObserver [${r.type}]`;
            let a = "No details available";
            if (r.body) {
                const c = {};
                for(const l in r.body)c[l] = r.body[l];
                if (s.setExtra("body", c), r.type === "crash") {
                    const l = r.body;
                    a = [
                        l.crashId || "",
                        l.reason || ""
                    ].join(" ").trim() || a;
                } else a = r.body.message || a;
            }
            Zke(`${o}: ${a}`);
        });
    }
    return {
        name: Sqh,
        setupOnce () {
            if (!gjr()) return;
            new yqh.ReportingObserver(n, {
                buffered: !0,
                types: t
            }).observe();
        },
        setup (i) {
            M2o.set(i, !0);
        }
    };
}), wqh = kqh;

}
