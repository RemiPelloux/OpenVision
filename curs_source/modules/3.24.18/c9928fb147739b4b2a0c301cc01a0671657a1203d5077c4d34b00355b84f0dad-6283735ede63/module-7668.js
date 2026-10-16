Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Empty = void 0;
const s = require("./module-4193.js"), o = require("./module-7599.js");
class r extends s.Message {
    constructor(e){
        super(), o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new r).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new r).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new r).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(r, e, a);
    }
}
exports.Empty = r, r.runtime = o.proto3, r.typeName = "google.protobuf.Empty", r.fields = o.proto3.util.newFieldList(()=>[]);
