import { BUy, FUy, Int, Lb, OUy, PUy, RUy, UUy, dah, rbn } from "./LYd.js";
import { Joh, Qoh, Xoh, Zoh, eah, iah, nah, rah, sah, tah, xUy } from "./floating-ui.core.js";
import { aT } from "./floating-ui.utils.dom.js";
import { Vnt, ZHe } from "./floating-ui.utils.js";
import { E } from "./tslib.es6.js";
var pah, mah, gah, eJo, jRr, tJo, $Rr, HRr, WRr, GRr, nJo, iJo, fah, qRr;
export { $Rr, GRr, HRr, WRr, eJo, fah, gah, iJo, jRr, mah, nJo, pah, qRr, tJo };
var __wakaru_BSt_initialized = false;
export function BSt() {
if (__wakaru_BSt_initialized) return;
__wakaru_BSt_initialized = true;
E(), xUy(), Vnt(), aT(), pah = ZHe(0), mah = 25, gah = async function(t) {
    const e = this.getOffsetParent || dah, n = this.getDimensions, i = await n(t.floating);
    return {
        reference: BUy(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    };
}, eJo = {
    convertOffsetParentRelativeRectToViewportRelativeRect: RUy,
    getDocumentElement: Int,
    getClippingRect: OUy,
    getOffsetParent: dah,
    getElementRects: gah,
    getClientRects: PUy,
    getDimensions: FUy,
    getScale: rbn,
    isElement: Lb,
    isRTL: UUy
}, jRr = nah, tJo = Qoh, $Rr = iah, HRr = Joh, WRr = sah, GRr = eah, nJo = Zoh, iJo = tah, fah = rah, qRr = (t, e, n)=>{
    const i = new Map, r = n ?? {}, s = {
        ...eJo,
        ...r.platform,
        _c: i
    };
    return Xoh(t, e, {
        ...r,
        platform: s
    });
};

}
