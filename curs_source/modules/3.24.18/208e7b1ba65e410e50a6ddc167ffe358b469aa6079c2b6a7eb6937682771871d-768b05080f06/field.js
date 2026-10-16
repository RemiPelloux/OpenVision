import { $i } from "./assert_2.js";
import { Bj, Gj, Mh, Uj } from "./names.js";
import { h } from "./tslib.es6.js";
function vn(e, t) {
    if (!e) throw new Error(t);
}
function Lj(e, t) {
    const n = Uj(e);
    return t ? n : Gj(Bj(n));
}
function Zje(e) {
    return Lj(e, !1);
}
var Vj;
export { Lj, Vj, Zje, vn };
var __wakaru_eHe_initialized = false;
export function eHe() {
if (__wakaru_eHe_initialized) return;
__wakaru_eHe_initialized = true;
"use strict";
h(), Mh(), $i(), Vj = class {
    constructor(e){
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = Zje(e);
    }
    addField(e) {
        vn(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
    }
    findField(e) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let t = 0; t < this.fields.length; t++)this._lookup[this.fields[t].localName] = this.fields[t];
        }
        return this._lookup[e];
    }
};

}
