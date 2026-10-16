"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const t = require("./module-4193.js"), s = require("./module-7599.js");
class o extends t.Message {
    constructor(e){
        super(), this.fileName = "", s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new o).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new o).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new o).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(o, e, a);
    }
}
exports.SourceContext = o, o.runtime = s.proto3, o.typeName = "google.protobuf.SourceContext", o.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
