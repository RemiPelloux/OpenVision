import { E } from "./tslib.es6.js";
var hva;
export { hva };
var __wakaru_YIS_initialized = false;
export function YIS() {
if (__wakaru_YIS_initialized) return;
__wakaru_YIS_initialized = true;
"use strict";
E(), hva = {
    lineHeight: "var(--conversation-line-height, var(--cursor-line-height-lg, 22px))",
    textFontSize: "var(--conversation-text-font-size, var(--cursor-font-size-lg, 14px))",
    transcriptRowGap: "var(--react-composer-transcript-row-gap, var(--cursor-spacing-2))"
};

}
