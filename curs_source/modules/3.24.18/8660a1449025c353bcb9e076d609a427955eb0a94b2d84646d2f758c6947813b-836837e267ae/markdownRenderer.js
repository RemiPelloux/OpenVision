import { Ei, Fa, Gt, Qe } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { kbt } from "./dompurify.js";
import { voe } from "./event_2.js";
import { pP } from "./extpath.js";
import { tTr } from "./formattedTextRenderer.js";
import { Ek } from "./htmlContent.js";
import { tRe } from "./iconLabels.js";
import { bW } from "./iconLabels_2.js";
import { zfn } from "./idGenerator.js";
import { nT } from "./keyboardEvent.js";
import { Gsi } from "./markdownPlaintext.js";
import { Yq } from "./marshalling.js";
import { i2 } from "./mouseEvent.js";
import { Ki } from "./network.js";
import { cp } from "./objects.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { KWo, dWd, lGo, qCr } from "./ze.js";
var rTr, pGd, mGd, gGd;
export { gGd, mGd, pGd, rTr };
var __wakaru_kBt_initialized = false;
export function kBt() {
if (__wakaru_kBt_initialized) return;
__wakaru_kBt_initialized = true;
"use strict";
E(), Ei(), Gt(), pP(), Ek(), tRe(), zfn(), Qe(), Gsi(), lGo(), Yq(), Ki(), cp(), Lr(), Fa(), fn(), Hn(), kbt(), voe(), tTr(), nT(), i2(), bW(), Gsi(), rTr = Object.freeze({
    image: ({ href: t, title: e, text: n })=>{
        let i = [], r = [];
        return t && ({ href: t, dimensions: i } = dWd(t), r.push(`src="${qCr(t)}"`)), n && r.push(`alt="${qCr(n)}"`), e && r.push(`title="${qCr(e)}"`), i.length && (r = r.concat(i)), "<img " + r.join(" ") + ">";
    },
    paragraph ({ tokens: t }) {
        return `<p>${this.parser.parseInline(t)}</p>`;
    },
    link ({ href: t, title: e, tokens: n }) {
        let i = this.parser.parseInline(n);
        return typeof t != "string" ? "" : (t === i && (i = KWo(i)), e = typeof e == "string" ? qCr(KWo(e)) : "", t = KWo(t), t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), `<a href="${t}" title="${e || t}" draggable="false">${i}</a>`);
    }
}), pGd = [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
], mGd = [
    "align",
    "autoplay",
    "alt",
    "checked",
    "class",
    "colspan",
    "controls",
    "data-code",
    "data-href",
    "disabled",
    "draggable",
    "height",
    "href",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "rowspan",
    "src",
    "style",
    "target",
    "title",
    "type",
    "width",
    "start"
], gGd = 3;

}
