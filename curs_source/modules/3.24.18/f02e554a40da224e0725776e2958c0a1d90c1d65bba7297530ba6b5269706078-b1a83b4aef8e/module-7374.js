"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GeneratedCodeInfo_Annotation_Semantic = exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.FeatureSetDefaults_FeatureSetEditionDefault = exports.FeatureSetDefaults = exports.FeatureSet_JsonFormat = exports.FeatureSet_MessageEncoding = exports.FeatureSet_Utf8Validation = exports.FeatureSet_RepeatedFieldEncoding = exports.FeatureSet_EnumType = exports.FeatureSet_FieldPresence = exports.FeatureSet = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions_IdempotencyLevel = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions_FeatureSupport = exports.FieldOptions_EditionDefault = exports.FieldOptions_OptionTargetType = exports.FieldOptions_OptionRetention = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FieldOptions = exports.MessageOptions = exports.FileOptions_OptimizeMode = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = exports.FieldDescriptorProto = exports.ExtensionRangeOptions_Declaration = exports.ExtensionRangeOptions_VerificationState = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.Edition = void 0;
const n = require("./module-3672.js"), s = require("./module-4193.js");
var i, o, a, u, c, l, m, d, f, p, h, g, A, _, y, w, S;
!function(t) {
    t[t.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t[t.EDITION_LEGACY = 900] = "EDITION_LEGACY", t[t.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t[t.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t[t.EDITION_2023 = 1e3] = "EDITION_2023", t[t.EDITION_2024 = 1001] = "EDITION_2024", t[t.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t[t.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t[t.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t[t.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t[t.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t[t.EDITION_MAX = 2147483647] = "EDITION_MAX";
}(i || (exports.Edition = i = {})), n.proto2.util.setEnumType(i, "google.protobuf.Edition", [
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
class J extends s.Message {
    constructor(t){
        super(), this.file = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(J, t, e);
    }
}
exports.FileDescriptorSet = J, J.runtime = n.proto2, J.typeName = "google.protobuf.FileDescriptorSet", J.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: B,
            repeated: !0
        }
    ]);
class B extends s.Message {
    constructor(t){
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(B, t, e);
    }
}
exports.FileDescriptorProto = B, B.runtime = n.proto2, B.typeName = "google.protobuf.FileDescriptorProto", B.fields = n.proto2.util.newFieldList(()=>[
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
            T: E,
            repeated: !0
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: R,
            repeated: !0
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: x,
            repeated: !0
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: v,
            repeated: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: D,
            opt: !0
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: j,
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
            T: n.proto2.getEnumType(i),
            opt: !0
        }
    ]);
class E extends s.Message {
    constructor(t){
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(E, t, e);
    }
}
exports.DescriptorProto = E, E.runtime = n.proto2, E.typeName = "google.protobuf.DescriptorProto", E.fields = n.proto2.util.newFieldList(()=>[
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
            T: v,
            repeated: !0
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: v,
            repeated: !0
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: E,
            repeated: !0
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: R,
            repeated: !0
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: I,
            repeated: !0
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: q,
            repeated: !0
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: U,
            opt: !0
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: C,
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
class I extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(I, t, e);
    }
}
exports.DescriptorProto_ExtensionRange = I, I.runtime = n.proto2, I.typeName = "google.protobuf.DescriptorProto.ExtensionRange", I.fields = n.proto2.util.newFieldList(()=>[
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
            T: b,
            opt: !0
        }
    ]);
class C extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(C, t, e);
    }
}
exports.DescriptorProto_ReservedRange = C, C.runtime = n.proto2, C.typeName = "google.protobuf.DescriptorProto.ReservedRange", C.fields = n.proto2.util.newFieldList(()=>[
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
class b extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], this.declaration = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(b, t, e);
    }
}
exports.ExtensionRangeOptions = b, b.runtime = n.proto2, b.typeName = "google.protobuf.ExtensionRangeOptions", b.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: k,
            repeated: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: z,
            opt: !0
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: n.proto2.getEnumType(o),
            opt: !0,
            default: o.UNVERIFIED
        }
    ]), function(t) {
    t[t.DECLARATION = 0] = "DECLARATION", t[t.UNVERIFIED = 1] = "UNVERIFIED";
}(o || (exports.ExtensionRangeOptions_VerificationState = o = {})), n.proto2.util.setEnumType(o, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
class k extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(k, t, e);
    }
}
exports.ExtensionRangeOptions_Declaration = k, k.runtime = n.proto2, k.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", k.fields = n.proto2.util.newFieldList(()=>[
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
class v extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(v, t, e);
    }
}
exports.FieldDescriptorProto = v, v.runtime = n.proto2, v.typeName = "google.protobuf.FieldDescriptorProto", v.fields = n.proto2.util.newFieldList(()=>[
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
            T: n.proto2.getEnumType(u),
            opt: !0
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: n.proto2.getEnumType(a),
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
            T: Q,
            opt: !0
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), function(t) {
    t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.GROUP = 10] = "GROUP", t[t.MESSAGE = 11] = "MESSAGE", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.ENUM = 14] = "ENUM", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64";
}(a || (exports.FieldDescriptorProto_Type = a = {})), n.proto2.util.setEnumType(a, "google.protobuf.FieldDescriptorProto.Type", [
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
]), function(t) {
    t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REPEATED = 3] = "REPEATED", t[t.REQUIRED = 2] = "REQUIRED";
}(u || (exports.FieldDescriptorProto_Label = u = {})), n.proto2.util.setEnumType(u, "google.protobuf.FieldDescriptorProto.Label", [
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
class q extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(q, t, e);
    }
}
exports.OneofDescriptorProto = q, q.runtime = n.proto2, q.typeName = "google.protobuf.OneofDescriptorProto", q.fields = n.proto2.util.newFieldList(()=>[
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
            T: F,
            opt: !0
        }
    ]);
class R extends s.Message {
    constructor(t){
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(R, t, e);
    }
}
exports.EnumDescriptorProto = R, R.runtime = n.proto2, R.typeName = "google.protobuf.EnumDescriptorProto", R.fields = n.proto2.util.newFieldList(()=>[
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
            T,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: L,
            opt: !0
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: P,
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
class P extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new P).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new P).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new P).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(P, t, e);
    }
}
exports.EnumDescriptorProto_EnumReservedRange = P, P.runtime = n.proto2, P.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", P.fields = n.proto2.util.newFieldList(()=>[
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
class T extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(T, t, e);
    }
}
exports.EnumValueDescriptorProto = T, T.runtime = n.proto2, T.typeName = "google.protobuf.EnumValueDescriptorProto", T.fields = n.proto2.util.newFieldList(()=>[
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
            T: $,
            opt: !0
        }
    ]);
class x extends s.Message {
    constructor(t){
        super(), this.method = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(x, t, e);
    }
}
exports.ServiceDescriptorProto = x, x.runtime = n.proto2, x.typeName = "google.protobuf.ServiceDescriptorProto", x.fields = n.proto2.util.newFieldList(()=>[
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
            T: N,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: G,
            opt: !0
        }
    ]);
class N extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new N).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new N).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new N).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(N, t, e);
    }
}
exports.MethodDescriptorProto = N, N.runtime = n.proto2, N.typeName = "google.protobuf.MethodDescriptorProto", N.fields = n.proto2.util.newFieldList(()=>[
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
            T: H,
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
class D extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new D).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new D).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new D).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(D, t, e);
    }
}
exports.FileOptions = D, D.runtime = n.proto2, D.typeName = "google.protobuf.FileOptions", D.fields = n.proto2.util.newFieldList(()=>[
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
            T: n.proto2.getEnumType(c),
            opt: !0,
            default: c.SPEED
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
            T: z,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]), function(t) {
    t[t.SPEED = 1] = "SPEED", t[t.CODE_SIZE = 2] = "CODE_SIZE", t[t.LITE_RUNTIME = 3] = "LITE_RUNTIME";
}(c || (exports.FileOptions_OptimizeMode = c = {})), n.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [
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
class U extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new U).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new U).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new U).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(U, t, e);
    }
}
exports.MessageOptions = U, U.runtime = n.proto2, U.typeName = "google.protobuf.MessageOptions", U.fields = n.proto2.util.newFieldList(()=>[
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
            T: z,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]);
class Q extends s.Message {
    constructor(t){
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(Q, t, e);
    }
}
exports.FieldOptions = Q, Q.runtime = n.proto2, Q.typeName = "google.protobuf.FieldOptions", Q.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: n.proto2.getEnumType(l),
            opt: !0,
            default: l.STRING
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
            T: n.proto2.getEnumType(m),
            opt: !0,
            default: m.JS_NORMAL
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
            T: n.proto2.getEnumType(d),
            opt: !0
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: n.proto2.getEnumType(f),
            repeated: !0
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: M,
            repeated: !0
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: z,
            opt: !0
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: O,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]), function(t) {
    t[t.STRING = 0] = "STRING", t[t.CORD = 1] = "CORD", t[t.STRING_PIECE = 2] = "STRING_PIECE";
}(l || (exports.FieldOptions_CType = l = {})), n.proto2.util.setEnumType(l, "google.protobuf.FieldOptions.CType", [
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
]), function(t) {
    t[t.JS_NORMAL = 0] = "JS_NORMAL", t[t.JS_STRING = 1] = "JS_STRING", t[t.JS_NUMBER = 2] = "JS_NUMBER";
}(m || (exports.FieldOptions_JSType = m = {})), n.proto2.util.setEnumType(m, "google.protobuf.FieldOptions.JSType", [
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
]), function(t) {
    t[t.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t[t.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t[t.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
}(d || (exports.FieldOptions_OptionRetention = d = {})), n.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.OptionRetention", [
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
]), function(t) {
    t[t.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t[t.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t[t.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t[t.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t[t.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t[t.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t[t.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t[t.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t[t.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t[t.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
}(f || (exports.FieldOptions_OptionTargetType = f = {})), n.proto2.util.setEnumType(f, "google.protobuf.FieldOptions.OptionTargetType", [
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
class M extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new M).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new M).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new M).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(M, t, e);
    }
}
exports.FieldOptions_EditionDefault = M, M.runtime = n.proto2, M.typeName = "google.protobuf.FieldOptions.EditionDefault", M.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: n.proto2.getEnumType(i),
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
class O extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(O, t, e);
    }
}
exports.FieldOptions_FeatureSupport = O, O.runtime = n.proto2, O.typeName = "google.protobuf.FieldOptions.FeatureSupport", O.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: n.proto2.getEnumType(i),
            opt: !0
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: n.proto2.getEnumType(i),
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
            T: n.proto2.getEnumType(i),
            opt: !0
        }
    ]);
class F extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(F, t, e);
    }
}
exports.OneofOptions = F, F.runtime = n.proto2, F.typeName = "google.protobuf.OneofOptions", F.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: z,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]);
class L extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new L).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new L).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new L).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(L, t, e);
    }
}
exports.EnumOptions = L, L.runtime = n.proto2, L.typeName = "google.protobuf.EnumOptions", L.fields = n.proto2.util.newFieldList(()=>[
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
            T: z,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]);
class $ extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals($, t, e);
    }
}
exports.EnumValueOptions = $, $.runtime = n.proto2, $.typeName = "google.protobuf.EnumValueOptions", $.fields = n.proto2.util.newFieldList(()=>[
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
            T: z,
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
            T: O,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]);
class G extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new G).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new G).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new G).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(G, t, e);
    }
}
exports.ServiceOptions = G, G.runtime = n.proto2, G.typeName = "google.protobuf.ServiceOptions", G.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: z,
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
            T: K,
            repeated: !0
        }
    ]);
class H extends s.Message {
    constructor(t){
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new H).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new H).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new H).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(H, t, e);
    }
}
exports.MethodOptions = H, H.runtime = n.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = n.proto2.util.newFieldList(()=>[
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
            T: n.proto2.getEnumType(p),
            opt: !0,
            default: p.IDEMPOTENCY_UNKNOWN
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: z,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: K,
            repeated: !0
        }
    ]), function(t) {
    t[t.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t[t.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t[t.IDEMPOTENT = 2] = "IDEMPOTENT";
}(p || (exports.MethodOptions_IdempotencyLevel = p = {})), n.proto2.util.setEnumType(p, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
class K extends s.Message {
    constructor(t){
        super(), this.name = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(K, t, e);
    }
}
exports.UninterpretedOption = K, K.runtime = n.proto2, K.typeName = "google.protobuf.UninterpretedOption", K.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: V,
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
class V extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(V, t, e);
    }
}
exports.UninterpretedOption_NamePart = V, V.runtime = n.proto2, V.typeName = "google.protobuf.UninterpretedOption.NamePart", V.fields = n.proto2.util.newFieldList(()=>[
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
class z extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(z, t, e);
    }
}
exports.FeatureSet = z, z.runtime = n.proto2, z.typeName = "google.protobuf.FeatureSet", z.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: n.proto2.getEnumType(h),
            opt: !0
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: n.proto2.getEnumType(g),
            opt: !0
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: n.proto2.getEnumType(A),
            opt: !0
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: n.proto2.getEnumType(_),
            opt: !0
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: n.proto2.getEnumType(y),
            opt: !0
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: n.proto2.getEnumType(w),
            opt: !0
        }
    ]), function(t) {
    t[t.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t[t.EXPLICIT = 1] = "EXPLICIT", t[t.IMPLICIT = 2] = "IMPLICIT", t[t.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
}(h || (exports.FeatureSet_FieldPresence = h = {})), n.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.FieldPresence", [
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
]), function(t) {
    t[t.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 2] = "CLOSED";
}(g || (exports.FeatureSet_EnumType = g = {})), n.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.EnumType", [
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
]), function(t) {
    t[t.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t[t.PACKED = 1] = "PACKED", t[t.EXPANDED = 2] = "EXPANDED";
}(A || (exports.FeatureSet_RepeatedFieldEncoding = A = {})), n.proto2.util.setEnumType(A, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
]), function(t) {
    t[t.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t[t.VERIFY = 2] = "VERIFY", t[t.NONE = 3] = "NONE";
}(_ || (exports.FeatureSet_Utf8Validation = _ = {})), n.proto2.util.setEnumType(_, "google.protobuf.FeatureSet.Utf8Validation", [
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
]), function(t) {
    t[t.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t[t.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t[t.DELIMITED = 2] = "DELIMITED";
}(y || (exports.FeatureSet_MessageEncoding = y = {})), n.proto2.util.setEnumType(y, "google.protobuf.FeatureSet.MessageEncoding", [
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
]), function(t) {
    t[t.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t[t.ALLOW = 1] = "ALLOW", t[t.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
}(w || (exports.FeatureSet_JsonFormat = w = {})), n.proto2.util.setEnumType(w, "google.protobuf.FeatureSet.JsonFormat", [
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
class W extends s.Message {
    constructor(t){
        super(), this.defaults = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(W, t, e);
    }
}
exports.FeatureSetDefaults = W, W.runtime = n.proto2, W.typeName = "google.protobuf.FeatureSetDefaults", W.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: Y,
            repeated: !0
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: n.proto2.getEnumType(i),
            opt: !0
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: n.proto2.getEnumType(i),
            opt: !0
        }
    ]);
class Y extends s.Message {
    constructor(t){
        super(), n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(Y, t, e);
    }
}
exports.FeatureSetDefaults_FeatureSetEditionDefault = Y, Y.runtime = n.proto2, Y.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Y.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: n.proto2.getEnumType(i),
            opt: !0
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: z,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: z,
            opt: !0
        }
    ]);
class j extends s.Message {
    constructor(t){
        super(), this.location = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(j, t, e);
    }
}
exports.SourceCodeInfo = j, j.runtime = n.proto2, j.typeName = "google.protobuf.SourceCodeInfo", j.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: X,
            repeated: !0
        }
    ]);
class X extends s.Message {
    constructor(t){
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(X, t, e);
    }
}
exports.SourceCodeInfo_Location = X, X.runtime = n.proto2, X.typeName = "google.protobuf.SourceCodeInfo.Location", X.fields = n.proto2.util.newFieldList(()=>[
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
class Z extends s.Message {
    constructor(t){
        super(), this.annotation = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(Z, t, e);
    }
}
exports.GeneratedCodeInfo = Z, Z.runtime = n.proto2, Z.typeName = "google.protobuf.GeneratedCodeInfo", Z.fields = n.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: tt,
            repeated: !0
        }
    ]);
class tt extends s.Message {
    constructor(t){
        super(), this.path = [], n.proto2.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto2.util.equals(tt, t, e);
    }
}
exports.GeneratedCodeInfo_Annotation = tt, tt.runtime = n.proto2, tt.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", tt.fields = n.proto2.util.newFieldList(()=>[
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
            T: n.proto2.getEnumType(S),
            opt: !0
        }
    ]), function(t) {
    t[t.NONE = 0] = "NONE", t[t.SET = 1] = "SET", t[t.ALIAS = 2] = "ALIAS";
}(S || (exports.GeneratedCodeInfo_Annotation_Semantic = S = {})), n.proto2.util.setEnumType(S, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
