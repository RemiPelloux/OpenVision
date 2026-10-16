import { vCi, xAr } from "./base.js";
import { CAr, Zje } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
var tGt, SAr, EAr;
export { EAr, SAr, tGt };
var __wakaru_xCi_initialized = false;
export function xCi() {
if (__wakaru_xCi_initialized) return;
__wakaru_xCi_initialized = true;
vCi(), tGt = class extends xAr {
    constructor(){
        super(...arguments), this.tokenize = CAr;
    }
    equals(e, a, s) {
        return s.ignoreWhitespace ? ((!s.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!s.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : s.ignoreNewlineAtEof && !s.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), super.equals(e, a, s);
    }
}, i(tGt, "LineDiff"), SAr = tGt, EAr = new SAr, i(Zje, "diffLines"), i(CAr, "tokenize");

}
