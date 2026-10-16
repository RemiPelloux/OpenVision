import { fFe, kWe } from "./html_5.js";
import { E } from "./tslib.es6.js";
var IEh, Vaa;
export { IEh, Vaa };
var __wakaru_xEh_initialized = false;
export function xEh() {
if (__wakaru_xEh_initialized) return;
__wakaru_xEh_initialized = true;
E(), kWe(), IEh = Object.freeze(JSON.parse('{"displayName":"HTML (Derivative)","injections":{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"html-derivative","patterns":[{"include":"text.html.basic#core-minus-invalid"},{"begin":"(</?)(\\\\w[^<>\\\\s]*)(?<!/)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"((?: ?/)?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.unrecognized.html.derivative","patterns":[{"include":"text.html.basic#attribute"}]}],"scopeName":"text.html.derivative","embeddedLangs":["html"]}')), Vaa = [
    ...fFe,
    IEh
];

}
