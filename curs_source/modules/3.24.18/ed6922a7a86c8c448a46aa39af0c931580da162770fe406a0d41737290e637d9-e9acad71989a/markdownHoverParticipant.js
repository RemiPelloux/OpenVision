import { DP, EV, He, S, Se, c1, rn, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { JB, dr } from "./arrays.js";
import { bn, eW } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Pe, _i } from "./codicons.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { en } from "./dom_2.js";
import { j$c } from "./getHover.js";
import { Nle, du, va } from "./hover.js";
import { Iyi, gmt, mmt } from "./hoverActionIds.js";
import { ife } from "./hoverTypes.js";
import { Tb, iis, nis, wl } from "./hoverWidget.js";
import { Ec, _g } from "./htmlContent.js";
import { dh } from "./iconRegistry.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { kl, pc } from "./language.js";
import { Jc, kh } from "./languageFeatures.js";
import { S3, Wp } from "./languages.js";
import { g5 } from "./markdownRenderer_2.js";
import { rt } from "./nls.js";
import { eo, ko } from "./opener.js";
import { Pi, Ve, Vis, Ye, nu, pFt, q$c, z$c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var _5e, K$c, Y$c, Ble, jis, qFt, zFt, X$c;
export { Ble, K$c, X$c, Y$c, _5e, jis, qFt, zFt };
var __wakaru_Qvn_initialized = false;
export function Qvn() {
if (__wakaru_Qvn_initialized) return;
__wakaru_Qvn_initialized = true;
"use strict";
x(), en(), dr(), Ar(), _g(), Se(), g5(), Iyi(), qi(), kl(), ife(), rt(), Cn(), ko(), kh(), Wp(), dh(), _i(), Sr(), si(), no(), Tb(), Pr(), du(), bn(), j$c(), vi(), _5e = Ve, K$c = Pi("hover-increase-verbosity", Pe.add, S(1272, null)), Y$c = Pi("hover-decrease-verbosity", Pe.remove, S(1273, null)), Ble = class {
    constructor(e, t, n, i, r, s = void 0){
        this.owner = e, this.range = t, this.contents = n, this.isBeforeContent = i, this.ordinal = r, this.source = s;
    }
    isValidForHoverAnchor(e) {
        return e.type === 1 && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn;
    }
}, jis = class {
    constructor(e, t, n){
        this.hover = e, this.hoverProvider = t, this.hoverPosition = n;
    }
    supportsVerbosityAction(e) {
        switch(e){
            case S3.Increase:
                return this.hover.canIncreaseVerbosity ?? !1;
            case S3.Decrease:
                return this.hover.canDecreaseVerbosity ?? !1;
        }
    }
}, qFt = class {
    constructor(e, t, n, i, r, s, o, a){
        this._editor = e, this._languageService = t, this._openerService = n, this._configurationService = i, this._languageFeaturesService = r, this._keybindingService = s, this._hoverService = o, this._commandService = a, this.hoverOrdinal = 3;
    }
    createLoadingMessage(e) {
        return new Ble(this, e.range, [
            new Ec().appendText(S(1274, null))
        ], !1, 2e3);
    }
    computeSync(e, t) {
        if (!this._editor.hasModel() || e.type !== 1) return [];
        if (this._editor.isChatCodeblock === !0) return [];
        const n = this._editor.getModel(), i = e.range.startLineNumber, r = n.getLineMaxColumn(i), s = [];
        let o = 1e3;
        const a = n.getLineLength(i), c = n.getLanguageIdAtPosition(e.range.startLineNumber, e.range.startColumn), l = this._editor.getOption(122), u = this._configurationService.getValue("editor.maxTokenizationLineLength", {
            overrideIdentifier: c
        });
        let h = !1;
        l >= 0 && a > l && e.range.startColumn >= l && (h = !0, s.push(new Ble(this, e.range, [
            {
                value: S(1275, null)
            }
        ], !1, o++))), !h && typeof u == "number" && a >= u && s.push(new Ble(this, e.range, [
            {
                value: S(1276, null)
            }
        ], !1, o++));
        let p = !1;
        for (const g of t){
            const f = g.range.startLineNumber === i ? g.range.startColumn : 1, v = g.range.endLineNumber === i ? g.range.endColumn : r, b = g.options.hoverMessage;
            if (!b || pFt(b)) continue;
            g.options.beforeContentClassName && (p = !0);
            const y = new dt(e.range.startLineNumber, f, e.range.startLineNumber, v);
            s.push(new Ble(this, y, EV(b), p, o++));
        }
        return s;
    }
    computeAsync(e, t, n, i) {
        if (!this._editor.hasModel() || e.type !== 1 || this._editor.isChatCodeblock === !0) return eW.EMPTY;
        const r = this._editor.getModel(), s = this._languageFeaturesService.hoverProvider;
        return s.has(r) ? this._getMarkdownHovers(s, r, e, i) : eW.EMPTY;
    }
    _getMarkdownHovers(e, t, n, i) {
        if (this._editor.isChatCodeblock === !0) return eW.EMPTY;
        const r = n.range.getStartPosition();
        return Vis(e, t, r, i).filter((a)=>!pFt(a.hover.contents)).map((a)=>{
            const c = a.hover.range ? dt.lift(a.hover.range) : n.range, l = new jis(a.hover, a.provider, r);
            return new Ble(this, c, a.hover.contents, !1, a.ordinal, l);
        });
    }
    renderHoverParts(e, t) {
        return this._renderedHoverParts = new X$c(t, e.fragment, this, this._editor, this._languageService, this._openerService, this._commandService, this._keybindingService, this._hoverService, this._configurationService, e.onContentsChanged), this._renderedHoverParts;
    }
    handleScroll(e) {
        this._renderedHoverParts?.handleScroll(e);
    }
    getAccessibleContent(e) {
        return this._renderedHoverParts?.getAccessibleContent(e) ?? "";
    }
    doesMarkdownHoverAtIndexSupportVerbosityAction(e, t) {
        return this._renderedHoverParts?.doesMarkdownHoverAtIndexSupportVerbosityAction(e, t) ?? !1;
    }
    updateMarkdownHoverVerbosityLevel(e, t) {
        return Promise.resolve(this._renderedHoverParts?.updateMarkdownHoverPartVerbosityLevel(e, t));
    }
}, qFt = ie([
    C(1, pc),
    C(2, eo),
    C(3, qt),
    C(4, Jc),
    C(5, qr),
    C(6, va),
    C(7, $n)
], qFt), zFt = class {
    constructor(e, t, n, i){
        this.hoverPart = e, this.hoverElement = t, this.disposables = n, this.actionsContainer = i;
    }
    get hoverAccessibleContent() {
        return this.hoverElement.innerText.trim();
    }
    dispose() {
        this.disposables.dispose();
    }
}, X$c = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        this._hoverParticipant = n, this._editor = i, this._languageService = r, this._openerService = s, this._commandService = o, this._keybindingService = a, this._hoverService = c, this._configurationService = l, this._onFinishedRendering = u, this._ongoingHoverOperations = new Map, this._disposables = new He, this.renderedHoverParts = this._renderHoverParts(e, t, this._onFinishedRendering), this._disposables.add(rn(()=>{
            this.renderedHoverParts.forEach((h)=>{
                h.dispose();
            }), this._ongoingHoverOperations.forEach((h)=>{
                h.tokenSource.dispose(!0);
            });
        }));
    }
    _renderHoverParts(e, t, n) {
        return e.sort(DP((i)=>i.ordinal, JB)), e.map((i)=>{
            const r = this._renderHoverPart(i, n);
            return t.appendChild(r.hoverElement), r;
        });
    }
    _renderHoverPart(e, t) {
        const n = this._renderMarkdownHover(e, t), i = n.hoverElement, r = e.source, s = new He;
        if (s.add(n), !r) return new zFt(e, i, s);
        const o = r.supportsVerbosityAction(S3.Increase), a = r.supportsVerbosityAction(S3.Decrease);
        if (!o && !a) return new zFt(e, i, s);
        const c = _5e("div.verbosity-actions"), l = i.firstElementChild;
        if (!nu(l)) return new zFt(e, i, s);
        l.prepend(c);
        const u = _5e("div.verbosity-actions-inner");
        return c.append(u), s.add(this._renderHoverExpansionAction(u, S3.Increase, o)), s.add(this._renderHoverExpansionAction(u, S3.Decrease, a)), new zFt(e, i, s, u);
    }
    _renderMarkdownHover(e, t) {
        const n = document.createElement("div"), i = _5e("div.hover-row");
        n.appendChild(i), i.tabIndex = 0;
        const r = q$c(this._editor, e, this._languageService, this._openerService, t);
        return i.appendChild(r.hoverElement), {
            hoverPart: e,
            hoverElement: n,
            dispose: ()=>{
                r.dispose();
            }
        };
    }
    _renderHoverExpansionAction(e, t, n) {
        const i = new He, r = t === S3.Increase, s = Ye(e, _5e(Ft.asCSSSelector(r ? K$c : Y$c)));
        s.tabIndex = 0;
        const o = i.add(new Nle("mouse", void 0, {
            target: e,
            position: {
                hoverPosition: wl.LEFT
            }
        }, this._configurationService, this._hoverService));
        if (i.add(this._hoverService.setupManagedHover(o, s, z$c(this._keybindingService, t))), !n) return s.classList.add("disabled"), i;
        s.classList.add("enabled");
        const a = ()=>this._commandService.executeCommand(t === S3.Increase ? mmt : gmt, {
                focus: !0
            });
        return i.add(new nis(s, a)), i.add(new iis(s, a, [
            fe.Enter,
            fe.Space
        ])), i;
    }
    handleScroll(e) {
        this.renderedHoverParts.forEach((t)=>{
            const n = t.actionsContainer;
            if (!n) return;
            const i = t.hoverElement, s = e.scrollTop + e.height, o = i.offsetTop, a = i.clientHeight, c = o + a, l = 22;
            let u;
            c <= s || o >= s ? u = a - l : u = s - o - l, n.style.top = `${u}px`;
        });
    }
    async updateMarkdownHoverPartVerbosityLevel(e, t) {
        const n = this._editor.getModel();
        if (!n) return;
        const i = this._getRenderedHoverPartAtIndex(t), r = i?.hoverPart.source;
        if (!i || !r?.supportsVerbosityAction(e)) return;
        const s = await this._fetchHover(r, n, e);
        if (!s) return;
        const o = new jis(s, r.hoverProvider, r.hoverPosition), a = i.hoverPart, c = new Ble(this._hoverParticipant, a.range, s.contents, a.isBeforeContent, a.ordinal, o), l = this._updateRenderedHoverPart(t, c);
        if (l) return {
            hoverPart: c,
            hoverElement: l.hoverElement
        };
    }
    getAccessibleContent(e) {
        const t = this.renderedHoverParts.findIndex((s)=>s.hoverPart === e);
        if (t === -1) return;
        const n = this._getRenderedHoverPartAtIndex(t);
        return n ? n.hoverElement.innerText.replace(/[^\S\n\r]+/gu, " ") : void 0;
    }
    doesMarkdownHoverAtIndexSupportVerbosityAction(e, t) {
        const n = this._getRenderedHoverPartAtIndex(e), i = n?.hoverPart.source;
        return !(!n || !i?.supportsVerbosityAction(t));
    }
    async _fetchHover(e, t, n) {
        let i = n === S3.Increase ? 1 : -1;
        const r = e.hoverProvider, s = this._ongoingHoverOperations.get(r);
        s && (s.tokenSource.cancel(), i += s.verbosityDelta);
        const o = new Eo;
        this._ongoingHoverOperations.set(r, {
            verbosityDelta: i,
            tokenSource: o
        });
        const a = {
            verbosityRequest: {
                verbosityDelta: i,
                previousHover: e.hover
            }
        };
        let c;
        try {
            c = await Promise.resolve(r.provideHover(t, e.hoverPosition, o.token, a));
        } catch (l) {
            c1(l);
        }
        return o.dispose(), this._ongoingHoverOperations.delete(r), c;
    }
    _updateRenderedHoverPart(e, t) {
        if (e >= this.renderedHoverParts.length || e < 0) return;
        const n = this._renderHoverPart(t, this._onFinishedRendering), i = this.renderedHoverParts[e], r = i.hoverElement, s = n.hoverElement, o = Array.from(s.children);
        r.replaceChildren(...o);
        const a = new zFt(t, r, n.disposables, n.actionsContainer);
        return i.dispose(), this.renderedHoverParts[e] = a, a;
    }
    _getRenderedHoverPartAtIndex(e) {
        return this.renderedHoverParts[e];
    }
    dispose() {
        this._disposables.dispose();
    }
};

}
