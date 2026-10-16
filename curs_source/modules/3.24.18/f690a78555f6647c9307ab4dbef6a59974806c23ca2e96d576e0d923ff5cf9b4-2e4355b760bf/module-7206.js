"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const n = require("./module-4193.js"), r = require("./module-7599.js");
class o extends n.Message {
    constructor(e){
        super(), this.fileName = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new o).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new o).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new o).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(o, e, A);
    }
}
exports.SourceContext = o, o.runtime = r.proto3, o.typeName = "google.protobuf.SourceContext", o.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
