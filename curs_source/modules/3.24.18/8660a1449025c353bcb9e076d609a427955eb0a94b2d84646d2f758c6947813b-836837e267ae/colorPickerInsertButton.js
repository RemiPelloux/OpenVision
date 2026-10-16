import { Gt, Qe, st, tt } from "./Iwo.js";
import { Qyt } from "./colorPicker.css";
import { Hn, Pr } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { fr, li } from "./ze.js";
var GVd;
export { GVd };
var __wakaru_POy_initialized = false;
export function POy() {
if (__wakaru_POy_initialized) return;
__wakaru_POy_initialized = true;
"use strict";
E(), Qyt(), Hn(), Gt(), Qe(), GVd = class extends st {
    constructor(t){
        super(), this._onClicked = this._register(new tt), this.onClicked = this._onClicked.event, this._button = fr(t, document.createElement("button")), this._button.classList.add("insert-button"), this._button.textContent = "Insert", this._register(li(this._button, Pr.CLICK, ()=>{
            this._onClicked.fire();
        }));
    }
    get button() {
        return this._button;
    }
};

}
