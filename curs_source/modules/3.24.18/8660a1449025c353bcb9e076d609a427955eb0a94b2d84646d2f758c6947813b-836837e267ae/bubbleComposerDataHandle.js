import { uv } from "./composerData.js";
import { Xqa } from "./standaloneOpenModelConfig.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var sFm;
export { sFm };
var __wakaru_FEn_initialized = false;
export function FEn() {
if (__wakaru_FEn_initialized) return;
__wakaru_FEn_initialized = true;
"use strict";
E(), pi(), uv(), Xqa(), Xqa(), sFm = class {
    constructor(t, e){
        this.setData = (...n)=>{
            this.writeToBubble(...n);
        }, this.readFromBubble = t, this.writeToBubble = e;
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
