var InternalFieldList;
export { InternalFieldList };
var __wakaru_init_field_list_initialized = false;
export function init_field_list() {
if (__wakaru_init_field_list_initialized) return;
__wakaru_init_field_list_initialized = true;
InternalFieldList = class {
    constructor(fields, normalizer){
        this._fields = fields;
        this._normalizer = normalizer;
    }
    findJsonName(jsonName) {
        if (!this.jsonNames) {
            const t = {};
            for (const f2 of this.list()){
                t[f2.jsonName] = t[f2.name] = f2;
            }
            this.jsonNames = t;
        }
        return this.jsonNames[jsonName];
    }
    find(fieldNo) {
        if (!this.numbers) {
            const t = {};
            for (const f2 of this.list()){
                t[f2.no] = f2;
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
            this.numbersAsc = this.list().concat().sort((a, b2)=>a.no - b2.no);
        }
        return this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const a = this.members;
            let o;
            for (const f2 of this.list()){
                if (f2.oneof) {
                    if (f2.oneof !== o) {
                        o = f2.oneof;
                        a.push(o);
                    }
                } else {
                    a.push(f2);
                }
            }
        }
        return this.members;
    }
};

}
