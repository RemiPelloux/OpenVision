import { E } from "./tslib.es6.js";
var SW;
export { SW };
var __wakaru_Yqd_initialized = false;
export function Yqd() {
if (__wakaru_Yqd_initialized) return;
__wakaru_Yqd_initialized = true;
"use strict";
E(), SW = {
    enableSplitViewResizing: !0,
    splitViewDefaultRatio: .5,
    renderSideBySide: !0,
    renderMarginRevertIcon: !0,
    renderGutterMenu: !0,
    maxComputationTime: 5e3,
    maxFileSize: 50,
    ignoreTrimWhitespace: !0,
    renderIndicators: !0,
    originalEditable: !1,
    diffCodeLens: !1,
    renderOverviewRuler: !0,
    diffWordWrap: "inherit",
    diffAlgorithm: "advanced",
    accessibilityVerbose: !1,
    experimental: {
        showMoves: !1,
        showEmptyDecorations: !0,
        useTrueInlineView: !1
    },
    hideUnchangedRegions: {
        enabled: !1,
        contextLineCount: 3,
        minimumLineCount: 3,
        revealLineCount: 20
    },
    isInEmbeddedEditor: !1,
    onlyShowAccessibleDiffViewer: !1,
    renderSideBySideInlineBreakpoint: 900,
    useInlineViewWhenSpaceIsLimited: !0,
    compactMode: !1
};

}
