Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalFieldList = void 0;
exports.InternalFieldList = class {
    constructor(e, t){
        this._fields = e, this._normalizer = t;
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const e = {};
            for (const t of this.list())e[t.jsonName] = e[t.name] = t;
            this.jsonNames = e;
        }
        return this.jsonNames[e];
    }
    find(e) {
        if (!this.numbers) {
            const e = {};
            for (const t of this.list())e[t.no] = t;
            this.numbers = e;
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
