import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Qyt } from "./colorPicker.css";
import { Hn, Pr } from "./dom_2.js";
import { b_ } from "./iconRegistry.js";
import { Bt } from "./nls.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Ii, fr, li, qa } from "./ze.js";
var YVd, XVd;
export { XVd, YVd };
var __wakaru_NOy_initialized = false;
export function NOy() {
if (__wakaru_NOy_initialized) return;
__wakaru_NOy_initialized = true;
"use strict";
E(), Qyt(), Hn(), Qe(), Bt(), Gt(), b_(), ta(), gs(), YVd = Ii, XVd = class extends st {
    constructor(t){
        super(), this._onClicked = this._register(new tt), this.onClicked = this._onClicked.event, this._button = document.createElement("div"), this._button.classList.add("close-button"), fr(t, this._button);
        const e = document.createElement("div");
        e.classList.add("close-button-inner-div"), fr(this._button, e), fr(e, YVd(".button" + Gn.asCSSSelector(qa("color-picker-close", yt.close, D(1021, null))))).classList.add("close-icon"), this._register(li(this._button, Pr.CLICK, ()=>{
            this._onClicked.fire();
        }));
    }
};

}
