"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Empty = void 0;
const t = require("./module-4193.js"), s = require("./module-7599.js");
class o extends t.Message {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new o).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new o).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new o).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(o, e, n);
    }
}
exports.Empty = o, o.runtime = s.proto3, o.typeName = "google.protobuf.Empty", o.fields = s.proto3.util.newFieldList(()=>[]);
