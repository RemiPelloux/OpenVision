import { i6g } from "./blockquote.js";
import { o6g } from "./break.js";
import { p6g } from "./code.js";
import { g6g } from "./definition.js";
import { b6g } from "./emphasis.js";
import { C6g } from "./heading.js";
import { E6g } from "./html_3.js";
import { R6g } from "./image-reference.js";
import { I6g } from "./image.js";
import { M6g } from "./inline-code.js";
import { F6g } from "./link-reference.js";
import { N6g } from "./link.js";
import { z6g } from "./list-item.js";
import { G6g } from "./list_2.js";
import { Y6g } from "./paragraph.js";
import { Hpl, K6g, Qpl, W6g, Xpl, Ypl, Z6g, Zpl, a4g, d6g, eml, i4g, jpl, m6g, q6g, sml, t6g, tml, w6g } from "./qIc.js";
import { Q6g } from "./root.js";
import { n4g } from "./strong.js";
import { r4g } from "./text_2.js";
import { c4g } from "./thematic-break.js";
import { x } from "./tslib.es6.js";
var nvs;
export { nvs };
var __wakaru_oml_initialized = false;
export function oml() {
if (__wakaru_oml_initialized) return;
__wakaru_oml_initialized = true;
x(), i6g(), o6g(), p6g(), g6g(), b6g(), C6g(), E6g(), I6g(), R6g(), M6g(), N6g(), F6g(), G6g(), z6g(), Y6g(), Q6g(), n4g(), r4g(), c4g(), nvs = {
    blockquote: t6g,
    break: Hpl,
    code: d6g,
    definition: m6g,
    emphasis: jpl,
    hardBreak: Hpl,
    heading: w6g,
    html: Ypl,
    image: Xpl,
    imageReference: Zpl,
    inlineCode: Qpl,
    link: eml,
    linkReference: tml,
    list: W6g,
    listItem: q6g,
    paragraph: K6g,
    root: Z6g,
    strong: sml,
    text: i4g,
    thematicBreak: a4g
};

}
