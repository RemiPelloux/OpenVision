import { CMg, _rl, brl, drl, frl, grl, hrl, mrl, prl, vrl, yrl } from "./floating-ui.core.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { HRe, z5e } from "./floating-ui.utils.js";
import { A5e, EMg, Erl, LMg, MMg, NMg, PMg, VBt, m_, xMg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Irl, Arl, Rrl, ehs, $0i, ths, H0i, W0i, G0i, V0i, nhs, ihs, Drl, j0i;
export { $0i, Arl, Drl, G0i, H0i, Irl, Rrl, V0i, W0i, ehs, ihs, j0i, nhs, ths };
var __wakaru_Ggt_initialized = false;
export function Ggt() {
if (__wakaru_Ggt_initialized) return;
__wakaru_Ggt_initialized = true;
x(), CMg(), z5e(), D0(), Irl = HRe(0), Arl = 25, Rrl = async function(e) {
    const t = this.getOffsetParent || Erl, n = this.getDimensions, i = await n(e.floating);
    return {
        reference: LMg(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    };
}, ehs = {
    convertOffsetParentRelativeRectToViewportRelativeRect: EMg,
    getDocumentElement: A5e,
    getClippingRect: MMg,
    getOffsetParent: Erl,
    getElementRects: Rrl,
    getClientRects: xMg,
    getDimensions: PMg,
    getScale: VBt,
    isElement: m_,
    isRTL: NMg
}, $0i = vrl, ths = prl, H0i = _rl, W0i = mrl, G0i = yrl, V0i = grl, nhs = hrl, ihs = frl, Drl = brl, j0i = (e, t, n)=>{
    const i = new Map, r = n ?? {}, s = {
        ...ehs,
        ...r.platform,
        _c: i
    };
    return drl(e, t, {
        ...r,
        platform: s
    });
};

}
