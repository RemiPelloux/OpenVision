import { E } from "./tslib.es6.js";
var $2g;
export { $2g };
var __wakaru_cDk_initialized = false;
export function cDk() {
if (__wakaru_cDk_initialized) return;
__wakaru_cDk_initialized = true;
"use strict";
E(), $2g = class {
    constructor(t, e){
        this._totalDataLength = 0, this._entries = [
            {
                cols: t,
                rows: e,
                data: []
            }
        ];
    }
    handleResize(t, e) {
        if (this._entries.length > 0 && this._entries[this._entries.length - 1].data.length === 0 && this._entries.pop(), this._entries.length > 0) {
            const n = this._entries[this._entries.length - 1];
            if (n.cols === t && n.rows === e) return;
            if (n.cols === 0 && n.rows === 0) {
                n.cols = t, n.rows = e;
                return;
            }
        }
        this._entries.push({
            cols: t,
            rows: e,
            data: []
        });
    }
    handleData(t) {
        for(this._entries[this._entries.length - 1].data.push(t), this._totalDataLength += t.length; this._totalDataLength > 10485760;){
            const n = this._entries[0], i = this._totalDataLength - 10485760;
            i >= n.data[0].length ? (this._totalDataLength -= n.data[0].length, n.data.shift(), n.data.length === 0 && this._entries.shift()) : (n.data[0] = n.data[0].substr(i), this._totalDataLength -= i);
        }
    }
    generateReplayEventSync() {
        return this._entries.forEach((t)=>{
            t.data.length > 0 && (t.data = [
                t.data.join("")
            ]);
        }), {
            events: this._entries.map((t)=>({
                    cols: t.cols,
                    rows: t.rows,
                    data: t.data[0] ?? ""
                })),
            commands: {
                isWindowsPty: !1,
                hasRichCommandDetection: !1,
                commands: [],
                promptInputModel: void 0
            }
        };
    }
    async generateReplayEvent() {
        return this.generateReplayEventSync();
    }
};

}
