import { JYn, MWu, ako, eXn, oko, sko, yj } from "./Iwo.js";
import { fh } from "./index_10.js";
import { eL } from "./inp.js";
import { Jun } from "./instrument.js";
import { Hxe } from "./scope.js";
import { KE, YF, bx } from "./semanticAttributes.js";
import { Wxe } from "./sentryNonRecordingSpan.js";
import { JN, Kb, M3, Yb } from "./spanUtils.js";
import { TI } from "./spanstatus.js";
import { s7 } from "./trace.js";
import { E } from "./tslib.es6.js";
import { zFt } from "./utils_9.js";
function set(t, e) {
    const n = eXn();
    if (n.startSpan) return n.startSpan(t, e);
    const i = oko(t), { forceTransaction: r, parentSpan: s, scope: o } = t, a = o?.clone();
    return s7(a, ()=>MWu(s)(()=>{
            const c = Kb(), u = ako(c, s), h = t.onlyIfParent && !u ? new Wxe : sko({
                parentSpan: u,
                spanArguments: i,
                forceTransaction: r,
                scope: c
            });
            return Hxe(c, h), JYn(()=>e(h), ()=>{
                const { status: p } = Yb(h);
                h.isRecording() && (!p || p === "ok") && h.setStatus({
                    code: TI,
                    message: "internal_error"
                });
            }, ()=>{
                h.end();
            });
        }));
}
var GKu;
export { GKu, set };
var __wakaru_t_y_initialized = false;
export function t_y() {
if (__wakaru_t_y_initialized) return;
__wakaru_t_y_initialized = true;
"use strict";
E(), fh(), Jun(), zFt(), GKu = ({ entries: t })=>{
    const e = eL(), n = e ? JN(e) : void 0, i = n ? Yb(n).description : Kb().getScopeData().transactionName;
    t.forEach((r)=>{
        const s = r;
        if (!s.identifier) return;
        const o = s.name, a = s.renderTime, l = s.loadTime, [c, u] = l ? [
            yj(l),
            "load-time"
        ] : a ? [
            yj(a),
            "render-time"
        ] : [
            M3(),
            "entry-emission"
        ], d = o === "image-paint" ? yj(Math.max(0, (a ?? 0) - (l ?? 0))) : 0, h = {
            [KE]: "auto.ui.browser.elementtiming",
            [bx]: "ui.elementtiming",
            [YF]: "component",
            "sentry.span_start_time_source": u,
            "sentry.transaction_name": i,
            "element.id": s.id,
            "element.type": s.element?.tagName?.toLowerCase() || "unknown",
            "element.size": s.naturalWidth && s.naturalHeight ? `${s.naturalWidth}x${s.naturalHeight}` : void 0,
            "element.render_time": a,
            "element.load_time": l,
            "element.url": s.url || void 0,
            "element.identifier": s.identifier,
            "element.paint_type": o
        };
        set({
            name: `element[${s.identifier}]`,
            attributes: h,
            startTime: c,
            onlyIfParent: !0
        }, (p)=>{
            p.end(c + d);
        });
    });
};

}
