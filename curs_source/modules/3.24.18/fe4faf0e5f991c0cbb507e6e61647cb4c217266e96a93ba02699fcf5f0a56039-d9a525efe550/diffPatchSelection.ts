import { IGt, Jje, NGt, Qje, _Tr, bTr, dTr, fTr, gTr, hTr, lTr, mTr, pTr, uTr, wTr, yTr } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
var __wakaru_ICi_initialized = false;
export function ICi() {
if (__wakaru_ICi_initialized) return;
__wakaru_ICi_initialized = true;
"use strict";
i(Jje, "splitOverlayPaneFromRange"), i(lTr, "normalizeRange"), i(uTr, "diffLinesFromSplitPair"), i(dTr, "formatPatchLine"), i(pTr, "flattenRowRange"), i(mTr, "diffLinesToPatchLines"), i(fTr, "computeHunkHeader"), i(hTr, "unifiedPatchTextFromLines"), i(gTr, "buildDiffPatchSelectionFromLines"), i(bTr, "rangeFromDiffLineSlice"), i(yTr, "diffLineToInteractiveLine"), i(IGt, "buildSelectionFromEndpoints"), i(wTr, "diffLineFingerprint"), i(Qje, "diffRowFingerprint"), i(NGt, "findRowIndexByFingerprint"), i(_Tr, "rebaseSelectionToLineRows");

}
