import { Gt, ddn, jpr, o7, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { II, qn } from "./async.js";
import { Dvn, zoi } from "./diff.js";
import { IT, np } from "./iterator.js";
import { cZn, xdn } from "./symbols.js";
import { AHe, bz } from "./tree.js";
import { E } from "./tslib.es6.js";
import { VBt, Voi, Xzo } from "./ze.js";
var MKd;
export { MKd };
var __wakaru_jEr_initialized = false;
export function jEr() {
if (__wakaru_jEr_initialized) return;
__wakaru_jEr_initialized = true;
"use strict";
E(), AHe(), bo(), qn(), cZn(), zoi(), Gt(), IT(), MKd = class {
    constructor(t, e, n = {}){
        this.user = t, this.rootRef = [], this.eventBufferer = new ddn, this._onDidSpliceModel = new tt, this.onDidSpliceModel = this._onDidSpliceModel.event, this._onDidSpliceRenderedNodes = new tt, this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event, this._onDidChangeCollapseState = new tt, this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event), this._onDidChangeRenderNodeCount = new tt, this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event), this.refilterDelayer = new II(xdn), this.collapseByDefault = typeof n.collapseByDefault > "u" ? !1 : n.collapseByDefault, this.allowNonCollapsibleParents = n.allowNonCollapsibleParents ?? !1, this.filter = n.filter, this.autoExpandSingleChildren = typeof n.autoExpandSingleChildren > "u" ? !1 : n.autoExpandSingleChildren, this.root = {
            parent: void 0,
            element: e,
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
    splice(t, e, n = np.empty(), i = {}) {
        if (t.length === 0) throw new bz(this.user, "Invalid tree location");
        i.diffIdentityProvider ? this.spliceSmart(i.diffIdentityProvider, t, e, n, i) : this.spliceSimple(t, e, n, i);
    }
    spliceSmart(t, e, n, i = np.empty(), r, s = r.diffDepth ?? 0) {
        const { parentNode: o } = this.getParentNodeWithListIndex(e);
        if (!o.lastDiffIds) return this.spliceSimple(e, n, i, r);
        const a = [
            ...i
        ], l = e[e.length - 1], c = new Dvn({
            getElements: ()=>o.lastDiffIds
        }, {
            getElements: ()=>[
                    ...o.children.slice(0, l),
                    ...a,
                    ...o.children.slice(l + n)
                ].map((g)=>t.getId(g.element).toString())
        }).ComputeDiff(!1);
        if (c.quitEarly) return o.lastDiffIds = void 0, this.spliceSimple(e, n, a, r);
        const u = e.slice(0, -1), d = (g, f, _)=>{
            if (s > 0) for(let b = 0; b < _; b++)g--, f--, this.spliceSmart(t, [
                ...u,
                g,
                0
            ], Number.MAX_SAFE_INTEGER, a[f].children, r, s - 1);
        };
        let h = Math.min(o.children.length, l + n), p = a.length;
        for (const g of c.changes.sort((f, _)=>_.originalStart - f.originalStart))d(h, p, h - (g.originalStart + g.originalLength)), h = g.originalStart, p = g.modifiedStart - l, this.spliceSimple([
            ...u,
            h
        ], g.originalLength, np.slice(a, p, p + g.modifiedLength), r);
        d(h, p, h);
    }
    spliceSimple(t, e, n = np.empty(), { onDidCreateNode: i, onDidDeleteNode: r, diffIdentityProvider: s }) {
        const { parentNode: o, listIndex: a, revealed: l, visible: c } = this.getParentNodeWithListIndex(t), u = [], d = np.map(n, (k)=>this.createTreeNode(k, o, o.visible ? 1 : 0, l, u, i)), h = t[t.length - 1];
        let p = 0;
        for(let k = h; k >= 0 && k < o.children.length; k--){
            const C = o.children[k];
            if (C.visible) {
                p = C.visibleChildIndex;
                break;
            }
        }
        const g = [];
        let f = 0, _ = 0;
        for (const k of d)g.push(k), _ += k.renderNodeCount, k.visible && (k.visibleChildIndex = p + f++);
        const b = jpr(o.children, h, e, g);
        s ? o.lastDiffIds ? jpr(o.lastDiffIds, h, e, g.map((k)=>s.getId(k.element).toString())) : o.lastDiffIds = o.children.map((k)=>s.getId(k.element).toString()) : o.lastDiffIds = void 0;
        let y = 0;
        for (const k of b)k.visible && y++;
        if (y !== 0) for(let k = h + g.length; k < o.children.length; k++){
            const C = o.children[k];
            C.visible && (C.visibleChildIndex -= y);
        }
        if (o.visibleChildrenCount += f - y, b.length > 0 && r) {
            const k = (C)=>{
                r(C), C.children.forEach(k);
            };
            b.forEach(k);
        }
        if (l && c) {
            const k = b.reduce((C, T)=>C + (T.visible ? T.renderNodeCount : 0), 0);
            this._updateAncestorsRenderNodeCount(o, _ - k), this._onDidSpliceRenderedNodes.fire({
                start: a,
                deleteCount: k,
                elements: u
            });
        }
        this._onDidSpliceModel.fire({
            insertedNodes: g,
            deletedNodes: b
        });
        let S = o;
        for(; S;){
            if (S.visibility === 2) {
                this.refilterDelayer.trigger(()=>this.refilter());
                break;
            }
            S = S.parent;
        }
    }
    rerender(t) {
        if (t.length === 0) throw new bz(this.user, "Invalid tree location");
        const { node: e, listIndex: n, revealed: i } = this.getTreeNodeWithListIndex(t);
        e.visible && i && this._onDidSpliceRenderedNodes.fire({
            start: n,
            deleteCount: 1,
            elements: [
                e
            ]
        });
    }
    has(t) {
        return this.hasTreeNode(t);
    }
    getListIndex(t) {
        const { listIndex: e, visible: n, revealed: i } = this.getTreeNodeWithListIndex(t);
        return n && i ? e : -1;
    }
    getListRenderCount(t) {
        return this.getTreeNode(t).renderNodeCount;
    }
    isCollapsible(t) {
        return this.getTreeNode(t).collapsible;
    }
    setCollapsible(t, e) {
        const n = this.getTreeNode(t);
        typeof e > "u" && (e = !n.collapsible);
        const i = {
            collapsible: e
        };
        return this.eventBufferer.bufferEvents(()=>this._setCollapseState(t, i));
    }
    isCollapsed(t) {
        return this.getTreeNode(t).collapsed;
    }
    setCollapsed(t, e, n) {
        const i = this.getTreeNode(t);
        typeof e > "u" && (e = !i.collapsed);
        const r = {
            collapsed: e,
            recursive: n || !1
        };
        return this.eventBufferer.bufferEvents(()=>this._setCollapseState(t, r));
    }
    _setCollapseState(t, e) {
        const { node: n, listIndex: i, revealed: r } = this.getTreeNodeWithListIndex(t), s = this._setListNodeCollapseState(n, i, r, e);
        if (n !== this.root && this.autoExpandSingleChildren && s && !Xzo(e) && n.collapsible && !n.collapsed && !e.recursive) {
            let o = -1;
            for(let a = 0; a < n.children.length; a++)if (n.children[a].visible) if (o > -1) {
                o = -1;
                break;
            } else o = a;
            o > -1 && this._setCollapseState([
                ...t,
                o
            ], e);
        }
        return s;
    }
    _setListNodeCollapseState(t, e, n, i) {
        const r = this._setNodeCollapseState(t, i, !1);
        if (!n || !t.visible || !r) return r;
        const s = t.renderNodeCount, o = this.updateNodeAfterCollapseChange(t), a = s - (e === -1 ? 0 : 1);
        return this._onDidSpliceRenderedNodes.fire({
            start: e + 1,
            deleteCount: a,
            elements: o.slice(1)
        }), r;
    }
    _setNodeCollapseState(t, e, n) {
        let i;
        if (t === this.root ? i = !1 : (Xzo(e) ? (i = t.collapsible !== e.collapsible, t.collapsible = e.collapsible) : t.collapsible ? (i = t.collapsed !== e.collapsed, t.collapsed = e.collapsed) : i = !1, i && this._onDidChangeCollapseState.fire({
            node: t,
            deep: n
        })), !Xzo(e) && e.recursive) for (const r of t.children)i = this._setNodeCollapseState(r, e, !0) || i;
        return i;
    }
    expandTo(t) {
        this.eventBufferer.bufferEvents(()=>{
            let e = this.getTreeNode(t);
            for(; e.parent;)e = e.parent, t = t.slice(0, t.length - 1), e.collapsed && this._setCollapseState(t, {
                collapsed: !1,
                recursive: !1
            });
        });
    }
    refilter() {
        const t = this.root.renderNodeCount, e = this.updateNodeAfterFilterChange(this.root);
        this._onDidSpliceRenderedNodes.fire({
            start: 0,
            deleteCount: t,
            elements: e
        }), this.refilterDelayer.cancel();
    }
    createTreeNode(t, e, n, i, r, s) {
        const o = {
            parent: e,
            element: t.element,
            children: [],
            depth: e.depth + 1,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: typeof t.collapsible == "boolean" ? t.collapsible : typeof t.collapsed < "u",
            collapsed: typeof t.collapsed > "u" ? this.collapseByDefault : t.collapsed,
            renderNodeCount: 1,
            visibility: 1,
            visible: !0,
            filterData: void 0
        }, a = this._filterNode(o, n);
        o.visibility = a, i && r.push(o);
        const l = t.children || np.empty(), c = i && a !== 0 && !o.collapsed;
        let u = 0, d = 1;
        for (const h of l){
            const p = this.createTreeNode(h, o, a, c, r, s);
            o.children.push(p), d += p.renderNodeCount, p.visible && (p.visibleChildIndex = u++);
        }
        return this.allowNonCollapsibleParents || (o.collapsible = o.collapsible || o.children.length > 0), o.visibleChildrenCount = u, o.visible = a === 2 ? u > 0 : a === 1, o.visible ? o.collapsed || (o.renderNodeCount = d) : (o.renderNodeCount = 0, i && r.pop()), s?.(o), o;
    }
    updateNodeAfterCollapseChange(t) {
        const e = t.renderNodeCount, n = [];
        return this._updateNodeAfterCollapseChange(t, n), this._updateAncestorsRenderNodeCount(t.parent, n.length - e), n;
    }
    _updateNodeAfterCollapseChange(t, e) {
        if (t.visible === !1) return 0;
        if (e.push(t), t.renderNodeCount = 1, !t.collapsed) for (const n of t.children)t.renderNodeCount += this._updateNodeAfterCollapseChange(n, e);
        return this._onDidChangeRenderNodeCount.fire(t), t.renderNodeCount;
    }
    updateNodeAfterFilterChange(t) {
        const e = t.renderNodeCount, n = [];
        return this._updateNodeAfterFilterChange(t, t.visible ? 1 : 0, n), this._updateAncestorsRenderNodeCount(t.parent, n.length - e), n;
    }
    _updateNodeAfterFilterChange(t, e, n, i = !0) {
        let r;
        if (t !== this.root) {
            if (r = this._filterNode(t, e), r === 0) return t.visible = !1, t.renderNodeCount = 0, !1;
            i && n.push(t);
        }
        const s = n.length;
        t.renderNodeCount = t === this.root ? 0 : 1;
        let o = !1;
        if (!t.collapsed || r !== 0) {
            let a = 0;
            for (const l of t.children)o = this._updateNodeAfterFilterChange(l, r, n, i && !t.collapsed) || o, l.visible && (l.visibleChildIndex = a++);
            t.visibleChildrenCount = a;
        } else t.visibleChildrenCount = 0;
        return t !== this.root && (t.visible = r === 2 ? o : r === 1, t.visibility = r), t.visible ? t.collapsed || (t.renderNodeCount += n.length - s) : (t.renderNodeCount = 0, i && n.pop()), this._onDidChangeRenderNodeCount.fire(t), t.visible;
    }
    _updateAncestorsRenderNodeCount(t, e) {
        if (e !== 0) for(; t;)t.renderNodeCount += e, this._onDidChangeRenderNodeCount.fire(t), t = t.parent;
    }
    _filterNode(t, e) {
        const n = this.filter ? this.filter.filter(t.element, e) : 1;
        return typeof n == "boolean" ? (t.filterData = void 0, n ? 1 : 0) : Voi(n) ? (t.filterData = n.data, VBt(n.visibility)) : (t.filterData = void 0, VBt(n));
    }
    hasTreeNode(t, e = this.root) {
        if (!t || t.length === 0) return !0;
        const [n, ...i] = t;
        return n < 0 || n > e.children.length ? !1 : this.hasTreeNode(i, e.children[n]);
    }
    getTreeNode(t, e = this.root) {
        if (!t || t.length === 0) return e;
        const [n, ...i] = t;
        if (n < 0 || n > e.children.length) throw new bz(this.user, "Invalid tree location");
        return this.getTreeNode(i, e.children[n]);
    }
    getTreeNodeWithListIndex(t) {
        if (t.length === 0) return {
            node: this.root,
            listIndex: -1,
            revealed: !0,
            visible: !1
        };
        const { parentNode: e, listIndex: n, revealed: i, visible: r } = this.getParentNodeWithListIndex(t), s = t[t.length - 1];
        if (s < 0 || s > e.children.length) throw new bz(this.user, "Invalid tree location");
        const o = e.children[s];
        return {
            node: o,
            listIndex: n,
            revealed: i,
            visible: r && o.visible
        };
    }
    getParentNodeWithListIndex(t, e = this.root, n = 0, i = !0, r = !0) {
        const [s, ...o] = t;
        if (s < 0 || s > e.children.length) throw new bz(this.user, "Invalid tree location");
        for(let a = 0; a < s; a++)n += e.children[a].renderNodeCount;
        return i = i && !e.collapsed, r = r && e.visible, o.length === 0 ? {
            parentNode: e,
            listIndex: n,
            revealed: i,
            visible: r
        } : this.getParentNodeWithListIndex(o, e.children[s], n + 1, i, r);
    }
    getNode(t = []) {
        return this.getTreeNode(t);
    }
    getNodeLocation(t) {
        const e = [];
        let n = t;
        for(; n.parent;)e.push(n.parent.children.indexOf(n)), n = n.parent;
        return e.reverse();
    }
    getParentNodeLocation(t) {
        if (t.length !== 0) return t.length === 1 ? [] : o7(t)[0];
    }
    getFirstElementChild(t) {
        const e = this.getTreeNode(t);
        if (e.children.length !== 0) return e.children[0].element;
    }
    getLastElementAncestor(t = []) {
        const e = this.getTreeNode(t);
        if (e.children.length !== 0) return this._getLastElementAncestor(e);
    }
    _getLastElementAncestor(t) {
        return t.children.length === 0 ? t.element : this._getLastElementAncestor(t.children[t.children.length - 1]);
    }
};

}
