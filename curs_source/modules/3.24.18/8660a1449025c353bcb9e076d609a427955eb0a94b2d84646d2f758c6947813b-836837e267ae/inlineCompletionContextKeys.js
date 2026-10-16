import { D } from "./Iwo.js";
import { Hi, cn } from "./contextkey.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var G1;
export { G1 };
var __wakaru_myi_initialized = false;
export function myi() {
if (__wakaru_myi_initialized) return;
__wakaru_myi_initialized = true;
"use strict";
E(), Hi(), Bt(), Bt(), G1 = class {
}, G1.inlineSuggestionVisible = new cn("inlineSuggestionVisible", !1, D(1334, null)), G1.inlineSuggestionHasIndentation = new cn("inlineSuggestionHasIndentation", !1, D(1335, null)), G1.inlineSuggestionHasIndentationLessThanTabSize = new cn("inlineSuggestionHasIndentationLessThanTabSize", !0, D(1336, null)), G1.suppressSuggestions = new cn("inlineSuggestionSuppressSuggestions", void 0, D(1337, null)), G1.cursorInIndentation = new cn("cursorInIndentation", !1, D(1338, null)), G1.hasSelection = new cn("editor.hasSelection", !1, D(1339, null)), G1.cursorAtInlineEdit = new cn("cursorAtInlineEdit", !1, D(1340, null)), G1.inlineEditVisible = new cn("inlineEditIsVisible", !1, D(1341, null)), G1.tabShouldJumpToInlineEdit = new cn("tabShouldJumpToInlineEdit", !1, D(1342, null)), G1.tabShouldAcceptInlineEdit = new cn("tabShouldAcceptInlineEdit", !1, D(1343, null)), G1.inInlineEditsPreviewEditor = new cn("inInlineEditsPreviewEditor", !0, D(1344, null));

}
