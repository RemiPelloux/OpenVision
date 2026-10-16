"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CodeGeneratorResponse_File = exports.CodeGeneratorResponse_Feature = exports.CodeGeneratorResponse = exports.CodeGeneratorRequest = exports.Version = void 0;
const n = require("./module-4193.js"), s = require("./module-3672.js"), i = require("./module-7374.js");
class o extends n.Message {
    constructor(t){
        super(), s.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto2.util.equals(o, t, e);
    }
}
exports.Version = o, o.runtime = s.proto2, o.typeName = "google.protobuf.compiler.Version", o.fields = s.proto2.util.newFieldList(()=>[
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
    constructor(t){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto2.util.equals(a, t, e);
    }
}
exports.CodeGeneratorRequest = a, a.runtime = s.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = s.proto2.util.newFieldList(()=>[
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
            T: i.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: i.FileDescriptorProto,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: o,
            opt: !0
        }
    ]);
class u extends n.Message {
    constructor(t){
        super(), this.file = [], s.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto2.util.equals(u, t, e);
    }
}
var c;
exports.CodeGeneratorResponse = u, u.runtime = s.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse", u.fields = s.proto2.util.newFieldList(()=>[
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
    ]), function(t) {
    t[t.NONE = 0] = "NONE", t[t.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t[t.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
}(c || (exports.CodeGeneratorResponse_Feature = c = {})), s.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
    constructor(t){
        super(), s.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto2.util.equals(l, t, e);
    }
}
exports.CodeGeneratorResponse_File = l, l.runtime = s.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = s.proto2.util.newFieldList(()=>[
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
            T: i.GeneratedCodeInfo,
            opt: !0
        }
    ]);
