import { Vn } from "./arrays.js";
import { le } from "./async.js";
import { Lr } from "./extpath.js";
import { Pl, mr } from "./map.js";
import { Ce } from "./path.js";
import { oe } from "./platform.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
var Vd, nM, fh, _h, jV, HV, qV, KV, zV, YV, JV, rM, sM, ui;
export { HV, JV, KV, Vd, YV, _h, fh, jV, nM, qV, rM, sM, ui, zV };
var __wakaru_iM_initialized = false;
export function iM() {
if (__wakaru_iM_initialized) return;
__wakaru_iM_initialized = true;
"use strict";
h(), Vn(), le(), Lr(), mr(), Ce(), oe(), jn(), Vd = "**", nM = "/", fh = "[/\\\\]", _h = "[^/\\\\]", jV = /\//g, HV = /^\*\*\/\*\.[\w\.-]+$/, qV = /^\*\*\/([\w\.-]+)\/?$/, KV = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, zV = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, YV = /^\*\*((\/[\w\.-]+)+)\/?$/, JV = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, rM = new Pl(1e4), sM = function() {
    return !1;
}, ui = function() {
    return null;
};

}
