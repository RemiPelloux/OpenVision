import { L4, mr } from "./map.js";
import { h } from "./tslib.es6.js";
var U_e;
export { U_e };
var __wakaru_ctt_initialized = false;
export function ctt() {
if (__wakaru_ctt_initialized) return;
__wakaru_ctt_initialized = true;
"use strict";
h(), mr(), U_e = class {
    constructor(){
        this._tagsByWindowId = new Map, this._workbenchWindowToRendererPid = new L4;
    }
    register(e, t, n) {
        const r = Object.keys(t).length > 0;
        if (!(!r && n === void 0)) {
            if (r) {
                const s = {
                    ...this._tagsByWindowId.get(e) ?? {},
                    ...t
                };
                this._tagsByWindowId.set(e, s);
            }
            n !== void 0 && (this._workbenchWindowToRendererPid.delete(e), this._workbenchWindowToRendererPid.set(e, n));
        }
    }
    unregister(e, t) {
        const n = this._tagsByWindowId.get(e);
        if (n === void 0) return;
        const r = {
            ...n
        };
        for (const s of t)delete r[s];
        this._tagsByWindowId.set(e, r);
    }
    removeWindow(e) {
        this._workbenchWindowToRendererPid.delete(e), this._tagsByWindowId.delete(e);
    }
    reconcileWithOpenWorkbenchWindows(e) {
        const t = new Set;
        for (const n of this._tagsByWindowId.keys())t.add(n);
        for (const n of this._workbenchWindowToRendererPid.keys())t.add(n);
        for (const n of t)e.has(n) || this.removeWindow(n);
    }
    getTagsForWorkbenchWindow(e) {
        const t = this._tagsByWindowId.get(e);
        if (!(t === void 0 || Object.keys(t).length === 0)) return {
            ...t
        };
    }
    getTagsForRendererOsPid(e) {
        const t = this._workbenchWindowToRendererPid.getKey(e);
        if (t !== void 0) return this.getTagsForWorkbenchWindow(t);
    }
};

}
