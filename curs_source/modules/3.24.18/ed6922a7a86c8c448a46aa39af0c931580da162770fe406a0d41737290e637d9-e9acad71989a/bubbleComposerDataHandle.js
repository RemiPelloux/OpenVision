import { Wf } from "./composerData.js";
import { qn } from "./qIc.js";
import { oho } from "./standaloneOpenModelConfig.js";
import { x } from "./tslib.es6.js";
var _qd;
export { _qd };
var __wakaru_$Wt_initialized = false;
export function $Wt() {
if (__wakaru_$Wt_initialized) return;
__wakaru_$Wt_initialized = true;
"use strict";
x(), qn(), Wf(), oho(), oho(), _qd = class {
    constructor(e, t){
        this.setData = (...n)=>{
            this.writeToBubble(...n);
        }, this.readFromBubble = e, this.writeToBubble = t;
    }
    get composerId() {
        return this.readFromBubble().composerId;
    }
    get data() {
        return this.readFromBubble();
    }
    async restore() {}
};

}
