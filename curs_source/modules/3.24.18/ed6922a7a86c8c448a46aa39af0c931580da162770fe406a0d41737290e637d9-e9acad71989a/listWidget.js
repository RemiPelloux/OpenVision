import { Ai, Ct, He, Kl, Lo, Se, T0, V3e, bt, jn, uNt, ve, x7 } from "./HVr.js";
import { ie } from "./actions_2.js";
import { hS } from "./aria.js";
import { dr } from "./arrays.js";
import { bn } from "./async.js";
import { Hc } from "./autorun.js";
import { Ci, Sm } from "./color.js";
import { MO } from "./cssValue.js";
import { sw } from "./decorators.js";
import { Gc, en, xi } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { Xze, Yy } from "./filters.js";
import { gu, jg } from "./keyboardEvent.js";
import { XUc } from "./list.css";
import { Pwe, h5e } from "./list.js";
import { gns, nKe } from "./listView.js";
import { J_, ew } from "./mouseEvent.js";
import { cR } from "./numbers.js";
import { qa } from "./observable.js";
import { $ts, Ayg, Iyg, WS, dS, fM, fns, i8c, iRe, jy, kb, n8c, nu, nw, r5, wFt, xo, xw, xyg } from "./qIc.js";
import { YUc, _yg } from "./splice.js";
import { Ex, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var r8c, bvn, s8c, Pbi, vns, nmt, _ns, o8c, a8c, bns, Lbi, Nbi, c8c, l8c, yns, u8c, d8c, h8c, mR;
export { Lbi, Nbi, Pbi, _ns, a8c, bns, bvn, c8c, d8c, h8c, l8c, mR, nmt, o8c, r8c, s8c, u8c, vns, yns };
var __wakaru_qV_initialized = false;
export function qV() {
if (__wakaru_qV_initialized) return;
__wakaru_qV_initialized = true;
"use strict";
x(), en(), nw(), MO(), B7(), jg(), Ex(), hS(), _yg(), dr(), bn(), Sm(), sw(), bt(), Yy(), Se(), cR(), jn(), gr(), XUc(), h5e(), nKe(), ew(), qa(), r8c = class {
    constructor(e){
        this.trait = e, this.renderedElements = [];
    }
    get templateId() {
        return `template:${this.trait.name}`;
    }
    renderTemplate(e) {
        return e;
    }
    renderElement(e, t, n) {
        const i = this.renderedElements.findIndex((r)=>r.templateData === n);
        if (i >= 0) {
            const r = this.renderedElements[i];
            this.trait.unrender(n), r.index = t;
        } else {
            const r = {
                index: t,
                templateData: n
            };
            this.renderedElements.push(r);
        }
        this.trait.renderIndex(t, n);
    }
    splice(e, t, n) {
        const i = [];
        for (const r of this.renderedElements)r.index < e ? i.push(r) : r.index >= e + t && i.push({
            index: r.index + n - t,
            templateData: r.templateData
        });
        this.renderedElements = i;
    }
    renderIndexes(e) {
        for (const { index: t, templateData: n } of this.renderedElements)e.indexOf(t) > -1 && this.trait.renderIndex(t, n);
    }
    disposeTemplate(e) {
        const t = this.renderedElements.findIndex((n)=>n.templateData === e);
        t < 0 || this.renderedElements.splice(t, 1);
    }
}, bvn = class {
    constructor(e){
        this._trait = e, this.indexes = [], this.sortedIndexes = [], this._onChange = new ve, this.onChange = this._onChange.event;
    }
    get name() {
        return this._trait;
    }
    get renderer() {
        return new r8c(this);
    }
    splice(e, t, n) {
        const i = n.length - t, r = e + t, s = [];
        let o = 0;
        for(; o < this.sortedIndexes.length && this.sortedIndexes[o] < e;)s.push(this.sortedIndexes[o++]);
        for(let a = 0; a < n.length; a++)n[a] && s.push(a + e);
        for(; o < this.sortedIndexes.length && this.sortedIndexes[o] >= r;)s.push(this.sortedIndexes[o++] + i);
        this.renderer.splice(e, t, n.length), this._set(s, s);
    }
    renderIndex(e, t) {
        t.classList.toggle(this._trait, this.contains(e));
    }
    unrender(e) {
        e.classList.remove(this._trait);
    }
    set(e, t) {
        return this._set(e, [
            ...e
        ].sort(yns), t);
    }
    _set(e, t, n) {
        const i = this.indexes, r = this.sortedIndexes;
        this.indexes = e, this.sortedIndexes = t;
        const s = fns(r, e);
        return this.renderer.renderIndexes(s), this._onChange.fire({
            indexes: e,
            browserEvent: n
        }), i;
    }
    get() {
        return this.indexes;
    }
    contains(e) {
        return V3e(this.sortedIndexes, e, yns) >= 0;
    }
    dispose() {
        Lo(this._onChange);
    }
}, ie([
    xo
], bvn.prototype, "renderer", null), s8c = class extends bvn {
    constructor(e){
        super("selected"), this.setAriaSelected = e;
    }
    renderIndex(e, t) {
        super.renderIndex(e, t), this.setAriaSelected && (this.contains(e) ? t.setAttribute("aria-selected", "true") : t.setAttribute("aria-selected", "false"));
    }
}, Pbi = class {
    constructor(e, t, n){
        this.trait = e, this.view = t, this.identityProvider = n;
    }
    splice(e, t, n) {
        if (!this.identityProvider) return this.trait.splice(e, t, new Array(n.length).fill(!1));
        const i = this.trait.get().map((o)=>this.identityProvider.getId(this.view.element(o)).toString());
        if (i.length === 0) return this.trait.splice(e, t, new Array(n.length).fill(!1));
        const r = new Set(i), s = n.map((o)=>r.has(this.identityProvider.getId(o).toString()));
        this.trait.splice(e, t, s);
    }
}, vns = class {
    constructor(e, t, n){
        this.list = e, this.view = t, this.disposables = new He, this.multipleSelectionDisposables = new He, this.multipleSelectionSupport = n.multipleSelectionSupport, this.disposables.add(this.onKeyDown((i)=>{
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
                    this.multipleSelectionSupport && (Ai ? i.metaKey : i.ctrlKey) && this.onCtrlA(i);
            }
        }));
    }
    get onKeyDown() {
        return Ct.chain(this.disposables.add(new mp(this.view.domNode, "keydown")).event, (e)=>e.filter((t)=>!r5(t.target)).map((t)=>new gu(t)));
    }
    updateOptions(e) {
        e.multipleSelectionSupport !== void 0 && (this.multipleSelectionSupport = e.multipleSelectionSupport);
    }
    onEnter(e) {
        e.preventDefault(), e.stopPropagation(), this.list.setSelection(this.list.getFocus(), e.browserEvent);
    }
    onUpArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusPrevious(1, !1, e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
    }
    onDownArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusNext(1, !1, e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
    }
    onPageUpArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusPreviousPage(e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
    }
    onPageDownArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusNextPage(e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
    }
    onCtrlA(e) {
        e.preventDefault(), e.stopPropagation(), this.list.setSelection(x7(this.list.length), e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus();
    }
    onEscape(e) {
        this.list.getSelection().length && (e.preventDefault(), e.stopPropagation(), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus());
    }
    dispose() {
        this.disposables.dispose(), this.multipleSelectionDisposables.dispose();
    }
}, ie([
    xo
], vns.prototype, "onKeyDown", null), nmt = ((e)=>(e[e.Automatic = 0] = "Automatic", e[e.Trigger = 1] = "Trigger", e))(nmt || {}), _ns = new class {
    mightProducePrintableCharacter(e) {
        return e.ctrlKey || e.metaKey || e.altKey ? !1 : e.keyCode >= 31 && e.keyCode <= 56 || e.keyCode >= 21 && e.keyCode <= 30 || e.keyCode >= 98 && e.keyCode <= 107 || e.keyCode >= 85 && e.keyCode <= 95;
    }
}, o8c = class {
    constructor(e, t, n, i, r){
        this.list = e, this.view = t, this.keyboardNavigationLabelProvider = n, this.keyboardNavigationEventFilter = i, this.delegate = r, this.enabled = !1, this.state = 0, this.mode = 0, this.triggered = !1, this.previouslyFocused = -1, this.enabledDisposables = new He, this.disposables = new He, this.updateOptions(e.options);
    }
    updateOptions(e) {
        e.typeNavigationEnabled ?? !0 ? this.enable() : this.disable(), this.mode = e.typeNavigationMode ?? 0;
    }
    trigger() {
        this.triggered = !this.triggered;
    }
    enable() {
        if (this.enabled) return;
        let e = !1;
        const t = Ct.chain(this.enabledDisposables.add(new mp(this.view.domNode, "keydown")).event, (r)=>r.filter((s)=>!r5(s.target)).filter(()=>this.mode === 0 || this.triggered).map((s)=>new gu(s)).filter((s)=>e || this.keyboardNavigationEventFilter(s)).filter((s)=>this.delegate.mightProducePrintableCharacter(s)).forEach((s)=>Gc.stop(s, !0)).map((s)=>s.browserEvent.key)), n = Ct.debounce(t, ()=>null, 800, void 0, void 0, void 0, this.enabledDisposables);
        Ct.reduce(Ct.any(t, n), (r, s)=>s === null ? null : (r || "") + s, void 0, this.enabledDisposables)(this.onInput, this, this.enabledDisposables), n(this.onClear, this, this.enabledDisposables), t(()=>e = !0, void 0, this.enabledDisposables), n(()=>e = !1, void 0, this.enabledDisposables), this.enabled = !0, this.triggered = !1;
    }
    disable() {
        this.enabled && (this.enabledDisposables.clear(), this.enabled = !1, this.triggered = !1);
    }
    onClear() {
        const e = this.list.getFocus();
        if (e.length > 0 && e[0] === this.previouslyFocused) {
            const t = this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(e[0]));
            typeof t == "string" ? jy(t) : t && jy(t.get());
        }
        this.previouslyFocused = -1;
    }
    onInput(e) {
        if (!e) {
            this.state = 0, this.triggered = !1;
            return;
        }
        const t = this.list.getFocus(), n = t.length > 0 ? t[0] : 0, i = this.state === 0 ? 1 : 0;
        this.state = 1;
        for(let r = 0; r < this.list.length; r++){
            const s = (n + r + i) % this.list.length, o = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(s)), a = o && o.toString();
            if (this.list.options.typeNavigationEnabled) {
                if (typeof a < "u") {
                    if (Xze(e, a)) {
                        this.previouslyFocused = n, this.list.setFocus([
                            s
                        ]), this.list.reveal(s);
                        return;
                    }
                    const c = $ts(e, a);
                    if (c && c[0].end - c[0].start > 1 && c.length === 1) {
                        this.previouslyFocused = n, this.list.setFocus([
                            s
                        ]), this.list.reveal(s);
                        return;
                    }
                }
            } else if (typeof a > "u" || Xze(e, a)) {
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
}, a8c = class {
    constructor(e, t){
        this.list = e, this.view = t, this.disposables = new He;
        const n = Ct.chain(this.disposables.add(new mp(t.domNode, "keydown")).event, (r)=>r.filter((s)=>!r5(s.target)).map((s)=>new gu(s)));
        Ct.chain(n, (r)=>r.filter((s)=>s.keyCode === 2 && !s.ctrlKey && !s.metaKey && !s.shiftKey && !s.altKey))(this.onTab, this, this.disposables);
    }
    onTab(e) {
        if (e.target !== this.view.domNode) return;
        const t = this.list.getFocus();
        if (t.length === 0) return;
        const n = this.view.domElement(t[0]);
        if (!n) return;
        const i = n.querySelector("[tabIndex]");
        if (!i || !nu(i) || i.tabIndex === -1) return;
        const r = xi(i).getComputedStyle(i);
        r.visibility === "hidden" || r.display === "none" || (e.preventDefault(), e.stopPropagation(), i.focus());
    }
    dispose() {
        this.disposables.dispose();
    }
}, bns = {
    isSelectionSingleChangeEvent: n8c,
    isSelectionRangeChangeEvent: i8c
}, Lbi = class {
    constructor(e){
        this.list = e, this.disposables = new He, this._onPointer = new ve, this.onPointer = this._onPointer.event, e.options.multipleSelectionSupport !== !1 && (this.multipleSelectionController = this.list.options.multipleSelectionController || bns), this.mouseSupport = typeof e.options.mouseSupport > "u" || !!e.options.mouseSupport, this.mouseSupport && (e.onMouseDown(this.onMouseDown, this, this.disposables), e.onContextMenu(this.onContextMenu, this, this.disposables), e.onMouseDblClick(this.onDoubleClick, this, this.disposables), e.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(zT.addTarget(e.getHTMLElement()))), Ct.any(e.onMouseClick, e.onMouseMiddleClick, e.onTap)(this.onViewPointer, this, this.disposables);
    }
    updateOptions(e) {
        e.multipleSelectionSupport !== void 0 && (this.multipleSelectionController = void 0, e.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || bns));
    }
    isSelectionSingleChangeEvent(e) {
        return this.multipleSelectionController ? this.multipleSelectionController.isSelectionSingleChangeEvent(e) : !1;
    }
    isSelectionRangeChangeEvent(e) {
        return this.multipleSelectionController ? this.multipleSelectionController.isSelectionRangeChangeEvent(e) : !1;
    }
    isSelectionChangeEvent(e) {
        return this.isSelectionSingleChangeEvent(e) || this.isSelectionRangeChangeEvent(e);
    }
    onMouseDown(e) {
        wFt(e.browserEvent.target) || WS() !== e.browserEvent.target && this.list.domFocus();
    }
    onContextMenu(e) {
        if (r5(e.browserEvent.target) || wFt(e.browserEvent.target)) return;
        const t = typeof e.index > "u" ? [] : [
            e.index
        ];
        this.list.setFocus(t, e.browserEvent);
    }
    onViewPointer(e) {
        if (!this.mouseSupport || r5(e.browserEvent.target) || wFt(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
        e.browserEvent.isHandledByList = !0;
        const t = e.index;
        if (typeof t > "u") {
            this.list.setFocus([], e.browserEvent), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0);
            return;
        }
        if (this.isSelectionChangeEvent(e)) return this.changeSelection(e);
        this.list.setFocus([
            t
        ], e.browserEvent), this.list.setAnchor(t), xyg(e.browserEvent) || this.list.setSelection([
            t
        ], e.browserEvent), this._onPointer.fire(e);
    }
    onDoubleClick(e) {
        if (r5(e.browserEvent.target) || wFt(e.browserEvent.target) || this.isSelectionChangeEvent(e) || e.browserEvent.isHandledByList) return;
        e.browserEvent.isHandledByList = !0;
        const t = this.list.getFocus();
        this.list.setSelection(t, e.browserEvent);
    }
    changeSelection(e) {
        const t = e.index;
        let n = this.list.getAnchor();
        if (this.isSelectionRangeChangeEvent(e)) {
            typeof n > "u" && (n = this.list.getFocus()[0] ?? t, this.list.setAnchor(n));
            const i = Math.min(n, t), r = Math.max(n, t), s = x7(i, r + 1), o = this.list.getSelection(), a = Iyg(fns(o, [
                n
            ]), n);
            if (a.length === 0) return;
            const c = fns(s, Ayg(o, a));
            this.list.setSelection(c, e.browserEvent), this.list.setFocus([
                t
            ], e.browserEvent);
        } else if (this.isSelectionSingleChangeEvent(e)) {
            const i = this.list.getSelection(), r = i.filter((s)=>s !== t);
            this.list.setFocus([
                t
            ]), this.list.setAnchor(t), i.length === r.length ? this.list.setSelection([
                ...r,
                t
            ], e.browserEvent) : this.list.setSelection(r, e.browserEvent);
        }
    }
    dispose() {
        this.disposables.dispose();
    }
}, Nbi = class {
    constructor(e, t){
        this.styleElement = e, this.selectorSuffix = t;
    }
    style(e) {
        const t = this.selectorSuffix && `.${this.selectorSuffix}`, n = [];
        e.listBackground && n.push(`.monaco-list${t} .monaco-list-rows { background: ${e.listBackground}; }`), e.listFocusBackground && (n.push(`.monaco-list${t}:focus .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), n.push(`.monaco-list${t}:focus .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground && n.push(`.monaco-list${t}:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground && (n.push(`.monaco-list${t}:focus .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), n.push(`.monaco-list${t}:focus .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground && n.push(`.monaco-list${t}:focus .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listActiveSelectionIconForeground && n.push(`.monaco-list${t}:focus .monaco-list-row.selected .codicon { color: ${e.listActiveSelectionIconForeground}; }`), e.listFocusAndSelectionBackground && n.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }
			`), e.listFocusAndSelectionForeground && n.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }
			`), e.listInactiveFocusForeground && (n.push(`.monaco-list${t} .monaco-list-row.focused { color:  ${e.listInactiveFocusForeground}; }`), n.push(`.monaco-list${t} .monaco-list-row.focused:hover { color:  ${e.listInactiveFocusForeground}; }`)), e.listInactiveSelectionIconForeground && n.push(`.monaco-list${t} .monaco-list-row.focused .codicon { color:  ${e.listInactiveSelectionIconForeground}; }`), e.listInactiveFocusBackground && (n.push(`.monaco-list${t} .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), n.push(`.monaco-list${t} .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground && (n.push(`.monaco-list${t} .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), n.push(`.monaco-list${t} .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground && n.push(`.monaco-list${t} .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground && n.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${e.listHoverBackground}; }`), e.listHoverForeground && n.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`);
        const i = iRe(e.listFocusAndSelectionOutline, iRe(e.listSelectionOutline, e.listFocusOutline ?? ""));
        i && n.push(`.monaco-list${t}:focus .monaco-list-row.focused.selected { outline: 1px solid ${i}; outline-offset: -1px;}`), e.listFocusOutline && n.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }
			`);
        const r = iRe(e.listSelectionOutline, e.listInactiveFocusOutline ?? "");
        r && n.push(`.monaco-list${t} .monaco-list-row.focused.selected { outline: 1px dotted ${r}; outline-offset: -1px; }`), e.listSelectionOutline && n.push(`.monaco-list${t} .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listInactiveFocusOutline && n.push(`.monaco-list${t} .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline && n.push(`.monaco-list${t} .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropOverBackground && n.push(`
				.monaco-list${t}.drop-target,
				.monaco-list${t} .monaco-list-rows.drop-target,
				.monaco-list${t} .monaco-list-row.drop-target { background-color: ${e.listDropOverBackground} !important; color: inherit !important; }
			`), e.listDropBetweenBackground && (n.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${t} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`), n.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${t} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`)), e.tableColumnsBorder && n.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${e.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`), e.tableOddRowsBackgroundColor && n.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${e.tableOddRowsBackgroundColor};
				}
			`), this.styleElement.textContent = n.join(`
`);
    }
}, c8c = {
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
    treeInactiveIndentGuidesStroke: Ci.fromHex("#a9a9a9").transparent(.4).toString(),
    tableColumnsBorder: Ci.fromHex("#cccccc").transparent(.2).toString(),
    tableOddRowsBackgroundColor: Ci.fromHex("#cccccc").transparent(.04).toString(),
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
}, l8c = {
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
}, yns = (e, t)=>e - t, u8c = class {
    constructor(e, t){
        this._templateId = e, this.renderers = t;
    }
    get templateId() {
        return this._templateId;
    }
    renderTemplate(e) {
        return this.renderers.map((t)=>t.renderTemplate(e));
    }
    renderElement(e, t, n, i) {
        let r = 0;
        for (const s of this.renderers)s.renderElement(e, t, n[r++], i);
    }
    disposeElement(e, t, n, i) {
        let r = 0;
        for (const s of this.renderers)s.disposeElement?.(e, t, n[r], i), r += 1;
    }
    disposeTemplate(e) {
        let t = 0;
        for (const n of this.renderers)n.disposeTemplate(e[t++]);
    }
}, d8c = class {
    constructor(e){
        this.accessibilityProvider = e, this.templateId = "a18n";
    }
    renderTemplate(e) {
        return {
            container: e,
            disposables: new He
        };
    }
    renderElement(e, t, n) {
        const i = this.accessibilityProvider.getAriaLabel(e), r = i && typeof i != "string" ? i : xw(i);
        n.disposables.add(Hc((o)=>{
            this.setAriaLabel(o.readObservable(r), n.container);
        }));
        const s = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
        typeof s == "number" ? n.container.setAttribute("aria-level", `${s}`) : n.container.removeAttribute("aria-level");
    }
    setAriaLabel(e, t) {
        e ? t.setAttribute("aria-label", e) : t.removeAttribute("aria-label");
    }
    disposeElement(e, t, n, i) {
        n.disposables.clear();
    }
    disposeTemplate(e) {
        e.disposables.dispose();
    }
}, h8c = class {
    constructor(e, t){
        this.list = e, this.dnd = t;
    }
    getDragElements(e) {
        const t = this.list.getSelectedElements();
        return t.indexOf(e) > -1 ? t : [
            e
        ];
    }
    getDragURI(e) {
        return this.dnd.getDragURI(e);
    }
    getDragLabel(e, t) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e, t);
    }
    onDragStart(e, t) {
        this.dnd.onDragStart?.(e, t);
    }
    onDragOver(e, t, n, i, r) {
        return this.dnd.onDragOver(e, t, n, i, r);
    }
    onDragLeave(e, t, n, i) {
        this.dnd.onDragLeave?.(e, t, n, i);
    }
    onDragEnd(e) {
        this.dnd.onDragEnd?.(e);
    }
    drop(e, t, n, i, r) {
        this.dnd.drop(e, t, n, i, r);
    }
    dispose() {
        this.dnd.dispose();
    }
}, mR = class {
    constructor(e, t, n, i, r = l8c){
        this.user = e, this._options = r, this.focus = new bvn("focused"), this.anchor = new bvn("anchor"), this.eventBufferer = new uNt, this._ariaLabel = "", this.disposables = new He, this._onDidDispose = new ve, this.onDidDispose = this._onDidDispose.event;
        const s = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? this._options.accessibilityProvider?.getWidgetRole() : "list";
        this.selection = new s8c(s !== "listbox");
        const o = [
            this.focus.renderer,
            this.selection.renderer
        ];
        this.accessibilityProvider = r.accessibilityProvider, this.accessibilityProvider && (o.push(new d8c(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables)), i = i.map((c)=>new u8c(c.templateId, [
                ...o,
                c
            ]));
        const a = {
            ...r,
            dnd: r.dnd && new h8c(this, r.dnd)
        };
        if (this.view = this.createListView(t, n, i, a), this.view.domNode.setAttribute("role", s), r.styleController) this.styleController = r.styleController(this.view.domId);
        else {
            const c = dS(this.view.domNode);
            this.styleController = new Nbi(c, this.view.domId);
        }
        if (this.spliceable = new YUc([
            new Pbi(this.focus, this.view, r.identityProvider),
            new Pbi(this.selection, this.view, r.identityProvider),
            new Pbi(this.anchor, this.view, r.identityProvider),
            this.view
        ]), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new a8c(this, this.view)), (typeof r.keyboardSupport != "boolean" || r.keyboardSupport) && (this.keyboardController = new vns(this, this.view, r), this.disposables.add(this.keyboardController)), r.keyboardNavigationLabelProvider) {
            const c = r.keyboardNavigationDelegate || _ns;
            this.typeNavigationController = new o8c(this, this.view, r.keyboardNavigationLabelProvider, r.keyboardNavigationEventFilter ?? (()=>!0), c), this.disposables.add(this.typeNavigationController);
        }
        this.mouseController = this.createMouseController(r), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider && (this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel()), this._options.multipleSelectionSupport !== !1 && this.view.domNode.setAttribute("aria-multiselectable", "true");
    }
    get onDidChangeFocus() {
        return Ct.map(this.eventBufferer.wrapEvent(this.focus.onChange), (e)=>this.toListEvent(e), this.disposables);
    }
    get onDidChangeSelection() {
        return Ct.map(this.eventBufferer.wrapEvent(this.selection.onChange), (e)=>this.toListEvent(e), this.disposables);
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
        let e = !1;
        const t = Ct.chain(this.disposables.add(new mp(this.view.domNode, "keydown")).event, (r)=>r.map((s)=>new gu(s)).filter((s)=>e = s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map((s)=>Gc.stop(s, !0)).filter(()=>!1)), n = Ct.chain(this.disposables.add(new mp(this.view.domNode, "keyup")).event, (r)=>r.forEach(()=>e = !1).map((s)=>new gu(s)).filter((s)=>s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map((s)=>Gc.stop(s, !0)).map(({ browserEvent: s })=>{
                const o = this.getFocus(), a = o.length ? o[0] : void 0, c = typeof a < "u" ? this.view.element(a) : void 0, l = typeof a < "u" ? this.view.domElement(a) : this.view.domNode;
                return {
                    index: a,
                    element: c,
                    anchor: l,
                    browserEvent: s
                };
            })), i = Ct.chain(this.view.onContextMenu, (r)=>r.filter((s)=>!e).map(({ element: s, index: o, browserEvent: a })=>({
                    element: s,
                    index: o,
                    anchor: new J_(xi(this.view.domNode), a),
                    browserEvent: a
                })));
        return Ct.any(t, n, i);
    }
    get onKeyDown() {
        return this.disposables.add(new mp(this.view.domNode, "keydown")).event;
    }
    get onKeyUp() {
        return this.disposables.add(new mp(this.view.domNode, "keyup")).event;
    }
    get onKeyPress() {
        return this.disposables.add(new mp(this.view.domNode, "keypress")).event;
    }
    get onDidFocus() {
        return Ct.signal(this.disposables.add(new mp(this.view.domNode, "focus", !0)).event);
    }
    get onDidBlur() {
        return Ct.signal(this.disposables.add(new mp(this.view.domNode, "blur", !0)).event);
    }
    createListView(e, t, n, i) {
        return new gns(e, t, n, i);
    }
    createMouseController(e) {
        return new Lbi(this);
    }
    updateOptions(e = {}) {
        this._options = {
            ...this._options,
            ...e
        }, this.typeNavigationController?.updateOptions(this._options), this._options.multipleSelectionController !== void 0 && (this._options.multipleSelectionSupport ? this.view.domNode.setAttribute("aria-multiselectable", "true") : this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(e), this.keyboardController?.updateOptions(e), this.view.updateOptions(e);
    }
    get options() {
        return this._options;
    }
    splice(e, t, n = []) {
        if (e < 0 || e > this.view.length) throw new Pwe(this.user, `Invalid start index: ${e}`);
        if (t < 0) throw new Pwe(this.user, `Invalid delete count: ${t}`);
        t === 0 && n.length === 0 || this.eventBufferer.bufferEvents(()=>this.spliceable.splice(e, t, n));
    }
    updateWidth(e) {
        this.view.updateWidth(e);
    }
    updateElementHeight(e, t) {
        this.view.updateElementHeight(e, t, null);
    }
    rerender() {
        this.view.rerender();
    }
    element(e) {
        return this.view.element(e);
    }
    indexOf(e) {
        return this.view.indexOf(e);
    }
    indexAt(e) {
        return this.view.indexAt(e);
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
    set scrollTop(e) {
        this.view.setScrollTop(e);
    }
    get scrollLeft() {
        return this.view.getScrollLeft();
    }
    set scrollLeft(e) {
        this.view.setScrollLeft(e);
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
    set ariaLabel(e) {
        this._ariaLabel = e, this.view.domNode.setAttribute("aria-label", e);
    }
    domFocus() {
        this.view.domNode.focus({
            preventScroll: !0
        });
    }
    layout(e, t) {
        this.view.layout(e, t);
    }
    triggerTypeNavigation() {
        this.typeNavigationController?.trigger();
    }
    setSelection(e, t) {
        for (const n of e)if (n < 0 || n >= this.length) throw new Pwe(this.user, `Invalid index ${n}`);
        this.selection.set(e, t);
    }
    getSelection() {
        return this.selection.get();
    }
    getSelectedElements() {
        return this.getSelection().map((e)=>this.view.element(e));
    }
    setAnchor(e) {
        if (typeof e > "u") {
            this.anchor.set([]);
            return;
        }
        if (e < 0 || e >= this.length) throw new Pwe(this.user, `Invalid index ${e}`);
        this.anchor.set([
            e
        ]);
    }
    getAnchor() {
        return this.anchor.get().at(0);
    }
    getAnchorElement() {
        const e = this.getAnchor();
        return typeof e > "u" ? void 0 : this.element(e);
    }
    setFocus(e, t) {
        for (const n of e)if (n < 0 || n >= this.length) throw new Pwe(this.user, `Invalid index ${n}`);
        this.focus.set(e, t);
    }
    focusNext(e = 1, t = !1, n, i) {
        if (this.length === 0) return;
        const r = this.focus.get(), s = this.findNextIndex(r.length > 0 ? r[0] + e : 0, t, i);
        s > -1 && this.setFocus([
            s
        ], n);
    }
    focusPrevious(e = 1, t = !1, n, i) {
        if (this.length === 0) return;
        const r = this.focus.get(), s = this.findPreviousIndex(r.length > 0 ? r[0] - e : 0, t, i);
        s > -1 && this.setFocus([
            s
        ], n);
    }
    async focusNextPage(e, t) {
        let n = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
        n = n === 0 ? 0 : n - 1;
        const i = this.getFocus()[0];
        if (i !== n && (i === void 0 || n > i)) {
            const r = this.findPreviousIndex(n, !1, t);
            r > -1 && i !== r ? this.setFocus([
                r
            ], e) : this.setFocus([
                n
            ], e);
        } else {
            const r = this.view.getScrollTop();
            let s = r + this.view.renderHeight;
            n > i && (s -= this.view.elementHeight(n)), this.view.setScrollTop(s), this.view.getScrollTop() !== r && (this.setFocus([]), await Kl(0), await this.focusNextPage(e, t));
        }
    }
    async focusPreviousPage(e, t, n = ()=>0) {
        let i;
        const r = n(), s = this.view.getScrollTop() + r;
        s === 0 ? i = this.view.indexAt(s) : i = this.view.indexAfter(s - 1);
        const o = this.getFocus()[0];
        if (o !== i && (o === void 0 || o >= i)) {
            const a = this.findNextIndex(i, !1, t);
            a > -1 && o !== a ? this.setFocus([
                a
            ], e) : this.setFocus([
                i
            ], e);
        } else {
            const a = s;
            this.view.setScrollTop(s - this.view.renderHeight - r), this.view.getScrollTop() + n() !== a && (this.setFocus([]), await Kl(0), await this.focusPreviousPage(e, t, n));
        }
    }
    focusLast(e, t) {
        if (this.length === 0) return;
        const n = this.findPreviousIndex(this.length - 1, !1, t);
        n > -1 && this.setFocus([
            n
        ], e);
    }
    focusFirst(e, t) {
        this.focusNth(0, e, t);
    }
    focusNth(e, t, n) {
        if (this.length === 0) return;
        const i = this.findNextIndex(e, !1, n);
        i > -1 && this.setFocus([
            i
        ], t);
    }
    findNextIndex(e, t = !1, n) {
        for(let i = 0; i < this.length; i++){
            if (e >= this.length && !t) return -1;
            if (e = e % this.length, !n || n(this.element(e))) return e;
            e++;
        }
        return -1;
    }
    findPreviousIndex(e, t = !1, n) {
        for(let i = 0; i < this.length; i++){
            if (e < 0 && !t) return -1;
            if (e = (this.length + e % this.length) % this.length, !n || n(this.element(e))) return e;
            e--;
        }
        return -1;
    }
    getFocus() {
        return this.focus.get();
    }
    getFocusedElements() {
        return this.getFocus().map((e)=>this.view.element(e));
    }
    reveal(e, t, n = 0) {
        if (e < 0 || e >= this.length) throw new Pwe(this.user, `Invalid index ${e}`);
        const i = this.view.getScrollTop(), r = this.view.elementTop(e), s = this.view.elementHeight(e);
        if (T0(t)) {
            const o = s - this.view.renderHeight + n;
            this.view.setScrollTop(o * kb(t, 0, 1) + r - n);
        } else {
            const o = r + s, a = i + this.view.renderHeight;
            r < i + n && o >= a || (r < i + n || o >= a && s >= this.view.renderHeight ? this.view.setScrollTop(r - n) : o >= a && this.view.setScrollTop(o - this.view.renderHeight));
        }
    }
    getRelativeTop(e, t = 0) {
        if (e < 0 || e >= this.length) throw new Pwe(this.user, `Invalid index ${e}`);
        const n = this.view.getScrollTop(), i = this.view.elementTop(e), r = this.view.elementHeight(e);
        if (i < n + t || i + r > n + this.view.renderHeight) return null;
        const s = r - this.view.renderHeight + t;
        return Math.abs((n + t - i) / s);
    }
    isDOMFocused() {
        return fM(this.view.domNode);
    }
    getHTMLElement() {
        return this.view.domNode;
    }
    getScrollableElement() {
        return this.view.scrollableElementDomNode;
    }
    getElementID(e) {
        return this.view.getElementDomId(e);
    }
    getElementTop(e) {
        return this.view.elementTop(e);
    }
    style(e) {
        this.styleController.style(e);
    }
    toListEvent({ indexes: e, browserEvent: t }) {
        return {
            indexes: e,
            elements: e.map((n)=>this.view.element(n)),
            browserEvent: t
        };
    }
    _onFocusChange() {
        const e = this.focus.get();
        this.view.domNode.classList.toggle("element-focused", e.length > 0), this.onDidChangeActiveDescendant();
    }
    onDidChangeActiveDescendant() {
        const e = this.focus.get();
        if (e.length > 0) {
            let t;
            this.accessibilityProvider?.getActiveDescendantId && (t = this.accessibilityProvider.getActiveDescendantId(this.view.element(e[0]))), this.view.domNode.setAttribute("aria-activedescendant", t || this.view.getElementDomId(e[0]));
        } else this.view.domNode.removeAttribute("aria-activedescendant");
    }
    _onSelectionChange() {
        const e = this.selection.get();
        this.view.domNode.classList.toggle("selection-none", e.length === 0), this.view.domNode.classList.toggle("selection-single", e.length === 1), this.view.domNode.classList.toggle("selection-multiple", e.length > 1);
    }
    dispose() {
        this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose();
    }
}, ie([
    xo
], mR.prototype, "onDidChangeFocus", null), ie([
    xo
], mR.prototype, "onDidChangeSelection", null), ie([
    xo
], mR.prototype, "onContextMenu", null), ie([
    xo
], mR.prototype, "onKeyDown", null), ie([
    xo
], mR.prototype, "onKeyUp", null), ie([
    xo
], mR.prototype, "onKeyPress", null), ie([
    xo
], mR.prototype, "onDidFocus", null), ie([
    xo
], mR.prototype, "onDidBlur", null);

}
