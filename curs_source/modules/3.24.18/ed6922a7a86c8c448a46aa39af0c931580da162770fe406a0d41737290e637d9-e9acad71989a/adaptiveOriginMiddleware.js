import { D0 } from "./floating-ui.utils.dom.js";
import { z5e } from "./floating-ui.utils.js";
import { C5 } from "./owner.js";
import { KS, dj, fA } from "./qIc.js";
import { x } from "./tslib.es6.js";
var jSn, qSn;
export { jSn, qSn };
var __wakaru_zSn_initialized = false;
export function zSn() {
if (__wakaru_zSn_initialized) return;
__wakaru_zSn_initialized = true;
x(), C5(), z5e(), D0(), jSn = {
    sideX: "left",
    sideY: "top"
}, qSn = {
    name: "adaptiveOrigin",
    async fn (e) {
        const { x: t, y: n, rects: { floating: i }, elements: { floating: r }, platform: s, strategy: o, placement: a } = e, c = fA(r), l = c.getComputedStyle(r);
        if (!(l.transitionDuration !== "0s" && l.transitionDuration !== "")) return {
            x: t,
            y: n,
            data: jSn
        };
        const h = await s.getOffsetParent?.(r);
        let p = {
            width: 0,
            height: 0
        };
        if (o === "fixed" && c?.visualViewport) p = {
            width: c.visualViewport.width,
            height: c.visualViewport.height
        };
        else if (h === c) {
            const T = KS(r);
            p = {
                width: T.documentElement.clientWidth,
                height: T.documentElement.clientHeight
            };
        } else await s.isElement?.(h) && (p = await s.getDimensions(h));
        const g = dj(a);
        let f = t, v = n;
        g === "left" && (f = p.width - (t + i.width)), g === "top" && (v = p.height - (n + i.height));
        const b = g === "left" ? "right" : jSn.sideX, y = g === "top" ? "bottom" : jSn.sideY;
        return {
            x: f,
            y: v,
            data: {
                sideX: b,
                sideY: y
            }
        };
    }
};

}
