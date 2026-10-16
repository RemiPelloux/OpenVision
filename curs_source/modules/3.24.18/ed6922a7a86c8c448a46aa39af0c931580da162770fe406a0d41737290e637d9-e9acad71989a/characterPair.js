import { ffi, ize } from "./languageConfiguration.js";
import { x } from "./tslib.es6.js";
var tgn, KMc;
export { KMc, tgn };
var __wakaru_dpg_initialized = false;
export function dpg() {
if (__wakaru_dpg_initialized) return;
__wakaru_dpg_initialized = true;
"use strict";
x(), ize(), tgn = class vIa {
    constructor(t){
        if (t.autoClosingPairs ? this._autoClosingPairs = t.autoClosingPairs.map((n)=>new ffi(n)) : t.brackets ? this._autoClosingPairs = t.brackets.map((n)=>new ffi({
                open: n[0],
                close: n[1]
            })) : this._autoClosingPairs = [], t.__electricCharacterSupport && t.__electricCharacterSupport.docComment) {
            const n = t.__electricCharacterSupport.docComment;
            this._autoClosingPairs.push(new ffi({
                open: n.open,
                close: n.close || ""
            }));
        }
        this._autoCloseBeforeForQuotes = typeof t.autoCloseBefore == "string" ? t.autoCloseBefore : vIa.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES, this._autoCloseBeforeForBrackets = typeof t.autoCloseBefore == "string" ? t.autoCloseBefore : vIa.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS, this._surroundingPairs = t.surroundingPairs || this._autoClosingPairs;
    }
    getAutoClosingPairs() {
        return this._autoClosingPairs;
    }
    getAutoCloseBeforeSet(t) {
        return t ? this._autoCloseBeforeForQuotes : this._autoCloseBeforeForBrackets;
    }
    getSurroundingPairs() {
        return this._surroundingPairs;
    }
}, tgn.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES = `;:.,=}])> 
	`, tgn.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS = `'"\`;:.,=}])> 
	`, tgn.DEFAULT_AUTOCLOSE_BEFORE_WHITESPACE = ` 
	`, KMc = tgn;

}
