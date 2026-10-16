import { require_message } from "../../message.js";
import { require_proto2 } from "../../proto2.js";
var __wakaru_require_descriptor_pb_cache;
export function require_descriptor_pb() {
if (__wakaru_require_descriptor_pb_cache) return __wakaru_require_descriptor_pb_cache;
var exports2 = {};
__wakaru_require_descriptor_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.GeneratedCodeInfo_Annotation_Semantic = exports2.GeneratedCodeInfo_Annotation = exports2.GeneratedCodeInfo = exports2.SourceCodeInfo_Location = exports2.SourceCodeInfo = exports2.FeatureSetDefaults_FeatureSetEditionDefault = exports2.FeatureSetDefaults = exports2.FeatureSet_JsonFormat = exports2.FeatureSet_MessageEncoding = exports2.FeatureSet_Utf8Validation = exports2.FeatureSet_RepeatedFieldEncoding = exports2.FeatureSet_EnumType = exports2.FeatureSet_FieldPresence = exports2.FeatureSet = exports2.UninterpretedOption_NamePart = exports2.UninterpretedOption = exports2.MethodOptions_IdempotencyLevel = exports2.MethodOptions = exports2.ServiceOptions = exports2.EnumValueOptions = exports2.EnumOptions = exports2.OneofOptions = exports2.FieldOptions_FeatureSupport = exports2.FieldOptions_EditionDefault = exports2.FieldOptions_OptionTargetType = exports2.FieldOptions_OptionRetention = exports2.FieldOptions_JSType = exports2.FieldOptions_CType = exports2.FieldOptions = exports2.MessageOptions = exports2.FileOptions_OptimizeMode = exports2.FileOptions = exports2.MethodDescriptorProto = exports2.ServiceDescriptorProto = exports2.EnumValueDescriptorProto = exports2.EnumDescriptorProto_EnumReservedRange = exports2.EnumDescriptorProto = exports2.OneofDescriptorProto = exports2.FieldDescriptorProto_Label = exports2.FieldDescriptorProto_Type = exports2.FieldDescriptorProto = exports2.ExtensionRangeOptions_Declaration = exports2.ExtensionRangeOptions_VerificationState = exports2.ExtensionRangeOptions = exports2.DescriptorProto_ReservedRange = exports2.DescriptorProto_ExtensionRange = exports2.DescriptorProto = exports2.FileDescriptorProto = exports2.FileDescriptorSet = exports2.Edition = void 0;
var proto2_js_1 = require_proto2();
var message_js_1 = require_message();
var Edition2;
(function(Edition3) {
    Edition3[Edition3["EDITION_UNKNOWN"] = 0] = "EDITION_UNKNOWN";
    Edition3[Edition3["EDITION_LEGACY"] = 900] = "EDITION_LEGACY";
    Edition3[Edition3["EDITION_PROTO2"] = 998] = "EDITION_PROTO2";
    Edition3[Edition3["EDITION_PROTO3"] = 999] = "EDITION_PROTO3";
    Edition3[Edition3["EDITION_2023"] = 1e3] = "EDITION_2023";
    Edition3[Edition3["EDITION_2024"] = 1001] = "EDITION_2024";
    Edition3[Edition3["EDITION_1_TEST_ONLY"] = 1] = "EDITION_1_TEST_ONLY";
    Edition3[Edition3["EDITION_2_TEST_ONLY"] = 2] = "EDITION_2_TEST_ONLY";
    Edition3[Edition3["EDITION_99997_TEST_ONLY"] = 99997] = "EDITION_99997_TEST_ONLY";
    Edition3[Edition3["EDITION_99998_TEST_ONLY"] = 99998] = "EDITION_99998_TEST_ONLY";
    Edition3[Edition3["EDITION_99999_TEST_ONLY"] = 99999] = "EDITION_99999_TEST_ONLY";
    Edition3[Edition3["EDITION_MAX"] = 2147483647] = "EDITION_MAX";
})(Edition2 || (exports2.Edition = Edition2 = {}));
proto2_js_1.proto2.util.setEnumType(Edition2, "google.protobuf.Edition", [
    {
        no: 0,
        name: "EDITION_UNKNOWN"
    },
    {
        no: 900,
        name: "EDITION_LEGACY"
    },
    {
        no: 998,
        name: "EDITION_PROTO2"
    },
    {
        no: 999,
        name: "EDITION_PROTO3"
    },
    {
        no: 1e3,
        name: "EDITION_2023"
    },
    {
        no: 1001,
        name: "EDITION_2024"
    },
    {
        no: 1,
        name: "EDITION_1_TEST_ONLY"
    },
    {
        no: 2,
        name: "EDITION_2_TEST_ONLY"
    },
    {
        no: 99997,
        name: "EDITION_99997_TEST_ONLY"
    },
    {
        no: 99998,
        name: "EDITION_99998_TEST_ONLY"
    },
    {
        no: 99999,
        name: "EDITION_99999_TEST_ONLY"
    },
    {
        no: 2147483647,
        name: "EDITION_MAX"
    }
]);
var FileDescriptorSet2 = class _FileDescriptorSet extends message_js_1.Message {
    constructor(data){
        super();
        this.file = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileDescriptorSet().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileDescriptorSet().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileDescriptorSet().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FileDescriptorSet, a, b2);
    }
};
exports2.FileDescriptorSet = FileDescriptorSet2;
FileDescriptorSet2.runtime = proto2_js_1.proto2;
FileDescriptorSet2.typeName = "google.protobuf.FileDescriptorSet";
FileDescriptorSet2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: FileDescriptorProto2,
            repeated: true
        }
    ]);
var FileDescriptorProto2 = class _FileDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        this.dependency = [];
        this.publicDependency = [];
        this.weakDependency = [];
        this.messageType = [];
        this.enumType = [];
        this.service = [];
        this.extension = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FileDescriptorProto, a, b2);
    }
};
exports2.FileDescriptorProto = FileDescriptorProto2;
FileDescriptorProto2.runtime = proto2_js_1.proto2;
FileDescriptorProto2.typeName = "google.protobuf.FileDescriptorProto";
FileDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "package",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "dependency",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "public_dependency",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 11,
            name: "weak_dependency",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 4,
            name: "message_type",
            kind: "message",
            T: DescriptorProto2,
            repeated: true
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: EnumDescriptorProto2,
            repeated: true
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: ServiceDescriptorProto2,
            repeated: true
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: FieldDescriptorProto2,
            repeated: true
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: FileOptions2,
            opt: true
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: SourceCodeInfo2,
            opt: true
        },
        {
            no: 12,
            name: "syntax",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "edition",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        }
    ]);
var DescriptorProto2 = class _DescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        this.field = [];
        this.extension = [];
        this.nestedType = [];
        this.enumType = [];
        this.extensionRange = [];
        this.oneofDecl = [];
        this.reservedRange = [];
        this.reservedName = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_DescriptorProto, a, b2);
    }
};
exports2.DescriptorProto = DescriptorProto2;
DescriptorProto2.runtime = proto2_js_1.proto2;
DescriptorProto2.typeName = "google.protobuf.DescriptorProto";
DescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "field",
            kind: "message",
            T: FieldDescriptorProto2,
            repeated: true
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: FieldDescriptorProto2,
            repeated: true
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: DescriptorProto2,
            repeated: true
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: EnumDescriptorProto2,
            repeated: true
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: DescriptorProto_ExtensionRange2,
            repeated: true
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: OneofDescriptorProto2,
            repeated: true
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: MessageOptions2,
            opt: true
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: DescriptorProto_ReservedRange2,
            repeated: true
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var DescriptorProto_ExtensionRange2 = class _DescriptorProto_ExtensionRange extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DescriptorProto_ExtensionRange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DescriptorProto_ExtensionRange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DescriptorProto_ExtensionRange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_DescriptorProto_ExtensionRange, a, b2);
    }
};
exports2.DescriptorProto_ExtensionRange = DescriptorProto_ExtensionRange2;
DescriptorProto_ExtensionRange2.runtime = proto2_js_1.proto2;
DescriptorProto_ExtensionRange2.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
DescriptorProto_ExtensionRange2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: ExtensionRangeOptions2,
            opt: true
        }
    ]);
var DescriptorProto_ReservedRange2 = class _DescriptorProto_ReservedRange extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DescriptorProto_ReservedRange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DescriptorProto_ReservedRange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DescriptorProto_ReservedRange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_DescriptorProto_ReservedRange, a, b2);
    }
};
exports2.DescriptorProto_ReservedRange = DescriptorProto_ReservedRange2;
DescriptorProto_ReservedRange2.runtime = proto2_js_1.proto2;
DescriptorProto_ReservedRange2.typeName = "google.protobuf.DescriptorProto.ReservedRange";
DescriptorProto_ReservedRange2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var ExtensionRangeOptions2 = class _ExtensionRangeOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        this.declaration = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ExtensionRangeOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ExtensionRangeOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ExtensionRangeOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_ExtensionRangeOptions, a, b2);
    }
};
exports2.ExtensionRangeOptions = ExtensionRangeOptions2;
ExtensionRangeOptions2.runtime = proto2_js_1.proto2;
ExtensionRangeOptions2.typeName = "google.protobuf.ExtensionRangeOptions";
ExtensionRangeOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: ExtensionRangeOptions_Declaration2,
            repeated: true
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(ExtensionRangeOptions_VerificationState2),
            opt: true,
            default: ExtensionRangeOptions_VerificationState2.UNVERIFIED
        }
    ]);
var ExtensionRangeOptions_VerificationState2;
(function(ExtensionRangeOptions_VerificationState3) {
    ExtensionRangeOptions_VerificationState3[ExtensionRangeOptions_VerificationState3["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState3[ExtensionRangeOptions_VerificationState3["UNVERIFIED"] = 1] = "UNVERIFIED";
})(ExtensionRangeOptions_VerificationState2 || (exports2.ExtensionRangeOptions_VerificationState = ExtensionRangeOptions_VerificationState2 = {}));
proto2_js_1.proto2.util.setEnumType(ExtensionRangeOptions_VerificationState2, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
var ExtensionRangeOptions_Declaration2 = class _ExtensionRangeOptions_Declaration extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ExtensionRangeOptions_Declaration().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ExtensionRangeOptions_Declaration().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ExtensionRangeOptions_Declaration().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_ExtensionRangeOptions_Declaration, a, b2);
    }
};
exports2.ExtensionRangeOptions_Declaration = ExtensionRangeOptions_Declaration2;
ExtensionRangeOptions_Declaration2.runtime = proto2_js_1.proto2;
ExtensionRangeOptions_Declaration2.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
ExtensionRangeOptions_Declaration2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "full_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "reserved",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "repeated",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var FieldDescriptorProto2 = class _FieldDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FieldDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FieldDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FieldDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FieldDescriptorProto, a, b2);
    }
};
exports2.FieldDescriptorProto = FieldDescriptorProto2;
FieldDescriptorProto2.runtime = proto2_js_1.proto2;
FieldDescriptorProto2.typeName = "google.protobuf.FieldDescriptorProto";
FieldDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "label",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldDescriptorProto_Label2),
            opt: true
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldDescriptorProto_Type2),
            opt: true
        },
        {
            no: 6,
            name: "type_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "extendee",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "default_value",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "oneof_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: FieldOptions2,
            opt: true
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var FieldDescriptorProto_Type2;
(function(FieldDescriptorProto_Type3) {
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["DOUBLE"] = 1] = "DOUBLE";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["FLOAT"] = 2] = "FLOAT";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["INT64"] = 3] = "INT64";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["UINT64"] = 4] = "UINT64";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["INT32"] = 5] = "INT32";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["FIXED64"] = 6] = "FIXED64";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["FIXED32"] = 7] = "FIXED32";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["BOOL"] = 8] = "BOOL";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["STRING"] = 9] = "STRING";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["GROUP"] = 10] = "GROUP";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["MESSAGE"] = 11] = "MESSAGE";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["BYTES"] = 12] = "BYTES";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["UINT32"] = 13] = "UINT32";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["ENUM"] = 14] = "ENUM";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["SFIXED32"] = 15] = "SFIXED32";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["SFIXED64"] = 16] = "SFIXED64";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["SINT32"] = 17] = "SINT32";
    FieldDescriptorProto_Type3[FieldDescriptorProto_Type3["SINT64"] = 18] = "SINT64";
})(FieldDescriptorProto_Type2 || (exports2.FieldDescriptorProto_Type = FieldDescriptorProto_Type2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldDescriptorProto_Type2, "google.protobuf.FieldDescriptorProto.Type", [
    {
        no: 1,
        name: "TYPE_DOUBLE"
    },
    {
        no: 2,
        name: "TYPE_FLOAT"
    },
    {
        no: 3,
        name: "TYPE_INT64"
    },
    {
        no: 4,
        name: "TYPE_UINT64"
    },
    {
        no: 5,
        name: "TYPE_INT32"
    },
    {
        no: 6,
        name: "TYPE_FIXED64"
    },
    {
        no: 7,
        name: "TYPE_FIXED32"
    },
    {
        no: 8,
        name: "TYPE_BOOL"
    },
    {
        no: 9,
        name: "TYPE_STRING"
    },
    {
        no: 10,
        name: "TYPE_GROUP"
    },
    {
        no: 11,
        name: "TYPE_MESSAGE"
    },
    {
        no: 12,
        name: "TYPE_BYTES"
    },
    {
        no: 13,
        name: "TYPE_UINT32"
    },
    {
        no: 14,
        name: "TYPE_ENUM"
    },
    {
        no: 15,
        name: "TYPE_SFIXED32"
    },
    {
        no: 16,
        name: "TYPE_SFIXED64"
    },
    {
        no: 17,
        name: "TYPE_SINT32"
    },
    {
        no: 18,
        name: "TYPE_SINT64"
    }
]);
var FieldDescriptorProto_Label2;
(function(FieldDescriptorProto_Label3) {
    FieldDescriptorProto_Label3[FieldDescriptorProto_Label3["OPTIONAL"] = 1] = "OPTIONAL";
    FieldDescriptorProto_Label3[FieldDescriptorProto_Label3["REPEATED"] = 3] = "REPEATED";
    FieldDescriptorProto_Label3[FieldDescriptorProto_Label3["REQUIRED"] = 2] = "REQUIRED";
})(FieldDescriptorProto_Label2 || (exports2.FieldDescriptorProto_Label = FieldDescriptorProto_Label2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldDescriptorProto_Label2, "google.protobuf.FieldDescriptorProto.Label", [
    {
        no: 1,
        name: "LABEL_OPTIONAL"
    },
    {
        no: 3,
        name: "LABEL_REPEATED"
    },
    {
        no: 2,
        name: "LABEL_REQUIRED"
    }
]);
var OneofDescriptorProto2 = class _OneofDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OneofDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OneofDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OneofDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_OneofDescriptorProto, a, b2);
    }
};
exports2.OneofDescriptorProto = OneofDescriptorProto2;
OneofDescriptorProto2.runtime = proto2_js_1.proto2;
OneofDescriptorProto2.typeName = "google.protobuf.OneofDescriptorProto";
OneofDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "options",
            kind: "message",
            T: OneofOptions2,
            opt: true
        }
    ]);
var EnumDescriptorProto2 = class _EnumDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        this.value = [];
        this.reservedRange = [];
        this.reservedName = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_EnumDescriptorProto, a, b2);
    }
};
exports2.EnumDescriptorProto = EnumDescriptorProto2;
EnumDescriptorProto2.runtime = proto2_js_1.proto2;
EnumDescriptorProto2.typeName = "google.protobuf.EnumDescriptorProto";
EnumDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: EnumValueDescriptorProto2,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: EnumOptions2,
            opt: true
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: EnumDescriptorProto_EnumReservedRange2,
            repeated: true
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var EnumDescriptorProto_EnumReservedRange2 = class _EnumDescriptorProto_EnumReservedRange extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumDescriptorProto_EnumReservedRange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumDescriptorProto_EnumReservedRange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumDescriptorProto_EnumReservedRange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_EnumDescriptorProto_EnumReservedRange, a, b2);
    }
};
exports2.EnumDescriptorProto_EnumReservedRange = EnumDescriptorProto_EnumReservedRange2;
EnumDescriptorProto_EnumReservedRange2.runtime = proto2_js_1.proto2;
EnumDescriptorProto_EnumReservedRange2.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
EnumDescriptorProto_EnumReservedRange2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var EnumValueDescriptorProto2 = class _EnumValueDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumValueDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumValueDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumValueDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_EnumValueDescriptorProto, a, b2);
    }
};
exports2.EnumValueDescriptorProto = EnumValueDescriptorProto2;
EnumValueDescriptorProto2.runtime = proto2_js_1.proto2;
EnumValueDescriptorProto2.typeName = "google.protobuf.EnumValueDescriptorProto";
EnumValueDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: EnumValueOptions2,
            opt: true
        }
    ]);
var ServiceDescriptorProto2 = class _ServiceDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        this.method = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ServiceDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ServiceDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ServiceDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_ServiceDescriptorProto, a, b2);
    }
};
exports2.ServiceDescriptorProto = ServiceDescriptorProto2;
ServiceDescriptorProto2.runtime = proto2_js_1.proto2;
ServiceDescriptorProto2.typeName = "google.protobuf.ServiceDescriptorProto";
ServiceDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "method",
            kind: "message",
            T: MethodDescriptorProto2,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: ServiceOptions2,
            opt: true
        }
    ]);
var MethodDescriptorProto2 = class _MethodDescriptorProto extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MethodDescriptorProto().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MethodDescriptorProto().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MethodDescriptorProto().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_MethodDescriptorProto, a, b2);
    }
};
exports2.MethodDescriptorProto = MethodDescriptorProto2;
MethodDescriptorProto2.runtime = proto2_js_1.proto2;
MethodDescriptorProto2.typeName = "google.protobuf.MethodDescriptorProto";
MethodDescriptorProto2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "input_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "output_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: MethodOptions2,
            opt: true
        },
        {
            no: 5,
            name: "client_streaming",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 6,
            name: "server_streaming",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        }
    ]);
var FileOptions2 = class _FileOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FileOptions, a, b2);
    }
};
exports2.FileOptions = FileOptions2;
FileOptions2.runtime = proto2_js_1.proto2;
FileOptions2.typeName = "google.protobuf.FileOptions";
FileOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "java_package",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "java_outer_classname",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "java_multiple_files",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 20,
            name: "java_generate_equals_and_hash",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 27,
            name: "java_string_check_utf8",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 9,
            name: "optimize_for",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FileOptions_OptimizeMode2),
            opt: true,
            default: FileOptions_OptimizeMode2.SPEED
        },
        {
            no: 11,
            name: "go_package",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "cc_generic_services",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 17,
            name: "java_generic_services",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 18,
            name: "py_generic_services",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 23,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 31,
            name: "cc_enable_arenas",
            kind: "scalar",
            T: 8,
            opt: true,
            default: true
        },
        {
            no: 36,
            name: "objc_class_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 37,
            name: "csharp_namespace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 39,
            name: "swift_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 40,
            name: "php_class_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 41,
            name: "php_namespace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 44,
            name: "php_metadata_namespace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 45,
            name: "ruby_package",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var FileOptions_OptimizeMode2;
(function(FileOptions_OptimizeMode3) {
    FileOptions_OptimizeMode3[FileOptions_OptimizeMode3["SPEED"] = 1] = "SPEED";
    FileOptions_OptimizeMode3[FileOptions_OptimizeMode3["CODE_SIZE"] = 2] = "CODE_SIZE";
    FileOptions_OptimizeMode3[FileOptions_OptimizeMode3["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
})(FileOptions_OptimizeMode2 || (exports2.FileOptions_OptimizeMode = FileOptions_OptimizeMode2 = {}));
proto2_js_1.proto2.util.setEnumType(FileOptions_OptimizeMode2, "google.protobuf.FileOptions.OptimizeMode", [
    {
        no: 1,
        name: "SPEED"
    },
    {
        no: 2,
        name: "CODE_SIZE"
    },
    {
        no: 3,
        name: "LITE_RUNTIME"
    }
]);
var MessageOptions2 = class _MessageOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MessageOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MessageOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MessageOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_MessageOptions, a, b2);
    }
};
exports2.MessageOptions = MessageOptions2;
MessageOptions2.runtime = proto2_js_1.proto2;
MessageOptions2.typeName = "google.protobuf.MessageOptions";
MessageOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "message_set_wire_format",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 2,
            name: "no_standard_descriptor_accessor",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 7,
            name: "map_entry",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var FieldOptions2 = class _FieldOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.targets = [];
        this.editionDefaults = [];
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FieldOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FieldOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FieldOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FieldOptions, a, b2);
    }
};
exports2.FieldOptions = FieldOptions2;
FieldOptions2.runtime = proto2_js_1.proto2;
FieldOptions2.typeName = "google.protobuf.FieldOptions";
FieldOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldOptions_CType2),
            opt: true,
            default: FieldOptions_CType2.STRING
        },
        {
            no: 2,
            name: "packed",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "jstype",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldOptions_JSType2),
            opt: true,
            default: FieldOptions_JSType2.JS_NORMAL
        },
        {
            no: 5,
            name: "lazy",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 15,
            name: "unverified_lazy",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 10,
            name: "weak",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 16,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 17,
            name: "retention",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldOptions_OptionRetention2),
            opt: true
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FieldOptions_OptionTargetType2),
            repeated: true
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: FieldOptions_EditionDefault2,
            repeated: true
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: FieldOptions_FeatureSupport2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var FieldOptions_CType2;
(function(FieldOptions_CType3) {
    FieldOptions_CType3[FieldOptions_CType3["STRING"] = 0] = "STRING";
    FieldOptions_CType3[FieldOptions_CType3["CORD"] = 1] = "CORD";
    FieldOptions_CType3[FieldOptions_CType3["STRING_PIECE"] = 2] = "STRING_PIECE";
})(FieldOptions_CType2 || (exports2.FieldOptions_CType = FieldOptions_CType2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldOptions_CType2, "google.protobuf.FieldOptions.CType", [
    {
        no: 0,
        name: "STRING"
    },
    {
        no: 1,
        name: "CORD"
    },
    {
        no: 2,
        name: "STRING_PIECE"
    }
]);
var FieldOptions_JSType2;
(function(FieldOptions_JSType3) {
    FieldOptions_JSType3[FieldOptions_JSType3["JS_NORMAL"] = 0] = "JS_NORMAL";
    FieldOptions_JSType3[FieldOptions_JSType3["JS_STRING"] = 1] = "JS_STRING";
    FieldOptions_JSType3[FieldOptions_JSType3["JS_NUMBER"] = 2] = "JS_NUMBER";
})(FieldOptions_JSType2 || (exports2.FieldOptions_JSType = FieldOptions_JSType2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldOptions_JSType2, "google.protobuf.FieldOptions.JSType", [
    {
        no: 0,
        name: "JS_NORMAL"
    },
    {
        no: 1,
        name: "JS_STRING"
    },
    {
        no: 2,
        name: "JS_NUMBER"
    }
]);
var FieldOptions_OptionRetention2;
(function(FieldOptions_OptionRetention3) {
    FieldOptions_OptionRetention3[FieldOptions_OptionRetention3["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention3[FieldOptions_OptionRetention3["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention3[FieldOptions_OptionRetention3["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
})(FieldOptions_OptionRetention2 || (exports2.FieldOptions_OptionRetention = FieldOptions_OptionRetention2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldOptions_OptionRetention2, "google.protobuf.FieldOptions.OptionRetention", [
    {
        no: 0,
        name: "RETENTION_UNKNOWN"
    },
    {
        no: 1,
        name: "RETENTION_RUNTIME"
    },
    {
        no: 2,
        name: "RETENTION_SOURCE"
    }
]);
var FieldOptions_OptionTargetType2;
(function(FieldOptions_OptionTargetType3) {
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType3[FieldOptions_OptionTargetType3["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
})(FieldOptions_OptionTargetType2 || (exports2.FieldOptions_OptionTargetType = FieldOptions_OptionTargetType2 = {}));
proto2_js_1.proto2.util.setEnumType(FieldOptions_OptionTargetType2, "google.protobuf.FieldOptions.OptionTargetType", [
    {
        no: 0,
        name: "TARGET_TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "TARGET_TYPE_FILE"
    },
    {
        no: 2,
        name: "TARGET_TYPE_EXTENSION_RANGE"
    },
    {
        no: 3,
        name: "TARGET_TYPE_MESSAGE"
    },
    {
        no: 4,
        name: "TARGET_TYPE_FIELD"
    },
    {
        no: 5,
        name: "TARGET_TYPE_ONEOF"
    },
    {
        no: 6,
        name: "TARGET_TYPE_ENUM"
    },
    {
        no: 7,
        name: "TARGET_TYPE_ENUM_ENTRY"
    },
    {
        no: 8,
        name: "TARGET_TYPE_SERVICE"
    },
    {
        no: 9,
        name: "TARGET_TYPE_METHOD"
    }
]);
var FieldOptions_EditionDefault2 = class _FieldOptions_EditionDefault extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FieldOptions_EditionDefault().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FieldOptions_EditionDefault().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FieldOptions_EditionDefault().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FieldOptions_EditionDefault, a, b2);
    }
};
exports2.FieldOptions_EditionDefault = FieldOptions_EditionDefault2;
FieldOptions_EditionDefault2.runtime = proto2_js_1.proto2;
FieldOptions_EditionDefault2.typeName = "google.protobuf.FieldOptions.EditionDefault";
FieldOptions_EditionDefault2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var FieldOptions_FeatureSupport2 = class _FieldOptions_FeatureSupport extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FieldOptions_FeatureSupport().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FieldOptions_FeatureSupport().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FieldOptions_FeatureSupport().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FieldOptions_FeatureSupport, a, b2);
    }
};
exports2.FieldOptions_FeatureSupport = FieldOptions_FeatureSupport2;
FieldOptions_FeatureSupport2.runtime = proto2_js_1.proto2;
FieldOptions_FeatureSupport2.typeName = "google.protobuf.FieldOptions.FeatureSupport";
FieldOptions_FeatureSupport2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        },
        {
            no: 3,
            name: "deprecation_warning",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "edition_removed",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        }
    ]);
var OneofOptions2 = class _OneofOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OneofOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OneofOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OneofOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_OneofOptions, a, b2);
    }
};
exports2.OneofOptions = OneofOptions2;
OneofOptions2.runtime = proto2_js_1.proto2;
OneofOptions2.typeName = "google.protobuf.OneofOptions";
OneofOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var EnumOptions2 = class _EnumOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_EnumOptions, a, b2);
    }
};
exports2.EnumOptions = EnumOptions2;
EnumOptions2.runtime = proto2_js_1.proto2;
EnumOptions2.typeName = "google.protobuf.EnumOptions";
EnumOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "allow_alias",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 6,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var EnumValueOptions2 = class _EnumValueOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumValueOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumValueOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumValueOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_EnumValueOptions, a, b2);
    }
};
exports2.EnumValueOptions = EnumValueOptions2;
EnumValueOptions2.runtime = proto2_js_1.proto2;
EnumValueOptions2.typeName = "google.protobuf.EnumValueOptions";
EnumValueOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 2,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 3,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 4,
            name: "feature_support",
            kind: "message",
            T: FieldOptions_FeatureSupport2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var ServiceOptions2 = class _ServiceOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ServiceOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ServiceOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ServiceOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_ServiceOptions, a, b2);
    }
};
exports2.ServiceOptions = ServiceOptions2;
ServiceOptions2.runtime = proto2_js_1.proto2;
ServiceOptions2.typeName = "google.protobuf.ServiceOptions";
ServiceOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var MethodOptions2 = class _MethodOptions extends message_js_1.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MethodOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MethodOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MethodOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_MethodOptions, a, b2);
    }
};
exports2.MethodOptions = MethodOptions2;
MethodOptions2.runtime = proto2_js_1.proto2;
MethodOptions2.typeName = "google.protobuf.MethodOptions";
MethodOptions2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: true,
            default: false
        },
        {
            no: 34,
            name: "idempotency_level",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(MethodOptions_IdempotencyLevel2),
            opt: true,
            default: MethodOptions_IdempotencyLevel2.IDEMPOTENCY_UNKNOWN
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption2,
            repeated: true
        }
    ]);
var MethodOptions_IdempotencyLevel2;
(function(MethodOptions_IdempotencyLevel3) {
    MethodOptions_IdempotencyLevel3[MethodOptions_IdempotencyLevel3["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    MethodOptions_IdempotencyLevel3[MethodOptions_IdempotencyLevel3["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    MethodOptions_IdempotencyLevel3[MethodOptions_IdempotencyLevel3["IDEMPOTENT"] = 2] = "IDEMPOTENT";
})(MethodOptions_IdempotencyLevel2 || (exports2.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel2 = {}));
proto2_js_1.proto2.util.setEnumType(MethodOptions_IdempotencyLevel2, "google.protobuf.MethodOptions.IdempotencyLevel", [
    {
        no: 0,
        name: "IDEMPOTENCY_UNKNOWN"
    },
    {
        no: 1,
        name: "NO_SIDE_EFFECTS"
    },
    {
        no: 2,
        name: "IDEMPOTENT"
    }
]);
var UninterpretedOption2 = class _UninterpretedOption extends message_js_1.Message {
    constructor(data){
        super();
        this.name = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UninterpretedOption().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UninterpretedOption().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UninterpretedOption().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_UninterpretedOption, a, b2);
    }
};
exports2.UninterpretedOption = UninterpretedOption2;
UninterpretedOption2.runtime = proto2_js_1.proto2;
UninterpretedOption2.typeName = "google.protobuf.UninterpretedOption";
UninterpretedOption2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: UninterpretedOption_NamePart2,
            repeated: true
        },
        {
            no: 3,
            name: "identifier_value",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "positive_int_value",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 5,
            name: "negative_int_value",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "double_value",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 7,
            name: "string_value",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 8,
            name: "aggregate_value",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var UninterpretedOption_NamePart2 = class _UninterpretedOption_NamePart extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UninterpretedOption_NamePart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UninterpretedOption_NamePart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UninterpretedOption_NamePart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_UninterpretedOption_NamePart, a, b2);
    }
};
exports2.UninterpretedOption_NamePart = UninterpretedOption_NamePart2;
UninterpretedOption_NamePart2.runtime = proto2_js_1.proto2;
UninterpretedOption_NamePart2.typeName = "google.protobuf.UninterpretedOption.NamePart";
UninterpretedOption_NamePart2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name_part",
            kind: "scalar",
            T: 9,
            req: true
        },
        {
            no: 2,
            name: "is_extension",
            kind: "scalar",
            T: 8,
            req: true
        }
    ]);
var FeatureSet2 = class _FeatureSet extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FeatureSet().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FeatureSet().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FeatureSet().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FeatureSet, a, b2);
    }
};
exports2.FeatureSet = FeatureSet2;
FeatureSet2.runtime = proto2_js_1.proto2;
FeatureSet2.typeName = "google.protobuf.FeatureSet";
FeatureSet2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_FieldPresence2),
            opt: true
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_EnumType2),
            opt: true
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_RepeatedFieldEncoding2),
            opt: true
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_Utf8Validation2),
            opt: true
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_MessageEncoding2),
            opt: true
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(FeatureSet_JsonFormat2),
            opt: true
        }
    ]);
var FeatureSet_FieldPresence2;
(function(FeatureSet_FieldPresence3) {
    FeatureSet_FieldPresence3[FeatureSet_FieldPresence3["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence3[FeatureSet_FieldPresence3["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence3[FeatureSet_FieldPresence3["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence3[FeatureSet_FieldPresence3["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
})(FeatureSet_FieldPresence2 || (exports2.FeatureSet_FieldPresence = FeatureSet_FieldPresence2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_FieldPresence2, "google.protobuf.FeatureSet.FieldPresence", [
    {
        no: 0,
        name: "FIELD_PRESENCE_UNKNOWN"
    },
    {
        no: 1,
        name: "EXPLICIT"
    },
    {
        no: 2,
        name: "IMPLICIT"
    },
    {
        no: 3,
        name: "LEGACY_REQUIRED"
    }
]);
var FeatureSet_EnumType2;
(function(FeatureSet_EnumType3) {
    FeatureSet_EnumType3[FeatureSet_EnumType3["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType3[FeatureSet_EnumType3["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType3[FeatureSet_EnumType3["CLOSED"] = 2] = "CLOSED";
})(FeatureSet_EnumType2 || (exports2.FeatureSet_EnumType = FeatureSet_EnumType2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_EnumType2, "google.protobuf.FeatureSet.EnumType", [
    {
        no: 0,
        name: "ENUM_TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "OPEN"
    },
    {
        no: 2,
        name: "CLOSED"
    }
]);
var FeatureSet_RepeatedFieldEncoding2;
(function(FeatureSet_RepeatedFieldEncoding3) {
    FeatureSet_RepeatedFieldEncoding3[FeatureSet_RepeatedFieldEncoding3["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding3[FeatureSet_RepeatedFieldEncoding3["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding3[FeatureSet_RepeatedFieldEncoding3["EXPANDED"] = 2] = "EXPANDED";
})(FeatureSet_RepeatedFieldEncoding2 || (exports2.FeatureSet_RepeatedFieldEncoding = FeatureSet_RepeatedFieldEncoding2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_RepeatedFieldEncoding2, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
    {
        no: 0,
        name: "REPEATED_FIELD_ENCODING_UNKNOWN"
    },
    {
        no: 1,
        name: "PACKED"
    },
    {
        no: 2,
        name: "EXPANDED"
    }
]);
var FeatureSet_Utf8Validation2;
(function(FeatureSet_Utf8Validation3) {
    FeatureSet_Utf8Validation3[FeatureSet_Utf8Validation3["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    FeatureSet_Utf8Validation3[FeatureSet_Utf8Validation3["VERIFY"] = 2] = "VERIFY";
    FeatureSet_Utf8Validation3[FeatureSet_Utf8Validation3["NONE"] = 3] = "NONE";
})(FeatureSet_Utf8Validation2 || (exports2.FeatureSet_Utf8Validation = FeatureSet_Utf8Validation2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_Utf8Validation2, "google.protobuf.FeatureSet.Utf8Validation", [
    {
        no: 0,
        name: "UTF8_VALIDATION_UNKNOWN"
    },
    {
        no: 2,
        name: "VERIFY"
    },
    {
        no: 3,
        name: "NONE"
    }
]);
var FeatureSet_MessageEncoding2;
(function(FeatureSet_MessageEncoding3) {
    FeatureSet_MessageEncoding3[FeatureSet_MessageEncoding3["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding3[FeatureSet_MessageEncoding3["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding3[FeatureSet_MessageEncoding3["DELIMITED"] = 2] = "DELIMITED";
})(FeatureSet_MessageEncoding2 || (exports2.FeatureSet_MessageEncoding = FeatureSet_MessageEncoding2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_MessageEncoding2, "google.protobuf.FeatureSet.MessageEncoding", [
    {
        no: 0,
        name: "MESSAGE_ENCODING_UNKNOWN"
    },
    {
        no: 1,
        name: "LENGTH_PREFIXED"
    },
    {
        no: 2,
        name: "DELIMITED"
    }
]);
var FeatureSet_JsonFormat2;
(function(FeatureSet_JsonFormat3) {
    FeatureSet_JsonFormat3[FeatureSet_JsonFormat3["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat3[FeatureSet_JsonFormat3["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat3[FeatureSet_JsonFormat3["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
})(FeatureSet_JsonFormat2 || (exports2.FeatureSet_JsonFormat = FeatureSet_JsonFormat2 = {}));
proto2_js_1.proto2.util.setEnumType(FeatureSet_JsonFormat2, "google.protobuf.FeatureSet.JsonFormat", [
    {
        no: 0,
        name: "JSON_FORMAT_UNKNOWN"
    },
    {
        no: 1,
        name: "ALLOW"
    },
    {
        no: 2,
        name: "LEGACY_BEST_EFFORT"
    }
]);
var FeatureSetDefaults2 = class _FeatureSetDefaults extends message_js_1.Message {
    constructor(data){
        super();
        this.defaults = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FeatureSetDefaults().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FeatureSetDefaults().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FeatureSetDefaults().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FeatureSetDefaults, a, b2);
    }
};
exports2.FeatureSetDefaults = FeatureSetDefaults2;
FeatureSetDefaults2.runtime = proto2_js_1.proto2;
FeatureSetDefaults2.typeName = "google.protobuf.FeatureSetDefaults";
FeatureSetDefaults2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: FeatureSetDefaults_FeatureSetEditionDefault2,
            repeated: true
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        }
    ]);
var FeatureSetDefaults_FeatureSetEditionDefault2 = class _FeatureSetDefaults_FeatureSetEditionDefault extends message_js_1.Message {
    constructor(data){
        super();
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_FeatureSetDefaults_FeatureSetEditionDefault, a, b2);
    }
};
exports2.FeatureSetDefaults_FeatureSetEditionDefault = FeatureSetDefaults_FeatureSetEditionDefault2;
FeatureSetDefaults_FeatureSetEditionDefault2.runtime = proto2_js_1.proto2;
FeatureSetDefaults_FeatureSetEditionDefault2.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
FeatureSetDefaults_FeatureSetEditionDefault2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(Edition2),
            opt: true
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: FeatureSet2,
            opt: true
        }
    ]);
var SourceCodeInfo2 = class _SourceCodeInfo extends message_js_1.Message {
    constructor(data){
        super();
        this.location = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SourceCodeInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SourceCodeInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SourceCodeInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_SourceCodeInfo, a, b2);
    }
};
exports2.SourceCodeInfo = SourceCodeInfo2;
SourceCodeInfo2.runtime = proto2_js_1.proto2;
SourceCodeInfo2.typeName = "google.protobuf.SourceCodeInfo";
SourceCodeInfo2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: SourceCodeInfo_Location2,
            repeated: true
        }
    ]);
var SourceCodeInfo_Location2 = class _SourceCodeInfo_Location extends message_js_1.Message {
    constructor(data){
        super();
        this.path = [];
        this.span = [];
        this.leadingDetachedComments = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SourceCodeInfo_Location().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SourceCodeInfo_Location().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SourceCodeInfo_Location().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_SourceCodeInfo_Location, a, b2);
    }
};
exports2.SourceCodeInfo_Location = SourceCodeInfo_Location2;
SourceCodeInfo_Location2.runtime = proto2_js_1.proto2;
SourceCodeInfo_Location2.typeName = "google.protobuf.SourceCodeInfo.Location";
SourceCodeInfo_Location2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5,
            repeated: true,
            packed: true
        },
        {
            no: 2,
            name: "span",
            kind: "scalar",
            T: 5,
            repeated: true,
            packed: true
        },
        {
            no: 3,
            name: "leading_comments",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "trailing_comments",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "leading_detached_comments",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var GeneratedCodeInfo2 = class _GeneratedCodeInfo extends message_js_1.Message {
    constructor(data){
        super();
        this.annotation = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GeneratedCodeInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GeneratedCodeInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GeneratedCodeInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_GeneratedCodeInfo, a, b2);
    }
};
exports2.GeneratedCodeInfo = GeneratedCodeInfo2;
GeneratedCodeInfo2.runtime = proto2_js_1.proto2;
GeneratedCodeInfo2.typeName = "google.protobuf.GeneratedCodeInfo";
GeneratedCodeInfo2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: GeneratedCodeInfo_Annotation2,
            repeated: true
        }
    ]);
var GeneratedCodeInfo_Annotation2 = class _GeneratedCodeInfo_Annotation extends message_js_1.Message {
    constructor(data){
        super();
        this.path = [];
        proto2_js_1.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GeneratedCodeInfo_Annotation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GeneratedCodeInfo_Annotation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GeneratedCodeInfo_Annotation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto2_js_1.proto2.util.equals(_GeneratedCodeInfo_Annotation, a, b2);
    }
};
exports2.GeneratedCodeInfo_Annotation = GeneratedCodeInfo_Annotation2;
GeneratedCodeInfo_Annotation2.runtime = proto2_js_1.proto2;
GeneratedCodeInfo_Annotation2.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
GeneratedCodeInfo_Annotation2.fields = proto2_js_1.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5,
            repeated: true,
            packed: true
        },
        {
            no: 2,
            name: "source_file",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "begin",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "semantic",
            kind: "enum",
            T: proto2_js_1.proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic2),
            opt: true
        }
    ]);
var GeneratedCodeInfo_Annotation_Semantic2;
(function(GeneratedCodeInfo_Annotation_Semantic3) {
    GeneratedCodeInfo_Annotation_Semantic3[GeneratedCodeInfo_Annotation_Semantic3["NONE"] = 0] = "NONE";
    GeneratedCodeInfo_Annotation_Semantic3[GeneratedCodeInfo_Annotation_Semantic3["SET"] = 1] = "SET";
    GeneratedCodeInfo_Annotation_Semantic3[GeneratedCodeInfo_Annotation_Semantic3["ALIAS"] = 2] = "ALIAS";
})(GeneratedCodeInfo_Annotation_Semantic2 || (exports2.GeneratedCodeInfo_Annotation_Semantic = GeneratedCodeInfo_Annotation_Semantic2 = {}));
proto2_js_1.proto2.util.setEnumType(GeneratedCodeInfo_Annotation_Semantic2, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
    {
        no: 0,
        name: "NONE"
    },
    {
        no: 1,
        name: "SET"
    },
    {
        no: 2,
        name: "ALIAS"
    }
]);

return exports2;
}
