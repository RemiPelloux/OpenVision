import { require_descriptor_pb } from "../descriptor_pb.js";
import { require_message } from "../../../message.js";
import { require_proto2 } from "../../../proto2.js";
var __wakaru_require_plugin_pb_cache;
export function require_plugin_pb() {
if (__wakaru_require_plugin_pb_cache) return __wakaru_require_plugin_pb_cache;
var exports2 = {};
__wakaru_require_plugin_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.CodeGeneratorResponse_File = exports2.CodeGeneratorResponse_Feature = exports2.CodeGeneratorResponse = exports2.CodeGeneratorRequest = exports2.Version = void 0;
var message_js_1 = require_message();
var proto2_js_1 = require_proto2();
var descriptor_pb_js_1 = require_descriptor_pb();
var Version3 = class _Version extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Version().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Version().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Version().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_Version, a, b2);
    }
};
exports2.Version = Version3;
Version3.runtime = proto2_js_1.proto2;
Version3.typeName = "google.protobuf.compiler.Version";
Version3.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "major",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "minor",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CodeGeneratorRequest2 = class _CodeGeneratorRequest extends message_js_1.Message {
    constructor(data){
        super();
        this.fileToGenerate = [];
        this.protoFile = [];
        this.sourceFileDescriptors = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeGeneratorRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeGeneratorRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeGeneratorRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_CodeGeneratorRequest, a, b2);
    }
};
exports2.CodeGeneratorRequest = CodeGeneratorRequest2;
CodeGeneratorRequest2.runtime = proto2_js_1.proto2;
CodeGeneratorRequest2.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
CodeGeneratorRequest2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_to_generate",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "parameter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "proto_file",
            kind: "message",
            T: descriptor_pb_js_1.FileDescriptorProto,
            repeated: true
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: descriptor_pb_js_1.FileDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: Version3,
            opt: true
        }
    ]);
var CodeGeneratorResponse2 = class _CodeGeneratorResponse extends message_js_1.Message {
    constructor(data){
        super();
        this.file = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeGeneratorResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeGeneratorResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeGeneratorResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_CodeGeneratorResponse, a, b2);
    }
};
exports2.CodeGeneratorResponse = CodeGeneratorResponse2;
CodeGeneratorResponse2.runtime = proto2_js_1.proto2;
CodeGeneratorResponse2.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
CodeGeneratorResponse2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "supported_features",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 3,
            name: "minimum_edition",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "maximum_edition",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "file",
            kind: "message",
            T: CodeGeneratorResponse_File2,
            repeated: true
        }
    ]);
var CodeGeneratorResponse_Feature2;
(function(CodeGeneratorResponse_Feature3) {
    CodeGeneratorResponse_Feature3[CodeGeneratorResponse_Feature3["NONE"] = 0] = "NONE";
    CodeGeneratorResponse_Feature3[CodeGeneratorResponse_Feature3["PROTO3_OPTIONAL"] = 1] = "PROTO3_OPTIONAL";
    CodeGeneratorResponse_Feature3[CodeGeneratorResponse_Feature3["SUPPORTS_EDITIONS"] = 2] = "SUPPORTS_EDITIONS";
})(CodeGeneratorResponse_Feature2 || (exports2.CodeGeneratorResponse_Feature = CodeGeneratorResponse_Feature2 = {}));
proto2_js_1.proto2.util.setEnumType(CodeGeneratorResponse_Feature2, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
var CodeGeneratorResponse_File2 = class _CodeGeneratorResponse_File extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeGeneratorResponse_File().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeGeneratorResponse_File().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeGeneratorResponse_File().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_CodeGeneratorResponse_File, a, b2);
    }
};
exports2.CodeGeneratorResponse_File = CodeGeneratorResponse_File2;
CodeGeneratorResponse_File2.runtime = proto2_js_1.proto2;
CodeGeneratorResponse_File2.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
CodeGeneratorResponse_File2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "insertion_point",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "generated_code_info",
            kind: "message",
            T: descriptor_pb_js_1.GeneratedCodeInfo,
            opt: true
        }
    ]);

return exports2;
}
