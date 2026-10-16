import { Vcr, Wvi } from "./blockquote.js";
import { BMt, Zvi } from "./break.js";
import { Xvi, elr } from "./code.js";
import { Yvi, nlr } from "./definition.js";
import { HMt, Qvi } from "./emphasis.js";
import { llr, n3i } from "./heading.js";
import { XMt, r3i } from "./html_3.js";
import { JMt, a3i } from "./image-reference.js";
import { YMt, i3i } from "./image.js";
import { QMt, o3i } from "./inline-code.js";
import { l3i, nRt } from "./link-reference.js";
import { c3i, tRt } from "./link.js";
import { f3i, klr } from "./list-item.js";
import { p3i, wlr } from "./list.js";
import { h3i, vlr } from "./paragraph.js";
import { Clr, y3i } from "./root.js";
import { _3i, aRt } from "./strong.js";
import { Alr, k3i } from "./text.js";
import { $lr, x3i } from "./thematic-break.js";
var oRt;
export { oRt };
var __wakaru_C3i_initialized = false;
export function C3i() {
if (__wakaru_C3i_initialized) return;
__wakaru_C3i_initialized = true;
Wvi(), Zvi(), Xvi(), Yvi(), Qvi(), n3i(), r3i(), i3i(), a3i(), o3i(), c3i(), l3i(), p3i(), f3i(), h3i(), y3i(), _3i(), k3i(), x3i(), oRt = {
    blockquote: Vcr,
    break: BMt,
    code: elr,
    definition: nlr,
    emphasis: HMt,
    hardBreak: BMt,
    heading: llr,
    html: XMt,
    image: YMt,
    imageReference: JMt,
    inlineCode: QMt,
    link: tRt,
    linkReference: nRt,
    list: wlr,
    listItem: klr,
    paragraph: vlr,
    root: Clr,
    strong: aRt,
    text: Alr,
    thematicBreak: $lr
};

}
