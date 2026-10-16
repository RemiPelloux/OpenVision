import { Lvn, YBt } from "./abstractTree.js";
import { d5y, iYd } from "./compressedObjectTreeModel.js";
import { SM } from "./decorators.js";
import { IT, np } from "./iterator.js";
import { GEr, iVo } from "./objectTreeModel.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { h5y, sl } from "./ze.js";
var uhe, sVo, rYd, oVo;
export { oVo, rYd, sVo, uhe };
var __wakaru_aVo_initialized = false;
export function aVo() {
if (__wakaru_aVo_initialized) return;
__wakaru_aVo_initialized = true;
"use strict";
E(), Lvn(), d5y(), iVo(), SM(), IT(), uhe = class extends YBt {
    constructor(t, e, n, i, r = {}){
        super(t, e, n, i, r), this.user = t;
    }
    get onDidChangeCollapseState() {
        return this.model.onDidChangeCollapseState;
    }
    setChildren(t, e = np.empty(), n) {
        this.model.setChildren(t, e, n);
    }
    rerender(t) {
        if (t === void 0) {
            this.view.rerender();
            return;
        }
        this.model.rerender(t);
    }
    updateElementHeight(t, e) {
        const n = this.model.getListIndex(t);
        n !== -1 && this.view.updateElementHeight(n, e);
    }
    resort(t, e = !0) {
        this.model.resort(t, e);
    }
    hasElement(t) {
        return this.model.has(t);
    }
    createModel(t, e) {
        return new GEr(t, e);
    }
}, sVo = class {
    constructor(t, e, n){
        this._compressedTreeNodeProvider = t, this.stickyScrollDelegate = e, this.renderer = n, this.templateId = n.templateId, n.onDidChangeTwistieState && (this.onDidChangeTwistieState = n.onDidChangeTwistieState);
    }
    get compressedTreeNodeProvider() {
        return this._compressedTreeNodeProvider();
    }
    renderTemplate(t) {
        return {
            compressedTreeNode: void 0,
            data: this.renderer.renderTemplate(t)
        };
    }
    renderElement(t, e, n, i) {
        let r = this.stickyScrollDelegate.getCompressedNode(t);
        r || (r = this.compressedTreeNodeProvider.getCompressedTreeNode(t.element)), r.element.elements.length === 1 ? (n.compressedTreeNode = void 0, this.renderer.renderElement(t, e, n.data, i)) : (n.compressedTreeNode = r, this.renderer.renderCompressedElements(r, e, n.data, i));
    }
    disposeElement(t, e, n, i) {
        n.compressedTreeNode ? this.renderer.disposeCompressedElements?.(n.compressedTreeNode, e, n.data, i) : this.renderer.disposeElement?.(t, e, n.data, i);
    }
    disposeTemplate(t) {
        this.renderer.disposeTemplate(t.data);
    }
    renderTwistie(t, e) {
        return this.renderer.renderTwistie ? this.renderer.renderTwistie(t, e) : !1;
    }
}, Re([
    sl
], sVo.prototype, "compressedTreeNodeProvider", null), rYd = class {
    constructor(t){
        this.modelProvider = t, this.compressedStickyNodes = new Map;
    }
    getCompressedNode(t) {
        return this.compressedStickyNodes.get(t);
    }
    constrainStickyScrollNodes(t, e, n) {
        if (this.compressedStickyNodes.clear(), t.length === 0) return [];
        for(let i = 0; i < t.length; i++){
            const r = t[i], s = r.position + r.height;
            if (i + 1 < t.length && s + t[i + 1].height > n || i >= e - 1 && e < t.length) {
                const a = t.slice(0, i), l = t.slice(i), c = this.compressStickyNodes(l);
                return [
                    ...a,
                    c
                ];
            }
        }
        return t;
    }
    compressStickyNodes(t) {
        if (t.length === 0) throw new Error("Can't compress empty sticky nodes");
        const e = this.modelProvider();
        if (!e.isCompressionEnabled()) return t[0];
        const n = [];
        for(let l = 0; l < t.length; l++){
            const c = t[l], u = e.getCompressedTreeNode(c.node.element);
            if (u.element) {
                if (l !== 0 && u.element.incompressible) break;
                n.push(...u.element.elements);
            }
        }
        if (n.length < 2) return t[0];
        const i = t[t.length - 1], r = {
            elements: n,
            incompressible: !1
        }, s = {
            ...i.node,
            children: [],
            element: r
        }, o = new Proxy(t[0].node, {}), a = {
            node: o,
            startIndex: t[0].startIndex,
            endIndex: i.endIndex,
            position: t[0].position,
            height: t[0].height
        };
        return this.compressedStickyNodes.set(o, s), a;
    }
}, oVo = class extends uhe {
    constructor(t, e, n, i, r = {}){
        const s = ()=>this, o = new rYd(()=>this.model), a = i.map((l)=>new sVo(s, o, l));
        super(t, e, n, a, {
            ...h5y(s, r),
            stickyScrollDelegate: o
        });
    }
    setChildren(t, e = np.empty(), n) {
        this.model.setChildren(t, e, n);
    }
    createModel(t, e) {
        return new iYd(t, e);
    }
    updateOptions(t = {}) {
        super.updateOptions(t), typeof t.compressionEnabled < "u" && this.model.setCompressionEnabled(t.compressionEnabled);
    }
    getCompressedTreeNode(t = null) {
        return this.model.getCompressedTreeNode(t);
    }
};

}
