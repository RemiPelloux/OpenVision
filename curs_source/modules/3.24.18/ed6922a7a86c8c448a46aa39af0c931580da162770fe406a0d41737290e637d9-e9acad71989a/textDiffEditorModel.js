import { ABh, nDo } from "./diffEditorModel.js";
import { x } from "./tslib.es6.js";
var iDo;
export { iDo };
var __wakaru_RBh_initialized = false;
export function RBh() {
if (__wakaru_RBh_initialized) return;
__wakaru_RBh_initialized = true;
"use strict";
x(), ABh(), iDo = class extends nDo {
    constructor(e, t){
        super(e, t), this._textDiffEditorModel = void 0, this._originalModel = e, this._modifiedModel = t, this.updateTextDiffEditorModel();
    }
    get originalModel() {
        return this._originalModel;
    }
    get modifiedModel() {
        return this._modifiedModel;
    }
    get textDiffEditorModel() {
        return this._textDiffEditorModel;
    }
    async resolve() {
        await super.resolve(), this.updateTextDiffEditorModel();
    }
    updateTextDiffEditorModel() {
        this.originalModel?.isResolved() && this.modifiedModel?.isResolved() && (this._textDiffEditorModel ? (this._textDiffEditorModel.original = this.originalModel.textEditorModel, this._textDiffEditorModel.modified = this.modifiedModel.textEditorModel) : this._textDiffEditorModel = {
            original: this.originalModel.textEditorModel,
            modified: this.modifiedModel.textEditorModel
        });
    }
    isResolved() {
        return !!this._textDiffEditorModel;
    }
    isReadonly() {
        return !!this.modifiedModel && this.modifiedModel.isReadonly();
    }
    dispose() {
        this._textDiffEditorModel = void 0, super.dispose();
    }
};

}
