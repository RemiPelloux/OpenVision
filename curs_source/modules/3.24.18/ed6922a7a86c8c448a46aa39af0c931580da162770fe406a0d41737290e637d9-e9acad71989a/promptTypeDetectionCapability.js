import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var D9h;
export { D9h };
var __wakaru_ph__initialized = false;
export function ph_() {
if (__wakaru_ph__initialized) return;
__wakaru_ph__initialized = true;
"use strict";
x(), bt(), Se(), D9h = class extends we {
    constructor(){
        super(...arguments), this.type = 6, this._onPromptTypeChanged = this._register(new ve), this.onPromptTypeChanged = this._onPromptTypeChanged.event;
    }
    get promptType() {
        return this._promptType;
    }
    setPromptType(e) {
        this._promptType = e, this._onPromptTypeChanged.fire(e);
    }
};

}
