import { x } from "./tslib.es6.js";
var Zfn;
export { Zfn };
var __wakaru_Ves_initialized = false;
export function Ves() {
if (__wakaru_Ves_initialized) return;
__wakaru_Ves_initialized = true;
"use strict";
x(), Zfn = class {
    constructor(e, t){
        this.themeType = t;
        const n = e.options, i = n.get(52);
        n.get(40) === "off" ? this.renderWhitespace = n.get(104) : this.renderWhitespace = "none", this.renderControlCharacters = n.get(99), this.spaceWidth = i.spaceWidth, this.middotWidth = i.middotWidth, this.wsmiddotWidth = i.wsmiddotWidth, this.useMonospaceOptimizations = i.isMonospace && !n.get(33), this.canUseHalfwidthRightwardsArrow = i.canUseHalfwidthRightwardsArrow, this.lineHeight = n.get(68), this.stopRenderingLineAfter = n.get(122), this.fontLigatures = n.get(53), this.useGpu = n.get(39) === "on";
    }
    equals(e) {
        return this.themeType === e.themeType && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineHeight === e.lineHeight && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.fontLigatures === e.fontLigatures && this.useGpu === e.useGpu;
    }
};

}
