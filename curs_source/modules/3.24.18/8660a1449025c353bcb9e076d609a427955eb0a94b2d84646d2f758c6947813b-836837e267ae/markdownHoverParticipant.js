import { D, Ei, I5, Nt, Nte, Pn, Qe, uP } from "./Iwo.js";
import { Sj, bo } from "./arrays.js";
import { Ote, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { gs, yt } from "./codicons.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Hn } from "./dom_2.js";
import { FVd } from "./getHover.js";
import { av, dnt, gS } from "./hover.js";
import { BBt, UBt, wEr } from "./hoverActionIds.js";
import { cRe } from "./hoverTypes.js";
import { Bu, Iw, aqo, lqo } from "./hoverWidget.js";
import { Ek, zf } from "./htmlContent.js";
import { b_ } from "./iconRegistry.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { Kp, Ph } from "./language.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy, w7 } from "./languages.js";
import { Coe } from "./markdownRenderer_2.js";
import { Bt } from "./nls.js";
import { kc, qc } from "./opener.js";
import { Qs, qt } from "./range.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $u, BVd, Gfn, Ii, UVd, fr, qa, vzo } from "./ze.js";
var mnt, jVd, $Vd, Iwe, _zo, Cvn, Tvn, HVd;
export { $Vd, Cvn, HVd, Iwe, Tvn, _zo, jVd, mnt };
var __wakaru_Boi_initialized = false;
export function Boi() {
if (__wakaru_Boi_initialized) return;
__wakaru_Boi_initialized = true;
"use strict";
E(), Hn(), bo(), yo(), Ek(), Qe(), Coe(), wEr(), Qs(), Kp(), cRe(), Bt(), or(), qc(), Dg(), Iy(), b_(), gs(), ta(), Ei(), ru(), Iw(), Ma(), gS(), qn(), FVd(), rs(), mnt = Ii, jVd = qa("hover-increase-verbosity", yt.add, D(1272, null)), $Vd = qa("hover-decrease-verbosity", yt.remove, D(1273, null)), Iwe = class {
    constructor(t, e, n, i, r, s = void 0){
        this.owner = t, this.range = e, this.contents = n, this.isBeforeContent = i, this.ordinal = r, this.source = s;
    }
    isValidForHoverAnchor(t) {
        return t.type === 1 && this.range.startColumn <= t.range.startColumn && this.range.endColumn >= t.range.endColumn;
    }
}, _zo = class {
    constructor(t, e, n){
        this.hover = t, this.hoverProvider = e, this.hoverPosition = n;
    }
    supportsVerbosityAction(t) {
        switch(t){
            case w7.Increase:
                return this.hover.canIncreaseVerbosity ?? !1;
            case w7.Decrease:
                return this.hover.canDecreaseVerbosity ?? !1;
        }
    }
}, Cvn = class {
    constructor(t, e, n, i, r, s, o, a){
        this._editor = t, this._languageService = e, this._openerService = n, this._configurationService = i, this._languageFeaturesService = r, this._keybindingService = s, this._hoverService = o, this._commandService = a, this.hoverOrdinal = 3;
    }
    createLoadingMessage(t) {
        return new Iwe(this, t.range, [
            new zf().appendText(D(1274, null))
        ], !1, 2e3);
    }
    computeSync(t, e) {
        if (!this._editor.hasModel() || t.type !== 1) return [];
        if (this._editor.isChatCodeblock === !0) return [];
        const n = this._editor.getModel(), i = t.range.startLineNumber, r = n.getLineMaxColumn(i), s = [];
        let o = 1e3;
        const a = n.getLineLength(i), l = n.getLanguageIdAtPosition(t.range.startLineNumber, t.range.startColumn), c = this._editor.getOption(122), u = this._configurationService.getValue("editor.maxTokenizationLineLength", {
            overrideIdentifier: l
        });
        let d = !1;
        c >= 0 && a > c && t.range.startColumn >= c && (d = !0, s.push(new Iwe(this, t.range, [
            {
                value: D(1275, null)
            }
        ], !1, o++))), !d && typeof u == "number" && a >= u && s.push(new Iwe(this, t.range, [
            {
                value: D(1276, null)
            }
        ], !1, o++));
        let h = !1;
        for (const p of e){
            const g = p.range.startLineNumber === i ? p.range.startColumn : 1, f = p.range.endLineNumber === i ? p.range.endColumn : r, _ = p.options.hoverMessage;
            if (!_ || Gfn(_)) continue;
            p.options.beforeContentClassName && (h = !0);
            const b = new qt(t.range.startLineNumber, g, t.range.startLineNumber, f);
            s.push(new Iwe(this, b, Nte(_), h, o++));
        }
        return s;
    }
    computeAsync(t, e, n, i) {
        if (!this._editor.hasModel() || t.type !== 1 || this._editor.isChatCodeblock === !0) return Ote.EMPTY;
        const r = this._editor.getModel(), s = this._languageFeaturesService.hoverProvider;
        return s.has(r) ? this._getMarkdownHovers(s, r, t, i) : Ote.EMPTY;
    }
    _getMarkdownHovers(t, e, n, i) {
        if (this._editor.isChatCodeblock === !0) return Ote.EMPTY;
        const r = n.range.getStartPosition();
        return vzo(t, e, r, i).filter((a)=>!Gfn(a.hover.contents)).map((a)=>{
            const l = a.hover.range ? qt.lift(a.hover.range) : n.range, c = new _zo(a.hover, a.provider, r);
            return new Iwe(this, l, a.hover.contents, !1, a.ordinal, c);
        });
    }
    renderHoverParts(t, e) {
        return this._renderedHoverParts = new HVd(e, t.fragment, this, this._editor, this._languageService, this._openerService, this._commandService, this._keybindingService, this._hoverService, this._configurationService, t.onContentsChanged), this._renderedHoverParts;
    }
    handleScroll(t) {
        this._renderedHoverParts?.handleScroll(t);
    }
    getAccessibleContent(t) {
        return this._renderedHoverParts?.getAccessibleContent(t) ?? "";
    }
    doesMarkdownHoverAtIndexSupportVerbosityAction(t, e) {
        return this._renderedHoverParts?.doesMarkdownHoverAtIndexSupportVerbosityAction(t, e) ?? !1;
    }
    updateMarkdownHoverVerbosityLevel(t, e) {
        return Promise.resolve(this._renderedHoverParts?.updateMarkdownHoverPartVerbosityLevel(t, e));
    }
}, Cvn = Re([
    F(1, Ph),
    F(2, kc),
    F(3, yi),
    F(4, Nd),
    F(5, Al),
    F(6, av),
    F(7, nr)
], Cvn), Tvn = class {
    constructor(t, e, n, i){
        this.hoverPart = t, this.hoverElement = e, this.disposables = n, this.actionsContainer = i;
    }
    get hoverAccessibleContent() {
        return this.hoverElement.innerText.trim();
    }
    dispose() {
        this.disposables.dispose();
    }
}, HVd = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        this._hoverParticipant = n, this._editor = i, this._languageService = r, this._openerService = s, this._commandService = o, this._keybindingService = a, this._hoverService = l, this._configurationService = c, this._onFinishedRendering = u, this._ongoingHoverOperations = new Map, this._disposables = new Nt, this.renderedHoverParts = this._renderHoverParts(t, e, this._onFinishedRendering), this._disposables.add(Pn(()=>{
            this.renderedHoverParts.forEach((d)=>{
                d.dispose();
            }), this._ongoingHoverOperations.forEach((d)=>{
                d.tokenSource.dispose(!0);
            });
        }));
    }
    _renderHoverParts(t, e, n) {
        return t.sort(I5((i)=>i.ordinal, Sj)), t.map((i)=>{
            const r = this._renderHoverPart(i, n);
            return e.appendChild(r.hoverElement), r;
        });
    }
    _renderHoverPart(t, e) {
        const n = this._renderMarkdownHover(t, e), i = n.hoverElement, r = t.source, s = new Nt;
        if (s.add(n), !r) return new Tvn(t, i, s);
        const o = r.supportsVerbosityAction(w7.Increase), a = r.supportsVerbosityAction(w7.Decrease);
        if (!o && !a) return new Tvn(t, i, s);
        const l = mnt("div.verbosity-actions"), c = i.firstElementChild;
        if (!$u(c)) return new Tvn(t, i, s);
        c.prepend(l);
        const u = mnt("div.verbosity-actions-inner");
        return l.append(u), s.add(this._renderHoverExpansionAction(u, w7.Increase, o)), s.add(this._renderHoverExpansionAction(u, w7.Decrease, a)), new Tvn(t, i, s, u);
    }
    _renderMarkdownHover(t, e) {
        const n = document.createElement("div"), i = mnt("div.hover-row");
        n.appendChild(i), i.tabIndex = 0;
        const r = BVd(this._editor, t, this._languageService, this._openerService, e);
        return i.appendChild(r.hoverElement), {
            hoverPart: t,
            hoverElement: n,
            dispose: ()=>{
                r.dispose();
            }
        };
    }
    _renderHoverExpansionAction(t, e, n) {
        const i = new Nt, r = e === w7.Increase, s = fr(t, mnt(Gn.asCSSSelector(r ? jVd : $Vd)));
        s.tabIndex = 0;
        const o = i.add(new dnt("mouse", void 0, {
            target: t,
            position: {
                hoverPosition: Bu.LEFT
            }
        }, this._configurationService, this._hoverService));
        if (i.add(this._hoverService.setupManagedHover(o, s, UVd(this._keybindingService, e))), !n) return s.classList.add("disabled"), i;
        s.classList.add("enabled");
        const a = ()=>this._commandService.executeCommand(e === w7.Increase ? BBt : UBt, {
                focus: !0
            });
        return i.add(new aqo(s, a)), i.add(new lqo(s, a, [
            Ze.Enter,
            Ze.Space
        ])), i;
    }
    handleScroll(t) {
        this.renderedHoverParts.forEach((e)=>{
            const n = e.actionsContainer;
            if (!n) return;
            const i = e.hoverElement, s = t.scrollTop + t.height, o = i.offsetTop, a = i.clientHeight, l = o + a, c = 22;
            let u;
            l <= s || o >= s ? u = a - c : u = s - o - c, n.style.top = `${u}px`;
        });
    }
    async updateMarkdownHoverPartVerbosityLevel(t, e) {
        const n = this._editor.getModel();
        if (!n) return;
        const i = this._getRenderedHoverPartAtIndex(e), r = i?.hoverPart.source;
        if (!i || !r?.supportsVerbosityAction(t)) return;
        const s = await this._fetchHover(r, n, t);
        if (!s) return;
        const o = new _zo(s, r.hoverProvider, r.hoverPosition), a = i.hoverPart, l = new Iwe(this._hoverParticipant, a.range, s.contents, a.isBeforeContent, a.ordinal, o), c = this._updateRenderedHoverPart(e, l);
        if (c) return {
            hoverPart: l,
            hoverElement: c.hoverElement
        };
    }
    getAccessibleContent(t) {
        const e = this.renderedHoverParts.findIndex((s)=>s.hoverPart === t);
        if (e === -1) return;
        const n = this._getRenderedHoverPartAtIndex(e);
        return n ? n.hoverElement.innerText.replace(/[^\S\n\r]+/gu, " ") : void 0;
    }
    doesMarkdownHoverAtIndexSupportVerbosityAction(t, e) {
        const n = this._getRenderedHoverPartAtIndex(t), i = n?.hoverPart.source;
        return !(!n || !i?.supportsVerbosityAction(e));
    }
    async _fetchHover(t, e, n) {
        let i = n === w7.Increase ? 1 : -1;
        const r = t.hoverProvider, s = this._ongoingHoverOperations.get(r);
        s && (s.tokenSource.cancel(), i += s.verbosityDelta);
        const o = new El;
        this._ongoingHoverOperations.set(r, {
            verbosityDelta: i,
            tokenSource: o
        });
        const a = {
            verbosityRequest: {
                verbosityDelta: i,
                previousHover: t.hover
            }
        };
        let l;
        try {
            l = await Promise.resolve(r.provideHover(e, t.hoverPosition, o.token, a));
        } catch (c) {
            uP(c);
        }
        return o.dispose(), this._ongoingHoverOperations.delete(r), l;
    }
    _updateRenderedHoverPart(t, e) {
        if (t >= this.renderedHoverParts.length || t < 0) return;
        const n = this._renderHoverPart(e, this._onFinishedRendering), i = this.renderedHoverParts[t], r = i.hoverElement, s = n.hoverElement, o = Array.from(s.children);
        r.replaceChildren(...o);
        const a = new Tvn(e, r, n.disposables, n.actionsContainer);
        return i.dispose(), this.renderedHoverParts[t] = a, a;
    }
    _getRenderedHoverPartAtIndex(t) {
        return this.renderedHoverParts[t];
    }
    dispose() {
        this._disposables.dispose();
    }
};

}
