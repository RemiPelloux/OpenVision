import { x } from "./tslib.es6.js";
var IRo;
export { IRo };
var __wakaru_S3h_initialized = false;
export function S3h() {
if (__wakaru_S3h_initialized) return;
__wakaru_S3h_initialized = true;
"use strict";
x(), IRo = class {
    constructor(){
        this._attached = new Map;
    }
    attachToElement(e) {
        this._container || (this._container = document.createElement("div"), this._container.classList.add("terminal-widget-container"), e.appendChild(this._container));
    }
    dispose() {
        this._container && (this._container.remove(), this._container = void 0), this._attached.forEach((e)=>e.dispose()), this._attached.clear();
    }
    attachWidget(e) {
        if (this._container) return this._attached.get(e.id)?.dispose(), e.attach(this._container), this._attached.set(e.id, e), {
            dispose: ()=>{
                this._attached.get(e.id) === e && (this._attached.delete(e.id), e.dispose());
            }
        };
    }
};

}
