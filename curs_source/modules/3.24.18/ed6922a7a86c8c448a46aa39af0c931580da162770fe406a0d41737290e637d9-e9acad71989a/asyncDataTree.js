import { Ct, He, Kl, S, Se, Vpi, Wb, bt, ja, jpi, nqr, ns, rn, si, ve } from "./HVr.js";
import { Crs, Ule, jyi, s6, wrs } from "./abstractTree.js";
import { dr } from "./arrays.js";
import { Rm, TO, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Pe, _i } from "./codicons.js";
import { Yy, jV } from "./filters.js";
import { Gyi } from "./indexTreeModel.js";
import { Eg, _a } from "./iterator.js";
import { Kge, nKe } from "./listView.js";
import { rt } from "./nls.js";
import { Ars, EJ, Irs } from "./objectTree.js";
import { Lkg, Mkg, Mrs, Nkg, Pkg, Prs, Rrs, Zyi, c_n, dWc, hWc, ymt } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { Wyi, dU, hU, pU } from "./tree.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var pWc, mWc, gWc, fWc, vWc, _Wc, mU, bWc, yWc, SWc, kWc;
export { SWc, _Wc, bWc, fWc, gWc, kWc, mU, mWc, pWc, vWc, yWc };
var __wakaru_Lrs_initialized = false;
export function Lrs() {
if (__wakaru_Lrs_initialized) return;
__wakaru_Lrs_initialized = true;
"use strict";
x(), nKe(), Ule(), Gyi(), Ars(), pU(), bn(), _i(), Sr(), si(), bt(), Eg(), Se(), gr(), Ar(), Yy(), dr(), rt(), pWc = class iwm {
    constructor(t){
        this.node = t;
    }
    get element() {
        return this.node.element.element;
    }
    get children() {
        return this.node.children.map((t)=>new iwm(t));
    }
    get depth() {
        return this.node.depth;
    }
    get visibleChildrenCount() {
        return this.node.visibleChildrenCount;
    }
    get visibleChildIndex() {
        return this.node.visibleChildIndex;
    }
    get collapsible() {
        return this.node.collapsible;
    }
    get collapsed() {
        return this.node.collapsed;
    }
    get visible() {
        return this.node.visible;
    }
    get filterData() {
        return this.node.filterData;
    }
}, mWc = class {
    constructor(e, t, n){
        this.renderer = e, this.nodeMapper = t, this.onDidChangeTwistieState = n, this.renderedNodes = new Map, this.templateId = e.templateId;
    }
    renderTemplate(e) {
        return {
            templateData: this.renderer.renderTemplate(e)
        };
    }
    renderElement(e, t, n, i) {
        this.renderer.renderElement(this.nodeMapper.map(e), t, n.templateData, i);
    }
    renderTwistie(e, t) {
        return e.slow ? (t.classList.add(...Ft.asClassNameArray(Pe.treeItemLoading)), !0) : (t.classList.remove(...Ft.asClassNameArray(Pe.treeItemLoading)), !1);
    }
    disposeElement(e, t, n, i) {
        this.renderer.disposeElement?.(this.nodeMapper.map(e), t, n.templateData, i);
    }
    disposeTemplate(e) {
        this.renderer.disposeTemplate(e.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
    }
}, gWc = class extends Kge {
    constructor(e){
        super(e.elements.map((t)=>t.element)), this.data = e;
    }
    set context(e) {
        this.data.context = e;
    }
    get context() {
        return this.data.context;
    }
}, fWc = class {
    constructor(e){
        this.dnd = e;
    }
    getDragURI(e) {
        return this.dnd.getDragURI(e.element);
    }
    getDragLabel(e, t) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map((n)=>n.element), t);
    }
    onDragStart(e, t) {
        this.dnd.onDragStart?.(Mrs(e), t);
    }
    onDragOver(e, t, n, i, r, s = !0) {
        return this.dnd.onDragOver(Mrs(e), t && t.element, n, i, r);
    }
    drop(e, t, n, i, r) {
        this.dnd.drop(Mrs(e), t && t.element, n, i, r);
    }
    onDragEnd(e) {
        this.dnd.onDragEnd?.(e);
    }
    dispose() {
        this.dnd.dispose();
    }
}, vWc = class extends wrs {
    constructor(e, t, n){
        super(t, n), this.findProvider = e, this.isFindSessionActive = !1;
    }
    filter(e, t) {
        const n = super.filter(e, t);
        if (!this.isFindSessionActive || this.findMode === s6.Highlight || !this.findProvider.isVisible) return n;
        const i = c_n(n) ? n.visibility : n;
        return ymt(i) === 0 ? 0 : this.findProvider.isVisible(e) ? n : 0;
    }
}, _Wc = class extends Crs {
    constructor(e, t, n, i, r){
        super(e, n, i, r), this.findProvider = t, this.filter = n, this.activeSession = !1, this.asyncWorkInProgress = !1, this.taskQueue = new TO(250), this.disposables.add(rn(async ()=>{
            this.activeSession && await this.findProvider.endSession?.();
        }));
    }
    applyPattern(e) {
        this.renderMessage(!1), this.activeTokenSource?.cancel(), this.activeTokenSource = new Eo, this.taskQueue.trigger(()=>this.applyPatternAsync());
    }
    async applyPatternAsync() {
        const e = this.activeTokenSource?.token;
        if (!e || e.isCancellationRequested) return;
        const t = this.pattern;
        if (t === "") {
            this.activeSession && (this.asyncWorkInProgress = !0, await this.deactivateFindSession(), this.asyncWorkInProgress = !1, e.isCancellationRequested || (this.filter.reset(), super.applyPattern("")));
            return;
        }
        this.activeSession || this.activateFindSession(), this.asyncWorkInProgress = !0, this.activeFindMetadata = void 0;
        const n = await this.findProvider.find(t, {
            matchType: this.matchType,
            findMode: this.mode
        }, e);
        e.isCancellationRequested || n === void 0 || (this.asyncWorkInProgress = !1, this.activeFindMetadata = n, this.filter.reset(), super.applyPattern(t), n.warningMessage && this.renderMessage(!0, n.warningMessage));
    }
    activateFindSession() {
        this.activeSession = !0, this.filter.isFindSessionActive = !0, this.findProvider.startSession?.();
    }
    async deactivateFindSession() {
        this.activeSession = !1, this.filter.isFindSessionActive = !1, await this.findProvider.endSession?.();
    }
    render() {
        if (this.asyncWorkInProgress || !this.activeFindMetadata) return;
        const e = this.activeFindMetadata.matchCount === 0 && this.pattern.length > 0;
        this.renderMessage(e), this.pattern.length && this.alertResults(this.activeFindMetadata.matchCount);
    }
    onDidToggleChange(e) {
        this.toggles.set(e.id, e.isChecked), this.filter.findMode = this.mode, this.filter.findMatchType = this.matchType, this.placeholder = this.mode === s6.Filter ? S(41, null) : S(42, null), this.applyPattern(this.pattern);
    }
    shouldAllowFocus(e) {
        return this.shouldFocusWhenNavigating(e);
    }
    shouldFocusWhenNavigating(e) {
        if (!this.activeSession || !this.activeFindMetadata) return !0;
        const t = e.element?.element;
        return t && this.activeFindMetadata.isMatch(t) ? !0 : !jV.isDefault(e.filterData);
    }
}, mU = class {
    constructor(e, t, n, i, r, s = {}){
        this.user = e, this.dataSource = r, this.nodes = new Map, this.subTreeRefreshPromises = new Map, this.refreshPromises = new Map, this._onDidRender = new ve, this._onDidChangeNodeSlowState = new ve, this.nodeMapper = new Wyi((c)=>new pWc(c)), this.disposables = new He, this.identityProvider = s.identityProvider, this.autoExpandSingleChildren = typeof s.autoExpandSingleChildren > "u" ? !1 : s.autoExpandSingleChildren, this.sorter = s.sorter, this.getDefaultCollapseState = (c)=>s.collapseByDefault ? s.collapseByDefault(c) ? dU.PreserveOrCollapsed : dU.PreserveOrExpanded : void 0;
        let o = !1, a;
        if (s.findProvider && (s.findWidgetEnabled ?? !0) && s.keyboardNavigationLabelProvider && s.contextViewProvider && (o = !0, a = new vWc(s.findProvider, s.keyboardNavigationLabelProvider, s.filter)), this.tree = this.createTree(e, t, n, i, {
            ...s,
            findWidgetEnabled: !o,
            filter: a ?? s.filter
        }), this.root = Rrs({
            element: void 0,
            parent: null,
            hasChildren: !0,
            defaultCollapseState: void 0
        }), this.identityProvider && (this.root = {
            ...this.root,
            id: null
        }), this.nodes.set(null, this.root), this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables), o) {
            const c = {
                styles: s.findWidgetStyles,
                showNotFoundMessage: s.showNotFoundMessage,
                defaultFindMatchType: s.defaultFindMatchType,
                defaultFindMode: s.defaultFindMode
            };
            this.findController = this.disposables.add(new _Wc(this.tree, s.findProvider, a, this.tree.options.contextViewProvider, c)), this.focusNavigationFilter = (l)=>this.findController.shouldFocusWhenNavigating(l), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        } else this.onDidChangeFindOpenState = this.tree.onDidChangeFindOpenState, this.onDidChangeFindMode = this.tree.onDidChangeFindMode, this.onDidChangeFindMatchType = this.tree.onDidChangeFindMatchType;
    }
    get onDidScroll() {
        return this.tree.onDidScroll;
    }
    get onDidChangeFocus() {
        return Ct.map(this.tree.onDidChangeFocus, dWc);
    }
    get onDidChangeSelection() {
        return Ct.map(this.tree.onDidChangeSelection, dWc);
    }
    get onKeyDown() {
        return this.tree.onKeyDown;
    }
    get onMouseClick() {
        return Ct.map(this.tree.onMouseClick, Zyi);
    }
    get onMouseDblClick() {
        return Ct.map(this.tree.onMouseDblClick, Zyi);
    }
    get onContextMenu() {
        return Ct.map(this.tree.onContextMenu, Pkg);
    }
    get onTap() {
        return Ct.map(this.tree.onTap, Zyi);
    }
    get onPointer() {
        return Ct.map(this.tree.onPointer, Zyi);
    }
    get onDidFocus() {
        return this.tree.onDidFocus;
    }
    get onDidBlur() {
        return this.tree.onDidBlur;
    }
    get onDidChangeModel() {
        return this.tree.onDidChangeModel;
    }
    get onDidChangeCollapseState() {
        return this.tree.onDidChangeCollapseState;
    }
    get onDidUpdateOptions() {
        return this.tree.onDidUpdateOptions;
    }
    get onDidChangeStickyScrollFocused() {
        return this.tree.onDidChangeStickyScrollFocused;
    }
    get findMode() {
        return this.findController ? this.findController.mode : this.tree.findMode;
    }
    set findMode(e) {
        this.findController ? this.findController.mode = e : this.tree.findMode = e;
    }
    get findMatchType() {
        return this.findController ? this.findController.matchType : this.tree.findMatchType;
    }
    set findMatchType(e) {
        this.findController ? this.findController.matchType = e : this.tree.findMatchType = e;
    }
    get expandOnlyOnTwistieClick() {
        if (typeof this.tree.expandOnlyOnTwistieClick == "boolean") return this.tree.expandOnlyOnTwistieClick;
        const e = this.tree.expandOnlyOnTwistieClick;
        return (t)=>e(this.nodes.get(t === this.root.element ? null : t) || null);
    }
    get onDidDispose() {
        return this.tree.onDidDispose;
    }
    createTree(e, t, n, i, r) {
        const s = new jyi(n), o = i.map((c)=>new mWc(c, this.nodeMapper, this._onDidChangeNodeSlowState.event)), a = hWc(r) || {};
        return new EJ(e, t, s, o, a);
    }
    updateOptions(e = {}) {
        this.findController && (e.defaultFindMode !== void 0 && (this.findController.mode = e.defaultFindMode), e.defaultFindMatchType !== void 0 && (this.findController.matchType = e.defaultFindMatchType)), this.tree.updateOptions(e);
    }
    get options() {
        return this.tree.options;
    }
    getHTMLElement() {
        return this.tree.getHTMLElement();
    }
    get contentHeight() {
        return this.tree.contentHeight;
    }
    get contentWidth() {
        return this.tree.contentWidth;
    }
    get onDidChangeContentHeight() {
        return this.tree.onDidChangeContentHeight;
    }
    get onDidChangeContentWidth() {
        return this.tree.onDidChangeContentWidth;
    }
    get scrollTop() {
        return this.tree.scrollTop;
    }
    set scrollTop(e) {
        this.tree.scrollTop = e;
    }
    get scrollLeft() {
        return this.tree.scrollLeft;
    }
    set scrollLeft(e) {
        this.tree.scrollLeft = e;
    }
    get scrollHeight() {
        return this.tree.scrollHeight;
    }
    get renderHeight() {
        return this.tree.renderHeight;
    }
    get lastVisibleElement() {
        return this.tree.lastVisibleElement.element;
    }
    get ariaLabel() {
        return this.tree.ariaLabel;
    }
    set ariaLabel(e) {
        this.tree.ariaLabel = e;
    }
    domFocus() {
        this.tree.domFocus();
    }
    isDOMFocused() {
        return this.tree.isDOMFocused();
    }
    navigate(e) {
        let t;
        return e && (t = this.getDataNode(e)), new kWc(this.tree.navigate(t));
    }
    layout(e, t) {
        this.tree.layout(e, t);
    }
    style(e) {
        this.tree.style(e);
    }
    getInput() {
        return this.root.element;
    }
    async setInput(e, t) {
        this.refreshPromises.forEach((i)=>i.cancel()), this.refreshPromises.clear(), this.root.element = e;
        const n = t && {
            viewState: t,
            focus: [],
            selection: []
        };
        await this._updateChildren(e, !0, !1, n), n && (this.tree.setFocus(n.focus), this.tree.setSelection(n.selection)), t && typeof t.scrollTop == "number" && (this.scrollTop = t.scrollTop);
    }
    async updateChildren(e = this.root.element, t = !0, n = !1, i) {
        await this._updateChildren(e, t, n, void 0, i);
    }
    async _updateChildren(e = this.root.element, t = !0, n = !1, i, r) {
        if (typeof this.root.element > "u") throw new hU(this.user, "Tree input not set");
        this.root.refreshPromise && (await this.root.refreshPromise, await Ct.toPromise(this._onDidRender.event));
        const s = this.getDataNode(e);
        if (await this.refreshAndRenderNode(s, t, i, r), n) try {
            this.tree.rerender(s);
        } catch  {}
    }
    resort(e = this.root.element, t = !0) {
        this.tree.resort(this.getDataNode(e), t);
    }
    hasNode(e) {
        return e === this.root.element || this.nodes.has(e);
    }
    rerender(e) {
        if (e === void 0 || e === this.root.element) {
            this.tree.rerender();
            return;
        }
        const t = this.getDataNode(e);
        this.tree.rerender(t);
    }
    updateElementHeight(e, t) {
        const n = this.getDataNode(e);
        this.tree.updateElementHeight(n, t);
    }
    updateWidth(e) {
        const t = this.getDataNode(e);
        this.tree.updateWidth(t);
    }
    getNode(e = this.root.element) {
        const t = this.getDataNode(e), n = this.tree.getNode(t === this.root ? null : t);
        return this.nodeMapper.map(n);
    }
    collapse(e, t = !1) {
        const n = this.getDataNode(e);
        return this.tree.collapse(n === this.root ? null : n, t);
    }
    async expand(e, t = !1) {
        if (typeof this.root.element > "u") throw new hU(this.user, "Tree input not set");
        this.root.refreshPromise && (await this.root.refreshPromise, await Ct.toPromise(this._onDidRender.event));
        const n = this.getDataNode(e);
        if (this.tree.hasElement(n) && !this.tree.isCollapsible(n) || (n.refreshPromise && (await this.root.refreshPromise, await Ct.toPromise(this._onDidRender.event)), n !== this.root && !n.refreshPromise && !this.tree.isCollapsed(n))) return !1;
        const i = this.tree.expand(n === this.root ? null : n, t);
        return n.refreshPromise && (await this.root.refreshPromise, await Ct.toPromise(this._onDidRender.event)), i;
    }
    toggleCollapsed(e, t = !1) {
        return this.tree.toggleCollapsed(this.getDataNode(e), t);
    }
    expandAll() {
        this.tree.expandAll();
    }
    async expandTo(e) {
        if (!this.dataSource.getParent) throw new Error("Can't expand to element without getParent method");
        const t = [];
        for(; !this.hasNode(e);)e = this.dataSource.getParent(e), e !== this.root.element && t.push(e);
        for (const n of _a.reverse(t))await this.expand(n);
        this.tree.expandTo(this.getDataNode(e));
    }
    collapseAll() {
        this.tree.collapseAll();
    }
    isCollapsible(e) {
        return this.tree.isCollapsible(this.getDataNode(e));
    }
    isCollapsed(e) {
        return this.tree.isCollapsed(this.getDataNode(e));
    }
    triggerTypeNavigation() {
        this.tree.triggerTypeNavigation();
    }
    openFind() {
        this.findController ? this.findController.open() : this.tree.openFind();
    }
    closeFind() {
        this.findController ? this.findController.close() : this.tree.closeFind();
    }
    refilter() {
        this.tree.refilter();
    }
    setAnchor(e) {
        this.tree.setAnchor(typeof e > "u" ? void 0 : this.getDataNode(e));
    }
    getAnchor() {
        return this.tree.getAnchor()?.element;
    }
    setSelection(e, t) {
        const n = e.map((i)=>this.getDataNode(i));
        this.tree.setSelection(n, t);
    }
    getSelection() {
        return this.tree.getSelection().map((t)=>t.element);
    }
    setFocus(e, t) {
        const n = e.map((i)=>this.getDataNode(i));
        this.tree.setFocus(n, t);
    }
    focusNext(e = 1, t = !1, n) {
        this.tree.focusNext(e, t, n, this.focusNavigationFilter);
    }
    focusPrevious(e = 1, t = !1, n) {
        this.tree.focusPrevious(e, t, n, this.focusNavigationFilter);
    }
    focusNextPage(e) {
        return this.tree.focusNextPage(e, this.focusNavigationFilter);
    }
    focusPreviousPage(e) {
        return this.tree.focusPreviousPage(e, this.focusNavigationFilter);
    }
    focusLast(e) {
        this.tree.focusLast(e, this.focusNavigationFilter);
    }
    focusFirst(e) {
        this.tree.focusFirst(e, this.focusNavigationFilter);
    }
    getFocus() {
        return this.tree.getFocus().map((t)=>t.element);
    }
    getStickyScrollFocus() {
        return this.tree.getStickyScrollFocus().map((t)=>t.element);
    }
    getFocusedPart() {
        return this.tree.getFocusedPart();
    }
    reveal(e, t) {
        this.tree.reveal(this.getDataNode(e), t);
    }
    getRelativeTop(e) {
        return this.tree.getRelativeTop(this.getDataNode(e));
    }
    getParentElement(e) {
        const t = this.tree.getParentElement(this.getDataNode(e));
        return t && t.element;
    }
    getFirstElementChild(e = this.root.element) {
        const t = this.getDataNode(e), n = this.tree.getFirstElementChild(t === this.root ? null : t);
        return n && n.element;
    }
    getDataNode(e) {
        const t = this.nodes.get(e === this.root.element ? null : e);
        if (!t) {
            const n = this.identityProvider?.getId(e).toString();
            throw new hU(this.user, `Data tree node not found${n ? `: ${n}` : ""}`);
        }
        return t;
    }
    async refreshAndRenderNode(e, t, n, i) {
        this.disposables.isDisposed || (await this.refreshNode(e, t, n), !this.disposables.isDisposed && this.render(e, n, i));
    }
    async refreshNode(e, t, n) {
        let i;
        if (this.subTreeRefreshPromises.forEach((r, s)=>{
            !i && Mkg(s, e) && (i = r.then(()=>this.refreshNode(e, t, n)));
        }), i) return i;
        if (e !== this.root && this.tree.getNode(e).collapsed) {
            e.hasChildren = !!this.dataSource.hasChildren(e.element), e.stale = !0, this.setChildren(e, [], t, n);
            return;
        }
        return this.doRefreshSubTree(e, t, n);
    }
    async doRefreshSubTree(e, t, n) {
        let i;
        e.refreshPromise = new Promise((r)=>i = r), this.subTreeRefreshPromises.set(e, e.refreshPromise), e.refreshPromise.finally(()=>{
            e.refreshPromise = void 0, this.subTreeRefreshPromises.delete(e);
        });
        try {
            const r = await this.doRefreshNode(e, t, n);
            e.stale = !1, await Rm.settled(r.map((s)=>this.doRefreshSubTree(s, t, n)));
        } finally{
            i();
        }
    }
    async doRefreshNode(e, t, n) {
        e.hasChildren = !!this.dataSource.hasChildren(e.element);
        let i;
        if (!e.hasChildren) i = Promise.resolve(_a.empty());
        else {
            const r = this.doGetChildren(e);
            if (nqr(r)) i = Promise.resolve(r);
            else {
                const s = Kl(800);
                s.then(()=>{
                    e.slow = !0, this._onDidChangeNodeSlowState.fire(e);
                }, (o)=>null), i = r.finally(()=>s.cancel());
            }
        }
        try {
            const r = await i;
            return this.setChildren(e, r, t, n);
        } catch (r) {
            if (e !== this.root && this.tree.hasElement(e) && this.tree.collapse(e), ja(r)) return [];
            throw r;
        } finally{
            e.slow && (e.slow = !1, this._onDidChangeNodeSlowState.fire(e));
        }
    }
    doGetChildren(e) {
        let t = this.refreshPromises.get(e);
        if (t) return t;
        const n = this.dataSource.getChildren(e.element);
        return nqr(n) ? this.processChildren(n) : (t = Wb(async ()=>this.processChildren(await n)), this.refreshPromises.set(e, t), t.finally(()=>{
            this.refreshPromises.delete(e);
        }));
    }
    _onDidChangeCollapseState({ node: e, deep: t }) {
        e.element !== null && !e.collapsed && e.element.stale && (t ? this.collapse(e.element.element) : this.refreshAndRenderNode(e.element, !1).catch(ns));
    }
    setChildren(e, t, n, i) {
        const r = [
            ...t
        ];
        if (e.children.length === 0 && r.length === 0) return [];
        const s = new Map, o = new Map;
        for (const l of e.children)s.set(l.element, l), this.identityProvider && o.set(l.id, {
            node: l,
            collapsed: this.tree.hasElement(l) && this.tree.isCollapsed(l)
        });
        const a = [], c = r.map((l)=>{
            const u = !!this.dataSource.hasChildren(l);
            if (!this.identityProvider) {
                const f = Rrs({
                    element: l,
                    parent: e,
                    hasChildren: u,
                    defaultCollapseState: this.getDefaultCollapseState(l)
                });
                return u && f.defaultCollapseState === dU.PreserveOrExpanded && a.push(f), f;
            }
            const h = this.identityProvider.getId(l).toString(), p = o.get(h);
            if (p) {
                const f = p.node;
                return s.delete(f.element), this.nodes.delete(f.element), this.nodes.set(l, f), f.element = l, f.hasChildren = u, n ? p.collapsed ? (f.children.forEach((v)=>Prs(v, (b)=>this.nodes.delete(b.element))), f.children.splice(0, f.children.length), f.stale = !0) : a.push(f) : u && !p.collapsed && a.push(f), f;
            }
            const g = Rrs({
                element: l,
                parent: e,
                id: h,
                hasChildren: u,
                defaultCollapseState: this.getDefaultCollapseState(l)
            });
            return i && i.viewState.focus && i.viewState.focus.indexOf(h) > -1 && i.focus.push(g), i && i.viewState.selection && i.viewState.selection.indexOf(h) > -1 && i.selection.push(g), (i && i.viewState.expanded && i.viewState.expanded.indexOf(h) > -1 || u && g.defaultCollapseState === dU.PreserveOrExpanded) && a.push(g), g;
        });
        for (const l of s.values())Prs(l, (u)=>this.nodes.delete(u.element));
        for (const l of c)this.nodes.set(l.element, l);
        return jpi(e.children, 0, e.children.length, c), e !== this.root && this.autoExpandSingleChildren && c.length === 1 && a.length === 0 && (c[0].forceExpanded = !0, a.push(c[0])), a;
    }
    render(e, t, n) {
        const i = e.children.map((s)=>this.asTreeElement(s, t)), r = n && {
            ...n,
            diffIdentityProvider: n.diffIdentityProvider && {
                getId (s) {
                    return n.diffIdentityProvider.getId(s.element);
                }
            }
        };
        this.tree.setChildren(e === this.root ? null : e, i, r), e !== this.root && this.tree.setCollapsible(e, e.hasChildren), this._onDidRender.fire();
    }
    asTreeElement(e, t) {
        if (e.stale) return {
            element: e,
            collapsible: e.hasChildren,
            collapsed: !0
        };
        let n;
        return t && t.viewState.expanded && e.id && t.viewState.expanded.indexOf(e.id) > -1 ? n = !1 : e.forceExpanded ? (n = !1, e.forceExpanded = !1) : n = e.defaultCollapseState, {
            element: e,
            children: e.hasChildren ? _a.map(e.children, (i)=>this.asTreeElement(i, t)) : [],
            collapsible: e.hasChildren,
            collapsed: n
        };
    }
    processChildren(e) {
        return this.sorter && (e = [
            ...e
        ].sort(this.sorter.compare.bind(this.sorter))), e;
    }
    getViewState() {
        if (!this.identityProvider) throw new hU(this.user, "Can't get tree view state without an identity provider");
        const e = (o)=>this.identityProvider.getId(o).toString(), t = this.getFocus().map(e), n = this.getSelection().map(e), i = [], r = this.tree.getNode(), s = [
            r
        ];
        for(; s.length > 0;){
            const o = s.pop();
            o !== r && o.collapsible && !o.collapsed && i.push(e(o.element.element)), Vpi(s, s.length, o.children);
        }
        return {
            focus: t,
            selection: n,
            expanded: i,
            scrollTop: this.scrollTop
        };
    }
    dispose() {
        this.disposables.dispose(), this.tree.dispose();
    }
}, bWc = class rwm {
    constructor(t){
        this.node = t;
    }
    get element() {
        return {
            elements: this.node.element.elements.map((t)=>t.element),
            incompressible: this.node.element.incompressible
        };
    }
    get children() {
        return this.node.children.map((t)=>new rwm(t));
    }
    get depth() {
        return this.node.depth;
    }
    get visibleChildrenCount() {
        return this.node.visibleChildrenCount;
    }
    get visibleChildIndex() {
        return this.node.visibleChildIndex;
    }
    get collapsible() {
        return this.node.collapsible;
    }
    get collapsed() {
        return this.node.collapsed;
    }
    get visible() {
        return this.node.visible;
    }
    get filterData() {
        return this.node.filterData;
    }
}, yWc = class {
    constructor(e, t, n, i){
        this.renderer = e, this.nodeMapper = t, this.compressibleNodeMapperProvider = n, this.onDidChangeTwistieState = i, this.renderedNodes = new Map, this.templateId = e.templateId;
    }
    renderTemplate(e) {
        return {
            templateData: this.renderer.renderTemplate(e)
        };
    }
    renderElement(e, t, n, i) {
        this.renderer.renderElement(this.nodeMapper.map(e), t, n.templateData, i);
    }
    renderCompressedElements(e, t, n, i) {
        this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(e), t, n.templateData, i);
    }
    renderTwistie(e, t) {
        return e.slow ? (t.classList.add(...Ft.asClassNameArray(Pe.treeItemLoading)), !0) : (t.classList.remove(...Ft.asClassNameArray(Pe.treeItemLoading)), !1);
    }
    disposeElement(e, t, n, i) {
        this.renderer.disposeElement?.(this.nodeMapper.map(e), t, n.templateData, i);
    }
    disposeCompressedElements(e, t, n, i) {
        this.renderer.disposeCompressedElements?.(this.compressibleNodeMapperProvider().map(e), t, n.templateData, i);
    }
    disposeTemplate(e) {
        this.renderer.disposeTemplate(e.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
    }
}, SWc = class extends mU {
    constructor(e, t, n, i, r, s, o = {}){
        super(e, t, n, r, s, o), this.compressionDelegate = i, this.compressibleNodeMapper = new Wyi((a)=>new bWc(a)), this.filter = o.filter;
    }
    getCompressedTreeNode(e) {
        const t = this.getDataNode(e);
        return this.tree.getCompressedTreeNode(t).element;
    }
    createTree(e, t, n, i, r) {
        const s = new jyi(n), o = i.map((c)=>new yWc(c, this.nodeMapper, ()=>this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event)), a = Lkg(r) || {};
        return new Irs(e, t, s, o, a);
    }
    asTreeElement(e, t) {
        return {
            incompressible: this.compressionDelegate.isIncompressible(e.element),
            ...super.asTreeElement(e, t)
        };
    }
    getViewState() {
        if (!this.identityProvider) throw new hU(this.user, "Can't get tree view state without an identity provider");
        const e = (o)=>this.identityProvider.getId(o).toString(), t = this.getFocus().map(e), n = this.getSelection().map(e), i = [], r = this.tree.getCompressedTreeNode(), s = [
            r
        ];
        for(; s.length > 0;){
            const o = s.pop();
            if (o !== r && o.collapsible && !o.collapsed) for (const a of o.element.elements)i.push(e(a.element));
            s.push(...o.children);
        }
        return {
            focus: t,
            selection: n,
            expanded: i,
            scrollTop: this.scrollTop
        };
    }
    render(e, t, n) {
        if (!this.identityProvider) return super.render(e, t);
        const i = (p)=>this.identityProvider.getId(p).toString(), r = (p)=>{
            const g = new Set;
            for (const f of p){
                const v = this.tree.getCompressedTreeNode(f === this.root ? null : f);
                if (v.element) for (const b of v.element.elements)g.add(i(b.element));
            }
            return g;
        }, s = r(this.tree.getSelection()), o = r(this.tree.getFocus());
        super.render(e, t, n);
        const a = this.getSelection();
        let c = !1;
        const l = this.getFocus();
        let u = !1;
        const h = (p)=>{
            const g = p.element;
            if (g) for(let f = 0; f < g.elements.length; f++){
                const v = i(g.elements[f].element), b = g.elements[g.elements.length - 1].element;
                s.has(v) && a.indexOf(b) === -1 && (a.push(b), c = !0), o.has(v) && l.indexOf(b) === -1 && (l.push(b), u = !0);
            }
            p.children.forEach(h);
        };
        h(this.tree.getCompressedTreeNode(e === this.root ? null : e)), c && this.setSelection(a), u && this.setFocus(l);
    }
    processChildren(e) {
        return this.filter && (e = _a.filter(e, (t)=>{
            const n = this.filter.filter(t, 1), i = Nkg(n);
            if (i === 2) throw new Error("Recursive tree visibility not supported in async data compressed trees");
            return i === 1;
        })), super.processChildren(e);
    }
    navigate(e) {
        return super.navigate(e);
    }
}, kWc = class {
    constructor(e){
        this.navigator = e;
    }
    current() {
        const e = this.navigator.current();
        return e === null ? null : e.element;
    }
    previous() {
        return this.navigator.previous(), this.current();
    }
    first() {
        return this.navigator.first(), this.current();
    }
    last() {
        return this.navigator.last(), this.current();
    }
    next() {
        return this.navigator.next(), this.current();
    }
};

}
