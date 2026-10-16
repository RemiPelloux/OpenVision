import { Se, bt, ve, we } from "./HVr.js";
import { _Ke } from "./colorPicker.css";
import { Fn, en } from "./dom_2.js";
import { Xt, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Q$c;
export { Q$c };
var __wakaru_XSg_initialized = false;
export function XSg() {
if (__wakaru_XSg_initialized) return;
__wakaru_XSg_initialized = true;
"use strict";
x(), _Ke(), en(), bt(), Se(), Q$c = class extends we {
    constructor(e){
        super(), this._onClicked = this._register(new ve), this.onClicked = this._onClicked.event, this._button = Ye(e, document.createElement("button")), this._button.classList.add("insert-button"), this._button.textContent = "Insert", this._register(Xt(this._button, Fn.CLICK, ()=>{
            this._onClicked.fire();
        }));
    }
    get button() {
        return this._button;
    }
};

}
