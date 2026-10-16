import { Ct, He, S, Se, U_, bt, rn, ve, we } from "./HVr.js";
import { Ule } from "./abstractTree.js";
import { C, ie } from "./actions_2.js";
import { Lrs, SWc, mU } from "./asyncDataTree.js";
import { Cn, qt } from "./configuration.js";
import { iu, uh } from "./configurationRegistry.js";
import { ka } from "./contextView.js";
import { At, dn, he, xn } from "./contextkey.js";
import { jP, of } from "./contextkeys.js";
import { $le, wWc } from "./dataTree.js";
import { sf, umt } from "./defaultStyles.js";
import { en } from "./dom_2.js";
import { Ze, _t } from "./instantiation.js";
import { no } from "./keybinding.js";
import { CHc, fmt } from "./listPaging.js";
import { mR, qV } from "./listWidget.js";
import { rt } from "./nls.js";
import { Ars, EJ, Irs } from "./objectTree.js";
import { kn, rr } from "./platform_2.js";
import { EWc, Fwe, Jyi, NV, Qyi, eSi, fM, i8c, n8c, pRe, u_n, vn, xWc } from "./qIc.js";
import { hrs, kKe } from "./tableWidget.js";
import { x } from "./tslib.es6.js";
var ru, IWc, a3t, Brs, Urs, d_n, c3t, CKe, XC, h_n, Wwe, tSi, wmt, $rs, p_n, Hrs, m_n, Wrs, Grs, Vrs, jrs, TKe, g_n, Cre, nSi, iSi, f_n, cfe, rSi, l3t, v_n, lfe, Gwe, Vwe, __n, b_n, y_n, AWc, JV, sSi, k5e, oSi, qrs, RWc, DWc, mRe, u3t, d3t, fU, Cmt, EKe, MWc;
export { $rs, AWc, Brs, CKe, Cmt, Cre, DWc, EKe, Grs, Gwe, Hrs, IWc, JV, MWc, RWc, TKe, Urs, Vrs, Vwe, Wrs, Wwe, XC, __n, a3t, b_n, c3t, cfe, d3t, d_n, fU, f_n, g_n, h_n, iSi, jrs, k5e, l3t, lfe, mRe, m_n, nSi, oSi, p_n, qrs, rSi, ru, sSi, tSi, u3t, v_n, wmt, y_n };
var __wakaru_km_initialized = false;
export function km() {
if (__wakaru_km_initialized) return;
__wakaru_km_initialized = true;
"use strict";
x(), en(), CHc(), qV(), hrs(), Ule(), Lrs(), wWc(), Ars(), bt(), Se(), rt(), Cn(), uh(), dn(), of(), ka(), Ze(), no(), rr(), sf(), ru = vn("listService"), IWc = class {
    constructor(){
        this.disposables = new He, this.lists = [], this._lastFocusedWidget = void 0;
    }
    get lastFocusedList() {
        return this._lastFocusedWidget;
    }
    setLastFocusedList(e) {
        e !== this._lastFocusedWidget && (this._lastFocusedWidget?.getHTMLElement().classList.remove("last-focused"), this._lastFocusedWidget = e, this._lastFocusedWidget?.getHTMLElement().classList.add("last-focused"));
    }
    register(e, t) {
        if (this.lists.some((i)=>i.widget === e)) throw new Error("Cannot register the same widget multiple times");
        const n = {
            widget: e,
            extraContextKeys: t
        };
        return this.lists.push(n), fM(e.getHTMLElement()) && this.setLastFocusedList(e), U_(e.onDidFocus(()=>this.setLastFocusedList(e)), rn(()=>this.lists.splice(this.lists.indexOf(n), 1)), e.onDidDispose(()=>{
            this.lists = this.lists.filter((i)=>i !== n), this._lastFocusedWidget === e && this.setLastFocusedList(void 0);
        }));
    }
    dispose() {
        this.disposables.dispose();
    }
}, a3t = new At("listScrollAtBoundary", "none"), Brs = he.or(a3t.isEqualTo("top"), a3t.isEqualTo("both")), Urs = he.or(a3t.isEqualTo("bottom"), a3t.isEqualTo("both")), d_n = new At("listFocus", !0), c3t = new At("treestickyScrollFocused", !1), CKe = new At("listSupportsMultiselect", !0), XC = he.and(d_n, he.not(jP), c3t.negate()), h_n = new At("listHasSelectionOrFocus", !1), Wwe = new At("listDoubleSelection", !1), tSi = new At("listMultiSelection", !1), wmt = new At("listSelectionNavigation", !1), $rs = new At("listSupportsFind", !0), p_n = new At("treeElementCanCollapse", !1), Hrs = new At("treeElementHasParent", !1), m_n = new At("treeElementCanExpand", !1), Wrs = new At("treeElementHasChild", !1), Grs = new At("treeFindOpen", !1), Vrs = "listTypeNavigationMode", jrs = "listAutomaticKeyboardNavigation", TKe = "workbench.list.multiSelectModifier", g_n = "workbench.list.openMode", Cre = "workbench.list.horizontalScrolling", nSi = "workbench.list.defaultFindMode", iSi = "workbench.list.typeNavigationMode", f_n = "workbench.list.keyboardNavigation", cfe = "workbench.list.scrollByPage", rSi = "workbench.list.defaultFindMatchType", l3t = "workbench.tree.indent", v_n = "workbench.tree.renderIndentGuides", lfe = "workbench.list.smoothScrolling", Gwe = "workbench.list.mouseWheelScrollSensitivity", Vwe = "workbench.list.fastScrollSensitivity", __n = "workbench.tree.expandMode", b_n = "workbench.tree.enableStickyScroll", y_n = "workbench.tree.stickyScrollMaxItemCount", AWc = class extends we {
    constructor(e){
        super(), this.configurationService = e, this.useAltAsMultipleSelectionModifier = pRe(e), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            e.affectsConfiguration(TKe) && (this.useAltAsMultipleSelectionModifier = pRe(this.configurationService));
        }));
    }
    isSelectionSingleChangeEvent(e) {
        return this.useAltAsMultipleSelectionModifier ? e.browserEvent.altKey : n8c(e);
    }
    isSelectionRangeChangeEvent(e) {
        return i8c(e);
    }
}, JV = class extends mR {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c){
        const l = typeof r.horizontalScrolling < "u" ? r.horizontalScrolling : !!a.getValue(Cre), [u, h] = c.invokeFunction(eSi, r);
        super(e, t, n, i, {
            keyboardSupport: !1,
            ...u,
            horizontalScrolling: l
        }), this.disposables.add(h), this.contextKeyService = Qyi(s, this), this.disposables.add(Jyi(this.contextKeyService, this)), this.listSupportsMultiSelect = CKe.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(r.multipleSelectionSupport !== !1), wmt.bindTo(this.contextKeyService).set(!!r.selectionNavigation), this.listHasSelectionOrFocus = h_n.bindTo(this.contextKeyService), this.listDoubleSelection = Wwe.bindTo(this.contextKeyService), this.listMultiSelection = tSi.bindTo(this.contextKeyService), this.horizontalScrolling = r.horizontalScrolling, this._useAltAsMultipleSelectionModifier = pRe(a), this.disposables.add(this.contextKeyService), this.disposables.add(o.register(this)), this.updateStyles(r.overrideStyles), this.disposables.add(this.onDidChangeSelection(()=>{
            const g = this.getSelection(), f = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(g.length > 0 || f.length > 0), this.listMultiSelection.set(g.length > 1), this.listDoubleSelection.set(g.length === 2);
            });
        })), this.disposables.add(this.onDidChangeFocus(()=>{
            const g = this.getSelection(), f = this.getFocus();
            this.listHasSelectionOrFocus.set(g.length > 0 || f.length > 0);
        })), this.disposables.add(a.onDidChangeConfiguration((g)=>{
            g.affectsConfiguration(TKe) && (this._useAltAsMultipleSelectionModifier = pRe(a));
            let f = {};
            if (g.affectsConfiguration(Cre) && this.horizontalScrolling === void 0) {
                const v = !!a.getValue(Cre);
                f = {
                    ...f,
                    horizontalScrolling: v
                };
            }
            if (g.affectsConfiguration(cfe)) {
                const v = !!a.getValue(cfe);
                f = {
                    ...f,
                    scrollByPage: v
                };
            }
            if (g.affectsConfiguration(lfe)) {
                const v = !!a.getValue(lfe);
                f = {
                    ...f,
                    smoothScrolling: v
                };
            }
            if (g.affectsConfiguration(Gwe)) {
                const v = a.getValue(Gwe);
                f = {
                    ...f,
                    mouseWheelScrollSensitivity: v
                };
            }
            if (g.affectsConfiguration(Vwe)) {
                const v = a.getValue(Vwe);
                f = {
                    ...f,
                    fastScrollSensitivity: v
                };
            }
            Object.keys(f).length > 0 && this.updateOptions(f);
        })), this.navigator = new qrs(this, {
            configurationService: a,
            ...r
        }), this.disposables.add(this.navigator);
    }
    updateOptions(e) {
        super.updateOptions(e), e.overrideStyles !== void 0 && this.updateStyles(e.overrideStyles), e.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
    updateStyles(e) {
        this.style(e ? Fwe(e) : umt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
}, JV = ie([
    C(5, xn),
    C(6, ru),
    C(7, qt),
    C(8, _t)
], JV), sSi = class extends fmt {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c){
        const l = typeof r.horizontalScrolling < "u" ? r.horizontalScrolling : !!a.getValue(Cre), [u, h] = c.invokeFunction(eSi, r);
        super(e, t, n, i, {
            keyboardSupport: !1,
            ...u,
            horizontalScrolling: l
        }), this.disposables = new He, this.disposables.add(h), this.contextKeyService = Qyi(s, this), this.disposables.add(Jyi(this.contextKeyService, this.widget)), this.horizontalScrolling = r.horizontalScrolling, this.listSupportsMultiSelect = CKe.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(r.multipleSelectionSupport !== !1), wmt.bindTo(this.contextKeyService).set(!!r.selectionNavigation), this._useAltAsMultipleSelectionModifier = pRe(a), this.disposables.add(this.contextKeyService), this.disposables.add(o.register(this)), this.updateStyles(r.overrideStyles), this.disposables.add(a.onDidChangeConfiguration((g)=>{
            g.affectsConfiguration(TKe) && (this._useAltAsMultipleSelectionModifier = pRe(a));
            let f = {};
            if (g.affectsConfiguration(Cre) && this.horizontalScrolling === void 0) {
                const v = !!a.getValue(Cre);
                f = {
                    ...f,
                    horizontalScrolling: v
                };
            }
            if (g.affectsConfiguration(cfe)) {
                const v = !!a.getValue(cfe);
                f = {
                    ...f,
                    scrollByPage: v
                };
            }
            if (g.affectsConfiguration(lfe)) {
                const v = !!a.getValue(lfe);
                f = {
                    ...f,
                    smoothScrolling: v
                };
            }
            if (g.affectsConfiguration(Gwe)) {
                const v = a.getValue(Gwe);
                f = {
                    ...f,
                    mouseWheelScrollSensitivity: v
                };
            }
            if (g.affectsConfiguration(Vwe)) {
                const v = a.getValue(Vwe);
                f = {
                    ...f,
                    fastScrollSensitivity: v
                };
            }
            Object.keys(f).length > 0 && this.updateOptions(f);
        })), this.navigator = new qrs(this, {
            configurationService: a,
            ...r
        }), this.disposables.add(this.navigator);
    }
    updateOptions(e) {
        super.updateOptions(e), e.overrideStyles !== void 0 && this.updateStyles(e.overrideStyles), e.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
    updateStyles(e) {
        this.style(e ? Fwe(e) : umt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
}, sSi = ie([
    C(5, xn),
    C(6, ru),
    C(7, qt),
    C(8, _t)
], sSi), k5e = class extends kKe {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c, l){
        const u = typeof s.horizontalScrolling < "u" ? s.horizontalScrolling : !!c.getValue(Cre), [h, p] = l.invokeFunction(eSi, s);
        super(e, t, n, i, r, {
            keyboardSupport: !1,
            ...h,
            horizontalScrolling: u
        }), this.disposables.add(p), this.contextKeyService = Qyi(o, this), this.disposables.add(Jyi(this.contextKeyService, this)), this.listSupportsMultiSelect = CKe.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(s.multipleSelectionSupport !== !1), wmt.bindTo(this.contextKeyService).set(!!s.selectionNavigation), this.listHasSelectionOrFocus = h_n.bindTo(this.contextKeyService), this.listDoubleSelection = Wwe.bindTo(this.contextKeyService), this.listMultiSelection = tSi.bindTo(this.contextKeyService), this.horizontalScrolling = s.horizontalScrolling, this._useAltAsMultipleSelectionModifier = pRe(c), this.disposables.add(this.contextKeyService), this.disposables.add(a.register(this)), this.updateStyles(s.overrideStyles), this.disposables.add(this.onDidChangeSelection(()=>{
            const f = this.getSelection(), v = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(f.length > 0 || v.length > 0), this.listMultiSelection.set(f.length > 1), this.listDoubleSelection.set(f.length === 2);
            });
        })), this.disposables.add(this.onDidChangeFocus(()=>{
            const f = this.getSelection(), v = this.getFocus();
            this.listHasSelectionOrFocus.set(f.length > 0 || v.length > 0);
        })), this.disposables.add(c.onDidChangeConfiguration((f)=>{
            f.affectsConfiguration(TKe) && (this._useAltAsMultipleSelectionModifier = pRe(c));
            let v = {};
            if (f.affectsConfiguration(Cre) && this.horizontalScrolling === void 0) {
                const b = !!c.getValue(Cre);
                v = {
                    ...v,
                    horizontalScrolling: b
                };
            }
            if (f.affectsConfiguration(cfe)) {
                const b = !!c.getValue(cfe);
                v = {
                    ...v,
                    scrollByPage: b
                };
            }
            if (f.affectsConfiguration(lfe)) {
                const b = !!c.getValue(lfe);
                v = {
                    ...v,
                    smoothScrolling: b
                };
            }
            if (f.affectsConfiguration(Gwe)) {
                const b = c.getValue(Gwe);
                v = {
                    ...v,
                    mouseWheelScrollSensitivity: b
                };
            }
            if (f.affectsConfiguration(Vwe)) {
                const b = c.getValue(Vwe);
                v = {
                    ...v,
                    fastScrollSensitivity: b
                };
            }
            Object.keys(v).length > 0 && this.updateOptions(v);
        })), this.navigator = new RWc(this, {
            configurationService: c,
            ...s
        }), this.disposables.add(this.navigator);
    }
    updateOptions(e) {
        super.updateOptions(e), e.overrideStyles !== void 0 && this.updateStyles(e.overrideStyles), e.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
    updateStyles(e) {
        this.style(e ? Fwe(e) : umt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
}, k5e = ie([
    C(6, xn),
    C(7, ru),
    C(8, qt),
    C(9, _t)
], k5e), oSi = class extends we {
    constructor(e, t){
        super(), this.widget = e, this._onDidOpen = this._register(new ve), this.onDidOpen = this._onDidOpen.event, this._register(Ct.filter(this.widget.onDidChangeSelection, (n)=>NV(n.browserEvent))((n)=>this.onSelectionFromKeyboard(n))), this._register(this.widget.onPointer((n)=>this.onPointer(n.element, n.browserEvent))), this._register(this.widget.onMouseDblClick((n)=>this.onMouseDblClick(n.element, n.browserEvent))), typeof t?.openOnSingleClick != "boolean" && t?.configurationService ? (this.openOnSingleClick = t?.configurationService.getValue(g_n) !== "doubleClick", this._register(t?.configurationService.onDidChangeConfiguration((n)=>{
            n.affectsConfiguration(g_n) && (this.openOnSingleClick = t?.configurationService.getValue(g_n) !== "doubleClick");
        }))) : this.openOnSingleClick = t?.openOnSingleClick ?? !0;
    }
    onSelectionFromKeyboard(e) {
        if (e.elements.length !== 1) return;
        const t = e.browserEvent, n = typeof t.preserveFocus == "boolean" ? t.preserveFocus : !0, i = typeof t.pinned == "boolean" ? t.pinned : !n;
        this._open(this.getSelectedElement(), n, i, !1, e.browserEvent);
    }
    onPointer(e, t) {
        if (!this.openOnSingleClick || t.detail === 2) return;
        const i = t.button === 1, r = !0, s = i, o = t.ctrlKey || t.metaKey || t.altKey;
        this._open(e, r, s, o, t);
    }
    onMouseDblClick(e, t) {
        if (!t) return;
        const n = t.target;
        if (n.classList.contains("monaco-tl-twistie") || n.classList.contains("monaco-icon-label") && n.classList.contains("folder-icon") && t.offsetX < 16) return;
        const r = !1, s = !0, o = t.ctrlKey || t.metaKey || t.altKey;
        this._open(e, r, s, o, t);
    }
    _open(e, t, n, i, r) {
        e && this._onDidOpen.fire({
            editorOptions: {
                preserveFocus: t,
                pinned: n,
                revealIfVisible: !0
            },
            sideBySide: i,
            element: e,
            browserEvent: r
        });
    }
}, qrs = class extends oSi {
    constructor(e, t){
        super(e, t), this.widget = e;
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}, RWc = class extends oSi {
    constructor(e, t){
        super(e, t);
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}, DWc = class extends oSi {
    constructor(e, t){
        super(e, t);
    }
    getSelectedElement() {
        return this.widget.getSelection()[0] ?? void 0;
    }
}, mRe = class extends EJ {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c){
        const { options: l, getTypeNavigationMode: u, disposable: h } = s.invokeFunction(u_n, r);
        super(e, t, n, i, l), this.disposables.add(h), this.internals = new EKe(this, r, u, r.overrideStyles, o, a, c), this.disposables.add(this.internals);
    }
    updateOptions(e) {
        super.updateOptions(e), this.internals.updateOptions(e);
    }
}, mRe = ie([
    C(5, _t),
    C(6, xn),
    C(7, ru),
    C(8, qt)
], mRe), u3t = class extends Irs {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c){
        const { options: l, getTypeNavigationMode: u, disposable: h } = s.invokeFunction(u_n, r);
        super(e, t, n, i, l), this.disposables.add(h), this.internals = new EKe(this, r, u, r.overrideStyles, o, a, c), this.disposables.add(this.internals);
    }
    updateOptions(e = {}) {
        super.updateOptions(e), e.overrideStyles && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e);
    }
}, u3t = ie([
    C(5, _t),
    C(6, xn),
    C(7, ru),
    C(8, qt)
], u3t), d3t = class extends $le {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c, l){
        const { options: u, getTypeNavigationMode: h, disposable: p } = o.invokeFunction(u_n, s);
        super(e, t, n, i, r, u), this.disposables.add(p), this.internals = new EKe(this, s, h, s.overrideStyles, a, c, l), this.disposables.add(this.internals);
    }
    updateOptions(e = {}) {
        super.updateOptions(e), e.overrideStyles !== void 0 && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e);
    }
}, d3t = ie([
    C(6, _t),
    C(7, xn),
    C(8, ru),
    C(9, qt)
], d3t), fU = class extends mU {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c, l){
        const { options: u, getTypeNavigationMode: h, disposable: p } = o.invokeFunction(u_n, s);
        super(e, t, n, i, r, u), this.disposables.add(p), this.internals = new EKe(this, s, h, s.overrideStyles, a, c, l), this.disposables.add(this.internals);
    }
    updateOptions(e = {}) {
        super.updateOptions(e), e.overrideStyles && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e);
    }
}, fU = ie([
    C(6, _t),
    C(7, xn),
    C(8, ru),
    C(9, qt)
], fU), Cmt = class extends SWc {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        const { options: h, getTypeNavigationMode: p, disposable: g } = a.invokeFunction(u_n, o);
        super(e, t, n, i, r, s, h), this.disposables.add(g), this.internals = new EKe(this, o, p, o.overrideStyles, c, l, u), this.disposables.add(this.internals);
    }
    updateOptions(e) {
        super.updateOptions(e), this.internals.updateOptions(e);
    }
}, Cmt = ie([
    C(7, _t),
    C(8, xn),
    C(9, ru),
    C(10, qt)
], Cmt), EKe = class {
    constructor(e, t, n, i, r, s, o){
        this.tree = e, this.disposables = new He, this.contextKeyService = Qyi(r, e), this.disposables.add(Jyi(this.contextKeyService, e)), this.listSupportsMultiSelect = CKe.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(t.multipleSelectionSupport !== !1), wmt.bindTo(this.contextKeyService).set(!!t.selectionNavigation), this.listSupportFindWidget = $rs.bindTo(this.contextKeyService), this.listSupportFindWidget.set(t.findWidgetEnabled ?? !0), this.hasSelectionOrFocus = h_n.bindTo(this.contextKeyService), this.hasDoubleSelection = Wwe.bindTo(this.contextKeyService), this.hasMultiSelection = tSi.bindTo(this.contextKeyService), this.treeElementCanCollapse = p_n.bindTo(this.contextKeyService), this.treeElementHasParent = Hrs.bindTo(this.contextKeyService), this.treeElementCanExpand = m_n.bindTo(this.contextKeyService), this.treeElementHasChild = Wrs.bindTo(this.contextKeyService), this.treeFindOpen = Grs.bindTo(this.contextKeyService), this.treeStickyScrollFocused = c3t.bindTo(this.contextKeyService), this._useAltAsMultipleSelectionModifier = pRe(o), this.updateStyleOverrides(i);
        const c = ()=>{
            const u = e.getFocus()[0];
            if (!u) return;
            const h = e.getNode(u);
            this.treeElementCanCollapse.set(h.collapsible && !h.collapsed), this.treeElementHasParent.set(!!e.getParentElement(u)), this.treeElementCanExpand.set(h.collapsible && h.collapsed), this.treeElementHasChild.set(!!e.getFirstElementChild(u));
        }, l = new Set;
        l.add(Vrs), l.add(jrs), this.disposables.add(this.contextKeyService), this.disposables.add(s.register(e)), this.disposables.add(e.onDidChangeSelection(()=>{
            const u = e.getSelection(), h = e.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.hasSelectionOrFocus.set(u.length > 0 || h.length > 0), this.hasMultiSelection.set(u.length > 1), this.hasDoubleSelection.set(u.length === 2);
            });
        })), this.disposables.add(e.onDidChangeFocus(()=>{
            const u = e.getSelection(), h = e.getFocus();
            this.hasSelectionOrFocus.set(u.length > 0 || h.length > 0), c();
        })), this.disposables.add(e.onDidChangeCollapseState(c)), this.disposables.add(e.onDidChangeModel(c)), this.disposables.add(e.onDidChangeFindOpenState((u)=>this.treeFindOpen.set(u))), this.disposables.add(e.onDidChangeStickyScrollFocused((u)=>this.treeStickyScrollFocused.set(u))), this.disposables.add(o.onDidChangeConfiguration((u)=>{
            let h = {};
            if (u.affectsConfiguration(TKe) && (this._useAltAsMultipleSelectionModifier = pRe(o)), u.affectsConfiguration(l3t)) {
                const p = o.getValue(l3t);
                h = {
                    ...h,
                    indent: p
                };
            }
            if (u.affectsConfiguration(v_n) && t.renderIndentGuides === void 0) {
                const p = o.getValue(v_n);
                h = {
                    ...h,
                    renderIndentGuides: p
                };
            }
            if (u.affectsConfiguration(lfe)) {
                const p = !!o.getValue(lfe);
                h = {
                    ...h,
                    smoothScrolling: p
                };
            }
            if (u.affectsConfiguration(nSi) || u.affectsConfiguration(f_n)) {
                const p = EWc(o);
                h = {
                    ...h,
                    defaultFindMode: p
                };
            }
            if (u.affectsConfiguration(iSi) || u.affectsConfiguration(f_n)) {
                const p = n();
                h = {
                    ...h,
                    typeNavigationMode: p
                };
            }
            if (u.affectsConfiguration(rSi)) {
                const p = xWc(o);
                h = {
                    ...h,
                    defaultFindMatchType: p
                };
            }
            if (u.affectsConfiguration(Cre) && t.horizontalScrolling === void 0) {
                const p = !!o.getValue(Cre);
                h = {
                    ...h,
                    horizontalScrolling: p
                };
            }
            if (u.affectsConfiguration(cfe)) {
                const p = !!o.getValue(cfe);
                h = {
                    ...h,
                    scrollByPage: p
                };
            }
            if (u.affectsConfiguration(__n) && t.expandOnlyOnTwistieClick === void 0 && (h = {
                ...h,
                expandOnlyOnTwistieClick: o.getValue(__n) === "doubleClick"
            }), u.affectsConfiguration(b_n)) {
                const p = o.getValue(b_n);
                h = {
                    ...h,
                    enableStickyScroll: p
                };
            }
            if (u.affectsConfiguration(y_n)) {
                const p = Math.max(1, o.getValue(y_n));
                h = {
                    ...h,
                    stickyScrollMaxItemCount: p
                };
            }
            if (u.affectsConfiguration(Gwe)) {
                const p = o.getValue(Gwe);
                h = {
                    ...h,
                    mouseWheelScrollSensitivity: p
                };
            }
            if (u.affectsConfiguration(Vwe)) {
                const p = o.getValue(Vwe);
                h = {
                    ...h,
                    fastScrollSensitivity: p
                };
            }
            Object.keys(h).length > 0 && e.updateOptions(h);
        })), this.disposables.add(this.contextKeyService.onDidChangeContext((u)=>{
            u.affectsSome(l) && e.updateOptions({
                typeNavigationMode: n()
            });
        })), this.navigator = new DWc(e, {
            configurationService: o,
            ...t
        }), this.disposables.add(this.navigator);
    }
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    updateOptions(e) {
        e.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
    updateStyleOverrides(e) {
        this.tree.style(e ? Fwe(e) : umt);
    }
    dispose() {
        this.disposables.dispose();
    }
}, EKe = ie([
    C(4, xn),
    C(5, ru),
    C(6, qt)
], EKe), MWc = kn.as(iu.Configuration), MWc.registerConfiguration({
    id: "workbench",
    order: 7,
    title: S(2079, null),
    type: "object",
    properties: {
        [TKe]: {
            type: "string",
            enum: [
                "ctrlCmd",
                "alt"
            ],
            markdownEnumDescriptions: [
                S(2080, null),
                S(2081, null)
            ],
            default: "ctrlCmd",
            description: S(2082, null)
        },
        [g_n]: {
            type: "string",
            enum: [
                "singleClick",
                "doubleClick"
            ],
            default: "singleClick",
            description: S(2083, null)
        },
        [Cre]: {
            type: "boolean",
            default: !1,
            description: S(2084, null)
        },
        [cfe]: {
            type: "boolean",
            default: !1,
            description: S(2085, null)
        },
        [l3t]: {
            type: "number",
            default: 8,
            minimum: 4,
            maximum: 40,
            description: S(2086, null)
        },
        [v_n]: {
            type: "string",
            enum: [
                "none",
                "onHover",
                "always"
            ],
            default: "onHover",
            description: S(2087, null)
        },
        [lfe]: {
            type: "boolean",
            default: !1,
            description: S(2088, null)
        },
        [Gwe]: {
            type: "number",
            default: 1,
            markdownDescription: S(2089, null)
        },
        [Vwe]: {
            type: "number",
            default: 5,
            markdownDescription: S(2090, null)
        },
        [nSi]: {
            type: "string",
            enum: [
                "highlight",
                "filter"
            ],
            enumDescriptions: [
                S(2091, null),
                S(2092, null)
            ],
            default: "highlight",
            description: S(2093, null)
        },
        [f_n]: {
            type: "string",
            enum: [
                "simple",
                "highlight",
                "filter"
            ],
            enumDescriptions: [
                S(2094, null),
                S(2095, null),
                S(2096, null)
            ],
            default: "highlight",
            description: S(2097, null),
            deprecated: !0,
            deprecationMessage: S(2098, null)
        },
        [rSi]: {
            type: "string",
            enum: [
                "fuzzy",
                "contiguous"
            ],
            enumDescriptions: [
                S(2099, null),
                S(2100, null)
            ],
            default: "fuzzy",
            description: S(2101, null)
        },
        [__n]: {
            type: "string",
            enum: [
                "singleClick",
                "doubleClick"
            ],
            default: "singleClick",
            description: S(2102, null)
        },
        [b_n]: {
            type: "boolean",
            default: !0,
            description: S(2103, null)
        },
        [y_n]: {
            type: "number",
            minimum: 1,
            default: 7,
            markdownDescription: S(2104, null, "`#workbench.tree.enableStickyScroll#`")
        },
        [iSi]: {
            type: "string",
            enum: [
                "automatic",
                "trigger"
            ],
            default: "automatic",
            markdownDescription: S(2105, null)
        }
    }
});

}
