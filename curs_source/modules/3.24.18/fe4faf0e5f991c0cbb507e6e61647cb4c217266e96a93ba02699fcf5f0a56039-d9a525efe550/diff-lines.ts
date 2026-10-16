import { $Ar, AAr, Bge, IAr, MAr, NAr, TAr, nGt, rGt, sd } from "./f6r.js";
import { CCi } from "./index_148.js";
import { i } from "./plugin-brand-icon.js";
var __wakaru_Vje_initialized = false;
export function Vje() {
if (__wakaru_Vje_initialized) return;
__wakaru_Vje_initialized = true;
"use strict";
CCi(), i(Bge, "splitLogicalLines"), i(nGt, "normalizeLineEndings"), i(AAr, "computeInlineChanges"), i(TAr, "diffLinesInternal"), i($Ar, "diffLines"), i(IAr, "collapseWhitespaceOnlyChanges"), i(NAr, "toSplitRenderItems"), i(rGt, "toSplitRenderEntries"), i(sd, "isCollapsedRegion"), i(MAr, "collapseUnchangedRegions");

}
