import { $3r, $Ft, A3r, C3r, E3r, HRe, I3r, IFt, MFt, Mhe, N3r, NFt, Nhe, Phe, Rhe, S3r, T3r, WRe, _3r, b3r, f3r, g3r, h3r, k3r, l5i, m3r, s3r, v3r, w3r, x3r, y3r } from "./Iwr.js";
import { Ukr } from "./index_125.js";
import { A5i } from "./index_132.js";
import { SRe } from "./index_6.mjs";
import { i } from "./plugin-brand-icon.js";
var ZRe, M3r, R3r, NP, VRe, P3r, j3r, L3r;
export { L3r, M3r, NP, P3r, R3r, VRe, ZRe, j3r };
var __wakaru_T5i_initialized = false;
export function T5i() {
if (__wakaru_T5i_initialized) return;
__wakaru_T5i_initialized = true;
SRe(), l5i(), Ukr(), A5i(), SRe(), i($Ft, "addClassToHast"), i(m3r, "createPositionConverter"), ZRe = "light-dark()", M3r = [
    "color",
    "background-color"
], i(f3r, "splitToken"), i(h3r, "splitTokens"), i(g3r, "flatTokenVariants"), i(Nhe, "getTokenStyleObject"), i(WRe, "stringifyTokenStyle"), i(b3r, "transformerDecorations"), i(y3r, "verifyIntersections"), i(IFt, "stringify"), R3r = [
    b3r()
], i(Mhe, "getTransformers"), i(w3r, "sortTransformersByEnforcement"), NP = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite"
], VRe = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough"
}, i(_3r, "findSequence"), i(NFt, "parseColor"), i(k3r, "parseSequence"), i(v3r, "createAnsiSequenceParser"), P3r = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff"
}, i(x3r, "createColorPalette"), j3r = {
    black: "#000000",
    red: "#cd3131",
    green: "#0DBC79",
    yellow: "#E5E510",
    blue: "#2472C8",
    magenta: "#BC3FBC",
    cyan: "#11A8CD",
    white: "#E5E5E5",
    brightBlack: "#666666",
    brightRed: "#F14C4C",
    brightGreen: "#23D18B",
    brightYellow: "#F5F543",
    brightBlue: "#3B8EEA",
    brightMagenta: "#D670D6",
    brightCyan: "#29B8DB",
    brightWhite: "#FFFFFF"
}, i(C3r, "tokenizeAnsiWithTheme"), i(S3r, "dimColor"), i(HRe, "codeToTokensBase"), i(Rhe, "codeToTokens"), i(MFt, "mapThemeColors"), i(Phe, "codeToHast"), i(E3r, "tokensToHast"), i(A3r, "mergeWhitespaceTokens"), i(T3r, "splitWhitespaceTokens"), i($3r, "mergeAdjacentStyledTokens"), L3r = s3r, i(I3r, "codeToHtml"), i(N3r, "createHighlighterCoreSync");

}
