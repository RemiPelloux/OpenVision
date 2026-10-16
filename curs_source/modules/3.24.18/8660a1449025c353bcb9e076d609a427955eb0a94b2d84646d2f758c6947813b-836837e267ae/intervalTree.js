import { E } from "./tslib.es6.js";
import { S8d, _8d, a2, aPy, b8d, cPy, f8d, k8d, lPy, oPy, rPy, rR, sPy, uPy, w8d, y8d } from "./ze.js";
var Yjo, Ey, y0r;
export { Ey, Yjo, y0r };
var __wakaru_mPy_initialized = false;
export function mPy() {
if (__wakaru_mPy_initialized) return;
__wakaru_mPy_initialized = true;
"use strict";
E(), Yjo = class {
    constructor(t, e, n){
        this.metadata = 0, this.parent = this, this.left = this, this.right = this, a2(this, 1), this.start = e, this.end = n, this.delta = 0, this.maxEnd = n, this.id = t, this.ownerId = 0, this.options = null, f8d(this, !1), _8d(this, !1), b8d(this, 1), y8d(this, !1), this.cachedVersionId = 0, this.cachedAbsoluteStart = e, this.cachedAbsoluteEnd = n, this.range = null, rR(this, !1);
    }
    reset(t, e, n, i) {
        this.start = e, this.end = n, this.maxEnd = n, this.cachedVersionId = t, this.cachedAbsoluteStart = e, this.cachedAbsoluteEnd = n, this.range = i;
    }
    setOptions(t) {
        this.options = t;
        const e = this.options.className;
        f8d(this, e === "squiggly-error" || e === "squiggly-warning" || e === "squiggly-info"), _8d(this, this.options.glyphMarginClassName !== null), b8d(this, this.options.stickiness), y8d(this, this.options.collapseOnReplaceEdit);
    }
    setCachedOffsets(t, e, n) {
        this.cachedVersionId !== n && (this.range = null), this.cachedVersionId = n, this.cachedAbsoluteStart = t, this.cachedAbsoluteEnd = e;
    }
    detach() {
        this.parent = null, this.left = null, this.right = null;
    }
}, Ey = new Yjo(null, 0, 0), Ey.parent = Ey, Ey.left = Ey, Ey.right = Ey, a2(Ey, 0), y0r = class {
    constructor(){
        this.root = Ey, this.requestNormalizeDelta = !1;
    }
    intervalSearch(t, e, n, i, r, s) {
        return this.root === Ey ? [] : uPy(this, t, e, n, i, r, s);
    }
    search(t, e, n, i) {
        return this.root === Ey ? [] : S8d(this, t, e, n, i);
    }
    collectNodesFromOwner(t) {
        return lPy(this, t);
    }
    collectNodesPostOrder() {
        return cPy(this);
    }
    insert(t) {
        k8d(this, t), this._normalizeDeltaIfNecessary();
    }
    delete(t) {
        w8d(this, t), this._normalizeDeltaIfNecessary();
    }
    resolveNode(t, e) {
        const n = t;
        let i = 0;
        for(; t !== this.root;)t === t.parent.right && (i += t.parent.delta), t = t.parent;
        const r = n.start + i, s = n.end + i;
        n.setCachedOffsets(r, s, e);
    }
    acceptReplace(t, e, n, i) {
        const r = oPy(this, t, t + e);
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s];
            w8d(this, a);
        }
        this._normalizeDeltaIfNecessary(), aPy(this, t, t + e, n), this._normalizeDeltaIfNecessary();
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s];
            a.start = a.cachedAbsoluteStart, a.end = a.cachedAbsoluteEnd, sPy(a, t, t + e, n, i), a.maxEnd = a.end, k8d(this, a);
        }
        this._normalizeDeltaIfNecessary();
    }
    getAllInOrder() {
        return S8d(this, 0, !1, 0, !1);
    }
    _normalizeDeltaIfNecessary() {
        this.requestNormalizeDelta && (this.requestNormalizeDelta = !1, rPy(this));
    }
};

}
