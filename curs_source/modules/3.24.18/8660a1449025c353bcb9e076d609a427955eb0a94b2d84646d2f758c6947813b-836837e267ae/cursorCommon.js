import { sL, zve } from "./cursorColumns.js";
import { X7o } from "./indentation.js";
import { Mbt, Ykr } from "./inputMode.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { Lii } from "./supports_2.js";
import { E } from "./tslib.es6.js";
import { E9t, Y7o } from "./ze.js";
var iFd, rFd, sFd, I9t, O1, oFd, aFd, wQ, CQ;
export { CQ, I9t, O1, aFd, iFd, oFd, rFd, sFd, wQ };
var __wakaru_swe_initialized = false;
export function swe() {
if (__wakaru_swe_initialized) return;
__wakaru_swe_initialized = true;
"use strict";
E(), jc(), Qs(), Cy(), Lii(), zve(), X7o(), Ykr(), iFd = ()=>!0, rFd = ()=>!1, sFd = (t)=>t === " " || t === "	", I9t = class {
    constructor(t, e, n, i){
        this.languageConfigurationService = i, this._cursorMoveConfigurationBrand = void 0, this._languageId = t;
        const r = n.options, s = r.get(151), o = r.get(52);
        this.readOnly = r.get(96), this.tabSize = e.tabSize, this.indentSize = e.indentSize, this.insertSpaces = e.insertSpaces, this.stickyTabStops = r.get(121), this.lineHeight = o.lineHeight, this.typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth, this.pageSize = Math.max(1, Math.floor(s.height / this.lineHeight) - 2), this.useTabStops = r.get(133), this.wordSeparators = r.get(136), this.emptySelectionClipboard = r.get(38), this.copyWithSyntaxHighlighting = r.get(25), this.multiCursorMergeOverlapping = r.get(78), this.multiCursorPaste = r.get(80), this.multiCursorLimit = r.get(81), this.autoClosingBrackets = r.get(6), this.autoClosingComments = r.get(7), this.autoClosingQuotes = r.get(11), this.autoClosingDelete = r.get(9), this.autoClosingOvertype = r.get(10), this.autoSurround = r.get(14), this.autoIndent = r.get(12), this.wordSegmenterLocales = r.get(135), this.overtypeOnPaste = r.get(85), this.surroundingPairs = {}, this._electricChars = null, this.shouldAutoCloseBefore = {
            quote: this._getShouldAutoClose(t, this.autoClosingQuotes, !0),
            comment: this._getShouldAutoClose(t, this.autoClosingComments, !1),
            bracket: this._getShouldAutoClose(t, this.autoClosingBrackets, !1)
        }, this.autoClosingPairs = this.languageConfigurationService.getLanguageConfiguration(t).getAutoClosingPairs();
        const a = this.languageConfigurationService.getLanguageConfiguration(t).getSurroundingPairs();
        if (a) for (const c of a)this.surroundingPairs[c.open] = c.close;
        const l = this.languageConfigurationService.getLanguageConfiguration(t).comments;
        this.blockCommentStartToken = l?.blockCommentStartToken ?? null;
    }
    static shouldRecreate(t) {
        return t.hasChanged(151) || t.hasChanged(136) || t.hasChanged(38) || t.hasChanged(78) || t.hasChanged(80) || t.hasChanged(81) || t.hasChanged(6) || t.hasChanged(7) || t.hasChanged(11) || t.hasChanged(9) || t.hasChanged(10) || t.hasChanged(14) || t.hasChanged(133) || t.hasChanged(52) || t.hasChanged(96) || t.hasChanged(135) || t.hasChanged(85);
    }
    get electricChars() {
        if (!this._electricChars) {
            this._electricChars = {};
            const t = this.languageConfigurationService.getLanguageConfiguration(this._languageId).electricCharacter?.getElectricCharacters();
            if (t) for (const e of t)this._electricChars[e] = !0;
        }
        return this._electricChars;
    }
    get inputMode() {
        return Mbt.getInputMode();
    }
    onElectricCharacter(t, e, n) {
        const i = E9t(e, n - 1), r = this.languageConfigurationService.getLanguageConfiguration(i.languageId).electricCharacter;
        return r ? r.onElectricCharacter(t, i, n - i.firstCharOffset) : null;
    }
    normalizeIndentation(t) {
        return Y7o(t, this.indentSize, this.insertSpaces);
    }
    _getShouldAutoClose(t, e, n) {
        switch(e){
            case "beforeWhitespace":
                return sFd;
            case "languageDefined":
                return this._getLanguageDefinedShouldAutoClose(t, n);
            case "always":
                return iFd;
            case "never":
                return rFd;
        }
    }
    _getLanguageDefinedShouldAutoClose(t, e) {
        const n = this.languageConfigurationService.getLanguageConfiguration(t).getAutoCloseBeforeSet(e);
        return (i)=>n.indexOf(i) !== -1;
    }
    visibleColumnFromColumn(t, e) {
        return sL.visibleColumnFromColumn(t.getLineContent(e.lineNumber), e.column, this.tabSize);
    }
    columnFromVisibleColumn(t, e, n) {
        const i = sL.columnFromVisibleColumn(t.getLineContent(e), n, this.tabSize), r = t.getLineMinColumn(e);
        if (i < r) return r;
        const s = t.getLineMaxColumn(e);
        return i > s ? s : i;
    }
}, O1 = class mAb {
    constructor(e, n){
        this._cursorStateBrand = void 0, this.modelState = e, this.viewState = n;
    }
    static fromModelState(e) {
        return new oFd(e);
    }
    static fromViewState(e) {
        return new aFd(e);
    }
    static fromModelSelection(e) {
        const n = bu.liftSelection(e), i = new wQ(qt.fromPositions(n.getSelectionStart()), 0, 0, n.getPosition(), 0);
        return mAb.fromModelState(i);
    }
    static fromModelSelections(e) {
        const n = [];
        for(let i = 0, r = e.length; i < r; i++)n[i] = this.fromModelSelection(e[i]);
        return n;
    }
    equals(e) {
        return this.viewState.equals(e.viewState) && this.modelState.equals(e.modelState);
    }
}, oFd = class {
    constructor(t){
        this.modelState = t, this.viewState = null;
    }
}, aFd = class {
    constructor(t){
        this.modelState = null, this.viewState = t;
    }
}, wQ = class qYs {
    constructor(e, n, i, r, s){
        this.selectionStart = e, this.selectionStartKind = n, this.selectionStartLeftoverVisibleColumns = i, this.position = r, this.leftoverVisibleColumns = s, this._singleCursorStateBrand = void 0, this.selection = qYs._computeSelection(this.selectionStart, this.position);
    }
    equals(e) {
        return this.selectionStartLeftoverVisibleColumns === e.selectionStartLeftoverVisibleColumns && this.leftoverVisibleColumns === e.leftoverVisibleColumns && this.selectionStartKind === e.selectionStartKind && this.position.equals(e.position) && this.selectionStart.equalsRange(e.selectionStart);
    }
    hasSelection() {
        return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
    }
    move(e, n, i, r) {
        return e ? new qYs(this.selectionStart, this.selectionStartKind, this.selectionStartLeftoverVisibleColumns, new er(n, i), r) : new qYs(new qt(n, i, n, i), 0, r, new er(n, i), r);
    }
    static _computeSelection(e, n) {
        return e.isEmpty() || !n.isBeforeOrEqual(e.getStartPosition()) ? bu.fromPositions(e.getStartPosition(), n) : bu.fromPositions(e.getEndPosition(), n);
    }
}, CQ = class {
    constructor(t, e, n){
        this._editOperationResultBrand = void 0, this.type = t, this.commands = e, this.shouldPushStackElementBefore = n.shouldPushStackElementBefore, this.shouldPushStackElementAfter = n.shouldPushStackElementAfter;
    }
};

}
