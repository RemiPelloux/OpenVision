import { He, S, Se, Zu, eNt, rn, si, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { FT } from "./arraysFind.js";
import { W$c, Zvn } from "./contentHoverStatusBar.js";
import { Fn, en } from "./dom_2.js";
import { du, va } from "./hover.js";
import { hHc, t_n } from "./hoverColorPickerParticipant.js";
import { fKe, ife } from "./hoverTypes.js";
import { $ku, sRn } from "./inlayHintsHover.js";
import { no, qr } from "./keybinding.js";
import { Qvn, qFt } from "./markdownHoverParticipant.js";
import { rt } from "./nls.js";
import { Yn, ya } from "./position.js";
import { Xt } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Mv, Vd } from "./textModel.js";
import { x } from "./tslib.es6.js";
var oRn, Hku, t7t;
export { Hku, oRn, t7t };
var __wakaru_mcv_initialized = false;
export function mcv() {
if (__wakaru_mcv_initialized) return;
__wakaru_mcv_initialized = true;
"use strict";
x(), ife(), Se(), W$c(), no(), Mv(), ya(), qi(), en(), Qvn(), hHc(), rt(), $ku(), si(), du(), FT(), oRn = class extends we {
    constructor(e, t, n, i, r, s){
        super();
        const o = t.hoverParts;
        this._renderedHoverParts = this._register(new t7t(e, n, o, i, r, s));
        const a = t.options, c = a.anchor, { showAtPosition: l, showAtSecondaryPosition: u } = oRn.computeHoverPositions(e, c.range, o);
        this.shouldAppearBeforeContent = o.some((h)=>h.isBeforeContent), this.showAtPosition = l, this.showAtSecondaryPosition = u, this.initialMousePosX = c.initialMousePosX, this.initialMousePosY = c.initialMousePosY, this.shouldFocus = a.shouldFocus, this.source = a.source;
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
    focusHoverPartWithIndex(e) {
        this._renderedHoverParts.focusHoverPartWithIndex(e);
    }
    getAccessibleWidgetContent() {
        return this._renderedHoverParts.getAccessibleContent();
    }
    getAccessibleWidgetContentAtIndex(e) {
        return this._renderedHoverParts.getAccessibleHoverContentAtIndex(e);
    }
    async updateHoverVerbosityLevel(e, t, n) {
        this._renderedHoverParts.updateHoverVerbosityLevel(e, t, n);
    }
    doesHoverAtIndexSupportVerbosityAction(e, t) {
        return this._renderedHoverParts.doesHoverAtIndexSupportVerbosityAction(e, t);
    }
    isColorPickerVisible() {
        return this._renderedHoverParts.isColorPickerVisible();
    }
    static computeHoverPositions(e, t, n) {
        let i = 1;
        if (e.hasModel()) {
            const l = e._getViewModel(), u = l.coordinatesConverter, h = u.convertModelRangeToViewRange(t), p = l.getLineMinColumn(h.startLineNumber), g = new Yn(h.startLineNumber, p);
            i = u.convertViewPositionToModelPosition(g).column;
        }
        const r = t.startLineNumber;
        let s = t.startColumn, o;
        for (const l of n){
            const u = l.range, h = u.startLineNumber === r, p = u.endLineNumber === r;
            if (h && p) {
                const f = u.startColumn, v = Math.min(s, f);
                s = Math.max(v, i);
            }
            l.forceShowAtRange && (o = u);
        }
        let a, c;
        if (o) {
            const l = o.getStartPosition();
            a = l, c = l;
        } else a = t.getStartPosition(), c = new Yn(r, s);
        return {
            showAtPosition: a,
            showAtSecondaryPosition: c
        };
    }
}, oRn = ie([
    C(4, qr),
    C(5, va)
], oRn), Hku = class {
    constructor(e, t){
        this._statusBar = t, e.appendChild(this._statusBar.hoverElement);
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
}, t7t = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._renderedParts = [], this._focusedHoverPartIndex = -1, this._context = i, this._fragment = document.createDocumentFragment(), this._register(this._renderParts(t, n, i, r, s)), this._register(this._registerListenersOnRenderedParts()), this._register(this._createEditorDecorations(e, n)), this._updateMarkdownAndColorParticipantInfo(t);
    }
    _createEditorDecorations(e, t) {
        if (t.length === 0) return we.None;
        let n = t[0].range;
        for (const r of t){
            const s = r.range;
            n = dt.plusRange(n, s);
        }
        const i = e.createDecorationsCollection();
        return i.set([
            {
                range: n,
                options: t7t._DECORATION_OPTIONS
            }
        ]), rn(()=>{
            i.clear();
        });
    }
    _renderParts(e, t, n, i, r) {
        const s = new Zvn(i, r), o = {
            fragment: this._fragment,
            statusBar: s,
            ...n
        }, a = new He;
        a.add(s);
        for (const l of e){
            const u = this._renderHoverPartsForParticipant(t, l, o);
            a.add(u);
            for (const h of u.renderedHoverParts)this._renderedParts.push({
                type: "hoverPart",
                participant: l,
                hoverPart: h.hoverPart,
                hoverElement: h.hoverElement
            });
        }
        const c = this._renderStatusBar(this._fragment, s);
        return c && (a.add(c), this._renderedParts.push({
            type: "statusBar",
            hoverElement: c.hoverElement,
            actions: c.actions
        })), a;
    }
    _renderHoverPartsForParticipant(e, t, n) {
        const i = e.filter((s)=>s.owner === t);
        return i.length > 0 ? t.renderHoverParts(n, i) : new fKe([]);
    }
    _renderStatusBar(e, t) {
        if (t.hasContent) return new Hku(e, t);
    }
    _registerListenersOnRenderedParts() {
        const e = new He;
        return this._renderedParts.forEach((t, n)=>{
            const i = t.hoverElement;
            i.tabIndex = 0, e.add(Xt(i, Fn.FOCUS_IN, (r)=>{
                r.stopPropagation(), this._focusedHoverPartIndex = n;
            })), e.add(Xt(i, Fn.FOCUS_OUT, (r)=>{
                r.stopPropagation(), this._focusedHoverPartIndex = -1;
            }));
        }), e;
    }
    _updateMarkdownAndColorParticipantInfo(e) {
        const t = e.find((n)=>n instanceof qFt && !(n instanceof sRn));
        t && (this._markdownHoverParticipant = t), this._colorHoverParticipant = e.find((n)=>n instanceof t_n);
    }
    focusHoverPartWithIndex(e) {
        e < 0 || e >= this._renderedParts.length || this._renderedParts[e].hoverElement.focus();
    }
    getAccessibleContent() {
        const e = [];
        for(let t = 0; t < this._renderedParts.length; t++)e.push(this.getAccessibleHoverContentAtIndex(t));
        return e.join(`

`);
    }
    getAccessibleHoverContentAtIndex(e) {
        const t = this._renderedParts[e];
        if (!t) return "";
        if (t.type === "statusBar") {
            const n = [
                S(1241, null)
            ];
            for (const i of t.actions){
                const r = i.actionKeybindingLabel;
                r ? n.push(S(1242, null, i.actionLabel, r)) : n.push(S(1243, null, i.actionLabel));
            }
            return n.join(`
`);
        }
        return t.participant.getAccessibleContent(t.hoverPart);
    }
    async updateHoverVerbosityLevel(e, t, n) {
        if (!this._markdownHoverParticipant) return;
        let i;
        t >= 0 ? i = {
            start: t,
            endExclusive: t + 1
        } : i = this._findRangeOfMarkdownHoverParts(this._markdownHoverParticipant);
        for(let r = i.start; r < i.endExclusive; r++){
            const s = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, r);
            if (s === void 0) continue;
            const o = await this._markdownHoverParticipant.updateMarkdownHoverVerbosityLevel(e, s);
            o && (this._renderedParts[r] = {
                type: "hoverPart",
                participant: this._markdownHoverParticipant,
                hoverPart: o.hoverPart,
                hoverElement: o.hoverElement
            });
        }
        n && (t >= 0 ? this.focusHoverPartWithIndex(t) : this._context.focus()), this._context.onContentsChanged();
    }
    doesHoverAtIndexSupportVerbosityAction(e, t) {
        if (!this._markdownHoverParticipant) return !1;
        const n = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, e);
        return n === void 0 ? !1 : this._markdownHoverParticipant.doesMarkdownHoverAtIndexSupportVerbosityAction(n, t);
    }
    isColorPickerVisible() {
        return this._colorHoverParticipant?.isColorPickerVisible() ?? !1;
    }
    _normalizedIndexToMarkdownHoverIndexRange(e, t) {
        const n = this._renderedParts[t];
        if (!n || n.type !== "hoverPart" || !(n.participant === e)) return;
        const r = this._renderedParts.findIndex((s)=>s.type === "hoverPart" && s.participant === e);
        if (r === -1) throw new Zu;
        return t - r;
    }
    _findRangeOfMarkdownHoverParts(e) {
        const t = (r)=>r.type === "hoverPart" && r.participant === e, n = this._renderedParts.findIndex(t), i = eNt(this._renderedParts, t);
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
}, t7t._DECORATION_OPTIONS = Vd.register({
    description: "content-hover-highlight",
    className: "hoverHighlight"
}), t7t = ie([
    C(4, qr),
    C(5, va)
], t7t);

}
