import { E } from "./tslib.es6.js";
var gCr;
export { gCr };
var __wakaru_zMy_initialized = false;
export function zMy() {
if (__wakaru_zMy_initialized) return;
__wakaru_zMy_initialized = true;
"use strict";
E(), gCr = class {
    constructor(t, e){
        this._domNode = t, this.endNode = e, this._didDomLayout = !1, this._clientRectDeltaLeft = 0, this._clientRectScale = 1, this._clientRectRead = !1;
    }
    get didDomLayout() {
        return this._didDomLayout;
    }
    readClientRect() {
        if (!this._clientRectRead) {
            this._clientRectRead = !0;
            const t = this._domNode.getBoundingClientRect();
            this.markDidDomLayout(), this._clientRectDeltaLeft = t.left, this._clientRectScale = t.width / this._domNode.offsetWidth;
        }
    }
    get clientRectDeltaLeft() {
        return this._clientRectRead || this.readClientRect(), this._clientRectDeltaLeft;
    }
    get clientRectScale() {
        return this._clientRectRead || this.readClientRect(), this._clientRectScale;
    }
    markDidDomLayout() {
        this._didDomLayout = !0;
    }
};

}
