import { x } from "./tslib.es6.js";
var u9h;
export { u9h };
var __wakaru_th__initialized = false;
export function th_() {
if (__wakaru_th__initialized) return;
__wakaru_th__initialized = true;
"use strict";
x(), u9h = class {
    constructor(e, t){
        this._totalDataLength = 0, this._entries = [
            {
                cols: e,
                rows: t,
                data: []
            }
        ];
    }
    handleResize(e, t) {
        if (this._entries.length > 0 && this._entries[this._entries.length - 1].data.length === 0 && this._entries.pop(), this._entries.length > 0) {
            const n = this._entries[this._entries.length - 1];
            if (n.cols === e && n.rows === t) return;
            if (n.cols === 0 && n.rows === 0) {
                n.cols = e, n.rows = t;
                return;
            }
        }
        this._entries.push({
            cols: e,
            rows: t,
            data: []
        });
    }
    handleData(e) {
        for(this._entries[this._entries.length - 1].data.push(e), this._totalDataLength += e.length; this._totalDataLength > 10485760;){
            const n = this._entries[0], i = this._totalDataLength - 10485760;
            i >= n.data[0].length ? (this._totalDataLength -= n.data[0].length, n.data.shift(), n.data.length === 0 && this._entries.shift()) : (n.data[0] = n.data[0].substr(i), this._totalDataLength -= i);
        }
    }
    generateReplayEventSync() {
        return this._entries.forEach((e)=>{
            e.data.length > 0 && (e.data = [
                e.data.join("")
            ]);
        }), {
            events: this._entries.map((e)=>({
                    cols: e.cols,
                    rows: e.rows,
                    data: e.data[0] ?? ""
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
