import { Cw, ti } from "./charCode.js";
import { E } from "./tslib.es6.js";
import { Wii } from "./ze.js";
var H3, iwr, mFd;
export { H3, iwr, mFd };
var __wakaru_Lbt_initialized = false;
export function Lbt() {
if (__wakaru_Lbt_initialized) return;
__wakaru_Lbt_initialized = true;
"use strict";
E(), Cw(), H3 = ((t)=>(t[t.None = 0] = "None", t[t.Indent = 1] = "Indent", t[t.IndentOutdent = 2] = "IndentOutdent", t[t.Outdent = 3] = "Outdent", t))(H3 || {}), iwr = class {
    constructor(t){
        if (this._neutralCharacter = null, this._neutralCharacterSearched = !1, this.open = t.open, this.close = t.close, this._inString = !0, this._inComment = !0, this._inRegEx = !0, Array.isArray(t.notIn)) for(let e = 0, n = t.notIn.length; e < n; e++)switch(t.notIn[e]){
            case "string":
                this._inString = !1;
                break;
            case "comment":
                this._inComment = !1;
                break;
            case "regex":
                this._inRegEx = !1;
                break;
        }
    }
    isOK(t) {
        switch(t){
            case 0:
                return !0;
            case 1:
                return this._inComment;
            case 2:
                return this._inString;
            case 3:
                return this._inRegEx;
        }
    }
    shouldAutoClose(t, e) {
        if (t.getTokenCount() === 0) return !0;
        const n = t.findTokenIndexAtOffset(e - 2), i = t.getStandardTokenType(n);
        return this.isOK(i);
    }
    _findNeutralCharacterInRange(t, e) {
        for(let n = t; n <= e; n++){
            const i = String.fromCharCode(n);
            if (!this.open.includes(i) && !this.close.includes(i)) return i;
        }
        return null;
    }
    findNeutralCharacter() {
        return this._neutralCharacterSearched || (this._neutralCharacterSearched = !0, this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(ti.Digit0, ti.Digit9)), this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(ti.a, ti.z)), this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(ti.A, ti.Z))), this._neutralCharacter;
    }
}, mFd = class {
    constructor(t){
        this.autoClosingPairsOpenByStart = new Map, this.autoClosingPairsOpenByEnd = new Map, this.autoClosingPairsCloseByStart = new Map, this.autoClosingPairsCloseByEnd = new Map, this.autoClosingPairsCloseSingleChar = new Map;
        for (const e of t)Wii(this.autoClosingPairsOpenByStart, e.open.charAt(0), e), Wii(this.autoClosingPairsOpenByEnd, e.open.charAt(e.open.length - 1), e), Wii(this.autoClosingPairsCloseByStart, e.close.charAt(0), e), Wii(this.autoClosingPairsCloseByEnd, e.close.charAt(e.close.length - 1), e), e.close.length === 1 && e.open.length === 1 && Wii(this.autoClosingPairsCloseSingleChar, e.close, e);
    }
};

}
