import { Oj, Tk } from "./editOperation.js";
import { Qs, qt } from "./range.js";
import { Ufn, tnt } from "./stableEditorScroll.js";
import { E } from "./tslib.es6.js";
var kWr;
export { kWr };
var __wakaru_RMp_initialized = false;
export function RMp() {
if (__wakaru_RMp_initialized) return;
__wakaru_RMp_initialized = true;
"use strict";
E(), Oj(), Qs(), Ufn(), kWr = class ZJc {
    static _handleEolEdits(e, n) {
        let i;
        const r = [];
        for (const s of n)typeof s.eol == "number" && (i = s.eol), s.range && typeof s.text == "string" && r.push(s);
        return typeof i == "number" && e.hasModel() && e.getModel().pushEOL(i), r;
    }
    static _isFullModelReplaceEdit(e, n) {
        if (!e.hasModel()) return !1;
        const i = e.getModel(), r = i.validateRange(n.range);
        return i.getFullModelRange().equalsRange(r);
    }
    static execute(e, n, i) {
        i && e.pushUndoStop();
        const r = tnt.capture(e), s = ZJc._handleEolEdits(e, n);
        s.length === 1 && ZJc._isFullModelReplaceEdit(e, s[0]) ? e.executeEdits("formatEditsCommand", s.map((o)=>Tk.replace(qt.lift(o.range), o.text))) : e.executeEdits("formatEditsCommand", s.map((o)=>Tk.replaceMove(qt.lift(o.range), o.text))), i && e.pushUndoStop(), r.restoreRelativeVerticalPositionOfCursor(e);
    }
};

}
