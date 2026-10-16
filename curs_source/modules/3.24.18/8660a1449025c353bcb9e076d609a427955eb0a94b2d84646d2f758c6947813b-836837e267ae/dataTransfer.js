import { kk } from "./Iwo.js";
import { bo } from "./arrays.js";
import { IT, np } from "./iterator.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { Tzd, eEr } from "./ze.js";
var dvn, wHe;
export { dvn, wHe };
var __wakaru_hnt_initialized = false;
export function hnt() {
if (__wakaru_hnt_initialized) return;
__wakaru_hnt_initialized = true;
"use strict";
E(), bo(), IT(), Xo(), dvn = class {
    constructor(){
        this._entries = new Map;
    }
    get size() {
        let t = 0;
        for (const e of this._entries)t++;
        return t;
    }
    has(t) {
        return this._entries.has(this.toKey(t));
    }
    matches(t) {
        const e = [
            ...this._entries.keys()
        ];
        return np.some(this, ([n, i])=>i.asFile()) && e.push("files"), Tzd(eEr(t), e);
    }
    get(t) {
        return this._entries.get(this.toKey(t))?.[0];
    }
    append(t, e) {
        const n = this._entries.get(t);
        n ? n.push(e) : this._entries.set(this.toKey(t), [
            e
        ]);
    }
    replace(t, e) {
        this._entries.set(this.toKey(t), [
            e
        ]);
    }
    delete(t) {
        this._entries.delete(this.toKey(t));
    }
    *[Symbol.iterator]() {
        for (const [t, e] of this._entries)for (const n of e)yield [
            t,
            n
        ];
    }
    toKey(t) {
        return eEr(t);
    }
}, wHe = Object.freeze({
    create: (t)=>kk(t.map((e)=>e.toString())).join(`\r
`),
    split: (t)=>t.split(`\r
`),
    parse: (t)=>wHe.split(t).filter((e)=>!e.startsWith("#"))
});

}
