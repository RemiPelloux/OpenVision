Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const r = require("./module-193.js"), o = require("./module-599.js");
class a extends r.Message {
    constructor(e){
        super(), this.fileName = "", o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(a, e, t);
    }
}
exports.SourceContext = a, a.runtime = o.proto3, a.typeName = "google.protobuf.SourceContext", a.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
