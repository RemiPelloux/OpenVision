import { Qe, st } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { hz, sBt } from "./viewEvents.js";
var _yt;
export { _yt };
var __wakaru_cBt_initialized = false;
export function cBt() {
if (__wakaru_cBt_initialized) return;
__wakaru_cBt_initialized = true;
"use strict";
E(), Qe(), sBt(), _yt = class extends st {
    constructor(){
        super(), this._shouldRender = !0;
    }
    shouldRender() {
        return this._shouldRender;
    }
    forceShouldRender() {
        this._shouldRender = !0;
    }
    setShouldRender() {
        this._shouldRender = !0;
    }
    onDidRender() {
        this._shouldRender = !1;
    }
    onCompositionStart(t) {
        return !1;
    }
    onCompositionEnd(t) {
        return !1;
    }
    onConfigurationChanged(t) {
        return !1;
    }
    onCursorStateChanged(t) {
        return !1;
    }
    onDecorationsChanged(t) {
        return !1;
    }
    onFlushed(t) {
        return !1;
    }
    onFocusChanged(t) {
        return !1;
    }
    onLanguageConfigurationChanged(t) {
        return !1;
    }
    onLineMappingChanged(t) {
        return !1;
    }
    onLinesChanged(t) {
        return !1;
    }
    onLinesDeleted(t) {
        return !1;
    }
    onLinesInserted(t) {
        return !1;
    }
    onRevealRangeRequest(t) {
        return !1;
    }
    onScrollChanged(t) {
        return !1;
    }
    onThemeChanged(t) {
        return !1;
    }
    onTokensChanged(t) {
        return !1;
    }
    onTokensColorsChanged(t) {
        return !1;
    }
    onZonesChanged(t) {
        return !1;
    }
    handleEvents(t) {
        let e = !1;
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n];
            switch(r.type){
                case hz.ViewCompositionStart:
                    this.onCompositionStart(r) && (e = !0);
                    break;
                case hz.ViewCompositionEnd:
                    this.onCompositionEnd(r) && (e = !0);
                    break;
                case hz.ViewConfigurationChanged:
                    this.onConfigurationChanged(r) && (e = !0);
                    break;
                case hz.ViewCursorStateChanged:
                    this.onCursorStateChanged(r) && (e = !0);
                    break;
                case hz.ViewDecorationsChanged:
                    this.onDecorationsChanged(r) && (e = !0);
                    break;
                case hz.ViewFlushed:
                    this.onFlushed(r) && (e = !0);
                    break;
                case hz.ViewFocusChanged:
                    this.onFocusChanged(r) && (e = !0);
                    break;
                case hz.ViewLanguageConfigurationChanged:
                    this.onLanguageConfigurationChanged(r) && (e = !0);
                    break;
                case hz.ViewLineMappingChanged:
                    this.onLineMappingChanged(r) && (e = !0);
                    break;
                case hz.ViewLinesChanged:
                    this.onLinesChanged(r) && (e = !0);
                    break;
                case hz.ViewLinesDeleted:
                    this.onLinesDeleted(r) && (e = !0);
                    break;
                case hz.ViewLinesInserted:
                    this.onLinesInserted(r) && (e = !0);
                    break;
                case hz.ViewRevealRangeRequest:
                    this.onRevealRangeRequest(r) && (e = !0);
                    break;
                case hz.ViewScrollChanged:
                    this.onScrollChanged(r) && (e = !0);
                    break;
                case hz.ViewTokensChanged:
                    this.onTokensChanged(r) && (e = !0);
                    break;
                case hz.ViewThemeChanged:
                    this.onThemeChanged(r) && (e = !0);
                    break;
                case hz.ViewTokensColorsChanged:
                    this.onTokensColorsChanged(r) && (e = !0);
                    break;
                case hz.ViewZonesChanged:
                    this.onZonesChanged(r) && (e = !0);
                    break;
                default:
                    console.info("View received unknown event: "), console.info(r);
            }
        }
        e && (this._shouldRender = !0);
    }
};

}
