import { h } from "./tslib.es6.js";
import { Di, aC, iC } from "./window.js";
import C5e from "electron";
var ro, D6;
export { D6, ro };
var __wakaru_hp_initialized = false;
export function hp() {
if (__wakaru_hp_initialized) return;
__wakaru_hp_initialized = true;
"use strict";
h(), Di(), ro = function(e = 1) {
    return {
        width: iC.width,
        height: iC.height,
        mode: e
    };
}, D6 = function() {
    const e = aC.width, t = aC.height, n = C5e.screen.getPrimaryDisplay().workArea, r = Math.max(n.x + n.width / 2 - e / 2, 0), s = Math.max(n.y + n.height / 2 - t / 2, 0);
    return {
        x: r,
        y: s,
        width: e,
        height: t,
        mode: 1
    };
};

}
