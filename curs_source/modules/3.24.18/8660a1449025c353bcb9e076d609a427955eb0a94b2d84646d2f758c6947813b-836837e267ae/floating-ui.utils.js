import { E } from "./tslib.es6.js";
var CQo, TQo, EQo, DRe, Hwe, z8t, XHe, ZHe, soh, IQo, xQo, ooh, aoh;
export { CQo, DRe, EQo, Hwe, IQo, TQo, XHe, ZHe, aoh, ooh, soh, xQo, z8t };
var __wakaru_Vnt_initialized = false;
export function Vnt() {
if (__wakaru_Vnt_initialized) return;
__wakaru_Vnt_initialized = true;
E(), CQo = [
    "top",
    "right",
    "bottom",
    "left"
], TQo = [
    "start",
    "end"
], EQo = CQo.reduce((t, e)=>t.concat(e, e + "-" + TQo[0], e + "-" + TQo[1]), []), DRe = Math.min, Hwe = Math.max, z8t = Math.round, XHe = Math.floor, ZHe = (t)=>({
        x: t,
        y: t
    }), soh = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}, IQo = [
    "left",
    "right"
], xQo = [
    "right",
    "left"
], ooh = [
    "top",
    "bottom"
], aoh = [
    "bottom",
    "top"
];

}
