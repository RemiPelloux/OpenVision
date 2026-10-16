import { ySn } from "./formatNumber.js";
import { E } from "./tslib.es6.js";
var D2a, fCp, h$r, p$r, m$r, N2a, L2a, O2a, F2a, vCp, _Cp, bCp, yCp, SCp, kCp, B2a, U2a, wCp, CCp, j2a, $2a, H2a, TCp, ECp, W2a, ICp, xCp, u0n, ACp, G2a, q2a, z2a, V2a, K2a, g$r, Y2a;
export { $2a, ACp, B2a, CCp, D2a, ECp, F2a, G2a, H2a, ICp, K2a, L2a, N2a, O2a, SCp, TCp, U2a, V2a, W2a, Y2a, _Cp, bCp, fCp, g$r, h$r, j2a, kCp, m$r, p$r, q2a, u0n, vCp, wCp, xCp, yCp, z2a };
var __wakaru_f$r_initialized = false;
export function f$r() {
if (__wakaru_f$r_initialized) return;
__wakaru_f$r_initialized = true;
E(), ySn(), D2a = [
    "\u96F6",
    "\u3007",
    "\u4E00",
    "\u4E8C",
    "\u4E09",
    "\u56DB",
    "\u4E94",
    "\u516D",
    "\u4E03",
    "\u516B",
    "\u4E5D"
], fCp = {
    零: "0",
    "\u3007": "0",
    一: "1",
    二: "2",
    三: "3",
    四: "4",
    五: "5",
    六: "6",
    七: "7",
    八: "8",
    九: "9"
}, h$r = [
    "\u0660",
    "\u0661",
    "\u0662",
    "\u0663",
    "\u0664",
    "\u0665",
    "\u0666",
    "\u0667",
    "\u0668",
    "\u0669"
], p$r = [
    "\u06F0",
    "\u06F1",
    "\u06F2",
    "\u06F3",
    "\u06F4",
    "\u06F5",
    "\u06F6",
    "\u06F7",
    "\u06F8",
    "\u06F9"
], m$r = [
    "\uFF10",
    "\uFF11",
    "\uFF12",
    "\uFF13",
    "\uFF14",
    "\uFF15",
    "\uFF16",
    "\uFF17",
    "\uFF18",
    "\uFF19"
], N2a = [
    "%",
    "\u066A",
    "\uFF05",
    "\uFE6A"
], L2a = [
    "\u2030",
    "\u0609"
], O2a = [
    "\u2212",
    "\uFF0D",
    "\u2012",
    "\u2013",
    "\u2014",
    "\uFE63"
], F2a = [
    "\uFF0B",
    "\uFE62"
], vCp = "\uFF0E", _Cp = "\uFF0C", bCp = new RegExp(`[${h$r.join("")}]`, "g"), yCp = new RegExp(`[${p$r.join("")}]`, "g"), SCp = new RegExp(`[${m$r.join("")}]`, "g"), kCp = new RegExp(`[${D2a.join("")}]`, "g"), B2a = new RegExp(`[${N2a.join("")}]`), U2a = new RegExp(`[${L2a.join("")}]`), wCp = new RegExp(B2a.source, "g"), CCp = new RegExp(U2a.source, "g"), j2a = new RegExp(`[${h$r.join("")}]`), $2a = new RegExp(`[${p$r.join("")}]`), H2a = new RegExp(`[${D2a.join("")}]`), TCp = new RegExp(`[${m$r.join("")}]`), ECp = [
    ".",
    ",",
    vCp,
    _Cp,
    "\u066B",
    "\u066C"
], W2a = /\p{Zs}/u, ICp = [
    "+",
    ...F2a
], xCp = [
    "-",
    ...O2a
], u0n = (t)=>t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ACp = (t)=>t.replace(/[-\\\]^]/g, (e)=>`\\${e}`), G2a = (t)=>`[${t.map(ACp).join("")}]`, q2a = G2a([
    "-"
].concat(O2a)), z2a = G2a([
    "+"
].concat(F2a)), V2a = new RegExp(q2a, "gu"), K2a = new RegExp(z2a, "gu"), g$r = new RegExp(q2a), Y2a = new RegExp(z2a);

}
