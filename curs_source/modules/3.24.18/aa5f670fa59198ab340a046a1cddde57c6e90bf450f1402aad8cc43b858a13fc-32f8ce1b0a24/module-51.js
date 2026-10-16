require.r(exports);
require.d(exports, {
    CodeGeneratorRequest: ()=>CodeGeneratorRequest,
    CodeGeneratorResponse: ()=>CodeGeneratorResponse,
    CodeGeneratorResponse_Feature: ()=>CodeGeneratorResponse_Feature,
    CodeGeneratorResponse_File: ()=>CodeGeneratorResponse_File,
    Version: ()=>Version
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto2_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-31.js");
var _descriptor_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-38.js");
const _Version = class _Version extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Version().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Version().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Version().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.equals(_Version, a, b);
    }
};
_Version.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2;
_Version.typeName = "google.protobuf.compiler.Version";
_Version.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.newFieldList(()=>[
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
let Version = _Version;
const _CodeGeneratorRequest = class _CodeGeneratorRequest extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.fileToGenerate = [];
        this.protoFile = [];
        this.sourceFileDescriptors = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _CodeGeneratorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _CodeGeneratorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _CodeGeneratorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.equals(_CodeGeneratorRequest, a, b);
    }
};
_CodeGeneratorRequest.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2;
_CodeGeneratorRequest.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
_CodeGeneratorRequest.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.newFieldList(()=>[
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
            T: _descriptor_pb_js__WEBPACK_IMPORTED_MODULE_2__.FileDescriptorProto,
            repeated: true
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: _descriptor_pb_js__WEBPACK_IMPORTED_MODULE_2__.FileDescriptorProto,
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
let CodeGeneratorRequest = _CodeGeneratorRequest;
const _CodeGeneratorResponse = class _CodeGeneratorResponse extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.file = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _CodeGeneratorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _CodeGeneratorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _CodeGeneratorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.equals(_CodeGeneratorResponse, a, b);
    }
};
_CodeGeneratorResponse.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2;
_CodeGeneratorResponse.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
_CodeGeneratorResponse.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.newFieldList(()=>[
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
let CodeGeneratorResponse = _CodeGeneratorResponse;
var CodeGeneratorResponse_Feature = ((CodeGeneratorResponse_Feature2)=>{
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["NONE"] = 0] = "NONE";
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["PROTO3_OPTIONAL"] = 1] = "PROTO3_OPTIONAL";
    CodeGeneratorResponse_Feature2[CodeGeneratorResponse_Feature2["SUPPORTS_EDITIONS"] = 2] = "SUPPORTS_EDITIONS";
    return CodeGeneratorResponse_Feature2;
})(CodeGeneratorResponse_Feature || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
const _CodeGeneratorResponse_File = class _CodeGeneratorResponse_File extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _CodeGeneratorResponse_File().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _CodeGeneratorResponse_File().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _CodeGeneratorResponse_File().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.equals(_CodeGeneratorResponse_File, a, b);
    }
};
_CodeGeneratorResponse_File.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2;
_CodeGeneratorResponse_File.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
_CodeGeneratorResponse_File.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_1__.proto2.util.newFieldList(()=>[
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
            T: _descriptor_pb_js__WEBPACK_IMPORTED_MODULE_2__.GeneratedCodeInfo,
            opt: true
        }
    ]);
let CodeGeneratorResponse_File = _CodeGeneratorResponse_File;
