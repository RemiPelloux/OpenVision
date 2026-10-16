import { Q0n } from "./formatNumber.js";
import { x } from "./tslib.es6.js";
var cFs, _lu, AFi, RFi, DFi, lFs, uFs, dFs, hFs, blu, ylu, Slu, klu, wlu, Clu, pFs, mFs, Tlu, Elu, gFs, fFs, vFs, xlu, Ilu, _Fs, Alu, Rlu, DUt, Dlu, bFs, yFs, SFs, kFs, wFs, MFi, CFs;
export { AFi, Alu, CFs, Clu, DFi, DUt, Dlu, Elu, Ilu, MFi, RFi, Rlu, SFs, Slu, Tlu, _Fs, _lu, bFs, blu, cFs, dFs, fFs, gFs, hFs, kFs, klu, lFs, mFs, pFs, uFs, vFs, wFs, wlu, xlu, yFs, ylu };
var __wakaru_PFi_initialized = false;
export function PFi() {
if (__wakaru_PFi_initialized) return;
__wakaru_PFi_initialized = true;
x(), Q0n(), cFs = [
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
], _lu = {
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
}, AFi = [
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
], RFi = [
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
], DFi = [
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
], lFs = [
    "%",
    "\u066A",
    "\uFF05",
    "\uFE6A"
], uFs = [
    "\u2030",
    "\u0609"
], dFs = [
    "\u2212",
    "\uFF0D",
    "\u2012",
    "\u2013",
    "\u2014",
    "\uFE63"
], hFs = [
    "\uFF0B",
    "\uFE62"
], blu = "\uFF0E", ylu = "\uFF0C", Slu = new RegExp(`[${AFi.join("")}]`, "g"), klu = new RegExp(`[${RFi.join("")}]`, "g"), wlu = new RegExp(`[${DFi.join("")}]`, "g"), Clu = new RegExp(`[${cFs.join("")}]`, "g"), pFs = new RegExp(`[${lFs.join("")}]`), mFs = new RegExp(`[${uFs.join("")}]`), Tlu = new RegExp(pFs.source, "g"), Elu = new RegExp(mFs.source, "g"), gFs = new RegExp(`[${AFi.join("")}]`), fFs = new RegExp(`[${RFi.join("")}]`), vFs = new RegExp(`[${cFs.join("")}]`), xlu = new RegExp(`[${DFi.join("")}]`), Ilu = [
    ".",
    ",",
    blu,
    ylu,
    "\u066B",
    "\u066C"
], _Fs = /\p{Zs}/u, Alu = [
    "+",
    ...hFs
], Rlu = [
    "-",
    ...dFs
], DUt = (e)=>e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Dlu = (e)=>e.replace(/[-\\\]^]/g, (t)=>`\\${t}`), bFs = (e)=>`[${e.map(Dlu).join("")}]`, yFs = bFs([
    "-"
].concat(dFs)), SFs = bFs([
    "+"
].concat(hFs)), kFs = new RegExp(yFs, "gu"), wFs = new RegExp(SFs, "gu"), MFi = new RegExp(yFs), CFs = new RegExp(SFs);

}
