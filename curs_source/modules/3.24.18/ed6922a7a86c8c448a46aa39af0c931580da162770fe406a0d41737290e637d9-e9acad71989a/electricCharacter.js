import { Xm } from "./HVr.js";
import { dr } from "./arrays.js";
import { LAe } from "./qIc.js";
import { bfi, mle } from "./richEditBrackets.js";
import { qmn } from "./supports_2.js";
import { x } from "./tslib.es6.js";
var tPc;
export { tPc };
var __wakaru_Spg_initialized = false;
export function Spg() {
if (__wakaru_Spg_initialized) return;
__wakaru_Spg_initialized = true;
"use strict";
x(), dr(), qmn(), bfi(), tPc = class {
    constructor(e){
        this._richEditBrackets = e;
    }
    getElectricCharacters() {
        const e = [];
        if (this._richEditBrackets) for (const t of this._richEditBrackets.brackets)for (const n of t.close){
            const i = n.charAt(n.length - 1);
            e.push(i);
        }
        return Xm(e);
    }
    onElectricCharacter(e, t, n) {
        if (!this._richEditBrackets || this._richEditBrackets.brackets.length === 0) return null;
        const i = t.findTokenIndexAtOffset(n - 1);
        if (LAe(t.getStandardTokenType(i))) return null;
        const r = this._richEditBrackets.reversedRegex, s = t.getLineContent().substring(0, n - 1) + e, o = mle.findPrevBracketInRange(r, 1, s, 0, s.length);
        if (!o) return null;
        const a = s.substring(o.startColumn - 1, o.endColumn - 1).toLowerCase();
        if (this._richEditBrackets.textIsOpenBracket[a]) return null;
        const l = t.getActualLineContentBefore(o.startColumn - 1);
        return /^\s*$/.test(l) ? {
            matchOpenBracket: a
        } : null;
    }
};

}
