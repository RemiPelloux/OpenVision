import { E } from "./tslib.es6.js";
var oIh, aIh;
export { aIh, oIh };
var __wakaru_UrS_initialized = false;
export function UrS() {
if (__wakaru_UrS_initialized) return;
__wakaru_UrS_initialized = true;
E(), oIh = Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue","text.html.markdown","text.html.derivative","text.pug"],"injectionSelector":"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block","name":"vue-interpolations","patterns":[{"include":"text.html.vue#vue-interpolations"}],"scopeName":"vue.interpolations"}')), aIh = [
    oIh
];

}
