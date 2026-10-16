require.r(exports);
require.d(exports, {
    DescriptorProto: ()=>DescriptorProto,
    DescriptorProto_ExtensionRange: ()=>DescriptorProto_ExtensionRange,
    DescriptorProto_ReservedRange: ()=>DescriptorProto_ReservedRange,
    Edition: ()=>Edition,
    EnumDescriptorProto: ()=>EnumDescriptorProto,
    EnumDescriptorProto_EnumReservedRange: ()=>EnumDescriptorProto_EnumReservedRange,
    EnumOptions: ()=>EnumOptions,
    EnumValueDescriptorProto: ()=>EnumValueDescriptorProto,
    EnumValueOptions: ()=>EnumValueOptions,
    ExtensionRangeOptions: ()=>ExtensionRangeOptions,
    ExtensionRangeOptions_Declaration: ()=>ExtensionRangeOptions_Declaration,
    ExtensionRangeOptions_VerificationState: ()=>ExtensionRangeOptions_VerificationState,
    FeatureSet: ()=>FeatureSet,
    FeatureSetDefaults: ()=>FeatureSetDefaults,
    FeatureSetDefaults_FeatureSetEditionDefault: ()=>FeatureSetDefaults_FeatureSetEditionDefault,
    FeatureSet_EnumType: ()=>FeatureSet_EnumType,
    FeatureSet_FieldPresence: ()=>FeatureSet_FieldPresence,
    FeatureSet_JsonFormat: ()=>FeatureSet_JsonFormat,
    FeatureSet_MessageEncoding: ()=>FeatureSet_MessageEncoding,
    FeatureSet_RepeatedFieldEncoding: ()=>FeatureSet_RepeatedFieldEncoding,
    FeatureSet_Utf8Validation: ()=>FeatureSet_Utf8Validation,
    FieldDescriptorProto: ()=>FieldDescriptorProto,
    FieldDescriptorProto_Label: ()=>FieldDescriptorProto_Label,
    FieldDescriptorProto_Type: ()=>FieldDescriptorProto_Type,
    FieldOptions: ()=>FieldOptions,
    FieldOptions_CType: ()=>FieldOptions_CType,
    FieldOptions_EditionDefault: ()=>FieldOptions_EditionDefault,
    FieldOptions_FeatureSupport: ()=>FieldOptions_FeatureSupport,
    FieldOptions_JSType: ()=>FieldOptions_JSType,
    FieldOptions_OptionRetention: ()=>FieldOptions_OptionRetention,
    FieldOptions_OptionTargetType: ()=>FieldOptions_OptionTargetType,
    FileDescriptorProto: ()=>FileDescriptorProto,
    FileDescriptorSet: ()=>FileDescriptorSet,
    FileOptions: ()=>FileOptions,
    FileOptions_OptimizeMode: ()=>FileOptions_OptimizeMode,
    GeneratedCodeInfo: ()=>GeneratedCodeInfo,
    GeneratedCodeInfo_Annotation: ()=>GeneratedCodeInfo_Annotation,
    GeneratedCodeInfo_Annotation_Semantic: ()=>GeneratedCodeInfo_Annotation_Semantic,
    MessageOptions: ()=>MessageOptions,
    MethodDescriptorProto: ()=>MethodDescriptorProto,
    MethodOptions: ()=>MethodOptions,
    MethodOptions_IdempotencyLevel: ()=>MethodOptions_IdempotencyLevel,
    OneofDescriptorProto: ()=>OneofDescriptorProto,
    OneofOptions: ()=>OneofOptions,
    ServiceDescriptorProto: ()=>ServiceDescriptorProto,
    ServiceOptions: ()=>ServiceOptions,
    SourceCodeInfo: ()=>SourceCodeInfo,
    SourceCodeInfo_Location: ()=>SourceCodeInfo_Location,
    UninterpretedOption: ()=>UninterpretedOption,
    UninterpretedOption_NamePart: ()=>UninterpretedOption_NamePart
});
var _proto2_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-31.js");
var _message_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-12.js");
var Edition = ((Edition2)=>{
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
    return Edition2;
})(Edition || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(Edition, "google.protobuf.Edition", [
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
const _FileDescriptorSet = class _FileDescriptorSet extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.file = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FileDescriptorSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FileDescriptorSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FileDescriptorSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FileDescriptorSet, a, b);
    }
};
_FileDescriptorSet.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FileDescriptorSet.typeName = "google.protobuf.FileDescriptorSet";
_FileDescriptorSet.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: FileDescriptorProto,
            repeated: true
        }
    ]);
let FileDescriptorSet = _FileDescriptorSet;
const _FileDescriptorProto = class _FileDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.dependency = [];
        this.publicDependency = [];
        this.weakDependency = [];
        this.messageType = [];
        this.enumType = [];
        this.service = [];
        this.extension = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FileDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FileDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FileDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FileDescriptorProto, a, b);
    }
};
_FileDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FileDescriptorProto.typeName = "google.protobuf.FileDescriptorProto";
_FileDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
            opt: true
        }
    ]);
let FileDescriptorProto = _FileDescriptorProto;
const _DescriptorProto = class _DescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
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
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_DescriptorProto, a, b);
    }
};
_DescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_DescriptorProto.typeName = "google.protobuf.DescriptorProto";
_DescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _DescriptorProto,
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
let DescriptorProto = _DescriptorProto;
const _DescriptorProto_ExtensionRange = class _DescriptorProto_ExtensionRange extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DescriptorProto_ExtensionRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DescriptorProto_ExtensionRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DescriptorProto_ExtensionRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_DescriptorProto_ExtensionRange, a, b);
    }
};
_DescriptorProto_ExtensionRange.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_DescriptorProto_ExtensionRange.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
_DescriptorProto_ExtensionRange.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let DescriptorProto_ExtensionRange = _DescriptorProto_ExtensionRange;
const _DescriptorProto_ReservedRange = class _DescriptorProto_ReservedRange extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DescriptorProto_ReservedRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DescriptorProto_ReservedRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DescriptorProto_ReservedRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_DescriptorProto_ReservedRange, a, b);
    }
};
_DescriptorProto_ReservedRange.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_DescriptorProto_ReservedRange.typeName = "google.protobuf.DescriptorProto.ReservedRange";
_DescriptorProto_ReservedRange.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let DescriptorProto_ReservedRange = _DescriptorProto_ReservedRange;
const _ExtensionRangeOptions = class _ExtensionRangeOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        this.declaration = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ExtensionRangeOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ExtensionRangeOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ExtensionRangeOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_ExtensionRangeOptions, a, b);
    }
};
_ExtensionRangeOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_ExtensionRangeOptions.typeName = "google.protobuf.ExtensionRangeOptions";
_ExtensionRangeOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(ExtensionRangeOptions_VerificationState),
            opt: true,
            default: 1
        }
    ]);
let ExtensionRangeOptions = _ExtensionRangeOptions;
var ExtensionRangeOptions_VerificationState = ((ExtensionRangeOptions_VerificationState2)=>{
    ExtensionRangeOptions_VerificationState2[ExtensionRangeOptions_VerificationState2["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState2[ExtensionRangeOptions_VerificationState2["UNVERIFIED"] = 1] = "UNVERIFIED";
    return ExtensionRangeOptions_VerificationState2;
})(ExtensionRangeOptions_VerificationState || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(ExtensionRangeOptions_VerificationState, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
const _ExtensionRangeOptions_Declaration = class _ExtensionRangeOptions_Declaration extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ExtensionRangeOptions_Declaration().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ExtensionRangeOptions_Declaration().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ExtensionRangeOptions_Declaration().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_ExtensionRangeOptions_Declaration, a, b);
    }
};
_ExtensionRangeOptions_Declaration.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_ExtensionRangeOptions_Declaration.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
_ExtensionRangeOptions_Declaration.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let ExtensionRangeOptions_Declaration = _ExtensionRangeOptions_Declaration;
const _FieldDescriptorProto = class _FieldDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FieldDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FieldDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FieldDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FieldDescriptorProto, a, b);
    }
};
_FieldDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FieldDescriptorProto.typeName = "google.protobuf.FieldDescriptorProto";
_FieldDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldDescriptorProto_Label),
            opt: true
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldDescriptorProto_Type),
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
let FieldDescriptorProto = _FieldDescriptorProto;
var FieldDescriptorProto_Type = ((FieldDescriptorProto_Type2)=>{
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
    return FieldDescriptorProto_Type2;
})(FieldDescriptorProto_Type || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldDescriptorProto_Type, "google.protobuf.FieldDescriptorProto.Type", [
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
var FieldDescriptorProto_Label = ((FieldDescriptorProto_Label2)=>{
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["OPTIONAL"] = 1] = "OPTIONAL";
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["REPEATED"] = 3] = "REPEATED";
    FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["REQUIRED"] = 2] = "REQUIRED";
    return FieldDescriptorProto_Label2;
})(FieldDescriptorProto_Label || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldDescriptorProto_Label, "google.protobuf.FieldDescriptorProto.Label", [
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
const _OneofDescriptorProto = class _OneofDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _OneofDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _OneofDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _OneofDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_OneofDescriptorProto, a, b);
    }
};
_OneofDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_OneofDescriptorProto.typeName = "google.protobuf.OneofDescriptorProto";
_OneofDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let OneofDescriptorProto = _OneofDescriptorProto;
const _EnumDescriptorProto = class _EnumDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.value = [];
        this.reservedRange = [];
        this.reservedName = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_EnumDescriptorProto, a, b);
    }
};
_EnumDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_EnumDescriptorProto.typeName = "google.protobuf.EnumDescriptorProto";
_EnumDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let EnumDescriptorProto = _EnumDescriptorProto;
const _EnumDescriptorProto_EnumReservedRange = class _EnumDescriptorProto_EnumReservedRange extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumDescriptorProto_EnumReservedRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumDescriptorProto_EnumReservedRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumDescriptorProto_EnumReservedRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_EnumDescriptorProto_EnumReservedRange, a, b);
    }
};
_EnumDescriptorProto_EnumReservedRange.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_EnumDescriptorProto_EnumReservedRange.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
_EnumDescriptorProto_EnumReservedRange.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let EnumDescriptorProto_EnumReservedRange = _EnumDescriptorProto_EnumReservedRange;
const _EnumValueDescriptorProto = class _EnumValueDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumValueDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumValueDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumValueDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_EnumValueDescriptorProto, a, b);
    }
};
_EnumValueDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_EnumValueDescriptorProto.typeName = "google.protobuf.EnumValueDescriptorProto";
_EnumValueDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let EnumValueDescriptorProto = _EnumValueDescriptorProto;
const _ServiceDescriptorProto = class _ServiceDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.method = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ServiceDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ServiceDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ServiceDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_ServiceDescriptorProto, a, b);
    }
};
_ServiceDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_ServiceDescriptorProto.typeName = "google.protobuf.ServiceDescriptorProto";
_ServiceDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let ServiceDescriptorProto = _ServiceDescriptorProto;
const _MethodDescriptorProto = class _MethodDescriptorProto extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MethodDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MethodDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MethodDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_MethodDescriptorProto, a, b);
    }
};
_MethodDescriptorProto.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_MethodDescriptorProto.typeName = "google.protobuf.MethodDescriptorProto";
_MethodDescriptorProto.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let MethodDescriptorProto = _MethodDescriptorProto;
const _FileOptions = class _FileOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FileOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FileOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FileOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FileOptions, a, b);
    }
};
_FileOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FileOptions.typeName = "google.protobuf.FileOptions";
_FileOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FileOptions_OptimizeMode),
            opt: true,
            default: 1
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
let FileOptions = _FileOptions;
var FileOptions_OptimizeMode = ((FileOptions_OptimizeMode2)=>{
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["SPEED"] = 1] = "SPEED";
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["CODE_SIZE"] = 2] = "CODE_SIZE";
    FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    return FileOptions_OptimizeMode2;
})(FileOptions_OptimizeMode || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FileOptions_OptimizeMode, "google.protobuf.FileOptions.OptimizeMode", [
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
const _MessageOptions = class _MessageOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MessageOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MessageOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MessageOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_MessageOptions, a, b);
    }
};
_MessageOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_MessageOptions.typeName = "google.protobuf.MessageOptions";
_MessageOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let MessageOptions = _MessageOptions;
const _FieldOptions = class _FieldOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.targets = [];
        this.editionDefaults = [];
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FieldOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FieldOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FieldOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FieldOptions, a, b);
    }
};
_FieldOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FieldOptions.typeName = "google.protobuf.FieldOptions";
_FieldOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldOptions_CType),
            opt: true,
            default: 0
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldOptions_JSType),
            opt: true,
            default: 0
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldOptions_OptionRetention),
            opt: true
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FieldOptions_OptionTargetType),
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
let FieldOptions = _FieldOptions;
var FieldOptions_CType = ((FieldOptions_CType2)=>{
    FieldOptions_CType2[FieldOptions_CType2["STRING"] = 0] = "STRING";
    FieldOptions_CType2[FieldOptions_CType2["CORD"] = 1] = "CORD";
    FieldOptions_CType2[FieldOptions_CType2["STRING_PIECE"] = 2] = "STRING_PIECE";
    return FieldOptions_CType2;
})(FieldOptions_CType || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldOptions_CType, "google.protobuf.FieldOptions.CType", [
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
var FieldOptions_JSType = ((FieldOptions_JSType2)=>{
    FieldOptions_JSType2[FieldOptions_JSType2["JS_NORMAL"] = 0] = "JS_NORMAL";
    FieldOptions_JSType2[FieldOptions_JSType2["JS_STRING"] = 1] = "JS_STRING";
    FieldOptions_JSType2[FieldOptions_JSType2["JS_NUMBER"] = 2] = "JS_NUMBER";
    return FieldOptions_JSType2;
})(FieldOptions_JSType || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldOptions_JSType, "google.protobuf.FieldOptions.JSType", [
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
var FieldOptions_OptionRetention = ((FieldOptions_OptionRetention2)=>{
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention2[FieldOptions_OptionRetention2["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
    return FieldOptions_OptionRetention2;
})(FieldOptions_OptionRetention || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldOptions_OptionRetention, "google.protobuf.FieldOptions.OptionRetention", [
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
var FieldOptions_OptionTargetType = ((FieldOptions_OptionTargetType2)=>{
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
    return FieldOptions_OptionTargetType2;
})(FieldOptions_OptionTargetType || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FieldOptions_OptionTargetType, "google.protobuf.FieldOptions.OptionTargetType", [
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
const _FieldOptions_EditionDefault = class _FieldOptions_EditionDefault extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FieldOptions_EditionDefault().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FieldOptions_EditionDefault().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FieldOptions_EditionDefault().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FieldOptions_EditionDefault, a, b);
    }
};
_FieldOptions_EditionDefault.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FieldOptions_EditionDefault.typeName = "google.protobuf.FieldOptions.EditionDefault";
_FieldOptions_EditionDefault.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
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
let FieldOptions_EditionDefault = _FieldOptions_EditionDefault;
const _FieldOptions_FeatureSupport = class _FieldOptions_FeatureSupport extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FieldOptions_FeatureSupport().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FieldOptions_FeatureSupport().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FieldOptions_FeatureSupport().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FieldOptions_FeatureSupport, a, b);
    }
};
_FieldOptions_FeatureSupport.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FieldOptions_FeatureSupport.typeName = "google.protobuf.FieldOptions.FeatureSupport";
_FieldOptions_FeatureSupport.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
            opt: true
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
            opt: true
        }
    ]);
let FieldOptions_FeatureSupport = _FieldOptions_FeatureSupport;
const _OneofOptions = class _OneofOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _OneofOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _OneofOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _OneofOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_OneofOptions, a, b);
    }
};
_OneofOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_OneofOptions.typeName = "google.protobuf.OneofOptions";
_OneofOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let OneofOptions = _OneofOptions;
const _EnumOptions = class _EnumOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_EnumOptions, a, b);
    }
};
_EnumOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_EnumOptions.typeName = "google.protobuf.EnumOptions";
_EnumOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let EnumOptions = _EnumOptions;
const _EnumValueOptions = class _EnumValueOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumValueOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumValueOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumValueOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_EnumValueOptions, a, b);
    }
};
_EnumValueOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_EnumValueOptions.typeName = "google.protobuf.EnumValueOptions";
_EnumValueOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let EnumValueOptions = _EnumValueOptions;
const _ServiceOptions = class _ServiceOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ServiceOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ServiceOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ServiceOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_ServiceOptions, a, b);
    }
};
_ServiceOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_ServiceOptions.typeName = "google.protobuf.ServiceOptions";
_ServiceOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let ServiceOptions = _ServiceOptions;
const _MethodOptions = class _MethodOptions extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.uninterpretedOption = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MethodOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MethodOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MethodOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_MethodOptions, a, b);
    }
};
_MethodOptions.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_MethodOptions.typeName = "google.protobuf.MethodOptions";
_MethodOptions.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(MethodOptions_IdempotencyLevel),
            opt: true,
            default: 0
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
let MethodOptions = _MethodOptions;
var MethodOptions_IdempotencyLevel = ((MethodOptions_IdempotencyLevel2)=>{
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    return MethodOptions_IdempotencyLevel2;
})(MethodOptions_IdempotencyLevel || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(MethodOptions_IdempotencyLevel, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
const _UninterpretedOption = class _UninterpretedOption extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.name = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UninterpretedOption().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UninterpretedOption().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UninterpretedOption().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_UninterpretedOption, a, b);
    }
};
_UninterpretedOption.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_UninterpretedOption.typeName = "google.protobuf.UninterpretedOption";
_UninterpretedOption.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let UninterpretedOption = _UninterpretedOption;
const _UninterpretedOption_NamePart = class _UninterpretedOption_NamePart extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UninterpretedOption_NamePart().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UninterpretedOption_NamePart().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UninterpretedOption_NamePart().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_UninterpretedOption_NamePart, a, b);
    }
};
_UninterpretedOption_NamePart.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_UninterpretedOption_NamePart.typeName = "google.protobuf.UninterpretedOption.NamePart";
_UninterpretedOption_NamePart.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let UninterpretedOption_NamePart = _UninterpretedOption_NamePart;
const _FeatureSet = class _FeatureSet extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FeatureSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FeatureSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FeatureSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FeatureSet, a, b);
    }
};
_FeatureSet.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FeatureSet.typeName = "google.protobuf.FeatureSet";
_FeatureSet.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_FieldPresence),
            opt: true
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_EnumType),
            opt: true
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_RepeatedFieldEncoding),
            opt: true
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_Utf8Validation),
            opt: true
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_MessageEncoding),
            opt: true
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(FeatureSet_JsonFormat),
            opt: true
        }
    ]);
let FeatureSet = _FeatureSet;
var FeatureSet_FieldPresence = ((FeatureSet_FieldPresence2)=>{
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence2[FeatureSet_FieldPresence2["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
    return FeatureSet_FieldPresence2;
})(FeatureSet_FieldPresence || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_FieldPresence, "google.protobuf.FeatureSet.FieldPresence", [
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
var FeatureSet_EnumType = ((FeatureSet_EnumType2)=>{
    FeatureSet_EnumType2[FeatureSet_EnumType2["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType2[FeatureSet_EnumType2["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType2[FeatureSet_EnumType2["CLOSED"] = 2] = "CLOSED";
    return FeatureSet_EnumType2;
})(FeatureSet_EnumType || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_EnumType, "google.protobuf.FeatureSet.EnumType", [
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
var FeatureSet_RepeatedFieldEncoding = ((FeatureSet_RepeatedFieldEncoding2)=>{
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding2[FeatureSet_RepeatedFieldEncoding2["EXPANDED"] = 2] = "EXPANDED";
    return FeatureSet_RepeatedFieldEncoding2;
})(FeatureSet_RepeatedFieldEncoding || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_RepeatedFieldEncoding, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
var FeatureSet_Utf8Validation = ((FeatureSet_Utf8Validation2)=>{
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["VERIFY"] = 2] = "VERIFY";
    FeatureSet_Utf8Validation2[FeatureSet_Utf8Validation2["NONE"] = 3] = "NONE";
    return FeatureSet_Utf8Validation2;
})(FeatureSet_Utf8Validation || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_Utf8Validation, "google.protobuf.FeatureSet.Utf8Validation", [
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
var FeatureSet_MessageEncoding = ((FeatureSet_MessageEncoding2)=>{
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding2[FeatureSet_MessageEncoding2["DELIMITED"] = 2] = "DELIMITED";
    return FeatureSet_MessageEncoding2;
})(FeatureSet_MessageEncoding || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_MessageEncoding, "google.protobuf.FeatureSet.MessageEncoding", [
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
var FeatureSet_JsonFormat = ((FeatureSet_JsonFormat2)=>{
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat2[FeatureSet_JsonFormat2["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
    return FeatureSet_JsonFormat2;
})(FeatureSet_JsonFormat || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(FeatureSet_JsonFormat, "google.protobuf.FeatureSet.JsonFormat", [
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
const _FeatureSetDefaults = class _FeatureSetDefaults extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.defaults = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FeatureSetDefaults().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FeatureSetDefaults().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FeatureSetDefaults().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FeatureSetDefaults, a, b);
    }
};
_FeatureSetDefaults.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FeatureSetDefaults.typeName = "google.protobuf.FeatureSetDefaults";
_FeatureSetDefaults.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
            opt: true
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
            opt: true
        }
    ]);
let FeatureSetDefaults = _FeatureSetDefaults;
const _FeatureSetDefaults_FeatureSetEditionDefault = class _FeatureSetDefaults_FeatureSetEditionDefault extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FeatureSetDefaults_FeatureSetEditionDefault().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_FeatureSetDefaults_FeatureSetEditionDefault, a, b);
    }
};
_FeatureSetDefaults_FeatureSetEditionDefault.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_FeatureSetDefaults_FeatureSetEditionDefault.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
_FeatureSetDefaults_FeatureSetEditionDefault.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(Edition),
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
let FeatureSetDefaults_FeatureSetEditionDefault = _FeatureSetDefaults_FeatureSetEditionDefault;
const _SourceCodeInfo = class _SourceCodeInfo extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.location = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SourceCodeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SourceCodeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SourceCodeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_SourceCodeInfo, a, b);
    }
};
_SourceCodeInfo.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_SourceCodeInfo.typeName = "google.protobuf.SourceCodeInfo";
_SourceCodeInfo.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: SourceCodeInfo_Location,
            repeated: true
        }
    ]);
let SourceCodeInfo = _SourceCodeInfo;
const _SourceCodeInfo_Location = class _SourceCodeInfo_Location extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.path = [];
        this.span = [];
        this.leadingDetachedComments = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SourceCodeInfo_Location().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SourceCodeInfo_Location().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SourceCodeInfo_Location().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_SourceCodeInfo_Location, a, b);
    }
};
_SourceCodeInfo_Location.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_SourceCodeInfo_Location.typeName = "google.protobuf.SourceCodeInfo.Location";
_SourceCodeInfo_Location.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
let SourceCodeInfo_Location = _SourceCodeInfo_Location;
const _GeneratedCodeInfo = class _GeneratedCodeInfo extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.annotation = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GeneratedCodeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GeneratedCodeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GeneratedCodeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_GeneratedCodeInfo, a, b);
    }
};
_GeneratedCodeInfo.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_GeneratedCodeInfo.typeName = "google.protobuf.GeneratedCodeInfo";
_GeneratedCodeInfo.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: GeneratedCodeInfo_Annotation,
            repeated: true
        }
    ]);
let GeneratedCodeInfo = _GeneratedCodeInfo;
const _GeneratedCodeInfo_Annotation = class _GeneratedCodeInfo_Annotation extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.path = [];
        _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GeneratedCodeInfo_Annotation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GeneratedCodeInfo_Annotation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GeneratedCodeInfo_Annotation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.equals(_GeneratedCodeInfo_Annotation, a, b);
    }
};
_GeneratedCodeInfo_Annotation.runtime = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2;
_GeneratedCodeInfo_Annotation.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
_GeneratedCodeInfo_Annotation.fields = _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.newFieldList(()=>[
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
            T: _proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic),
            opt: true
        }
    ]);
let GeneratedCodeInfo_Annotation = _GeneratedCodeInfo_Annotation;
var GeneratedCodeInfo_Annotation_Semantic = ((GeneratedCodeInfo_Annotation_Semantic2)=>{
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["NONE"] = 0] = "NONE";
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["SET"] = 1] = "SET";
    GeneratedCodeInfo_Annotation_Semantic2[GeneratedCodeInfo_Annotation_Semantic2["ALIAS"] = 2] = "ALIAS";
    return GeneratedCodeInfo_Annotation_Semantic2;
})(GeneratedCodeInfo_Annotation_Semantic || {});
_proto2_js__WEBPACK_IMPORTED_MODULE_0__.proto2.util.setEnumType(GeneratedCodeInfo_Annotation_Semantic, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
