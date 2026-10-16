import { Se, Ul, bt, jn, rn, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var b9h;
export { b9h };
var __wakaru_oh__initialized = false;
export function oh_() {
if (__wakaru_oh__initialized) return;
__wakaru_oh__initialized = true;
"use strict";
x(), bt(), Se(), jn(), b9h = class extends we {
    constructor(e){
        super(), this._initializationPromise = e, this._isOsSet = !1, this._onLineData = this._register(new ve), this.onLineData = this._onLineData.event;
    }
    async activate(e) {
        this._xterm = e;
        const t = e.buffer;
        await this._initializationPromise, this._register(e.onLineFeed(()=>{
            const n = t.active.getLine(t.active.baseY + t.active.cursorY);
            n && !n.isWrapped && this._sendLineData(t.active, t.active.baseY + t.active.cursorY - 1);
        })), this._register(rn(()=>{
            this._sendLineData(t.active, t.active.baseY + t.active.cursorY);
        }));
    }
    setOperatingSystem(e) {
        if (!(this._isOsSet || !this._xterm) && (this._isOsSet = !0, e === Ul.Windows)) {
            const t = this._xterm;
            this._register(t.parser.registerCsiHandler({
                final: "H"
            }, ()=>{
                const n = t.buffer;
                return this._sendLineData(n.active, n.active.baseY + n.active.cursorY), !1;
            }));
        }
    }
    _sendLineData(e, t) {
        let n = e.getLine(t);
        if (!n) return;
        let i = n.translateToString(!0);
        for(; t > 0 && n.isWrapped && (n = e.getLine(--t), !!n);)i = n.translateToString(!1) + i;
        this._onLineData.fire(i);
    }
};

}
