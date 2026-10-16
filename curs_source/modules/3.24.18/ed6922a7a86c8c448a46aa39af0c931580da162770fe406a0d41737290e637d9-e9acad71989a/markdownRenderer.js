import { Ps, Se, bt, si } from "./HVr.js";
import { en } from "./dom_2.js";
import { GNt } from "./dompurify.js";
import { B7 } from "./event_2.js";
import { vI } from "./extpath.js";
import { mvn } from "./formattedTextRenderer.js";
import { _g } from "./htmlContent.js";
import { bW } from "./iconLabels.js";
import { DE } from "./iconLabels_2.js";
import { gFt } from "./idGenerator.js";
import { jg } from "./keyboardEvent.js";
import { pvn } from "./markdownPlaintext.js";
import { a2 } from "./marshalling.js";
import { ew } from "./mouseEvent.js";
import { li } from "./network.js";
import { bu } from "./objects.js";
import { SFt, fbi, z4c, zts } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var Rbi, zUc, dns, KUc;
export { KUc, Rbi, dns, zUc };
var __wakaru_G7_initialized = false;
export function G7() {
if (__wakaru_G7_initialized) return;
__wakaru_G7_initialized = true;
"use strict";
x(), si(), bt(), vI(), _g(), bW(), gFt(), Se(), pvn(), SFt(), a2(), li(), bu(), Li(), Ps(), Qt(), en(), GNt(), B7(), mvn(), jg(), ew(), DE(), pvn(), Rbi = Object.freeze({
    image: ({ href: e, title: t, text: n })=>{
        let i = [], r = [];
        return e && ({ href: e, dimensions: i } = z4c(e), r.push(`src="${fbi(e)}"`)), n && r.push(`alt="${fbi(n)}"`), t && r.push(`title="${fbi(t)}"`), i.length && (r = r.concat(i)), "<img " + r.join(" ") + ">";
    },
    paragraph ({ tokens: e }) {
        return `<p>${this.parser.parseInline(e)}</p>`;
    },
    link ({ href: e, title: t, tokens: n }) {
        let i = this.parser.parseInline(n);
        return typeof e != "string" ? "" : (e === i && (i = zts(i)), t = typeof t == "string" ? fbi(zts(t)) : "", e = zts(e), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), `<a href="${e}" title="${t || e}" draggable="false">${i}</a>`);
    }
}), zUc = [
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
], dns = [
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
], KUc = 3;

}
