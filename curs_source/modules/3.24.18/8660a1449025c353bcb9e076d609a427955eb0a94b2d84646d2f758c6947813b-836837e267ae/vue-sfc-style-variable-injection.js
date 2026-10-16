import { Ihe, Voe } from "./javascript.js";
import { E } from "./tslib.es6.js";
var lIh, cIh;
export { cIh, lIh };
var __wakaru_jrS_initialized = false;
export function jrS() {
if (__wakaru_jrS_initialized) return;
__wakaru_jrS_initialized = true;
E(), Ihe(), lIh = Object.freeze(JSON.parse(`{"fileTypes":[],"injectTo":["source.vue"],"injectionSelector":"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment","name":"vue-sfc-style-variable-injection","patterns":[{"include":"#vue-sfc-style-variable-injection"}],"repository":{"vue-sfc-style-variable-injection":{"begin":"\\\\b(v-bind)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function"}},"end":"\\\\)","name":"vue.sfc.style.variable.injection.v-bind","patterns":[{"begin":"([\\"'])","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"}},"end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"source.ts.embedded.html.vue","patterns":[{"include":"source.js"}]},{"include":"source.js"}]}},"scopeName":"vue.sfc.style.variable.injection","embeddedLangs":["javascript"]}`)), cIh = [
    ...Voe,
    lIh
];

}
