import { D, Ei, Nt, Pn, Qe, sYu, st, xh } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { Foi, NVd } from "./contentHoverStatusBar.js";
import { Hn, Pr } from "./dom_2.js";
import { av, gS } from "./hover.js";
import { $oi, rKd } from "./hoverColorPickerParticipant.js";
import { Xyt, cRe } from "./hoverTypes.js";
import { Jbi, MPp } from "./inlayHintsHover.js";
import { Al, ru } from "./keybinding.js";
import { Boi, Cvn } from "./markdownHoverParticipant.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Kg, PC } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { li } from "./ze.js";
var eyi, DPp, W0n;
export { DPp, W0n, eyi };
var __wakaru_LI1_initialized = false;
export function LI1() {
if (__wakaru_LI1_initialized) return;
__wakaru_LI1_initialized = true;
"use strict";
E(), cRe(), Qe(), NVd(), ru(), PC(), jc(), Qs(), Hn(), Boi(), rKd(), Bt(), MPp(), Ei(), gS(), p4(), eyi = class extends st {
    constructor(t, e, n, i, r, s){
        super();
        const o = e.hoverParts;
        this._renderedHoverParts = this._register(new W0n(t, n, o, i, r, s));
        const a = e.options, l = a.anchor, { showAtPosition: c, showAtSecondaryPosition: u } = eyi.computeHoverPositions(t, l.range, o);
        this.shouldAppearBeforeContent = o.some((d)=>d.isBeforeContent), this.showAtPosition = c, this.showAtSecondaryPosition = u, this.initialMousePosX = l.initialMousePosX, this.initialMousePosY = l.initialMousePosY, this.shouldFocus = a.shouldFocus, this.source = a.source;
    }
    get domNode() {
        return this._renderedHoverParts.domNode;
    }
    get domNodeHasChildren() {
        return this._renderedHoverParts.domNodeHasChildren;
    }
    get focusedHoverPartIndex() {
        return this._renderedHoverParts.focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedHoverParts.hoverPartsCount;
    }
    focusHoverPartWithIndex(t) {
        this._renderedHoverParts.focusHoverPartWithIndex(t);
    }
    getAccessibleWidgetContent() {
        return this._renderedHoverParts.getAccessibleContent();
    }
    getAccessibleWidgetContentAtIndex(t) {
        return this._renderedHoverParts.getAccessibleHoverContentAtIndex(t);
    }
    async updateHoverVerbosityLevel(t, e, n) {
        this._renderedHoverParts.updateHoverVerbosityLevel(t, e, n);
    }
    doesHoverAtIndexSupportVerbosityAction(t, e) {
        return this._renderedHoverParts.doesHoverAtIndexSupportVerbosityAction(t, e);
    }
    isColorPickerVisible() {
        return this._renderedHoverParts.isColorPickerVisible();
    }
    static computeHoverPositions(t, e, n) {
        let i = 1;
        if (t.hasModel()) {
            const c = t._getViewModel(), u = c.coordinatesConverter, d = u.convertModelRangeToViewRange(e), h = c.getLineMinColumn(d.startLineNumber), p = new er(d.startLineNumber, h);
            i = u.convertViewPositionToModelPosition(p).column;
        }
        const r = e.startLineNumber;
        let s = e.startColumn, o;
        for (const c of n){
            const u = c.range, d = u.startLineNumber === r, h = u.endLineNumber === r;
            if (d && h) {
                const g = u.startColumn, f = Math.min(s, g);
                s = Math.max(f, i);
            }
            c.forceShowAtRange && (o = u);
        }
        let a, l;
        if (o) {
            const c = o.getStartPosition();
            a = c, l = c;
        } else a = e.getStartPosition(), l = new er(r, s);
        return {
            showAtPosition: a,
            showAtSecondaryPosition: l
        };
    }
}, eyi = Re([
    F(4, Al),
    F(5, av)
], eyi), DPp = class {
    constructor(t, e){
        this._statusBar = e, t.appendChild(this._statusBar.hoverElement);
    }
    get hoverElement() {
        return this._statusBar.hoverElement;
    }
    get actions() {
        return this._statusBar.actions;
    }
    dispose() {
        this._statusBar.dispose();
    }
}, W0n = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._renderedParts = [], this._focusedHoverPartIndex = -1, this._context = i, this._fragment = document.createDocumentFragment(), this._register(this._renderParts(e, n, i, r, s)), this._register(this._registerListenersOnRenderedParts()), this._register(this._createEditorDecorations(t, n)), this._updateMarkdownAndColorParticipantInfo(e);
    }
    _createEditorDecorations(t, e) {
        if (e.length === 0) return st.None;
        let n = e[0].range;
        for (const r of e){
            const s = r.range;
            n = qt.plusRange(n, s);
        }
        const i = t.createDecorationsCollection();
        return i.set([
            {
                range: n,
                options: W0n._DECORATION_OPTIONS
            }
        ]), Pn(()=>{
            i.clear();
        });
    }
    _renderParts(t, e, n, i, r) {
        const s = new Foi(i, r), o = {
            fragment: this._fragment,
            statusBar: s,
            ...n
        }, a = new Nt;
        a.add(s);
        for (const c of t){
            const u = this._renderHoverPartsForParticipant(e, c, o);
            a.add(u);
            for (const d of u.renderedHoverParts)this._renderedParts.push({
                type: "hoverPart",
                participant: c,
                hoverPart: d.hoverPart,
                hoverElement: d.hoverElement
            });
        }
        const l = this._renderStatusBar(this._fragment, s);
        return l && (a.add(l), this._renderedParts.push({
            type: "statusBar",
            hoverElement: l.hoverElement,
            actions: l.actions
        })), a;
    }
    _renderHoverPartsForParticipant(t, e, n) {
        const i = t.filter((s)=>s.owner === e);
        return i.length > 0 ? e.renderHoverParts(n, i) : new Xyt([]);
    }
    _renderStatusBar(t, e) {
        if (e.hasContent) return new DPp(t, e);
    }
    _registerListenersOnRenderedParts() {
        const t = new Nt;
        return this._renderedParts.forEach((e, n)=>{
            const i = e.hoverElement;
            i.tabIndex = 0, t.add(li(i, Pr.FOCUS_IN, (r)=>{
                r.stopPropagation(), this._focusedHoverPartIndex = n;
            })), t.add(li(i, Pr.FOCUS_OUT, (r)=>{
                r.stopPropagation(), this._focusedHoverPartIndex = -1;
            }));
        }), t;
    }
    _updateMarkdownAndColorParticipantInfo(t) {
        const e = t.find((n)=>n instanceof Cvn && !(n instanceof Jbi));
        e && (this._markdownHoverParticipant = e), this._colorHoverParticipant = t.find((n)=>n instanceof $oi);
    }
    focusHoverPartWithIndex(t) {
        t < 0 || t >= this._renderedParts.length || this._renderedParts[t].hoverElement.focus();
    }
    getAccessibleContent() {
        const t = [];
        for(let e = 0; e < this._renderedParts.length; e++)t.push(this.getAccessibleHoverContentAtIndex(e));
        return t.join(`

`);
    }
    getAccessibleHoverContentAtIndex(t) {
        const e = this._renderedParts[t];
        if (!e) return "";
        if (e.type === "statusBar") {
            const n = [
                D(1241, null)
            ];
            for (const i of e.actions){
                const r = i.actionKeybindingLabel;
                r ? n.push(D(1242, null, i.actionLabel, r)) : n.push(D(1243, null, i.actionLabel));
            }
            return n.join(`
`);
        }
        return e.participant.getAccessibleContent(e.hoverPart);
    }
    async updateHoverVerbosityLevel(t, e, n) {
        if (!this._markdownHoverParticipant) return;
        let i;
        e >= 0 ? i = {
            start: e,
            endExclusive: e + 1
        } : i = this._findRangeOfMarkdownHoverParts(this._markdownHoverParticipant);
        for(let r = i.start; r < i.endExclusive; r++){
            const s = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, r);
            if (s === void 0) continue;
            const o = await this._markdownHoverParticipant.updateMarkdownHoverVerbosityLevel(t, s);
            o && (this._renderedParts[r] = {
                type: "hoverPart",
                participant: this._markdownHoverParticipant,
                hoverPart: o.hoverPart,
                hoverElement: o.hoverElement
            });
        }
        n && (e >= 0 ? this.focusHoverPartWithIndex(e) : this._context.focus()), this._context.onContentsChanged();
    }
    doesHoverAtIndexSupportVerbosityAction(t, e) {
        if (!this._markdownHoverParticipant) return !1;
        const n = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, t);
        return n === void 0 ? !1 : this._markdownHoverParticipant.doesMarkdownHoverAtIndexSupportVerbosityAction(n, e);
    }
    isColorPickerVisible() {
        return this._colorHoverParticipant?.isColorPickerVisible() ?? !1;
    }
    _normalizedIndexToMarkdownHoverIndexRange(t, e) {
        const n = this._renderedParts[e];
        if (!n || n.type !== "hoverPart" || !(n.participant === t)) return;
        const r = this._renderedParts.findIndex((s)=>s.type === "hoverPart" && s.participant === t);
        if (r === -1) throw new xh;
        return e - r;
    }
    _findRangeOfMarkdownHoverParts(t) {
        const e = (r)=>r.type === "hoverPart" && r.participant === t, n = this._renderedParts.findIndex(e), i = sYu(this._renderedParts, e);
        return {
            start: n,
            endExclusive: i + 1
        };
    }
    get domNode() {
        return this._fragment;
    }
    get domNodeHasChildren() {
        return this._fragment.hasChildNodes();
    }
    get focusedHoverPartIndex() {
        return this._focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedParts.length;
    }
}, W0n._DECORATION_OPTIONS = Kg.register({
    description: "content-hover-highlight",
    className: "hoverHighlight"
}), W0n = Re([
    F(4, Al),
    F(5, av)
], W0n);

}
