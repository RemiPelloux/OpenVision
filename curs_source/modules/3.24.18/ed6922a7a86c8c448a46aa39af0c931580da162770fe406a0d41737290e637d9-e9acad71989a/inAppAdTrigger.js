import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var E_h, VVt, x_h, KXi;
export { E_h, KXi, VVt, x_h };
var __wakaru_YXi_initialized = false;
export function YXi() {
if (__wakaru_YXi_initialized) return;
__wakaru_YXi_initialized = true;
"use strict";
x(), bt(), E_h = class {
    constructor(){
        this._onTriggerAd = new ve, this.onTriggerAd = this._onTriggerAd.event, this._onPreviewAd = new ve, this.onPreviewAd = this._onPreviewAd.event, this._onRequestUserInitiatedAd = new ve, this.onRequestUserInitiatedAd = this._onRequestUserInitiatedAd.event;
    }
    triggerAd() {
        this._onTriggerAd.fire();
    }
    previewAd(e) {
        this._onPreviewAd.fire(e);
    }
    requestUserInitiatedAd(e) {
        this._onRequestUserInitiatedAd.fire(e);
    }
}, VVt = new E_h, x_h = class {
    constructor(){
        this._onDidChangeVisibility = new ve, this._isVisible = !1, this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    }
    get isVisible() {
        return this._isVisible;
    }
    setVisible(e) {
        this._isVisible !== e && (this._isVisible = e, this._onDidChangeVisibility.fire(e));
    }
}, KXi = new x_h;

}
