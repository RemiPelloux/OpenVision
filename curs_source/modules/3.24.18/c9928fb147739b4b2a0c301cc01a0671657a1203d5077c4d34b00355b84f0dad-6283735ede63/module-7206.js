Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const s = require("./module-4193.js"), o = require("./module-7599.js");
class r extends s.Message {
    constructor(e){
        super(), this.fileName = "", o.proto3.util.initPartial(e, this);
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
exports.SourceContext = r, r.runtime = o.proto3, r.typeName = "google.protobuf.SourceContext", r.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
