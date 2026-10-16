import { FTe, QO } from "./BA.js";
import { DV } from "./Ycg.js";
import { Vxt } from "./floating-ui.utils.mjs";
import { hDe } from "./owner.mjs";
import { E } from "./tslib.es6.js";
var x3i, DPf;
export { DPf, x3i };
var __wakaru_NPf_initialized = false;
export function NPf() {
if (__wakaru_NPf_initialized) return;
__wakaru_NPf_initialized = true;
E(), hDe(), Vxt(), x3i = {
    sideX: "left",
    sideY: "top"
}, DPf = {
    name: "adaptiveOrigin",
    async fn (t) {
        const { x: e, y: n, rects: { floating: i }, elements: { floating: r }, platform: s, strategy: o, placement: a } = t, l = DV(r), c = l.getComputedStyle(r);
        if (!(c.transitionDuration !== "0s" && c.transitionDuration !== "")) return {
            x: e,
            y: n,
            data: x3i
        };
        const d = await s.getOffsetParent?.(r);
        let h = {
            width: 0,
            height: 0
        };
        if (o === "fixed" && l?.visualViewport) h = {
            width: l.visualViewport.width,
            height: l.visualViewport.height
        };
        else if (d === l) {
            const y = QO(r);
            h = {
                width: y.documentElement.clientWidth,
                height: y.documentElement.clientHeight
            };
        } else await s.isElement?.(d) && (h = await s.getDimensions(d));
        const p = FTe(a);
        let g = e, f = n;
        p === "left" && (g = h.width - (e + i.width)), p === "top" && (f = h.height - (n + i.height));
        const _ = p === "left" ? "right" : x3i.sideX, b = p === "top" ? "bottom" : x3i.sideY;
        return {
            x: g,
            y: f,
            data: {
                sideX: _,
                sideY: b
            }
        };
    }
};

}
