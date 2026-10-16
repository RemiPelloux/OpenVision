"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalFieldList = void 0;
exports.InternalFieldList = class {
    constructor(e, n){
        this._fields = e, this._normalizer = n;
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const e = {};
            for (const n of this.list())e[n.jsonName] = e[n.name] = n;
            this.jsonNames = e;
        }
        return this.jsonNames[e];
    }
    find(e) {
        if (!this.numbers) {
            const e = {};
            for (const n of this.list())e[n.no] = n;
            this.numbers = e;
        }
        return this.numbers[e];
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, n)=>e.no - n.no)), this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let n;
            for (const t of this.list())t.oneof ? t.oneof !== n && (n = t.oneof, e.push(n)) : e.push(t);
        }
        return this.members;
    }
};
