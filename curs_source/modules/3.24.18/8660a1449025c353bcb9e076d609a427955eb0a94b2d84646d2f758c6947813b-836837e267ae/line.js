import { BOh, e_S } from "./base_3.js";
import { t_S } from "./nca.js";
import { E } from "./tslib.es6.js";
var UOh, jOh;
export { UOh, jOh };
var __wakaru_n_S_initialized = false;
export function n_S() {
if (__wakaru_n_S_initialized) return;
__wakaru_n_S_initialized = true;
E(), e_S(), UOh = class extends BOh {
    constructor(){
        super(...arguments), this.tokenize = t_S;
    }
    equals(t, e, n) {
        return n.ignoreWhitespace ? ((!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim()), (!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (t.endsWith(`
`) && (t = t.slice(0, -1)), e.endsWith(`
`) && (e = e.slice(0, -1))), super.equals(t, e, n);
    }
}, jOh = new UOh;

}
