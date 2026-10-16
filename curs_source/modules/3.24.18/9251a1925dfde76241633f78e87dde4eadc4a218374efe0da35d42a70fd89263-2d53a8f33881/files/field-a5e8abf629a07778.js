import { require_assert } from "./assert.js";
import { require_names } from "./names.js";
var __wakaru_require_field_cache;
export function require_field() {
if (__wakaru_require_field_cache) return __wakaru_require_field_cache;
var exports2 = {};
__wakaru_require_field_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.InternalOneofInfo = void 0;
var names_js_1 = require_names();
var assert_js_1 = require_assert();
var InternalOneofInfo2 = class {
    constructor(name17){
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.req = false;
        this.default = void 0;
        this.fields = [];
        this.name = name17;
        this.localName = (0, names_js_1.localOneofName)(name17);
    }
    addField(field4) {
        (0, assert_js_1.assert)(field4.oneof === this, `field ${field4.name} not one of ${this.name}`);
        this.fields.push(field4);
    }
    findField(localName) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let i = 0; i < this.fields.length; i++){
                this._lookup[this.fields[i].localName] = this.fields[i];
            }
        }
        return this._lookup[localName];
    }
};
exports2.InternalOneofInfo = InternalOneofInfo2;

return exports2;
}
