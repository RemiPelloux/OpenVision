import { PD, SY } from "./lineTokens.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
var Yii, gwr, $Fd;
export { $Fd, Yii, gwr };
var __wakaru_fwr_initialized = false;
export function fwr() {
if (__wakaru_fwr_initialized) return;
__wakaru_fwr_initialized = true;
"use strict";
E(), W3(), SY(), Yii = class zYs {
    constructor(e){
        this._tokenInfo = e;
    }
    static fromLineTokens(e) {
        const n = [];
        for(let i = 0; i < e.getCount(); i++)n.push(new gwr(e.getEndOffset(i) - e.getStartOffset(i), e.getMetadata(i)));
        return zYs.create(n);
    }
    static create(e) {
        return new zYs(e);
    }
    toLineTokens(e, n) {
        return PD.createFromTextAndMetadata(this.map((i, r)=>({
                text: i.substring(e),
                metadata: r.metadata
            })), n);
    }
    forEach(e) {
        let n = 0;
        for (const i of this._tokenInfo){
            const r = new Im(n, n + i.length);
            e(r, i), n += i.length;
        }
    }
    map(e) {
        const n = [];
        let i = 0;
        for (const r of this._tokenInfo){
            const s = new Im(i, i + r.length);
            n.push(e(s, r)), i += r.length;
        }
        return n;
    }
    slice(e) {
        const n = [];
        let i = 0;
        for (const r of this._tokenInfo){
            const s = i, o = s + r.length;
            if (o > e.start) {
                if (s >= e.endExclusive) break;
                const a = Math.max(0, e.start - s), l = Math.max(0, o - e.endExclusive);
                n.push(new gwr(r.length - a - l, r.metadata));
            }
            i += r.length;
        }
        return zYs.create(n);
    }
}, gwr = class {
    constructor(t, e){
        this.length = t, this.metadata = e;
    }
}, $Fd = class {
    constructor(){
        this._tokens = [];
    }
    add(t, e) {
        this._tokens.push(new gwr(t, e));
    }
    build() {
        return Yii.create(this._tokens);
    }
};

}
