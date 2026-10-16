import { Pn, Qe } from "./Iwo.js";
import { Y5e } from "./LYd.js";
import { Il, bn } from "./SZu.js";
import { yPl } from "./Ycg.js";
import { Hn } from "./dom_2.js";
import { Rn } from "./extensions.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var SPl, MDn, Zyf;
export { MDn, SPl, Zyf };
var __wakaru_DDn_initialized = false;
export function DDn() {
if (__wakaru_DDn_initialized) return;
__wakaru_DDn_initialized = true;
"use strict";
E(), Mt(), Hn(), Qe(), Rn(), It(), SPl = "button, input, textarea, select, [contenteditable='true']", MDn = Il("glassChatSelectionAddToChatService"), Zyf = class {
    constructor(){
        this._surfaces = new Set;
    }
    register(t) {
        return this._surfaces.add(t), Pn(()=>this._surfaces.delete(t));
    }
    collectMention(t) {
        return this._findSelection(t)?.mention;
    }
    tryExecute(t) {
        const e = this._findSelection(t);
        return e ? (e.surface.insertMention(e.mention), Y5e(), !0) : !1;
    }
    _findSelection(t) {
        const e = t.getSelection();
        if (!e || e.isCollapsed) return;
        let n;
        for (const r of this._surfaces)r.element.ownerDocument.defaultView === t && yPl(e, r.element) && (!n || n.element.contains(r.element)) && (n = r);
        if (!n) return;
        const i = e.toString().trim();
        return i ? {
            surface: n,
            mention: n.createMention(i)
        } : void 0;
    }
}, bn(MDn, Zyf, 1, 1);

}
