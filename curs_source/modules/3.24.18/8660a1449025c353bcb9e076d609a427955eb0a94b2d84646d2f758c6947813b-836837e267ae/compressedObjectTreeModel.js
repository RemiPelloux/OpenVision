import { Gt, Zm, en } from "./Iwo.js";
import { bo } from "./arrays.js";
import { jEr } from "./indexTreeModel.js";
import { IT, np } from "./iterator.js";
import { GEr, iVo } from "./objectTreeModel.js";
import { AHe, UEr, bz } from "./tree.js";
import { E } from "./tslib.es6.js";
import { QKd, ZKd, qEr, u5y, zEr } from "./ze.js";
var JKd, eYd, tYd, nYd, iYd;
export { JKd, eYd, iYd, nYd, tYd };
var __wakaru_d5y_initialized = false;
export function d5y() {
if (__wakaru_d5y_initialized) return;
__wakaru_d5y_initialized = true;
"use strict";
E(), jEr(), iVo(), AHe(), bo(), Gt(), IT(), JKd = (t)=>({
        getId (e) {
            return e.elements.map((n)=>t.getId(n).toString()).join("\0");
        }
    }), eYd = class {
    constructor(t, e = {}){
        this.user = t, this.rootRef = null, this.nodes = new Map, this.model = new GEr(t, e), this.enabled = typeof e.compressionEnabled > "u" ? !0 : e.compressionEnabled, this.identityProvider = e.identityProvider;
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
    setChildren(t, e = np.empty(), n) {
        const i = n.diffIdentityProvider && JKd(n.diffIdentityProvider);
        if (t === null) {
            const p = np.map(e, this.enabled ? zEr : qEr);
            this._setChildren(null, p, {
                diffIdentityProvider: i,
                diffDepth: 1 / 0
            });
            return;
        }
        const r = this.nodes.get(t);
        if (!r) throw new bz(this.user, "Unknown compressed tree node");
        const s = this.model.getNode(r), o = this.model.getParentNodeLocation(r), a = this.model.getNode(o), l = ZKd(s), c = QKd(l, t, e), u = (this.enabled ? zEr : qEr)(c), d = n.diffIdentityProvider ? ((p, g)=>n.diffIdentityProvider.getId(p) === n.diffIdentityProvider.getId(g)) : void 0;
        if (Zm(u.element.elements, s.element.elements, d)) {
            this._setChildren(r, u.children || np.empty(), {
                diffIdentityProvider: i,
                diffDepth: 1
            });
            return;
        }
        const h = a.children.map((p)=>p === s ? u : p);
        this._setChildren(a.element, h, {
            diffIdentityProvider: i,
            diffDepth: s.depth - a.depth
        });
    }
    isCompressionEnabled() {
        return this.enabled;
    }
    setCompressionEnabled(t) {
        if (t === this.enabled) return;
        this.enabled = t;
        const n = this.model.getNode().children, i = np.map(n, ZKd), r = np.map(i, t ? zEr : qEr);
        this._setChildren(null, r, {
            diffIdentityProvider: this.identityProvider,
            diffDepth: 1 / 0
        });
    }
    _setChildren(t, e, n) {
        const i = new Set, r = (o)=>{
            for (const a of o.element.elements)i.add(a), this.nodes.set(a, o.element);
        }, s = (o)=>{
            for (const a of o.element.elements)i.has(a) || this.nodes.delete(a);
        };
        this.model.setChildren(t, e, {
            ...n,
            onDidCreateNode: r,
            onDidDeleteNode: s
        });
    }
    has(t) {
        return this.nodes.has(t);
    }
    getListIndex(t) {
        const e = this.getCompressedNode(t);
        return this.model.getListIndex(e);
    }
    getListRenderCount(t) {
        const e = this.getCompressedNode(t);
        return this.model.getListRenderCount(e);
    }
    getNode(t) {
        if (typeof t > "u") return this.model.getNode();
        const e = this.getCompressedNode(t);
        return this.model.getNode(e);
    }
    getNodeLocation(t) {
        const e = this.model.getNodeLocation(t);
        return e === null ? null : e.elements[e.elements.length - 1];
    }
    getParentNodeLocation(t) {
        const e = this.getCompressedNode(t), n = this.model.getParentNodeLocation(e);
        return n === null ? null : n.elements[n.elements.length - 1];
    }
    getFirstElementChild(t) {
        const e = this.getCompressedNode(t);
        return this.model.getFirstElementChild(e);
    }
    getLastElementAncestor(t) {
        const e = typeof t > "u" ? void 0 : this.getCompressedNode(t);
        return this.model.getLastElementAncestor(e);
    }
    isCollapsible(t) {
        const e = this.getCompressedNode(t);
        return this.model.isCollapsible(e);
    }
    setCollapsible(t, e) {
        const n = this.getCompressedNode(t);
        return this.model.setCollapsible(n, e);
    }
    isCollapsed(t) {
        const e = this.getCompressedNode(t);
        return this.model.isCollapsed(e);
    }
    setCollapsed(t, e, n) {
        const i = this.getCompressedNode(t);
        return this.model.setCollapsed(i, e, n);
    }
    expandTo(t) {
        const e = this.getCompressedNode(t);
        this.model.expandTo(e);
    }
    rerender(t) {
        const e = this.getCompressedNode(t);
        this.model.rerender(e);
    }
    refilter() {
        this.model.refilter();
    }
    resort(t = null, e = !0) {
        const n = this.getCompressedNode(t);
        this.model.resort(n, e);
    }
    getCompressedNode(t) {
        if (t === null) return null;
        const e = this.nodes.get(t);
        if (!e) throw new bz(this.user, `Tree element not found: ${t}`);
        return e;
    }
}, tYd = (t)=>t[t.length - 1], nYd = class FRb {
    constructor(e, n){
        this.unwrapper = e, this.node = n;
    }
    get element() {
        return this.node.element === null ? null : this.unwrapper(this.node.element);
    }
    get children() {
        return this.node.children.map((e)=>new FRb(this.unwrapper, e));
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
}, iYd = class {
    constructor(t, e = {}){
        this.rootRef = null, this.elementMapper = e.elementMapper || tYd;
        const n = (i)=>this.elementMapper(i.elements);
        this.nodeMapper = new UEr((i)=>new nYd(n, i)), this.model = new eYd(t, u5y(n, e));
    }
    get onDidSpliceModel() {
        return en.map(this.model.onDidSpliceModel, ({ insertedNodes: t, deletedNodes: e })=>({
                insertedNodes: t.map((n)=>this.nodeMapper.map(n)),
                deletedNodes: e.map((n)=>this.nodeMapper.map(n))
            }));
    }
    get onDidSpliceRenderedNodes() {
        return en.map(this.model.onDidSpliceRenderedNodes, ({ start: t, deleteCount: e, elements: n })=>({
                start: t,
                deleteCount: e,
                elements: n.map((i)=>this.nodeMapper.map(i))
            }));
    }
    get onDidChangeCollapseState() {
        return en.map(this.model.onDidChangeCollapseState, ({ node: t, deep: e })=>({
                node: this.nodeMapper.map(t),
                deep: e
            }));
    }
    get onDidChangeRenderNodeCount() {
        return en.map(this.model.onDidChangeRenderNodeCount, (t)=>this.nodeMapper.map(t));
    }
    setChildren(t, e = np.empty(), n = {}) {
        this.model.setChildren(t, e, n);
    }
    isCompressionEnabled() {
        return this.model.isCompressionEnabled();
    }
    setCompressionEnabled(t) {
        this.model.setCompressionEnabled(t);
    }
    has(t) {
        return this.model.has(t);
    }
    getListIndex(t) {
        return this.model.getListIndex(t);
    }
    getListRenderCount(t) {
        return this.model.getListRenderCount(t);
    }
    getNode(t) {
        return this.nodeMapper.map(this.model.getNode(t));
    }
    getNodeLocation(t) {
        return t.element;
    }
    getParentNodeLocation(t) {
        return this.model.getParentNodeLocation(t);
    }
    getFirstElementChild(t) {
        const e = this.model.getFirstElementChild(t);
        return e === null || typeof e > "u" ? e : this.elementMapper(e.elements);
    }
    getLastElementAncestor(t) {
        const e = this.model.getLastElementAncestor(t);
        return e === null || typeof e > "u" ? e : this.elementMapper(e.elements);
    }
    isCollapsible(t) {
        return this.model.isCollapsible(t);
    }
    setCollapsible(t, e) {
        return this.model.setCollapsible(t, e);
    }
    isCollapsed(t) {
        return this.model.isCollapsed(t);
    }
    setCollapsed(t, e, n) {
        return this.model.setCollapsed(t, e, n);
    }
    expandTo(t) {
        return this.model.expandTo(t);
    }
    rerender(t) {
        return this.model.rerender(t);
    }
    refilter() {
        return this.model.refilter();
    }
    resort(t = null, e = !0) {
        return this.model.resort(t, e);
    }
    getCompressedTreeNode(t = null) {
        return this.model.getNode(t);
    }
};

}
