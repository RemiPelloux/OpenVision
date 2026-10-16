"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const n = require("./module-24193.js"), s = require("./module-27599.js");
class o extends n.Message {
    constructor(e){
        super(), this.fileName = "", s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new o).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new o).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new o).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(o, e, t);
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
