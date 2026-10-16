import { Ct, bt, nh } from "./HVr.js";
import { dr } from "./arrays.js";
import { Gyi } from "./indexTreeModel.js";
import { Eg, _a } from "./iterator.js";
import { Kyi, l_n } from "./objectTreeModel.js";
import { Akg, Xyi, Yyi, iWc, rWc } from "./qIc.js";
import { Wyi, hU, pU } from "./tree.js";
import { x } from "./tslib.es6.js";
var sWc, oWc, aWc, cWc, lWc;
export { aWc, cWc, lWc, oWc, sWc };
var __wakaru_Rkg_initialized = false;
export function Rkg() {
if (__wakaru_Rkg_initialized) return;
__wakaru_Rkg_initialized = true;
"use strict";
x(), Gyi(), Kyi(), pU(), dr(), bt(), Eg(), sWc = (e)=>({
        getId (t) {
            return t.elements.map((n)=>e.getId(n).toString()).join("\0");
        }
    }), oWc = class {
    constructor(e, t = {}){
        this.user = e, this.rootRef = null, this.nodes = new Map, this.model = new l_n(e, t), this.enabled = typeof t.compressionEnabled > "u" ? !0 : t.compressionEnabled, this.identityProvider = t.identityProvider;
    }
    get onDidSpliceRenderedNodes() {
        return this.model.onDidSpliceRenderedNodes;
    }
    get onDidSpliceModel() {
        return this.model.onDidSpliceModel;
    }
    get onDidChangeCollapseState() {
        return this.model.onDidChangeCollapseState;
    }
    get onDidChangeRenderNodeCount() {
        return this.model.onDidChangeRenderNodeCount;
    }
    get size() {
        return this.nodes.size;
    }
    setChildren(e, t = _a.empty(), n) {
        const i = n.diffIdentityProvider && sWc(n.diffIdentityProvider);
        if (e === null) {
            const g = _a.map(t, this.enabled ? Xyi : Yyi);
            this._setChildren(null, g, {
                diffIdentityProvider: i,
                diffDepth: 1 / 0
            });
            return;
        }
        const r = this.nodes.get(e);
        if (!r) throw new hU(this.user, "Unknown compressed tree node");
        const s = this.model.getNode(r), o = this.model.getParentNodeLocation(r), a = this.model.getNode(o), c = iWc(s), l = rWc(c, e, t), u = (this.enabled ? Xyi : Yyi)(l), h = n.diffIdentityProvider ? ((g, f)=>n.diffIdentityProvider.getId(g) === n.diffIdentityProvider.getId(f)) : void 0;
        if (nh(u.element.elements, s.element.elements, h)) {
            this._setChildren(r, u.children || _a.empty(), {
                diffIdentityProvider: i,
                diffDepth: 1
            });
            return;
        }
        const p = a.children.map((g)=>g === s ? u : g);
        this._setChildren(a.element, p, {
            diffIdentityProvider: i,
            diffDepth: s.depth - a.depth
        });
    }
    isCompressionEnabled() {
        return this.enabled;
    }
    setCompressionEnabled(e) {
        if (e === this.enabled) return;
        this.enabled = e;
        const n = this.model.getNode().children, i = _a.map(n, iWc), r = _a.map(i, e ? Xyi : Yyi);
        this._setChildren(null, r, {
            diffIdentityProvider: this.identityProvider,
            diffDepth: 1 / 0
        });
    }
    _setChildren(e, t, n) {
        const i = new Set, r = (o)=>{
            for (const a of o.element.elements)i.add(a), this.nodes.set(a, o.element);
        }, s = (o)=>{
            for (const a of o.element.elements)i.has(a) || this.nodes.delete(a);
        };
        this.model.setChildren(e, t, {
            ...n,
            onDidCreateNode: r,
            onDidDeleteNode: s
        });
    }
    has(e) {
        return this.nodes.has(e);
    }
    getListIndex(e) {
        const t = this.getCompressedNode(e);
        return this.model.getListIndex(t);
    }
    getListRenderCount(e) {
        const t = this.getCompressedNode(e);
        return this.model.getListRenderCount(t);
    }
    getNode(e) {
        if (typeof e > "u") return this.model.getNode();
        const t = this.getCompressedNode(e);
        return this.model.getNode(t);
    }
    getNodeLocation(e) {
        const t = this.model.getNodeLocation(e);
        return t === null ? null : t.elements[t.elements.length - 1];
    }
    getParentNodeLocation(e) {
        const t = this.getCompressedNode(e), n = this.model.getParentNodeLocation(t);
        return n === null ? null : n.elements[n.elements.length - 1];
    }
    getFirstElementChild(e) {
        const t = this.getCompressedNode(e);
        return this.model.getFirstElementChild(t);
    }
    getLastElementAncestor(e) {
        const t = typeof e > "u" ? void 0 : this.getCompressedNode(e);
        return this.model.getLastElementAncestor(t);
    }
    isCollapsible(e) {
        const t = this.getCompressedNode(e);
        return this.model.isCollapsible(t);
    }
    setCollapsible(e, t) {
        const n = this.getCompressedNode(e);
        return this.model.setCollapsible(n, t);
    }
    isCollapsed(e) {
        const t = this.getCompressedNode(e);
        return this.model.isCollapsed(t);
    }
    setCollapsed(e, t, n) {
        const i = this.getCompressedNode(e);
        return this.model.setCollapsed(i, t, n);
    }
    expandTo(e) {
        const t = this.getCompressedNode(e);
        this.model.expandTo(t);
    }
    rerender(e) {
        const t = this.getCompressedNode(e);
        this.model.rerender(t);
    }
    refilter() {
        this.model.refilter();
    }
    resort(e = null, t = !0) {
        const n = this.getCompressedNode(e);
        this.model.resort(n, t);
    }
    getCompressedNode(e) {
        if (e === null) return null;
        const t = this.nodes.get(e);
        if (!t) throw new hU(this.user, `Tree element not found: ${e}`);
        return t;
    }
}, aWc = (e)=>e[e.length - 1], cWc = class nwm {
    constructor(t, n){
        this.unwrapper = t, this.node = n;
    }
    get element() {
        return this.node.element === null ? null : this.unwrapper(this.node.element);
    }
    get children() {
        return this.node.children.map((t)=>new nwm(this.unwrapper, t));
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
}, lWc = class {
    constructor(e, t = {}){
        this.rootRef = null, this.elementMapper = t.elementMapper || aWc;
        const n = (i)=>this.elementMapper(i.elements);
        this.nodeMapper = new Wyi((i)=>new cWc(n, i)), this.model = new oWc(e, Akg(n, t));
    }
    get onDidSpliceModel() {
        return Ct.map(this.model.onDidSpliceModel, ({ insertedNodes: e, deletedNodes: t })=>({
                insertedNodes: e.map((n)=>this.nodeMapper.map(n)),
                deletedNodes: t.map((n)=>this.nodeMapper.map(n))
            }));
    }
    get onDidSpliceRenderedNodes() {
        return Ct.map(this.model.onDidSpliceRenderedNodes, ({ start: e, deleteCount: t, elements: n })=>({
                start: e,
                deleteCount: t,
                elements: n.map((i)=>this.nodeMapper.map(i))
            }));
    }
    get onDidChangeCollapseState() {
        return Ct.map(this.model.onDidChangeCollapseState, ({ node: e, deep: t })=>({
                node: this.nodeMapper.map(e),
                deep: t
            }));
    }
    get onDidChangeRenderNodeCount() {
        return Ct.map(this.model.onDidChangeRenderNodeCount, (e)=>this.nodeMapper.map(e));
    }
    setChildren(e, t = _a.empty(), n = {}) {
        this.model.setChildren(e, t, n);
    }
    isCompressionEnabled() {
        return this.model.isCompressionEnabled();
    }
    setCompressionEnabled(e) {
        this.model.setCompressionEnabled(e);
    }
    has(e) {
        return this.model.has(e);
    }
    getListIndex(e) {
        return this.model.getListIndex(e);
    }
    getListRenderCount(e) {
        return this.model.getListRenderCount(e);
    }
    getNode(e) {
        return this.nodeMapper.map(this.model.getNode(e));
    }
    getNodeLocation(e) {
        return e.element;
    }
    getParentNodeLocation(e) {
        return this.model.getParentNodeLocation(e);
    }
    getFirstElementChild(e) {
        const t = this.model.getFirstElementChild(e);
        return t === null || typeof t > "u" ? t : this.elementMapper(t.elements);
    }
    getLastElementAncestor(e) {
        const t = this.model.getLastElementAncestor(e);
        return t === null || typeof t > "u" ? t : this.elementMapper(t.elements);
    }
    isCollapsible(e) {
        return this.model.isCollapsible(e);
    }
    setCollapsible(e, t) {
        return this.model.setCollapsible(e, t);
    }
    isCollapsed(e) {
        return this.model.isCollapsed(e);
    }
    setCollapsed(e, t, n) {
        return this.model.setCollapsed(e, t, n);
    }
    expandTo(e) {
        return this.model.expandTo(e);
    }
    rerender(e) {
        return this.model.rerender(e);
    }
    refilter() {
        return this.model.refilter();
    }
    resort(e = null, t = !0) {
        return this.model.resort(e, t);
    }
    getCompressedTreeNode(e = null) {
        return this.model.getNode(e);
    }
};

}
