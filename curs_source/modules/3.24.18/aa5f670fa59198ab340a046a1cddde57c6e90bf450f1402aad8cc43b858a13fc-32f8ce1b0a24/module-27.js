require.r(exports);
require.d(exports, {
    InternalFieldList: ()=>InternalFieldList
});
class InternalFieldList {
    constructor(fields, normalizer){
        this._fields = fields;
        this._normalizer = normalizer;
    }
    findJsonName(jsonName) {
        if (!this.jsonNames) {
            const t = {};
            for (const f of this.list()){
                t[f.jsonName] = t[f.name] = f;
            }
            this.jsonNames = t;
        }
        return this.jsonNames[jsonName];
    }
    find(fieldNo) {
        if (!this.numbers) {
            const t = {};
            for (const f of this.list()){
                t[f.no] = f;
            }
            this.numbers = t;
        }
        return this.numbers[fieldNo];
    }
    list() {
        if (!this.all) {
            this.all = this._normalizer(this._fields);
        }
        return this.all;
    }
    byNumber() {
        if (!this.numbersAsc) {
            this.numbersAsc = this.list().concat().sort((a, b)=>a.no - b.no);
        }
        return this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const a = this.members;
            let o;
            for (const f of this.list()){
                if (f.oneof) {
                    if (f.oneof !== o) {
                        o = f.oneof;
                        a.push(o);
                    }
                } else {
                    a.push(f);
                }
            }
        }
        return this.members;
    }
}
