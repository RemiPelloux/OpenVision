import { Se, we } from "./HVr.js";
import { Hc } from "./autorun.js";
import { qa } from "./observable.js";
import { Xge, Xo, qK, sYr, smt, xp } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _7c, Jns;
export { Jns, _7c };
var __wakaru_b7c_initialized = false;
export function b7c() {
if (__wakaru_b7c_initialized) return;
__wakaru_b7c_initialized = true;
"use strict";
x(), qK(), Se(), qa(), _7c = class {
    constructor(e, t){
        this._options = e, this.dimensions = t, this.sashLeft = sYr(this, (n)=>{
            const i = this._sashRatio.read(n) ?? this._options.splitViewDefaultRatio.read(n);
            return this._computeSashLeft(i, n);
        }, (n, i)=>{
            const r = this.dimensions.width.get();
            this._sashRatio.set(n / r, i);
        }), this._sashRatio = Xo(this, void 0);
    }
    resetSash() {
        this._sashRatio.set(void 0, void 0);
    }
    _computeSashLeft(e, t) {
        const n = this.dimensions.width.read(t), i = Math.floor(this._options.splitViewDefaultRatio.read(t) * n), r = this._options.enableSplitViewResizing.read(t) ? Math.floor(e * n) : i, s = 100;
        return n <= s * 2 ? i : r < s ? s : r > n - s ? n - s : r;
    }
}, Jns = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._domNode = e, this._dimensions = t, this._enabled = n, this._boundarySashes = i, this.sashLeft = r, this._resetSash = s, this._sash = this._register(new Xge(this._domNode, {
            getVerticalSashTop: (o)=>0,
            getVerticalSashLeft: (o)=>this.sashLeft.get(),
            getVerticalSashHeight: (o)=>this._dimensions.height.get()
        }, {
            orientation: xp.VERTICAL
        })), this._startSashPosition = void 0, this._register(this._sash.onDidStart(()=>{
            this._startSashPosition = this.sashLeft.get();
        })), this._register(this._sash.onDidChange((o)=>{
            this.sashLeft.set(this._startSashPosition + (o.currentX - o.startX), void 0);
        })), this._register(this._sash.onDidEnd(()=>this._sash.layout())), this._register(this._sash.onDidReset(()=>this._resetSash())), this._register(Hc((o)=>{
            const a = this._boundarySashes.read(o);
            a && (this._sash.orthogonalEndSash = a.bottom);
        })), this._register(Hc((o)=>{
            const a = this._enabled.read(o);
            this._sash.state = a ? smt.Enabled : smt.Disabled, this.sashLeft.read(o), this._dimensions.height.read(o), this._sash.layout();
        }));
    }
};

}
