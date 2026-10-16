import { Ei, Kv } from "./Iwo.js";
import { l2 } from "./accessibilitySignalService.js";
import { bo } from "./arrays.js";
import { Xs, yo } from "./cancellation.js";
import { hs, rs } from "./commands.js";
import { xw } from "./editorBrowser.js";
import { R5e } from "./editorState.js";
import { FD, yW } from "./editorWorker.js";
import { Pw } from "./extensions_3.js";
import { RMp } from "./formattingEdit.js";
import { It } from "./instantiation.js";
import { FMp, nx1, tx1 } from "./ipa.js";
import { IT, np } from "./iterator.js";
import { Dg, Nd } from "./languageFeatures.js";
import { a7, tL } from "./linkedList.js";
import { Ji } from "./log.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Em, Rh } from "./resolverService.js";
import { Cy } from "./selection.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var A3a, dyi;
export { A3a, dyi };
var __wakaru_WHt_initialized = false;
export function WHt() {
if (__wakaru_WHt_initialized) return;
__wakaru_WHt_initialized = true;
"use strict";
E(), bo(), yo(), Ei(), IT(), a7(), To(), fn(), R5e(), xw(), jc(), Qs(), Cy(), yW(), Em(), RMp(), rs(), Pw(), It(), Dg(), Ji(), l2(), A3a = class QJc {
    static setFormatterSelector(e) {
        return {
            dispose: QJc._selectors.unshift(e)
        };
    }
    static async select(e, n, i, r) {
        if (e.length === 0) return;
        const s = np.first(QJc._selectors);
        if (s) return await s(e, n, i, r);
    }
}, A3a._selectors = new tL, dyi = A3a, hs.registerCommand("_executeFormatRangeProvider", async function(t, ...e) {
    const [n, i, r] = e;
    Kv(rt.isUri(n)), Kv(qt.isIRange(i));
    const s = t.get(Rh), o = t.get(FD), a = t.get(Nd), l = await s.createModelReference(n);
    try {
        return tx1(o, a, l.object.textEditorModel, qt.lift(i), r, Xs.None);
    } finally{
        l.dispose();
    }
}), hs.registerCommand("_executeFormatDocumentProvider", async function(t, ...e) {
    const [n, i] = e;
    Kv(rt.isUri(n));
    const r = t.get(Rh), s = t.get(FD), o = t.get(Nd), a = await r.createModelReference(n);
    try {
        return nx1(s, o, a.object.textEditorModel, i, Xs.None);
    } finally{
        a.dispose();
    }
}), hs.registerCommand("_executeFormatOnTypeProvider", async function(t, ...e) {
    const [n, i, r, s] = e;
    Kv(rt.isUri(n)), Kv(er.isIPosition(i)), Kv(typeof r == "string");
    const o = t.get(Rh), a = t.get(FD), l = t.get(Nd), c = await o.createModelReference(n);
    try {
        return FMp(a, l, c.object.textEditorModel, er.lift(i), r, s, Xs.None);
    } finally{
        c.dispose();
    }
});

}
