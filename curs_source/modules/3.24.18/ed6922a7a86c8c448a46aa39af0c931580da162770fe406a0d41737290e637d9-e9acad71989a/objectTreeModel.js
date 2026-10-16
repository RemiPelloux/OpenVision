import { Gyi, UHc } from "./indexTreeModel.js";
import { Eg, _a } from "./iterator.js";
import { dU, hU, pU } from "./tree.js";
import { x } from "./tslib.es6.js";
var l_n;
export { l_n };
var __wakaru_Kyi_initialized = false;
export function Kyi() {
if (__wakaru_Kyi_initialized) return;
__wakaru_Kyi_initialized = true;
"use strict";
x(), Gyi(), pU(), Eg(), l_n = class {
    constructor(e, t = {}){
        this.user = e, this.rootRef = null, this.nodes = new Map, this.nodesByIdentity = new Map, this.model = new UHc(e, null, t), this.onDidSpliceModel = this.model.onDidSpliceModel, this.onDidSpliceRenderedNodes = this.model.onDidSpliceRenderedNodes, this.onDidChangeCollapseState = this.model.onDidChangeCollapseState, this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount, t.sorter && (this.sorter = {
            compare (n, i) {
                return t.sorter.compare(n.element, i.element);
            }
        }), this.identityProvider = t.identityProvider;
    }
    get size() {
        return this.nodes.size;
    }
    setChildren(e, t = _a.empty(), n = {}) {
        const i = this.getElementLocation(e);
        this._setChildren(i, this.preserveCollapseState(t), n);
    }
    _setChildren(e, t = _a.empty(), n) {
        const i = new Set, r = new Set, s = (a)=>{
            if (a.element === null) return;
            const c = a;
            if (i.add(c.element), this.nodes.set(c.element, c), this.identityProvider) {
                const l = this.identityProvider.getId(c.element).toString();
                r.add(l), this.nodesByIdentity.set(l, c);
            }
            n.onDidCreateNode?.(c);
        }, o = (a)=>{
            if (a.element === null) return;
            const c = a;
            if (i.has(c.element) || this.nodes.delete(c.element), this.identityProvider) {
                const l = this.identityProvider.getId(c.element).toString();
                r.has(l) || this.nodesByIdentity.delete(l);
            }
            n.onDidDeleteNode?.(c);
        };
        this.model.splice([
            ...e,
            0
        ], Number.MAX_VALUE, t, {
            ...n,
            onDidCreateNode: s,
            onDidDeleteNode: o
        });
    }
    preserveCollapseState(e = _a.empty()) {
        return this.sorter && (e = [
            ...e
        ].sort(this.sorter.compare.bind(this.sorter))), _a.map(e, (t)=>{
            let n = this.nodes.get(t.element);
            if (!n && this.identityProvider) {
                const s = this.identityProvider.getId(t.element).toString();
                n = this.nodesByIdentity.get(s);
            }
            if (!n) {
                let s;
                return typeof t.collapsed > "u" ? s = void 0 : t.collapsed === dU.Collapsed || t.collapsed === dU.PreserveOrCollapsed ? s = !0 : t.collapsed === dU.Expanded || t.collapsed === dU.PreserveOrExpanded ? s = !1 : s = !!t.collapsed, {
                    ...t,
                    children: this.preserveCollapseState(t.children),
                    collapsed: s
                };
            }
            const i = typeof t.collapsible == "boolean" ? t.collapsible : n.collapsible;
            let r;
            return typeof t.collapsed > "u" || t.collapsed === dU.PreserveOrCollapsed || t.collapsed === dU.PreserveOrExpanded ? r = n.collapsed : t.collapsed === dU.Collapsed ? r = !0 : t.collapsed === dU.Expanded ? r = !1 : r = !!t.collapsed, {
                ...t,
                collapsible: i,
                collapsed: r,
                children: this.preserveCollapseState(t.children)
            };
        });
    }
    rerender(e) {
        const t = this.getElementLocation(e);
        this.model.rerender(t);
    }
    resort(e = null, t = !0) {
        if (!this.sorter) return;
        const n = this.getElementLocation(e), i = this.model.getNode(n);
        this._setChildren(n, this.resortChildren(i, t), {});
    }
    resortChildren(e, t, n = !0) {
        let i = [
            ...e.children
        ];
        return (t || n) && (i = i.sort(this.sorter.compare.bind(this.sorter))), _a.map(i, (r)=>({
                element: r.element,
                collapsible: r.collapsible,
                collapsed: r.collapsed,
                children: this.resortChildren(r, t, !1)
            }));
    }
    getFirstElementChild(e = null) {
        const t = this.getElementLocation(e);
        return this.model.getFirstElementChild(t);
    }
    getLastElementAncestor(e = null) {
        const t = this.getElementLocation(e);
        return this.model.getLastElementAncestor(t);
    }
    has(e) {
        return this.nodes.has(e);
    }
    getListIndex(e) {
        const t = this.getElementLocation(e);
        return this.model.getListIndex(t);
    }
    getListRenderCount(e) {
        const t = this.getElementLocation(e);
        return this.model.getListRenderCount(t);
    }
    isCollapsible(e) {
        const t = this.getElementLocation(e);
        return this.model.isCollapsible(t);
    }
    setCollapsible(e, t) {
        const n = this.getElementLocation(e);
        return this.model.setCollapsible(n, t);
    }
    isCollapsed(e) {
        const t = this.getElementLocation(e);
        return this.model.isCollapsed(t);
    }
    setCollapsed(e, t, n) {
        const i = this.getElementLocation(e);
        return this.model.setCollapsed(i, t, n);
    }
    expandTo(e) {
        const t = this.getElementLocation(e);
        this.model.expandTo(t);
    }
    refilter() {
        this.model.refilter();
    }
    getNode(e = null) {
        if (e === null) return this.model.getNode(this.model.rootRef);
        const t = this.nodes.get(e);
        if (!t) throw new hU(this.user, `Tree element not found: ${e}`);
        return t;
    }
    getNodeLocation(e) {
        return e.element;
    }
    getParentNodeLocation(e) {
        if (e === null) throw new hU(this.user, "Invalid getParentNodeLocation call");
        const t = this.nodes.get(e);
        if (!t) throw new hU(this.user, `Tree element not found: ${e}`);
        const n = this.model.getNodeLocation(t), i = this.model.getParentNodeLocation(n);
        return this.model.getNode(i).element;
    }
    getElementLocation(e) {
        if (e === null) return [];
        const t = this.nodes.get(e);
        if (!t) throw new hU(this.user, `Tree element not found: ${e}`);
        return this.model.getNodeLocation(t);
    }
};

}
