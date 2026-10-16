import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Hig, NTt, Wig, brs;
export { Hig, NTt, Wig, brs };
var __wakaru_sEi_initialized = false;
export function sEi() {
if (__wakaru_sEi_initialized) return;
__wakaru_sEi_initialized = true;
"use strict";
E(), Gt(), Hig = class {
    constructor(){
        this._onTriggerAd = new tt, this.onTriggerAd = this._onTriggerAd.event, this._onPreviewAd = new tt, this.onPreviewAd = this._onPreviewAd.event, this._onRequestUserInitiatedAd = new tt, this.onRequestUserInitiatedAd = this._onRequestUserInitiatedAd.event;
    }
    triggerAd() {
        this._onTriggerAd.fire();
    }
    previewAd(t) {
        this._onPreviewAd.fire(t);
    }
    requestUserInitiatedAd(t) {
        this._onRequestUserInitiatedAd.fire(t);
    }
}, NTt = new Hig, Wig = class {
    constructor(){
        this._onDidChangeVisibility = new tt, this._isVisible = !1, this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    }
    get isVisible() {
        return this._isVisible;
    }
    setVisible(t) {
        this._isVisible !== t && (this._isVisible = t, this._onDidChangeVisibility.fire(t));
    }
}, brs = new Wig;

}
