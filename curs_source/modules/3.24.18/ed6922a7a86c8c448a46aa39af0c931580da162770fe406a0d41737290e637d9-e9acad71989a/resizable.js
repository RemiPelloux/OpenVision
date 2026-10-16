import { Ct, He, Se, bt, ve } from "./HVr.js";
import { Tc, en } from "./dom_2.js";
import { Xge, oyi, qK } from "./qIc.js";
import { x } from "./tslib.es6.js";
var jFt;
export { jFt };
var __wakaru_Xvn_initialized = false;
export function Xvn() {
if (__wakaru_Xvn_initialized) return;
__wakaru_Xvn_initialized = true;
"use strict";
x(), en(), qK(), bt(), Se(), jFt = class {
    constructor(){
        this._onDidWillResize = new ve, this.onDidWillResize = this._onDidWillResize.event, this._onDidResize = new ve, this.onDidResize = this._onDidResize.event, this._sashListener = new He, this._size = new Tc(0, 0), this._minSize = new Tc(0, 0), this._maxSize = new Tc(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), this.domNode = document.createElement("div"), this._eastSash = new Xge(this.domNode, {
            getVerticalSashLeft: ()=>this._size.width
        }, {
            orientation: 0
        }), this._westSash = new Xge(this.domNode, {
            getVerticalSashLeft: ()=>0
        }, {
            orientation: 0
        }), this._northSash = new Xge(this.domNode, {
            getHorizontalSashTop: ()=>0
        }, {
            orientation: 1,
            orthogonalEdge: oyi.North
        }), this._southSash = new Xge(this.domNode, {
            getHorizontalSashTop: ()=>this._size.height
        }, {
            orientation: 1,
            orthogonalEdge: oyi.South
        }), this._northSash.orthogonalStartSash = this._westSash, this._northSash.orthogonalEndSash = this._eastSash, this._southSash.orthogonalStartSash = this._westSash, this._southSash.orthogonalEndSash = this._eastSash;
        let e, t = 0, n = 0;
        this._sashListener.add(Ct.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(()=>{
            e === void 0 && (this._onDidWillResize.fire(), e = this._size, t = 0, n = 0);
        })), this._sashListener.add(Ct.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(()=>{
            e !== void 0 && (e = void 0, t = 0, n = 0, this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        })), this._sashListener.add(this._eastSash.onDidChange((i)=>{
            e && (n = i.currentX - i.startX, this.layout(e.height + t, e.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                east: !0
            }));
        })), this._sashListener.add(this._westSash.onDidChange((i)=>{
            e && (n = -(i.currentX - i.startX), this.layout(e.height + t, e.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                west: !0
            }));
        })), this._sashListener.add(this._northSash.onDidChange((i)=>{
            e && (t = -(i.currentY - i.startY), this.layout(e.height + t, e.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                north: !0
            }));
        })), this._sashListener.add(this._southSash.onDidChange((i)=>{
            e && (t = i.currentY - i.startY, this.layout(e.height + t, e.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                south: !0
            }));
        })), this._sashListener.add(Ct.any(this._eastSash.onDidReset, this._westSash.onDidReset)((i)=>{
            this._preferredSize && (this.layout(this._size.height, this._preferredSize.width), this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        })), this._sashListener.add(Ct.any(this._northSash.onDidReset, this._southSash.onDidReset)((i)=>{
            this._preferredSize && (this.layout(this._preferredSize.height, this._size.width), this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        }));
    }
    dispose() {
        this._northSash.dispose(), this._southSash.dispose(), this._eastSash.dispose(), this._westSash.dispose(), this._sashListener.dispose(), this._onDidResize.dispose(), this._onDidWillResize.dispose(), this.domNode.remove();
    }
    enableSashes(e, t, n, i) {
        this._northSash.state = e ? 3 : 0, this._eastSash.state = t ? 3 : 0, this._southSash.state = n ? 3 : 0, this._westSash.state = i ? 3 : 0;
    }
    layout(e = this.size.height, t = this.size.width) {
        const { height: n, width: i } = this._minSize, { height: r, width: s } = this._maxSize;
        e = Math.max(n, Math.min(r, e)), t = Math.max(i, Math.min(s, t));
        const o = new Tc(t, e);
        Tc.equals(o, this._size) || (this.domNode.style.height = e + "px", this.domNode.style.width = t + "px", this._size = o, this._northSash.layout(), this._eastSash.layout(), this._southSash.layout(), this._westSash.layout());
    }
    clearSashHoverState() {
        this._eastSash.clearSashHoverState(), this._westSash.clearSashHoverState(), this._northSash.clearSashHoverState(), this._southSash.clearSashHoverState();
    }
    get size() {
        return this._size;
    }
    set maxSize(e) {
        this._maxSize = e;
    }
    get maxSize() {
        return this._maxSize;
    }
    set minSize(e) {
        this._minSize = e;
    }
    get minSize() {
        return this._minSize;
    }
    set preferredSize(e) {
        this._preferredSize = e;
    }
    get preferredSize() {
        return this._preferredSize;
    }
};

}
