import { Nte } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Ek } from "./htmlContent.js";
import { J0, ihe } from "./model_2.js";
import { E } from "./tslib.es6.js";
import { Gfn } from "./ze.js";
var yCg;
export { yCg };
var __wakaru_uxk_initialized = false;
export function uxk() {
if (__wakaru_uxk_initialized) return;
__wakaru_uxk_initialized = true;
"use strict";
E(), bo(), Ek(), J0(), yCg = class {
    constructor(t){
        this._editor = t;
    }
    computeSync(t) {
        const e = (s)=>({
                value: s
            }), n = this._editor.getLineDecorations(t.lineNumber), i = [], r = t.laneOrLine === "lineNo";
        if (!n) return i;
        for (const s of n){
            const o = s.options.glyphMargin?.position ?? ihe.Center;
            if (!r && o !== t.laneOrLine) continue;
            const a = r ? s.options.lineNumberHoverMessage : s.options.glyphMarginHoverMessage;
            !a || Gfn(a) || i.push(...Nte(a).map(e));
        }
        return i;
    }
};

}
