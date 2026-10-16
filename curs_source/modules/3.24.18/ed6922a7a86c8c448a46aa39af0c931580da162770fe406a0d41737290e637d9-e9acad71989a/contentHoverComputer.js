import { qu } from "./HVr.js";
import { dr } from "./arrays.js";
import { bn, eW } from "./async.js";
import { x } from "./tslib.es6.js";
var $$c;
export { $$c };
var __wakaru_VSg_initialized = false;
export function VSg() {
if (__wakaru_VSg_initialized) return;
__wakaru_VSg_initialized = true;
"use strict";
x(), dr(), bn(), $$c = class zIa {
    constructor(t, n){
        this._editor = t, this._participants = n;
    }
    static _getLineDecorations(t, n) {
        if (n.type !== 1 && !n.supportsMarkerHover) return [];
        const i = t.getModel(), r = n.range.startLineNumber;
        if (r > i.getLineCount()) return [];
        const s = i.getLineMaxColumn(r);
        return t.getLineDecorations(r).filter((o)=>{
            if (o.options.isWholeLine) return !0;
            const a = o.range.startLineNumber === r ? o.range.startColumn : 1, c = o.range.endLineNumber === r ? o.range.endColumn : s;
            if (o.options.showIfCollapsed) {
                if (a > n.range.startColumn + 1 || n.range.endColumn - 1 > c) return !1;
            } else if (a > n.range.startColumn || n.range.endColumn > c) return !1;
            return !0;
        });
    }
    computeAsync(t, n) {
        const i = t.anchor;
        if (!this._editor.hasModel() || !i) return eW.EMPTY;
        const r = zIa._getLineDecorations(this._editor, i);
        return eW.merge(this._participants.map((s)=>s.computeAsync ? s.computeAsync(i, r, t.source, n) : eW.EMPTY));
    }
    computeSync(t) {
        if (!this._editor.hasModel()) return [];
        const n = t.anchor, i = zIa._getLineDecorations(this._editor, n);
        let r = [];
        for (const s of this._participants)r = r.concat(s.computeSync(n, i, t.source));
        return qu(r);
    }
};

}
