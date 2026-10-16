import { x } from "./tslib.es6.js";
var O1l, F1l;
export { F1l, O1l };
var __wakaru_cVg_initialized = false;
export function cVg() {
if (__wakaru_cVg_initialized) return;
__wakaru_cVg_initialized = true;
x(), O1l = Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["text.html.markdown"],"injectionSelector":"L:text.html.markdown","name":"markdown-vue","patterns":[{"include":"#vue-code-block"}],"repository":{"vue-code-block":{"begin":"(^|\\\\G)(\\\\s*)(`{3,}|~{3,})\\\\s*(?i:(vue)((\\\\s+|[,:?{])[^`~]*)?$)","beginCaptures":{"3":{"name":"punctuation.definition.markdown"},"4":{"name":"fenced_code.block.language.markdown"},"5":{"name":"fenced_code.block.language.attributes.markdown","patterns":[]}},"end":"(^|\\\\G)(\\\\2|\\\\s{0,3})(\\\\3)\\\\s*$","endCaptures":{"3":{"name":"punctuation.definition.markdown"}},"name":"markup.fenced_code.block.markdown","patterns":[{"include":"text.html.vue"}]}},"scopeName":"markdown.vue.codeblock"}')), F1l = [
    O1l
];

}
