import { assert, localOneofName } from "../../../../../../../../../external_exports.js";
import { init_assert } from "./assert.js";
import { init_names } from "./names.js";
var InternalOneofInfo;
export { InternalOneofInfo };
var __wakaru_init_field_initialized = false;
export function init_field() {
if (__wakaru_init_field_initialized) return;
__wakaru_init_field_initialized = true;
init_names();
init_assert();
InternalOneofInfo = class {
    constructor(name17){
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.req = false;
        this.default = void 0;
        this.fields = [];
        this.name = name17;
        this.localName = localOneofName(name17);
    }
    addField(field4) {
        assert(field4.oneof === this, `field ${field4.name} not one of ${this.name}`);
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

}
