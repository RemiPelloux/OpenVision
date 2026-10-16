import { Ule, kmt } from "./abstractTree.js";
import { ie } from "./actions_2.js";
import { Rkg, lWc } from "./compressedObjectTreeModel.js";
import { sw } from "./decorators.js";
import { Eg, _a } from "./iterator.js";
import { Kyi, l_n } from "./objectTreeModel.js";
import { Dkg, xo } from "./qIc.js";
import { x } from "./tslib.es6.js";
var EJ, xrs, uWc, Irs;
export { EJ, Irs, uWc, xrs };
var __wakaru_Ars_initialized = false;
export function Ars() {
if (__wakaru_Ars_initialized) return;
__wakaru_Ars_initialized = true;
"use strict";
x(), Ule(), Rkg(), Kyi(), sw(), Eg(), EJ = class extends kmt {
    constructor(e, t, n, i, r = {}){
        super(e, t, n, i, r), this.user = e;
    }
    get onDidChangeCollapseState() {
        return this.model.onDidChangeCollapseState;
    }
    setChildren(e, t = _a.empty(), n) {
        this.model.setChildren(e, t, n);
    }
    rerender(e) {
        if (e === void 0) {
            this.view.rerender();
            return;
        }
        this.model.rerender(e);
    }
    updateElementHeight(e, t) {
        const n = this.model.getListIndex(e);
        n !== -1 && this.view.updateElementHeight(n, t);
    }
    resort(e, t = !0) {
        this.model.resort(e, t);
    }
    hasElement(e) {
        return this.model.has(e);
    }
    createModel(e, t) {
        return new l_n(e, t);
    }
}, xrs = class {
    constructor(e, t, n){
        this._compressedTreeNodeProvider = e, this.stickyScrollDelegate = t, this.renderer = n, this.templateId = n.templateId, n.onDidChangeTwistieState && (this.onDidChangeTwistieState = n.onDidChangeTwistieState);
    }
    get compressedTreeNodeProvider() {
        return this._compressedTreeNodeProvider();
    }
    renderTemplate(e) {
        return {
            compressedTreeNode: void 0,
            data: this.renderer.renderTemplate(e)
        };
    }
    renderElement(e, t, n, i) {
        let r = this.stickyScrollDelegate.getCompressedNode(e);
        r || (r = this.compressedTreeNodeProvider.getCompressedTreeNode(e.element)), r.element.elements.length === 1 ? (n.compressedTreeNode = void 0, this.renderer.renderElement(e, t, n.data, i)) : (n.compressedTreeNode = r, this.renderer.renderCompressedElements(r, t, n.data, i));
    }
    disposeElement(e, t, n, i) {
        n.compressedTreeNode ? this.renderer.disposeCompressedElements?.(n.compressedTreeNode, t, n.data, i) : this.renderer.disposeElement?.(e, t, n.data, i);
    }
    disposeTemplate(e) {
        this.renderer.disposeTemplate(e.data);
    }
    renderTwistie(e, t) {
        return this.renderer.renderTwistie ? this.renderer.renderTwistie(e, t) : !1;
    }
}, ie([
    xo
], xrs.prototype, "compressedTreeNodeProvider", null), uWc = class {
    constructor(e){
        this.modelProvider = e, this.compressedStickyNodes = new Map;
    }
    getCompressedNode(e) {
        return this.compressedStickyNodes.get(e);
    }
    constrainStickyScrollNodes(e, t, n) {
        if (this.compressedStickyNodes.clear(), e.length === 0) return [];
        for(let i = 0; i < e.length; i++){
            const r = e[i], s = r.position + r.height;
            if (i + 1 < e.length && s + e[i + 1].height > n || i >= t - 1 && t < e.length) {
                const a = e.slice(0, i), c = e.slice(i), l = this.compressStickyNodes(c);
                return [
                    ...a,
                    l
                ];
            }
        }
        return e;
    }
    compressStickyNodes(e) {
        if (e.length === 0) throw new Error("Can't compress empty sticky nodes");
        const t = this.modelProvider();
        if (!t.isCompressionEnabled()) return e[0];
        const n = [];
        for(let c = 0; c < e.length; c++){
            const l = e[c], u = t.getCompressedTreeNode(l.node.element);
            if (u.element) {
                if (c !== 0 && u.element.incompressible) break;
                n.push(...u.element.elements);
            }
        }
        if (n.length < 2) return e[0];
        const i = e[e.length - 1], r = {
            elements: n,
            incompressible: !1
        }, s = {
            ...i.node,
            children: [],
            element: r
        }, o = new Proxy(e[0].node, {}), a = {
            node: o,
            startIndex: e[0].startIndex,
            endIndex: i.endIndex,
            position: e[0].position,
            height: e[0].height
        };
        return this.compressedStickyNodes.set(o, s), a;
    }
}, Irs = class extends EJ {
    constructor(e, t, n, i, r = {}){
        const s = ()=>this, o = new uWc(()=>this.model), a = i.map((c)=>new xrs(s, o, c));
        super(e, t, n, a, {
            ...Dkg(s, r),
            stickyScrollDelegate: o
        });
    }
    setChildren(e, t = _a.empty(), n) {
        this.model.setChildren(e, t, n);
    }
    createModel(e, t) {
        return new lWc(e, t);
    }
    updateOptions(e = {}) {
        super.updateOptions(e), typeof e.compressionEnabled < "u" && this.model.setCompressionEnabled(e.compressionEnabled);
    }
    getCompressedTreeNode(e = null) {
        return this.model.getCompressedTreeNode(e);
    }
};

}
