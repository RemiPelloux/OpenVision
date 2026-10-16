import { K0f, V0f, Y0f, jm } from "./command-ids.js";
import { FDi, Gv } from "./glassContextKeys.js";
import { pHv } from "./rich-text-find-bar.react.js";
import { E } from "./tslib.es6.js";
var mHv;
export { mHv };
var __wakaru_fsC_initialized = false;
export function fsC() {
if (__wakaru_fsC_initialized) return;
__wakaru_fsC_initialized = true;
"use strict";
E(), Gv(), jm(), pHv(), mHv = {
    visibleContextKey: FDi.key,
    nextMatchCommandId: K0f,
    previousMatchCommandId: Y0f,
    closeCommandId: V0f,
    nextMatchEvent: "markdownPreviewFindNextMatchRequested",
    previousMatchEvent: "markdownPreviewFindPreviousMatchRequested",
    closeEvent: "markdownPreviewFindCloseRequested",
    dataComponent: "file-tab-markdown-find-bar",
    zIndex: 12
};

}
