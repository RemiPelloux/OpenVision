import { bt, jpi, l3, uNt, ve } from "./HVr.js";
import { dr } from "./arrays.js";
import { bn, xg } from "./async.js";
import { a_n, s3t } from "./diff.js";
import { Eg, _a } from "./iterator.js";
import { brs, c_n, ymt } from "./qIc.js";
import { RNt, ght } from "./symbols.js";
import { hU, pU } from "./tree.js";
import { x } from "./tslib.es6.js";
var UHc;
export { UHc };
var __wakaru_Gyi_initialized = false;
export function Gyi() {
if (__wakaru_Gyi_initialized) return;
__wakaru_Gyi_initialized = true;
"use strict";
x(), pU(), dr(), bn(), RNt(), a_n(), bt(), Eg(), UHc = class {
    constructor(e, t, n = {}){
        this.user = e, this.rootRef = [], this.eventBufferer = new uNt, this._onDidSpliceModel = new ve, this.onDidSpliceModel = this._onDidSpliceModel.event, this._onDidSpliceRenderedNodes = new ve, this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event, this._onDidChangeCollapseState = new ve, this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event), this._onDidChangeRenderNodeCount = new ve, this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event), this.refilterDelayer = new xg(ght), this.collapseByDefault = typeof n.collapseByDefault > "u" ? !1 : n.collapseByDefault, this.allowNonCollapsibleParents = n.allowNonCollapsibleParents ?? !1, this.filter = n.filter, this.autoExpandSingleChildren = typeof n.autoExpandSingleChildren > "u" ? !1 : n.autoExpandSingleChildren, this.root = {
            parent: void 0,
            element: t,
            children: [],
            depth: 0,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: !1,
            collapsed: !1,
            renderNodeCount: 0,
            visibility: 1,
            visible: !0,
            filterData: void 0
        };
    }
    splice(e, t, n = _a.empty(), i = {}) {
        if (e.length === 0) throw new hU(this.user, "Invalid tree location");
        i.diffIdentityProvider ? this.spliceSmart(i.diffIdentityProvider, e, t, n, i) : this.spliceSimple(e, t, n, i);
    }
    spliceSmart(e, t, n, i = _a.empty(), r, s = r.diffDepth ?? 0) {
        const { parentNode: o } = this.getParentNodeWithListIndex(t);
        if (!o.lastDiffIds) return this.spliceSimple(t, n, i, r);
        const a = [
            ...i
        ], c = t[t.length - 1], l = new s3t({
            getElements: ()=>o.lastDiffIds
        }, {
            getElements: ()=>[
                    ...o.children.slice(0, c),
                    ...a,
                    ...o.children.slice(c + n)
                ].map((f)=>e.getId(f.element).toString())
        }).ComputeDiff(!1);
        if (l.quitEarly) return o.lastDiffIds = void 0, this.spliceSimple(t, n, a, r);
        const u = t.slice(0, -1), h = (f, v, b)=>{
            if (s > 0) for(let y = 0; y < b; y++)f--, v--, this.spliceSmart(e, [
                ...u,
                f,
                0
            ], Number.MAX_SAFE_INTEGER, a[v].children, r, s - 1);
        };
        let p = Math.min(o.children.length, c + n), g = a.length;
        for (const f of l.changes.sort((v, b)=>b.originalStart - v.originalStart))h(p, g, p - (f.originalStart + f.originalLength)), p = f.originalStart, g = f.modifiedStart - c, this.spliceSimple([
            ...u,
            p
        ], f.originalLength, _a.slice(a, g, g + f.modifiedLength), r);
        h(p, g, p);
    }
    spliceSimple(e, t, n = _a.empty(), { onDidCreateNode: i, onDidDeleteNode: r, diffIdentityProvider: s }) {
        const { parentNode: o, listIndex: a, revealed: c, visible: l } = this.getParentNodeWithListIndex(e), u = [], h = _a.map(n, (A)=>this.createTreeNode(A, o, o.visible ? 1 : 0, c, u, i)), p = e[e.length - 1];
        let g = 0;
        for(let A = p; A >= 0 && A < o.children.length; A--){
            const R = o.children[A];
            if (R.visible) {
                g = R.visibleChildIndex;
                break;
            }
        }
        const f = [];
        let v = 0, b = 0;
        for (const A of h)f.push(A), b += A.renderNodeCount, A.visible && (A.visibleChildIndex = g + v++);
        const y = jpi(o.children, p, t, f);
        s ? o.lastDiffIds ? jpi(o.lastDiffIds, p, t, f.map((A)=>s.getId(A.element).toString())) : o.lastDiffIds = o.children.map((A)=>s.getId(A.element).toString()) : o.lastDiffIds = void 0;
        let T = 0;
        for (const A of y)A.visible && T++;
        if (T !== 0) for(let A = p + f.length; A < o.children.length; A++){
            const R = o.children[A];
            R.visible && (R.visibleChildIndex -= T);
        }
        if (o.visibleChildrenCount += v - T, y.length > 0 && r) {
            const A = (R)=>{
                r(R), R.children.forEach(A);
            };
            y.forEach(A);
        }
        if (c && l) {
            const A = y.reduce((R, D)=>R + (D.visible ? D.renderNodeCount : 0), 0);
            this._updateAncestorsRenderNodeCount(o, b - A), this._onDidSpliceRenderedNodes.fire({
                start: a,
                deleteCount: A,
                elements: u
            });
        }
        this._onDidSpliceModel.fire({
            insertedNodes: f,
            deletedNodes: y
        });
        let E = o;
        for(; E;){
            if (E.visibility === 2) {
                this.refilterDelayer.trigger(()=>this.refilter());
                break;
            }
            E = E.parent;
        }
    }
    rerender(e) {
        if (e.length === 0) throw new hU(this.user, "Invalid tree location");
        const { node: t, listIndex: n, revealed: i } = this.getTreeNodeWithListIndex(e);
        t.visible && i && this._onDidSpliceRenderedNodes.fire({
            start: n,
            deleteCount: 1,
            elements: [
                t
            ]
        });
    }
    has(e) {
        return this.hasTreeNode(e);
    }
    getListIndex(e) {
        const { listIndex: t, visible: n, revealed: i } = this.getTreeNodeWithListIndex(e);
        return n && i ? t : -1;
    }
    getListRenderCount(e) {
        return this.getTreeNode(e).renderNodeCount;
    }
    isCollapsible(e) {
        return this.getTreeNode(e).collapsible;
    }
    setCollapsible(e, t) {
        const n = this.getTreeNode(e);
        typeof t > "u" && (t = !n.collapsible);
        const i = {
            collapsible: t
        };
        return this.eventBufferer.bufferEvents(()=>this._setCollapseState(e, i));
    }
    isCollapsed(e) {
        return this.getTreeNode(e).collapsed;
    }
    setCollapsed(e, t, n) {
        const i = this.getTreeNode(e);
        typeof t > "u" && (t = !i.collapsed);
        const r = {
            collapsed: t,
            recursive: n || !1
        };
        return this.eventBufferer.bufferEvents(()=>this._setCollapseState(e, r));
    }
    _setCollapseState(e, t) {
        const { node: n, listIndex: i, revealed: r } = this.getTreeNodeWithListIndex(e), s = this._setListNodeCollapseState(n, i, r, t);
        if (n !== this.root && this.autoExpandSingleChildren && s && !brs(t) && n.collapsible && !n.collapsed && !t.recursive) {
            let o = -1;
            for(let a = 0; a < n.children.length; a++)if (n.children[a].visible) if (o > -1) {
                o = -1;
                break;
            } else o = a;
            o > -1 && this._setCollapseState([
                ...e,
                o
            ], t);
        }
        return s;
    }
    _setListNodeCollapseState(e, t, n, i) {
        const r = this._setNodeCollapseState(e, i, !1);
        if (!n || !e.visible || !r) return r;
        const s = e.renderNodeCount, o = this.updateNodeAfterCollapseChange(e), a = s - (t === -1 ? 0 : 1);
        return this._onDidSpliceRenderedNodes.fire({
            start: t + 1,
            deleteCount: a,
            elements: o.slice(1)
        }), r;
    }
    _setNodeCollapseState(e, t, n) {
        let i;
        if (e === this.root ? i = !1 : (brs(t) ? (i = e.collapsible !== t.collapsible, e.collapsible = t.collapsible) : e.collapsible ? (i = e.collapsed !== t.collapsed, e.collapsed = t.collapsed) : i = !1, i && this._onDidChangeCollapseState.fire({
            node: e,
            deep: n
        })), !brs(t) && t.recursive) for (const r of e.children)i = this._setNodeCollapseState(r, t, !0) || i;
        return i;
    }
    expandTo(e) {
        this.eventBufferer.bufferEvents(()=>{
            let t = this.getTreeNode(e);
            for(; t.parent;)t = t.parent, e = e.slice(0, e.length - 1), t.collapsed && this._setCollapseState(e, {
                collapsed: !1,
                recursive: !1
            });
        });
    }
    refilter() {
        const e = this.root.renderNodeCount, t = this.updateNodeAfterFilterChange(this.root);
        this._onDidSpliceRenderedNodes.fire({
            start: 0,
            deleteCount: e,
            elements: t
        }), this.refilterDelayer.cancel();
    }
    createTreeNode(e, t, n, i, r, s) {
        const o = {
            parent: t,
            element: e.element,
            children: [],
            depth: t.depth + 1,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: typeof e.collapsible == "boolean" ? e.collapsible : typeof e.collapsed < "u",
            collapsed: typeof e.collapsed > "u" ? this.collapseByDefault : e.collapsed,
            renderNodeCount: 1,
            visibility: 1,
            visible: !0,
            filterData: void 0
        }, a = this._filterNode(o, n);
        o.visibility = a, i && r.push(o);
        const c = e.children || _a.empty(), l = i && a !== 0 && !o.collapsed;
        let u = 0, h = 1;
        for (const p of c){
            const g = this.createTreeNode(p, o, a, l, r, s);
            o.children.push(g), h += g.renderNodeCount, g.visible && (g.visibleChildIndex = u++);
        }
        return this.allowNonCollapsibleParents || (o.collapsible = o.collapsible || o.children.length > 0), o.visibleChildrenCount = u, o.visible = a === 2 ? u > 0 : a === 1, o.visible ? o.collapsed || (o.renderNodeCount = h) : (o.renderNodeCount = 0, i && r.pop()), s?.(o), o;
    }
    updateNodeAfterCollapseChange(e) {
        const t = e.renderNodeCount, n = [];
        return this._updateNodeAfterCollapseChange(e, n), this._updateAncestorsRenderNodeCount(e.parent, n.length - t), n;
    }
    _updateNodeAfterCollapseChange(e, t) {
        if (e.visible === !1) return 0;
        if (t.push(e), e.renderNodeCount = 1, !e.collapsed) for (const n of e.children)e.renderNodeCount += this._updateNodeAfterCollapseChange(n, t);
        return this._onDidChangeRenderNodeCount.fire(e), e.renderNodeCount;
    }
    updateNodeAfterFilterChange(e) {
        const t = e.renderNodeCount, n = [];
        return this._updateNodeAfterFilterChange(e, e.visible ? 1 : 0, n), this._updateAncestorsRenderNodeCount(e.parent, n.length - t), n;
    }
    _updateNodeAfterFilterChange(e, t, n, i = !0) {
        let r;
        if (e !== this.root) {
            if (r = this._filterNode(e, t), r === 0) return e.visible = !1, e.renderNodeCount = 0, !1;
            i && n.push(e);
        }
        const s = n.length;
        e.renderNodeCount = e === this.root ? 0 : 1;
        let o = !1;
        if (!e.collapsed || r !== 0) {
            let a = 0;
            for (const c of e.children)o = this._updateNodeAfterFilterChange(c, r, n, i && !e.collapsed) || o, c.visible && (c.visibleChildIndex = a++);
            e.visibleChildrenCount = a;
        } else e.visibleChildrenCount = 0;
        return e !== this.root && (e.visible = r === 2 ? o : r === 1, e.visibility = r), e.visible ? e.collapsed || (e.renderNodeCount += n.length - s) : (e.renderNodeCount = 0, i && n.pop()), this._onDidChangeRenderNodeCount.fire(e), e.visible;
    }
    _updateAncestorsRenderNodeCount(e, t) {
        if (t !== 0) for(; e;)e.renderNodeCount += t, this._onDidChangeRenderNodeCount.fire(e), e = e.parent;
    }
    _filterNode(e, t) {
        const n = this.filter ? this.filter.filter(e.element, t) : 1;
        return typeof n == "boolean" ? (e.filterData = void 0, n ? 1 : 0) : c_n(n) ? (e.filterData = n.data, ymt(n.visibility)) : (e.filterData = void 0, ymt(n));
    }
    hasTreeNode(e, t = this.root) {
        if (!e || e.length === 0) return !0;
        const [n, ...i] = e;
        return n < 0 || n > t.children.length ? !1 : this.hasTreeNode(i, t.children[n]);
    }
    getTreeNode(e, t = this.root) {
        if (!e || e.length === 0) return t;
        const [n, ...i] = e;
        if (n < 0 || n > t.children.length) throw new hU(this.user, "Invalid tree location");
        return this.getTreeNode(i, t.children[n]);
    }
    getTreeNodeWithListIndex(e) {
        if (e.length === 0) return {
            node: this.root,
            listIndex: -1,
            revealed: !0,
            visible: !1
        };
        const { parentNode: t, listIndex: n, revealed: i, visible: r } = this.getParentNodeWithListIndex(e), s = e[e.length - 1];
        if (s < 0 || s > t.children.length) throw new hU(this.user, "Invalid tree location");
        const o = t.children[s];
        return {
            node: o,
            listIndex: n,
            revealed: i,
            visible: r && o.visible
        };
    }
    getParentNodeWithListIndex(e, t = this.root, n = 0, i = !0, r = !0) {
        const [s, ...o] = e;
        if (s < 0 || s > t.children.length) throw new hU(this.user, "Invalid tree location");
        for(let a = 0; a < s; a++)n += t.children[a].renderNodeCount;
        return i = i && !t.collapsed, r = r && t.visible, o.length === 0 ? {
            parentNode: t,
            listIndex: n,
            revealed: i,
            visible: r
        } : this.getParentNodeWithListIndex(o, t.children[s], n + 1, i, r);
    }
    getNode(e = []) {
        return this.getTreeNode(e);
    }
    getNodeLocation(e) {
        const t = [];
        let n = e;
        for(; n.parent;)t.push(n.parent.children.indexOf(n)), n = n.parent;
        return t.reverse();
    }
    getParentNodeLocation(e) {
        if (e.length !== 0) return e.length === 1 ? [] : l3(e)[0];
    }
    getFirstElementChild(e) {
        const t = this.getTreeNode(e);
        if (t.children.length !== 0) return t.children[0].element;
    }
    getLastElementAncestor(e = []) {
        const t = this.getTreeNode(e);
        if (t.children.length !== 0) return this._getLastElementAncestor(t);
    }
    _getLastElementAncestor(e) {
        return e.children.length === 0 ? e.element : this._getLastElementAncestor(e.children[e.children.length - 1]);
    }
};

}
