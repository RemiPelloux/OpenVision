import { bn, wE } from "./async.js";
import { Fn, en, u2t, xi, zp } from "./dom_2.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var qpt, Q5c;
export { Q5c, qpt };
var __wakaru_Ees_initialized = false;
export function Ees() {
if (__wakaru_Ees_initialized) return;
__wakaru_Ees_initialized = true;
"use strict";
x(), VOt(), RO(), bn(), Sr(), en(), qpt = 11, Q5c = class extends pR {
    constructor(e){
        super(), this._onActivate = e.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = e.bgWidth + "px", this.bgDomNode.style.height = e.bgHeight + "px", typeof e.top < "u" && (this.bgDomNode.style.top = "0px"), typeof e.left < "u" && (this.bgDomNode.style.left = "0px"), typeof e.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof e.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = e.className, this.domNode.classList.add(...Ft.asClassNameArray(e.icon)), this.domNode.style.position = "absolute", this.domNode.style.width = qpt + "px", this.domNode.style.height = qpt + "px", typeof e.top < "u" && (this.domNode.style.top = e.top + "px"), typeof e.left < "u" && (this.domNode.style.left = e.left + "px"), typeof e.bottom < "u" && (this.domNode.style.bottom = e.bottom + "px"), typeof e.right < "u" && (this.domNode.style.right = e.right + "px"), this._pointerMoveMonitor = this._register(new Upt), this._register(zp(this.bgDomNode, Fn.POINTER_DOWN, (t)=>this._arrowPointerDown(t))), this._register(zp(this.domNode, Fn.POINTER_DOWN, (t)=>this._arrowPointerDown(t))), this._pointerdownRepeatTimer = this._register(new u2t), this._pointerdownScheduleRepeatTimer = this._register(new wE);
    }
    _arrowPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) return;
        const t = ()=>{
            this._pointerdownRepeatTimer.cancelAndSet(()=>this._onActivate(), 1e3 / 24, xi(e));
        };
        this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(t, 200), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (n)=>{}, ()=>{
            this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
        }), e.preventDefault();
    }
};

}
