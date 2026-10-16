import { P7, uA } from "./lineTokens.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
var agn, xfi, PPc;
export { PPc, agn, xfi };
var __wakaru_Ifi_initialized = false;
export function Ifi() {
if (__wakaru_Ifi_initialized) return;
__wakaru_Ifi_initialized = true;
"use strict";
x(), uR(), P7(), agn = class r1r {
    constructor(t){
        this._tokenInfo = t;
    }
    static fromLineTokens(t) {
        const n = [];
        for(let i = 0; i < t.getCount(); i++)n.push(new xfi(t.getEndOffset(i) - t.getStartOffset(i), t.getMetadata(i)));
        return r1r.create(n);
    }
    static create(t) {
        return new r1r(t);
    }
    toLineTokens(t, n) {
        return uA.createFromTextAndMetadata(this.map((i, r)=>({
                text: i.substring(t),
                metadata: r.metadata
            })), n);
    }
    forEach(t) {
        let n = 0;
        for (const i of this._tokenInfo){
            const r = new Mh(n, n + i.length);
            t(r, i), n += i.length;
        }
    }
    map(t) {
        const n = [];
        let i = 0;
        for (const r of this._tokenInfo){
            const s = new Mh(i, i + r.length);
            n.push(t(s, r)), i += r.length;
        }
        return n;
    }
    slice(t) {
        const n = [];
        let i = 0;
        for (const r of this._tokenInfo){
            const s = i, o = s + r.length;
            if (o > t.start) {
                if (s >= t.endExclusive) break;
                const a = Math.max(0, t.start - s), c = Math.max(0, o - t.endExclusive);
                n.push(new xfi(r.length - a - c, r.metadata));
            }
            i += r.length;
        }
        return r1r.create(n);
    }
}, xfi = class {
    constructor(e, t){
        this.length = e, this.metadata = t;
    }
}, PPc = class {
    constructor(){
        this._tokens = [];
    }
    add(e, t) {
        this._tokens.push(new xfi(e, t));
    }
    build() {
        return agn.create(this._tokens);
    }
};

}
