import { K9i } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { mMe, n4e } from "./findModel.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var dRn;
export { dRn };
var __wakaru_Y9i_initialized = false;
export function Y9i() {
if (__wakaru_Y9i_initialized) return;
__wakaru_Y9i_initialized = true;
"use strict";
x(), bt(), Se(), qi(), n4e(), dRn = class extends we {
    constructor(){
        super(), this._onFindReplaceStateChange = this._register(new ve), this.onFindReplaceStateChange = this._onFindReplaceStateChange.event, this._searchString = "", this._replaceString = "", this._isRevealed = !1, this._isReplaceRevealed = !1, this._isRegex = !1, this._isRegexOverride = 0, this._wholeWord = !1, this._wholeWordOverride = 0, this._matchCase = !1, this._matchCaseOverride = 0, this._preserveCase = !1, this._preserveCaseOverride = 0, this._searchScope = null, this._matchesPosition = 0, this._matchesCount = 0, this._currentMatch = null, this._loop = !0, this._isSearching = !1, this._filters = null;
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
        return K9i(this._isRegexOverride, this._isRegex);
    }
    get wholeWord() {
        return K9i(this._wholeWordOverride, this._wholeWord);
    }
    get matchCase() {
        return K9i(this._matchCaseOverride, this._matchCase);
    }
    get preserveCase() {
        return K9i(this._preserveCaseOverride, this._preserveCase);
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
    changeMatchInfo(e, t, n) {
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
        t === 0 && (e = 0), e > t && (e = t), this._matchesPosition !== e && (this._matchesPosition = e, i.matchesPosition = !0, r = !0), this._matchesCount !== t && (this._matchesCount = t, i.matchesCount = !0, r = !0), typeof n < "u" && (dt.equalsRange(this._currentMatch, n) || (this._currentMatch = n, i.currentMatch = !0, r = !0)), r && this._onFindReplaceStateChange.fire(i);
    }
    change(e, t, n = !0) {
        const i = {
            moveCursor: t,
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
        const s = this.isRegex, o = this.wholeWord, a = this.matchCase, c = this.preserveCase;
        typeof e.searchString < "u" && this._searchString !== e.searchString && (this._searchString = e.searchString, i.searchString = !0, r = !0), typeof e.replaceString < "u" && this._replaceString !== e.replaceString && (this._replaceString = e.replaceString, i.replaceString = !0, r = !0), typeof e.isRevealed < "u" && this._isRevealed !== e.isRevealed && (this._isRevealed = e.isRevealed, i.isRevealed = !0, r = !0), typeof e.isReplaceRevealed < "u" && this._isReplaceRevealed !== e.isReplaceRevealed && (this._isReplaceRevealed = e.isReplaceRevealed, i.isReplaceRevealed = !0, r = !0), typeof e.isRegex < "u" && (this._isRegex = e.isRegex), typeof e.wholeWord < "u" && (this._wholeWord = e.wholeWord), typeof e.matchCase < "u" && (this._matchCase = e.matchCase), typeof e.preserveCase < "u" && (this._preserveCase = e.preserveCase), typeof e.searchScope < "u" && (e.searchScope?.every((l)=>this._searchScope?.some((u)=>!dt.equalsRange(u, l))) || (this._searchScope = e.searchScope, i.searchScope = !0, r = !0)), typeof e.loop < "u" && this._loop !== e.loop && (this._loop = e.loop, i.loop = !0, r = !0), typeof e.isSearching < "u" && this._isSearching !== e.isSearching && (this._isSearching = e.isSearching, i.isSearching = !0, r = !0), typeof e.filters < "u" && (this._filters ? this._filters.update(e.filters) : this._filters = e.filters, i.filters = !0, r = !0), this._isRegexOverride = typeof e.isRegexOverride < "u" ? e.isRegexOverride : 0, this._wholeWordOverride = typeof e.wholeWordOverride < "u" ? e.wholeWordOverride : 0, this._matchCaseOverride = typeof e.matchCaseOverride < "u" ? e.matchCaseOverride : 0, this._preserveCaseOverride = typeof e.preserveCaseOverride < "u" ? e.preserveCaseOverride : 0, s !== this.isRegex && (r = !0, i.isRegex = !0), o !== this.wholeWord && (r = !0, i.wholeWord = !0), a !== this.matchCase && (r = !0, i.matchCase = !0), c !== this.preserveCase && (r = !0, i.preserveCase = !0), r && this._onFindReplaceStateChange.fire(i);
    }
    canNavigateBack() {
        return this.canNavigateInLoop() || this.matchesPosition !== 1;
    }
    canNavigateForward() {
        return this.canNavigateInLoop() || this.matchesPosition < this.matchesCount;
    }
    canNavigateInLoop() {
        return this._loop || this.matchesCount >= mMe;
    }
};

}
