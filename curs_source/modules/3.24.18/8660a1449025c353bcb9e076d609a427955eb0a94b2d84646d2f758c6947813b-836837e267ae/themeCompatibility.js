import { LV } from "./BA.js";
import { _b } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { Ari, Y9d, Zgn, doe, gjo, mjo, t0r } from "./editorColorRegistry.js";
import { EUo, IUo, L6d, M6d, MD, Pwr, b5e, cwe, ew } from "./editorColors.js";
import { E } from "./tslib.es6.js";
var Bws, sUf;
export { Bws, sUf };
var __wakaru_gMw_initialized = false;
export function gMw() {
if (__wakaru_gMw_initialized) return;
__wakaru_gMw_initialized = true;
"use strict";
E(), _b(), Ap(), doe(), Bws = {}, LV("background", ew), LV("foreground", MD), LV("selection", b5e), LV("inactiveSelection", M6d), LV("selectionHighlightColor", EUo), LV("findMatchHighlight", cwe), LV("currentFindMatchHighlight", Pwr), LV("hoverHighlight", IUo), LV("wordHighlight", "editor.wordHighlightBackground"), LV("wordHighlightStrong", "editor.wordHighlightStrongBackground"), LV("findRangeHighlight", L6d), LV("findMatchHighlight", "peekViewResult.matchHighlightBackground"), LV("referenceHighlight", "peekViewEditor.matchHighlightBackground"), LV("lineHighlight", t0r), LV("rangeHighlight", Y9d), LV("caret", Zgn), LV("invisibles", Ari), LV("guide", mjo), LV("activeGuide", gjo), sUf = [
    "ansiBlack",
    "ansiRed",
    "ansiGreen",
    "ansiYellow",
    "ansiBlue",
    "ansiMagenta",
    "ansiCyan",
    "ansiWhite",
    "ansiBrightBlack",
    "ansiBrightRed",
    "ansiBrightGreen",
    "ansiBrightYellow",
    "ansiBrightBlue",
    "ansiBrightMagenta",
    "ansiBrightCyan",
    "ansiBrightWhite"
];
for (const t of sUf)LV(t, "terminal." + t);

}
