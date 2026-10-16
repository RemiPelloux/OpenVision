import { x } from "./tslib.es6.js";
var VBn, jBn, wqt, qNh, BIo, B8e, int, Cqt, qBn, Ltr, UIo, rnt, zNh, KNh, YNh, $Io, HIo, zBn, XNh, Ca_;
export { $Io, B8e, BIo, Ca_, Cqt, HIo, KNh, Ltr, UIo, VBn, XNh, YNh, int, jBn, qBn, qNh, rnt, wqt, zBn, zNh };
var __wakaru_WIo_initialized = false;
export function WIo() {
if (__wakaru_WIo_initialized) return;
__wakaru_WIo_initialized = true;
"use strict";
x(), VBn = [
    "bridge",
    "island",
    "stage",
    "origin",
    "context",
    "deferred"
], jBn = [
    "bridge.selector",
    "bridge.keyed",
    "island.syncMount",
    "island.notify",
    "island.flush",
    "stage.confirmGate",
    "stage.adoptAfterPaint"
], wqt = [
    "state",
    "context",
    "deferred",
    "mount"
], qNh = {
    state: "origin",
    context: "context",
    deferred: "deferred",
    mount: void 0
}, BIo = wqt.indexOf("mount"), B8e = 1024, int = 8192, Cqt = 1024, qBn = 256, Ltr = 8, UIo = 1, rnt = jBn.length, zNh = 0, KNh = Uint8Array.from(jBn, (e)=>1 << VBn.findIndex((t)=>e.startsWith(`${t}.`))), YNh = Uint8Array.from(wqt, (e)=>{
    const t = qNh[e];
    return t === void 0 ? 0 : 1 << VBn.indexOf(t);
}), $Io = [
    "overflow"
], HIo = new Uint16Array(Cqt), zBn = Uint8Array.from({
    length: Cqt
}, (e, t)=>t < wqt.length ? t : 0), XNh = new Uint8Array(Cqt), Ca_ = wqt.length;

}
