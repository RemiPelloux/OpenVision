import { YRf, cpw, f3n, fpw, gpw, lpw, mpw, vpw } from "./BA.js";
import { Act, jP } from "./Ycg.js";
import { $Rf, BRf, FRf, HRf, URf, WRf, jRf, opw } from "./floating-ui.core.mjs";
import { t8 } from "./floating-ui.utils.dom.mjs";
import { Vxt, gKe } from "./floating-ui.utils.mjs";
import { E } from "./tslib.es6.js";
var QRf, JRf, e2f, t2f, n2f, i2f, r2f, s2f, o2f, a2f, l2f;
export { JRf, QRf, a2f, e2f, i2f, l2f, n2f, o2f, r2f, s2f, t2f };
var __wakaru_c2f_initialized = false;
export function c2f() {
if (__wakaru_c2f_initialized) return;
__wakaru_c2f_initialized = true;
E(), opw(), Vxt(), t8(), t8(), QRf = gKe(0), JRf = 25, e2f = async function(t) {
    const e = this.getOffsetParent || YRf, n = this.getDimensions, i = await n(t.floating);
    return {
        reference: fpw(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    };
}, t2f = {
    convertOffsetParentRelativeRectToViewportRelativeRect: lpw,
    getDocumentElement: Act,
    getClippingRect: mpw,
    getOffsetParent: YRf,
    getElementRects: e2f,
    getClientRects: cpw,
    getDimensions: gpw,
    getScale: f3n,
    isElement: jP,
    isRTL: vpw
}, n2f = jRf, i2f = $Rf, r2f = BRf, s2f = WRf, o2f = URf, a2f = HRf, l2f = (t, e, n)=>{
    const i = new Map, r = n ?? {}, s = {
        ...t2f,
        ...r.platform,
        _c: i
    };
    return FRf(t, e, {
        ...r,
        platform: s
    });
};

}
