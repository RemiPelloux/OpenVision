"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InternalOneofInfo = void 0;
const n = require("./module-5822.js"), s = require("./module-3098.js");
exports.InternalOneofInfo = class {
    constructor(t){
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = t, this.localName = (0, n.localOneofName)(t);
    }
    addField(t) {
        (0, s.assert)(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
    }
    findField(t) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let t = 0; t < this.fields.length; t++)this._lookup[this.fields[t].localName] = this.fields[t];
        }
        return this._lookup[t];
    }
};
