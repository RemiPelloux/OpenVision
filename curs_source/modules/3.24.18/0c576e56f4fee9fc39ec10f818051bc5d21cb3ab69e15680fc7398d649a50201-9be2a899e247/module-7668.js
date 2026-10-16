"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Empty = void 0;
const n = require("./module-4193.js"), o = require("./module-7599.js");
class s extends n.Message {
    constructor(e){
        super(), o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(s, e, t);
    }
}
exports.Empty = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Empty", s.fields = o.proto3.util.newFieldList(()=>[]);
