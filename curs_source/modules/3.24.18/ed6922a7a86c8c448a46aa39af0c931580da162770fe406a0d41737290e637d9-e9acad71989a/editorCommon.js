import { x } from "./tslib.es6.js";
var VT, bze, OK;
export { OK, VT, bze };
var __wakaru_fwe_initialized = false;
export function fwe() {
if (__wakaru_fwe_initialized) return;
__wakaru_fwe_initialized = true;
"use strict";
x(), VT = ((e)=>(e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate", e))(VT || {}), bze = {
    ICodeEditor: "vs.editor.ICodeEditor",
    IDiffEditor: "vs.editor.IDiffEditor",
    InlineMultiDiffEditor: "cursor.editor.IInlineMultiDiffEditor"
}, OK = ((e)=>(e.CompositionStart = "compositionStart", e.CompositionEnd = "compositionEnd", e.Type = "type", e.ReplacePreviousChar = "replacePreviousChar", e.CompositionType = "compositionType", e.Paste = "paste", e.Cut = "cut", e))(OK || {});

}
