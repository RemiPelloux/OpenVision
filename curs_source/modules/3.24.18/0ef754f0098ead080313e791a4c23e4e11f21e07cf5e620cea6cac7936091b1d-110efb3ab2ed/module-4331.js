"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalFieldList = void 0;
exports.InternalFieldList = class {
    constructor(e, a){
        this._fields = e, this._normalizer = a;
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const e = {};
            for (const a of this.list())e[a.jsonName] = e[a.name] = a;
            this.jsonNames = e;
        }
        return this.jsonNames[e];
    }
    find(e) {
        if (!this.numbers) {
            const e = {};
            for (const a of this.list())e[a.no] = a;
            this.numbers = e;
        }
        return this.numbers[e];
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, a)=>e.no - a.no)), this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let a;
            for (const n of this.list())n.oneof ? n.oneof !== a && (a = n.oneof, e.push(a)) : e.push(n);
        }
        return this.members;
    }
};
