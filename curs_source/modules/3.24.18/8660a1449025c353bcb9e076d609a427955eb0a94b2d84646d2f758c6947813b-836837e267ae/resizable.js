import { Gt, Nt, Qe, en, tt } from "./Iwo.js";
import { Hn, nd } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { FTr, I5e, kwe } from "./ze.js";
var wvn;
export { wvn };
var __wakaru_Ooi_initialized = false;
export function Ooi() {
if (__wakaru_Ooi_initialized) return;
__wakaru_Ooi_initialized = true;
"use strict";
E(), Hn(), kwe(), Gt(), Qe(), wvn = class {
    constructor(){
        this._onDidWillResize = new tt, this.onDidWillResize = this._onDidWillResize.event, this._onDidResize = new tt, this.onDidResize = this._onDidResize.event, this._sashListener = new Nt, this._size = new nd(0, 0), this._minSize = new nd(0, 0), this._maxSize = new nd(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), this.domNode = document.createElement("div"), this._eastSash = new I5e(this.domNode, {
            getVerticalSashLeft: ()=>this._size.width
        }, {
            orientation: 0
        }), this._westSash = new I5e(this.domNode, {
            getVerticalSashLeft: ()=>0
        }, {
            orientation: 0
        }), this._northSash = new I5e(this.domNode, {
            getHorizontalSashTop: ()=>0
        }, {
            orientation: 1,
            orthogonalEdge: FTr.North
        }), this._southSash = new I5e(this.domNode, {
            getHorizontalSashTop: ()=>this._size.height
        }, {
            orientation: 1,
            orthogonalEdge: FTr.South
        }), this._northSash.orthogonalStartSash = this._westSash, this._northSash.orthogonalEndSash = this._eastSash, this._southSash.orthogonalStartSash = this._westSash, this._southSash.orthogonalEndSash = this._eastSash;
        let t, e = 0, n = 0;
        this._sashListener.add(en.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(()=>{
            t === void 0 && (this._onDidWillResize.fire(), t = this._size, e = 0, n = 0);
        })), this._sashListener.add(en.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(()=>{
            t !== void 0 && (t = void 0, e = 0, n = 0, this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        })), this._sashListener.add(this._eastSash.onDidChange((i)=>{
            t && (n = i.currentX - i.startX, this.layout(t.height + e, t.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                east: !0
            }));
        })), this._sashListener.add(this._westSash.onDidChange((i)=>{
            t && (n = -(i.currentX - i.startX), this.layout(t.height + e, t.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                west: !0
            }));
        })), this._sashListener.add(this._northSash.onDidChange((i)=>{
            t && (e = -(i.currentY - i.startY), this.layout(t.height + e, t.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                north: !0
            }));
        })), this._sashListener.add(this._southSash.onDidChange((i)=>{
            t && (e = i.currentY - i.startY, this.layout(t.height + e, t.width + n), this._onDidResize.fire({
                dimension: this._size,
                done: !1,
                south: !0
            }));
        })), this._sashListener.add(en.any(this._eastSash.onDidReset, this._westSash.onDidReset)((i)=>{
            this._preferredSize && (this.layout(this._size.height, this._preferredSize.width), this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        })), this._sashListener.add(en.any(this._northSash.onDidReset, this._southSash.onDidReset)((i)=>{
            this._preferredSize && (this.layout(this._preferredSize.height, this._size.width), this._onDidResize.fire({
                dimension: this._size,
                done: !0
            }));
        }));
    }
    dispose() {
        this._northSash.dispose(), this._southSash.dispose(), this._eastSash.dispose(), this._westSash.dispose(), this._sashListener.dispose(), this._onDidResize.dispose(), this._onDidWillResize.dispose(), this.domNode.remove();
    }
    enableSashes(t, e, n, i) {
        this._northSash.state = t ? 3 : 0, this._eastSash.state = e ? 3 : 0, this._southSash.state = n ? 3 : 0, this._westSash.state = i ? 3 : 0;
    }
    layout(t = this.size.height, e = this.size.width) {
        const { height: n, width: i } = this._minSize, { height: r, width: s } = this._maxSize;
        t = Math.max(n, Math.min(r, t)), e = Math.max(i, Math.min(s, e));
        const o = new nd(e, t);
        nd.equals(o, this._size) || (this.domNode.style.height = t + "px", this.domNode.style.width = e + "px", this._size = o, this._northSash.layout(), this._eastSash.layout(), this._southSash.layout(), this._westSash.layout());
    }
    clearSashHoverState() {
        this._eastSash.clearSashHoverState(), this._westSash.clearSashHoverState(), this._northSash.clearSashHoverState(), this._southSash.clearSashHoverState();
    }
    get size() {
        return this._size;
    }
    set maxSize(t) {
        this._maxSize = t;
    }
    get maxSize() {
        return this._maxSize;
    }
    set minSize(t) {
        this._minSize = t;
    }
    get minSize() {
        return this._minSize;
    }
    set preferredSize(t) {
        this._preferredSize = t;
    }
    get preferredSize() {
        return this._preferredSize;
    }
};

}
