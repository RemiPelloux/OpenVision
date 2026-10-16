import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var BPp;
export { BPp };
var __wakaru_FI1_initialized = false;
export function FI1() {
if (__wakaru_FI1_initialized) return;
__wakaru_FI1_initialized = true;
"use strict";
E(), Qs(), BPp = class {
    constructor(t, e, n){
        this._editorSelection = t, this._ranges = e, this._replaceStrings = n, this._trackedEditorSelectionId = null;
    }
    getEditOperations(t, e) {
        if (this._ranges.length > 0) {
            const n = [];
            for(let s = 0; s < this._ranges.length; s++)n.push({
                range: this._ranges[s],
                text: this._replaceStrings[s]
            });
            n.sort((s, o)=>qt.compareRangesUsingStarts(s.range, o.range));
            const i = [];
            let r = n[0];
            for(let s = 1; s < n.length; s++)r.range.endLineNumber === n[s].range.startLineNumber && r.range.endColumn === n[s].range.startColumn ? (r.range = r.range.plusRange(n[s].range), r.text = r.text + n[s].text) : (i.push(r), r = n[s]);
            i.push(r);
            for (const s of i)e.addEditOperation(s.range, s.text);
        }
        this._trackedEditorSelectionId = e.trackSelection(this._editorSelection);
    }
    computeCursorState(t, e) {
        return e.getTrackedSelection(this._trackedEditorSelectionId);
    }
};

}
