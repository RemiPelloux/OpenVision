Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GeneratedCodeInfo_Annotation_Semantic = exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.FeatureSetDefaults_FeatureSetEditionDefault = exports.FeatureSetDefaults = exports.FeatureSet_JsonFormat = exports.FeatureSet_MessageEncoding = exports.FeatureSet_Utf8Validation = exports.FeatureSet_RepeatedFieldEncoding = exports.FeatureSet_EnumType = exports.FeatureSet_FieldPresence = exports.FeatureSet = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions_IdempotencyLevel = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions_FeatureSupport = exports.FieldOptions_EditionDefault = exports.FieldOptions_OptionTargetType = exports.FieldOptions_OptionRetention = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FieldOptions = exports.MessageOptions = exports.FileOptions_OptimizeMode = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = exports.FieldDescriptorProto = exports.ExtensionRangeOptions_Declaration = exports.ExtensionRangeOptions_VerificationState = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.Edition = void 0;
const s = require("./module-3672.js"), o = require("./module-4193.js");
var r, t, i, m, l, d, c, T, p, _, k, u, g, E, v, y, S;
!function(e) {
    e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX";
}(r || (exports.Edition = r = {})), s.proto2.util.setEnumType(r, "google.protobuf.Edition", [
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
class R extends o.Message {
    constructor(e){
        super(), this.file = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new R).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new R).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new R).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(R, e, a);
    }
}
exports.FileDescriptorSet = R, R.runtime = s.proto2, R.typeName = "google.protobuf.FileDescriptorSet", R.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: I,
            repeated: !0
        }
    ]);
class I extends o.Message {
    constructor(e){
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new I).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new I).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new I).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(I, e, a);
    }
}
exports.FileDescriptorProto = I, I.runtime = s.proto2, I.typeName = "google.protobuf.FileDescriptorProto", I.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "package",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "dependency",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "public_dependency",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 11,
            name: "weak_dependency",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 4,
            name: "message_type",
            kind: "message",
            T: f,
            repeated: !0
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: b,
            repeated: !0
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: D,
            repeated: !0
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: M,
            repeated: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: G,
            opt: !0
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: $,
            opt: !0
        },
        {
            no: 12,
            name: "syntax",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "edition",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        }
    ]);
class f extends o.Message {
    constructor(e){
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new f).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new f).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new f).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(f, e, a);
    }
}
exports.DescriptorProto = f, f.runtime = s.proto2, f.typeName = "google.protobuf.DescriptorProto", f.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "field",
            kind: "message",
            T: M,
            repeated: !0
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: M,
            repeated: !0
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: f,
            repeated: !0
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: b,
            repeated: !0
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: N,
            repeated: !0
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: C,
            repeated: !0
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: w,
            opt: !0
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: O,
            repeated: !0
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
class N extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new N).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new N).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new N).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(N, e, a);
    }
}
exports.DescriptorProto_ExtensionRange = N, N.runtime = s.proto2, N.typeName = "google.protobuf.DescriptorProto.ExtensionRange", N.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: h,
            opt: !0
        }
    ]);
class O extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new O).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new O).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new O).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(O, e, a);
    }
}
exports.DescriptorProto_ReservedRange = O, O.runtime = s.proto2, O.typeName = "google.protobuf.DescriptorProto.ReservedRange", O.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]);
class h extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], this.declaration = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new h).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new h).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new h).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(h, e, a);
    }
}
exports.ExtensionRangeOptions = h, h.runtime = s.proto2, h.typeName = "google.protobuf.ExtensionRangeOptions", h.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: A,
            repeated: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: s.proto2.getEnumType(t),
            opt: !0,
            default: t.UNVERIFIED
        }
    ]), function(e) {
    e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED";
}(t || (exports.ExtensionRangeOptions_VerificationState = t = {})), s.proto2.util.setEnumType(t, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
class A extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new A).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new A).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new A).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(A, e, a);
    }
}
exports.ExtensionRangeOptions_Declaration = A, A.runtime = s.proto2, A.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", A.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "full_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "reserved",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "repeated",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]);
class M extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new M).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new M).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new M).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(M, e, a);
    }
}
exports.FieldDescriptorProto = M, M.runtime = s.proto2, M.typeName = "google.protobuf.FieldDescriptorProto", M.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "label",
            kind: "enum",
            T: s.proto2.getEnumType(m),
            opt: !0
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: s.proto2.getEnumType(i),
            opt: !0
        },
        {
            no: 6,
            name: "type_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "extendee",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "default_value",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "oneof_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: F,
            opt: !0
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64";
}(i || (exports.FieldDescriptorProto_Type = i = {})), s.proto2.util.setEnumType(i, "google.protobuf.FieldDescriptorProto.Type", [
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
]), function(e) {
    e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED";
}(m || (exports.FieldDescriptorProto_Label = m = {})), s.proto2.util.setEnumType(m, "google.protobuf.FieldDescriptorProto.Label", [
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
class C extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new C).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new C).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new C).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(C, e, a);
    }
}
exports.OneofDescriptorProto = C, C.runtime = s.proto2, C.typeName = "google.protobuf.OneofDescriptorProto", C.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "options",
            kind: "message",
            T: x,
            opt: !0
        }
    ]);
class b extends o.Message {
    constructor(e){
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new b).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new b).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new b).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(b, e, a);
    }
}
exports.EnumDescriptorProto = b, b.runtime = s.proto2, b.typeName = "google.protobuf.EnumDescriptorProto", b.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: P,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: V,
            opt: !0
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: U,
            repeated: !0
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
class U extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new U).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new U).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new U).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(U, e, a);
    }
}
exports.EnumDescriptorProto_EnumReservedRange = U, U.runtime = s.proto2, U.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", U.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]);
class P extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new P).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new P).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new P).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(P, e, a);
    }
}
exports.EnumValueDescriptorProto = P, P.runtime = s.proto2, P.typeName = "google.protobuf.EnumValueDescriptorProto", P.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: K,
            opt: !0
        }
    ]);
class D extends o.Message {
    constructor(e){
        super(), this.method = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new D).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new D).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new D).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(D, e, a);
    }
}
exports.ServiceDescriptorProto = D, D.runtime = s.proto2, D.typeName = "google.protobuf.ServiceDescriptorProto", D.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "method",
            kind: "message",
            T: L,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Y,
            opt: !0
        }
    ]);
class L extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new L).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new L).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new L).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(L, e, a);
    }
}
exports.MethodDescriptorProto = L, L.runtime = s.proto2, L.typeName = "google.protobuf.MethodDescriptorProto", L.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "input_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "output_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: j,
            opt: !0
        },
        {
            no: 5,
            name: "client_streaming",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 6,
            name: "server_streaming",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        }
    ]);
class G extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new G).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new G).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new G).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(G, e, a);
    }
}
exports.FileOptions = G, G.runtime = s.proto2, G.typeName = "google.protobuf.FileOptions", G.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "java_package",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "java_outer_classname",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "java_multiple_files",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 20,
            name: "java_generate_equals_and_hash",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "java_string_check_utf8",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 9,
            name: "optimize_for",
            kind: "enum",
            T: s.proto2.getEnumType(l),
            opt: !0,
            default: l.SPEED
        },
        {
            no: 11,
            name: "go_package",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "cc_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 17,
            name: "java_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 18,
            name: "py_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 23,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 31,
            name: "cc_enable_arenas",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !0
        },
        {
            no: 36,
            name: "objc_class_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 37,
            name: "csharp_namespace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 39,
            name: "swift_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 40,
            name: "php_class_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 41,
            name: "php_namespace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 44,
            name: "php_metadata_namespace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 45,
            name: "ruby_package",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]), function(e) {
    e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME";
}(l || (exports.FileOptions_OptimizeMode = l = {})), s.proto2.util.setEnumType(l, "google.protobuf.FileOptions.OptimizeMode", [
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
class w extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new w).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new w).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new w).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(w, e, a);
    }
}
exports.MessageOptions = w, w.runtime = s.proto2, w.typeName = "google.protobuf.MessageOptions", w.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "message_set_wire_format",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 2,
            name: "no_standard_descriptor_accessor",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 7,
            name: "map_entry",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]);
class F extends o.Message {
    constructor(e){
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new F).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new F).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new F).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(F, e, a);
    }
}
exports.FieldOptions = F, F.runtime = s.proto2, F.typeName = "google.protobuf.FieldOptions", F.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: s.proto2.getEnumType(d),
            opt: !0,
            default: d.STRING
        },
        {
            no: 2,
            name: "packed",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "jstype",
            kind: "enum",
            T: s.proto2.getEnumType(c),
            opt: !0,
            default: c.JS_NORMAL
        },
        {
            no: 5,
            name: "lazy",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 15,
            name: "unverified_lazy",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 10,
            name: "weak",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 16,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 17,
            name: "retention",
            kind: "enum",
            T: s.proto2.getEnumType(T),
            opt: !0
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: s.proto2.getEnumType(p),
            repeated: !0
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: B,
            repeated: !0
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: q,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]), function(e) {
    e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE";
}(d || (exports.FieldOptions_CType = d = {})), s.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.CType", [
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
]), function(e) {
    e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER";
}(c || (exports.FieldOptions_JSType = c = {})), s.proto2.util.setEnumType(c, "google.protobuf.FieldOptions.JSType", [
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
]), function(e) {
    e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
}(T || (exports.FieldOptions_OptionRetention = T = {})), s.proto2.util.setEnumType(T, "google.protobuf.FieldOptions.OptionRetention", [
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
]), function(e) {
    e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
}(p || (exports.FieldOptions_OptionTargetType = p = {})), s.proto2.util.setEnumType(p, "google.protobuf.FieldOptions.OptionTargetType", [
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
class B extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new B).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new B).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new B).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(B, e, a);
    }
}
exports.FieldOptions_EditionDefault = B, B.runtime = s.proto2, B.typeName = "google.protobuf.FieldOptions.EditionDefault", B.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);
class q extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new q).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new q).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new q).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(q, e, a);
    }
}
exports.FieldOptions_FeatureSupport = q, q.runtime = s.proto2, q.typeName = "google.protobuf.FieldOptions.FeatureSupport", q.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        },
        {
            no: 3,
            name: "deprecation_warning",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "edition_removed",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        }
    ]);
class x extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new x).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new x).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new x).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(x, e, a);
    }
}
exports.OneofOptions = x, x.runtime = s.proto2, x.typeName = "google.protobuf.OneofOptions", x.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]);
class V extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new V).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new V).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new V).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(V, e, a);
    }
}
exports.EnumOptions = V, V.runtime = s.proto2, V.typeName = "google.protobuf.EnumOptions", V.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "allow_alias",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 6,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]);
class K extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new K).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new K).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new K).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(K, e, a);
    }
}
exports.EnumValueOptions = K, K.runtime = s.proto2, K.typeName = "google.protobuf.EnumValueOptions", K.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 2,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 3,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 4,
            name: "feature_support",
            kind: "message",
            T: q,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]);
class Y extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new Y).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new Y).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new Y).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(Y, e, a);
    }
}
exports.ServiceOptions = Y, Y.runtime = s.proto2, Y.typeName = "google.protobuf.ServiceOptions", Y.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]);
class j extends o.Message {
    constructor(e){
        super(), this.uninterpretedOption = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new j).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new j).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new j).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(j, e, a);
    }
}
exports.MethodOptions = j, j.runtime = s.proto2, j.typeName = "google.protobuf.MethodOptions", j.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1
        },
        {
            no: 34,
            name: "idempotency_level",
            kind: "enum",
            T: s.proto2.getEnumType(_),
            opt: !0,
            default: _.IDEMPOTENCY_UNKNOWN
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: W,
            repeated: !0
        }
    ]), function(e) {
    e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT";
}(_ || (exports.MethodOptions_IdempotencyLevel = _ = {})), s.proto2.util.setEnumType(_, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
class W extends o.Message {
    constructor(e){
        super(), this.name = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new W).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new W).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new W).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(W, e, a);
    }
}
exports.UninterpretedOption = W, W.runtime = s.proto2, W.typeName = "google.protobuf.UninterpretedOption", W.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: H,
            repeated: !0
        },
        {
            no: 3,
            name: "identifier_value",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "positive_int_value",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 5,
            name: "negative_int_value",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "double_value",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 7,
            name: "string_value",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 8,
            name: "aggregate_value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);
class H extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new H).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new H).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new H).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(H, e, a);
    }
}
exports.UninterpretedOption_NamePart = H, H.runtime = s.proto2, H.typeName = "google.protobuf.UninterpretedOption.NamePart", H.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name_part",
            kind: "scalar",
            T: 9,
            req: !0
        },
        {
            no: 2,
            name: "is_extension",
            kind: "scalar",
            T: 8,
            req: !0
        }
    ]);
class J extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new J).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new J).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new J).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(J, e, a);
    }
}
exports.FeatureSet = J, J.runtime = s.proto2, J.typeName = "google.protobuf.FeatureSet", J.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: s.proto2.getEnumType(k),
            opt: !0
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: s.proto2.getEnumType(u),
            opt: !0
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: s.proto2.getEnumType(g),
            opt: !0
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: s.proto2.getEnumType(E),
            opt: !0
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: s.proto2.getEnumType(v),
            opt: !0
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: s.proto2.getEnumType(y),
            opt: !0
        }
    ]), function(e) {
    e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
}(k || (exports.FeatureSet_FieldPresence = k = {})), s.proto2.util.setEnumType(k, "google.protobuf.FeatureSet.FieldPresence", [
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
]), function(e) {
    e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED";
}(u || (exports.FeatureSet_EnumType = u = {})), s.proto2.util.setEnumType(u, "google.protobuf.FeatureSet.EnumType", [
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
]), function(e) {
    e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED";
}(g || (exports.FeatureSet_RepeatedFieldEncoding = g = {})), s.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
]), function(e) {
    e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE";
}(E || (exports.FeatureSet_Utf8Validation = E = {})), s.proto2.util.setEnumType(E, "google.protobuf.FeatureSet.Utf8Validation", [
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
]), function(e) {
    e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED";
}(v || (exports.FeatureSet_MessageEncoding = v = {})), s.proto2.util.setEnumType(v, "google.protobuf.FeatureSet.MessageEncoding", [
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
]), function(e) {
    e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
}(y || (exports.FeatureSet_JsonFormat = y = {})), s.proto2.util.setEnumType(y, "google.protobuf.FeatureSet.JsonFormat", [
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
class z extends o.Message {
    constructor(e){
        super(), this.defaults = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new z).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new z).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new z).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(z, e, a);
    }
}
exports.FeatureSetDefaults = z, z.runtime = s.proto2, z.typeName = "google.protobuf.FeatureSetDefaults", z.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: X,
            repeated: !0
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        }
    ]);
class X extends o.Message {
    constructor(e){
        super(), s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new X).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new X).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new X).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(X, e, a);
    }
}
exports.FeatureSetDefaults_FeatureSetEditionDefault = X, X.runtime = s.proto2, X.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", X.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: s.proto2.getEnumType(r),
            opt: !0
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: J,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: J,
            opt: !0
        }
    ]);
class $ extends o.Message {
    constructor(e){
        super(), this.location = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new $).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new $).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new $).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals($, e, a);
    }
}
exports.SourceCodeInfo = $, $.runtime = s.proto2, $.typeName = "google.protobuf.SourceCodeInfo", $.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: Q,
            repeated: !0
        }
    ]);
class Q extends o.Message {
    constructor(e){
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new Q).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new Q).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new Q).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(Q, e, a);
    }
}
exports.SourceCodeInfo_Location = Q, Q.runtime = s.proto2, Q.typeName = "google.protobuf.SourceCodeInfo.Location", Q.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5,
            repeated: !0,
            packed: !0
        },
        {
            no: 2,
            name: "span",
            kind: "scalar",
            T: 5,
            repeated: !0,
            packed: !0
        },
        {
            no: 3,
            name: "leading_comments",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "trailing_comments",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "leading_detached_comments",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
class Z extends o.Message {
    constructor(e){
        super(), this.annotation = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new Z).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new Z).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new Z).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(Z, e, a);
    }
}
exports.GeneratedCodeInfo = Z, Z.runtime = s.proto2, Z.typeName = "google.protobuf.GeneratedCodeInfo", Z.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: ee,
            repeated: !0
        }
    ]);
class ee extends o.Message {
    constructor(e){
        super(), this.path = [], s.proto2.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new ee).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new ee).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new ee).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto2.util.equals(ee, e, a);
    }
}
exports.GeneratedCodeInfo_Annotation = ee, ee.runtime = s.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = s.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5,
            repeated: !0,
            packed: !0
        },
        {
            no: 2,
            name: "source_file",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "begin",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "end",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "semantic",
            kind: "enum",
            T: s.proto2.getEnumType(S),
            opt: !0
        }
    ]), function(e) {
    e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS";
}(S || (exports.GeneratedCodeInfo_Annotation_Semantic = S = {})), s.proto2.util.setEnumType(S, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
