import { Qyt } from "./colorPicker.css";
import { DOy, KVd } from "./colorPickerBody.js";
import { LOy, ZVd } from "./colorPickerHeader.js";
import { Hn, ws } from "./dom_2.js";
import { Vtt, gsi } from "./pixelRatio.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { Ii } from "./ze.js";
var QVd, Szo, kzo;
export { QVd, Szo, kzo };
var __wakaru_JVd_initialized = false;
export function JVd() {
if (__wakaru_JVd_initialized) return;
__wakaru_JVd_initialized = true;
"use strict";
E(), Qyt(), gsi(), Hn(), CY(), DOy(), LOy(), QVd = Ii, Szo = class RRb extends k4 {
    constructor(e, n, i, r, s){
        super(), this.model = n, this.pixelRatio = i, this._register(Vtt.getInstance(ws(e)).onDidChange(()=>this.layout())), this._domNode = QVd(".colorpicker-widget"), e.appendChild(this._domNode), this.header = this._register(new ZVd(this._domNode, this.model, r, s)), this.body = this._register(new KVd(this._domNode, this.model, this.pixelRatio, s));
    }
    getId() {
        return RRb.ID;
    }
    layout() {
        this.body.layout();
    }
    get domNode() {
        return this._domNode;
    }
}, Szo.ID = "editor.contrib.colorPickerWidget", kzo = Szo;

}
