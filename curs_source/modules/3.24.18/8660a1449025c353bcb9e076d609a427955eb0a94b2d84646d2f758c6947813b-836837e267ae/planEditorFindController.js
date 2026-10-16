import { SEw, jFf, kEw, t4l, wEw, yEw } from "./BA.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { CEw } from "./cssHighlightSearch.js";
import { av, gS } from "./hover.js";
import { Al, ru } from "./keybinding.js";
import { _ks, bEw } from "./markdownPlanEditorFindWidget.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var bks;
export { bks };
var __wakaru_TEw_initialized = false;
export function TEw() {
if (__wakaru_TEw_initialized) return;
__wakaru_TEw_initialized = true;
"use strict";
E(), Qe(), Gt(), Hi(), pf(), gS(), ru(), bEw(), CEw(), bks = class extends st {
    constructor(t, e, n, i, r){
        super(), this._options = t, this._contextViewService = e, this._contextKeyService = n, this._hoverService = i, this._keybindingService = r, this._hasFindResultEmitter = this._register(new tt), this._onDidStopFindEmitter = this._register(new tt), this.hasFindResult = this._hasFindResultEmitter.event, this.onDidStopFind = this._onDidStopFindEmitter.event, this.checkImeCompletionState = !0, this._v2SearchState = t4l();
    }
    mount(t) {
        this._findWidget = this._register(new _ks(this, this._contextViewService, this._contextKeyService, this._hoverService, this._keybindingService));
        const e = document.createElement("div");
        e.className = "markdown-plan-editor-find-widget";
        const n = t.querySelector(".plan-editor");
        (n ?? t).appendChild(e), e.appendChild(this._findWidget.getDomNode());
        const i = (n ?? t).clientWidth || 0;
        this._findWidget.layout(i);
    }
    reveal() {
        if (!this._findWidget) return;
        this._findWidget.reveal();
        const t = this._options.getContainer(), n = (t?.querySelector(".plan-editor") ?? t)?.clientWidth || 0;
        this._findWidget.layout(n);
    }
    layout(t) {
        this._findWidget?.layout(t);
    }
    getWidget() {
        return this._findWidget;
    }
    find(t, e) {
        this._navigateV2Match(e);
    }
    updateFind(t, e) {
        const n = this._searchV2Editor(t, {
            isCaseSensitive: e.isCaseSensitive
        });
        this._hasFindResultEmitter.fire(n > 0);
    }
    stopFind(t) {
        this._clearV2SearchHighlights(), this._onDidStopFindEmitter.fire();
    }
    focus() {}
    async getResultCount() {
        const { ranges: t, currentIndex: e } = this._v2SearchState;
        return {
            resultCount: t.length,
            resultIndex: e >= 0 ? e : 0
        };
    }
    _searchV2Editor(t, e) {
        if (this._clearV2SearchHighlights(), !t) return this._v2SearchState = t4l(), 0;
        const n = this._options.getContainer();
        if (!n) return 0;
        const i = n.querySelector(".plan-editor .tiptap, .plan-editor .ProseMirror");
        if (!i) return 0;
        const r = yEw(i, t, e);
        return this._v2SearchState = {
            query: t,
            ranges: r,
            currentIndex: r.length > 0 ? 0 : -1
        }, jFf(this._v2SearchState), r.length > 0 && this._scrollToV2Match(0), r.length;
    }
    _scrollToV2Match(t) {
        t < 0 || t >= this._v2SearchState.ranges.length || (this._v2SearchState.currentIndex = t, jFf(this._v2SearchState), kEw(this._v2SearchState));
    }
    _navigateV2Match(t) {
        if (this._v2SearchState.ranges.length === 0) return;
        const e = wEw(this._v2SearchState, t);
        this._scrollToV2Match(e);
    }
    _clearV2SearchHighlights() {
        SEw(), this._v2SearchState = t4l();
    }
    dispose() {
        this._clearV2SearchHighlights(), super.dispose();
    }
}, bks = Re([
    F(1, aL),
    F(2, Rr),
    F(3, av),
    F(4, Al)
], bks);

}
