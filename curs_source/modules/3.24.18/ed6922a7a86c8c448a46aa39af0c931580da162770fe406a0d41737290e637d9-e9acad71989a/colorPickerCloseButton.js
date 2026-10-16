import { S, Se, bt, ve, we } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { _Ke } from "./colorPicker.css";
import { Fn, en } from "./dom_2.js";
import { dh } from "./iconRegistry.js";
import { rt } from "./nls.js";
import { Pi, Ve, Xt, Ye } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var iHc, rHc;
export { iHc, rHc };
var __wakaru_JSg_initialized = false;
export function JSg() {
if (__wakaru_JSg_initialized) return;
__wakaru_JSg_initialized = true;
"use strict";
x(), _Ke(), en(), Se(), rt(), bt(), dh(), Sr(), _i(), iHc = Ve, rHc = class extends we {
    constructor(e){
        super(), this._onClicked = this._register(new ve), this.onClicked = this._onClicked.event, this._button = document.createElement("div"), this._button.classList.add("close-button"), Ye(e, this._button);
        const t = document.createElement("div");
        t.classList.add("close-button-inner-div"), Ye(this._button, t), Ye(t, iHc(".button" + Ft.asCSSSelector(Pi("color-picker-close", Pe.close, S(1021, null))))).classList.add("close-icon"), this._register(Xt(this._button, Fn.CLICK, ()=>{
            this._onClicked.fire();
        }));
    }
};

}
