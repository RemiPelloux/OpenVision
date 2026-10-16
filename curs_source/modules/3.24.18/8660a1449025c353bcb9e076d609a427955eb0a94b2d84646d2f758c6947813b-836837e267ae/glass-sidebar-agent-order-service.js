import { Il, bn } from "./SZu.js";
import { p4 } from "./arraysFind.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var b9s, cI_;
export { b9s, cI_ };
var __wakaru_pwc_initialized = false;
export function pwc() {
if (__wakaru_pwc_initialized) return;
__wakaru_pwc_initialized = true;
"use strict";
E(), p4(), Rn(), It(), b9s = Il("glassSidebarAgentOrderService"), cI_ = class {
    constructor(){
        this.visibleAgentIds = [];
    }
    setVisibleAgentIds(t) {
        this.visibleAgentIds = t;
    }
    getVisibleAgentIds() {
        return this.visibleAgentIds;
    }
}, bn(b9s, cI_, 1, 1);

}
