import { ak, g2, kne } from "./LYd.js";
import { aT } from "./floating-ui.utils.dom.js";
import { Vnt } from "./floating-ui.utils.js";
import { hB } from "./owner.js";
import { E } from "./tslib.es6.js";
var oci, aci;
export { aci, oci };
var __wakaru_lci_initialized = false;
export function lci() {
if (__wakaru_lci_initialized) return;
__wakaru_lci_initialized = true;
E(), hB(), Vnt(), aT(), oci = {
    sideX: "left",
    sideY: "top"
}, aci = {
    name: "adaptiveOrigin",
    async fn (t) {
        const { x: e, y: n, rects: { floating: i }, elements: { floating: r }, platform: s, strategy: o, placement: a } = t, l = g2(r), c = l.getComputedStyle(r);
        if (!(c.transitionDuration !== "0s" && c.transitionDuration !== "")) return {
            x: e,
            y: n,
            data: oci
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
            const y = ak(r);
            h = {
                width: y.documentElement.clientWidth,
                height: y.documentElement.clientHeight
            };
        } else await s.isElement?.(d) && (h = await s.getDimensions(d));
        const p = kne(a);
        let g = e, f = n;
        p === "left" && (g = h.width - (e + i.width)), p === "top" && (f = h.height - (n + i.height));
        const _ = p === "left" ? "right" : oci.sideX, b = p === "top" ? "bottom" : oci.sideY;
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
