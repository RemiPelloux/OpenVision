import { arf } from "./DSs.js";
import { orf, r2l } from "./base_3.js";
import { x } from "./tslib.es6.js";
var s2l, o2l;
export { o2l, s2l };
var __wakaru_crf_initialized = false;
export function crf() {
if (__wakaru_crf_initialized) return;
__wakaru_crf_initialized = true;
x(), orf(), s2l = class extends r2l {
    constructor(){
        super(...arguments), this.tokenize = arf;
    }
    equals(e, t, n) {
        return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), super.equals(e, t, n);
    }
}, o2l = new s2l;

}
