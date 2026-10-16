import { bTe, dhe } from "./editorModel.js";
import { x } from "./tslib.es6.js";
var nDo;
export { nDo };
var __wakaru_ABh_initialized = false;
export function ABh() {
if (__wakaru_ABh_initialized) return;
__wakaru_ABh_initialized = true;
"use strict";
x(), bTe(), nDo = class extends dhe {
    get originalModel() {
        return this._originalModel;
    }
    get modifiedModel() {
        return this._modifiedModel;
    }
    constructor(e, t){
        super(), this._originalModel = e, this._modifiedModel = t;
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
