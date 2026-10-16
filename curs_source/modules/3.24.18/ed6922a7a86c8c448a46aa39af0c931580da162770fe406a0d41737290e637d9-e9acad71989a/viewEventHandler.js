import { Se, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { Npt, oU } from "./viewEvents.js";
var Hze;
export { Hze };
var __wakaru_$pt_initialized = false;
export function $pt() {
if (__wakaru_$pt_initialized) return;
__wakaru_$pt_initialized = true;
"use strict";
x(), Se(), Npt(), Hze = class extends we {
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
    onCompositionStart(e) {
        return !1;
    }
    onCompositionEnd(e) {
        return !1;
    }
    onConfigurationChanged(e) {
        return !1;
    }
    onCursorStateChanged(e) {
        return !1;
    }
    onDecorationsChanged(e) {
        return !1;
    }
    onFlushed(e) {
        return !1;
    }
    onFocusChanged(e) {
        return !1;
    }
    onLanguageConfigurationChanged(e) {
        return !1;
    }
    onLineMappingChanged(e) {
        return !1;
    }
    onLinesChanged(e) {
        return !1;
    }
    onLinesDeleted(e) {
        return !1;
    }
    onLinesInserted(e) {
        return !1;
    }
    onRevealRangeRequest(e) {
        return !1;
    }
    onScrollChanged(e) {
        return !1;
    }
    onThemeChanged(e) {
        return !1;
    }
    onTokensChanged(e) {
        return !1;
    }
    onTokensColorsChanged(e) {
        return !1;
    }
    onZonesChanged(e) {
        return !1;
    }
    handleEvents(e) {
        let t = !1;
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n];
            switch(r.type){
                case oU.ViewCompositionStart:
                    this.onCompositionStart(r) && (t = !0);
                    break;
                case oU.ViewCompositionEnd:
                    this.onCompositionEnd(r) && (t = !0);
                    break;
                case oU.ViewConfigurationChanged:
                    this.onConfigurationChanged(r) && (t = !0);
                    break;
                case oU.ViewCursorStateChanged:
                    this.onCursorStateChanged(r) && (t = !0);
                    break;
                case oU.ViewDecorationsChanged:
                    this.onDecorationsChanged(r) && (t = !0);
                    break;
                case oU.ViewFlushed:
                    this.onFlushed(r) && (t = !0);
                    break;
                case oU.ViewFocusChanged:
                    this.onFocusChanged(r) && (t = !0);
                    break;
                case oU.ViewLanguageConfigurationChanged:
                    this.onLanguageConfigurationChanged(r) && (t = !0);
                    break;
                case oU.ViewLineMappingChanged:
                    this.onLineMappingChanged(r) && (t = !0);
                    break;
                case oU.ViewLinesChanged:
                    this.onLinesChanged(r) && (t = !0);
                    break;
                case oU.ViewLinesDeleted:
                    this.onLinesDeleted(r) && (t = !0);
                    break;
                case oU.ViewLinesInserted:
                    this.onLinesInserted(r) && (t = !0);
                    break;
                case oU.ViewRevealRangeRequest:
                    this.onRevealRangeRequest(r) && (t = !0);
                    break;
                case oU.ViewScrollChanged:
                    this.onScrollChanged(r) && (t = !0);
                    break;
                case oU.ViewTokensChanged:
                    this.onTokensChanged(r) && (t = !0);
                    break;
                case oU.ViewThemeChanged:
                    this.onThemeChanged(r) && (t = !0);
                    break;
                case oU.ViewTokensColorsChanged:
                    this.onTokensColorsChanged(r) && (t = !0);
                    break;
                case oU.ViewZonesChanged:
                    this.onZonesChanged(r) && (t = !0);
                    break;
                default:
                    console.info("View received unknown event: "), console.info(r);
            }
        }
        t && (this._shouldRender = !0);
    }
};

}
