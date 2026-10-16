"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CodeGeneratorResponse_File = exports.CodeGeneratorResponse_Feature = exports.CodeGeneratorResponse = exports.CodeGeneratorRequest = exports.Version = void 0;
const t = require("./module-4193.js"), s = require("./module-3672.js"), o = require("./module-7374.js");
class r extends t.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new r).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new r).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new r).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto2.util.equals(r, e, n);
    }
}
exports.Version = r, r.runtime = s.proto2, r.typeName = "google.protobuf.compiler.Version", r.fields = s.proto2.util.newFieldList(()=>[
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
class i extends t.Message {
    constructor(e){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new i).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new i).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new i).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto2.util.equals(i, e, n);
    }
}
exports.CodeGeneratorRequest = i, i.runtime = s.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i.fields = s.proto2.util.newFieldList(()=>[
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
            T: r,
            opt: !0
        }
    ]);
class A extends t.Message {
    constructor(e){
        super(), this.file = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new A).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new A).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new A).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto2.util.equals(A, e, n);
    }
}
var l;
exports.CodeGeneratorResponse = A, A.runtime = s.proto2, A.typeName = "google.protobuf.compiler.CodeGeneratorResponse", A.fields = s.proto2.util.newFieldList(()=>[
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
            T: c,
            repeated: !0
        }
    ]), function(e) {
    e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
}(l || (exports.CodeGeneratorResponse_Feature = l = {})), s.proto2.util.setEnumType(l, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
class c extends t.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new c).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new c).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new c).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto2.util.equals(c, e, n);
    }
}
exports.CodeGeneratorResponse_File = c, c.runtime = s.proto2, c.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", c.fields = s.proto2.util.newFieldList(()=>[
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
