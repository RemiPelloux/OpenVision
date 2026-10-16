import { Mm } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Ote, qn } from "./async.js";
import { E } from "./tslib.es6.js";
var MVd;
export { MVd };
var __wakaru_TOy_initialized = false;
export function TOy() {
if (__wakaru_TOy_initialized) return;
__wakaru_TOy_initialized = true;
"use strict";
E(), bo(), qn(), MVd = class PJc {
    constructor(e, n){
        this._editor = e, this._participants = n;
    }
    static _getLineDecorations(e, n) {
        if (n.type !== 1 && !n.supportsMarkerHover) return [];
        const i = e.getModel(), r = n.range.startLineNumber;
        if (r > i.getLineCount()) return [];
        const s = i.getLineMaxColumn(r);
        return e.getLineDecorations(r).filter((o)=>{
            if (o.options.isWholeLine) return !0;
            const a = o.range.startLineNumber === r ? o.range.startColumn : 1, l = o.range.endLineNumber === r ? o.range.endColumn : s;
            if (o.options.showIfCollapsed) {
                if (a > n.range.startColumn + 1 || n.range.endColumn - 1 > l) return !1;
            } else if (a > n.range.startColumn || n.range.endColumn > l) return !1;
            return !0;
        });
    }
    computeAsync(e, n) {
        const i = e.anchor;
        if (!this._editor.hasModel() || !i) return Ote.EMPTY;
        const r = PJc._getLineDecorations(this._editor, i);
        return Ote.merge(this._participants.map((s)=>s.computeAsync ? s.computeAsync(i, r, e.source, n) : Ote.EMPTY));
    }
    computeSync(e) {
        if (!this._editor.hasModel()) return [];
        const n = e.anchor, i = PJc._getLineDecorations(this._editor, n);
        let r = [];
        for (const s of this._participants)r = r.concat(s.computeSync(n, i, e.source));
        return Mm(r);
    }
};

}
