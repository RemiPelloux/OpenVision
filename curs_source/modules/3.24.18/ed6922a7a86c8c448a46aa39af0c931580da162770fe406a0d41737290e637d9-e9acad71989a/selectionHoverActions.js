import { eg, jAn } from "./constants_18.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var sRo, FFh;
export { FFh, sRo };
var __wakaru_BFh_initialized = false;
export function BFh() {
if (__wakaru_BFh_initialized) return;
__wakaru_BFh_initialized = true;
"use strict";
x(), Pn(), Ze(), eg(), sRo = vn("selectionHoverActions"), FFh = class {
    constructor(){
        this.addToChat = {
            commandId: jAn,
            label: "Add to Chat",
            acceptsSelectionRange: !1
        }, this.secondary = void 0, this.showsQuickEdit = !0, this.hidesWhileCppSuggests = !0, this.anchorsToSelectionEnd = !1;
    }
}, mn(sRo, FFh, 1);

}
