import { IJ, yg } from "./message.js";
import { Co, vSi } from "./proto2.js";
import { x } from "./tslib.es6.js";
var qwe, _Si, A_n, bSi, m3t, DGc, R_n, MGc, D_n, PGc, M_n, LGc, ySi, P_n, NGc, L_n, SSi, b5, kSi, N_n, OGc, O_n, vss, F_n, FGc, B_n, BGc, U_n, UGc, $_n, $Gc, H_n, HGc, wSi, W_n, WGc, G_n, GGc, CSi, TSi, ESi, xSi, V_n, VGc, j_n, _ss, q_n, jGc, z_n, qGc, K_n, zGc, Y_n, KGc, X_n, YGc, ISi, Z_n, yRe, Q_n, XGc, J_n, pfe, ASi, RSi, DSi, MSi, PSi, LSi, NSi, ebn, ZGc, tbn, QGc, nbn, JGc, ibn, eVc, rbn, tVc, OSi;
export { $Gc, $_n, ASi, A_n, BGc, B_n, CSi, DGc, DSi, D_n, ESi, FGc, F_n, GGc, G_n, HGc, H_n, ISi, JGc, J_n, KGc, K_n, LGc, LSi, L_n, MGc, MSi, M_n, NGc, NSi, N_n, OGc, OSi, O_n, PGc, PSi, P_n, QGc, Q_n, RSi, R_n, SSi, TSi, UGc, U_n, VGc, V_n, WGc, W_n, XGc, X_n, YGc, Y_n, ZGc, Z_n, _Si, _ss, b5, bSi, eVc, ebn, ibn, jGc, j_n, kSi, m3t, nbn, pfe, qGc, q_n, qwe, rbn, tVc, tbn, vss, wSi, xSi, yRe, ySi, zGc, z_n };
var __wakaru_sbn_initialized = false;
export function sbn() {
if (__wakaru_sbn_initialized) return;
__wakaru_sbn_initialized = true;
"use strict";
x(), vSi(), IJ(), qwe = ((e)=>(e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(qwe || {}), Co.util.setEnumType(qwe, "google.protobuf.Edition", [
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
]), _Si = class XXn extends yg {
    constructor(t){
        super(), this.file = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new XXn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new XXn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new XXn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(XXn, t, n);
    }
}, _Si.runtime = Co, _Si.typeName = "google.protobuf.FileDescriptorSet", _Si.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: bSi,
            repeated: !0
        }
    ]), A_n = class ZXn extends yg {
    constructor(t){
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new ZXn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new ZXn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new ZXn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(ZXn, t, n);
    }
}, A_n.runtime = Co, A_n.typeName = "google.protobuf.FileDescriptorProto", A_n.fields = Co.util.newFieldList(()=>[
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
            T: DGc,
            repeated: !0
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: vss,
            repeated: !0
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: UGc,
            repeated: !0
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: SSi,
            repeated: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: HGc,
            opt: !0
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: QGc,
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
            T: Co.getEnumType(qwe),
            opt: !0
        }
    ]), bSi = A_n, m3t = class QXn extends yg {
    constructor(t){
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new QXn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new QXn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new QXn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(QXn, t, n);
    }
}, m3t.runtime = Co, m3t.typeName = "google.protobuf.DescriptorProto", m3t.fields = Co.util.newFieldList(()=>[
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
            T: SSi,
            repeated: !0
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: SSi,
            repeated: !0
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: m3t,
            repeated: !0
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: vss,
            repeated: !0
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: MGc,
            repeated: !0
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: OGc,
            repeated: !0
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: WGc,
            opt: !0
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: PGc,
            repeated: !0
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), DGc = m3t, R_n = class JXn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new JXn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new JXn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new JXn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(JXn, t, n);
    }
}, R_n.runtime = Co, R_n.typeName = "google.protobuf.DescriptorProto.ExtensionRange", R_n.fields = Co.util.newFieldList(()=>[
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
            T: LGc,
            opt: !0
        }
    ]), MGc = R_n, D_n = class eZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new eZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new eZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new eZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(eZn, t, n);
    }
}, D_n.runtime = Co, D_n.typeName = "google.protobuf.DescriptorProto.ReservedRange", D_n.fields = Co.util.newFieldList(()=>[
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
    ]), PGc = D_n, M_n = class tZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], this.declaration = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new tZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new tZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new tZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(tZn, t, n);
    }
}, M_n.runtime = Co, M_n.typeName = "google.protobuf.ExtensionRangeOptions", M_n.fields = Co.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: NGc,
            repeated: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: pfe,
            opt: !0
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: Co.getEnumType(ySi),
            opt: !0,
            default: 1
        }
    ]), LGc = M_n, ySi = ((e)=>(e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(ySi || {}), Co.util.setEnumType(ySi, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]), P_n = class nZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new nZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new nZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new nZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(nZn, t, n);
    }
}, P_n.runtime = Co, P_n.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", P_n.fields = Co.util.newFieldList(()=>[
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
    ]), NGc = P_n, L_n = class iZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new iZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new iZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new iZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(iZn, t, n);
    }
}, L_n.runtime = Co, L_n.typeName = "google.protobuf.FieldDescriptorProto", L_n.fields = Co.util.newFieldList(()=>[
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
            T: Co.getEnumType(kSi),
            opt: !0
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: Co.getEnumType(b5),
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
            T: GGc,
            opt: !0
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), SSi = L_n, b5 = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(b5 || {}), Co.util.setEnumType(b5, "google.protobuf.FieldDescriptorProto.Type", [
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
]), kSi = ((e)=>(e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(kSi || {}), Co.util.setEnumType(kSi, "google.protobuf.FieldDescriptorProto.Label", [
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
]), N_n = class rZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new rZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new rZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new rZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(rZn, t, n);
    }
}, N_n.runtime = Co, N_n.typeName = "google.protobuf.OneofDescriptorProto", N_n.fields = Co.util.newFieldList(()=>[
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
            T: jGc,
            opt: !0
        }
    ]), OGc = N_n, O_n = class sZn extends yg {
    constructor(t){
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new sZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new sZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new sZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(sZn, t, n);
    }
}, O_n.runtime = Co, O_n.typeName = "google.protobuf.EnumDescriptorProto", O_n.fields = Co.util.newFieldList(()=>[
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
            T: BGc,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: qGc,
            opt: !0
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: FGc,
            repeated: !0
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), vss = O_n, F_n = class oZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new oZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new oZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new oZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(oZn, t, n);
    }
}, F_n.runtime = Co, F_n.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", F_n.fields = Co.util.newFieldList(()=>[
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
    ]), FGc = F_n, B_n = class aZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new aZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new aZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new aZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(aZn, t, n);
    }
}, B_n.runtime = Co, B_n.typeName = "google.protobuf.EnumValueDescriptorProto", B_n.fields = Co.util.newFieldList(()=>[
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
            T: zGc,
            opt: !0
        }
    ]), BGc = B_n, U_n = class cZn extends yg {
    constructor(t){
        super(), this.method = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new cZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new cZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new cZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(cZn, t, n);
    }
}, U_n.runtime = Co, U_n.typeName = "google.protobuf.ServiceDescriptorProto", U_n.fields = Co.util.newFieldList(()=>[
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
            T: $Gc,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: KGc,
            opt: !0
        }
    ]), UGc = U_n, $_n = class lZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new lZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new lZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new lZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(lZn, t, n);
    }
}, $_n.runtime = Co, $_n.typeName = "google.protobuf.MethodDescriptorProto", $_n.fields = Co.util.newFieldList(()=>[
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
            T: YGc,
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
    ]), $Gc = $_n, H_n = class uZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new uZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new uZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new uZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(uZn, t, n);
    }
}, H_n.runtime = Co, H_n.typeName = "google.protobuf.FileOptions", H_n.fields = Co.util.newFieldList(()=>[
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
            T: Co.getEnumType(wSi),
            opt: !0,
            default: 1
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
            T: pfe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), HGc = H_n, wSi = ((e)=>(e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(wSi || {}), Co.util.setEnumType(wSi, "google.protobuf.FileOptions.OptimizeMode", [
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
]), W_n = class dZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new dZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new dZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new dZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(dZn, t, n);
    }
}, W_n.runtime = Co, W_n.typeName = "google.protobuf.MessageOptions", W_n.fields = Co.util.newFieldList(()=>[
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
            T: pfe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), WGc = W_n, G_n = class hZn extends yg {
    constructor(t){
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new hZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new hZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new hZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(hZn, t, n);
    }
}, G_n.runtime = Co, G_n.typeName = "google.protobuf.FieldOptions", G_n.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: Co.getEnumType(CSi),
            opt: !0,
            default: 0
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
            T: Co.getEnumType(TSi),
            opt: !0,
            default: 0
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
            T: Co.getEnumType(ESi),
            opt: !0
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: Co.getEnumType(xSi),
            repeated: !0
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: VGc,
            repeated: !0
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: pfe,
            opt: !0
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: _ss,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), GGc = G_n, CSi = ((e)=>(e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(CSi || {}), Co.util.setEnumType(CSi, "google.protobuf.FieldOptions.CType", [
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
]), TSi = ((e)=>(e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(TSi || {}), Co.util.setEnumType(TSi, "google.protobuf.FieldOptions.JSType", [
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
]), ESi = ((e)=>(e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(ESi || {}), Co.util.setEnumType(ESi, "google.protobuf.FieldOptions.OptionRetention", [
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
]), xSi = ((e)=>(e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(xSi || {}), Co.util.setEnumType(xSi, "google.protobuf.FieldOptions.OptionTargetType", [
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
]), V_n = class pZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new pZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new pZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new pZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(pZn, t, n);
    }
}, V_n.runtime = Co, V_n.typeName = "google.protobuf.FieldOptions.EditionDefault", V_n.fields = Co.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: Co.getEnumType(qwe),
            opt: !0
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VGc = V_n, j_n = class mZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new mZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new mZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new mZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(mZn, t, n);
    }
}, j_n.runtime = Co, j_n.typeName = "google.protobuf.FieldOptions.FeatureSupport", j_n.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: Co.getEnumType(qwe),
            opt: !0
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: Co.getEnumType(qwe),
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
            T: Co.getEnumType(qwe),
            opt: !0
        }
    ]), _ss = j_n, q_n = class gZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new gZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new gZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new gZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(gZn, t, n);
    }
}, q_n.runtime = Co, q_n.typeName = "google.protobuf.OneofOptions", q_n.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: pfe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), jGc = q_n, z_n = class fZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new fZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new fZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new fZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(fZn, t, n);
    }
}, z_n.runtime = Co, z_n.typeName = "google.protobuf.EnumOptions", z_n.fields = Co.util.newFieldList(()=>[
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
            T: pfe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), qGc = z_n, K_n = class vZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new vZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new vZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new vZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(vZn, t, n);
    }
}, K_n.runtime = Co, K_n.typeName = "google.protobuf.EnumValueOptions", K_n.fields = Co.util.newFieldList(()=>[
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
            T: pfe,
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
            T: _ss,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), zGc = K_n, Y_n = class _Zn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new _Zn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new _Zn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new _Zn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(_Zn, t, n);
    }
}, Y_n.runtime = Co, Y_n.typeName = "google.protobuf.ServiceOptions", Y_n.fields = Co.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: pfe,
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
            T: yRe,
            repeated: !0
        }
    ]), KGc = Y_n, X_n = class bZn extends yg {
    constructor(t){
        super(), this.uninterpretedOption = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new bZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new bZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new bZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(bZn, t, n);
    }
}, X_n.runtime = Co, X_n.typeName = "google.protobuf.MethodOptions", X_n.fields = Co.util.newFieldList(()=>[
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
            T: Co.getEnumType(ISi),
            opt: !0,
            default: 0
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: pfe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: yRe,
            repeated: !0
        }
    ]), YGc = X_n, ISi = ((e)=>(e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(ISi || {}), Co.util.setEnumType(ISi, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
]), Z_n = class yZn extends yg {
    constructor(t){
        super(), this.name = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new yZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new yZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new yZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(yZn, t, n);
    }
}, Z_n.runtime = Co, Z_n.typeName = "google.protobuf.UninterpretedOption", Z_n.fields = Co.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: XGc,
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
    ]), yRe = Z_n, Q_n = class SZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new SZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new SZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new SZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(SZn, t, n);
    }
}, Q_n.runtime = Co, Q_n.typeName = "google.protobuf.UninterpretedOption.NamePart", Q_n.fields = Co.util.newFieldList(()=>[
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
    ]), XGc = Q_n, J_n = class kZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new kZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new kZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new kZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(kZn, t, n);
    }
}, J_n.runtime = Co, J_n.typeName = "google.protobuf.FeatureSet", J_n.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: Co.getEnumType(ASi),
            opt: !0
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: Co.getEnumType(RSi),
            opt: !0
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: Co.getEnumType(DSi),
            opt: !0
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: Co.getEnumType(MSi),
            opt: !0
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: Co.getEnumType(PSi),
            opt: !0
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: Co.getEnumType(LSi),
            opt: !0
        }
    ]), pfe = J_n, ASi = ((e)=>(e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(ASi || {}), Co.util.setEnumType(ASi, "google.protobuf.FeatureSet.FieldPresence", [
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
]), RSi = ((e)=>(e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(RSi || {}), Co.util.setEnumType(RSi, "google.protobuf.FeatureSet.EnumType", [
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
]), DSi = ((e)=>(e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(DSi || {}), Co.util.setEnumType(DSi, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
]), MSi = ((e)=>(e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(MSi || {}), Co.util.setEnumType(MSi, "google.protobuf.FeatureSet.Utf8Validation", [
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
]), PSi = ((e)=>(e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(PSi || {}), Co.util.setEnumType(PSi, "google.protobuf.FeatureSet.MessageEncoding", [
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
]), LSi = ((e)=>(e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(LSi || {}), Co.util.setEnumType(LSi, "google.protobuf.FeatureSet.JsonFormat", [
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
]), NSi = class wZn extends yg {
    constructor(t){
        super(), this.defaults = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new wZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new wZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new wZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(wZn, t, n);
    }
}, NSi.runtime = Co, NSi.typeName = "google.protobuf.FeatureSetDefaults", NSi.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: ZGc,
            repeated: !0
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: Co.getEnumType(qwe),
            opt: !0
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: Co.getEnumType(qwe),
            opt: !0
        }
    ]), ebn = class CZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new CZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new CZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new CZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(CZn, t, n);
    }
}, ebn.runtime = Co, ebn.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", ebn.fields = Co.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: Co.getEnumType(qwe),
            opt: !0
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: pfe,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: pfe,
            opt: !0
        }
    ]), ZGc = ebn, tbn = class TZn extends yg {
    constructor(t){
        super(), this.location = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new TZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new TZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new TZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(TZn, t, n);
    }
}, tbn.runtime = Co, tbn.typeName = "google.protobuf.SourceCodeInfo", tbn.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: JGc,
            repeated: !0
        }
    ]), QGc = tbn, nbn = class EZn extends yg {
    constructor(t){
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new EZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new EZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new EZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(EZn, t, n);
    }
}, nbn.runtime = Co, nbn.typeName = "google.protobuf.SourceCodeInfo.Location", nbn.fields = Co.util.newFieldList(()=>[
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
    ]), JGc = nbn, ibn = class xZn extends yg {
    constructor(t){
        super(), this.annotation = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new xZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new xZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new xZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(xZn, t, n);
    }
}, ibn.runtime = Co, ibn.typeName = "google.protobuf.GeneratedCodeInfo", ibn.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: tVc,
            repeated: !0
        }
    ]), eVc = ibn, rbn = class IZn extends yg {
    constructor(t){
        super(), this.path = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new IZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new IZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new IZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(IZn, t, n);
    }
}, rbn.runtime = Co, rbn.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", rbn.fields = Co.util.newFieldList(()=>[
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
            T: Co.getEnumType(OSi),
            opt: !0
        }
    ]), tVc = rbn, OSi = ((e)=>(e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(OSi || {}), Co.util.setEnumType(OSi, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
