import { Di, Gt, Pn, Qe, rd, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var X2g;
export { X2g };
var __wakaru_mDk_initialized = false;
export function mDk() {
if (__wakaru_mDk_initialized) return;
__wakaru_mDk_initialized = true;
"use strict";
E(), Gt(), Qe(), Di(), X2g = class extends st {
    constructor(t){
        super(), this._initializationPromise = t, this._isOsSet = !1, this._onLineData = this._register(new tt), this.onLineData = this._onLineData.event;
    }
    async activate(t) {
        this._xterm = t;
        const e = t.buffer;
        await this._initializationPromise, this._register(t.onLineFeed(()=>{
            const n = e.active.getLine(e.active.baseY + e.active.cursorY);
            n && !n.isWrapped && this._sendLineData(e.active, e.active.baseY + e.active.cursorY - 1);
        })), this._register(Pn(()=>{
            this._sendLineData(e.active, e.active.baseY + e.active.cursorY);
        }));
    }
    setOperatingSystem(t) {
        if (!(this._isOsSet || !this._xterm) && (this._isOsSet = !0, t === rd.Windows)) {
            const e = this._xterm;
            this._register(e.parser.registerCsiHandler({
                final: "H"
            }, ()=>{
                const n = e.buffer;
                return this._sendLineData(n.active, n.active.baseY + n.active.cursorY), !1;
            }));
        }
    }
    _sendLineData(t, e) {
        let n = t.getLine(e);
        if (!n) return;
        let i = n.translateToString(!0);
        for(; e > 0 && n.isWrapped && (n = t.getLine(--e), !!n);)i = n.translateToString(!1) + i;
        this._onLineData.fire(i);
    }
};

}
