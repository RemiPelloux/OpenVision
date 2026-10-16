import { Am, cs } from "./Sol.js";
import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { wlC } from "./inlineDiffServiceDebug.css";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var KKv, YKv, XKv, ZKv, QKv, JKv, eYv, tYv, nYv, iYv, rYv, sYv, oYv, aYv, Quc, lYv, cYv, uYv, dYv, hYv, pYv, mYv, o6n, a6n, Aen, rBi, yLs;
export { Aen, JKv, KKv, QKv, Quc, XKv, YKv, ZKv, a6n, aYv, cYv, dYv, eYv, hYv, iYv, lYv, mYv, nYv, o6n, oYv, pYv, rBi, rYv, sYv, tYv, uYv, yLs };
var __wakaru_RlC_initialized = false;
export function RlC() {
if (__wakaru_RlC_initialized) return;
__wakaru_RlC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), FS(), mk(), wlC(), KKv = wt("<div class=detail-row><span class=detail-label>:</span><span>"), YKv = wt("<div class=change-lines><div class=change-lines-header>Removed Lines (<!>):"), XKv = wt("<div class=change-lines><div class=change-lines-header>Added Lines (<!>):"), ZKv = wt("<div class=change-item><div class=change-header>Change <span></span></div><div class=change-info><div>Removed Range: L<!>-</div><div>Added Range: L<!>-"), QKv = wt('<div class="diff-line diff-line-removed"><span class=diff-prefix>-</span><span class=diff-content>'), JKv = wt('<div class="diff-line diff-line-added"><span class=diff-prefix>+</span><span class=diff-content>'), eYv = wt('<div class=text-section><div class=text-section-header><span class=text-length>(<!> lines)</span></div><div class="text-content code-content">'), tYv = wt("<div class=empty-text>No lines"), nYv = wt("<div><span class=line-number></span><span class=line-content>"), iYv = wt('<div class=text-section><div class=text-section-header>Prompt<span class=text-length>(<!> chars)</span></div><div class="text-content prompt-content">'), rYv = wt('<div class=context-subsection><div class=context-label>Above (<!> lines)</div><div class="text-content code-content context-content">'), sYv = wt('<div class=context-subsection><div class=context-label>Below (<!> lines)</div><div class="text-content code-content context-content">'), oYv = wt("<div class=text-section><div class=text-section-header>Context Lines"), aYv = wt("<div class=single-diff-card><div class=single-diff-card-header><span class=type-badge-large></span><span class=card-file></span><span class=card-range></span><span></span><span class=card-id>#</span></div><div class=type-description-row></div><div class=card-properties-grid><div class=property-section><div class=property-section-header>Identity</div></div><div class=property-section><div class=property-section-header>Ranges</div></div><div class=property-section><div class=property-section-header>Flags</div></div><div class=property-section><div class=property-section-header>Callbacks & Metadata</div></div></div><div class=text-section><div class=text-section-header>Changes<span class=text-length>(<!> changes)</span></div><div class=changes-list>"), Quc = wt('<div class="code-line code-line-context"><span class=line-content>'), lYv = wt("<div class=empty-text>No changes"), cYv = wt("<div class=inline-diff-header><h3>Inline Diff Service Debugger</h3><p class=description>Live view of all SingleInlineDiff objects from IInlineDiffService. Each card represents one diff with its complete internal state."), uYv = wt("<span class=current-file-name>(<!>)"), dYv = wt("<div class=inline-diff-controls><label class=filter-checkbox><input type=checkbox><span>Show text content</span></label><label class=filter-checkbox><input type=checkbox><span>Current file only</span></label><span class=diff-count>"), hYv = wt("<div class=diff-cards-list>"), pYv = wt("<div class=inline-diff-content>"), mYv = wt("<div class=empty-state>"), o6n = cs([]), a6n = cs(!1), Aen = cs(null), rBi = cs(!0), yLs = cs((t)=>{
    let e = t(o6n);
    if (t(a6n) && t(Aen)) {
        const n = t(Aen);
        e = e.filter((i)=>i.uri.toString() === n);
    }
    return e;
});

}
