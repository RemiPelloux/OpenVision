import { jsw } from "./Ycg.js";
import { p2l } from "./composerReactPlaneRowBox.js";
import { Ef } from "./constants_18.js";
import { Hn } from "./dom_2.js";
import { Usw } from "./index_28.ts";
import { E } from "./tslib.es6.js";
var Akf, CMl, CBe, Rkf, Pkf, Mkf, Dkf, TMl, EMl;
export { Akf, CBe, CMl, Dkf, EMl, Mkf, Pkf, Rkf, TMl };
var __wakaru_Ysw_initialized = false;
export function Ysw() {
if (__wakaru_Ysw_initialized) return;
__wakaru_Ysw_initialized = true;
"use strict";
E(), Usw(), Hn(), Ef(), p2l(), Akf = (t)=>`${t.style.font}|${t.style.lineHeightPx}|${t.fullWidthPx}|${t.chromePx}`, CMl = 8, CBe = new Map, Rkf = class extends Map {
    constructor(t){
        super(), this.identityEpochKey = t, this.admitted = !1;
    }
    set(t, e) {
        return super.set(t, e), this.admitted || (this.admitted = !0, jsw(this.identityEpochKey, this)), this;
    }
}, Pkf = ".composer-human-message-content", Mkf = ".aislash-editor-input-readonly", Dkf = 64, TMl = 34, EMl = 24;

}
