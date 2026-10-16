import { WK } from "./domFontInfo.js";
import { m1 } from "./editorOptions.js";
import { Wze } from "./lineDecorations.js";
import { Iwe } from "./qIc.js";
import { lwe } from "./stringBuilder.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
import { Wpt } from "./viewLineRenderer.js";
import { Cle } from "./viewModel.js";
var Vns, PFt, LFt;
export { LFt, PFt, Vns };
var __wakaru_Lvn_initialized = false;
export function Lvn() {
if (__wakaru_Lvn_initialized) return;
__wakaru_Lvn_initialized = true;
"use strict";
x(), Awe(), WK(), m1(), lwe(), Wze(), Wpt(), Cle(), Vns = Iwe("diffEditorWidget", {
    createHTML: (e)=>e
}), PFt = class {
    constructor(e, t = e.map((r)=>null), n = !0, i = !0){
        this.lineTokens = e, this.lineBreakData = t, this.mightContainNonBasicASCII = n, this.mightContainRTL = i;
    }
}, LFt = class v1r {
    constructor(t, n, i, r, s, o, a, c, l, u, h, p = !0){
        this.tabSize = t, this.fontInfo = n, this.disableMonospaceOptimizations = i, this.typicalHalfwidthCharacterWidth = r, this.scrollBeyondLastColumn = s, this.lineHeight = o, this.lineDecorationsWidth = a, this.stopRenderingLineAfter = c, this.renderWhitespace = l, this.renderControlCharacters = u, this.fontLigatures = h, this.setWidth = p;
    }
    static fromEditor(t) {
        const n = t.getOptions(), i = n.get(52), r = n.get(151);
        return new v1r(t.getModel()?.getOptions().tabSize || 0, i, n.get(33), i.typicalHalfwidthCharacterWidth, n.get(109), n.get(68), r.decorationsWidth, n.get(122), n.get(104), n.get(99), n.get(53));
    }
    withSetWidth(t) {
        return new v1r(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, this.scrollBeyondLastColumn, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, t);
    }
    withScrollBeyondLastColumn(t) {
        return new v1r(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, t, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, this.setWidth);
    }
};

}
