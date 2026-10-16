import { Di, _r } from "./Iwo.js";
import { ENy } from "./selectBox.css";
import { $Gd, CNy } from "./selectBoxCustom.js";
import { HGd, TNy } from "./selectBoxNative.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
var GGd;
export { GGd };
var __wakaru_CGo_initialized = false;
export function CGo() {
if (__wakaru_CGo_initialized) return;
__wakaru_CGo_initialized = true;
"use strict";
E(), CNy(), TNy(), CY(), Di(), ENy(), GGd = class extends k4 {
    constructor(t, e, n, i, r){
        super(), _r && !r?.useCustomDrawn ? this.selectBoxDelegate = new HGd(t, e, i, r) : this.selectBoxDelegate = new $Gd(t, e, n, i, r), this._register(this.selectBoxDelegate);
    }
    get onDidSelect() {
        return this.selectBoxDelegate.onDidSelect;
    }
    setOptions(t, e) {
        this.selectBoxDelegate.setOptions(t, e);
    }
    select(t) {
        this.selectBoxDelegate.select(t);
    }
    setAriaLabel(t) {
        this.selectBoxDelegate.setAriaLabel(t);
    }
    focus() {
        this.selectBoxDelegate.focus();
    }
    blur() {
        this.selectBoxDelegate.blur();
    }
    setFocusable(t) {
        this.selectBoxDelegate.setFocusable(t);
    }
    setEnabled(t) {
        this.selectBoxDelegate.setEnabled(t);
    }
    render(t) {
        this.selectBoxDelegate.render(t);
    }
};

}
