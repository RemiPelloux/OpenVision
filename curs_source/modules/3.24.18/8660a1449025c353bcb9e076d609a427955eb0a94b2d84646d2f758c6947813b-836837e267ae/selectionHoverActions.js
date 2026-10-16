import { bn, jn } from "./SZu.js";
import { Bbi, Ef } from "./constants_18.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var lus, BCg;
export { BCg, lus };
var __wakaru_cus_initialized = false;
export function cus() {
if (__wakaru_cus_initialized) return;
__wakaru_cus_initialized = true;
"use strict";
E(), Rn(), It(), Ef(), lus = jn("selectionHoverActions"), BCg = class {
    constructor(){
        this.addToChat = {
            commandId: Bbi,
            label: "Add to Chat",
            acceptsSelectionRange: !1
        }, this.secondary = void 0, this.showsQuickEdit = !0, this.hidesWhileCppSuggests = !0, this.anchorsToSelectionEnd = !1;
    }
}, bn(lus, BCg, 1);

}
