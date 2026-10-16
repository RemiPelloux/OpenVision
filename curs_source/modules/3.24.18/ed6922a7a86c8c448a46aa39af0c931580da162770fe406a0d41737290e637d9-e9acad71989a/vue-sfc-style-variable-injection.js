import { XJ, bY } from "./javascript.js";
import { x } from "./tslib.es6.js";
var W1l, G1l;
export { G1l, W1l };
var __wakaru_dVg_initialized = false;
export function dVg() {
if (__wakaru_dVg_initialized) return;
__wakaru_dVg_initialized = true;
x(), XJ(), W1l = Object.freeze(JSON.parse(`{"fileTypes":[],"injectTo":["source.vue"],"injectionSelector":"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment","name":"vue-sfc-style-variable-injection","patterns":[{"include":"#vue-sfc-style-variable-injection"}],"repository":{"vue-sfc-style-variable-injection":{"begin":"\\\\b(v-bind)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function"}},"end":"\\\\)","name":"vue.sfc.style.variable.injection.v-bind","patterns":[{"begin":"([\\"'])","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"}},"end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"source.ts.embedded.html.vue","patterns":[{"include":"source.js"}]},{"include":"source.js"}]}},"scopeName":"vue.sfc.style.variable.injection","embeddedLangs":["javascript"]}`)), G1l = [
    ...bY,
    W1l
];

}
