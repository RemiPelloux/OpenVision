import { Di, Dte, Gt, Nc, Nt, Ovt, Qe, Wd, _r, ddn, en, tt, zR } from "./Iwo.js";
import { $3 } from "./aria.js";
import { bo } from "./arrays.js";
import { qn } from "./async.js";
import { Jd } from "./autorun.js";
import { _b, ls } from "./color.js";
import { NQ } from "./cssValue.js";
import { SM } from "./decorators.js";
import { Dd, Hn, ws } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { s6, xyt } from "./filters.js";
import { nT, rv } from "./keyboardEvent.js";
import { _Gd } from "./list.css";
import { Dyt, bGd } from "./list.js";
import { TGd, oTr } from "./listView.js";
import { i2, iT } from "./mouseEvent.js";
import { b4 } from "./numbers.js";
import { Jc } from "./observable.js";
import { dNy, vGd } from "./splice.js";
import { fO, kM } from "./touch.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Re } from "./userDataProfile.js";
import { $u, Dj, IGd, Ksi, Qte, RC, S3y, SNy, U3, Xte, _Go, bP, f1, kNy, sl, uE, vHe, xGd, yNy } from "./ze.js";
var AGd, Zsi, RGd, aTr, bGo, wBt, PGd, MGd, DGd, yGo, SGo, NGd, LGd, OGd, kGo, FGd, BGd, UGd, F5;
export { AGd, BGd, DGd, F5, FGd, LGd, MGd, NGd, OGd, PGd, RGd, SGo, UGd, Zsi, aTr, bGo, kGo, wBt, yGo };
var __wakaru_nRe_initialized = false;
export function nRe() {
if (__wakaru_nRe_initialized) return;
__wakaru_nRe_initialized = true;
"use strict";
E(), Hn(), U3(), NQ(), voe(), nT(), fO(), $3(), dNy(), bo(), qn(), _b(), SM(), Gt(), s6(), Qe(), b4(), Di(), To(), _Gd(), bGd(), oTr(), i2(), Jc(), AGd = class {
    constructor(t){
        this.trait = t, this.renderedElements = [];
    }
    get templateId() {
        return `template:${this.trait.name}`;
    }
    renderTemplate(t) {
        return t;
    }
    renderElement(t, e, n) {
        const i = this.renderedElements.findIndex((r)=>r.templateData === n);
        if (i >= 0) {
            const r = this.renderedElements[i];
            this.trait.unrender(n), r.index = e;
        } else {
            const r = {
                index: e,
                templateData: n
            };
            this.renderedElements.push(r);
        }
        this.trait.renderIndex(e, n);
    }
    splice(t, e, n) {
        const i = [];
        for (const r of this.renderedElements)r.index < t ? i.push(r) : r.index >= t + e && i.push({
            index: r.index + n - e,
            templateData: r.templateData
        });
        this.renderedElements = i;
    }
    renderIndexes(t) {
        for (const { index: e, templateData: n } of this.renderedElements)t.indexOf(e) > -1 && this.trait.renderIndex(e, n);
    }
    disposeTemplate(t) {
        const e = this.renderedElements.findIndex((n)=>n.templateData === t);
        e < 0 || this.renderedElements.splice(e, 1);
    }
}, Zsi = class {
    constructor(t){
        this._trait = t, this.indexes = [], this.sortedIndexes = [], this._onChange = new tt, this.onChange = this._onChange.event;
    }
    get name() {
        return this._trait;
    }
    get renderer() {
        return new AGd(this);
    }
    splice(t, e, n) {
        const i = n.length - e, r = t + e, s = [];
        let o = 0;
        for(; o < this.sortedIndexes.length && this.sortedIndexes[o] < t;)s.push(this.sortedIndexes[o++]);
        for(let a = 0; a < n.length; a++)n[a] && s.push(a + t);
        for(; o < this.sortedIndexes.length && this.sortedIndexes[o] >= r;)s.push(this.sortedIndexes[o++] + i);
        this.renderer.splice(t, e, n.length), this._set(s, s);
    }
    renderIndex(t, e) {
        e.classList.toggle(this._trait, this.contains(t));
    }
    unrender(t) {
        t.classList.remove(this._trait);
    }
    set(t, e) {
        return this._set(t, [
            ...t
        ].sort(kGo), e);
    }
    _set(t, e, n) {
        const i = this.indexes, r = this.sortedIndexes;
        this.indexes = t, this.sortedIndexes = e;
        const s = _Go(r, t);
        return this.renderer.renderIndexes(s), this._onChange.fire({
            indexes: t,
            browserEvent: n
        }), i;
    }
    get() {
        return this.indexes;
    }
    contains(t) {
        return Ovt(this.sortedIndexes, t, kGo) >= 0;
    }
    dispose() {
        Nc(this._onChange);
    }
}, Re([
    sl
], Zsi.prototype, "renderer", null), RGd = class extends Zsi {
    constructor(t){
        super("selected"), this.setAriaSelected = t;
    }
    renderIndex(t, e) {
        super.renderIndex(t, e), this.setAriaSelected && (this.contains(t) ? e.setAttribute("aria-selected", "true") : e.setAttribute("aria-selected", "false"));
    }
}, aTr = class {
    constructor(t, e, n){
        this.trait = t, this.view = e, this.identityProvider = n;
    }
    splice(t, e, n) {
        if (!this.identityProvider) return this.trait.splice(t, e, new Array(n.length).fill(!1));
        const i = this.trait.get().map((o)=>this.identityProvider.getId(this.view.element(o)).toString());
        if (i.length === 0) return this.trait.splice(t, e, new Array(n.length).fill(!1));
        const r = new Set(i), s = n.map((o)=>r.has(this.identityProvider.getId(o).toString()));
        this.trait.splice(t, e, s);
    }
}, bGo = class {
    constructor(t, e, n){
        this.list = t, this.view = e, this.disposables = new Nt, this.multipleSelectionDisposables = new Nt, this.multipleSelectionSupport = n.multipleSelectionSupport, this.disposables.add(this.onKeyDown((i)=>{
            switch(i.keyCode){
                case 3:
                    return this.onEnter(i);
                case 16:
                    return this.onUpArrow(i);
                case 18:
                    return this.onDownArrow(i);
                case 11:
                    return this.onPageUpArrow(i);
                case 12:
                    return this.onPageDownArrow(i);
                case 9:
                    return this.onEscape(i);
                case 31:
                    this.multipleSelectionSupport && (_r ? i.metaKey : i.ctrlKey) && this.onCtrlA(i);
            }
        }));
    }
    get onKeyDown() {
        return en.chain(this.disposables.add(new Gg(this.view.domNode, "keydown")).event, (t)=>t.filter((e)=>!Qte(e.target)).map((e)=>new rv(e)));
    }
    updateOptions(t) {
        t.multipleSelectionSupport !== void 0 && (this.multipleSelectionSupport = t.multipleSelectionSupport);
    }
    onEnter(t) {
        t.preventDefault(), t.stopPropagation(), this.list.setSelection(this.list.getFocus(), t.browserEvent);
    }
    onUpArrow(t) {
        t.preventDefault(), t.stopPropagation(), this.list.focusPrevious(1, !1, t.browserEvent);
        const e = this.list.getFocus()[0];
        this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus();
    }
    onDownArrow(t) {
        t.preventDefault(), t.stopPropagation(), this.list.focusNext(1, !1, t.browserEvent);
        const e = this.list.getFocus()[0];
        this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus();
    }
    onPageUpArrow(t) {
        t.preventDefault(), t.stopPropagation(), this.list.focusPreviousPage(t.browserEvent);
        const e = this.list.getFocus()[0];
        this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus();
    }
    onPageDownArrow(t) {
        t.preventDefault(), t.stopPropagation(), this.list.focusNextPage(t.browserEvent);
        const e = this.list.getFocus()[0];
        this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus();
    }
    onCtrlA(t) {
        t.preventDefault(), t.stopPropagation(), this.list.setSelection(Dte(this.list.length), t.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus();
    }
    onEscape(t) {
        this.list.getSelection().length && (t.preventDefault(), t.stopPropagation(), this.list.setSelection([], t.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus());
    }
    dispose() {
        this.disposables.dispose(), this.multipleSelectionDisposables.dispose();
    }
}, Re([
    sl
], bGo.prototype, "onKeyDown", null), wBt = ((t)=>(t[t.Automatic = 0] = "Automatic", t[t.Trigger = 1] = "Trigger", t))(wBt || {}), PGd = new class {
    mightProducePrintableCharacter(t) {
        return t.ctrlKey || t.metaKey || t.altKey ? !1 : t.keyCode >= 31 && t.keyCode <= 56 || t.keyCode >= 21 && t.keyCode <= 30 || t.keyCode >= 98 && t.keyCode <= 107 || t.keyCode >= 85 && t.keyCode <= 95;
    }
}, MGd = class {
    constructor(t, e, n, i, r){
        this.list = t, this.view = e, this.keyboardNavigationLabelProvider = n, this.keyboardNavigationEventFilter = i, this.delegate = r, this.enabled = !1, this.state = 0, this.mode = 0, this.triggered = !1, this.previouslyFocused = -1, this.enabledDisposables = new Nt, this.disposables = new Nt, this.updateOptions(t.options);
    }
    updateOptions(t) {
        t.typeNavigationEnabled ?? !0 ? this.enable() : this.disable(), this.mode = t.typeNavigationMode ?? 0;
    }
    trigger() {
        this.triggered = !this.triggered;
    }
    enable() {
        if (this.enabled) return;
        let t = !1;
        const e = en.chain(this.enabledDisposables.add(new Gg(this.view.domNode, "keydown")).event, (r)=>r.filter((s)=>!Qte(s.target)).filter(()=>this.mode === 0 || this.triggered).map((s)=>new rv(s)).filter((s)=>t || this.keyboardNavigationEventFilter(s)).filter((s)=>this.delegate.mightProducePrintableCharacter(s)).forEach((s)=>Dd.stop(s, !0)).map((s)=>s.browserEvent.key)), n = en.debounce(e, ()=>null, 800, void 0, void 0, void 0, this.enabledDisposables);
        en.reduce(en.any(e, n), (r, s)=>s === null ? null : (r || "") + s, void 0, this.enabledDisposables)(this.onInput, this, this.enabledDisposables), n(this.onClear, this, this.enabledDisposables), e(()=>t = !0, void 0, this.enabledDisposables), n(()=>t = !1, void 0, this.enabledDisposables), this.enabled = !0, this.triggered = !1;
    }
    disable() {
        this.enabled && (this.enabledDisposables.clear(), this.enabled = !1, this.triggered = !1);
    }
    onClear() {
        const t = this.list.getFocus();
        if (t.length > 0 && t[0] === this.previouslyFocused) {
            const e = this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(t[0]));
            typeof e == "string" ? Dj(e) : e && Dj(e.get());
        }
        this.previouslyFocused = -1;
    }
    onInput(t) {
        if (!t) {
            this.state = 0, this.triggered = !1;
            return;
        }
        const e = this.list.getFocus(), n = e.length > 0 ? e[0] : 0, i = this.state === 0 ? 1 : 0;
        this.state = 1;
        for(let r = 0; r < this.list.length; r++){
            const s = (n + r + i) % this.list.length, o = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(s)), a = o && o.toString();
            if (this.list.options.typeNavigationEnabled) {
                if (typeof a < "u") {
                    if (xyt(t, a)) {
                        this.previouslyFocused = n, this.list.setFocus([
                            s
                        ]), this.list.reveal(s);
                        return;
                    }
                    const l = S3y(t, a);
                    if (l && l[0].end - l[0].start > 1 && l.length === 1) {
                        this.previouslyFocused = n, this.list.setFocus([
                            s
                        ]), this.list.reveal(s);
                        return;
                    }
                }
            } else if (typeof a > "u" || xyt(t, a)) {
                this.previouslyFocused = n, this.list.setFocus([
                    s
                ]), this.list.reveal(s);
                return;
            }
        }
    }
    dispose() {
        this.disable(), this.enabledDisposables.dispose(), this.disposables.dispose();
    }
}, DGd = class {
    constructor(t, e){
        this.list = t, this.view = e, this.disposables = new Nt;
        const n = en.chain(this.disposables.add(new Gg(e.domNode, "keydown")).event, (r)=>r.filter((s)=>!Qte(s.target)).map((s)=>new rv(s)));
        en.chain(n, (r)=>r.filter((s)=>s.keyCode === 2 && !s.ctrlKey && !s.metaKey && !s.shiftKey && !s.altKey))(this.onTab, this, this.disposables);
    }
    onTab(t) {
        if (t.target !== this.view.domNode) return;
        const e = this.list.getFocus();
        if (e.length === 0) return;
        const n = this.view.domElement(e[0]);
        if (!n) return;
        const i = n.querySelector("[tabIndex]");
        if (!i || !$u(i) || i.tabIndex === -1) return;
        const r = ws(i).getComputedStyle(i);
        r.visibility === "hidden" || r.display === "none" || (t.preventDefault(), t.stopPropagation(), i.focus());
    }
    dispose() {
        this.disposables.dispose();
    }
}, yGo = {
    isSelectionSingleChangeEvent: IGd,
    isSelectionRangeChangeEvent: xGd
}, SGo = class {
    constructor(t){
        this.list = t, this.disposables = new Nt, this._onPointer = new tt, this.onPointer = this._onPointer.event, t.options.multipleSelectionSupport !== !1 && (this.multipleSelectionController = this.list.options.multipleSelectionController || yGo), this.mouseSupport = typeof t.options.mouseSupport > "u" || !!t.options.mouseSupport, this.mouseSupport && (t.onMouseDown(this.onMouseDown, this, this.disposables), t.onContextMenu(this.onContextMenu, this, this.disposables), t.onMouseDblClick(this.onDoubleClick, this, this.disposables), t.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(kM.addTarget(t.getHTMLElement()))), en.any(t.onMouseClick, t.onMouseMiddleClick, t.onTap)(this.onViewPointer, this, this.disposables);
    }
    updateOptions(t) {
        t.multipleSelectionSupport !== void 0 && (this.multipleSelectionController = void 0, t.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || yGo));
    }
    isSelectionSingleChangeEvent(t) {
        return this.multipleSelectionController ? this.multipleSelectionController.isSelectionSingleChangeEvent(t) : !1;
    }
    isSelectionRangeChangeEvent(t) {
        return this.multipleSelectionController ? this.multipleSelectionController.isSelectionRangeChangeEvent(t) : !1;
    }
    isSelectionChangeEvent(t) {
        return this.isSelectionSingleChangeEvent(t) || this.isSelectionRangeChangeEvent(t);
    }
    onMouseDown(t) {
        Ksi(t.browserEvent.target) || RC() !== t.browserEvent.target && this.list.domFocus();
    }
    onContextMenu(t) {
        if (Qte(t.browserEvent.target) || Ksi(t.browserEvent.target)) return;
        const e = typeof t.index > "u" ? [] : [
            t.index
        ];
        this.list.setFocus(e, t.browserEvent);
    }
    onViewPointer(t) {
        if (!this.mouseSupport || Qte(t.browserEvent.target) || Ksi(t.browserEvent.target) || t.browserEvent.isHandledByList) return;
        t.browserEvent.isHandledByList = !0;
        const e = t.index;
        if (typeof e > "u") {
            this.list.setFocus([], t.browserEvent), this.list.setSelection([], t.browserEvent), this.list.setAnchor(void 0);
            return;
        }
        if (this.isSelectionChangeEvent(t)) return this.changeSelection(t);
        this.list.setFocus([
            e
        ], t.browserEvent), this.list.setAnchor(e), yNy(t.browserEvent) || this.list.setSelection([
            e
        ], t.browserEvent), this._onPointer.fire(t);
    }
    onDoubleClick(t) {
        if (Qte(t.browserEvent.target) || Ksi(t.browserEvent.target) || this.isSelectionChangeEvent(t) || t.browserEvent.isHandledByList) return;
        t.browserEvent.isHandledByList = !0;
        const e = this.list.getFocus();
        this.list.setSelection(e, t.browserEvent);
    }
    changeSelection(t) {
        const e = t.index;
        let n = this.list.getAnchor();
        if (this.isSelectionRangeChangeEvent(t)) {
            typeof n > "u" && (n = this.list.getFocus()[0] ?? e, this.list.setAnchor(n));
            const i = Math.min(n, e), r = Math.max(n, e), s = Dte(i, r + 1), o = this.list.getSelection(), a = SNy(_Go(o, [
                n
            ]), n);
            if (a.length === 0) return;
            const l = _Go(s, kNy(o, a));
            this.list.setSelection(l, t.browserEvent), this.list.setFocus([
                e
            ], t.browserEvent);
        } else if (this.isSelectionSingleChangeEvent(t)) {
            const i = this.list.getSelection(), r = i.filter((s)=>s !== e);
            this.list.setFocus([
                e
            ]), this.list.setAnchor(e), i.length === r.length ? this.list.setSelection([
                ...r,
                e
            ], t.browserEvent) : this.list.setSelection(r, t.browserEvent);
        }
    }
    dispose() {
        this.disposables.dispose();
    }
}, NGd = class {
    constructor(t, e){
        this.styleElement = t, this.selectorSuffix = e;
    }
    style(t) {
        const e = this.selectorSuffix && `.${this.selectorSuffix}`, n = [];
        t.listBackground && n.push(`.monaco-list${e} .monaco-list-rows { background: ${t.listBackground}; }`), t.listFocusBackground && (n.push(`.monaco-list${e}:focus .monaco-list-row.focused { background-color: ${t.listFocusBackground}; }`), n.push(`.monaco-list${e}:focus .monaco-list-row.focused:hover { background-color: ${t.listFocusBackground}; }`)), t.listFocusForeground && n.push(`.monaco-list${e}:focus .monaco-list-row.focused { color: ${t.listFocusForeground}; }`), t.listActiveSelectionBackground && (n.push(`.monaco-list${e}:focus .monaco-list-row.selected { background-color: ${t.listActiveSelectionBackground}; }`), n.push(`.monaco-list${e}:focus .monaco-list-row.selected:hover { background-color: ${t.listActiveSelectionBackground}; }`)), t.listActiveSelectionForeground && n.push(`.monaco-list${e}:focus .monaco-list-row.selected { color: ${t.listActiveSelectionForeground}; }`), t.listActiveSelectionIconForeground && n.push(`.monaco-list${e}:focus .monaco-list-row.selected .codicon { color: ${t.listActiveSelectionIconForeground}; }`), t.listFocusAndSelectionBackground && n.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { background-color: ${t.listFocusAndSelectionBackground}; }
			`), t.listFocusAndSelectionForeground && n.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { color: ${t.listFocusAndSelectionForeground}; }
			`), t.listInactiveFocusForeground && (n.push(`.monaco-list${e} .monaco-list-row.focused { color:  ${t.listInactiveFocusForeground}; }`), n.push(`.monaco-list${e} .monaco-list-row.focused:hover { color:  ${t.listInactiveFocusForeground}; }`)), t.listInactiveSelectionIconForeground && n.push(`.monaco-list${e} .monaco-list-row.focused .codicon { color:  ${t.listInactiveSelectionIconForeground}; }`), t.listInactiveFocusBackground && (n.push(`.monaco-list${e} .monaco-list-row.focused { background-color:  ${t.listInactiveFocusBackground}; }`), n.push(`.monaco-list${e} .monaco-list-row.focused:hover { background-color:  ${t.listInactiveFocusBackground}; }`)), t.listInactiveSelectionBackground && (n.push(`.monaco-list${e} .monaco-list-row.selected { background-color:  ${t.listInactiveSelectionBackground}; }`), n.push(`.monaco-list${e} .monaco-list-row.selected:hover { background-color:  ${t.listInactiveSelectionBackground}; }`)), t.listInactiveSelectionForeground && n.push(`.monaco-list${e} .monaco-list-row.selected { color: ${t.listInactiveSelectionForeground}; }`), t.listHoverBackground && n.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${t.listHoverBackground}; }`), t.listHoverForeground && n.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${t.listHoverForeground}; }`);
        const i = vHe(t.listFocusAndSelectionOutline, vHe(t.listSelectionOutline, t.listFocusOutline ?? ""));
        i && n.push(`.monaco-list${e}:focus .monaco-list-row.focused.selected { outline: 1px solid ${i}; outline-offset: -1px;}`), t.listFocusOutline && n.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused .monaco-list-row.focused { outline: 1px solid ${t.listFocusOutline}; outline-offset: -1px; }
			`);
        const r = vHe(t.listSelectionOutline, t.listInactiveFocusOutline ?? "");
        r && n.push(`.monaco-list${e} .monaco-list-row.focused.selected { outline: 1px dotted ${r}; outline-offset: -1px; }`), t.listSelectionOutline && n.push(`.monaco-list${e} .monaco-list-row.selected { outline: 1px dotted ${t.listSelectionOutline}; outline-offset: -1px; }`), t.listInactiveFocusOutline && n.push(`.monaco-list${e} .monaco-list-row.focused { outline: 1px dotted ${t.listInactiveFocusOutline}; outline-offset: -1px; }`), t.listHoverOutline && n.push(`.monaco-list${e} .monaco-list-row:hover { outline: 1px dashed ${t.listHoverOutline}; outline-offset: -1px; }`), t.listDropOverBackground && n.push(`
				.monaco-list${e}.drop-target,
				.monaco-list${e} .monaco-list-rows.drop-target,
				.monaco-list${e} .monaco-list-row.drop-target { background-color: ${t.listDropOverBackground} !important; color: inherit !important; }
			`), t.listDropBetweenBackground && (n.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${e} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${t.listDropBetweenBackground};
			}`), n.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${e} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${t.listDropBetweenBackground};
			}`)), t.tableColumnsBorder && n.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${t.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`), t.tableOddRowsBackgroundColor && n.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${t.tableOddRowsBackgroundColor};
				}
			`), this.styleElement.textContent = n.join(`
`);
    }
}, LGd = {
    listFocusBackground: "#7FB0D0",
    listActiveSelectionBackground: "#0E639C",
    listActiveSelectionForeground: "#FFFFFF",
    listActiveSelectionIconForeground: "#FFFFFF",
    listFocusAndSelectionOutline: "#90C2F9",
    listFocusAndSelectionBackground: "#094771",
    listFocusAndSelectionForeground: "#FFFFFF",
    listInactiveSelectionBackground: "#3F3F46",
    listInactiveSelectionIconForeground: "#FFFFFF",
    listHoverBackground: "#2A2D2E",
    listDropOverBackground: "#383B3D",
    listDropBetweenBackground: "#EEEEEE",
    treeIndentGuidesStroke: "#a9a9a9",
    treeInactiveIndentGuidesStroke: ls.fromHex("#a9a9a9").transparent(.4).toString(),
    tableColumnsBorder: ls.fromHex("#cccccc").transparent(.2).toString(),
    tableOddRowsBackgroundColor: ls.fromHex("#cccccc").transparent(.04).toString(),
    listBackground: void 0,
    listFocusForeground: void 0,
    listInactiveSelectionForeground: void 0,
    listInactiveFocusForeground: void 0,
    listInactiveFocusBackground: void 0,
    listHoverForeground: void 0,
    listFocusOutline: void 0,
    listInactiveFocusOutline: void 0,
    listSelectionOutline: void 0,
    listHoverOutline: void 0,
    treeStickyScrollBackground: void 0,
    treeStickyScrollBorder: void 0,
    treeStickyScrollShadow: void 0
}, OGd = {
    keyboardSupport: !0,
    mouseSupport: !0,
    multipleSelectionSupport: !0,
    dnd: {
        getDragURI () {
            return null;
        },
        onDragStart () {},
        onDragOver () {
            return !1;
        },
        drop () {},
        dispose () {}
    }
}, kGo = (t, e)=>t - e, FGd = class {
    constructor(t, e){
        this._templateId = t, this.renderers = e;
    }
    get templateId() {
        return this._templateId;
    }
    renderTemplate(t) {
        return this.renderers.map((e)=>e.renderTemplate(t));
    }
    renderElement(t, e, n, i) {
        let r = 0;
        for (const s of this.renderers)s.renderElement(t, e, n[r++], i);
    }
    disposeElement(t, e, n, i) {
        let r = 0;
        for (const s of this.renderers)s.disposeElement?.(t, e, n[r], i), r += 1;
    }
    disposeTemplate(t) {
        let e = 0;
        for (const n of this.renderers)n.disposeTemplate(t[e++]);
    }
}, BGd = class {
    constructor(t){
        this.accessibilityProvider = t, this.templateId = "a18n";
    }
    renderTemplate(t) {
        return {
            container: t,
            disposables: new Nt
        };
    }
    renderElement(t, e, n) {
        const i = this.accessibilityProvider.getAriaLabel(t), r = i && typeof i != "string" ? i : uE(i);
        n.disposables.add(Jd((o)=>{
            this.setAriaLabel(o.readObservable(r), n.container);
        }));
        const s = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(t);
        typeof s == "number" ? n.container.setAttribute("aria-level", `${s}`) : n.container.removeAttribute("aria-level");
    }
    setAriaLabel(t, e) {
        t ? e.setAttribute("aria-label", t) : e.removeAttribute("aria-label");
    }
    disposeElement(t, e, n, i) {
        n.disposables.clear();
    }
    disposeTemplate(t) {
        t.disposables.dispose();
    }
}, UGd = class {
    constructor(t, e){
        this.list = t, this.dnd = e;
    }
    getDragElements(t) {
        const e = this.list.getSelectedElements();
        return e.indexOf(t) > -1 ? e : [
            t
        ];
    }
    getDragURI(t) {
        return this.dnd.getDragURI(t);
    }
    getDragLabel(t, e) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(t, e);
    }
    onDragStart(t, e) {
        this.dnd.onDragStart?.(t, e);
    }
    onDragOver(t, e, n, i, r) {
        return this.dnd.onDragOver(t, e, n, i, r);
    }
    onDragLeave(t, e, n, i) {
        this.dnd.onDragLeave?.(t, e, n, i);
    }
    onDragEnd(t) {
        this.dnd.onDragEnd?.(t);
    }
    drop(t, e, n, i, r) {
        this.dnd.drop(t, e, n, i, r);
    }
    dispose() {
        this.dnd.dispose();
    }
}, F5 = class {
    constructor(t, e, n, i, r = OGd){
        this.user = t, this._options = r, this.focus = new Zsi("focused"), this.anchor = new Zsi("anchor"), this.eventBufferer = new ddn, this._ariaLabel = "", this.disposables = new Nt, this._onDidDispose = new tt, this.onDidDispose = this._onDidDispose.event;
        const s = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? this._options.accessibilityProvider?.getWidgetRole() : "list";
        this.selection = new RGd(s !== "listbox");
        const o = [
            this.focus.renderer,
            this.selection.renderer
        ];
        this.accessibilityProvider = r.accessibilityProvider, this.accessibilityProvider && (o.push(new BGd(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables)), i = i.map((l)=>new FGd(l.templateId, [
                ...o,
                l
            ]));
        const a = {
            ...r,
            dnd: r.dnd && new UGd(this, r.dnd)
        };
        if (this.view = this.createListView(e, n, i, a), this.view.domNode.setAttribute("role", s), r.styleController) this.styleController = r.styleController(this.view.domId);
        else {
            const l = bP(this.view.domNode);
            this.styleController = new NGd(l, this.view.domId);
        }
        if (this.spliceable = new vGd([
            new aTr(this.focus, this.view, r.identityProvider),
            new aTr(this.selection, this.view, r.identityProvider),
            new aTr(this.anchor, this.view, r.identityProvider),
            this.view
        ]), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new DGd(this, this.view)), (typeof r.keyboardSupport != "boolean" || r.keyboardSupport) && (this.keyboardController = new bGo(this, this.view, r), this.disposables.add(this.keyboardController)), r.keyboardNavigationLabelProvider) {
            const l = r.keyboardNavigationDelegate || PGd;
            this.typeNavigationController = new MGd(this, this.view, r.keyboardNavigationLabelProvider, r.keyboardNavigationEventFilter ?? (()=>!0), l), this.disposables.add(this.typeNavigationController);
        }
        this.mouseController = this.createMouseController(r), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider && (this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel()), this._options.multipleSelectionSupport !== !1 && this.view.domNode.setAttribute("aria-multiselectable", "true");
    }
    get onDidChangeFocus() {
        return en.map(this.eventBufferer.wrapEvent(this.focus.onChange), (t)=>this.toListEvent(t), this.disposables);
    }
    get onDidChangeSelection() {
        return en.map(this.eventBufferer.wrapEvent(this.selection.onChange), (t)=>this.toListEvent(t), this.disposables);
    }
    get domId() {
        return this.view.domId;
    }
    get onDidScroll() {
        return this.view.onDidScroll;
    }
    get onMouseClick() {
        return this.view.onMouseClick;
    }
    get onMouseDblClick() {
        return this.view.onMouseDblClick;
    }
    get onMouseMiddleClick() {
        return this.view.onMouseMiddleClick;
    }
    get onPointer() {
        return this.mouseController.onPointer;
    }
    get onMouseUp() {
        return this.view.onMouseUp;
    }
    get onMouseDown() {
        return this.view.onMouseDown;
    }
    get onMouseOver() {
        return this.view.onMouseOver;
    }
    get onMouseMove() {
        return this.view.onMouseMove;
    }
    get onMouseOut() {
        return this.view.onMouseOut;
    }
    get onTouchStart() {
        return this.view.onTouchStart;
    }
    get onTap() {
        return this.view.onTap;
    }
    get onContextMenu() {
        let t = !1;
        const e = en.chain(this.disposables.add(new Gg(this.view.domNode, "keydown")).event, (r)=>r.map((s)=>new rv(s)).filter((s)=>t = s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map((s)=>Dd.stop(s, !0)).filter(()=>!1)), n = en.chain(this.disposables.add(new Gg(this.view.domNode, "keyup")).event, (r)=>r.forEach(()=>t = !1).map((s)=>new rv(s)).filter((s)=>s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map((s)=>Dd.stop(s, !0)).map(({ browserEvent: s })=>{
                const o = this.getFocus(), a = o.length ? o[0] : void 0, l = typeof a < "u" ? this.view.element(a) : void 0, c = typeof a < "u" ? this.view.domElement(a) : this.view.domNode;
                return {
                    index: a,
                    element: l,
                    anchor: c,
                    browserEvent: s
                };
            })), i = en.chain(this.view.onContextMenu, (r)=>r.filter((s)=>!t).map(({ element: s, index: o, browserEvent: a })=>({
                    element: s,
                    index: o,
                    anchor: new iT(ws(this.view.domNode), a),
                    browserEvent: a
                })));
        return en.any(e, n, i);
    }
    get onKeyDown() {
        return this.disposables.add(new Gg(this.view.domNode, "keydown")).event;
    }
    get onKeyUp() {
        return this.disposables.add(new Gg(this.view.domNode, "keyup")).event;
    }
    get onKeyPress() {
        return this.disposables.add(new Gg(this.view.domNode, "keypress")).event;
    }
    get onDidFocus() {
        return en.signal(this.disposables.add(new Gg(this.view.domNode, "focus", !0)).event);
    }
    get onDidBlur() {
        return en.signal(this.disposables.add(new Gg(this.view.domNode, "blur", !0)).event);
    }
    createListView(t, e, n, i) {
        return new TGd(t, e, n, i);
    }
    createMouseController(t) {
        return new SGo(this);
    }
    updateOptions(t = {}) {
        this._options = {
            ...this._options,
            ...t
        }, this.typeNavigationController?.updateOptions(this._options), this._options.multipleSelectionController !== void 0 && (this._options.multipleSelectionSupport ? this.view.domNode.setAttribute("aria-multiselectable", "true") : this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(t), this.keyboardController?.updateOptions(t), this.view.updateOptions(t);
    }
    get options() {
        return this._options;
    }
    splice(t, e, n = []) {
        if (t < 0 || t > this.view.length) throw new Dyt(this.user, `Invalid start index: ${t}`);
        if (e < 0) throw new Dyt(this.user, `Invalid delete count: ${e}`);
        e === 0 && n.length === 0 || this.eventBufferer.bufferEvents(()=>this.spliceable.splice(t, e, n));
    }
    updateWidth(t) {
        this.view.updateWidth(t);
    }
    updateElementHeight(t, e) {
        this.view.updateElementHeight(t, e, null);
    }
    rerender() {
        this.view.rerender();
    }
    element(t) {
        return this.view.element(t);
    }
    indexOf(t) {
        return this.view.indexOf(t);
    }
    indexAt(t) {
        return this.view.indexAt(t);
    }
    get length() {
        return this.view.length;
    }
    get contentHeight() {
        return this.view.contentHeight;
    }
    get contentWidth() {
        return this.view.contentWidth;
    }
    get onDidChangeContentHeight() {
        return this.view.onDidChangeContentHeight;
    }
    get onDidChangeContentWidth() {
        return this.view.onDidChangeContentWidth;
    }
    get scrollTop() {
        return this.view.getScrollTop();
    }
    set scrollTop(t) {
        this.view.setScrollTop(t);
    }
    get scrollLeft() {
        return this.view.getScrollLeft();
    }
    set scrollLeft(t) {
        this.view.setScrollLeft(t);
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get firstVisibleIndex() {
        return this.view.firstVisibleIndex;
    }
    get firstMostlyVisibleIndex() {
        return this.view.firstMostlyVisibleIndex;
    }
    get lastVisibleIndex() {
        return this.view.lastVisibleIndex;
    }
    get ariaLabel() {
        return this._ariaLabel;
    }
    set ariaLabel(t) {
        this._ariaLabel = t, this.view.domNode.setAttribute("aria-label", t);
    }
    domFocus() {
        this.view.domNode.focus({
            preventScroll: !0
        });
    }
    layout(t, e) {
        this.view.layout(t, e);
    }
    triggerTypeNavigation() {
        this.typeNavigationController?.trigger();
    }
    setSelection(t, e) {
        for (const n of t)if (n < 0 || n >= this.length) throw new Dyt(this.user, `Invalid index ${n}`);
        this.selection.set(t, e);
    }
    getSelection() {
        return this.selection.get();
    }
    getSelectedElements() {
        return this.getSelection().map((t)=>this.view.element(t));
    }
    setAnchor(t) {
        if (typeof t > "u") {
            this.anchor.set([]);
            return;
        }
        if (t < 0 || t >= this.length) throw new Dyt(this.user, `Invalid index ${t}`);
        this.anchor.set([
            t
        ]);
    }
    getAnchor() {
        return this.anchor.get().at(0);
    }
    getAnchorElement() {
        const t = this.getAnchor();
        return typeof t > "u" ? void 0 : this.element(t);
    }
    setFocus(t, e) {
        for (const n of t)if (n < 0 || n >= this.length) throw new Dyt(this.user, `Invalid index ${n}`);
        this.focus.set(t, e);
    }
    focusNext(t = 1, e = !1, n, i) {
        if (this.length === 0) return;
        const r = this.focus.get(), s = this.findNextIndex(r.length > 0 ? r[0] + t : 0, e, i);
        s > -1 && this.setFocus([
            s
        ], n);
    }
    focusPrevious(t = 1, e = !1, n, i) {
        if (this.length === 0) return;
        const r = this.focus.get(), s = this.findPreviousIndex(r.length > 0 ? r[0] - t : 0, e, i);
        s > -1 && this.setFocus([
            s
        ], n);
    }
    async focusNextPage(t, e) {
        let n = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
        n = n === 0 ? 0 : n - 1;
        const i = this.getFocus()[0];
        if (i !== n && (i === void 0 || n > i)) {
            const r = this.findPreviousIndex(n, !1, e);
            r > -1 && i !== r ? this.setFocus([
                r
            ], t) : this.setFocus([
                n
            ], t);
        } else {
            const r = this.view.getScrollTop();
            let s = r + this.view.renderHeight;
            n > i && (s -= this.view.elementHeight(n)), this.view.setScrollTop(s), this.view.getScrollTop() !== r && (this.setFocus([]), await Wd(0), await this.focusNextPage(t, e));
        }
    }
    async focusPreviousPage(t, e, n = ()=>0) {
        let i;
        const r = n(), s = this.view.getScrollTop() + r;
        s === 0 ? i = this.view.indexAt(s) : i = this.view.indexAfter(s - 1);
        const o = this.getFocus()[0];
        if (o !== i && (o === void 0 || o >= i)) {
            const a = this.findNextIndex(i, !1, e);
            a > -1 && o !== a ? this.setFocus([
                a
            ], t) : this.setFocus([
                i
            ], t);
        } else {
            const a = s;
            this.view.setScrollTop(s - this.view.renderHeight - r), this.view.getScrollTop() + n() !== a && (this.setFocus([]), await Wd(0), await this.focusPreviousPage(t, e, n));
        }
    }
    focusLast(t, e) {
        if (this.length === 0) return;
        const n = this.findPreviousIndex(this.length - 1, !1, e);
        n > -1 && this.setFocus([
            n
        ], t);
    }
    focusFirst(t, e) {
        this.focusNth(0, t, e);
    }
    focusNth(t, e, n) {
        if (this.length === 0) return;
        const i = this.findNextIndex(t, !1, n);
        i > -1 && this.setFocus([
            i
        ], e);
    }
    findNextIndex(t, e = !1, n) {
        for(let i = 0; i < this.length; i++){
            if (t >= this.length && !e) return -1;
            if (t = t % this.length, !n || n(this.element(t))) return t;
            t++;
        }
        return -1;
    }
    findPreviousIndex(t, e = !1, n) {
        for(let i = 0; i < this.length; i++){
            if (t < 0 && !e) return -1;
            if (t = (this.length + t % this.length) % this.length, !n || n(this.element(t))) return t;
            t--;
        }
        return -1;
    }
    getFocus() {
        return this.focus.get();
    }
    getFocusedElements() {
        return this.getFocus().map((t)=>this.view.element(t));
    }
    reveal(t, e, n = 0) {
        if (t < 0 || t >= this.length) throw new Dyt(this.user, `Invalid index ${t}`);
        const i = this.view.getScrollTop(), r = this.view.elementTop(t), s = this.view.elementHeight(t);
        if (zR(e)) {
            const o = s - this.view.renderHeight + n;
            this.view.setScrollTop(o * f1(e, 0, 1) + r - n);
        } else {
            const o = r + s, a = i + this.view.renderHeight;
            r < i + n && o >= a || (r < i + n || o >= a && s >= this.view.renderHeight ? this.view.setScrollTop(r - n) : o >= a && this.view.setScrollTop(o - this.view.renderHeight));
        }
    }
    getRelativeTop(t, e = 0) {
        if (t < 0 || t >= this.length) throw new Dyt(this.user, `Invalid index ${t}`);
        const n = this.view.getScrollTop(), i = this.view.elementTop(t), r = this.view.elementHeight(t);
        if (i < n + e || i + r > n + this.view.renderHeight) return null;
        const s = r - this.view.renderHeight + e;
        return Math.abs((n + e - i) / s);
    }
    isDOMFocused() {
        return Xte(this.view.domNode);
    }
    getHTMLElement() {
        return this.view.domNode;
    }
    getScrollableElement() {
        return this.view.scrollableElementDomNode;
    }
    getElementID(t) {
        return this.view.getElementDomId(t);
    }
    getElementTop(t) {
        return this.view.elementTop(t);
    }
    style(t) {
        this.styleController.style(t);
    }
    toListEvent({ indexes: t, browserEvent: e }) {
        return {
            indexes: t,
            elements: t.map((n)=>this.view.element(n)),
            browserEvent: e
        };
    }
    _onFocusChange() {
        const t = this.focus.get();
        this.view.domNode.classList.toggle("element-focused", t.length > 0), this.onDidChangeActiveDescendant();
    }
    onDidChangeActiveDescendant() {
        const t = this.focus.get();
        if (t.length > 0) {
            let e;
            this.accessibilityProvider?.getActiveDescendantId && (e = this.accessibilityProvider.getActiveDescendantId(this.view.element(t[0]))), this.view.domNode.setAttribute("aria-activedescendant", e || this.view.getElementDomId(t[0]));
        } else this.view.domNode.removeAttribute("aria-activedescendant");
    }
    _onSelectionChange() {
        const t = this.selection.get();
        this.view.domNode.classList.toggle("selection-none", t.length === 0), this.view.domNode.classList.toggle("selection-single", t.length === 1), this.view.domNode.classList.toggle("selection-multiple", t.length > 1);
    }
    dispose() {
        this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose();
    }
}, Re([
    sl
], F5.prototype, "onDidChangeFocus", null), Re([
    sl
], F5.prototype, "onDidChangeSelection", null), Re([
    sl
], F5.prototype, "onContextMenu", null), Re([
    sl
], F5.prototype, "onKeyDown", null), Re([
    sl
], F5.prototype, "onKeyUp", null), Re([
    sl
], F5.prototype, "onKeyPress", null), Re([
    sl
], F5.prototype, "onDidFocus", null), Re([
    sl
], F5.prototype, "onDidBlur", null);

}
