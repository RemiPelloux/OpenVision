Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const o = require("./module-193.js"), s = require("./module-599.js");
class t extends o.Message {
    constructor(e){
        super(), this.fileName = "", s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new t).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new t).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new t).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(t, e, a);
    }
}
exports.SourceContext = t, t.runtime = s.proto3, t.typeName = "google.protobuf.SourceContext", t.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
