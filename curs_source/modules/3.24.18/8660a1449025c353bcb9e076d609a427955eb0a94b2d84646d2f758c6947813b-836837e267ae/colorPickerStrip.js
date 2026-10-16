import { Gt, Qe, st, tt } from "./Iwo.js";
import { _b, la, ls } from "./color.js";
import { Qyt } from "./colorPicker.css";
import { Hn, Pr } from "./dom_2.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { E } from "./tslib.es6.js";
import { Ex, Ii, fr, li } from "./ze.js";
var Evn, yzo, qVd, zVd;
export { Evn, qVd, yzo, zVd };
var __wakaru_MOy_initialized = false;
export function MOy() {
if (__wakaru_MOy_initialized) return;
__wakaru_MOy_initialized = true;
"use strict";
E(), Qyt(), Hn(), wfn(), _b(), Gt(), Qe(), Evn = Ii, yzo = class extends st {
    constructor(t, e, n){
        super(), this.model = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onColorFlushed = this._register(new tt), this.onColorFlushed = this._onColorFlushed.event, n === "standalone" ? (this.domNode = fr(t, Evn(".standalone-strip")), this.overlay = fr(this.domNode, Evn(".standalone-overlay"))) : (this.domNode = fr(t, Evn(".strip")), this.overlay = fr(this.domNode, Evn(".overlay"))), this.slider = fr(this.domNode, Evn(".slider")), this.slider.style.top = "0px", this._register(li(this.domNode, Pr.POINTER_DOWN, (i)=>this.onPointerDown(i))), this._register(e.onDidChangeColor(this.onDidChangeColor, this)), this.layout();
    }
    layout() {
        this.height = this.domNode.offsetHeight - this.slider.offsetHeight;
        const t = this.getValue(this.model.color);
        this.updateSliderPosition(t);
    }
    onDidChangeColor(t) {
        const e = this.getValue(t);
        this.updateSliderPosition(e);
    }
    onPointerDown(t) {
        if (!t.target || !(t.target instanceof Element)) return;
        const e = this._register(new lBt), n = Ex(this.domNode);
        this.domNode.classList.add("grabbing"), t.target !== this.slider && this.onDidChangeTop(t.offsetY), e.startMonitoring(t.target, t.pointerId, t.buttons, (r)=>this.onDidChangeTop(r.pageY - n.top), ()=>null);
        const i = li(t.target.ownerDocument, Pr.POINTER_UP, ()=>{
            this._onColorFlushed.fire(), i.dispose(), e.stopMonitoring(!0), this.domNode.classList.remove("grabbing");
        }, !0);
    }
    onDidChangeTop(t) {
        const e = Math.max(0, Math.min(1, 1 - t / this.height));
        this.updateSliderPosition(e), this._onDidChange.fire(e);
    }
    updateSliderPosition(t) {
        this.slider.style.top = `${(1 - t) * this.height}px`;
    }
}, qVd = class extends yzo {
    constructor(t, e, n){
        super(t, e, n), this.domNode.classList.add("opacity-strip"), this.onDidChangeColor(this.model.color);
    }
    onDidChangeColor(t) {
        super.onDidChangeColor(t);
        const { r: e, g: n, b: i } = t.rgba, r = new ls(new la(e, n, i, 1)), s = new ls(new la(e, n, i, 0));
        this.overlay.style.background = `linear-gradient(to bottom, ${r} 0%, ${s} 100%)`;
    }
    getValue(t) {
        return t.hsva.a;
    }
}, zVd = class extends yzo {
    constructor(t, e, n){
        super(t, e, n), this.domNode.classList.add("hue-strip");
    }
    getValue(t) {
        return 1 - t.hsva.h / 360;
    }
};

}
