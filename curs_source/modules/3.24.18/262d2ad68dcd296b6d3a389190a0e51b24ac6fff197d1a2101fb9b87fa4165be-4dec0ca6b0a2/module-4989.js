"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-23237.js");
class o extends Error {
    constructor(e, t, r, o){
        super(o || `can't resolve reference ${r} from id ${t}`), this.missingRef = (0, n.resolveUrl)(e, t, r), this.missingSchema = (0, n.normalizeId)((0, n.getFullPath)(e, this.missingRef));
    }
}
exports.default = o;
