import { Kku } from "./De_3.js";
import { He, Lo, Se, dge } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { ac, bn, wE } from "./async.js";
import { At, dn } from "./contextkey.js";
import { n7t, z$s } from "./findDecorations.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { Vku, fcv } from "./replaceAllCommand.js";
import { Y9, lfi, y2t } from "./replaceCommand.js";
import { Zku, aRn } from "./replacePattern.js";
import { _f, za } from "./selection.js";
import { kle, zBe } from "./textModelSearch.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
var pMe, Qku, lRn, z9i, ryt, syt, oyt, uRn, i7t, uw, mMe, Jku, ewu;
export { Jku, Qku, ewu, i7t, lRn, mMe, oyt, pMe, ryt, syt, uRn, uw, z9i };
var __wakaru_n4e_initialized = false;
export function n4e() {
if (__wakaru_n4e_initialized) return;
__wakaru_n4e_initialized = true;
"use strict";
x(), FT(), bn(), Pr(), Se(), eN(), y2t(), ya(), qi(), _f(), zBe(), z$s(), fcv(), Zku(), dn(), pMe = new At("findWidgetVisible", !1), Qku = pMe.toNegated(), lRn = new At("findInputFocussed", !1), z9i = new At("replaceInputFocussed", !1), ryt = {
    primary: Ie.Alt | fe.KeyC,
    mac: {
        primary: Ie.CtrlCmd | Ie.Alt | fe.KeyC
    }
}, syt = {
    primary: Ie.Alt | fe.KeyW,
    mac: {
        primary: Ie.CtrlCmd | Ie.Alt | fe.KeyW
    }
}, oyt = {
    primary: Ie.Alt | fe.KeyR,
    mac: {
        primary: Ie.CtrlCmd | Ie.Alt | fe.KeyR
    }
}, uRn = {
    primary: Ie.Alt | fe.KeyL,
    mac: {
        primary: Ie.CtrlCmd | Ie.Alt | fe.KeyL
    }
}, i7t = {
    primary: Ie.Alt | fe.KeyP,
    mac: {
        primary: Ie.CtrlCmd | Ie.Alt | fe.KeyP
    }
}, uw = {
    StartFindAction: "actions.find",
    StartFindWithSelection: "actions.findWithSelection",
    StartFindWithArgs: "editor.actions.findWithArgs",
    NextMatchFindAction: "editor.action.nextMatchFindAction",
    PreviousMatchFindAction: "editor.action.previousMatchFindAction",
    GoToMatchFindAction: "editor.action.goToMatchFindAction",
    NextSelectionMatchFindAction: "editor.action.nextSelectionMatchFindAction",
    PreviousSelectionMatchFindAction: "editor.action.previousSelectionMatchFindAction",
    StartFindReplaceAction: "editor.action.startFindReplaceAction",
    CloseFindWidgetCommand: "closeFindWidget",
    ToggleCaseSensitiveCommand: "toggleFindCaseSensitive",
    ToggleWholeWordCommand: "toggleFindWholeWord",
    ToggleRegexCommand: "toggleFindRegex",
    ToggleSearchScopeCommand: "toggleFindInSelection",
    TogglePreserveCaseCommand: "togglePreserveCase",
    ReplaceOneAction: "editor.action.replaceOne",
    ReplaceAllAction: "editor.action.replaceAll",
    SelectAllMatchesAction: "editor.action.selectAllMatches",
    StartAiInstantSearchAction: "editor.action.startAiInstantSearch"
}, mMe = 19999, Jku = 240, ewu = class R1r {
    constructor(t, n){
        this._toDispose = new He, this._editor = t, this._state = n, this._isDisposed = !1, this._startSearchingTimer = new wE, this._decorations = new n7t(t), this._toDispose.add(this._decorations), this._updateDecorationsScheduler = new ac(()=>{
            if (this._editor.hasModel()) return this.research(!1);
        }, 100), this._toDispose.add(this._updateDecorationsScheduler), this._toDispose.add(this._editor.onDidChangeCursorPosition((i)=>{
            (i.reason === 3 || i.reason === 5 || i.reason === 6) && this._decorations.setStartPosition(this._editor.getPosition());
        })), this._ignoreModelContentChanged = !1, this._toDispose.add(this._editor.onDidChangeModelContent((i)=>{
            this._ignoreModelContentChanged || (i.isFlush && this._decorations.reset(), this._decorations.setStartPosition(this._editor.getPosition()), this._updateDecorationsScheduler.schedule());
        })), this._toDispose.add(this._state.onFindReplaceStateChange((i)=>this._onStateChanged(i))), this.research(!1, this._state.searchScope);
    }
    dispose() {
        this._isDisposed = !0, Lo(this._startSearchingTimer), this._toDispose.dispose();
    }
    _onStateChanged(t) {
        this._isDisposed || this._editor.hasModel() && (t.searchString || t.isReplaceRevealed || t.isRegex || t.wholeWord || t.matchCase || t.searchScope) && (this._editor.getModel().isTooLargeForSyncing() ? (this._startSearchingTimer.cancel(), this._startSearchingTimer.setIfNotSet(()=>{
            t.searchScope ? this.research(t.moveCursor, this._state.searchScope) : this.research(t.moveCursor);
        }, Jku)) : t.searchScope ? this.research(t.moveCursor, this._state.searchScope) : this.research(t.moveCursor));
    }
    static _getSearchRange(t, n) {
        return n || t.getFullModelRange();
    }
    research(t, n) {
        let i = null;
        typeof n < "u" ? n !== null && (Array.isArray(n) ? i = n : i = [
            n
        ]) : i = this._decorations.getFindScopes(), i !== null && (i = i.map((a)=>{
            if (a.startLineNumber !== a.endLineNumber) {
                let c = a.endLineNumber;
                return a.endColumn === 1 && (c = c - 1), new dt(a.startLineNumber, 1, c, this._editor.getModel().getLineMaxColumn(c));
            }
            return a;
        }));
        const r = this._findMatches(i, !1, mMe);
        this._decorations.set(r, i);
        const s = this._editor.getSelection();
        let o = this._decorations.getCurrentMatchesPosition(s);
        if (o === 0 && r.length > 0) {
            const a = dge(r.map((c)=>c.range), (c)=>dt.compareRangesUsingStarts(c, s) >= 0);
            o = a > 0 ? a - 1 + 1 : o;
        }
        this._state.changeMatchInfo(o, this._decorations.getCount(), void 0), t && this._editor.getOption(43).cursorMoveOnType && this._moveToNextMatch(this._decorations.getStartPosition());
    }
    _hasMatches() {
        return this._state.matchesCount > 0;
    }
    _cannotFind() {
        if (!this._hasMatches()) {
            const t = this._decorations.getFindScope();
            return t && this._editor.revealRangeInCenterIfOutsideViewport(t, 0), !0;
        }
        return !1;
    }
    _setCurrentFindMatch(t) {
        const n = this._decorations.setCurrentFindMatch(t);
        this._state.changeMatchInfo(n, this._decorations.getCount(), t), this._editor.setSelection(t), this._editor.revealRangeInCenterIfOutsideViewport(t, 0);
    }
    _prevSearchPosition(t) {
        const n = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
        let { lineNumber: i, column: r } = t;
        const s = this._editor.getModel();
        return n || r === 1 ? (i === 1 ? i = s.getLineCount() : i--, r = s.getLineMaxColumn(i)) : r--, new Yn(i, r);
    }
    _moveToPrevMatch(t, n = !1) {
        if (!this._state.canNavigateBack()) {
            const u = this._decorations.matchAfterPosition(t);
            u && this._setCurrentFindMatch(u);
            return;
        }
        if (this._decorations.getCount() < mMe) {
            let u = this._decorations.matchBeforePosition(t);
            u && u.isEmpty() && u.getStartPosition().equals(t) && (t = this._prevSearchPosition(t), u = this._decorations.matchBeforePosition(t)), u && this._setCurrentFindMatch(u);
            return;
        }
        if (this._cannotFind()) return;
        const i = this._decorations.getFindScope(), r = R1r._getSearchRange(this._editor.getModel(), i);
        r.getEndPosition().isBefore(t) && (t = r.getEndPosition()), t.isBefore(r.getStartPosition()) && (t = r.getEndPosition());
        const { lineNumber: s, column: o } = t, a = this._editor.getModel();
        let c = new Yn(s, o), l = a.findPreviousMatch(this._state.searchString, c, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, !1);
        if (l && l.range.isEmpty() && l.range.getStartPosition().equals(c) && (c = this._prevSearchPosition(c), l = a.findPreviousMatch(this._state.searchString, c, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, !1)), !!l) {
            if (!n && !r.containsRange(l.range)) return this._moveToPrevMatch(l.range.getStartPosition(), !0);
            this._setCurrentFindMatch(l.range);
        }
    }
    moveToPrevMatch() {
        this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
    }
    _nextSearchPosition(t) {
        const n = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
        let { lineNumber: i, column: r } = t;
        const s = this._editor.getModel();
        return n || r === s.getLineMaxColumn(i) ? (i === s.getLineCount() ? i = 1 : i++, r = 1) : r++, new Yn(i, r);
    }
    _moveToNextMatch(t) {
        if (!this._state.canNavigateForward()) {
            const i = this._decorations.matchBeforePosition(t);
            i && this._setCurrentFindMatch(i);
            return;
        }
        if (this._decorations.getCount() < mMe) {
            let i = this._decorations.matchAfterPosition(t);
            i && i.isEmpty() && i.getStartPosition().equals(t) && (t = this._nextSearchPosition(t), i = this._decorations.matchAfterPosition(t)), i && this._setCurrentFindMatch(i);
            return;
        }
        const n = this._getNextMatch(t, !1, !0);
        n && this._setCurrentFindMatch(n.range);
    }
    _getNextMatch(t, n, i, r = !1) {
        if (this._cannotFind()) return null;
        const s = this._decorations.getFindScope(), o = R1r._getSearchRange(this._editor.getModel(), s);
        o.getEndPosition().isBefore(t) && (t = o.getStartPosition()), t.isBefore(o.getStartPosition()) && (t = o.getStartPosition());
        const { lineNumber: a, column: c } = t, l = this._editor.getModel();
        let u = new Yn(a, c), h = l.findNextMatch(this._state.searchString, u, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n);
        return i && h && h.range.isEmpty() && h.range.getStartPosition().equals(u) && (u = this._nextSearchPosition(u), h = l.findNextMatch(this._state.searchString, u, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n)), h ? !r && !o.containsRange(h.range) ? this._getNextMatch(h.range.getEndPosition(), n, i, !0) : h : null;
    }
    moveToNextMatch() {
        this._moveToNextMatch(this._editor.getSelection().getEndPosition());
    }
    _moveToMatch(t) {
        const n = this._decorations.getDecorationRangeAt(t);
        n && this._setCurrentFindMatch(n);
    }
    moveToMatch(t) {
        this._moveToMatch(t);
    }
    _getReplacePattern() {
        return this._state.isRegex ? Kku(this._state.replaceString) : aRn.fromStaticValue(this._state.replaceString);
    }
    replace() {
        if (!this._hasMatches()) return;
        const t = this._getReplacePattern(), n = this._editor.getSelection(), i = this._getNextMatch(n.getStartPosition(), !0, !1);
        if (i) if (n.equalsRange(i.range)) {
            const r = t.buildReplaceString(i.matches, this._state.preserveCase), s = new Y9(n, r);
            this._executeEditorCommand("replace", s), this._decorations.setStartPosition(new Yn(n.startLineNumber, n.startColumn + r.length)), this.research(!0);
        } else this._decorations.setStartPosition(this._editor.getPosition()), this._setCurrentFindMatch(i.range);
    }
    _findMatches(t, n, i) {
        const r = (t || [
            null
        ]).map((s)=>R1r._getSearchRange(this._editor.getModel(), s));
        return this._editor.getModel().findMatches(this._state.searchString, r, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n, i);
    }
    replaceAll() {
        if (!this._hasMatches()) return;
        const t = this._decorations.getFindScopes();
        t === null && this._state.matchesCount >= mMe ? this._largeReplaceAll() : this._regularReplaceAll(t), this.research(!1);
    }
    _largeReplaceAll() {
        const n = new kle(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null).parseSearchRequest();
        if (!n) return;
        let i = n.regex;
        if (!i.multiline) {
            let h = "mu";
            i.ignoreCase && (h += "i"), i.global && (h += "g"), i = new RegExp(i.source, h);
        }
        const r = this._editor.getModel(), s = r.getValue(1), o = r.getFullModelRange(), a = this._getReplacePattern();
        let c;
        const l = this._state.preserveCase;
        a.hasReplacementPatterns || l ? c = s.replace(i, function() {
            return a.buildReplaceString(arguments, l);
        }) : c = s.replace(i, a.buildReplaceString(null, l));
        const u = new lfi(o, c, this._editor.getSelection());
        this._executeEditorCommand("replaceAll", u);
    }
    _regularReplaceAll(t) {
        const n = this._getReplacePattern(), i = this._findMatches(t, n.hasReplacementPatterns || this._state.preserveCase, yy.MAX_SAFE_SMALL_INTEGER), r = [];
        for(let o = 0, a = i.length; o < a; o++)r[o] = n.buildReplaceString(i[o].matches, this._state.preserveCase);
        const s = new Vku(this._editor.getSelection(), i.map((o)=>o.range), r);
        this._executeEditorCommand("replaceAll", s);
    }
    selectAllMatches() {
        if (!this._hasMatches()) return;
        const t = this._decorations.getFindScopes();
        let i = this._findMatches(t, !1, yy.MAX_SAFE_SMALL_INTEGER).map((s)=>new za(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn));
        const r = this._editor.getSelection();
        for(let s = 0, o = i.length; s < o; s++)if (i[s].equalsRange(r)) {
            i = [
                r
            ].concat(i.slice(0, s)).concat(i.slice(s + 1));
            break;
        }
        this._editor.setSelections(i);
    }
    _executeEditorCommand(t, n) {
        try {
            this._ignoreModelContentChanged = !0, this._editor.pushUndoStop(), this._editor.executeCommand(t, n), this._editor.pushUndoStop();
        } finally{
            this._ignoreModelContentChanged = !1;
        }
    }
};

}
