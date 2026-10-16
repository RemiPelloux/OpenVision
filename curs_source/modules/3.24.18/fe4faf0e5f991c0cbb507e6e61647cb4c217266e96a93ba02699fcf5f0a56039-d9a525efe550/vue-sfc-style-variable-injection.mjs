import { Aw, Ky } from "./javascript.mjs";
var G_r, W_r;
export { G_r, W_r };
var __wakaru_Q6i_initialized = false;
export function Q6i() {
if (__wakaru_Q6i_initialized) return;
__wakaru_Q6i_initialized = true;
Aw(), G_r = Object.freeze(JSON.parse(`{"fileTypes":[],"injectTo":["source.vue"],"injectionSelector":"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment","name":"vue-sfc-style-variable-injection","patterns":[{"include":"#vue-sfc-style-variable-injection"}],"repository":{"vue-sfc-style-variable-injection":{"begin":"\\\\b(v-bind)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function"}},"end":"\\\\)","name":"vue.sfc.style.variable.injection.v-bind","patterns":[{"begin":"([\\"'])","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"}},"end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"source.ts.embedded.html.vue","patterns":[{"include":"source.js"}]},{"include":"source.js"}]}},"scopeName":"vue.sfc.style.variable.injection","embeddedLangs":["javascript"]}`)), W_r = [
    ...Ky,
    G_r
];

}
