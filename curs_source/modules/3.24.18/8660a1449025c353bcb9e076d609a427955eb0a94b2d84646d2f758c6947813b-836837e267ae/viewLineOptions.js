import { E } from "./tslib.es6.js";
var Isi;
export { Isi };
var __wakaru_KHo_initialized = false;
export function KHo() {
if (__wakaru_KHo_initialized) return;
__wakaru_KHo_initialized = true;
"use strict";
E(), Isi = class {
    constructor(t, e){
        this.themeType = e;
        const n = t.options, i = n.get(52);
        n.get(40) === "off" ? this.renderWhitespace = n.get(104) : this.renderWhitespace = "none", this.renderControlCharacters = n.get(99), this.spaceWidth = i.spaceWidth, this.middotWidth = i.middotWidth, this.wsmiddotWidth = i.wsmiddotWidth, this.useMonospaceOptimizations = i.isMonospace && !n.get(33), this.canUseHalfwidthRightwardsArrow = i.canUseHalfwidthRightwardsArrow, this.lineHeight = n.get(68), this.stopRenderingLineAfter = n.get(122), this.fontLigatures = n.get(53), this.useGpu = n.get(39) === "on";
    }
    equals(t) {
        return this.themeType === t.themeType && this.renderWhitespace === t.renderWhitespace && this.renderControlCharacters === t.renderControlCharacters && this.spaceWidth === t.spaceWidth && this.middotWidth === t.middotWidth && this.wsmiddotWidth === t.wsmiddotWidth && this.useMonospaceOptimizations === t.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === t.canUseHalfwidthRightwardsArrow && this.lineHeight === t.lineHeight && this.stopRenderingLineAfter === t.stopRenderingLineAfter && this.fontLigatures === t.fontLigatures && this.useGpu === t.useGpu;
    }
};

}
