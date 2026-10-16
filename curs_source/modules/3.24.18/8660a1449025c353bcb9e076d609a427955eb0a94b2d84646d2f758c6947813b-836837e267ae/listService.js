import { D, Gt, N1, Nt, Pn, Qe, en, st, tt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Lvn } from "./abstractTree.js";
import { gYd, hVo, yz } from "./asyncDataTree.js";
import { or, yi } from "./configuration.js";
import { Vg, gp } from "./configurationRegistry.js";
import { pf } from "./contextView.js";
import { Hi, Rr, cn, mt } from "./contextkey.js";
import { tJn, x_ } from "./contextkeys.js";
import { Awe, vYd } from "./dataTree.js";
import { CM, MBt } from "./defaultStyles.js";
import { Hn } from "./dom_2.js";
import { It, dn } from "./instantiation.js";
import { ru } from "./keybinding.js";
import { WBt, vKd } from "./listPaging.js";
import { F5, nRe } from "./listWidget.js";
import { Bt } from "./nls.js";
import { aVo, oVo, uhe } from "./objectTree.js";
import { Eo, Fi } from "./platform_2.js";
import { Jyt, jzo } from "./tableWidget.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Hyt, IGd, KEr, Koi, RHe, XEr, Xte, YEr, bYd, iwe, xGd, yYd } from "./ze.js";
var up, SYd, Ovn, pVo, mVo, Yoi, Fvn, eSt, jI, Xoi, N5e, ZEr, XBt, gVo, Zoi, fVo, Qoi, vVo, _Vo, bVo, yVo, tSt, Joi, d_e, QEr, JEr, eai, hRe, eIr, Bvn, tai, pRe, L5e, O5e, nai, iai, rai, kYd, bnt, SVo, tIr, nIr, kVo, wYd, CYd, iIr, wVo, sai, PHe, CVo, nSt, TYd;
export { Bvn, CVo, CYd, Fvn, JEr, Joi, L5e, N5e, O5e, Ovn, PHe, QEr, Qoi, SVo, SYd, TYd, XBt, Xoi, Yoi, ZEr, Zoi, _Vo, bVo, bnt, d_e, eIr, eSt, eai, fVo, gVo, hRe, iIr, iai, jI, kVo, kYd, mVo, nIr, nSt, nai, pRe, pVo, rai, sai, tIr, tSt, tai, up, vVo, wVo, wYd, yVo };
var __wakaru_d2_initialized = false;
export function d2() {
if (__wakaru_d2_initialized) return;
__wakaru_d2_initialized = true;
"use strict";
E(), Hn(), vKd(), nRe(), jzo(), Lvn(), hVo(), vYd(), aVo(), Gt(), Qe(), Bt(), or(), Vg(), Hi(), x_(), pf(), It(), ru(), Eo(), CM(), up = jn("listService"), SYd = class {
    constructor(){
        this.disposables = new Nt, this.lists = [], this._lastFocusedWidget = void 0;
    }
    get lastFocusedList() {
        return this._lastFocusedWidget;
    }
    setLastFocusedList(t) {
        t !== this._lastFocusedWidget && (this._lastFocusedWidget?.getHTMLElement().classList.remove("last-focused"), this._lastFocusedWidget = t, this._lastFocusedWidget?.getHTMLElement().classList.add("last-focused"));
    }
    register(t, e) {
        if (this.lists.some((i)=>i.widget === t)) throw new Error("Cannot register the same widget multiple times");
        const n = {
            widget: t,
            extraContextKeys: e
        };
        return this.lists.push(n), Xte(t.getHTMLElement()) && this.setLastFocusedList(t), N1(t.onDidFocus(()=>this.setLastFocusedList(t)), Pn(()=>this.lists.splice(this.lists.indexOf(n), 1)), t.onDidDispose(()=>{
            this.lists = this.lists.filter((i)=>i !== n), this._lastFocusedWidget === t && this.setLastFocusedList(void 0);
        }));
    }
    dispose() {
        this.disposables.dispose();
    }
}, Ovn = new cn("listScrollAtBoundary", "none"), pVo = mt.or(Ovn.isEqualTo("top"), Ovn.isEqualTo("both")), mVo = mt.or(Ovn.isEqualTo("bottom"), Ovn.isEqualTo("both")), Yoi = new cn("listFocus", !0), Fvn = new cn("treestickyScrollFocused", !1), eSt = new cn("listSupportsMultiselect", !0), jI = mt.and(Yoi, mt.not(tJn), Fvn.negate()), Xoi = new cn("listHasSelectionOrFocus", !1), N5e = new cn("listDoubleSelection", !1), ZEr = new cn("listMultiSelection", !1), XBt = new cn("listSelectionNavigation", !1), gVo = new cn("listSupportsFind", !0), Zoi = new cn("treeElementCanCollapse", !1), fVo = new cn("treeElementHasParent", !1), Qoi = new cn("treeElementCanExpand", !1), vVo = new cn("treeElementHasChild", !1), _Vo = new cn("treeFindOpen", !1), bVo = "listTypeNavigationMode", yVo = "listAutomaticKeyboardNavigation", tSt = "workbench.list.multiSelectModifier", Joi = "workbench.list.openMode", d_e = "workbench.list.horizontalScrolling", QEr = "workbench.list.defaultFindMode", JEr = "workbench.list.typeNavigationMode", eai = "workbench.list.keyboardNavigation", hRe = "workbench.list.scrollByPage", eIr = "workbench.list.defaultFindMatchType", Bvn = "workbench.tree.indent", tai = "workbench.tree.renderIndentGuides", pRe = "workbench.list.smoothScrolling", L5e = "workbench.list.mouseWheelScrollSensitivity", O5e = "workbench.list.fastScrollSensitivity", nai = "workbench.tree.expandMode", iai = "workbench.tree.enableStickyScroll", rai = "workbench.tree.stickyScrollMaxItemCount", kYd = class extends st {
    constructor(t){
        super(), this.configurationService = t, this.useAltAsMultipleSelectionModifier = RHe(t), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((t)=>{
            t.affectsConfiguration(tSt) && (this.useAltAsMultipleSelectionModifier = RHe(this.configurationService));
        }));
    }
    isSelectionSingleChangeEvent(t) {
        return this.useAltAsMultipleSelectionModifier ? t.browserEvent.altKey : IGd(t);
    }
    isSelectionRangeChangeEvent(t) {
        return xGd(t);
    }
}, bnt = class extends F5 {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l){
        const c = typeof r.horizontalScrolling < "u" ? r.horizontalScrolling : !!a.getValue(d_e), [u, d] = l.invokeFunction(XEr, r);
        super(t, e, n, i, {
            keyboardSupport: !1,
            ...u,
            horizontalScrolling: c
        }), this.disposables.add(d), this.contextKeyService = KEr(s, this), this.disposables.add(YEr(this.contextKeyService, this)), this.listSupportsMultiSelect = eSt.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(r.multipleSelectionSupport !== !1), XBt.bindTo(this.contextKeyService).set(!!r.selectionNavigation), this.listHasSelectionOrFocus = Xoi.bindTo(this.contextKeyService), this.listDoubleSelection = N5e.bindTo(this.contextKeyService), this.listMultiSelection = ZEr.bindTo(this.contextKeyService), this.horizontalScrolling = r.horizontalScrolling, this._useAltAsMultipleSelectionModifier = RHe(a), this.disposables.add(this.contextKeyService), this.disposables.add(o.register(this)), this.updateStyles(r.overrideStyles), this.disposables.add(this.onDidChangeSelection(()=>{
            const p = this.getSelection(), g = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(p.length > 0 || g.length > 0), this.listMultiSelection.set(p.length > 1), this.listDoubleSelection.set(p.length === 2);
            });
        })), this.disposables.add(this.onDidChangeFocus(()=>{
            const p = this.getSelection(), g = this.getFocus();
            this.listHasSelectionOrFocus.set(p.length > 0 || g.length > 0);
        })), this.disposables.add(a.onDidChangeConfiguration((p)=>{
            p.affectsConfiguration(tSt) && (this._useAltAsMultipleSelectionModifier = RHe(a));
            let g = {};
            if (p.affectsConfiguration(d_e) && this.horizontalScrolling === void 0) {
                const f = !!a.getValue(d_e);
                g = {
                    ...g,
                    horizontalScrolling: f
                };
            }
            if (p.affectsConfiguration(hRe)) {
                const f = !!a.getValue(hRe);
                g = {
                    ...g,
                    scrollByPage: f
                };
            }
            if (p.affectsConfiguration(pRe)) {
                const f = !!a.getValue(pRe);
                g = {
                    ...g,
                    smoothScrolling: f
                };
            }
            if (p.affectsConfiguration(L5e)) {
                const f = a.getValue(L5e);
                g = {
                    ...g,
                    mouseWheelScrollSensitivity: f
                };
            }
            if (p.affectsConfiguration(O5e)) {
                const f = a.getValue(O5e);
                g = {
                    ...g,
                    fastScrollSensitivity: f
                };
            }
            Object.keys(g).length > 0 && this.updateOptions(g);
        })), this.navigator = new kVo(this, {
            configurationService: a,
            ...r
        }), this.disposables.add(this.navigator);
    }
    updateOptions(t) {
        super.updateOptions(t), t.overrideStyles !== void 0 && this.updateStyles(t.overrideStyles), t.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!t.multipleSelectionSupport);
    }
    updateStyles(t) {
        this.style(t ? Hyt(t) : MBt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
}, bnt = Re([
    F(5, Rr),
    F(6, up),
    F(7, yi),
    F(8, dn)
], bnt), SVo = class extends WBt {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l){
        const c = typeof r.horizontalScrolling < "u" ? r.horizontalScrolling : !!a.getValue(d_e), [u, d] = l.invokeFunction(XEr, r);
        super(t, e, n, i, {
            keyboardSupport: !1,
            ...u,
            horizontalScrolling: c
        }), this.disposables = new Nt, this.disposables.add(d), this.contextKeyService = KEr(s, this), this.disposables.add(YEr(this.contextKeyService, this.widget)), this.horizontalScrolling = r.horizontalScrolling, this.listSupportsMultiSelect = eSt.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(r.multipleSelectionSupport !== !1), XBt.bindTo(this.contextKeyService).set(!!r.selectionNavigation), this._useAltAsMultipleSelectionModifier = RHe(a), this.disposables.add(this.contextKeyService), this.disposables.add(o.register(this)), this.updateStyles(r.overrideStyles), this.disposables.add(a.onDidChangeConfiguration((p)=>{
            p.affectsConfiguration(tSt) && (this._useAltAsMultipleSelectionModifier = RHe(a));
            let g = {};
            if (p.affectsConfiguration(d_e) && this.horizontalScrolling === void 0) {
                const f = !!a.getValue(d_e);
                g = {
                    ...g,
                    horizontalScrolling: f
                };
            }
            if (p.affectsConfiguration(hRe)) {
                const f = !!a.getValue(hRe);
                g = {
                    ...g,
                    scrollByPage: f
                };
            }
            if (p.affectsConfiguration(pRe)) {
                const f = !!a.getValue(pRe);
                g = {
                    ...g,
                    smoothScrolling: f
                };
            }
            if (p.affectsConfiguration(L5e)) {
                const f = a.getValue(L5e);
                g = {
                    ...g,
                    mouseWheelScrollSensitivity: f
                };
            }
            if (p.affectsConfiguration(O5e)) {
                const f = a.getValue(O5e);
                g = {
                    ...g,
                    fastScrollSensitivity: f
                };
            }
            Object.keys(g).length > 0 && this.updateOptions(g);
        })), this.navigator = new kVo(this, {
            configurationService: a,
            ...r
        }), this.disposables.add(this.navigator);
    }
    updateOptions(t) {
        super.updateOptions(t), t.overrideStyles !== void 0 && this.updateStyles(t.overrideStyles), t.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!t.multipleSelectionSupport);
    }
    updateStyles(t) {
        this.style(t ? Hyt(t) : MBt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
}, SVo = Re([
    F(5, Rr),
    F(6, up),
    F(7, yi),
    F(8, dn)
], SVo), tIr = class extends Jyt {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l, c){
        const u = typeof s.horizontalScrolling < "u" ? s.horizontalScrolling : !!l.getValue(d_e), [d, h] = c.invokeFunction(XEr, s);
        super(t, e, n, i, r, {
            keyboardSupport: !1,
            ...d,
            horizontalScrolling: u
        }), this.disposables.add(h), this.contextKeyService = KEr(o, this), this.disposables.add(YEr(this.contextKeyService, this)), this.listSupportsMultiSelect = eSt.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(s.multipleSelectionSupport !== !1), XBt.bindTo(this.contextKeyService).set(!!s.selectionNavigation), this.listHasSelectionOrFocus = Xoi.bindTo(this.contextKeyService), this.listDoubleSelection = N5e.bindTo(this.contextKeyService), this.listMultiSelection = ZEr.bindTo(this.contextKeyService), this.horizontalScrolling = s.horizontalScrolling, this._useAltAsMultipleSelectionModifier = RHe(l), this.disposables.add(this.contextKeyService), this.disposables.add(a.register(this)), this.updateStyles(s.overrideStyles), this.disposables.add(this.onDidChangeSelection(()=>{
            const g = this.getSelection(), f = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(g.length > 0 || f.length > 0), this.listMultiSelection.set(g.length > 1), this.listDoubleSelection.set(g.length === 2);
            });
        })), this.disposables.add(this.onDidChangeFocus(()=>{
            const g = this.getSelection(), f = this.getFocus();
            this.listHasSelectionOrFocus.set(g.length > 0 || f.length > 0);
        })), this.disposables.add(l.onDidChangeConfiguration((g)=>{
            g.affectsConfiguration(tSt) && (this._useAltAsMultipleSelectionModifier = RHe(l));
            let f = {};
            if (g.affectsConfiguration(d_e) && this.horizontalScrolling === void 0) {
                const _ = !!l.getValue(d_e);
                f = {
                    ...f,
                    horizontalScrolling: _
                };
            }
            if (g.affectsConfiguration(hRe)) {
                const _ = !!l.getValue(hRe);
                f = {
                    ...f,
                    scrollByPage: _
                };
            }
            if (g.affectsConfiguration(pRe)) {
                const _ = !!l.getValue(pRe);
                f = {
                    ...f,
                    smoothScrolling: _
                };
            }
            if (g.affectsConfiguration(L5e)) {
                const _ = l.getValue(L5e);
                f = {
                    ...f,
                    mouseWheelScrollSensitivity: _
                };
            }
            if (g.affectsConfiguration(O5e)) {
                const _ = l.getValue(O5e);
                f = {
                    ...f,
                    fastScrollSensitivity: _
                };
            }
            Object.keys(f).length > 0 && this.updateOptions(f);
        })), this.navigator = new wYd(this, {
            configurationService: l,
            ...s
        }), this.disposables.add(this.navigator);
    }
    updateOptions(t) {
        super.updateOptions(t), t.overrideStyles !== void 0 && this.updateStyles(t.overrideStyles), t.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!t.multipleSelectionSupport);
    }
    updateStyles(t) {
        this.style(t ? Hyt(t) : MBt);
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
}, tIr = Re([
    F(6, Rr),
    F(7, up),
    F(8, yi),
    F(9, dn)
], tIr), nIr = class extends st {
    constructor(t, e){
        super(), this.widget = t, this._onDidOpen = this._register(new tt), this.onDidOpen = this._onDidOpen.event, this._register(en.filter(this.widget.onDidChangeSelection, (n)=>iwe(n.browserEvent))((n)=>this.onSelectionFromKeyboard(n))), this._register(this.widget.onPointer((n)=>this.onPointer(n.element, n.browserEvent))), this._register(this.widget.onMouseDblClick((n)=>this.onMouseDblClick(n.element, n.browserEvent))), typeof e?.openOnSingleClick != "boolean" && e?.configurationService ? (this.openOnSingleClick = e?.configurationService.getValue(Joi) !== "doubleClick", this._register(e?.configurationService.onDidChangeConfiguration((n)=>{
            n.affectsConfiguration(Joi) && (this.openOnSingleClick = e?.configurationService.getValue(Joi) !== "doubleClick");
        }))) : this.openOnSingleClick = e?.openOnSingleClick ?? !0;
    }
    onSelectionFromKeyboard(t) {
        if (t.elements.length !== 1) return;
        const e = t.browserEvent, n = typeof e.preserveFocus == "boolean" ? e.preserveFocus : !0, i = typeof e.pinned == "boolean" ? e.pinned : !n;
        this._open(this.getSelectedElement(), n, i, !1, t.browserEvent);
    }
    onPointer(t, e) {
        if (!this.openOnSingleClick || e.detail === 2) return;
        const i = e.button === 1, r = !0, s = i, o = e.ctrlKey || e.metaKey || e.altKey;
        this._open(t, r, s, o, e);
    }
    onMouseDblClick(t, e) {
        if (!e) return;
        const n = e.target;
        if (n.classList.contains("monaco-tl-twistie") || n.classList.contains("monaco-icon-label") && n.classList.contains("folder-icon") && e.offsetX < 16) return;
        const r = !1, s = !0, o = e.ctrlKey || e.metaKey || e.altKey;
        this._open(t, r, s, o, e);
    }
    _open(t, e, n, i, r) {
        t && this._onDidOpen.fire({
            editorOptions: {
                preserveFocus: e,
                pinned: n,
                revealIfVisible: !0
            },
            sideBySide: i,
            element: t,
            browserEvent: r
        });
    }
}, kVo = class extends nIr {
    constructor(t, e){
        super(t, e), this.widget = t;
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}, wYd = class extends nIr {
    constructor(t, e){
        super(t, e);
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}, CYd = class extends nIr {
    constructor(t, e){
        super(t, e);
    }
    getSelectedElement() {
        return this.widget.getSelection()[0] ?? void 0;
    }
}, iIr = class extends uhe {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l){
        const { options: c, getTypeNavigationMode: u, disposable: d } = s.invokeFunction(Koi, r);
        super(t, e, n, i, c), this.disposables.add(d), this.internals = new nSt(this, r, u, r.overrideStyles, o, a, l), this.disposables.add(this.internals);
    }
    updateOptions(t) {
        super.updateOptions(t), this.internals.updateOptions(t);
    }
}, iIr = Re([
    F(5, dn),
    F(6, Rr),
    F(7, up),
    F(8, yi)
], iIr), wVo = class extends oVo {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l){
        const { options: c, getTypeNavigationMode: u, disposable: d } = s.invokeFunction(Koi, r);
        super(t, e, n, i, c), this.disposables.add(d), this.internals = new nSt(this, r, u, r.overrideStyles, o, a, l), this.disposables.add(this.internals);
    }
    updateOptions(t = {}) {
        super.updateOptions(t), t.overrideStyles && this.internals.updateStyleOverrides(t.overrideStyles), this.internals.updateOptions(t);
    }
}, wVo = Re([
    F(5, dn),
    F(6, Rr),
    F(7, up),
    F(8, yi)
], wVo), sai = class extends Awe {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l, c){
        const { options: u, getTypeNavigationMode: d, disposable: h } = o.invokeFunction(Koi, s);
        super(t, e, n, i, r, u), this.disposables.add(h), this.internals = new nSt(this, s, d, s.overrideStyles, a, l, c), this.disposables.add(this.internals);
    }
    updateOptions(t = {}) {
        super.updateOptions(t), t.overrideStyles !== void 0 && this.internals.updateStyleOverrides(t.overrideStyles), this.internals.updateOptions(t);
    }
}, sai = Re([
    F(6, dn),
    F(7, Rr),
    F(8, up),
    F(9, yi)
], sai), PHe = class extends yz {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l, c){
        const { options: u, getTypeNavigationMode: d, disposable: h } = o.invokeFunction(Koi, s);
        super(t, e, n, i, r, u), this.disposables.add(h), this.internals = new nSt(this, s, d, s.overrideStyles, a, l, c), this.disposables.add(this.internals);
    }
    updateOptions(t = {}) {
        super.updateOptions(t), t.overrideStyles && this.internals.updateStyleOverrides(t.overrideStyles), this.internals.updateOptions(t);
    }
}, PHe = Re([
    F(6, dn),
    F(7, Rr),
    F(8, up),
    F(9, yi)
], PHe), CVo = class extends gYd {
    get contextKeyService() {
        return this.internals.contextKeyService;
    }
    get useAltAsMultipleSelectionModifier() {
        return this.internals.useAltAsMultipleSelectionModifier;
    }
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        const { options: d, getTypeNavigationMode: h, disposable: p } = a.invokeFunction(Koi, o);
        super(t, e, n, i, r, s, d), this.disposables.add(p), this.internals = new nSt(this, o, h, o.overrideStyles, l, c, u), this.disposables.add(this.internals);
    }
    updateOptions(t) {
        super.updateOptions(t), this.internals.updateOptions(t);
    }
}, CVo = Re([
    F(7, dn),
    F(8, Rr),
    F(9, up),
    F(10, yi)
], CVo), nSt = class {
    constructor(t, e, n, i, r, s, o){
        this.tree = t, this.disposables = new Nt, this.contextKeyService = KEr(r, t), this.disposables.add(YEr(this.contextKeyService, t)), this.listSupportsMultiSelect = eSt.bindTo(this.contextKeyService), this.listSupportsMultiSelect.set(e.multipleSelectionSupport !== !1), XBt.bindTo(this.contextKeyService).set(!!e.selectionNavigation), this.listSupportFindWidget = gVo.bindTo(this.contextKeyService), this.listSupportFindWidget.set(e.findWidgetEnabled ?? !0), this.hasSelectionOrFocus = Xoi.bindTo(this.contextKeyService), this.hasDoubleSelection = N5e.bindTo(this.contextKeyService), this.hasMultiSelection = ZEr.bindTo(this.contextKeyService), this.treeElementCanCollapse = Zoi.bindTo(this.contextKeyService), this.treeElementHasParent = fVo.bindTo(this.contextKeyService), this.treeElementCanExpand = Qoi.bindTo(this.contextKeyService), this.treeElementHasChild = vVo.bindTo(this.contextKeyService), this.treeFindOpen = _Vo.bindTo(this.contextKeyService), this.treeStickyScrollFocused = Fvn.bindTo(this.contextKeyService), this._useAltAsMultipleSelectionModifier = RHe(o), this.updateStyleOverrides(i);
        const l = ()=>{
            const u = t.getFocus()[0];
            if (!u) return;
            const d = t.getNode(u);
            this.treeElementCanCollapse.set(d.collapsible && !d.collapsed), this.treeElementHasParent.set(!!t.getParentElement(u)), this.treeElementCanExpand.set(d.collapsible && d.collapsed), this.treeElementHasChild.set(!!t.getFirstElementChild(u));
        }, c = new Set;
        c.add(bVo), c.add(yVo), this.disposables.add(this.contextKeyService), this.disposables.add(s.register(t)), this.disposables.add(t.onDidChangeSelection(()=>{
            const u = t.getSelection(), d = t.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.hasSelectionOrFocus.set(u.length > 0 || d.length > 0), this.hasMultiSelection.set(u.length > 1), this.hasDoubleSelection.set(u.length === 2);
            });
        })), this.disposables.add(t.onDidChangeFocus(()=>{
            const u = t.getSelection(), d = t.getFocus();
            this.hasSelectionOrFocus.set(u.length > 0 || d.length > 0), l();
        })), this.disposables.add(t.onDidChangeCollapseState(l)), this.disposables.add(t.onDidChangeModel(l)), this.disposables.add(t.onDidChangeFindOpenState((u)=>this.treeFindOpen.set(u))), this.disposables.add(t.onDidChangeStickyScrollFocused((u)=>this.treeStickyScrollFocused.set(u))), this.disposables.add(o.onDidChangeConfiguration((u)=>{
            let d = {};
            if (u.affectsConfiguration(tSt) && (this._useAltAsMultipleSelectionModifier = RHe(o)), u.affectsConfiguration(Bvn)) {
                const h = o.getValue(Bvn);
                d = {
                    ...d,
                    indent: h
                };
            }
            if (u.affectsConfiguration(tai) && e.renderIndentGuides === void 0) {
                const h = o.getValue(tai);
                d = {
                    ...d,
                    renderIndentGuides: h
                };
            }
            if (u.affectsConfiguration(pRe)) {
                const h = !!o.getValue(pRe);
                d = {
                    ...d,
                    smoothScrolling: h
                };
            }
            if (u.affectsConfiguration(QEr) || u.affectsConfiguration(eai)) {
                const h = bYd(o);
                d = {
                    ...d,
                    defaultFindMode: h
                };
            }
            if (u.affectsConfiguration(JEr) || u.affectsConfiguration(eai)) {
                const h = n();
                d = {
                    ...d,
                    typeNavigationMode: h
                };
            }
            if (u.affectsConfiguration(eIr)) {
                const h = yYd(o);
                d = {
                    ...d,
                    defaultFindMatchType: h
                };
            }
            if (u.affectsConfiguration(d_e) && e.horizontalScrolling === void 0) {
                const h = !!o.getValue(d_e);
                d = {
                    ...d,
                    horizontalScrolling: h
                };
            }
            if (u.affectsConfiguration(hRe)) {
                const h = !!o.getValue(hRe);
                d = {
                    ...d,
                    scrollByPage: h
                };
            }
            if (u.affectsConfiguration(nai) && e.expandOnlyOnTwistieClick === void 0 && (d = {
                ...d,
                expandOnlyOnTwistieClick: o.getValue(nai) === "doubleClick"
            }), u.affectsConfiguration(iai)) {
                const h = o.getValue(iai);
                d = {
                    ...d,
                    enableStickyScroll: h
                };
            }
            if (u.affectsConfiguration(rai)) {
                const h = Math.max(1, o.getValue(rai));
                d = {
                    ...d,
                    stickyScrollMaxItemCount: h
                };
            }
            if (u.affectsConfiguration(L5e)) {
                const h = o.getValue(L5e);
                d = {
                    ...d,
                    mouseWheelScrollSensitivity: h
                };
            }
            if (u.affectsConfiguration(O5e)) {
                const h = o.getValue(O5e);
                d = {
                    ...d,
                    fastScrollSensitivity: h
                };
            }
            Object.keys(d).length > 0 && t.updateOptions(d);
        })), this.disposables.add(this.contextKeyService.onDidChangeContext((u)=>{
            u.affectsSome(c) && t.updateOptions({
                typeNavigationMode: n()
            });
        })), this.navigator = new CYd(t, {
            configurationService: o,
            ...e
        }), this.disposables.add(this.navigator);
    }
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    get useAltAsMultipleSelectionModifier() {
        return this._useAltAsMultipleSelectionModifier;
    }
    updateOptions(t) {
        t.multipleSelectionSupport !== void 0 && this.listSupportsMultiSelect.set(!!t.multipleSelectionSupport);
    }
    updateStyleOverrides(t) {
        this.tree.style(t ? Hyt(t) : MBt);
    }
    dispose() {
        this.disposables.dispose();
    }
}, nSt = Re([
    F(4, Rr),
    F(5, up),
    F(6, yi)
], nSt), TYd = Fi.as(gp.Configuration), TYd.registerConfiguration({
    id: "workbench",
    order: 7,
    title: D(2079, null),
    type: "object",
    properties: {
        [tSt]: {
            type: "string",
            enum: [
                "ctrlCmd",
                "alt"
            ],
            markdownEnumDescriptions: [
                D(2080, null),
                D(2081, null)
            ],
            default: "ctrlCmd",
            description: D(2082, null)
        },
        [Joi]: {
            type: "string",
            enum: [
                "singleClick",
                "doubleClick"
            ],
            default: "singleClick",
            description: D(2083, null)
        },
        [d_e]: {
            type: "boolean",
            default: !1,
            description: D(2084, null)
        },
        [hRe]: {
            type: "boolean",
            default: !1,
            description: D(2085, null)
        },
        [Bvn]: {
            type: "number",
            default: 8,
            minimum: 4,
            maximum: 40,
            description: D(2086, null)
        },
        [tai]: {
            type: "string",
            enum: [
                "none",
                "onHover",
                "always"
            ],
            default: "onHover",
            description: D(2087, null)
        },
        [pRe]: {
            type: "boolean",
            default: !1,
            description: D(2088, null)
        },
        [L5e]: {
            type: "number",
            default: 1,
            markdownDescription: D(2089, null)
        },
        [O5e]: {
            type: "number",
            default: 5,
            markdownDescription: D(2090, null)
        },
        [QEr]: {
            type: "string",
            enum: [
                "highlight",
                "filter"
            ],
            enumDescriptions: [
                D(2091, null),
                D(2092, null)
            ],
            default: "highlight",
            description: D(2093, null)
        },
        [eai]: {
            type: "string",
            enum: [
                "simple",
                "highlight",
                "filter"
            ],
            enumDescriptions: [
                D(2094, null),
                D(2095, null),
                D(2096, null)
            ],
            default: "highlight",
            description: D(2097, null),
            deprecated: !0,
            deprecationMessage: D(2098, null)
        },
        [eIr]: {
            type: "string",
            enum: [
                "fuzzy",
                "contiguous"
            ],
            enumDescriptions: [
                D(2099, null),
                D(2100, null)
            ],
            default: "fuzzy",
            description: D(2101, null)
        },
        [nai]: {
            type: "string",
            enum: [
                "singleClick",
                "doubleClick"
            ],
            default: "singleClick",
            description: D(2102, null)
        },
        [iai]: {
            type: "boolean",
            default: !0,
            description: D(2103, null)
        },
        [rai]: {
            type: "number",
            minimum: 1,
            default: 7,
            markdownDescription: D(2104, null, "`#workbench.tree.enableStickyScroll#`")
        },
        [JEr]: {
            type: "string",
            enum: [
                "automatic",
                "trigger"
            ],
            default: "automatic",
            markdownDescription: D(2105, null)
        }
    }
});

}
