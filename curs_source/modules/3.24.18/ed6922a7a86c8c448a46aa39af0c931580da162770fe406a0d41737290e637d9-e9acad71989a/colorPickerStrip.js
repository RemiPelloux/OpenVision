import { Se, bt, ve, we } from "./HVr.js";
import { $s, Ci, Sm } from "./color.js";
import { _Ke } from "./colorPicker.css";
import { Fn, en } from "./dom_2.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { Nk, Ve, Xt, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var KFt, zis, J$c, eHc;
export { J$c, KFt, eHc, zis };
var __wakaru_ZSg_initialized = false;
export function ZSg() {
if (__wakaru_ZSg_initialized) return;
__wakaru_ZSg_initialized = true;
"use strict";
x(), _Ke(), en(), VOt(), Sm(), bt(), Se(), KFt = Ve, zis = class extends we {
    constructor(e, t, n){
        super(), this.model = t, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onColorFlushed = this._register(new ve), this.onColorFlushed = this._onColorFlushed.event, n === "standalone" ? (this.domNode = Ye(e, KFt(".standalone-strip")), this.overlay = Ye(this.domNode, KFt(".standalone-overlay"))) : (this.domNode = Ye(e, KFt(".strip")), this.overlay = Ye(this.domNode, KFt(".overlay"))), this.slider = Ye(this.domNode, KFt(".slider")), this.slider.style.top = "0px", this._register(Xt(this.domNode, Fn.POINTER_DOWN, (i)=>this.onPointerDown(i))), this._register(t.onDidChangeColor(this.onDidChangeColor, this)), this.layout();
    }
    layout() {
        this.height = this.domNode.offsetHeight - this.slider.offsetHeight;
        const e = this.getValue(this.model.color);
        this.updateSliderPosition(e);
    }
    onDidChangeColor(e) {
        const t = this.getValue(e);
        this.updateSliderPosition(t);
    }
    onPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) return;
        const t = this._register(new Upt), n = Nk(this.domNode);
        this.domNode.classList.add("grabbing"), e.target !== this.slider && this.onDidChangeTop(e.offsetY), t.startMonitoring(e.target, e.pointerId, e.buttons, (r)=>this.onDidChangeTop(r.pageY - n.top), ()=>null);
        const i = Xt(e.target.ownerDocument, Fn.POINTER_UP, ()=>{
            this._onColorFlushed.fire(), i.dispose(), t.stopMonitoring(!0), this.domNode.classList.remove("grabbing");
        }, !0);
    }
    onDidChangeTop(e) {
        const t = Math.max(0, Math.min(1, 1 - e / this.height));
        this.updateSliderPosition(t), this._onDidChange.fire(t);
    }
    updateSliderPosition(e) {
        this.slider.style.top = `${(1 - e) * this.height}px`;
    }
}, J$c = class extends zis {
    constructor(e, t, n){
        super(e, t, n), this.domNode.classList.add("opacity-strip"), this.onDidChangeColor(this.model.color);
    }
    onDidChangeColor(e) {
        super.onDidChangeColor(e);
        const { r: t, g: n, b: i } = e.rgba, r = new Ci(new $s(t, n, i, 1)), s = new Ci(new $s(t, n, i, 0));
        this.overlay.style.background = `linear-gradient(to bottom, ${r} 0%, ${s} 100%)`;
    }
    getValue(e) {
        return e.hsva.a;
    }
}, eHc = class extends zis {
    constructor(e, t, n){
        super(e, t, n), this.domNode.classList.add("hue-strip");
    }
    getValue(e) {
        return 1 - e.hsva.h / 360;
    }
};

}
