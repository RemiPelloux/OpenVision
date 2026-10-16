"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CodeGeneratorResponse_File = exports.CodeGeneratorResponse_Feature = exports.CodeGeneratorResponse = exports.CodeGeneratorRequest = exports.Version = void 0;
const n = require("./module-4193.js"), r = require("./module-3672.js"), o = require("./module-7374.js");
class s extends n.Message {
    constructor(e){
        super(), r.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new s).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new s).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new s).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto2.util.equals(s, e, A);
    }
}
exports.Version = s, s.runtime = r.proto2, s.typeName = "google.protobuf.compiler.Version", s.fields = r.proto2.util.newFieldList(()=>[
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
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], r.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new a).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new a).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new a).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto2.util.equals(a, e, A);
    }
}
exports.CodeGeneratorRequest = a, a.runtime = r.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = r.proto2.util.newFieldList(()=>[
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
            T: o.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: o.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: s,
            opt: !0
        }
    ]);
class i extends n.Message {
    constructor(e){
        super(), this.file = [], r.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new i).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new i).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new i).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto2.util.equals(i, e, A);
    }
}
var c;
exports.CodeGeneratorResponse = i, i.runtime = r.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorResponse", i.fields = r.proto2.util.newFieldList(()=>[
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
            T: l,
            repeated: !0
        }
    ]), function(e) {
    e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
}(c || (exports.CodeGeneratorResponse_Feature = c = {})), r.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
class l extends n.Message {
    constructor(e){
        super(), r.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new l).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new l).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new l).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto2.util.equals(l, e, A);
    }
}
exports.CodeGeneratorResponse_File = l, l.runtime = r.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = r.proto2.util.newFieldList(()=>[
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
            T: o.GeneratedCodeInfo,
            opt: !0
        }
    ]);
