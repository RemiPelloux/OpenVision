import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var lPg;
export { lPg };
var __wakaru_SDk_initialized = false;
export function SDk() {
if (__wakaru_SDk_initialized) return;
__wakaru_SDk_initialized = true;
"use strict";
E(), Gt(), Qe(), lPg = class extends st {
    constructor(){
        super(...arguments), this.type = 6, this._onPromptTypeChanged = this._register(new tt), this.onPromptTypeChanged = this._onPromptTypeChanged.event;
    }
    get promptType() {
        return this._promptType;
    }
    setPromptType(t) {
        this._promptType = t, this._onPromptTypeChanged.fire(t);
    }
};

}
