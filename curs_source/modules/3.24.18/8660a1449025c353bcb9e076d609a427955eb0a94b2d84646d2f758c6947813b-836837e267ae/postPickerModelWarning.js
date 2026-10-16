import { P4k } from "./Ycg.js";
import { lrs } from "./index_17.ts";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var Egs;
export { Egs };
var __wakaru_CCl_initialized = false;
export function CCl() {
if (__wakaru_CCl_initialized) return;
__wakaru_CCl_initialized = true;
"use strict";
E(), lrs(), Mt(), Egs = class {
    constructor(){
        this.openPickerIds = new Set;
    }
    onPickerOpened(t = "default") {
        this.openPickerIds.size === 0 && (this.pendingWarning = void 0), this.openPickerIds.add(t);
    }
    onSelectionChanged(t, e, n, i) {
        this.openPickerIds.size !== 0 && (this.pendingWarning = P4k(t, e, n, i));
    }
    onPickerClosed(t = "default") {
        if (!this.openPickerIds.delete(t) || this.openPickerIds.size > 0) return;
        const e = this.pendingWarning;
        return this.pendingWarning = void 0, e;
    }
};

}
