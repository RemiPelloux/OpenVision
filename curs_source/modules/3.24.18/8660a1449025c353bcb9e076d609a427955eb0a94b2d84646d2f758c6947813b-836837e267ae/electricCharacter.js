import { kk } from "./Iwo.js";
import { bo } from "./arrays.js";
import { awe, lwr } from "./richEditBrackets.js";
import { Lii } from "./supports_2.js";
import { E } from "./tslib.es6.js";
import { X$e } from "./ze.js";
var kFd;
export { kFd };
var __wakaru_RAy_initialized = false;
export function RAy() {
if (__wakaru_RAy_initialized) return;
__wakaru_RAy_initialized = true;
"use strict";
E(), bo(), Lii(), lwr(), kFd = class {
    constructor(t){
        this._richEditBrackets = t;
    }
    getElectricCharacters() {
        const t = [];
        if (this._richEditBrackets) for (const e of this._richEditBrackets.brackets)for (const n of e.close){
            const i = n.charAt(n.length - 1);
            t.push(i);
        }
        return kk(t);
    }
    onElectricCharacter(t, e, n) {
        if (!this._richEditBrackets || this._richEditBrackets.brackets.length === 0) return null;
        const i = e.findTokenIndexAtOffset(n - 1);
        if (X$e(e.getStandardTokenType(i))) return null;
        const r = this._richEditBrackets.reversedRegex, s = e.getLineContent().substring(0, n - 1) + t, o = awe.findPrevBracketInRange(r, 1, s, 0, s.length);
        if (!o) return null;
        const a = s.substring(o.startColumn - 1, o.endColumn - 1).toLowerCase();
        if (this._richEditBrackets.textIsOpenBracket[a]) return null;
        const c = e.getActualLineContentBefore(o.startColumn - 1);
        return /^\s*$/.test(c) ? {
            matchOpenBracket: a
        } : null;
    }
};

}
