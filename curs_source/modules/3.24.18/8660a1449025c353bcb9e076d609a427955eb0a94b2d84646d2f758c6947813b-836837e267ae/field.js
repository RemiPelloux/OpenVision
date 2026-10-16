import { C$e } from "./assert_2.js";
import { BJn } from "./names.js";
import { E } from "./tslib.es6.js";
import { Ej, GEy } from "./ze.js";
var udd;
export { udd };
var __wakaru_qEy_initialized = false;
export function qEy() {
if (__wakaru_qEy_initialized) return;
__wakaru_qEy_initialized = true;
"use strict";
E(), BJn(), C$e(), udd = class {
    constructor(t){
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = t, this.localName = GEy(t);
    }
    addField(t) {
        Ej(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
    }
    findField(t) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let e = 0; e < this.fields.length; e++)this._lookup[this.fields[e].localName] = this.fields[e];
        }
        return this._lookup[t];
    }
};

}
