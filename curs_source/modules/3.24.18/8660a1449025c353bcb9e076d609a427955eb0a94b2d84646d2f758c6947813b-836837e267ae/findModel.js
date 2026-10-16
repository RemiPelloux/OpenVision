import { Nc, Nt, Qe, t$e } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { Yu, ZE, qn } from "./async.js";
import { Hi, cn } from "./contextkey.js";
import { FPp, pWr } from "./findDecorations.js";
import { BI1 } from "./ipa.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { BPp, FI1 } from "./replaceAllCommand.js";
import { Zkr, mW, wgn } from "./replaceCommand.js";
import { UI1, mWr } from "./replacePattern.js";
import { Cy, bu } from "./selection.js";
import { GAe, ayt } from "./textModelSearch.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
var GGe, jI1, $Ht, gWr, q0n, z0n, V0n, nyi, K0n, OC, wst, GPp, qPp;
export { $Ht, GGe, GPp, K0n, OC, V0n, gWr, jI1, nyi, q0n, qPp, wst, z0n };
var __wakaru_Zwt_initialized = false;
export function Zwt() {
if (__wakaru_Zwt_initialized) return;
__wakaru_Zwt_initialized = true;
"use strict";
E(), p4(), qn(), Ma(), Qe(), lz(), wgn(), jc(), Qs(), Cy(), ayt(), FPp(), FI1(), UI1(), Hi(), GGe = new cn("findWidgetVisible", !1), jI1 = GGe.toNegated(), $Ht = new cn("findInputFocussed", !1), gWr = new cn("replaceInputFocussed", !1), q0n = {
    primary: ut.Alt | Ze.KeyC,
    mac: {
        primary: ut.CtrlCmd | ut.Alt | Ze.KeyC
    }
}, z0n = {
    primary: ut.Alt | Ze.KeyW,
    mac: {
        primary: ut.CtrlCmd | ut.Alt | Ze.KeyW
    }
}, V0n = {
    primary: ut.Alt | Ze.KeyR,
    mac: {
        primary: ut.CtrlCmd | ut.Alt | Ze.KeyR
    }
}, nyi = {
    primary: ut.Alt | Ze.KeyL,
    mac: {
        primary: ut.CtrlCmd | ut.Alt | Ze.KeyL
    }
}, K0n = {
    primary: ut.Alt | Ze.KeyP,
    mac: {
        primary: ut.CtrlCmd | ut.Alt | Ze.KeyP
    }
}, OC = {
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
}, wst = 19999, GPp = 240, qPp = class kXs {
    constructor(e, n){
        this._toDispose = new Nt, this._editor = e, this._state = n, this._isDisposed = !1, this._startSearchingTimer = new ZE, this._decorations = new pWr(e), this._toDispose.add(this._decorations), this._updateDecorationsScheduler = new Yu(()=>{
            if (this._editor.hasModel()) return this.research(!1);
        }, 100), this._toDispose.add(this._updateDecorationsScheduler), this._toDispose.add(this._editor.onDidChangeCursorPosition((i)=>{
            (i.reason === 3 || i.reason === 5 || i.reason === 6) && this._decorations.setStartPosition(this._editor.getPosition());
        })), this._ignoreModelContentChanged = !1, this._toDispose.add(this._editor.onDidChangeModelContent((i)=>{
            this._ignoreModelContentChanged || (i.isFlush && this._decorations.reset(), this._decorations.setStartPosition(this._editor.getPosition()), this._updateDecorationsScheduler.schedule());
        })), this._toDispose.add(this._state.onFindReplaceStateChange((i)=>this._onStateChanged(i))), this.research(!1, this._state.searchScope);
    }
    dispose() {
        this._isDisposed = !0, Nc(this._startSearchingTimer), this._toDispose.dispose();
    }
    _onStateChanged(e) {
        this._isDisposed || this._editor.hasModel() && (e.searchString || e.isReplaceRevealed || e.isRegex || e.wholeWord || e.matchCase || e.searchScope) && (this._editor.getModel().isTooLargeForSyncing() ? (this._startSearchingTimer.cancel(), this._startSearchingTimer.setIfNotSet(()=>{
            e.searchScope ? this.research(e.moveCursor, this._state.searchScope) : this.research(e.moveCursor);
        }, GPp)) : e.searchScope ? this.research(e.moveCursor, this._state.searchScope) : this.research(e.moveCursor));
    }
    static _getSearchRange(e, n) {
        return n || e.getFullModelRange();
    }
    research(e, n) {
        let i = null;
        typeof n < "u" ? n !== null && (Array.isArray(n) ? i = n : i = [
            n
        ]) : i = this._decorations.getFindScopes(), i !== null && (i = i.map((a)=>{
            if (a.startLineNumber !== a.endLineNumber) {
                let l = a.endLineNumber;
                return a.endColumn === 1 && (l = l - 1), new qt(a.startLineNumber, 1, l, this._editor.getModel().getLineMaxColumn(l));
            }
            return a;
        }));
        const r = this._findMatches(i, !1, wst);
        this._decorations.set(r, i);
        const s = this._editor.getSelection();
        let o = this._decorations.getCurrentMatchesPosition(s);
        if (o === 0 && r.length > 0) {
            const a = t$e(r.map((l)=>l.range), (l)=>qt.compareRangesUsingStarts(l, s) >= 0);
            o = a > 0 ? a - 1 + 1 : o;
        }
        this._state.changeMatchInfo(o, this._decorations.getCount(), void 0), e && this._editor.getOption(43).cursorMoveOnType && this._moveToNextMatch(this._decorations.getStartPosition());
    }
    _hasMatches() {
        return this._state.matchesCount > 0;
    }
    _cannotFind() {
        if (!this._hasMatches()) {
            const e = this._decorations.getFindScope();
            return e && this._editor.revealRangeInCenterIfOutsideViewport(e, 0), !0;
        }
        return !1;
    }
    _setCurrentFindMatch(e) {
        const n = this._decorations.setCurrentFindMatch(e);
        this._state.changeMatchInfo(n, this._decorations.getCount(), e), this._editor.setSelection(e), this._editor.revealRangeInCenterIfOutsideViewport(e, 0);
    }
    _prevSearchPosition(e) {
        const n = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
        let { lineNumber: i, column: r } = e;
        const s = this._editor.getModel();
        return n || r === 1 ? (i === 1 ? i = s.getLineCount() : i--, r = s.getLineMaxColumn(i)) : r--, new er(i, r);
    }
    _moveToPrevMatch(e, n = !1) {
        if (!this._state.canNavigateBack()) {
            const u = this._decorations.matchAfterPosition(e);
            u && this._setCurrentFindMatch(u);
            return;
        }
        if (this._decorations.getCount() < wst) {
            let u = this._decorations.matchBeforePosition(e);
            u && u.isEmpty() && u.getStartPosition().equals(e) && (e = this._prevSearchPosition(e), u = this._decorations.matchBeforePosition(e)), u && this._setCurrentFindMatch(u);
            return;
        }
        if (this._cannotFind()) return;
        const i = this._decorations.getFindScope(), r = kXs._getSearchRange(this._editor.getModel(), i);
        r.getEndPosition().isBefore(e) && (e = r.getEndPosition()), e.isBefore(r.getStartPosition()) && (e = r.getEndPosition());
        const { lineNumber: s, column: o } = e, a = this._editor.getModel();
        let l = new er(s, o), c = a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, !1);
        if (c && c.range.isEmpty() && c.range.getStartPosition().equals(l) && (l = this._prevSearchPosition(l), c = a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, !1)), !!c) {
            if (!n && !r.containsRange(c.range)) return this._moveToPrevMatch(c.range.getStartPosition(), !0);
            this._setCurrentFindMatch(c.range);
        }
    }
    moveToPrevMatch() {
        this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
    }
    _nextSearchPosition(e) {
        const n = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
        let { lineNumber: i, column: r } = e;
        const s = this._editor.getModel();
        return n || r === s.getLineMaxColumn(i) ? (i === s.getLineCount() ? i = 1 : i++, r = 1) : r++, new er(i, r);
    }
    _moveToNextMatch(e) {
        if (!this._state.canNavigateForward()) {
            const i = this._decorations.matchBeforePosition(e);
            i && this._setCurrentFindMatch(i);
            return;
        }
        if (this._decorations.getCount() < wst) {
            let i = this._decorations.matchAfterPosition(e);
            i && i.isEmpty() && i.getStartPosition().equals(e) && (e = this._nextSearchPosition(e), i = this._decorations.matchAfterPosition(e)), i && this._setCurrentFindMatch(i);
            return;
        }
        const n = this._getNextMatch(e, !1, !0);
        n && this._setCurrentFindMatch(n.range);
    }
    _getNextMatch(e, n, i, r = !1) {
        if (this._cannotFind()) return null;
        const s = this._decorations.getFindScope(), o = kXs._getSearchRange(this._editor.getModel(), s);
        o.getEndPosition().isBefore(e) && (e = o.getStartPosition()), e.isBefore(o.getStartPosition()) && (e = o.getStartPosition());
        const { lineNumber: a, column: l } = e, c = this._editor.getModel();
        let u = new er(a, l), d = c.findNextMatch(this._state.searchString, u, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n);
        return i && d && d.range.isEmpty() && d.range.getStartPosition().equals(u) && (u = this._nextSearchPosition(u), d = c.findNextMatch(this._state.searchString, u, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n)), d ? !r && !o.containsRange(d.range) ? this._getNextMatch(d.range.getEndPosition(), n, i, !0) : d : null;
    }
    moveToNextMatch() {
        this._moveToNextMatch(this._editor.getSelection().getEndPosition());
    }
    _moveToMatch(e) {
        const n = this._decorations.getDecorationRangeAt(e);
        n && this._setCurrentFindMatch(n);
    }
    moveToMatch(e) {
        this._moveToMatch(e);
    }
    _getReplacePattern() {
        return this._state.isRegex ? BI1(this._state.replaceString) : mWr.fromStaticValue(this._state.replaceString);
    }
    replace() {
        if (!this._hasMatches()) return;
        const e = this._getReplacePattern(), n = this._editor.getSelection(), i = this._getNextMatch(n.getStartPosition(), !0, !1);
        if (i) if (n.equalsRange(i.range)) {
            const r = e.buildReplaceString(i.matches, this._state.preserveCase), s = new mW(n, r);
            this._executeEditorCommand("replace", s), this._decorations.setStartPosition(new er(n.startLineNumber, n.startColumn + r.length)), this.research(!0);
        } else this._decorations.setStartPosition(this._editor.getPosition()), this._setCurrentFindMatch(i.range);
    }
    _findMatches(e, n, i) {
        const r = (e || [
            null
        ]).map((s)=>kXs._getSearchRange(this._editor.getModel(), s));
        return this._editor.getModel().findMatches(this._state.searchString, r, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, n, i);
    }
    replaceAll() {
        if (!this._hasMatches()) return;
        const e = this._decorations.getFindScopes();
        e === null && this._state.matchesCount >= wst ? this._largeReplaceAll() : this._regularReplaceAll(e), this.research(!1);
    }
    _largeReplaceAll() {
        const n = new GAe(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null).parseSearchRequest();
        if (!n) return;
        let i = n.regex;
        if (!i.multiline) {
            let d = "mu";
            i.ignoreCase && (d += "i"), i.global && (d += "g"), i = new RegExp(i.source, d);
        }
        const r = this._editor.getModel(), s = r.getValue(1), o = r.getFullModelRange(), a = this._getReplacePattern();
        let l;
        const c = this._state.preserveCase;
        a.hasReplacementPatterns || c ? l = s.replace(i, function() {
            return a.buildReplaceString(arguments, c);
        }) : l = s.replace(i, a.buildReplaceString(null, c));
        const u = new Zkr(o, l, this._editor.getSelection());
        this._executeEditorCommand("replaceAll", u);
    }
    _regularReplaceAll(e) {
        const n = this._getReplacePattern(), i = this._findMatches(e, n.hasReplacementPatterns || this._state.preserveCase, eI.MAX_SAFE_SMALL_INTEGER), r = [];
        for(let o = 0, a = i.length; o < a; o++)r[o] = n.buildReplaceString(i[o].matches, this._state.preserveCase);
        const s = new BPp(this._editor.getSelection(), i.map((o)=>o.range), r);
        this._executeEditorCommand("replaceAll", s);
    }
    selectAllMatches() {
        if (!this._hasMatches()) return;
        const e = this._decorations.getFindScopes();
        let i = this._findMatches(e, !1, eI.MAX_SAFE_SMALL_INTEGER).map((s)=>new bu(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn));
        const r = this._editor.getSelection();
        for(let s = 0, o = i.length; s < o; s++)if (i[s].equalsRange(r)) {
            i = [
                r
            ].concat(i.slice(0, s)).concat(i.slice(s + 1));
            break;
        }
        this._editor.setSelections(i);
    }
    _executeEditorCommand(e, n) {
        try {
            this._ignoreModelContentChanged = !0, this._editor.pushUndoStop(), this._editor.executeCommand(e, n), this._editor.pushUndoStop();
        } finally{
            this._ignoreModelContentChanged = !1;
        }
    }
};

}
