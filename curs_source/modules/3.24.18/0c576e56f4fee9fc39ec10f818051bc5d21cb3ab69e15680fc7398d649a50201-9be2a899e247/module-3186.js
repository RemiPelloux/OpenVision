"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalOneofInfo = void 0;
const n = require("./module-5822.js"), o = require("./module-3098.js");
exports.InternalOneofInfo = class {
    constructor(e){
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = (0, n.localOneofName)(e);
    }
    addField(e) {
        (0, o.assert)(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
    }
    findField(e) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let e = 0; e < this.fields.length; e++)this._lookup[this.fields[e].localName] = this.fields[e];
        }
        return this._lookup[e];
    }
};
