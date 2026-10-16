import { MKd, jEr } from "./indexTreeModel.js";
import { IT, np } from "./iterator.js";
import { AHe, bz, u_e } from "./tree.js";
import { E } from "./tslib.es6.js";
var GEr;
export { GEr };
var __wakaru_iVo_initialized = false;
export function iVo() {
if (__wakaru_iVo_initialized) return;
__wakaru_iVo_initialized = true;
"use strict";
E(), jEr(), AHe(), IT(), GEr = class {
    constructor(t, e = {}){
        this.user = t, this.rootRef = null, this.nodes = new Map, this.nodesByIdentity = new Map, this.model = new MKd(t, null, e), this.onDidSpliceModel = this.model.onDidSpliceModel, this.onDidSpliceRenderedNodes = this.model.onDidSpliceRenderedNodes, this.onDidChangeCollapseState = this.model.onDidChangeCollapseState, this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount, e.sorter && (this.sorter = {
            compare (n, i) {
                return e.sorter.compare(n.element, i.element);
            }
        }), this.identityProvider = e.identityProvider;
    }
    get size() {
        return this.nodes.size;
    }
    setChildren(t, e = np.empty(), n = {}) {
        const i = this.getElementLocation(t);
        this._setChildren(i, this.preserveCollapseState(e), n);
    }
    _setChildren(t, e = np.empty(), n) {
        const i = new Set, r = new Set, s = (a)=>{
            if (a.element === null) return;
            const l = a;
            if (i.add(l.element), this.nodes.set(l.element, l), this.identityProvider) {
                const c = this.identityProvider.getId(l.element).toString();
                r.add(c), this.nodesByIdentity.set(c, l);
            }
            n.onDidCreateNode?.(l);
        }, o = (a)=>{
            if (a.element === null) return;
            const l = a;
            if (i.has(l.element) || this.nodes.delete(l.element), this.identityProvider) {
                const c = this.identityProvider.getId(l.element).toString();
                r.has(c) || this.nodesByIdentity.delete(c);
            }
            n.onDidDeleteNode?.(l);
        };
        this.model.splice([
            ...t,
            0
        ], Number.MAX_VALUE, e, {
            ...n,
            onDidCreateNode: s,
            onDidDeleteNode: o
        });
    }
    preserveCollapseState(t = np.empty()) {
        return this.sorter && (t = [
            ...t
        ].sort(this.sorter.compare.bind(this.sorter))), np.map(t, (e)=>{
            let n = this.nodes.get(e.element);
            if (!n && this.identityProvider) {
                const s = this.identityProvider.getId(e.element).toString();
                n = this.nodesByIdentity.get(s);
            }
            if (!n) {
                let s;
                return typeof e.collapsed > "u" ? s = void 0 : e.collapsed === u_e.Collapsed || e.collapsed === u_e.PreserveOrCollapsed ? s = !0 : e.collapsed === u_e.Expanded || e.collapsed === u_e.PreserveOrExpanded ? s = !1 : s = !!e.collapsed, {
                    ...e,
                    children: this.preserveCollapseState(e.children),
                    collapsed: s
                };
            }
            const i = typeof e.collapsible == "boolean" ? e.collapsible : n.collapsible;
            let r;
            return typeof e.collapsed > "u" || e.collapsed === u_e.PreserveOrCollapsed || e.collapsed === u_e.PreserveOrExpanded ? r = n.collapsed : e.collapsed === u_e.Collapsed ? r = !0 : e.collapsed === u_e.Expanded ? r = !1 : r = !!e.collapsed, {
                ...e,
                collapsible: i,
                collapsed: r,
                children: this.preserveCollapseState(e.children)
            };
        });
    }
    rerender(t) {
        const e = this.getElementLocation(t);
        this.model.rerender(e);
    }
    resort(t = null, e = !0) {
        if (!this.sorter) return;
        const n = this.getElementLocation(t), i = this.model.getNode(n);
        this._setChildren(n, this.resortChildren(i, e), {});
    }
    resortChildren(t, e, n = !0) {
        let i = [
            ...t.children
        ];
        return (e || n) && (i = i.sort(this.sorter.compare.bind(this.sorter))), np.map(i, (r)=>({
                element: r.element,
                collapsible: r.collapsible,
                collapsed: r.collapsed,
                children: this.resortChildren(r, e, !1)
            }));
    }
    getFirstElementChild(t = null) {
        const e = this.getElementLocation(t);
        return this.model.getFirstElementChild(e);
    }
    getLastElementAncestor(t = null) {
        const e = this.getElementLocation(t);
        return this.model.getLastElementAncestor(e);
    }
    has(t) {
        return this.nodes.has(t);
    }
    getListIndex(t) {
        const e = this.getElementLocation(t);
        return this.model.getListIndex(e);
    }
    getListRenderCount(t) {
        const e = this.getElementLocation(t);
        return this.model.getListRenderCount(e);
    }
    isCollapsible(t) {
        const e = this.getElementLocation(t);
        return this.model.isCollapsible(e);
    }
    setCollapsible(t, e) {
        const n = this.getElementLocation(t);
        return this.model.setCollapsible(n, e);
    }
    isCollapsed(t) {
        const e = this.getElementLocation(t);
        return this.model.isCollapsed(e);
    }
    setCollapsed(t, e, n) {
        const i = this.getElementLocation(t);
        return this.model.setCollapsed(i, e, n);
    }
    expandTo(t) {
        const e = this.getElementLocation(t);
        this.model.expandTo(e);
    }
    refilter() {
        this.model.refilter();
    }
    getNode(t = null) {
        if (t === null) return this.model.getNode(this.model.rootRef);
        const e = this.nodes.get(t);
        if (!e) throw new bz(this.user, `Tree element not found: ${t}`);
        return e;
    }
    getNodeLocation(t) {
        return t.element;
    }
    getParentNodeLocation(t) {
        if (t === null) throw new bz(this.user, "Invalid getParentNodeLocation call");
        const e = this.nodes.get(t);
        if (!e) throw new bz(this.user, `Tree element not found: ${t}`);
        const n = this.model.getNodeLocation(e), i = this.model.getParentNodeLocation(n);
        return this.model.getNode(i).element;
    }
    getElementLocation(t) {
        if (t === null) return [];
        const e = this.nodes.get(t);
        if (!e) throw new bz(this.user, `Tree element not found: ${t}`);
        return this.model.getNodeLocation(e);
    }
};

}
