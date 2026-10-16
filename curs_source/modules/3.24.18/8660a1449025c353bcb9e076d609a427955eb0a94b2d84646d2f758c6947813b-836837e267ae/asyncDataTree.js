import { D, Ei, Gt, Nt, Pn, Qe, Upr, Wd, XE, Ya, en, jpr, tt, xr, z0o } from "./Iwo.js";
import { D5e, HEr, Lvn, eVo, tVo } from "./abstractTree.js";
import { bo } from "./arrays.js";
import { I_, nW, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { gs, yt } from "./codicons.js";
import { one, s6 } from "./filters.js";
import { jEr } from "./indexTreeModel.js";
import { IT, np } from "./iterator.js";
import { Lyt, oTr } from "./listView.js";
import { Bt } from "./nls.js";
import { aVo, oVo, uhe } from "./objectTree.js";
import { Gn, ta } from "./themables.js";
import { AHe, UEr, bz, u_e } from "./tree.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { VBt, VEr, Voi, dVo, f5y, g5y, lVo, m5y, oYd, p5y, sYd, uVo } from "./ze.js";
var aYd, lYd, cYd, uYd, dYd, hYd, yz, pYd, mYd, gYd, fYd;
export { aYd, cYd, dYd, fYd, gYd, hYd, lYd, mYd, pYd, uYd, yz };
var __wakaru_hVo_initialized = false;
export function hVo() {
if (__wakaru_hVo_initialized) return;
__wakaru_hVo_initialized = true;
"use strict";
E(), oTr(), Lvn(), jEr(), aVo(), AHe(), qn(), gs(), ta(), Ei(), Gt(), IT(), Qe(), To(), yo(), s6(), bo(), Bt(), aYd = class BRb {
    constructor(e){
        this.node = e;
    }
    get element() {
        return this.node.element.element;
    }
    get children() {
        return this.node.children.map((e)=>new BRb(e));
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
}, lYd = class {
    constructor(t, e, n){
        this.renderer = t, this.nodeMapper = e, this.onDidChangeTwistieState = n, this.renderedNodes = new Map, this.templateId = t.templateId;
    }
    renderTemplate(t) {
        return {
            templateData: this.renderer.renderTemplate(t)
        };
    }
    renderElement(t, e, n, i) {
        this.renderer.renderElement(this.nodeMapper.map(t), e, n.templateData, i);
    }
    renderTwistie(t, e) {
        return t.slow ? (e.classList.add(...Gn.asClassNameArray(yt.treeItemLoading)), !0) : (e.classList.remove(...Gn.asClassNameArray(yt.treeItemLoading)), !1);
    }
    disposeElement(t, e, n, i) {
        this.renderer.disposeElement?.(this.nodeMapper.map(t), e, n.templateData, i);
    }
    disposeTemplate(t) {
        this.renderer.disposeTemplate(t.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
    }
}, cYd = class extends Lyt {
    constructor(t){
        super(t.elements.map((e)=>e.element)), this.data = t;
    }
    set context(t) {
        this.data.context = t;
    }
    get context() {
        return this.data.context;
    }
}, uYd = class {
    constructor(t){
        this.dnd = t;
    }
    getDragURI(t) {
        return this.dnd.getDragURI(t.element);
    }
    getDragLabel(t, e) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(t.map((n)=>n.element), e);
    }
    onDragStart(t, e) {
        this.dnd.onDragStart?.(uVo(t), e);
    }
    onDragOver(t, e, n, i, r, s = !0) {
        return this.dnd.onDragOver(uVo(t), e && e.element, n, i, r);
    }
    drop(t, e, n, i, r) {
        this.dnd.drop(uVo(t), e && e.element, n, i, r);
    }
    onDragEnd(t) {
        this.dnd.onDragEnd?.(t);
    }
    dispose() {
        this.dnd.dispose();
    }
}, dYd = class extends eVo {
    constructor(t, e, n){
        super(e, n), this.findProvider = t, this.isFindSessionActive = !1;
    }
    filter(t, e) {
        const n = super.filter(t, e);
        if (!this.isFindSessionActive || this.findMode === D5e.Highlight || !this.findProvider.isVisible) return n;
        const i = Voi(n) ? n.visibility : n;
        return VBt(i) === 0 ? 0 : this.findProvider.isVisible(t) ? n : 0;
    }
}, hYd = class extends tVo {
    constructor(t, e, n, i, r){
        super(t, n, i, r), this.findProvider = e, this.filter = n, this.activeSession = !1, this.asyncWorkInProgress = !1, this.taskQueue = new nW(250), this.disposables.add(Pn(async ()=>{
            this.activeSession && await this.findProvider.endSession?.();
        }));
    }
    applyPattern(t) {
        this.renderMessage(!1), this.activeTokenSource?.cancel(), this.activeTokenSource = new El, this.taskQueue.trigger(()=>this.applyPatternAsync());
    }
    async applyPatternAsync() {
        const t = this.activeTokenSource?.token;
        if (!t || t.isCancellationRequested) return;
        const e = this.pattern;
        if (e === "") {
            this.activeSession && (this.asyncWorkInProgress = !0, await this.deactivateFindSession(), this.asyncWorkInProgress = !1, t.isCancellationRequested || (this.filter.reset(), super.applyPattern("")));
            return;
        }
        this.activeSession || this.activateFindSession(), this.asyncWorkInProgress = !0, this.activeFindMetadata = void 0;
        const n = await this.findProvider.find(e, {
            matchType: this.matchType,
            findMode: this.mode
        }, t);
        t.isCancellationRequested || n === void 0 || (this.asyncWorkInProgress = !1, this.activeFindMetadata = n, this.filter.reset(), super.applyPattern(e), n.warningMessage && this.renderMessage(!0, n.warningMessage));
    }
    activateFindSession() {
        this.activeSession = !0, this.filter.isFindSessionActive = !0, this.findProvider.startSession?.();
    }
    async deactivateFindSession() {
        this.activeSession = !1, this.filter.isFindSessionActive = !1, await this.findProvider.endSession?.();
    }
    render() {
        if (this.asyncWorkInProgress || !this.activeFindMetadata) return;
        const t = this.activeFindMetadata.matchCount === 0 && this.pattern.length > 0;
        this.renderMessage(t), this.pattern.length && this.alertResults(this.activeFindMetadata.matchCount);
    }
    onDidToggleChange(t) {
        this.toggles.set(t.id, t.isChecked), this.filter.findMode = this.mode, this.filter.findMatchType = this.matchType, this.placeholder = this.mode === D5e.Filter ? D(41, null) : D(42, null), this.applyPattern(this.pattern);
    }
    shouldAllowFocus(t) {
        return this.shouldFocusWhenNavigating(t);
    }
    shouldFocusWhenNavigating(t) {
        if (!this.activeSession || !this.activeFindMetadata) return !0;
        const e = t.element?.element;
        return e && this.activeFindMetadata.isMatch(e) ? !0 : !one.isDefault(t.filterData);
    }
}, yz = class {
    constructor(t, e, n, i, r, s = {}){
        this.user = t, this.dataSource = r, this.nodes = new Map, this.subTreeRefreshPromises = new Map, this.refreshPromises = new Map, this._onDidRender = new tt, this._onDidChangeNodeSlowState = new tt, this.nodeMapper = new UEr((l)=>new aYd(l)), this.disposables = new Nt, this.identityProvider = s.identityProvider, this.autoExpandSingleChildren = typeof s.autoExpandSingleChildren > "u" ? !1 : s.autoExpandSingleChildren, this.sorter = s.sorter, this.getDefaultCollapseState = (l)=>s.collapseByDefault ? s.collapseByDefault(l) ? u_e.PreserveOrCollapsed : u_e.PreserveOrExpanded : void 0;
        let o = !1, a;
        if (s.findProvider && (s.findWidgetEnabled ?? !0) && s.keyboardNavigationLabelProvider && s.contextViewProvider && (o = !0, a = new dYd(s.findProvider, s.keyboardNavigationLabelProvider, s.filter)), this.tree = this.createTree(t, e, n, i, {
            ...s,
            findWidgetEnabled: !o,
            filter: a ?? s.filter
        }), this.root = lVo({
            element: void 0,
            parent: null,
            hasChildren: !0,
            defaultCollapseState: void 0
        }), this.identityProvider && (this.root = {
            ...this.root,
            id: null
        }), this.nodes.set(null, this.root), this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables), o) {
            const l = {
                styles: s.findWidgetStyles,
                showNotFoundMessage: s.showNotFoundMessage,
                defaultFindMatchType: s.defaultFindMatchType,
                defaultFindMode: s.defaultFindMode
            };
            this.findController = this.disposables.add(new hYd(this.tree, s.findProvider, a, this.tree.options.contextViewProvider, l)), this.focusNavigationFilter = (c)=>this.findController.shouldFocusWhenNavigating(c), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        } else this.onDidChangeFindOpenState = this.tree.onDidChangeFindOpenState, this.onDidChangeFindMode = this.tree.onDidChangeFindMode, this.onDidChangeFindMatchType = this.tree.onDidChangeFindMatchType;
    }
    get onDidScroll() {
        return this.tree.onDidScroll;
    }
    get onDidChangeFocus() {
        return en.map(this.tree.onDidChangeFocus, sYd);
    }
    get onDidChangeSelection() {
        return en.map(this.tree.onDidChangeSelection, sYd);
    }
    get onKeyDown() {
        return this.tree.onKeyDown;
    }
    get onMouseClick() {
        return en.map(this.tree.onMouseClick, VEr);
    }
    get onMouseDblClick() {
        return en.map(this.tree.onMouseDblClick, VEr);
    }
    get onContextMenu() {
        return en.map(this.tree.onContextMenu, m5y);
    }
    get onTap() {
        return en.map(this.tree.onTap, VEr);
    }
    get onPointer() {
        return en.map(this.tree.onPointer, VEr);
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
    set findMode(t) {
        this.findController ? this.findController.mode = t : this.tree.findMode = t;
    }
    get findMatchType() {
        return this.findController ? this.findController.matchType : this.tree.findMatchType;
    }
    set findMatchType(t) {
        this.findController ? this.findController.matchType = t : this.tree.findMatchType = t;
    }
    get expandOnlyOnTwistieClick() {
        if (typeof this.tree.expandOnlyOnTwistieClick == "boolean") return this.tree.expandOnlyOnTwistieClick;
        const t = this.tree.expandOnlyOnTwistieClick;
        return (e)=>t(this.nodes.get(e === this.root.element ? null : e) || null);
    }
    get onDidDispose() {
        return this.tree.onDidDispose;
    }
    createTree(t, e, n, i, r) {
        const s = new HEr(n), o = i.map((l)=>new lYd(l, this.nodeMapper, this._onDidChangeNodeSlowState.event)), a = oYd(r) || {};
        return new uhe(t, e, s, o, a);
    }
    updateOptions(t = {}) {
        this.findController && (t.defaultFindMode !== void 0 && (this.findController.mode = t.defaultFindMode), t.defaultFindMatchType !== void 0 && (this.findController.matchType = t.defaultFindMatchType)), this.tree.updateOptions(t);
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
    set scrollTop(t) {
        this.tree.scrollTop = t;
    }
    get scrollLeft() {
        return this.tree.scrollLeft;
    }
    set scrollLeft(t) {
        this.tree.scrollLeft = t;
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
    set ariaLabel(t) {
        this.tree.ariaLabel = t;
    }
    domFocus() {
        this.tree.domFocus();
    }
    isDOMFocused() {
        return this.tree.isDOMFocused();
    }
    navigate(t) {
        let e;
        return t && (e = this.getDataNode(t)), new fYd(this.tree.navigate(e));
    }
    layout(t, e) {
        this.tree.layout(t, e);
    }
    style(t) {
        this.tree.style(t);
    }
    getInput() {
        return this.root.element;
    }
    async setInput(t, e) {
        this.refreshPromises.forEach((i)=>i.cancel()), this.refreshPromises.clear(), this.root.element = t;
        const n = e && {
            viewState: e,
            focus: [],
            selection: []
        };
        await this._updateChildren(t, !0, !1, n), n && (this.tree.setFocus(n.focus), this.tree.setSelection(n.selection)), e && typeof e.scrollTop == "number" && (this.scrollTop = e.scrollTop);
    }
    async updateChildren(t = this.root.element, e = !0, n = !1, i) {
        await this._updateChildren(t, e, n, void 0, i);
    }
    async _updateChildren(t = this.root.element, e = !0, n = !1, i, r) {
        if (typeof this.root.element > "u") throw new bz(this.user, "Tree input not set");
        this.root.refreshPromise && (await this.root.refreshPromise, await en.toPromise(this._onDidRender.event));
        const s = this.getDataNode(t);
        if (await this.refreshAndRenderNode(s, e, i, r), n) try {
            this.tree.rerender(s);
        } catch  {}
    }
    resort(t = this.root.element, e = !0) {
        this.tree.resort(this.getDataNode(t), e);
    }
    hasNode(t) {
        return t === this.root.element || this.nodes.has(t);
    }
    rerender(t) {
        if (t === void 0 || t === this.root.element) {
            this.tree.rerender();
            return;
        }
        const e = this.getDataNode(t);
        this.tree.rerender(e);
    }
    updateElementHeight(t, e) {
        const n = this.getDataNode(t);
        this.tree.updateElementHeight(n, e);
    }
    updateWidth(t) {
        const e = this.getDataNode(t);
        this.tree.updateWidth(e);
    }
    getNode(t = this.root.element) {
        const e = this.getDataNode(t), n = this.tree.getNode(e === this.root ? null : e);
        return this.nodeMapper.map(n);
    }
    collapse(t, e = !1) {
        const n = this.getDataNode(t);
        return this.tree.collapse(n === this.root ? null : n, e);
    }
    async expand(t, e = !1) {
        if (typeof this.root.element > "u") throw new bz(this.user, "Tree input not set");
        this.root.refreshPromise && (await this.root.refreshPromise, await en.toPromise(this._onDidRender.event));
        const n = this.getDataNode(t);
        if (this.tree.hasElement(n) && !this.tree.isCollapsible(n) || (n.refreshPromise && (await this.root.refreshPromise, await en.toPromise(this._onDidRender.event)), n !== this.root && !n.refreshPromise && !this.tree.isCollapsed(n))) return !1;
        const i = this.tree.expand(n === this.root ? null : n, e);
        return n.refreshPromise && (await this.root.refreshPromise, await en.toPromise(this._onDidRender.event)), i;
    }
    toggleCollapsed(t, e = !1) {
        return this.tree.toggleCollapsed(this.getDataNode(t), e);
    }
    expandAll() {
        this.tree.expandAll();
    }
    async expandTo(t) {
        if (!this.dataSource.getParent) throw new Error("Can't expand to element without getParent method");
        const e = [];
        for(; !this.hasNode(t);)t = this.dataSource.getParent(t), t !== this.root.element && e.push(t);
        for (const n of np.reverse(e))await this.expand(n);
        this.tree.expandTo(this.getDataNode(t));
    }
    collapseAll() {
        this.tree.collapseAll();
    }
    isCollapsible(t) {
        return this.tree.isCollapsible(this.getDataNode(t));
    }
    isCollapsed(t) {
        return this.tree.isCollapsed(this.getDataNode(t));
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
    setAnchor(t) {
        this.tree.setAnchor(typeof t > "u" ? void 0 : this.getDataNode(t));
    }
    getAnchor() {
        return this.tree.getAnchor()?.element;
    }
    setSelection(t, e) {
        const n = t.map((i)=>this.getDataNode(i));
        this.tree.setSelection(n, e);
    }
    getSelection() {
        return this.tree.getSelection().map((e)=>e.element);
    }
    setFocus(t, e) {
        const n = t.map((i)=>this.getDataNode(i));
        this.tree.setFocus(n, e);
    }
    focusNext(t = 1, e = !1, n) {
        this.tree.focusNext(t, e, n, this.focusNavigationFilter);
    }
    focusPrevious(t = 1, e = !1, n) {
        this.tree.focusPrevious(t, e, n, this.focusNavigationFilter);
    }
    focusNextPage(t) {
        return this.tree.focusNextPage(t, this.focusNavigationFilter);
    }
    focusPreviousPage(t) {
        return this.tree.focusPreviousPage(t, this.focusNavigationFilter);
    }
    focusLast(t) {
        this.tree.focusLast(t, this.focusNavigationFilter);
    }
    focusFirst(t) {
        this.tree.focusFirst(t, this.focusNavigationFilter);
    }
    getFocus() {
        return this.tree.getFocus().map((e)=>e.element);
    }
    getStickyScrollFocus() {
        return this.tree.getStickyScrollFocus().map((e)=>e.element);
    }
    getFocusedPart() {
        return this.tree.getFocusedPart();
    }
    reveal(t, e) {
        this.tree.reveal(this.getDataNode(t), e);
    }
    getRelativeTop(t) {
        return this.tree.getRelativeTop(this.getDataNode(t));
    }
    getParentElement(t) {
        const e = this.tree.getParentElement(this.getDataNode(t));
        return e && e.element;
    }
    getFirstElementChild(t = this.root.element) {
        const e = this.getDataNode(t), n = this.tree.getFirstElementChild(e === this.root ? null : e);
        return n && n.element;
    }
    getDataNode(t) {
        const e = this.nodes.get(t === this.root.element ? null : t);
        if (!e) {
            const n = this.identityProvider?.getId(t).toString();
            throw new bz(this.user, `Data tree node not found${n ? `: ${n}` : ""}`);
        }
        return e;
    }
    async refreshAndRenderNode(t, e, n, i) {
        this.disposables.isDisposed || (await this.refreshNode(t, e, n), !this.disposables.isDisposed && this.render(t, n, i));
    }
    async refreshNode(t, e, n) {
        let i;
        if (this.subTreeRefreshPromises.forEach((r, s)=>{
            !i && p5y(s, t) && (i = r.then(()=>this.refreshNode(t, e, n)));
        }), i) return i;
        if (t !== this.root && this.tree.getNode(t).collapsed) {
            t.hasChildren = !!this.dataSource.hasChildren(t.element), t.stale = !0, this.setChildren(t, [], e, n);
            return;
        }
        return this.doRefreshSubTree(t, e, n);
    }
    async doRefreshSubTree(t, e, n) {
        let i;
        t.refreshPromise = new Promise((r)=>i = r), this.subTreeRefreshPromises.set(t, t.refreshPromise), t.refreshPromise.finally(()=>{
            t.refreshPromise = void 0, this.subTreeRefreshPromises.delete(t);
        });
        try {
            const r = await this.doRefreshNode(t, e, n);
            t.stale = !1, await I_.settled(r.map((s)=>this.doRefreshSubTree(s, e, n)));
        } finally{
            i();
        }
    }
    async doRefreshNode(t, e, n) {
        t.hasChildren = !!this.dataSource.hasChildren(t.element);
        let i;
        if (!t.hasChildren) i = Promise.resolve(np.empty());
        else {
            const r = this.doGetChildren(t);
            if (z0o(r)) i = Promise.resolve(r);
            else {
                const s = Wd(800);
                s.then(()=>{
                    t.slow = !0, this._onDidChangeNodeSlowState.fire(t);
                }, (o)=>null), i = r.finally(()=>s.cancel());
            }
        }
        try {
            const r = await i;
            return this.setChildren(t, r, e, n);
        } catch (r) {
            if (t !== this.root && this.tree.hasElement(t) && this.tree.collapse(t), Ya(r)) return [];
            throw r;
        } finally{
            t.slow && (t.slow = !1, this._onDidChangeNodeSlowState.fire(t));
        }
    }
    doGetChildren(t) {
        let e = this.refreshPromises.get(t);
        if (e) return e;
        const n = this.dataSource.getChildren(t.element);
        return z0o(n) ? this.processChildren(n) : (e = XE(async ()=>this.processChildren(await n)), this.refreshPromises.set(t, e), e.finally(()=>{
            this.refreshPromises.delete(t);
        }));
    }
    _onDidChangeCollapseState({ node: t, deep: e }) {
        t.element !== null && !t.collapsed && t.element.stale && (e ? this.collapse(t.element.element) : this.refreshAndRenderNode(t.element, !1).catch(xr));
    }
    setChildren(t, e, n, i) {
        const r = [
            ...e
        ];
        if (t.children.length === 0 && r.length === 0) return [];
        const s = new Map, o = new Map;
        for (const c of t.children)s.set(c.element, c), this.identityProvider && o.set(c.id, {
            node: c,
            collapsed: this.tree.hasElement(c) && this.tree.isCollapsed(c)
        });
        const a = [], l = r.map((c)=>{
            const u = !!this.dataSource.hasChildren(c);
            if (!this.identityProvider) {
                const g = lVo({
                    element: c,
                    parent: t,
                    hasChildren: u,
                    defaultCollapseState: this.getDefaultCollapseState(c)
                });
                return u && g.defaultCollapseState === u_e.PreserveOrExpanded && a.push(g), g;
            }
            const d = this.identityProvider.getId(c).toString(), h = o.get(d);
            if (h) {
                const g = h.node;
                return s.delete(g.element), this.nodes.delete(g.element), this.nodes.set(c, g), g.element = c, g.hasChildren = u, n ? h.collapsed ? (g.children.forEach((f)=>dVo(f, (_)=>this.nodes.delete(_.element))), g.children.splice(0, g.children.length), g.stale = !0) : a.push(g) : u && !h.collapsed && a.push(g), g;
            }
            const p = lVo({
                element: c,
                parent: t,
                id: d,
                hasChildren: u,
                defaultCollapseState: this.getDefaultCollapseState(c)
            });
            return i && i.viewState.focus && i.viewState.focus.indexOf(d) > -1 && i.focus.push(p), i && i.viewState.selection && i.viewState.selection.indexOf(d) > -1 && i.selection.push(p), (i && i.viewState.expanded && i.viewState.expanded.indexOf(d) > -1 || u && p.defaultCollapseState === u_e.PreserveOrExpanded) && a.push(p), p;
        });
        for (const c of s.values())dVo(c, (u)=>this.nodes.delete(u.element));
        for (const c of l)this.nodes.set(c.element, c);
        return jpr(t.children, 0, t.children.length, l), t !== this.root && this.autoExpandSingleChildren && l.length === 1 && a.length === 0 && (l[0].forceExpanded = !0, a.push(l[0])), a;
    }
    render(t, e, n) {
        const i = t.children.map((s)=>this.asTreeElement(s, e)), r = n && {
            ...n,
            diffIdentityProvider: n.diffIdentityProvider && {
                getId (s) {
                    return n.diffIdentityProvider.getId(s.element);
                }
            }
        };
        this.tree.setChildren(t === this.root ? null : t, i, r), t !== this.root && this.tree.setCollapsible(t, t.hasChildren), this._onDidRender.fire();
    }
    asTreeElement(t, e) {
        if (t.stale) return {
            element: t,
            collapsible: t.hasChildren,
            collapsed: !0
        };
        let n;
        return e && e.viewState.expanded && t.id && e.viewState.expanded.indexOf(t.id) > -1 ? n = !1 : t.forceExpanded ? (n = !1, t.forceExpanded = !1) : n = t.defaultCollapseState, {
            element: t,
            children: t.hasChildren ? np.map(t.children, (i)=>this.asTreeElement(i, e)) : [],
            collapsible: t.hasChildren,
            collapsed: n
        };
    }
    processChildren(t) {
        return this.sorter && (t = [
            ...t
        ].sort(this.sorter.compare.bind(this.sorter))), t;
    }
    getViewState() {
        if (!this.identityProvider) throw new bz(this.user, "Can't get tree view state without an identity provider");
        const t = (o)=>this.identityProvider.getId(o).toString(), e = this.getFocus().map(t), n = this.getSelection().map(t), i = [], r = this.tree.getNode(), s = [
            r
        ];
        for(; s.length > 0;){
            const o = s.pop();
            o !== r && o.collapsible && !o.collapsed && i.push(t(o.element.element)), Upr(s, s.length, o.children);
        }
        return {
            focus: e,
            selection: n,
            expanded: i,
            scrollTop: this.scrollTop
        };
    }
    dispose() {
        this.disposables.dispose(), this.tree.dispose();
    }
}, pYd = class URb {
    constructor(e){
        this.node = e;
    }
    get element() {
        return {
            elements: this.node.element.elements.map((e)=>e.element),
            incompressible: this.node.element.incompressible
        };
    }
    get children() {
        return this.node.children.map((e)=>new URb(e));
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
}, mYd = class {
    constructor(t, e, n, i){
        this.renderer = t, this.nodeMapper = e, this.compressibleNodeMapperProvider = n, this.onDidChangeTwistieState = i, this.renderedNodes = new Map, this.templateId = t.templateId;
    }
    renderTemplate(t) {
        return {
            templateData: this.renderer.renderTemplate(t)
        };
    }
    renderElement(t, e, n, i) {
        this.renderer.renderElement(this.nodeMapper.map(t), e, n.templateData, i);
    }
    renderCompressedElements(t, e, n, i) {
        this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(t), e, n.templateData, i);
    }
    renderTwistie(t, e) {
        return t.slow ? (e.classList.add(...Gn.asClassNameArray(yt.treeItemLoading)), !0) : (e.classList.remove(...Gn.asClassNameArray(yt.treeItemLoading)), !1);
    }
    disposeElement(t, e, n, i) {
        this.renderer.disposeElement?.(this.nodeMapper.map(t), e, n.templateData, i);
    }
    disposeCompressedElements(t, e, n, i) {
        this.renderer.disposeCompressedElements?.(this.compressibleNodeMapperProvider().map(t), e, n.templateData, i);
    }
    disposeTemplate(t) {
        this.renderer.disposeTemplate(t.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
    }
}, gYd = class extends yz {
    constructor(t, e, n, i, r, s, o = {}){
        super(t, e, n, r, s, o), this.compressionDelegate = i, this.compressibleNodeMapper = new UEr((a)=>new pYd(a)), this.filter = o.filter;
    }
    getCompressedTreeNode(t) {
        const e = this.getDataNode(t);
        return this.tree.getCompressedTreeNode(e).element;
    }
    createTree(t, e, n, i, r) {
        const s = new HEr(n), o = i.map((l)=>new mYd(l, this.nodeMapper, ()=>this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event)), a = g5y(r) || {};
        return new oVo(t, e, s, o, a);
    }
    asTreeElement(t, e) {
        return {
            incompressible: this.compressionDelegate.isIncompressible(t.element),
            ...super.asTreeElement(t, e)
        };
    }
    getViewState() {
        if (!this.identityProvider) throw new bz(this.user, "Can't get tree view state without an identity provider");
        const t = (o)=>this.identityProvider.getId(o).toString(), e = this.getFocus().map(t), n = this.getSelection().map(t), i = [], r = this.tree.getCompressedTreeNode(), s = [
            r
        ];
        for(; s.length > 0;){
            const o = s.pop();
            if (o !== r && o.collapsible && !o.collapsed) for (const a of o.element.elements)i.push(t(a.element));
            s.push(...o.children);
        }
        return {
            focus: e,
            selection: n,
            expanded: i,
            scrollTop: this.scrollTop
        };
    }
    render(t, e, n) {
        if (!this.identityProvider) return super.render(t, e);
        const i = (h)=>this.identityProvider.getId(h).toString(), r = (h)=>{
            const p = new Set;
            for (const g of h){
                const f = this.tree.getCompressedTreeNode(g === this.root ? null : g);
                if (f.element) for (const _ of f.element.elements)p.add(i(_.element));
            }
            return p;
        }, s = r(this.tree.getSelection()), o = r(this.tree.getFocus());
        super.render(t, e, n);
        const a = this.getSelection();
        let l = !1;
        const c = this.getFocus();
        let u = !1;
        const d = (h)=>{
            const p = h.element;
            if (p) for(let g = 0; g < p.elements.length; g++){
                const f = i(p.elements[g].element), _ = p.elements[p.elements.length - 1].element;
                s.has(f) && a.indexOf(_) === -1 && (a.push(_), l = !0), o.has(f) && c.indexOf(_) === -1 && (c.push(_), u = !0);
            }
            h.children.forEach(d);
        };
        d(this.tree.getCompressedTreeNode(t === this.root ? null : t)), l && this.setSelection(a), u && this.setFocus(c);
    }
    processChildren(t) {
        return this.filter && (t = np.filter(t, (e)=>{
            const n = this.filter.filter(e, 1), i = f5y(n);
            if (i === 2) throw new Error("Recursive tree visibility not supported in async data compressed trees");
            return i === 1;
        })), super.processChildren(t);
    }
    navigate(t) {
        return super.navigate(t);
    }
}, fYd = class {
    constructor(t){
        this.navigator = t;
    }
    current() {
        const t = this.navigator.current();
        return t === null ? null : t.element;
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
