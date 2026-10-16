import { Se, rn } from "./HVr.js";
import { en } from "./dom_2.js";
import { Pn } from "./extensions.js";
import { mi } from "./index_188.js";
import { Ze } from "./instantiation.js";
import { mn, nu, pd, wgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
function bHh(e) {
    return nu(e) ? e : e?.parentElement ?? null;
}
function k__(e, t) {
    const n = bHh(e.anchorNode), i = bHh(e.focusNode);
    return !n || !i || n.closest(FLo) || i.closest(FLo) ? !1 : t.contains(n) && t.contains(i);
}
var FLo, yHh, SHh;
export { FLo, SHh, bHh, k__, yHh };
var __wakaru_kHh_initialized = false;
export function kHh() {
if (__wakaru_kHh_initialized) return;
__wakaru_kHh_initialized = true;
"use strict";
x(), mi(), en(), Se(), Pn(), Ze(), FLo = "button, input, textarea, select, [contenteditable='true']", yHh = pd("glassChatSelectionAddToChatService"), SHh = class {
    constructor(){
        this._surfaces = new Set;
    }
    register(e) {
        return this._surfaces.add(e), rn(()=>this._surfaces.delete(e));
    }
    collectMention(e) {
        return this._findSelection(e)?.mention;
    }
    tryExecute(e) {
        const t = this._findSelection(e);
        return t ? (t.surface.insertMention(t.mention), wgt(), !0) : !1;
    }
    _findSelection(e) {
        const t = e.getSelection();
        if (!t || t.isCollapsed) return;
        let n;
        for (const r of this._surfaces)r.element.ownerDocument.defaultView === e && k__(t, r.element) && (!n || n.element.contains(r.element)) && (n = r);
        if (!n) return;
        const i = t.toString().trim();
        return i ? {
            surface: n,
            mention: n.createMention(i)
        } : void 0;
    }
}, mn(yHh, SHh, 1, 1);

}
