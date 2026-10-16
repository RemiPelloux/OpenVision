import { Ai, jn } from "./HVr.js";
import { Pyg } from "./selectBox.css";
import { Dyg, m8c } from "./selectBoxCustom.js";
import { Myg, g8c } from "./selectBoxNative.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var p5e;
export { p5e };
var __wakaru_rKe_initialized = false;
export function rKe() {
if (__wakaru_rKe_initialized) return;
__wakaru_rKe_initialized = true;
"use strict";
x(), Dyg(), Myg(), RO(), jn(), Pyg(), p5e = class extends pR {
    constructor(e, t, n, i, r){
        super(), Ai && !r?.useCustomDrawn ? this.selectBoxDelegate = new g8c(e, t, i, r) : this.selectBoxDelegate = new m8c(e, t, n, i, r), this._register(this.selectBoxDelegate);
    }
    get onDidSelect() {
        return this.selectBoxDelegate.onDidSelect;
    }
    setOptions(e, t) {
        this.selectBoxDelegate.setOptions(e, t);
    }
    select(e) {
        this.selectBoxDelegate.select(e);
    }
    setAriaLabel(e) {
        this.selectBoxDelegate.setAriaLabel(e);
    }
    focus() {
        this.selectBoxDelegate.focus();
    }
    blur() {
        this.selectBoxDelegate.blur();
    }
    setFocusable(e) {
        this.selectBoxDelegate.setFocusable(e);
    }
    setEnabled(e) {
        this.selectBoxDelegate.setEnabled(e);
    }
    render(e) {
        this.selectBoxDelegate.render(e);
    }
};

}
