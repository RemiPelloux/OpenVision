import { yt } from "./A3u.js";
import { vi } from "./commands.js";
import { ka } from "./contextView.js";
import { dn } from "./contextkey.js";
import { n4e, uw } from "./findModel.js";
import { du } from "./hover.js";
import { Pr, fe } from "./keyCodes.js";
import { no } from "./keybinding.js";
import { Cb, HBe } from "./model_2.js";
import { qn } from "./qIc.js";
import { Unt, X0t } from "./simpleFindWidget.js";
import { Vs } from "./solidContext.js";
import { x } from "./tslib.es6.js";
import { $e } from "./web.js";
var EWh, xWh, IWh;
export { EWh, IWh, xWh };
var __wakaru_AWh_initialized = false;
export function AWh() {
if (__wakaru_AWh_initialized) return;
__wakaru_AWh_initialized = true;
"use strict";
x(), $e(), $e(), qn(), Pr(), Cb(), n4e(), vi(), dn(), ka(), du(), no(), X0t(), Vs(), EWh = yt("<div class=review-changes-find-widget-container>"), xWh = 310, IWh = class extends Unt {
    constructor(e, t, n, i, r, s){
        super({
            showCommonFindToggles: !0,
            checkImeCompletionState: !0,
            showResultCount: !0,
            initialWidth: xWh,
            enableSash: !1,
            previousMatchActionId: uw.PreviousMatchFindAction,
            nextMatchActionId: uw.NextMatchFindAction
        }, e, t, n, i), this.allMatches = [], this.currentMatchIndex = -1, this.matchDecorations = new Map, this.currentMatchDecoration = new Map, this.mountedEditors = r, this.multiDiffRef = s;
        const o = this.getFindInputDomNode();
        o && this.onkeydown(o, (a)=>{
            a.keyCode === fe.Enter && (this.find(a.shiftKey), a.preventDefault(), a.stopPropagation());
        });
    }
    setMultiDiffRef(e) {
        this.multiDiffRef = e;
    }
    layout(e) {
        super.layout(500);
    }
    show(e) {
        super.show(e), this.updateResultCount();
    }
    hide() {
        this.clearAllDecorations(), this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, super.hide();
    }
    findAllMatches() {
        const e = this.inputValue;
        if (!e || e.length === 0) return [];
        const t = this._getRegexValue(), n = this._getCaseSensitiveValue(), i = this._getWholeWordValue(), r = [];
        let s = 0;
        for (const [o, { resource: a, editor: c }] of this.mountedEditors){
            const l = c.getModel();
            if (!l) continue;
            const u = c.getVisibleRanges();
            if (u.length !== 0) try {
                const h = l.findMatches(e, u, t, n, i ? null : "", !1, 1e4);
                for (const p of h)r.push({
                    uri: o,
                    resource: a,
                    editor: c,
                    match: p,
                    matchIndex: s++
                });
            } catch  {}
        }
        return r;
    }
    clearAllDecorations() {
        for (const [e, t] of this.matchDecorations)try {
            e.removeDecorations(t);
        } catch  {}
        this.matchDecorations.clear();
        for (const [e, t] of this.currentMatchDecoration)try {
            e.removeDecorations(t);
        } catch  {}
        this.currentMatchDecoration.clear();
    }
    applyMatchDecorations() {
        if (this.clearAllDecorations(), this.allMatches.length === 0) return;
        const e = new Map;
        for (const t of this.allMatches){
            const n = e.get(t.editor) || [];
            n.push(t), e.set(t.editor, n);
        }
        for (const [t, n] of e){
            const i = n.map((r)=>({
                    range: r.match.range,
                    options: {
                        description: "find-match-highlight",
                        className: "findMatch",
                        stickiness: HBe.NeverGrowsWhenTypingAtEdges
                    }
                }));
            try {
                const r = t.deltaDecorations([], i);
                this.matchDecorations.set(t, r);
            } catch  {}
        }
    }
    updateCurrentMatchDecoration() {
        for (const [n, i] of this.currentMatchDecoration)try {
            n.removeDecorations(i);
        } catch  {}
        if (this.currentMatchDecoration.clear(), this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) return;
        const e = this.allMatches[this.currentMatchIndex], t = {
            range: e.match.range,
            options: {
                description: "find-match-current",
                className: "currentFindMatch",
                stickiness: HBe.NeverGrowsWhenTypingAtEdges
            }
        };
        try {
            const n = e.editor.deltaDecorations([], [
                t
            ]);
            this.currentMatchDecoration.set(e.editor, n);
        } catch  {}
    }
    find(e) {
        const t = this.inputValue;
        if (!t || t.length === 0) {
            this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        if (this.allMatches.length === 0 || this.currentMatchIndex < 0) {
            if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
                this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
                return;
            }
            this.currentMatchIndex = e ? this.allMatches.length - 1 : 0, this.applyMatchDecorations();
        } else e ? this.currentMatchIndex = (this.currentMatchIndex - 1 + this.allMatches.length) % this.allMatches.length : this.currentMatchIndex = (this.currentMatchIndex + 1) % this.allMatches.length;
        this.updateCurrentMatchDecoration(), this.goToMatch(this.currentMatchIndex), this.updateResultCount();
    }
    findFirst() {
        const e = this.inputValue;
        if (!e || e.length === 0) {
            this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
            this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        this.currentMatchIndex = 0, this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), this.updateResultCount();
    }
    goToMatch(e) {
        if (e < 0 || e >= this.allMatches.length) return;
        const t = this.allMatches[e], { resource: n, editor: i, match: r } = t;
        if (this.previousEditorMatch) {
            const o = this.previousEditorMatch.editor, a = this.previousEditorMatch.match, c = o !== i, l = a.range.startLineNumber !== r.range.startLineNumber || a.range.startColumn !== r.range.startColumn || a.range.endLineNumber !== r.range.endLineNumber || a.range.endColumn !== r.range.endColumn;
            if (c || l) try {
                const u = {
                    startLineNumber: a.range.startLineNumber,
                    startColumn: a.range.startColumn,
                    endLineNumber: a.range.startLineNumber,
                    endColumn: a.range.startColumn
                };
                o.setSelection(u);
            } catch  {}
        }
        const s = n.modifiedUri?.toString() || n.originalUri?.toString();
        s && this.multiDiffRef && this.multiDiffRef.expandResourceByUri(s), setTimeout(()=>{
            i.setSelection(r.range), i.revealRangeInCenter(r.range, 0), s && this.multiDiffRef && this.multiDiffRef.scrollToResource({
                modifiedUri: s,
                lineNumber: r.range.startLineNumber,
                omitHighlight: !0
            });
        }, 100), this.previousEditorMatch = t;
    }
    _onInputChanged() {
        const e = this.inputValue;
        return !e || e.length === 0 ? (this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), !1) : (this.allMatches = this.findAllMatches(), this.currentMatchIndex = this.allMatches.length > 0 ? 0 : -1, this.allMatches.length > 0 ? (this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), !0) : (this.clearAllDecorations(), !1));
    }
    _onFocusTrackerFocus() {}
    _onFocusTrackerBlur() {}
    _onFindInputFocusTrackerFocus() {}
    _onFindInputFocusTrackerBlur() {}
    focusInput() {
        this.focusFindBox();
    }
    selectAllText() {
        const e = this.getFindInputDomNode();
        if (e) {
            const t = e.querySelector("input");
            t && t.select();
        }
    }
    updateSearchString(e) {
        const t = this.getFindInputDomNode();
        if (t) {
            const n = t.querySelector("input");
            if (n) {
                n.value = e;
                const i = new Event("input", {
                    bubbles: !0
                });
                n.dispatchEvent(i);
            }
        }
    }
    async _getResultCount() {
        const e = this.inputValue;
        if (!(!e || e.length === 0)) return this.allMatches.length === 0 && (this.allMatches = this.findAllMatches()), this.allMatches.length === 0 ? {
            resultIndex: 0,
            resultCount: 0
        } : ((this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) && (this.currentMatchIndex = 0), {
            resultIndex: this.currentMatchIndex,
            resultCount: this.allMatches.length
        });
    }
};

}
