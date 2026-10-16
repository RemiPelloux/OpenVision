import { Se, we } from "./HVr.js";
import { Ci, Sm, xBe } from "./color.js";
import { _Ke } from "./colorPicker.css";
import { Q$c, XSg } from "./colorPickerInsertButton.js";
import { YSg, Z$c } from "./colorPickerSaturationBox.js";
import { J$c, ZSg, eHc } from "./colorPickerStrip.js";
import { en } from "./dom_2.js";
import { Ve, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tHc, nHc;
export { nHc, tHc };
var __wakaru_QSg_initialized = false;
export function QSg() {
if (__wakaru_QSg_initialized) return;
__wakaru_QSg_initialized = true;
"use strict";
x(), _Ke(), en(), Sm(), Se(), YSg(), XSg(), ZSg(), tHc = Ve, nHc = class extends we {
    constructor(e, t, n, i){
        super(), this.model = t, this.pixelRatio = n, this._insertButton = null, this._domNode = tHc(".colorpicker-body"), Ye(e, this._domNode), this._saturationBox = new Z$c(this._domNode, this.model, this.pixelRatio), this._register(this._saturationBox), this._register(this._saturationBox.onDidChange(this.onDidSaturationValueChange, this)), this._register(this._saturationBox.onColorFlushed(this.flushColor, this)), this._opacityStrip = new J$c(this._domNode, this.model, i), this._register(this._opacityStrip), this._register(this._opacityStrip.onDidChange(this.onDidOpacityChange, this)), this._register(this._opacityStrip.onColorFlushed(this.flushColor, this)), this._hueStrip = new eHc(this._domNode, this.model, i), this._register(this._hueStrip), this._register(this._hueStrip.onDidChange(this.onDidHueChange, this)), this._register(this._hueStrip.onColorFlushed(this.flushColor, this)), i === "standalone" && (this._insertButton = this._register(new Q$c(this._domNode)), this._domNode.classList.add("standalone-colorpicker"));
    }
    flushColor() {
        this.model.flushColor();
    }
    onDidSaturationValueChange({ s: e, v: t }) {
        const n = this.model.color.hsva;
        this.model.color = new Ci(new xBe(n.h, e, t, n.a));
    }
    onDidOpacityChange(e) {
        const t = this.model.color.hsva;
        this.model.color = new Ci(new xBe(t.h, t.s, t.v, e));
    }
    onDidHueChange(e) {
        const t = this.model.color.hsva, n = (1 - e) * 360;
        this.model.color = new Ci(new xBe(n === 360 ? 0 : n, t.s, t.v, t.a));
    }
    get domNode() {
        return this._domNode;
    }
    get saturationBox() {
        return this._saturationBox;
    }
    get opacityStrip() {
        return this._opacityStrip;
    }
    get hueStrip() {
        return this._hueStrip;
    }
    get enterButton() {
        return this._insertButton;
    }
    layout() {
        this._saturationBox.layout(), this._opacityStrip.layout(), this._hueStrip.layout();
    }
};

}
