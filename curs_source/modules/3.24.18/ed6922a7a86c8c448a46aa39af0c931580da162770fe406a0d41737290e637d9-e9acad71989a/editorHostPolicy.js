import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var M2t, nLc;
export { M2t, nLc };
var __wakaru_pgn_initialized = false;
export function pgn() {
if (__wakaru_pgn_initialized) return;
__wakaru_pgn_initialized = true;
"use strict";
x(), Pn(), Ze(), M2t = vn("editorHostPolicy"), nLc = class {
    constructor(){
        this.treatsContentEditableAsNativeTextInput = !1, this.alwaysHidesInlineDiffDecorations = !1, this.positionsCppPreviewBoxFromLineLayout = !1;
    }
}, mn(M2t, nLc, 1);

}
