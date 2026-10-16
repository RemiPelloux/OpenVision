import { Gt, Qe, st, tt } from "./Iwo.js";
import { Itt, _b, ls } from "./color.js";
import { Qyt } from "./colorPicker.css";
import { Hn, Pr } from "./dom_2.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { E } from "./tslib.es6.js";
import { Ex, Ii, fr, li } from "./ze.js";
var bzo, WVd;
export { WVd, bzo };
var __wakaru_ROy_initialized = false;
export function ROy() {
if (__wakaru_ROy_initialized) return;
__wakaru_ROy_initialized = true;
"use strict";
E(), Qyt(), Hn(), wfn(), _b(), Gt(), Qe(), bzo = Ii, WVd = class extends st {
    constructor(t, e, n){
        super(), this.model = e, this.pixelRatio = n, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onColorFlushed = this._register(new tt), this.onColorFlushed = this._onColorFlushed.event, this._domNode = bzo(".saturation-wrap"), fr(t, this._domNode), this._canvas = document.createElement("canvas"), this._canvas.className = "saturation-box", fr(this._domNode, this._canvas), this.selection = bzo(".saturation-selection"), fr(this._domNode, this.selection), this.layout(), this._register(li(this._domNode, Pr.POINTER_DOWN, (i)=>this.onPointerDown(i))), this._register(this.model.onDidChangeColor(this.onDidChangeColor, this)), this.monitor = null;
    }
    get domNode() {
        return this._domNode;
    }
    get canvas() {
        return this._canvas;
    }
    onPointerDown(t) {
        if (!t.target || !(t.target instanceof Element)) return;
        this.monitor = this._register(new lBt);
        const e = Ex(this._domNode);
        t.target !== this.selection && this.onDidChangePosition(t.offsetX, t.offsetY), this.monitor.startMonitoring(t.target, t.pointerId, t.buttons, (i)=>this.onDidChangePosition(i.pageX - e.left, i.pageY - e.top), ()=>null);
        const n = li(t.target.ownerDocument, Pr.POINTER_UP, ()=>{
            this._onColorFlushed.fire(), n.dispose(), this.monitor && (this.monitor.stopMonitoring(!0), this.monitor = null);
        }, !0);
    }
    onDidChangePosition(t, e) {
        const n = Math.max(0, Math.min(1, t / this.width)), i = Math.max(0, Math.min(1, 1 - e / this.height));
        this.paintSelection(n, i), this._onDidChange.fire({
            s: n,
            v: i
        });
    }
    layout() {
        this.width = this._domNode.offsetWidth, this.height = this._domNode.offsetHeight, this._canvas.width = this.width * this.pixelRatio, this._canvas.height = this.height * this.pixelRatio, this.paint();
        const t = this.model.color.hsva;
        this.paintSelection(t.s, t.v);
    }
    paint() {
        const t = this.model.color.hsva, e = new ls(new Itt(t.h, 1, 1, 1)), n = this._canvas.getContext("2d"), i = n.createLinearGradient(0, 0, this._canvas.width, 0);
        i.addColorStop(0, "rgba(255, 255, 255, 1)"), i.addColorStop(.5, "rgba(255, 255, 255, 0.5)"), i.addColorStop(1, "rgba(255, 255, 255, 0)");
        const r = n.createLinearGradient(0, 0, 0, this._canvas.height);
        r.addColorStop(0, "rgba(0, 0, 0, 0)"), r.addColorStop(1, "rgba(0, 0, 0, 1)"), n.rect(0, 0, this._canvas.width, this._canvas.height), n.fillStyle = ls.Format.CSS.format(e), n.fill(), n.fillStyle = i, n.fill(), n.fillStyle = r, n.fill();
    }
    paintSelection(t, e) {
        this.selection.style.left = `${t * this.width}px`, this.selection.style.top = `${this.height - e * this.height}px`;
    }
    onDidChangeColor(t) {
        if (this.monitor && this.monitor.isMonitoring()) return;
        this.paint();
        const e = t.hsva;
        this.paintSelection(e.s, e.v);
    }
};

}
