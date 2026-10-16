import { rs } from "./commands.js";
import { pf } from "./contextView.js";
import { Hi } from "./contextkey.js";
import { OC, Zwt } from "./findModel.js";
import { gS } from "./hover.js";
import { Ma, Ze } from "./keyCodes.js";
import { ru } from "./keybinding.js";
import { J0, Ott } from "./model_2.js";
import { YXt, eAt } from "./simpleFindWidget.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var zLf, VLf, KLf;
export { KLf, VLf, zLf };
var __wakaru_YLf_initialized = false;
export function YLf() {
if (__wakaru_YLf_initialized) return;
__wakaru_YLf_initialized = true;
"use strict";
E(), at(), at(), pi(), Ma(), J0(), Zwt(), rs(), Hi(), pf(), gS(), ru(), YXt(), vo(), zLf = wt("<div class=review-changes-find-widget-container>"), VLf = 310, KLf = class extends eAt {
    constructor(t, e, n, i, r, s){
        super({
            showCommonFindToggles: !0,
            checkImeCompletionState: !0,
            showResultCount: !0,
            initialWidth: VLf,
            enableSash: !1,
            previousMatchActionId: OC.PreviousMatchFindAction,
            nextMatchActionId: OC.NextMatchFindAction
        }, t, e, n, i), this.allMatches = [], this.currentMatchIndex = -1, this.matchDecorations = new Map, this.currentMatchDecoration = new Map, this.mountedEditors = r, this.multiDiffRef = s;
        const o = this.getFindInputDomNode();
        o && this.onkeydown(o, (a)=>{
            a.keyCode === Ze.Enter && (this.find(a.shiftKey), a.preventDefault(), a.stopPropagation());
        });
    }
    setMultiDiffRef(t) {
        this.multiDiffRef = t;
    }
    layout(t) {
        super.layout(500);
    }
    show(t) {
        super.show(t), this.updateResultCount();
    }
    hide() {
        this.clearAllDecorations(), this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, super.hide();
    }
    findAllMatches() {
        const t = this.inputValue;
        if (!t || t.length === 0) return [];
        const e = this._getRegexValue(), n = this._getCaseSensitiveValue(), i = this._getWholeWordValue(), r = [];
        let s = 0;
        for (const [o, { resource: a, editor: l }] of this.mountedEditors){
            const c = l.getModel();
            if (!c) continue;
            const u = l.getVisibleRanges();
            if (u.length !== 0) try {
                const d = c.findMatches(t, u, e, n, i ? null : "", !1, 1e4);
                for (const h of d)r.push({
                    uri: o,
                    resource: a,
                    editor: l,
                    match: h,
                    matchIndex: s++
                });
            } catch  {}
        }
        return r;
    }
    clearAllDecorations() {
        for (const [t, e] of this.matchDecorations)try {
            t.removeDecorations(e);
        } catch  {}
        this.matchDecorations.clear();
        for (const [t, e] of this.currentMatchDecoration)try {
            t.removeDecorations(e);
        } catch  {}
        this.currentMatchDecoration.clear();
    }
    applyMatchDecorations() {
        if (this.clearAllDecorations(), this.allMatches.length === 0) return;
        const t = new Map;
        for (const e of this.allMatches){
            const n = t.get(e.editor) || [];
            n.push(e), t.set(e.editor, n);
        }
        for (const [e, n] of t){
            const i = n.map((r)=>({
                    range: r.match.range,
                    options: {
                        description: "find-match-highlight",
                        className: "findMatch",
                        stickiness: Ott.NeverGrowsWhenTypingAtEdges
                    }
                }));
            try {
                const r = e.deltaDecorations([], i);
                this.matchDecorations.set(e, r);
            } catch  {}
        }
    }
    updateCurrentMatchDecoration() {
        for (const [n, i] of this.currentMatchDecoration)try {
            n.removeDecorations(i);
        } catch  {}
        if (this.currentMatchDecoration.clear(), this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) return;
        const t = this.allMatches[this.currentMatchIndex], e = {
            range: t.match.range,
            options: {
                description: "find-match-current",
                className: "currentFindMatch",
                stickiness: Ott.NeverGrowsWhenTypingAtEdges
            }
        };
        try {
            const n = t.editor.deltaDecorations([], [
                e
            ]);
            this.currentMatchDecoration.set(t.editor, n);
        } catch  {}
    }
    find(t) {
        const e = this.inputValue;
        if (!e || e.length === 0) {
            this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        if (this.allMatches.length === 0 || this.currentMatchIndex < 0) {
            if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
                this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
                return;
            }
            this.currentMatchIndex = t ? this.allMatches.length - 1 : 0, this.applyMatchDecorations();
        } else t ? this.currentMatchIndex = (this.currentMatchIndex - 1 + this.allMatches.length) % this.allMatches.length : this.currentMatchIndex = (this.currentMatchIndex + 1) % this.allMatches.length;
        this.updateCurrentMatchDecoration(), this.goToMatch(this.currentMatchIndex), this.updateResultCount();
    }
    findFirst() {
        const t = this.inputValue;
        if (!t || t.length === 0) {
            this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
            this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
            return;
        }
        this.currentMatchIndex = 0, this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), this.updateResultCount();
    }
    goToMatch(t) {
        if (t < 0 || t >= this.allMatches.length) return;
        const e = this.allMatches[t], { resource: n, editor: i, match: r } = e;
        if (this.previousEditorMatch) {
            const o = this.previousEditorMatch.editor, a = this.previousEditorMatch.match, l = o !== i, c = a.range.startLineNumber !== r.range.startLineNumber || a.range.startColumn !== r.range.startColumn || a.range.endLineNumber !== r.range.endLineNumber || a.range.endColumn !== r.range.endColumn;
            if (l || c) try {
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
        }, 100), this.previousEditorMatch = e;
    }
    _onInputChanged() {
        const t = this.inputValue;
        return !t || t.length === 0 ? (this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), !1) : (this.allMatches = this.findAllMatches(), this.currentMatchIndex = this.allMatches.length > 0 ? 0 : -1, this.allMatches.length > 0 ? (this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), !0) : (this.clearAllDecorations(), !1));
    }
    _onFocusTrackerFocus() {}
    _onFocusTrackerBlur() {}
    _onFindInputFocusTrackerFocus() {}
    _onFindInputFocusTrackerBlur() {}
    focusInput() {
        this.focusFindBox();
    }
    selectAllText() {
        const t = this.getFindInputDomNode();
        if (t) {
            const e = t.querySelector("input");
            e && e.select();
        }
    }
    updateSearchString(t) {
        const e = this.getFindInputDomNode();
        if (e) {
            const n = e.querySelector("input");
            if (n) {
                n.value = t;
                const i = new Event("input", {
                    bubbles: !0
                });
                n.dispatchEvent(i);
            }
        }
    }
    async _getResultCount() {
        const t = this.inputValue;
        if (!(!t || t.length === 0)) return this.allMatches.length === 0 && (this.allMatches = this.findAllMatches()), this.allMatches.length === 0 ? {
            resultIndex: 0,
            resultCount: 0
        } : ((this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) && (this.currentMatchIndex = 0), {
            resultIndex: this.currentMatchIndex,
            resultCount: this.allMatches.length
        });
    }
};

}
