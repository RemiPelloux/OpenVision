import { $sS, Bxh, WsS, _oS, coS, goS, poS, voS } from "./KTh.js";
import { Iia } from "./LYd.js";
import { HsS } from "./comment.js";
import { GsS } from "./doctype_2.js";
import { hoS } from "./element_2.js";
import { Aia } from "./index_55.js";
import { moS } from "./raw.js";
import { foS } from "./root_3.js";
import { jxh } from "./text_5.js";
import { E } from "./tslib.es6.js";
var $xh;
export { $xh };
var __wakaru_boS_initialized = false;
export function boS() {
if (__wakaru_boS_initialized) return;
__wakaru_boS_initialized = true;
E(), Aia(), HsS(), GsS(), hoS(), moS(), foS(), jxh(), $xh = Iia("type", {
    invalid: voS,
    unknown: _oS,
    handlers: {
        comment: $sS,
        doctype: WsS,
        element: coS,
        raw: poS,
        root: goS,
        text: Bxh
    }
});

}
