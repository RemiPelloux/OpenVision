import { FileDescriptorProto, GeneratedCodeInfo, init_descriptor_pb } from "../descriptor_pb.js";
import { Message, init_message } from "../../../message.js";
import { init_proto2, proto2 } from "../../../proto2.js";
var Version, CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponse_Feature, CodeGeneratorResponse_File;
export { CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponse_Feature, CodeGeneratorResponse_File, Version };
var __wakaru_init_plugin_pb_initialized = false;
export function init_plugin_pb() {
if (__wakaru_init_plugin_pb_initialized) return;
__wakaru_init_plugin_pb_initialized = true;
init_message();
init_proto2();
init_descriptor_pb();
Version = class _Version extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_Version, a, b2);
    }
};
Version.runtime = proto2;
Version.typeName = "google.protobuf.compiler.Version";
Version.fields = proto2.util.newFieldList(()=>[
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
CodeGeneratorRequest = class _CodeGeneratorRequest extends Message {
    constructor(data){
        super();
        this.fileToGenerate = [];
        this.protoFile = [];
        this.sourceFileDescriptors = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_CodeGeneratorRequest, a, b2);
    }
};
CodeGeneratorRequest.runtime = proto2;
CodeGeneratorRequest.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
CodeGeneratorRequest.fields = proto2.util.newFieldList(()=>[
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
            T: FileDescriptorProto,
            repeated: true
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: FileDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: Version,
            opt: true
        }
    ]);
CodeGeneratorResponse = class _CodeGeneratorResponse extends Message {
    constructor(data){
        super();
        this.file = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_CodeGeneratorResponse, a, b2);
    }
};
CodeGeneratorResponse.runtime = proto2;
CodeGeneratorResponse.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
CodeGeneratorResponse.fields = proto2.util.newFieldList(()=>[
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
            T: CodeGeneratorResponse_File,
            repeated: true
        }
    ]);
(function(CodeGeneratorResponse_Feature2) {
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["NONE"] = 0] = "NONE";
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["PROTO3_OPTIONAL"] = 1] = "PROTO3_OPTIONAL";
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["SUPPORTS_EDITIONS"] = 2] = "SUPPORTS_EDITIONS";
})(CodeGeneratorResponse_Feature || (CodeGeneratorResponse_Feature = {}));
proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
CodeGeneratorResponse_File = class _CodeGeneratorResponse_File extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_CodeGeneratorResponse_File, a, b2);
    }
};
CodeGeneratorResponse_File.runtime = proto2;
CodeGeneratorResponse_File.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
CodeGeneratorResponse_File.fields = proto2.util.newFieldList(()=>[
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
            T: GeneratedCodeInfo,
            opt: true
        }
    ]);

}
