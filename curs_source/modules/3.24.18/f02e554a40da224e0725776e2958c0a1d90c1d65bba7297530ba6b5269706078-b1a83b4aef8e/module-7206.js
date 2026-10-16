"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SourceContext = void 0;
const n = require("./module-4193.js"), s = require("./module-7599.js");
class i extends n.Message {
    constructor(t){
        super(), this.fileName = "", s.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(i, t, e);
    }
}
exports.SourceContext = i, i.runtime = s.proto3, i.typeName = "google.protobuf.SourceContext", i.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
