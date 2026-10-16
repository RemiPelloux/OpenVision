import { AXy, BXy, HXy, IXy, Ifh, MXy, OYy, YYy, _fh, bfh, cfh, kfh, pfh, rXy, vfh, wXy, wfh, yfh, zYy } from "./LYd.js";
import { BYy } from "./blockquote.js";
import { $Yy } from "./break.js";
import { KYy } from "./code.js";
import { XYy } from "./definition.js";
import { eXy } from "./emphasis.js";
import { sXy } from "./heading.js";
import { aXy } from "./html_3.js";
import { dXy } from "./image-reference.js";
import { cXy } from "./image.js";
import { pXy } from "./inline-code.js";
import { _Xy } from "./link-reference.js";
import { fXy } from "./link.js";
import { xXy } from "./list-item.js";
import { CXy } from "./list_2.js";
import { RXy } from "./paragraph.js";
import { DXy } from "./root.js";
import { FXy } from "./strong.js";
import { UXy } from "./text_2.js";
import { WXy } from "./thematic-break.js";
import { E } from "./tslib.es6.js";
var fra;
export { fra };
var __wakaru_xfh_initialized = false;
export function xfh() {
if (__wakaru_xfh_initialized) return;
__wakaru_xfh_initialized = true;
E(), BYy(), $Yy(), KYy(), XYy(), eXy(), sXy(), aXy(), cXy(), dXy(), pXy(), fXy(), _Xy(), CXy(), xXy(), RXy(), DXy(), FXy(), UXy(), WXy(), fra = {
    blockquote: OYy,
    break: cfh,
    code: zYy,
    definition: YYy,
    emphasis: pfh,
    hardBreak: cfh,
    heading: rXy,
    html: vfh,
    image: _fh,
    imageReference: bfh,
    inlineCode: yfh,
    link: kfh,
    linkReference: wfh,
    list: wXy,
    listItem: IXy,
    paragraph: AXy,
    root: MXy,
    strong: Ifh,
    text: BXy,
    thematicBreak: HXy
};

}
