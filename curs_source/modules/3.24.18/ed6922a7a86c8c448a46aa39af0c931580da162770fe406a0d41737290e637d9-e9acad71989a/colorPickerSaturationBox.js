import { Se, bt, ve, we } from "./HVr.js";
import { Ci, Sm, xBe } from "./color.js";
import { _Ke } from "./colorPicker.css";
import { Fn, en } from "./dom_2.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { Nk, Ve, Xt, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var qis, Z$c;
export { Z$c, qis };
var __wakaru_YSg_initialized = false;
export function YSg() {
if (__wakaru_YSg_initialized) return;
__wakaru_YSg_initialized = true;
"use strict";
x(), _Ke(), en(), VOt(), Sm(), bt(), Se(), qis = Ve, Z$c = class extends we {
    constructor(e, t, n){
        super(), this.model = t, this.pixelRatio = n, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onColorFlushed = this._register(new ve), this.onColorFlushed = this._onColorFlushed.event, this._domNode = qis(".saturation-wrap"), Ye(e, this._domNode), this._canvas = document.createElement("canvas"), this._canvas.className = "saturation-box", Ye(this._domNode, this._canvas), this.selection = qis(".saturation-selection"), Ye(this._domNode, this.selection), this.layout(), this._register(Xt(this._domNode, Fn.POINTER_DOWN, (i)=>this.onPointerDown(i))), this._register(this.model.onDidChangeColor(this.onDidChangeColor, this)), this.monitor = null;
    }
    get domNode() {
        return this._domNode;
    }
    get canvas() {
        return this._canvas;
    }
    onPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) return;
        this.monitor = this._register(new Upt);
        const t = Nk(this._domNode);
        e.target !== this.selection && this.onDidChangePosition(e.offsetX, e.offsetY), this.monitor.startMonitoring(e.target, e.pointerId, e.buttons, (i)=>this.onDidChangePosition(i.pageX - t.left, i.pageY - t.top), ()=>null);
        const n = Xt(e.target.ownerDocument, Fn.POINTER_UP, ()=>{
            this._onColorFlushed.fire(), n.dispose(), this.monitor && (this.monitor.stopMonitoring(!0), this.monitor = null);
        }, !0);
    }
    onDidChangePosition(e, t) {
        const n = Math.max(0, Math.min(1, e / this.width)), i = Math.max(0, Math.min(1, 1 - t / this.height));
        this.paintSelection(n, i), this._onDidChange.fire({
            s: n,
            v: i
        });
    }
    layout() {
        this.width = this._domNode.offsetWidth, this.height = this._domNode.offsetHeight, this._canvas.width = this.width * this.pixelRatio, this._canvas.height = this.height * this.pixelRatio, this.paint();
        const e = this.model.color.hsva;
        this.paintSelection(e.s, e.v);
    }
    paint() {
        const e = this.model.color.hsva, t = new Ci(new xBe(e.h, 1, 1, 1)), n = this._canvas.getContext("2d"), i = n.createLinearGradient(0, 0, this._canvas.width, 0);
        i.addColorStop(0, "rgba(255, 255, 255, 1)"), i.addColorStop(.5, "rgba(255, 255, 255, 0.5)"), i.addColorStop(1, "rgba(255, 255, 255, 0)");
        const r = n.createLinearGradient(0, 0, 0, this._canvas.height);
        r.addColorStop(0, "rgba(0, 0, 0, 0)"), r.addColorStop(1, "rgba(0, 0, 0, 1)"), n.rect(0, 0, this._canvas.width, this._canvas.height), n.fillStyle = Ci.Format.CSS.format(t), n.fill(), n.fillStyle = i, n.fill(), n.fillStyle = r, n.fill();
    }
    paintSelection(e, t) {
        this.selection.style.left = `${e * this.width}px`, this.selection.style.top = `${this.height - t * this.height}px`;
    }
    onDidChangeColor(e) {
        if (this.monitor && this.monitor.isMonitoring()) return;
        this.paint();
        const t = e.hsva;
        this.paintSelection(t.s, t.v);
    }
};

}
