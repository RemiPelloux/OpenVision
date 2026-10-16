import { Lhn, Phn, QB, SGr, bGr, dwc, yGr } from "./HVr.js";
import { $u } from "./index_10.js";
import { mD } from "./inp.js";
import { KLt } from "./instrument.js";
import { nge } from "./scope.js";
import { a1, jC, zL } from "./semanticAttributes.js";
import { ige } from "./sentryNonRecordingSpan.js";
import { iv, nv, pD, sR } from "./spanUtils.js";
import { w0 } from "./spanstatus.js";
import { XB } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Xdt } from "./utils_9.js";
function B3e(e, t) {
    const n = Lhn();
    if (n.startSpan) return n.startSpan(e, t);
    const i = yGr(e), { forceTransaction: r, parentSpan: s, scope: o } = e, a = o?.clone();
    return XB(a, ()=>dwc(s)(()=>{
            const l = nv(), u = SGr(l, s), p = e.onlyIfParent && !u ? new ige : bGr({
                parentSpan: u,
                spanArguments: i,
                forceTransaction: r,
                scope: l
            });
            return nge(l, p), Phn(()=>t(p), ()=>{
                const { status: g } = iv(p);
                p.isRecording() && (!g || g === "ok") && p.setStatus({
                    code: w0,
                    message: "internal_error"
                });
            }, ()=>{
                p.end();
            });
        }));
}
var wEc;
export { B3e, wEc };
var __wakaru_glg_initialized = false;
export function glg() {
if (__wakaru_glg_initialized) return;
__wakaru_glg_initialized = true;
"use strict";
x(), $u(), KLt(), Xdt(), wEc = ({ entries: e })=>{
    const t = mD(), n = t ? pD(t) : void 0, i = n ? iv(n).description : nv().getScopeData().transactionName;
    e.forEach((r)=>{
        const s = r;
        if (!s.identifier) return;
        const o = s.name, a = s.renderTime, c = s.loadTime, [l, u] = c ? [
            QB(c),
            "load-time"
        ] : a ? [
            QB(a),
            "render-time"
        ] : [
            sR(),
            "entry-emission"
        ], h = o === "image-paint" ? QB(Math.max(0, (a ?? 0) - (c ?? 0))) : 0, p = {
            [jC]: "auto.ui.browser.elementtiming",
            [a1]: "ui.elementtiming",
            [zL]: "component",
            "sentry.span_start_time_source": u,
            "sentry.transaction_name": i,
            "element.id": s.id,
            "element.type": s.element?.tagName?.toLowerCase() || "unknown",
            "element.size": s.naturalWidth && s.naturalHeight ? `${s.naturalWidth}x${s.naturalHeight}` : void 0,
            "element.render_time": a,
            "element.load_time": c,
            "element.url": s.url || void 0,
            "element.identifier": s.identifier,
            "element.paint_type": o
        };
        B3e({
            name: `element[${s.identifier}]`,
            attributes: p,
            startTime: l,
            onlyIfParent: !0
        }, (g)=>{
            g.end(l + h);
        });
    });
};

}
