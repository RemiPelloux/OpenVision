import { E } from "./tslib.es6.js";
var ZMo;
export { ZMo };
var __wakaru_ndd_initialized = false;
export function ndd() {
if (__wakaru_ndd_initialized) return;
__wakaru_ndd_initialized = true;
"use strict";
E(), ZMo = class {
    constructor(t, e){
        this._fields = t, this._normalizer = e;
    }
    findJsonName(t) {
        if (!this.jsonNames) {
            const e = {};
            for (const n of this.list())e[n.jsonName] = e[n.name] = n;
            this.jsonNames = e;
        }
        return this.jsonNames[t];
    }
    find(t) {
        if (!this.numbers) {
            const e = {};
            for (const n of this.list())e[n.no] = n;
            this.numbers = e;
        }
        return this.numbers[t];
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, e)=>t.no - e.no)), this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const t = this.members;
            let e;
            for (const n of this.list())n.oneof ? n.oneof !== e && (e = n.oneof, t.push(e)) : t.push(n);
        }
        return this.members;
    }
};

}
