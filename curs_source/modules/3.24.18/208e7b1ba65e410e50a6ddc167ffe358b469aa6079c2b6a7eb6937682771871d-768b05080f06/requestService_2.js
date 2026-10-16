import { at, ot } from "./configuration.js";
import { Fr, ii } from "./environment.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Ilt, vb } from "./requestService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { net as Alt } from "electron";
function Mlt(e) {
    return Alt.request;
}
var Tb;
export { Mlt, Tb };
var __wakaru_Plt_initialized = false;
export function Plt() {
if (__wakaru_Plt_initialized) return;
__wakaru_Plt_initialized = true;
"use strict";
h(), Ilt(), at(), Fr(), te(), Tb = class extends vb {
    constructor(e, t, n){
        super("local", e, t, n);
    }
    request(e, t) {
        return super.request({
            ...e || {},
            getRawRequest: Mlt,
            isChromiumNetwork: !0
        }, t);
    }
}, Tb = B([
    w(0, ot),
    w(1, ii),
    w(2, Z)
], Tb);

}
