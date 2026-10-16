import { EV } from "./HVr.js";
import { dr } from "./arrays.js";
import { _g } from "./htmlContent.js";
import { Cb, nU } from "./model_2.js";
import { pFt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var OFh;
export { OFh };
var __wakaru_xl__initialized = false;
export function xl_() {
if (__wakaru_xl__initialized) return;
__wakaru_xl__initialized = true;
"use strict";
x(), dr(), _g(), Cb(), OFh = class {
    constructor(e){
        this._editor = e;
    }
    computeSync(e) {
        const t = (s)=>({
                value: s
            }), n = this._editor.getLineDecorations(e.lineNumber), i = [], r = e.laneOrLine === "lineNo";
        if (!n) return i;
        for (const s of n){
            const o = s.options.glyphMargin?.position ?? nU.Center;
            if (!r && o !== e.laneOrLine) continue;
            const a = r ? s.options.lineNumberHoverMessage : s.options.glyphMarginHoverMessage;
            !a || pFt(a) || i.push(...EV(a).map(t));
        }
        return i;
    }
};

}
