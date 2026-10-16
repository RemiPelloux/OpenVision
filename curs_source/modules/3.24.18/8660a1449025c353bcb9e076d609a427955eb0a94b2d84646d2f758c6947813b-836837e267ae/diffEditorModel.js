import { hlt, x9e } from "./editorModel.js";
import { E } from "./tslib.es6.js";
var jfl;
export { jfl };
var __wakaru_tRg_initialized = false;
export function tRg() {
if (__wakaru_tRg_initialized) return;
__wakaru_tRg_initialized = true;
"use strict";
E(), hlt(), jfl = class extends x9e {
    get originalModel() {
        return this._originalModel;
    }
    get modifiedModel() {
        return this._modifiedModel;
    }
    constructor(t, e){
        super(), this._originalModel = t, this._modifiedModel = e;
    }
    async resolve() {
        await Promise.all([
            this._originalModel?.resolve(),
            this._modifiedModel?.resolve()
        ]);
    }
    isResolved() {
        return !!(this._originalModel?.isResolved() && this._modifiedModel?.isResolved());
    }
    dispose() {
        super.dispose();
    }
};

}
