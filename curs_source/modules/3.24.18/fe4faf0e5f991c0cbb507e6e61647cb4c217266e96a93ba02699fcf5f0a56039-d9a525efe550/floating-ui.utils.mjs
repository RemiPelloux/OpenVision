import { i } from "./plugin-brand-icon.js";
function ETt(r, e, a) {
    return ES(r, dB(e, a));
}
function SS(r, e) {
    return typeof r == "function" ? r(e) : r;
}
function ek(r) {
    return r.split("-")[0];
}
function OT(r) {
    return r.split("-")[1];
}
function tIe(r) {
    return r === "x" ? "y" : "x";
}
function nIe(r) {
    return r === "y" ? "height" : "width";
}
function e3(r) {
    const e = r[0];
    return e === "t" || e === "b" ? "y" : "x";
}
function rIe(r) {
    return tIe(e3(r));
}
function wQn(r, e, a) {
    a === void 0 && (a = !1);
    const s = OT(r), l = rIe(r), u = nIe(l);
    let p = l === "x" ? s === (a ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return e.reference[u] > e.floating[u] && (p = Sme(p)), [
        p,
        Sme(p)
    ];
}
function _Qn(r) {
    const e = Sme(r);
    return [
        iIe(r),
        e,
        iIe(e)
    ];
}
function iIe(r) {
    return r.includes("start") ? r.replace("start", "end") : r.replace("end", "start");
}
function kQn(r, e, a) {
    switch(r){
        case "top":
        case "bottom":
            return a ? e ? $Tt : TTt : e ? TTt : $Tt;
        case "left":
        case "right":
            return e ? EQn : AQn;
        default:
            return [];
    }
}
function vQn(r, e, a, s) {
    const l = OT(r);
    let u = kQn(ek(r), a === "start", s);
    return l && (u = u.map((p)=>p + "-" + l), e && (u = u.concat(u.map(iIe)))), u;
}
function Sme(r) {
    const e = ek(r);
    return SQn[e] + r.slice(e.length);
}
function xQn(r) {
    var e, a, s, l;
    return {
        top: (e = r.top) != null ? e : 0,
        right: (a = r.right) != null ? a : 0,
        bottom: (s = r.bottom) != null ? s : 0,
        left: (l = r.left) != null ? l : 0
    };
}
function ATt(r) {
    return typeof r != "number" ? xQn(r) : {
        top: r,
        right: r,
        bottom: r,
        left: r
    };
}
function OY(r) {
    const { x: e, y: a, width: s, height: l } = r;
    return {
        width: s,
        height: l,
        top: a,
        left: e,
        right: e + s,
        bottom: a + l,
        x: e,
        y: a
    };
}
var CQn, dB, ES, pB, AS, TS, SQn, TTt, $Tt, EQn, AQn;
export { $Tt, AQn, AS, ATt, CQn, EQn, ES, ETt, OT, OY, SQn, SS, Sme, TS, TTt, _Qn, dB, e3, ek, iIe, kQn, nIe, pB, rIe, tIe, vQn, wQn, xQn };
var __wakaru_$S_initialized = false;
export function $S() {
if (__wakaru_$S_initialized) return;
__wakaru_$S_initialized = true;
CQn = [
    "top",
    "right",
    "bottom",
    "left"
], dB = Math.min, ES = Math.max, pB = Math.round, AS = Math.floor, TS = i((r)=>({
        x: r,
        y: r
    }), "createCoords"), SQn = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}, i(ETt, "clamp"), i(SS, "evaluate"), i(ek, "getSide"), i(OT, "getAlignment"), i(tIe, "getOppositeAxis"), i(nIe, "getAxisLength"), i(e3, "getSideAxis"), i(rIe, "getAlignmentAxis"), i(wQn, "getAlignmentSides"), i(_Qn, "getExpandedPlacements"), i(iIe, "getOppositeAlignmentPlacement"), TTt = [
    "left",
    "right"
], $Tt = [
    "right",
    "left"
], EQn = [
    "top",
    "bottom"
], AQn = [
    "bottom",
    "top"
], i(kQn, "getSideList"), i(vQn, "getOppositeAxisPlacements"), i(Sme, "getOppositePlacement"), i(xQn, "expandPaddingObject"), i(ATt, "getPaddingObject"), i(OY, "rectToClientRect");

}
