import { Message, init_message } from "../../message.js";
import { init_proto2, proto2 } from "../../proto2.js";
var Edition, FileDescriptorSet, FileDescriptorProto, DescriptorProto, DescriptorProto_ExtensionRange, DescriptorProto_ReservedRange, ExtensionRangeOptions, ExtensionRangeOptions_VerificationState, ExtensionRangeOptions_Declaration, FieldDescriptorProto, FieldDescriptorProto_Type, FieldDescriptorProto_Label, OneofDescriptorProto, EnumDescriptorProto, EnumDescriptorProto_EnumReservedRange, EnumValueDescriptorProto, ServiceDescriptorProto, MethodDescriptorProto, FileOptions, FileOptions_OptimizeMode, MessageOptions, FieldOptions, FieldOptions_CType, FieldOptions_JSType, FieldOptions_OptionRetention, FieldOptions_OptionTargetType, FieldOptions_EditionDefault, FieldOptions_FeatureSupport, OneofOptions, EnumOptions, EnumValueOptions, ServiceOptions, MethodOptions, MethodOptions_IdempotencyLevel, UninterpretedOption, UninterpretedOption_NamePart, FeatureSet, FeatureSet_FieldPresence, FeatureSet_EnumType, FeatureSet_RepeatedFieldEncoding, FeatureSet_Utf8Validation, FeatureSet_MessageEncoding, FeatureSet_JsonFormat, FeatureSetDefaults, FeatureSetDefaults_FeatureSetEditionDefault, SourceCodeInfo, SourceCodeInfo_Location, GeneratedCodeInfo, GeneratedCodeInfo_Annotation, GeneratedCodeInfo_Annotation_Semantic;
export { DescriptorProto, DescriptorProto_ExtensionRange, DescriptorProto_ReservedRange, Edition, EnumDescriptorProto, EnumDescriptorProto_EnumReservedRange, EnumOptions, EnumValueDescriptorProto, EnumValueOptions, ExtensionRangeOptions, ExtensionRangeOptions_Declaration, ExtensionRangeOptions_VerificationState, FeatureSet, FeatureSetDefaults, FeatureSetDefaults_FeatureSetEditionDefault, FeatureSet_EnumType, FeatureSet_FieldPresence, FeatureSet_JsonFormat, FeatureSet_MessageEncoding, FeatureSet_RepeatedFieldEncoding, FeatureSet_Utf8Validation, FieldDescriptorProto, FieldDescriptorProto_Label, FieldDescriptorProto_Type, FieldOptions, FieldOptions_CType, FieldOptions_EditionDefault, FieldOptions_FeatureSupport, FieldOptions_JSType, FieldOptions_OptionRetention, FieldOptions_OptionTargetType, FileDescriptorProto, FileDescriptorSet, FileOptions, FileOptions_OptimizeMode, GeneratedCodeInfo, GeneratedCodeInfo_Annotation, GeneratedCodeInfo_Annotation_Semantic, MessageOptions, MethodDescriptorProto, MethodOptions, MethodOptions_IdempotencyLevel, OneofDescriptorProto, OneofOptions, ServiceDescriptorProto, ServiceOptions, SourceCodeInfo, SourceCodeInfo_Location, UninterpretedOption, UninterpretedOption_NamePart };
var __wakaru_init_descriptor_pb_initialized = false;
export function init_descriptor_pb() {
if (__wakaru_init_descriptor_pb_initialized) return;
__wakaru_init_descriptor_pb_initialized = true;
init_proto2();
init_message();
(function(Edition2) {
    Edition2[Edition2["EDITION_UNKNOWN"] = 0] = "EDITION_UNKNOWN";
    Edition2[Edition2["EDITION_LEGACY"] = 900] = "EDITION_LEGACY";
    Edition2[Edition2["EDITION_PROTO2"] = 998] = "EDITION_PROTO2";
    Edition2[Edition2["EDITION_PROTO3"] = 999] = "EDITION_PROTO3";
    Edition2[Edition2["EDITION_2023"] = 1e3] = "EDITION_2023";
    Edition2[Edition2["EDITION_2024"] = 1001] = "EDITION_2024";
    Edition2[Edition2["EDITION_1_TEST_ONLY"] = 1] = "EDITION_1_TEST_ONLY";
    Edition2[Edition2["EDITION_2_TEST_ONLY"] = 2] = "EDITION_2_TEST_ONLY";
    Edition2[Edition2["EDITION_99997_TEST_ONLY"] = 99997] = "EDITION_99997_TEST_ONLY";
    Edition2[Edition2["EDITION_99998_TEST_ONLY"] = 99998] = "EDITION_99998_TEST_ONLY";
    Edition2[Edition2["EDITION_99999_TEST_ONLY"] = 99999] = "EDITION_99999_TEST_ONLY";
    Edition2[Edition2["EDITION_MAX"] = 2147483647] = "EDITION_MAX";
})(Edition || (Edition = {}));
proto2.util.setEnumType(Edition, "google.protobuf.Edition", [
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
FileDescriptorSet = class _FileDescriptorSet extends Message {
    constructor(data){
        super();
        this.file = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FileDescriptorSet, a, b2);
    }
};
FileDescriptorSet.runtime = proto2;
FileDescriptorSet.typeName = "google.protobuf.FileDescriptorSet";
FileDescriptorSet.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: FileDescriptorProto,
            repeated: true
        }
    ]);
FileDescriptorProto = class _FileDescriptorProto extends Message {
    constructor(data){
        super();
        this.dependency = [];
        this.publicDependency = [];
        this.weakDependency = [];
        this.messageType = [];
        this.enumType = [];
        this.service = [];
        this.extension = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FileDescriptorProto, a, b2);
    }
};
FileDescriptorProto.runtime = proto2;
FileDescriptorProto.typeName = "google.protobuf.FileDescriptorProto";
FileDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: DescriptorProto,
            repeated: true
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: EnumDescriptorProto,
            repeated: true
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: ServiceDescriptorProto,
            repeated: true
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: FieldDescriptorProto,
            repeated: true
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: FileOptions,
            opt: true
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: SourceCodeInfo,
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
            T: proto2.getEnumType(Edition),
            opt: true
        }
    ]);
DescriptorProto = class _DescriptorProto extends Message {
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
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_DescriptorProto, a, b2);
    }
};
DescriptorProto.runtime = proto2;
DescriptorProto.typeName = "google.protobuf.DescriptorProto";
DescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: FieldDescriptorProto,
            repeated: true
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: FieldDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: DescriptorProto,
            repeated: true
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: EnumDescriptorProto,
            repeated: true
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: DescriptorProto_ExtensionRange,
            repeated: true
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: OneofDescriptorProto,
            repeated: true
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: MessageOptions,
            opt: true
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: DescriptorProto_ReservedRange,
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
DescriptorProto_ExtensionRange = class _DescriptorProto_ExtensionRange extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_DescriptorProto_ExtensionRange, a, b2);
    }
};
DescriptorProto_ExtensionRange.runtime = proto2;
DescriptorProto_ExtensionRange.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
DescriptorProto_ExtensionRange.fields = proto2.util.newFieldList(()=>[
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
            T: ExtensionRangeOptions,
            opt: true
        }
    ]);
DescriptorProto_ReservedRange = class _DescriptorProto_ReservedRange extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_DescriptorProto_ReservedRange, a, b2);
    }
};
DescriptorProto_ReservedRange.runtime = proto2;
DescriptorProto_ReservedRange.typeName = "google.protobuf.DescriptorProto.ReservedRange";
DescriptorProto_ReservedRange.fields = proto2.util.newFieldList(()=>[
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
ExtensionRangeOptions = class _ExtensionRangeOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        this.declaration = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_ExtensionRangeOptions, a, b2);
    }
};
ExtensionRangeOptions.runtime = proto2;
ExtensionRangeOptions.typeName = "google.protobuf.ExtensionRangeOptions";
ExtensionRangeOptions.fields = proto2.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: ExtensionRangeOptions_Declaration,
            repeated: true
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: FeatureSet,
            opt: true
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: proto2.getEnumType(ExtensionRangeOptions_VerificationState),
            opt: true,
            default: ExtensionRangeOptions_VerificationState.UNVERIFIED
        }
    ]);
(function(ExtensionRangeOptions_VerificationState2) {
    ExtensionRangeOptions_VerificationState2[ExtensionRangeOptions_VerificationState2["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState2[ExtensionRangeOptions_VerificationState2["UNVERIFIED"] = 1] = "UNVERIFIED";
})(ExtensionRangeOptions_VerificationState || (ExtensionRangeOptions_VerificationState = {}));
proto2.util.setEnumType(ExtensionRangeOptions_VerificationState, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
ExtensionRangeOptions_Declaration = class _ExtensionRangeOptions_Declaration extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_ExtensionRangeOptions_Declaration, a, b2);
    }
};
ExtensionRangeOptions_Declaration.runtime = proto2;
ExtensionRangeOptions_Declaration.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
ExtensionRangeOptions_Declaration.fields = proto2.util.newFieldList(()=>[
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
FieldDescriptorProto = class _FieldDescriptorProto extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FieldDescriptorProto, a, b2);
    }
};
FieldDescriptorProto.runtime = proto2;
FieldDescriptorProto.typeName = "google.protobuf.FieldDescriptorProto";
FieldDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: proto2.getEnumType(FieldDescriptorProto_Label),
            opt: true
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: proto2.getEnumType(FieldDescriptorProto_Type),
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
            T: FieldOptions,
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
(function(FieldDescriptorProto_Type2) {
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["DOUBLE"] = 1] = "DOUBLE";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["FLOAT"] = 2] = "FLOAT";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["INT64"] = 3] = "INT64";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["UINT64"] = 4] = "UINT64";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["INT32"] = 5] = "INT32";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["FIXED64"] = 6] = "FIXED64";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["FIXED32"] = 7] = "FIXED32";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["BOOL"] = 8] = "BOOL";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["STRING"] = 9] = "STRING";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["GROUP"] = 10] = "GROUP";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["MESSAGE"] = 11] = "MESSAGE";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["BYTES"] = 12] = "BYTES";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["UINT32"] = 13] = "UINT32";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["ENUM"] = 14] = "ENUM";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["SFIXED32"] = 15] = "SFIXED32";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["SFIXED64"] = 16] = "SFIXED64";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["SINT32"] = 17] = "SINT32";
    FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["SINT64"] = 18] = "SINT64";
})(FieldDescriptorProto_Type || (FieldDescriptorProto_Type = {}));
proto2.util.setEnumType(FieldDescriptorProto_Type, "google.protobuf.FieldDescriptorProto.Type", [
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
(function(FieldDescriptorProto_Label2) {
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["OPTIONAL"] = 1] = "OPTIONAL";
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["REPEATED"] = 3] = "REPEATED";
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["REQUIRED"] = 2] = "REQUIRED";
})(FieldDescriptorProto_Label || (FieldDescriptorProto_Label = {}));
proto2.util.setEnumType(FieldDescriptorProto_Label, "google.protobuf.FieldDescriptorProto.Label", [
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
OneofDescriptorProto = class _OneofDescriptorProto extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_OneofDescriptorProto, a, b2);
    }
};
OneofDescriptorProto.runtime = proto2;
OneofDescriptorProto.typeName = "google.protobuf.OneofDescriptorProto";
OneofDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: OneofOptions,
            opt: true
        }
    ]);
EnumDescriptorProto = class _EnumDescriptorProto extends Message {
    constructor(data){
        super();
        this.value = [];
        this.reservedRange = [];
        this.reservedName = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_EnumDescriptorProto, a, b2);
    }
};
EnumDescriptorProto.runtime = proto2;
EnumDescriptorProto.typeName = "google.protobuf.EnumDescriptorProto";
EnumDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: EnumValueDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: EnumOptions,
            opt: true
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: EnumDescriptorProto_EnumReservedRange,
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
EnumDescriptorProto_EnumReservedRange = class _EnumDescriptorProto_EnumReservedRange extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_EnumDescriptorProto_EnumReservedRange, a, b2);
    }
};
EnumDescriptorProto_EnumReservedRange.runtime = proto2;
EnumDescriptorProto_EnumReservedRange.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
EnumDescriptorProto_EnumReservedRange.fields = proto2.util.newFieldList(()=>[
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
EnumValueDescriptorProto = class _EnumValueDescriptorProto extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_EnumValueDescriptorProto, a, b2);
    }
};
EnumValueDescriptorProto.runtime = proto2;
EnumValueDescriptorProto.typeName = "google.protobuf.EnumValueDescriptorProto";
EnumValueDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: EnumValueOptions,
            opt: true
        }
    ]);
ServiceDescriptorProto = class _ServiceDescriptorProto extends Message {
    constructor(data){
        super();
        this.method = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_ServiceDescriptorProto, a, b2);
    }
};
ServiceDescriptorProto.runtime = proto2;
ServiceDescriptorProto.typeName = "google.protobuf.ServiceDescriptorProto";
ServiceDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: MethodDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: ServiceOptions,
            opt: true
        }
    ]);
MethodDescriptorProto = class _MethodDescriptorProto extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_MethodDescriptorProto, a, b2);
    }
};
MethodDescriptorProto.runtime = proto2;
MethodDescriptorProto.typeName = "google.protobuf.MethodDescriptorProto";
MethodDescriptorProto.fields = proto2.util.newFieldList(()=>[
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
            T: MethodOptions,
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
FileOptions = class _FileOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FileOptions, a, b2);
    }
};
FileOptions.runtime = proto2;
FileOptions.typeName = "google.protobuf.FileOptions";
FileOptions.fields = proto2.util.newFieldList(()=>[
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
            T: proto2.getEnumType(FileOptions_OptimizeMode),
            opt: true,
            default: FileOptions_OptimizeMode.SPEED
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
            T: FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
(function(FileOptions_OptimizeMode2) {
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["SPEED"] = 1] = "SPEED";
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["CODE_SIZE"] = 2] = "CODE_SIZE";
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
})(FileOptions_OptimizeMode || (FileOptions_OptimizeMode = {}));
proto2.util.setEnumType(FileOptions_OptimizeMode, "google.protobuf.FileOptions.OptimizeMode", [
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
MessageOptions = class _MessageOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_MessageOptions, a, b2);
    }
};
MessageOptions.runtime = proto2;
MessageOptions.typeName = "google.protobuf.MessageOptions";
MessageOptions.fields = proto2.util.newFieldList(()=>[
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
            T: FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
FieldOptions = class _FieldOptions extends Message {
    constructor(data){
        super();
        this.targets = [];
        this.editionDefaults = [];
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FieldOptions, a, b2);
    }
};
FieldOptions.runtime = proto2;
FieldOptions.typeName = "google.protobuf.FieldOptions";
FieldOptions.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: proto2.getEnumType(FieldOptions_CType),
            opt: true,
            default: FieldOptions_CType.STRING
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
            T: proto2.getEnumType(FieldOptions_JSType),
            opt: true,
            default: FieldOptions_JSType.JS_NORMAL
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
            T: proto2.getEnumType(FieldOptions_OptionRetention),
            opt: true
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: proto2.getEnumType(FieldOptions_OptionTargetType),
            repeated: true
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: FieldOptions_EditionDefault,
            repeated: true
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: FeatureSet,
            opt: true
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: FieldOptions_FeatureSupport,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
(function(FieldOptions_CType2) {
    FieldOptions_CType2[FieldOptions_CType2["STRING"] = 0] = "STRING";
    FieldOptions_CType2[FieldOptions_CType2["CORD"] = 1] = "CORD";
    FieldOptions_CType2[FieldOptions_CType2["STRING_PIECE"] = 2] = "STRING_PIECE";
})(FieldOptions_CType || (FieldOptions_CType = {}));
proto2.util.setEnumType(FieldOptions_CType, "google.protobuf.FieldOptions.CType", [
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
(function(FieldOptions_JSType2) {
    FieldOptions_JSType2[FieldOptions_JSType2["JS_NORMAL"] = 0] = "JS_NORMAL";
    FieldOptions_JSType2[FieldOptions_JSType2["JS_STRING"] = 1] = "JS_STRING";
    FieldOptions_JSType2[FieldOptions_JSType2["JS_NUMBER"] = 2] = "JS_NUMBER";
})(FieldOptions_JSType || (FieldOptions_JSType = {}));
proto2.util.setEnumType(FieldOptions_JSType, "google.protobuf.FieldOptions.JSType", [
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
(function(FieldOptions_OptionRetention2) {
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
})(FieldOptions_OptionRetention || (FieldOptions_OptionRetention = {}));
proto2.util.setEnumType(FieldOptions_OptionRetention, "google.protobuf.FieldOptions.OptionRetention", [
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
(function(FieldOptions_OptionTargetType2) {
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType2[FieldOptions_OptionTargetType2["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
})(FieldOptions_OptionTargetType || (FieldOptions_OptionTargetType = {}));
proto2.util.setEnumType(FieldOptions_OptionTargetType, "google.protobuf.FieldOptions.OptionTargetType", [
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
FieldOptions_EditionDefault = class _FieldOptions_EditionDefault extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FieldOptions_EditionDefault, a, b2);
    }
};
FieldOptions_EditionDefault.runtime = proto2;
FieldOptions_EditionDefault.typeName = "google.protobuf.FieldOptions.EditionDefault";
FieldOptions_EditionDefault.fields = proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: proto2.getEnumType(Edition),
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
FieldOptions_FeatureSupport = class _FieldOptions_FeatureSupport extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FieldOptions_FeatureSupport, a, b2);
    }
};
FieldOptions_FeatureSupport.runtime = proto2;
FieldOptions_FeatureSupport.typeName = "google.protobuf.FieldOptions.FeatureSupport";
FieldOptions_FeatureSupport.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: proto2.getEnumType(Edition),
            opt: true
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: proto2.getEnumType(Edition),
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
            T: proto2.getEnumType(Edition),
            opt: true
        }
    ]);
OneofOptions = class _OneofOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_OneofOptions, a, b2);
    }
};
OneofOptions.runtime = proto2;
OneofOptions.typeName = "google.protobuf.OneofOptions";
OneofOptions.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
EnumOptions = class _EnumOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_EnumOptions, a, b2);
    }
};
EnumOptions.runtime = proto2;
EnumOptions.typeName = "google.protobuf.EnumOptions";
EnumOptions.fields = proto2.util.newFieldList(()=>[
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
            T: FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
EnumValueOptions = class _EnumValueOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_EnumValueOptions, a, b2);
    }
};
EnumValueOptions.runtime = proto2;
EnumValueOptions.typeName = "google.protobuf.EnumValueOptions";
EnumValueOptions.fields = proto2.util.newFieldList(()=>[
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
            T: FeatureSet,
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
            T: FieldOptions_FeatureSupport,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
ServiceOptions = class _ServiceOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_ServiceOptions, a, b2);
    }
};
ServiceOptions.runtime = proto2;
ServiceOptions.typeName = "google.protobuf.ServiceOptions";
ServiceOptions.fields = proto2.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: FeatureSet,
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
            T: UninterpretedOption,
            repeated: true
        }
    ]);
MethodOptions = class _MethodOptions extends Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_MethodOptions, a, b2);
    }
};
MethodOptions.runtime = proto2;
MethodOptions.typeName = "google.protobuf.MethodOptions";
MethodOptions.fields = proto2.util.newFieldList(()=>[
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
            T: proto2.getEnumType(MethodOptions_IdempotencyLevel),
            opt: true,
            default: MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: UninterpretedOption,
            repeated: true
        }
    ]);
(function(MethodOptions_IdempotencyLevel2) {
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENT"] = 2] = "IDEMPOTENT";
})(MethodOptions_IdempotencyLevel || (MethodOptions_IdempotencyLevel = {}));
proto2.util.setEnumType(MethodOptions_IdempotencyLevel, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
UninterpretedOption = class _UninterpretedOption extends Message {
    constructor(data){
        super();
        this.name = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_UninterpretedOption, a, b2);
    }
};
UninterpretedOption.runtime = proto2;
UninterpretedOption.typeName = "google.protobuf.UninterpretedOption";
UninterpretedOption.fields = proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: UninterpretedOption_NamePart,
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
UninterpretedOption_NamePart = class _UninterpretedOption_NamePart extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_UninterpretedOption_NamePart, a, b2);
    }
};
UninterpretedOption_NamePart.runtime = proto2;
UninterpretedOption_NamePart.typeName = "google.protobuf.UninterpretedOption.NamePart";
UninterpretedOption_NamePart.fields = proto2.util.newFieldList(()=>[
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
FeatureSet = class _FeatureSet extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FeatureSet, a, b2);
    }
};
FeatureSet.runtime = proto2;
FeatureSet.typeName = "google.protobuf.FeatureSet";
FeatureSet.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_FieldPresence),
            opt: true
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_EnumType),
            opt: true
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_RepeatedFieldEncoding),
            opt: true
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_Utf8Validation),
            opt: true
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_MessageEncoding),
            opt: true
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: proto2.getEnumType(FeatureSet_JsonFormat),
            opt: true
        }
    ]);
(function(FeatureSet_FieldPresence2) {
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
})(FeatureSet_FieldPresence || (FeatureSet_FieldPresence = {}));
proto2.util.setEnumType(FeatureSet_FieldPresence, "google.protobuf.FeatureSet.FieldPresence", [
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
(function(FeatureSet_EnumType2) {
    FeatureSet_EnumType2[FeatureSet_EnumType2["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType2[FeatureSet_EnumType2["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType2[FeatureSet_EnumType2["CLOSED"] = 2] = "CLOSED";
})(FeatureSet_EnumType || (FeatureSet_EnumType = {}));
proto2.util.setEnumType(FeatureSet_EnumType, "google.protobuf.FeatureSet.EnumType", [
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
(function(FeatureSet_RepeatedFieldEncoding2) {
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["EXPANDED"] = 2] = "EXPANDED";
})(FeatureSet_RepeatedFieldEncoding || (FeatureSet_RepeatedFieldEncoding = {}));
proto2.util.setEnumType(FeatureSet_RepeatedFieldEncoding, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
(function(FeatureSet_Utf8Validation2) {
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["VERIFY"] = 2] = "VERIFY";
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["NONE"] = 3] = "NONE";
})(FeatureSet_Utf8Validation || (FeatureSet_Utf8Validation = {}));
proto2.util.setEnumType(FeatureSet_Utf8Validation, "google.protobuf.FeatureSet.Utf8Validation", [
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
(function(FeatureSet_MessageEncoding2) {
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["DELIMITED"] = 2] = "DELIMITED";
})(FeatureSet_MessageEncoding || (FeatureSet_MessageEncoding = {}));
proto2.util.setEnumType(FeatureSet_MessageEncoding, "google.protobuf.FeatureSet.MessageEncoding", [
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
(function(FeatureSet_JsonFormat2) {
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
})(FeatureSet_JsonFormat || (FeatureSet_JsonFormat = {}));
proto2.util.setEnumType(FeatureSet_JsonFormat, "google.protobuf.FeatureSet.JsonFormat", [
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
FeatureSetDefaults = class _FeatureSetDefaults extends Message {
    constructor(data){
        super();
        this.defaults = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FeatureSetDefaults, a, b2);
    }
};
FeatureSetDefaults.runtime = proto2;
FeatureSetDefaults.typeName = "google.protobuf.FeatureSetDefaults";
FeatureSetDefaults.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: FeatureSetDefaults_FeatureSetEditionDefault,
            repeated: true
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: proto2.getEnumType(Edition),
            opt: true
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: proto2.getEnumType(Edition),
            opt: true
        }
    ]);
FeatureSetDefaults_FeatureSetEditionDefault = class _FeatureSetDefaults_FeatureSetEditionDefault extends Message {
    constructor(data){
        super();
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_FeatureSetDefaults_FeatureSetEditionDefault, a, b2);
    }
};
FeatureSetDefaults_FeatureSetEditionDefault.runtime = proto2;
FeatureSetDefaults_FeatureSetEditionDefault.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
FeatureSetDefaults_FeatureSetEditionDefault.fields = proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: proto2.getEnumType(Edition),
            opt: true
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: FeatureSet,
            opt: true
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: FeatureSet,
            opt: true
        }
    ]);
SourceCodeInfo = class _SourceCodeInfo extends Message {
    constructor(data){
        super();
        this.location = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_SourceCodeInfo, a, b2);
    }
};
SourceCodeInfo.runtime = proto2;
SourceCodeInfo.typeName = "google.protobuf.SourceCodeInfo";
SourceCodeInfo.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: SourceCodeInfo_Location,
            repeated: true
        }
    ]);
SourceCodeInfo_Location = class _SourceCodeInfo_Location extends Message {
    constructor(data){
        super();
        this.path = [];
        this.span = [];
        this.leadingDetachedComments = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_SourceCodeInfo_Location, a, b2);
    }
};
SourceCodeInfo_Location.runtime = proto2;
SourceCodeInfo_Location.typeName = "google.protobuf.SourceCodeInfo.Location";
SourceCodeInfo_Location.fields = proto2.util.newFieldList(()=>[
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
GeneratedCodeInfo = class _GeneratedCodeInfo extends Message {
    constructor(data){
        super();
        this.annotation = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_GeneratedCodeInfo, a, b2);
    }
};
GeneratedCodeInfo.runtime = proto2;
GeneratedCodeInfo.typeName = "google.protobuf.GeneratedCodeInfo";
GeneratedCodeInfo.fields = proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: GeneratedCodeInfo_Annotation,
            repeated: true
        }
    ]);
GeneratedCodeInfo_Annotation = class _GeneratedCodeInfo_Annotation extends Message {
    constructor(data){
        super();
        this.path = [];
        proto2.util.initPartial(data, this);
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
        return proto2.util.equals(_GeneratedCodeInfo_Annotation, a, b2);
    }
};
GeneratedCodeInfo_Annotation.runtime = proto2;
GeneratedCodeInfo_Annotation.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
GeneratedCodeInfo_Annotation.fields = proto2.util.newFieldList(()=>[
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
            T: proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic),
            opt: true
        }
    ]);
(function(GeneratedCodeInfo_Annotation_Semantic2) {
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["NONE"] = 0] = "NONE";
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["SET"] = 1] = "SET";
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["ALIAS"] = 2] = "ALIAS";
})(GeneratedCodeInfo_Annotation_Semantic || (GeneratedCodeInfo_Annotation_Semantic = {}));
proto2.util.setEnumType(GeneratedCodeInfo_Annotation_Semantic, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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

}
