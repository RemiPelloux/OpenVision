import { Lbt, iwr } from "./languageConfiguration.js";
import { E } from "./tslib.es6.js";
var zii, gFd;
export { gFd, zii };
var __wakaru_yAy_initialized = false;
export function yAy() {
if (__wakaru_yAy_initialized) return;
__wakaru_yAy_initialized = true;
"use strict";
E(), Lbt(), zii = class tJc {
    constructor(e){
        if (e.autoClosingPairs ? this._autoClosingPairs = e.autoClosingPairs.map((n)=>new iwr(n)) : e.brackets ? this._autoClosingPairs = e.brackets.map((n)=>new iwr({
                open: n[0],
                close: n[1]
            })) : this._autoClosingPairs = [], e.__electricCharacterSupport && e.__electricCharacterSupport.docComment) {
            const n = e.__electricCharacterSupport.docComment;
            this._autoClosingPairs.push(new iwr({
                open: n.open,
                close: n.close || ""
            }));
        }
        this._autoCloseBeforeForQuotes = typeof e.autoCloseBefore == "string" ? e.autoCloseBefore : tJc.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES, this._autoCloseBeforeForBrackets = typeof e.autoCloseBefore == "string" ? e.autoCloseBefore : tJc.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS, this._surroundingPairs = e.surroundingPairs || this._autoClosingPairs;
    }
    getAutoClosingPairs() {
        return this._autoClosingPairs;
    }
    getAutoCloseBeforeSet(e) {
        return e ? this._autoCloseBeforeForQuotes : this._autoCloseBeforeForBrackets;
    }
    getSurroundingPairs() {
        return this._surroundingPairs;
    }
}, zii.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES = `;:.,=}])> 
	`, zii.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS = `'"\`;:.,=}])> 
	`, zii.DEFAULT_AUTOCLOSE_BEFORE_WHITESPACE = ` 
	`, gFd = zii;

}
