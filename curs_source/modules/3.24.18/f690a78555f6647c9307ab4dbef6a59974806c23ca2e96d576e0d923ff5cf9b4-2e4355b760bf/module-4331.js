"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalFieldList = void 0;
exports.InternalFieldList = class {
    constructor(e, A){
        this._fields = e, this._normalizer = A;
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const e = {};
            for (const A of this.list())e[A.jsonName] = e[A.name] = A;
            this.jsonNames = e;
        }
        return this.jsonNames[e];
    }
    find(e) {
        if (!this.numbers) {
            const e = {};
            for (const A of this.list())e[A.no] = A;
            this.numbers = e;
        }
        return this.numbers[e];
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, A)=>e.no - A.no)), this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let A;
            for (const t of this.list())t.oneof ? t.oneof !== A && (A = t.oneof, e.push(A)) : e.push(t);
        }
        return this.members;
    }
};
