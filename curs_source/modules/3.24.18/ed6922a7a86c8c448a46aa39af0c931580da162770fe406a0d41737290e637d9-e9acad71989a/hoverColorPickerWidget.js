import { _Ke } from "./colorPicker.css";
import { QSg, nHc } from "./colorPickerBody.js";
import { ekg, sHc } from "./colorPickerHeader.js";
import { en, xi } from "./dom_2.js";
import { SJ, d5 } from "./pixelRatio.js";
import { Ve } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var oHc, Kis, Yis;
export { Kis, Yis, oHc };
var __wakaru_aHc_initialized = false;
export function aHc() {
if (__wakaru_aHc_initialized) return;
__wakaru_aHc_initialized = true;
"use strict";
x(), _Ke(), SJ(), en(), RO(), QSg(), ekg(), oHc = Ve, Kis = class Ykm extends pR {
    constructor(t, n, i, r, s){
        super(), this.model = n, this.pixelRatio = i, this._register(d5.getInstance(xi(t)).onDidChange(()=>this.layout())), this._domNode = oHc(".colorpicker-widget"), t.appendChild(this._domNode), this.header = this._register(new sHc(this._domNode, this.model, r, s)), this.body = this._register(new nHc(this._domNode, this.model, this.pixelRatio, s));
    }
    getId() {
        return Ykm.ID;
    }
    layout() {
        this.body.layout();
    }
    get domNode() {
        return this._domNode;
    }
}, Kis.ID = "editor.contrib.colorPickerWidget", Yis = Kis;

}
