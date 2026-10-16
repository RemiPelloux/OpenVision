import { En, qy } from "./charCode.js";
import { Jmn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var lR, ffi, zMc;
export { ffi, lR, zMc };
var __wakaru_ize_initialized = false;
export function ize() {
if (__wakaru_ize_initialized) return;
__wakaru_ize_initialized = true;
"use strict";
x(), qy(), lR = ((e)=>(e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent", e))(lR || {}), ffi = class {
    constructor(e){
        if (this._neutralCharacter = null, this._neutralCharacterSearched = !1, this.open = e.open, this.close = e.close, this._inString = !0, this._inComment = !0, this._inRegEx = !0, Array.isArray(e.notIn)) for(let t = 0, n = e.notIn.length; t < n; t++)switch(e.notIn[t]){
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
    isOK(e) {
        switch(e){
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
    shouldAutoClose(e, t) {
        if (e.getTokenCount() === 0) return !0;
        const n = e.findTokenIndexAtOffset(t - 2), i = e.getStandardTokenType(n);
        return this.isOK(i);
    }
    _findNeutralCharacterInRange(e, t) {
        for(let n = e; n <= t; n++){
            const i = String.fromCharCode(n);
            if (!this.open.includes(i) && !this.close.includes(i)) return i;
        }
        return null;
    }
    findNeutralCharacter() {
        return this._neutralCharacterSearched || (this._neutralCharacterSearched = !0, this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(En.Digit0, En.Digit9)), this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(En.a, En.z)), this._neutralCharacter || (this._neutralCharacter = this._findNeutralCharacterInRange(En.A, En.Z))), this._neutralCharacter;
    }
}, zMc = class {
    constructor(e){
        this.autoClosingPairsOpenByStart = new Map, this.autoClosingPairsOpenByEnd = new Map, this.autoClosingPairsCloseByStart = new Map, this.autoClosingPairsCloseByEnd = new Map, this.autoClosingPairsCloseSingleChar = new Map;
        for (const t of e)Jmn(this.autoClosingPairsOpenByStart, t.open.charAt(0), t), Jmn(this.autoClosingPairsOpenByEnd, t.open.charAt(t.open.length - 1), t), Jmn(this.autoClosingPairsCloseByStart, t.close.charAt(0), t), Jmn(this.autoClosingPairsCloseByEnd, t.close.charAt(t.close.length - 1), t), t.close.length === 1 && t.open.length === 1 && Jmn(this.autoClosingPairsCloseSingleChar, t.close, t);
    }
};

}
