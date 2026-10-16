import { Qe, st } from "./Iwo.js";
import { Itt, _b, ls } from "./color.js";
import { Qyt } from "./colorPicker.css";
import { GVd, POy } from "./colorPickerInsertButton.js";
import { ROy, WVd } from "./colorPickerSaturationBox.js";
import { MOy, qVd, zVd } from "./colorPickerStrip.js";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { Ii, fr } from "./ze.js";
var VVd, KVd;
export { KVd, VVd };
var __wakaru_DOy_initialized = false;
export function DOy() {
if (__wakaru_DOy_initialized) return;
__wakaru_DOy_initialized = true;
"use strict";
E(), Qyt(), Hn(), _b(), Qe(), ROy(), POy(), MOy(), VVd = Ii, KVd = class extends st {
    constructor(t, e, n, i){
        super(), this.model = e, this.pixelRatio = n, this._insertButton = null, this._domNode = VVd(".colorpicker-body"), fr(t, this._domNode), this._saturationBox = new WVd(this._domNode, this.model, this.pixelRatio), this._register(this._saturationBox), this._register(this._saturationBox.onDidChange(this.onDidSaturationValueChange, this)), this._register(this._saturationBox.onColorFlushed(this.flushColor, this)), this._opacityStrip = new qVd(this._domNode, this.model, i), this._register(this._opacityStrip), this._register(this._opacityStrip.onDidChange(this.onDidOpacityChange, this)), this._register(this._opacityStrip.onColorFlushed(this.flushColor, this)), this._hueStrip = new zVd(this._domNode, this.model, i), this._register(this._hueStrip), this._register(this._hueStrip.onDidChange(this.onDidHueChange, this)), this._register(this._hueStrip.onColorFlushed(this.flushColor, this)), i === "standalone" && (this._insertButton = this._register(new GVd(this._domNode)), this._domNode.classList.add("standalone-colorpicker"));
    }
    flushColor() {
        this.model.flushColor();
    }
    onDidSaturationValueChange({ s: t, v: e }) {
        const n = this.model.color.hsva;
        this.model.color = new ls(new Itt(n.h, t, e, n.a));
    }
    onDidOpacityChange(t) {
        const e = this.model.color.hsva;
        this.model.color = new ls(new Itt(e.h, e.s, e.v, t));
    }
    onDidHueChange(t) {
        const e = this.model.color.hsva, n = (1 - t) * 360;
        this.model.color = new ls(new Itt(n === 360 ? 0 : n, e.s, e.v, e.a));
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
