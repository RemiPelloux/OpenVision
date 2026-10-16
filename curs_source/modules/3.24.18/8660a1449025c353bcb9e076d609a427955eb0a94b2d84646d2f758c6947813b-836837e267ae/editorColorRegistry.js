import { D } from "./Iwo.js";
import { Ad, Ck } from "./baseColors.js";
import { _b, la, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { Bgn, Fgn, cwe, ew, lwe, tne, x6d } from "./editorColors.js";
import { Bt } from "./nls.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { mn, nne } from "./ze.js";
var t0r, djo, Y9d, w2y, C2y, T2y, Zgn, n0r, hjo, X9d, pjo, Z9d, Ari, Q9d, J9d, eBd, mjo, tBd, nBd, iBd, rBd, sBd, gjo, oBd, aBd, lBd, cBd, uBd, dBd, E2y, hBd, pBd, I2y, x2y, A2y, fjo, mBd, R2y, P2y, gBd, M2y, fBd, D2y, vBd, vjo, _jo, _Bd, bjo, yjo, Sjo, kjo, wjo, Cjo, Tjo, bBd, yBd, SBd, kBd, wBd, CBd, TBd, EBd, IBd, xBd, ABd, RBd, PBd, N2y, L2y;
export { A2y, ABd, Ari, C2y, CBd, Cjo, D2y, E2y, EBd, I2y, IBd, J9d, L2y, M2y, N2y, P2y, PBd, Q9d, R2y, RBd, SBd, Sjo, T2y, TBd, Tjo, X9d, Y9d, Z9d, Zgn, _Bd, _jo, aBd, bBd, bjo, cBd, dBd, djo, eBd, fBd, fjo, gBd, gjo, hBd, hjo, iBd, kBd, kjo, lBd, mBd, mjo, n0r, nBd, oBd, pBd, pjo, rBd, sBd, t0r, tBd, uBd, vBd, vjo, w2y, wBd, wjo, x2y, xBd, yBd, yjo };
var __wakaru_doe_initialized = false;
export function doe() {
if (__wakaru_doe_initialized) return;
__wakaru_doe_initialized = true;
"use strict";
E(), Bt(), _b(), Ap(), Dl(), t0r = mn("editor.lineHighlightBackground", null, D(709, null)), djo = mn("editor.lineHighlightBorder", {
    dark: "#282828",
    light: "#eeeeee",
    hcDark: "#f38518",
    hcLight: Ad
}, D(710, null)), Y9d = mn("editor.rangeHighlightBackground", {
    dark: "#ffffff0b",
    light: "#fdff0033",
    hcDark: null,
    hcLight: null
}, D(711, null), !0), w2y = mn("editor.rangeHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Ck,
    hcLight: Ck
}, D(712, null)), C2y = mn("editor.symbolHighlightBackground", {
    dark: cwe,
    light: cwe,
    hcDark: null,
    hcLight: null
}, D(713, null), !0), T2y = mn("editor.symbolHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Ck,
    hcLight: Ck
}, D(714, null)), Zgn = mn("editorCursor.foreground", {
    dark: "#AEAFAD",
    light: ls.black,
    hcDark: ls.white,
    hcLight: "#0F4A85"
}, D(715, null)), n0r = mn("editorCursor.background", null, D(716, null)), hjo = mn("editorMultiCursor.primary.foreground", Zgn, D(717, null)), X9d = mn("editorMultiCursor.primary.background", n0r, D(718, null)), pjo = mn("editorMultiCursor.secondary.foreground", Zgn, D(719, null)), Z9d = mn("editorMultiCursor.secondary.background", n0r, D(720, null)), Ari = mn("editorWhitespace.foreground", {
    dark: "#e3e4e229",
    light: "#33333333",
    hcDark: "#e3e4e229",
    hcLight: "#CCCCCC"
}, D(721, null)), Q9d = mn("editorLineNumber.foreground", {
    dark: "#858585",
    light: "#237893",
    hcDark: ls.white,
    hcLight: "#292929"
}, D(722, null)), J9d = mn("editorIndentGuide.background", Ari, D(723, null), !1, D(724, null)), eBd = mn("editorIndentGuide.activeBackground", Ari, D(725, null), !1, D(726, null)), mjo = mn("editorIndentGuide.background1", J9d, D(727, null)), tBd = mn("editorIndentGuide.background2", "#00000000", D(728, null)), nBd = mn("editorIndentGuide.background3", "#00000000", D(729, null)), iBd = mn("editorIndentGuide.background4", "#00000000", D(730, null)), rBd = mn("editorIndentGuide.background5", "#00000000", D(731, null)), sBd = mn("editorIndentGuide.background6", "#00000000", D(732, null)), gjo = mn("editorIndentGuide.activeBackground1", eBd, D(733, null)), oBd = mn("editorIndentGuide.activeBackground2", "#00000000", D(734, null)), aBd = mn("editorIndentGuide.activeBackground3", "#00000000", D(735, null)), lBd = mn("editorIndentGuide.activeBackground4", "#00000000", D(736, null)), cBd = mn("editorIndentGuide.activeBackground5", "#00000000", D(737, null)), uBd = mn("editorIndentGuide.activeBackground6", "#00000000", D(738, null)), dBd = mn("editorActiveLineNumber.foreground", {
    dark: "#c6c6c6",
    light: "#0B216F",
    hcDark: Ck,
    hcLight: Ck
}, D(739, null), !1, D(740, null)), E2y = mn("editorLineNumber.activeForeground", dBd, D(741, null)), hBd = mn("editorLineNumber.dimmedForeground", null, D(742, null)), pBd = mn("editorRuler.foreground", {
    dark: "#5A5A5A",
    light: ls.lightgrey,
    hcDark: ls.white,
    hcLight: "#292929"
}, D(743, null)), I2y = mn("editorCodeLens.foreground", {
    dark: "#999999",
    light: "#919191",
    hcDark: "#999999",
    hcLight: "#292929"
}, D(744, null)), x2y = mn("editorBracketMatch.background", {
    dark: "#0064001a",
    light: "#0064001a",
    hcDark: "#0064001a",
    hcLight: "#0000"
}, D(745, null)), A2y = mn("editorBracketMatch.border", {
    dark: "#888",
    light: "#B9B9B9",
    hcDark: Ad,
    hcLight: Ad
}, D(746, null)), fjo = mn("editorOverviewRuler.border", {
    dark: "#7f7f7f4d",
    light: "#7f7f7f4d",
    hcDark: "#7f7f7f4d",
    hcLight: "#666666"
}, D(747, null)), mBd = mn("editorOverviewRuler.background", null, D(748, null)), R2y = mn("editorGutter.background", ew, D(749, null)), P2y = mn("editorUnnecessaryCode.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#fff").transparent(.8),
    hcLight: Ad
}, D(750, null)), gBd = mn("editorUnnecessaryCode.opacity", {
    dark: ls.fromHex("#000a"),
    light: ls.fromHex("#0007"),
    hcDark: null,
    hcLight: null
}, D(751, null)), M2y = mn("editorGhostText.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#fff").transparent(.8),
    hcLight: ls.fromHex("#292929").transparent(.8)
}, D(752, null)), fBd = mn("editorGhostText.foreground", {
    dark: ls.fromHex("#ffffff56"),
    light: ls.fromHex("#0007"),
    hcDark: null,
    hcLight: null
}, D(753, null)), D2y = mn("editorGhostText.background", null, D(754, null)), vBd = new ls(new la(0, 122, 204, .6)), vjo = mn("editorOverviewRuler.rangeHighlightForeground", vBd, D(755, null), !0), _jo = mn("editorOverviewRuler.errorForeground", {
    dark: new ls(new la(255, 18, 18, .7)),
    light: new ls(new la(255, 18, 18, .7)),
    hcDark: new ls(new la(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, D(756, null)), _Bd = mn("editorOverviewRuler.warningForeground", {
    dark: tne,
    light: tne,
    hcDark: Fgn,
    hcLight: Fgn
}, D(757, null)), bjo = mn("editorOverviewRuler.infoForeground", {
    dark: lwe,
    light: lwe,
    hcDark: Bgn,
    hcLight: Bgn
}, D(758, null)), yjo = mn("editorBracketHighlight.foreground1", {
    dark: "#FFD700",
    light: "#0431FAFF",
    hcDark: "#FFD700",
    hcLight: "#0431FAFF"
}, D(759, null)), Sjo = mn("editorBracketHighlight.foreground2", {
    dark: "#DA70D6",
    light: "#319331FF",
    hcDark: "#DA70D6",
    hcLight: "#319331FF"
}, D(760, null)), kjo = mn("editorBracketHighlight.foreground3", {
    dark: "#179FFF",
    light: "#7B3814FF",
    hcDark: "#87CEFA",
    hcLight: "#7B3814FF"
}, D(761, null)), wjo = mn("editorBracketHighlight.foreground4", "#00000000", D(762, null)), Cjo = mn("editorBracketHighlight.foreground5", "#00000000", D(763, null)), Tjo = mn("editorBracketHighlight.foreground6", "#00000000", D(764, null)), bBd = mn("editorBracketHighlight.unexpectedBracket.foreground", {
    dark: new ls(new la(255, 18, 18, .8)),
    light: new ls(new la(255, 18, 18, .8)),
    hcDark: new ls(new la(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, D(765, null)), yBd = mn("editorBracketPairGuide.background1", "#00000000", D(766, null)), SBd = mn("editorBracketPairGuide.background2", "#00000000", D(767, null)), kBd = mn("editorBracketPairGuide.background3", "#00000000", D(768, null)), wBd = mn("editorBracketPairGuide.background4", "#00000000", D(769, null)), CBd = mn("editorBracketPairGuide.background5", "#00000000", D(770, null)), TBd = mn("editorBracketPairGuide.background6", "#00000000", D(771, null)), EBd = mn("editorBracketPairGuide.activeBackground1", "#00000000", D(772, null)), IBd = mn("editorBracketPairGuide.activeBackground2", "#00000000", D(773, null)), xBd = mn("editorBracketPairGuide.activeBackground3", "#00000000", D(774, null)), ABd = mn("editorBracketPairGuide.activeBackground4", "#00000000", D(775, null)), RBd = mn("editorBracketPairGuide.activeBackground5", "#00000000", D(776, null)), PBd = mn("editorBracketPairGuide.activeBackground6", "#00000000", D(777, null)), N2y = mn("editorUnicodeHighlight.border", tne, D(778, null)), L2y = mn("editorUnicodeHighlight.background", x6d, D(779, null)), nne((t, e)=>{
    const n = t.getColor(ew), i = t.getColor(t0r), r = i && !i.isTransparent() ? i : n;
    r && e.addRule(`.monaco-editor .inputarea.ime-input { background-color: ${r}; }`);
});

}
