import { kr } from "./arrays.js";
import { St } from "./async.js";
import { Je } from "./extpath.js";
import { Tr, Wt } from "./map.js";
import { le } from "./path.js";
import { X } from "./platform.js";
import { Ke } from "./strings.js";
import { w } from "./tslib.es6.js";
var ot, E1, Pt, Dt, pn, mn, gn, _n, yn, vn, wn, S1, A1, pe;
export { A1, Dt, E1, Pt, S1, _n, gn, mn, ot, pe, pn, vn, wn, yn };
var __wakaru_M2_initialized = false;
export function M2() {
if (__wakaru_M2_initialized) return;
__wakaru_M2_initialized = true;
"use strict";
w(), kr(), St(), Je(), Tr(), le(), X(), Ke(), ot = "**", E1 = "/", Pt = "[/\\\\]", Dt = "[^/\\\\]", pn = /\//g, mn = /^\*\*\/\*\.[\w\.-]+$/, gn = /^\*\*\/([\w\.-]+)\/?$/, _n = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, yn = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, vn = /^\*\*((\/[\w\.-]+)+)\/?$/, wn = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, S1 = new Wt(1e4), A1 = function() {
    return !1;
}, pe = function() {
    return null;
};

}
