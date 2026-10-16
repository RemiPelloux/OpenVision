import { h } from "./tslib.es6.js";
var xM;
export { xM };
var __wakaru_Oj_initialized = false;
export function Oj() {
if (__wakaru_Oj_initialized) return;
__wakaru_Oj_initialized = true;
"use strict";
h(), xM = class {
    constructor(e, t){
        this._fields = e, this._normalizer = t;
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const t = {};
            for (const n of this.list())t[n.jsonName] = t[n.name] = n;
            this.jsonNames = t;
        }
        return this.jsonNames[e];
    }
    find(e) {
        if (!this.numbers) {
            const t = {};
            for (const n of this.list())t[n.no] = n;
            this.numbers = t;
        }
        return this.numbers[e];
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t)=>e.no - t.no)), this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let t;
            for (const n of this.list())n.oneof ? n.oneof !== t && (t = n.oneof, e.push(t)) : e.push(n);
        }
        return this.members;
    }
};

}
