import { Gt, Qe, st, tt } from "./Iwo.js";
import { Zwt, wst } from "./findModel.js";
import { fWr } from "./ipa.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var l3a;
export { l3a };
var __wakaru_c3a_initialized = false;
export function c3a() {
if (__wakaru_c3a_initialized) return;
__wakaru_c3a_initialized = true;
"use strict";
E(), Gt(), Qe(), Qs(), Zwt(), l3a = class extends st {
    constructor(){
        super(), this._onFindReplaceStateChange = this._register(new tt), this.onFindReplaceStateChange = this._onFindReplaceStateChange.event, this._searchString = "", this._replaceString = "", this._isRevealed = !1, this._isReplaceRevealed = !1, this._isRegex = !1, this._isRegexOverride = 0, this._wholeWord = !1, this._wholeWordOverride = 0, this._matchCase = !1, this._matchCaseOverride = 0, this._preserveCase = !1, this._preserveCaseOverride = 0, this._searchScope = null, this._matchesPosition = 0, this._matchesCount = 0, this._currentMatch = null, this._loop = !0, this._isSearching = !1, this._filters = null;
    }
    get searchString() {
        return this._searchString;
    }
    get replaceString() {
        return this._replaceString;
    }
    get isRevealed() {
        return this._isRevealed;
    }
    get isReplaceRevealed() {
        return this._isReplaceRevealed;
    }
    get isRegex() {
        return fWr(this._isRegexOverride, this._isRegex);
    }
    get wholeWord() {
        return fWr(this._wholeWordOverride, this._wholeWord);
    }
    get matchCase() {
        return fWr(this._matchCaseOverride, this._matchCase);
    }
    get preserveCase() {
        return fWr(this._preserveCaseOverride, this._preserveCase);
    }
    get actualIsRegex() {
        return this._isRegex;
    }
    get actualWholeWord() {
        return this._wholeWord;
    }
    get actualMatchCase() {
        return this._matchCase;
    }
    get actualPreserveCase() {
        return this._preserveCase;
    }
    get searchScope() {
        return this._searchScope;
    }
    get matchesPosition() {
        return this._matchesPosition;
    }
    get matchesCount() {
        return this._matchesCount;
    }
    get currentMatch() {
        return this._currentMatch;
    }
    get isSearching() {
        return this._isSearching;
    }
    get filters() {
        return this._filters;
    }
    changeMatchInfo(t, e, n) {
        const i = {
            moveCursor: !1,
            updateHistory: !1,
            searchString: !1,
            replaceString: !1,
            isRevealed: !1,
            isReplaceRevealed: !1,
            isRegex: !1,
            wholeWord: !1,
            matchCase: !1,
            preserveCase: !1,
            searchScope: !1,
            matchesPosition: !1,
            matchesCount: !1,
            currentMatch: !1,
            loop: !1,
            isSearching: !1,
            filters: !1
        };
        let r = !1;
        e === 0 && (t = 0), t > e && (t = e), this._matchesPosition !== t && (this._matchesPosition = t, i.matchesPosition = !0, r = !0), this._matchesCount !== e && (this._matchesCount = e, i.matchesCount = !0, r = !0), typeof n < "u" && (qt.equalsRange(this._currentMatch, n) || (this._currentMatch = n, i.currentMatch = !0, r = !0)), r && this._onFindReplaceStateChange.fire(i);
    }
    change(t, e, n = !0) {
        const i = {
            moveCursor: e,
            updateHistory: n,
            searchString: !1,
            replaceString: !1,
            isRevealed: !1,
            isReplaceRevealed: !1,
            isRegex: !1,
            wholeWord: !1,
            matchCase: !1,
            preserveCase: !1,
            searchScope: !1,
            matchesPosition: !1,
            matchesCount: !1,
            currentMatch: !1,
            loop: !1,
            isSearching: !1,
            filters: !1
        };
        let r = !1;
        const s = this.isRegex, o = this.wholeWord, a = this.matchCase, l = this.preserveCase;
        typeof t.searchString < "u" && this._searchString !== t.searchString && (this._searchString = t.searchString, i.searchString = !0, r = !0), typeof t.replaceString < "u" && this._replaceString !== t.replaceString && (this._replaceString = t.replaceString, i.replaceString = !0, r = !0), typeof t.isRevealed < "u" && this._isRevealed !== t.isRevealed && (this._isRevealed = t.isRevealed, i.isRevealed = !0, r = !0), typeof t.isReplaceRevealed < "u" && this._isReplaceRevealed !== t.isReplaceRevealed && (this._isReplaceRevealed = t.isReplaceRevealed, i.isReplaceRevealed = !0, r = !0), typeof t.isRegex < "u" && (this._isRegex = t.isRegex), typeof t.wholeWord < "u" && (this._wholeWord = t.wholeWord), typeof t.matchCase < "u" && (this._matchCase = t.matchCase), typeof t.preserveCase < "u" && (this._preserveCase = t.preserveCase), typeof t.searchScope < "u" && (t.searchScope?.every((c)=>this._searchScope?.some((u)=>!qt.equalsRange(u, c))) || (this._searchScope = t.searchScope, i.searchScope = !0, r = !0)), typeof t.loop < "u" && this._loop !== t.loop && (this._loop = t.loop, i.loop = !0, r = !0), typeof t.isSearching < "u" && this._isSearching !== t.isSearching && (this._isSearching = t.isSearching, i.isSearching = !0, r = !0), typeof t.filters < "u" && (this._filters ? this._filters.update(t.filters) : this._filters = t.filters, i.filters = !0, r = !0), this._isRegexOverride = typeof t.isRegexOverride < "u" ? t.isRegexOverride : 0, this._wholeWordOverride = typeof t.wholeWordOverride < "u" ? t.wholeWordOverride : 0, this._matchCaseOverride = typeof t.matchCaseOverride < "u" ? t.matchCaseOverride : 0, this._preserveCaseOverride = typeof t.preserveCaseOverride < "u" ? t.preserveCaseOverride : 0, s !== this.isRegex && (r = !0, i.isRegex = !0), o !== this.wholeWord && (r = !0, i.wholeWord = !0), a !== this.matchCase && (r = !0, i.matchCase = !0), l !== this.preserveCase && (r = !0, i.preserveCase = !0), r && this._onFindReplaceStateChange.fire(i);
    }
    canNavigateBack() {
        return this.canNavigateInLoop() || this.matchesPosition !== 1;
    }
    canNavigateForward() {
        return this.canNavigateInLoop() || this.matchesPosition < this.matchesCount;
    }
    canNavigateInLoop() {
        return this._loop || this.matchesCount >= wst;
    }
};

}
