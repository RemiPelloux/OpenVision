import { X9, nze } from "./date.js";
import { x } from "./tslib.es6.js";
var U6c, $6c;
export { $6c, U6c };
var __wakaru_mts_initialized = false;
export function mts() {
if (__wakaru_mts_initialized) return;
__wakaru_mts_initialized = true;
"use strict";
x(), X9(), U6c = class {
    constructor(e){
        this._content = e.content;
    }
    getSegmentAtIndex(e) {
        return this._content[e];
    }
    getSegmentData(e) {}
}, $6c = class {
    constructor(e){
        this._segments = [];
        const t = e.content, n = nze.Segmenter(void 0, {
            granularity: "grapheme"
        }), i = Array.from(n.segment(t));
        let r = 0;
        for(let s = 0; s < t.length; s++){
            const o = i[r];
            if (!o) break;
            if (o.index !== s) {
                this._segments.push(void 0);
                continue;
            }
            r++, this._segments.push(o);
        }
    }
    getSegmentAtIndex(e) {
        return this._segments[e]?.segment;
    }
    getSegmentData(e) {
        return this._segments[e];
    }
};

}
