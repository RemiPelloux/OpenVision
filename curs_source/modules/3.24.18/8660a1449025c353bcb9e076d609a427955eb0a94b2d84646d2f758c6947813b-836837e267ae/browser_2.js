import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { WIy } from "./ze.js";
var pkr, ftt, MAe, Vde, h9t, _7, bbt, ybt, Zke, rOd, VIy, $8o, vii;
export { $8o, MAe, VIy, Vde, Zke, _7, bbt, ftt, h9t, pkr, rOd, vii, ybt };
var __wakaru_A__initialized = false;
export function A_() {
if (__wakaru_A__initialized) return;
__wakaru_A__initialized = true;
"use strict";
if (E(), Bs(), Gt(), pkr = class {
    constructor(){
        this.mapWindowIdToZoomLevel = new Map, this._onDidChangeZoomLevel = new tt, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor = new Map, this._onDidChangeFullscreen = new tt, this.onDidChangeFullscreen = this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen = new Map;
    }
    getZoomLevel(e) {
        return this.mapWindowIdToZoomLevel.get(this.getWindowId(e)) ?? 0;
    }
    setZoomLevel(e, n) {
        if (this.getZoomLevel(n) === e) return;
        const i = this.getWindowId(n);
        this.mapWindowIdToZoomLevel.set(i, e), this._onDidChangeZoomLevel.fire(i);
    }
    getZoomFactor(e) {
        return this.mapWindowIdToZoomFactor.get(this.getWindowId(e)) ?? 1;
    }
    setZoomFactor(e, n) {
        this.mapWindowIdToZoomFactor.set(this.getWindowId(n), e);
    }
    setFullscreen(e, n) {
        if (this.isFullscreen(n) === e) return;
        const i = this.getWindowId(n);
        this.mapWindowIdToFullScreen.set(i, e), this._onDidChangeFullscreen.fire(i);
    }
    isFullscreen(e) {
        return !!this.mapWindowIdToFullScreen.get(this.getWindowId(e));
    }
    getWindowId(e) {
        return e.vscodeWindowId;
    }
}, pkr.INSTANCE = new pkr, ftt = pkr, MAe = ftt.INSTANCE.onDidChangeZoomLevel, Vde = ftt.INSTANCE.onDidChangeFullscreen, h9t = navigator.userAgent, _7 = h9t.indexOf("Firefox") >= 0, bbt = h9t.indexOf("AppleWebKit") >= 0, ybt = h9t.indexOf("Chrome") >= 0, Zke = !ybt && h9t.indexOf("Safari") >= 0, rOd = !ybt && !Zke && bbt, VIy = h9t.indexOf("Electron/") >= 0, $8o = h9t.indexOf("Android") >= 0, vii = !1, typeof $t.matchMedia == "function") {
    const t = $t.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), e = $t.matchMedia("(display-mode: fullscreen)");
    vii = t.matches, WIy($t, t, ({ matches: n })=>{
        vii && e.matches || (vii = n);
    });
}

}
