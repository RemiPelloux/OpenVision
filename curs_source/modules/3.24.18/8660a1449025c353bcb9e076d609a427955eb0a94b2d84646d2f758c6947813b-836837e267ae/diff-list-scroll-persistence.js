import { Nt, Pn, Qe, Vn, st } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Dt_;
export { Dt_ };
var __wakaru_DfC_initialized = false;
export function DfC() {
if (__wakaru_DfC_initialized) return;
__wakaru_DfC_initialized = true;
"use strict";
E(), Qe(), Dt_ = class extends st {
    constructor(t){
        super(), this._geometry = t, this._restoreDisposables = this._register(new Vn);
    }
    setViewId(t) {
        this._viewId = t;
    }
    getAnchor() {
        return this._anchor;
    }
    bindViewport(t) {
        t !== this._viewportElement && (this._detachScrollTracking?.(), this._detachScrollTracking = void 0, this._endRestore(), this._viewportElement = t, t && (this._detachScrollTracking = this._attachScrollTracking(t)));
    }
    restore() {
        const t = this._viewportElement, e = this._anchor;
        !t || !e || e.viewId !== this._viewId || this._geometry.getFileIndex(e.filePath) < 0 || this._beginRestore(e);
    }
    dispose() {
        this._detachScrollTracking?.(), this._detachScrollTracking = void 0, this._endRestore(), this._viewportElement = void 0, super.dispose();
    }
    _attachScrollTracking(t) {
        const e = ()=>{
            if (!this._pendingRestore) {
                this._capture();
                return;
            }
            if (Math.abs(t.scrollTop - (this._lastRestoreScrollTop ?? -1)) > 1) {
                this._endRestore(), this._capture();
                return;
            }
            this._applyRestore();
        };
        return t.addEventListener("scroll", e, {
            passive: !0
        }), ()=>t.removeEventListener("scroll", e);
    }
    _capture() {
        if (!this._viewportElement || this._viewId === void 0) return;
        const t = this._geometry.getTopVisibleFilePath();
        if (!t) return;
        const e = this._geometry.getFileCardTopOffsetPx(t);
        e !== void 0 && (this._anchor = {
            filePath: t,
            offsetPx: Math.max(0, -e),
            viewId: this._viewId
        });
    }
    _beginRestore(t) {
        this._endRestore(), this._pendingRestore = {
            filePath: t.filePath,
            offsetPx: t.offsetPx
        }, this._lastRestoreScrollTop = this._viewportElement?.scrollTop;
        const e = new Nt;
        e.add(this._geometry.onDidChangeRowHeight(()=>this._applyRestore()));
        const n = this._viewportElement?.firstElementChild;
        if (n) {
            const i = new ResizeObserver(()=>this._applyRestore());
            i.observe(n), e.add(Pn(()=>i.disconnect()));
        }
        this._restoreDisposables.value = e, this._applyRestore();
    }
    _endRestore() {
        this._pendingRestore = void 0, this._lastRestoreScrollTop = void 0, this._restoreDisposables.clear();
    }
    _applyRestore() {
        const t = this._viewportElement, e = this._pendingRestore;
        if (!t || !e) return;
        const n = this._geometry.getFileIndex(e.filePath);
        if (n < 0) {
            this._endRestore();
            return;
        }
        const i = Math.max(0, t.scrollHeight - t.clientHeight), r = this._geometry.getFileCardTopOffsetPx(e.filePath);
        if (r === void 0) {
            const a = this._geometry.getEstimatedFileTopPx(n) + e.offsetPx, l = Math.min(a, i);
            l !== t.scrollTop && (this._lastRestoreScrollTop = l, t.scrollTo({
                top: l,
                behavior: "instant"
            }));
            return;
        }
        const s = r + e.offsetPx;
        if (Math.abs(s) <= 1) {
            this._endRestore();
            return;
        }
        const o = Math.max(0, Math.min(i, t.scrollTop + s));
        if (o === t.scrollTop) {
            this._endRestore();
            return;
        }
        this._lastRestoreScrollTop = o, t.scrollTo({
            top: o,
            behavior: "instant"
        });
    }
};

}
