import { jfl, tRg } from "./diffEditorModel.js";
import { E } from "./tslib.es6.js";
var $fl;
export { $fl };
var __wakaru_nRg_initialized = false;
export function nRg() {
if (__wakaru_nRg_initialized) return;
__wakaru_nRg_initialized = true;
"use strict";
E(), tRg(), $fl = class extends jfl {
    constructor(t, e){
        super(t, e), this._textDiffEditorModel = void 0, this._originalModel = t, this._modifiedModel = e, this.updateTextDiffEditorModel();
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
