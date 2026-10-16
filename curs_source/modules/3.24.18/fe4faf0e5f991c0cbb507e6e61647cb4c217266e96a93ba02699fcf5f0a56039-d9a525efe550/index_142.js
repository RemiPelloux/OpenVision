import { JCr, QCr, YCr, dqt, e7r, lqt, n7r, r7r, t7r, uqt } from "./f6r.js";
import { tCi } from "./index_139.js";
import { BP } from "./index_140.js";
import { rCi } from "./index_141.js";
import { i } from "./plugin-brand-icon.js";
var pqt, mqt, _je, fqt, i7r, hqt, a7r, gqt;
export { _je, a7r, fqt, gqt, hqt, i7r, mqt, pqt };
var __wakaru_iCi_initialized = false;
export function iCi() {
if (__wakaru_iCi_initialized) return;
__wakaru_iCi_initialized = true;
tCi(), rCi(), pqt = /\n/g, mqt = /[\t ]+/g, _je = BP("br"), fqt = BP(n7r), i7r = BP("p"), hqt = BP("tr"), a7r = BP([
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    t7r,
    r7r
]), gqt = BP([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp"
]), i(YCr, "toText"), i(lqt, "renderedTextCollection"), i(JCr, "collectElement"), i(uqt, "collectText"), i(QCr, "collectPreText"), i(e7r, "trimAndCollapseSpacesAndTabs"), i(dqt, "inferWhitespace"), i(t7r, "hidden"), i(n7r, "isCell"), i(r7r, "closedDialog");

}
