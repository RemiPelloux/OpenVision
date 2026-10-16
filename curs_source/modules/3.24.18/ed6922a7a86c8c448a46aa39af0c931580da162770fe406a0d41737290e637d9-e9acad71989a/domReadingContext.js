import { x } from "./tslib.es6.js";
var W_i;
export { W_i };
var __wakaru_Jvg_initialized = false;
export function Jvg() {
if (__wakaru_Jvg_initialized) return;
__wakaru_Jvg_initialized = true;
"use strict";
x(), W_i = class {
    constructor(e, t){
        this._domNode = e, this.endNode = t, this._didDomLayout = !1, this._clientRectDeltaLeft = 0, this._clientRectScale = 1, this._clientRectRead = !1;
    }
    get didDomLayout() {
        return this._didDomLayout;
    }
    readClientRect() {
        if (!this._clientRectRead) {
            this._clientRectRead = !0;
            const e = this._domNode.getBoundingClientRect();
            this.markDidDomLayout(), this._clientRectDeltaLeft = e.left, this._clientRectScale = e.width / this._domNode.offsetWidth;
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
