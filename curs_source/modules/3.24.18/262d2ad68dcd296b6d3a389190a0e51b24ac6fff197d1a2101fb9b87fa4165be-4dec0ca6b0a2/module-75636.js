"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CodeGeneratorResponse_File = exports.CodeGeneratorResponse_Feature = exports.CodeGeneratorResponse = exports.CodeGeneratorRequest = exports.Version = void 0;
const n = require("./module-24193.js"), o = require("./module-83672.js"), s = require("./module-27374.js");
class i extends n.Message {
    constructor(e){
        super(), o.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto2.util.equals(i, e, t);
    }
}
exports.Version = i, i.runtime = o.proto2, i.typeName = "google.protobuf.compiler.Version", i.fields = o.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "major",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "minor",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);
class a extends n.Message {
    constructor(e){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o.proto2.util.initPartial(e, this);
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
        return o.proto2.util.equals(a, e, t);
    }
}
exports.CodeGeneratorRequest = a, a.runtime = o.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = o.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_to_generate",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "parameter",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "proto_file",
            kind: "message",
            T: s.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: s.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: i,
            opt: !0
        }
    ]);
class l extends n.Message {
    constructor(e){
        super(), this.file = [], o.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto2.util.equals(l, e, t);
    }
}
var c;
exports.CodeGeneratorResponse = l, l.runtime = o.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse", l.fields = o.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "supported_features",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "minimum_edition",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "maximum_edition",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "file",
            kind: "message",
            T: u,
            repeated: !0
        }
    ]), function(e) {
    e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
}(c || (exports.CodeGeneratorResponse_Feature = c = {})), o.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
    {
        no: 0,
        name: "FEATURE_NONE"
    },
    {
        no: 1,
        name: "FEATURE_PROTO3_OPTIONAL"
    },
    {
        no: 2,
        name: "FEATURE_SUPPORTS_EDITIONS"
    }
]);
class u extends n.Message {
    constructor(e){
        super(), o.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto2.util.equals(u, e, t);
    }
}
exports.CodeGeneratorResponse_File = u, u.runtime = o.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", u.fields = o.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "insertion_point",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "generated_code_info",
            kind: "message",
            T: s.GeneratedCodeInfo,
            opt: !0
        }
    ]);
