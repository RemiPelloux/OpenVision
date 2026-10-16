import { GFc, HFc, IE, KFc, VFc, afg, ifg, jFc, jT, nfg, ofg, qFc, rfg, sfg, tfg, zFc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Nvi, Rv, ofn;
export { Nvi, Rv, ofn };
var __wakaru_XFc_initialized = false;
export function XFc() {
if (__wakaru_XFc_initialized) return;
__wakaru_XFc_initialized = true;
"use strict";
x(), Nvi = class {
    constructor(e, t, n){
        this.metadata = 0, this.parent = this, this.left = this, this.right = this, IE(this, 1), this.start = t, this.end = n, this.delta = 0, this.maxEnd = n, this.id = e, this.ownerId = 0, this.options = null, HFc(this, !1), GFc(this, !1), VFc(this, 1), jFc(this, !1), this.cachedVersionId = 0, this.cachedAbsoluteStart = t, this.cachedAbsoluteEnd = n, this.range = null, jT(this, !1);
    }
    reset(e, t, n, i) {
        this.start = t, this.end = n, this.maxEnd = n, this.cachedVersionId = e, this.cachedAbsoluteStart = t, this.cachedAbsoluteEnd = n, this.range = i;
    }
    setOptions(e) {
        this.options = e;
        const t = this.options.className;
        HFc(this, t === "squiggly-error" || t === "squiggly-warning" || t === "squiggly-info"), GFc(this, this.options.glyphMarginClassName !== null), VFc(this, this.options.stickiness), jFc(this, this.options.collapseOnReplaceEdit);
    }
    setCachedOffsets(e, t, n) {
        this.cachedVersionId !== n && (this.range = null), this.cachedVersionId = n, this.cachedAbsoluteStart = e, this.cachedAbsoluteEnd = t;
    }
    detach() {
        this.parent = null, this.left = null, this.right = null;
    }
}, Rv = new Nvi(null, 0, 0), Rv.parent = Rv, Rv.left = Rv, Rv.right = Rv, IE(Rv, 0), ofn = class {
    constructor(){
        this.root = Rv, this.requestNormalizeDelta = !1;
    }
    intervalSearch(e, t, n, i, r, s) {
        return this.root === Rv ? [] : afg(this, e, t, n, i, r, s);
    }
    search(e, t, n, i) {
        return this.root === Rv ? [] : qFc(this, e, t, n, i);
    }
    collectNodesFromOwner(e) {
        return sfg(this, e);
    }
    collectNodesPostOrder() {
        return ofg(this);
    }
    insert(e) {
        zFc(this, e), this._normalizeDeltaIfNecessary();
    }
    delete(e) {
        KFc(this, e), this._normalizeDeltaIfNecessary();
    }
    resolveNode(e, t) {
        const n = e;
        let i = 0;
        for(; e !== this.root;)e === e.parent.right && (i += e.parent.delta), e = e.parent;
        const r = n.start + i, s = n.end + i;
        n.setCachedOffsets(r, s, t);
    }
    acceptReplace(e, t, n, i) {
        const r = ifg(this, e, e + t);
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s];
            KFc(this, a);
        }
        this._normalizeDeltaIfNecessary(), rfg(this, e, e + t, n), this._normalizeDeltaIfNecessary();
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s];
            a.start = a.cachedAbsoluteStart, a.end = a.cachedAbsoluteEnd, nfg(a, e, e + t, n, i), a.maxEnd = a.end, zFc(this, a);
        }
        this._normalizeDeltaIfNecessary();
    }
    getAllInOrder() {
        return qFc(this, 0, !1, 0, !1);
    }
    _normalizeDeltaIfNecessary() {
        this.requestNormalizeDelta && (this.requestNormalizeDelta = !1, tfg(this));
    }
};

}
