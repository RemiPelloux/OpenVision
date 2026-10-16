import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var Vku;
export { Vku };
var __wakaru_fcv_initialized = false;
export function fcv() {
if (__wakaru_fcv_initialized) return;
__wakaru_fcv_initialized = true;
"use strict";
x(), qi(), Vku = class {
    constructor(e, t, n){
        this._editorSelection = e, this._ranges = t, this._replaceStrings = n, this._trackedEditorSelectionId = null;
    }
    getEditOperations(e, t) {
        if (this._ranges.length > 0) {
            const n = [];
            for(let s = 0; s < this._ranges.length; s++)n.push({
                range: this._ranges[s],
                text: this._replaceStrings[s]
            });
            n.sort((s, o)=>dt.compareRangesUsingStarts(s.range, o.range));
            const i = [];
            let r = n[0];
            for(let s = 1; s < n.length; s++)r.range.endLineNumber === n[s].range.startLineNumber && r.range.endColumn === n[s].range.startColumn ? (r.range = r.range.plusRange(n[s].range), r.text = r.text + n[s].text) : (i.push(r), r = n[s]);
            i.push(r);
            for (const s of i)t.addEditOperation(s.range, s.text);
        }
        this._trackedEditorSelectionId = t.trackSelection(this._editorSelection);
    }
    computeCursorState(e, t) {
        return t.getTrackedSelection(this._trackedEditorSelectionId);
    }
};

}
