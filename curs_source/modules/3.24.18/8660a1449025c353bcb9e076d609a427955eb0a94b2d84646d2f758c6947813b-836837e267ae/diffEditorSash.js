import { Qe, st } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { EBt, I5e, P_, _7o, bc, kwe } from "./ze.js";
var zqd, rqo;
export { rqo, zqd };
var __wakaru_Vqd_initialized = false;
export function Vqd() {
if (__wakaru_Vqd_initialized) return;
__wakaru_Vqd_initialized = true;
"use strict";
E(), kwe(), Qe(), Jc(), zqd = class {
    constructor(t, e){
        this._options = t, this.dimensions = e, this.sashLeft = _7o(this, (n)=>{
            const i = this._sashRatio.read(n) ?? this._options.splitViewDefaultRatio.read(n);
            return this._computeSashLeft(i, n);
        }, (n, i)=>{
            const r = this.dimensions.width.get();
            this._sashRatio.set(n / r, i);
        }), this._sashRatio = bc(this, void 0);
    }
    resetSash() {
        this._sashRatio.set(void 0, void 0);
    }
    _computeSashLeft(t, e) {
        const n = this.dimensions.width.read(e), i = Math.floor(this._options.splitViewDefaultRatio.read(e) * n), r = this._options.enableSplitViewResizing.read(e) ? Math.floor(t * n) : i, s = 100;
        return n <= s * 2 ? i : r < s ? s : r > n - s ? n - s : r;
    }
}, rqo = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._domNode = t, this._dimensions = e, this._enabled = n, this._boundarySashes = i, this.sashLeft = r, this._resetSash = s, this._sash = this._register(new I5e(this._domNode, {
            getVerticalSashTop: (o)=>0,
            getVerticalSashLeft: (o)=>this.sashLeft.get(),
            getVerticalSashHeight: (o)=>this._dimensions.height.get()
        }, {
            orientation: P_.VERTICAL
        })), this._startSashPosition = void 0, this._register(this._sash.onDidStart(()=>{
            this._startSashPosition = this.sashLeft.get();
        })), this._register(this._sash.onDidChange((o)=>{
            this.sashLeft.set(this._startSashPosition + (o.currentX - o.startX), void 0);
        })), this._register(this._sash.onDidEnd(()=>this._sash.layout())), this._register(this._sash.onDidReset(()=>this._resetSash())), this._register(Jd((o)=>{
            const a = this._boundarySashes.read(o);
            a && (this._sash.orthogonalEndSash = a.bottom);
        })), this._register(Jd((o)=>{
            const a = this._enabled.read(o);
            this._sash.state = a ? EBt.Enabled : EBt.Disabled, this.sashLeft.read(o), this._dimensions.height.read(o), this._sash.layout();
        }));
    }
};

}
