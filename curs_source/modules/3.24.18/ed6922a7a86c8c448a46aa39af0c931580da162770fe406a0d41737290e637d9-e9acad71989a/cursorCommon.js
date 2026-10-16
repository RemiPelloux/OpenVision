import { _D, nre } from "./cursorColumns.js";
import { rXr } from "./indentation.js";
import { Qqe, afi } from "./inputMode.js";
import { Yn, ya } from "./position.js";
import { iXr, jht } from "./qIc.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { qmn } from "./supports_2.js";
import { x } from "./tslib.es6.js";
var OMc, FMc, BMc, eze, wb, UMc, $Mc, iW, rW;
export { $Mc, BMc, FMc, OMc, UMc, eze, iW, rW, wb };
var __wakaru_ire_initialized = false;
export function ire() {
if (__wakaru_ire_initialized) return;
__wakaru_ire_initialized = true;
"use strict";
x(), ya(), qi(), _f(), qmn(), nre(), rXr(), afi(), OMc = ()=>!0, FMc = ()=>!1, BMc = (e)=>e === " " || e === "	", eze = class {
    constructor(e, t, n, i){
        this.languageConfigurationService = i, this._cursorMoveConfigurationBrand = void 0, this._languageId = e;
        const r = n.options, s = r.get(151), o = r.get(52);
        this.readOnly = r.get(96), this.tabSize = t.tabSize, this.indentSize = t.indentSize, this.insertSpaces = t.insertSpaces, this.stickyTabStops = r.get(121), this.lineHeight = o.lineHeight, this.typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth, this.pageSize = Math.max(1, Math.floor(s.height / this.lineHeight) - 2), this.useTabStops = r.get(133), this.wordSeparators = r.get(136), this.emptySelectionClipboard = r.get(38), this.copyWithSyntaxHighlighting = r.get(25), this.multiCursorMergeOverlapping = r.get(78), this.multiCursorPaste = r.get(80), this.multiCursorLimit = r.get(81), this.autoClosingBrackets = r.get(6), this.autoClosingComments = r.get(7), this.autoClosingQuotes = r.get(11), this.autoClosingDelete = r.get(9), this.autoClosingOvertype = r.get(10), this.autoSurround = r.get(14), this.autoIndent = r.get(12), this.wordSegmenterLocales = r.get(135), this.overtypeOnPaste = r.get(85), this.surroundingPairs = {}, this._electricChars = null, this.shouldAutoCloseBefore = {
            quote: this._getShouldAutoClose(e, this.autoClosingQuotes, !0),
            comment: this._getShouldAutoClose(e, this.autoClosingComments, !1),
            bracket: this._getShouldAutoClose(e, this.autoClosingBrackets, !1)
        }, this.autoClosingPairs = this.languageConfigurationService.getLanguageConfiguration(e).getAutoClosingPairs();
        const a = this.languageConfigurationService.getLanguageConfiguration(e).getSurroundingPairs();
        if (a) for (const l of a)this.surroundingPairs[l.open] = l.close;
        const c = this.languageConfigurationService.getLanguageConfiguration(e).comments;
        this.blockCommentStartToken = c?.blockCommentStartToken ?? null;
    }
    static shouldRecreate(e) {
        return e.hasChanged(151) || e.hasChanged(136) || e.hasChanged(38) || e.hasChanged(78) || e.hasChanged(80) || e.hasChanged(81) || e.hasChanged(6) || e.hasChanged(7) || e.hasChanged(11) || e.hasChanged(9) || e.hasChanged(10) || e.hasChanged(14) || e.hasChanged(133) || e.hasChanged(52) || e.hasChanged(96) || e.hasChanged(135) || e.hasChanged(85);
    }
    get electricChars() {
        if (!this._electricChars) {
            this._electricChars = {};
            const e = this.languageConfigurationService.getLanguageConfiguration(this._languageId).electricCharacter?.getElectricCharacters();
            if (e) for (const t of e)this._electricChars[t] = !0;
        }
        return this._electricChars;
    }
    get inputMode() {
        return Qqe.getInputMode();
    }
    onElectricCharacter(e, t, n) {
        const i = jht(t, n - 1), r = this.languageConfigurationService.getLanguageConfiguration(i.languageId).electricCharacter;
        return r ? r.onElectricCharacter(e, i, n - i.firstCharOffset) : null;
    }
    normalizeIndentation(e) {
        return iXr(e, this.indentSize, this.insertSpaces);
    }
    _getShouldAutoClose(e, t, n) {
        switch(t){
            case "beforeWhitespace":
                return BMc;
            case "languageDefined":
                return this._getLanguageDefinedShouldAutoClose(e, n);
            case "always":
                return OMc;
            case "never":
                return FMc;
        }
    }
    _getLanguageDefinedShouldAutoClose(e, t) {
        const n = this.languageConfigurationService.getLanguageConfiguration(e).getAutoCloseBeforeSet(t);
        return (i)=>n.indexOf(i) !== -1;
    }
    visibleColumnFromColumn(e, t) {
        return _D.visibleColumnFromColumn(e.getLineContent(t.lineNumber), t.column, this.tabSize);
    }
    columnFromVisibleColumn(e, t, n) {
        const i = _D.columnFromVisibleColumn(e.getLineContent(t), n, this.tabSize), r = e.getLineMinColumn(t);
        if (i < r) return r;
        const s = e.getLineMaxColumn(t);
        return i > s ? s : i;
    }
}, wb = class $Sm {
    constructor(t, n){
        this._cursorStateBrand = void 0, this.modelState = t, this.viewState = n;
    }
    static fromModelState(t) {
        return new UMc(t);
    }
    static fromViewState(t) {
        return new $Mc(t);
    }
    static fromModelSelection(t) {
        const n = za.liftSelection(t), i = new iW(dt.fromPositions(n.getSelectionStart()), 0, 0, n.getPosition(), 0);
        return $Sm.fromModelState(i);
    }
    static fromModelSelections(t) {
        const n = [];
        for(let i = 0, r = t.length; i < r; i++)n[i] = this.fromModelSelection(t[i]);
        return n;
    }
    equals(t) {
        return this.viewState.equals(t.viewState) && this.modelState.equals(t.modelState);
    }
}, UMc = class {
    constructor(e){
        this.modelState = e, this.viewState = null;
    }
}, $Mc = class {
    constructor(e){
        this.modelState = null, this.viewState = e;
    }
}, iW = class i1r {
    constructor(t, n, i, r, s){
        this.selectionStart = t, this.selectionStartKind = n, this.selectionStartLeftoverVisibleColumns = i, this.position = r, this.leftoverVisibleColumns = s, this._singleCursorStateBrand = void 0, this.selection = i1r._computeSelection(this.selectionStart, this.position);
    }
    equals(t) {
        return this.selectionStartLeftoverVisibleColumns === t.selectionStartLeftoverVisibleColumns && this.leftoverVisibleColumns === t.leftoverVisibleColumns && this.selectionStartKind === t.selectionStartKind && this.position.equals(t.position) && this.selectionStart.equalsRange(t.selectionStart);
    }
    hasSelection() {
        return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
    }
    move(t, n, i, r) {
        return t ? new i1r(this.selectionStart, this.selectionStartKind, this.selectionStartLeftoverVisibleColumns, new Yn(n, i), r) : new i1r(new dt(n, i, n, i), 0, r, new Yn(n, i), r);
    }
    static _computeSelection(t, n) {
        return t.isEmpty() || !n.isBeforeOrEqual(t.getStartPosition()) ? za.fromPositions(t.getStartPosition(), n) : za.fromPositions(t.getEndPosition(), n);
    }
}, rW = class {
    constructor(e, t, n){
        this._editOperationResultBrand = void 0, this.type = e, this.commands = t, this.shouldPushStackElementBefore = n.shouldPushStackElementBefore, this.shouldPushStackElementAfter = n.shouldPushStackElementAfter;
    }
};

}
