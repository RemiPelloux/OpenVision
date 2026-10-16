import { she } from "./domFontInfo.js";
import { s2 } from "./editorOptions.js";
import { byt } from "./lineDecorations.js";
import { Q$e } from "./stringBuilder.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { dBt } from "./viewLineRenderer.js";
import { zAe } from "./viewModel.js";
import { Xtt } from "./ze.js";
var YGo, loi, coi;
export { YGo, coi, loi };
var __wakaru_MTr_initialized = false;
export function MTr() {
if (__wakaru_MTr_initialized) return;
__wakaru_MTr_initialized = true;
"use strict";
E(), Ztt(), she(), s2(), Q$e(), byt(), dBt(), zAe(), YGo = Xtt("diffEditorWidget", {
    createHTML: (t)=>t
}), loi = class {
    constructor(t, e = t.map((r)=>null), n = !0, i = !0){
        this.lineTokens = t, this.lineBreakData = e, this.mightContainNonBasicASCII = n, this.mightContainRTL = i;
    }
}, coi = class rXs {
    constructor(e, n, i, r, s, o, a, l, c, u, d, h = !0){
        this.tabSize = e, this.fontInfo = n, this.disableMonospaceOptimizations = i, this.typicalHalfwidthCharacterWidth = r, this.scrollBeyondLastColumn = s, this.lineHeight = o, this.lineDecorationsWidth = a, this.stopRenderingLineAfter = l, this.renderWhitespace = c, this.renderControlCharacters = u, this.fontLigatures = d, this.setWidth = h;
    }
    static fromEditor(e) {
        const n = e.getOptions(), i = n.get(52), r = n.get(151);
        return new rXs(e.getModel()?.getOptions().tabSize || 0, i, n.get(33), i.typicalHalfwidthCharacterWidth, n.get(109), n.get(68), r.decorationsWidth, n.get(122), n.get(104), n.get(99), n.get(53));
    }
    withSetWidth(e) {
        return new rXs(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, this.scrollBeyondLastColumn, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, e);
    }
    withScrollBeyondLastColumn(e) {
        return new rXs(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, e, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, this.setWidth);
    }
};

}
