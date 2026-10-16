import { vRe } from "./assert_2.js";
import { I_n } from "./names.js";
import { _wg, v5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var xGc;
export { xGc };
var __wakaru_bwg_initialized = false;
export function bwg() {
if (__wakaru_bwg_initialized) return;
__wakaru_bwg_initialized = true;
"use strict";
x(), I_n(), vRe(), xGc = class {
    constructor(e){
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = _wg(e);
    }
    addField(e) {
        v5(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
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
