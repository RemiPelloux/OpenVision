import { R9t, yY } from "./date.js";
import { E } from "./tslib.es6.js";
var J$d, eHd;
export { J$d, eHd };
var __wakaru__Wo_initialized = false;
export function _Wo() {
if (__wakaru__Wo_initialized) return;
__wakaru__Wo_initialized = true;
"use strict";
E(), yY(), J$d = class {
    constructor(t){
        this._content = t.content;
    }
    getSegmentAtIndex(t) {
        return this._content[t];
    }
    getSegmentData(t) {}
}, eHd = class {
    constructor(t){
        this._segments = [];
        const e = t.content, n = R9t.Segmenter(void 0, {
            granularity: "grapheme"
        }), i = Array.from(n.segment(e));
        let r = 0;
        for(let s = 0; s < e.length; s++){
            const o = i[r];
            if (!o) break;
            if (o.index !== s) {
                this._segments.push(void 0);
                continue;
            }
            r++, this._segments.push(o);
        }
    }
    getSegmentAtIndex(t) {
        return this._segments[t]?.segment;
    }
    getSegmentData(t) {
        return this._segments[t];
    }
};

}
