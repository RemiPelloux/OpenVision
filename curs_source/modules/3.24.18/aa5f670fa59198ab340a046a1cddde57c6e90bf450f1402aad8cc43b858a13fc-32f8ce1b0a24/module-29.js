require.r(exports);
require.d(exports, {
    InternalOneofInfo: ()=>InternalOneofInfo
});
var _names_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-30.js");
var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-10.js");
class InternalOneofInfo {
    constructor(name){
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.req = false;
        this.default = void 0;
        this.fields = [];
        this.name = name;
        this.localName = (0, _names_js__WEBPACK_IMPORTED_MODULE_0__.localOneofName)(name);
    }
    addField(field) {
        (0, _assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(field.oneof === this, `field ${field.name} not one of ${this.name}`);
        this.fields.push(field);
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
}
