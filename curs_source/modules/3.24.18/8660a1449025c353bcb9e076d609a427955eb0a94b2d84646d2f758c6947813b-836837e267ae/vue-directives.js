import { E } from "./tslib.es6.js";
var rIh, sIh;
export { rIh, sIh };
var __wakaru_BrS_initialized = false;
export function BrS() {
if (__wakaru_BrS_initialized) return;
__wakaru_BrS_initialized = true;
E(), rIh = Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue","text.html.markdown","text.html.derivative","text.pug"],"injectionSelector":"L:meta.tag -meta.attribute -meta.ng-binding -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute","name":"vue-directives","patterns":[{"include":"text.html.vue#vue-directives"}],"scopeName":"vue.directives"}')), sIh = [
    rIh
];

}
