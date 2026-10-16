import { bt, ve } from "./HVr.js";
import { Sdg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var $mi, nBe, Wqe, nle, _ht, i5, Gqe, bht, ile, pAc, Tdg, Ezr, tmn;
export { $mi, Ezr, Gqe, Tdg, Wqe, _ht, bht, i5, ile, nBe, nle, pAc, tmn };
var __wakaru_n__initialized = false;
export function n_() {
if (__wakaru_n__initialized) return;
__wakaru_n__initialized = true;
"use strict";
if (x(), lo(), bt(), $mi = class {
    constructor(){
        this.mapWindowIdToZoomLevel = new Map, this._onDidChangeZoomLevel = new ve, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor = new Map, this._onDidChangeFullscreen = new ve, this.onDidChangeFullscreen = this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen = new Map;
    }
    getZoomLevel(t) {
        return this.mapWindowIdToZoomLevel.get(this.getWindowId(t)) ?? 0;
    }
    setZoomLevel(t, n) {
        if (this.getZoomLevel(n) === t) return;
        const i = this.getWindowId(n);
        this.mapWindowIdToZoomLevel.set(i, t), this._onDidChangeZoomLevel.fire(i);
    }
    getZoomFactor(t) {
        return this.mapWindowIdToZoomFactor.get(this.getWindowId(t)) ?? 1;
    }
    setZoomFactor(t, n) {
        this.mapWindowIdToZoomFactor.set(this.getWindowId(n), t);
    }
    setFullscreen(t, n) {
        if (this.isFullscreen(n) === t) return;
        const i = this.getWindowId(n);
        this.mapWindowIdToFullScreen.set(i, t), this._onDidChangeFullscreen.fire(i);
    }
    isFullscreen(t) {
        return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t));
    }
    getWindowId(t) {
        return t.vscodeWindowId;
    }
}, $mi.INSTANCE = new $mi, nBe = $mi, Wqe = nBe.INSTANCE.onDidChangeZoomLevel, nle = nBe.INSTANCE.onDidChangeFullscreen, _ht = navigator.userAgent, i5 = _ht.indexOf("Firefox") >= 0, Gqe = _ht.indexOf("AppleWebKit") >= 0, bht = _ht.indexOf("Chrome") >= 0, ile = !bht && _ht.indexOf("Safari") >= 0, pAc = !bht && !ile && Gqe, Tdg = _ht.indexOf("Electron/") >= 0, Ezr = _ht.indexOf("Android") >= 0, tmn = !1, typeof on.matchMedia == "function") {
    const e = on.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), t = on.matchMedia("(display-mode: fullscreen)");
    tmn = e.matches, Sdg(on, e, ({ matches: n })=>{
        tmn && t.matches || (tmn = n);
    });
}

}
