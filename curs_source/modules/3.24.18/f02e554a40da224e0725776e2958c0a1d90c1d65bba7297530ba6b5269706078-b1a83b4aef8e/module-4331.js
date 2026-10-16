"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalFieldList = void 0;
exports.InternalFieldList = class {
    constructor(t, e){
        this._fields = t, this._normalizer = e;
    }
    findJsonName(t) {
        if (!this.jsonNames) {
            const t = {};
            for (const e of this.list())t[e.jsonName] = t[e.name] = e;
            this.jsonNames = t;
        }
        return this.jsonNames[t];
    }
    find(t) {
        if (!this.numbers) {
            const t = {};
            for (const e of this.list())t[e.no] = e;
            this.numbers = t;
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
            for (const r of this.list())r.oneof ? r.oneof !== e && (e = r.oneof, t.push(e)) : t.push(r);
        }
        return this.members;
    }
};
