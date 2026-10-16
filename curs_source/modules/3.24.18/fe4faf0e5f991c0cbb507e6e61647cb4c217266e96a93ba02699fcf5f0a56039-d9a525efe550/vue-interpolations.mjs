var q_r, U_r;
export { U_r, q_r };
var __wakaru_J6i_initialized = false;
export function J6i() {
if (__wakaru_J6i_initialized) return;
__wakaru_J6i_initialized = true;
q_r = Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue","text.html.markdown","text.html.derivative","text.pug"],"injectionSelector":"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block","name":"vue-interpolations","patterns":[{"include":"text.html.vue#vue-interpolations"}],"scopeName":"vue.interpolations"}')), U_r = [
    q_r
];

}
