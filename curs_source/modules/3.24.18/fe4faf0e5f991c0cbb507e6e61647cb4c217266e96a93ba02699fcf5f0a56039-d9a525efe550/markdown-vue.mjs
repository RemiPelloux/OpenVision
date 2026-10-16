var F_r, O_r;
export { F_r, O_r };
var __wakaru_X6i_initialized = false;
export function X6i() {
if (__wakaru_X6i_initialized) return;
__wakaru_X6i_initialized = true;
F_r = Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["text.html.markdown"],"injectionSelector":"L:text.html.markdown","name":"markdown-vue","patterns":[{"include":"#vue-code-block"}],"repository":{"vue-code-block":{"begin":"(^|\\\\G)(\\\\s*)(`{3,}|~{3,})\\\\s*(?i:(vue)((\\\\s+|[,:?{])[^`~]*)?$)","beginCaptures":{"3":{"name":"punctuation.definition.markdown"},"4":{"name":"fenced_code.block.language.markdown"},"5":{"name":"fenced_code.block.language.attributes.markdown","patterns":[]}},"end":"(^|\\\\G)(\\\\2|\\\\s{0,3})(\\\\3)\\\\s*$","endCaptures":{"3":{"name":"punctuation.definition.markdown"}},"name":"markup.fenced_code.block.markdown","patterns":[{"include":"text.html.vue"}]}},"scopeName":"markdown.vue.codeblock"}')), O_r = [
    F_r
];

}
