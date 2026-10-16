import { $r, fe } from "./message.js";
import { P, ey } from "./proto2.js";
import { h } from "./tslib.es6.js";
var hi, ty, Ph, ny, Yd, qj, Nh, Kj, Dh, zj, Oh, Yj, ry, Lh, Jj, Uh, sy, Tn, iy, xh, Xj, Fh, BM, Wh, Qj, Bh, Zj, Gh, eH, Vh, tH, $h, nH, ay, jh, rH, Hh, sH, oy, cy, ly, dy, qh, iH, Kh, GM, zh, aH, Yh, oH, Jh, cH, Xh, lH, Qh, dH, uy, Zh, qi, eg, uH, tg, js, my, py, hy, gy, fy, _y, vy, ng, mH, rg, pH, sg, hH, ig, gH, ag, fH, Ty;
export { $h, BM, Bh, Dh, Fh, GM, Gh, Hh, Jh, Jj, Kh, Kj, Lh, Nh, Oh, Ph, Qh, Qj, Tn, Ty, Uh, Vh, Wh, Xh, Xj, Yd, Yh, Yj, Zh, Zj, _y, aH, ag, ay, cH, cy, dH, dy, eH, eg, fH, fy, gH, gy, hH, hi, hy, iH, ig, iy, jh, js, lH, ly, mH, my, nH, ng, ny, oH, oy, pH, py, qh, qi, qj, rH, rg, ry, sH, sg, sy, tH, tg, ty, uH, uy, vy, xh, zh, zj };
var __wakaru_og_initialized = false;
export function og() {
if (__wakaru_og_initialized) return;
__wakaru_og_initialized = true;
"use strict";
h(), ey(), $r(), hi = ((e)=>(e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(hi || {}), P.util.setEnumType(hi, "google.protobuf.Edition", [
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
]), ty = class d_ extends fe {
    constructor(t){
        super(), this.file = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new d_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new d_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new d_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(d_, t, n);
    }
}, ty.runtime = P, ty.typeName = "google.protobuf.FileDescriptorSet", ty.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ny,
            repeated: !0
        }
    ]), Ph = class u_ extends fe {
    constructor(t){
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new u_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new u_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new u_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(u_, t, n);
    }
}, Ph.runtime = P, Ph.typeName = "google.protobuf.FileDescriptorProto", Ph.fields = P.util.newFieldList(()=>[
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
            T: qj,
            repeated: !0
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: BM,
            repeated: !0
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: eH,
            repeated: !0
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: sy,
            repeated: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: nH,
            opt: !0
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: pH,
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
            T: P.getEnumType(hi),
            opt: !0
        }
    ]), ny = Ph, Yd = class m_ extends fe {
    constructor(t){
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new m_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new m_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new m_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(m_, t, n);
    }
}, Yd.runtime = P, Yd.typeName = "google.protobuf.DescriptorProto", Yd.fields = P.util.newFieldList(()=>[
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
            T: sy,
            repeated: !0
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: sy,
            repeated: !0
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: Yd,
            repeated: !0
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: BM,
            repeated: !0
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: Kj,
            repeated: !0
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: Xj,
            repeated: !0
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: rH,
            opt: !0
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: zj,
            repeated: !0
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qj = Yd, Nh = class p_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new p_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new p_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new p_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(p_, t, n);
    }
}, Nh.runtime = P, Nh.typeName = "google.protobuf.DescriptorProto.ExtensionRange", Nh.fields = P.util.newFieldList(()=>[
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
            T: Yj,
            opt: !0
        }
    ]), Kj = Nh, Dh = class h_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new h_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new h_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new h_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(h_, t, n);
    }
}, Dh.runtime = P, Dh.typeName = "google.protobuf.DescriptorProto.ReservedRange", Dh.fields = P.util.newFieldList(()=>[
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
    ]), zj = Dh, Oh = class g_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], this.declaration = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new g_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new g_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new g_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(g_, t, n);
    }
}, Oh.runtime = P, Oh.typeName = "google.protobuf.ExtensionRangeOptions", Oh.fields = P.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: Jj,
            repeated: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: js,
            opt: !0
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: P.getEnumType(ry),
            opt: !0,
            default: 1
        }
    ]), Yj = Oh, ry = ((e)=>(e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(ry || {}), P.util.setEnumType(ry, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]), Lh = class f_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new f_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new f_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new f_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(f_, t, n);
    }
}, Lh.runtime = P, Lh.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Lh.fields = P.util.newFieldList(()=>[
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
    ]), Jj = Lh, Uh = class __ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new __().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new __().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new __().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(__, t, n);
    }
}, Uh.runtime = P, Uh.typeName = "google.protobuf.FieldDescriptorProto", Uh.fields = P.util.newFieldList(()=>[
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
            T: P.getEnumType(iy),
            opt: !0
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: P.getEnumType(Tn),
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
            T: sH,
            opt: !0
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), sy = Uh, Tn = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(Tn || {}), P.util.setEnumType(Tn, "google.protobuf.FieldDescriptorProto.Type", [
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
]), iy = ((e)=>(e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(iy || {}), P.util.setEnumType(iy, "google.protobuf.FieldDescriptorProto.Label", [
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
]), xh = class v_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new v_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new v_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new v_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(v_, t, n);
    }
}, xh.runtime = P, xh.typeName = "google.protobuf.OneofDescriptorProto", xh.fields = P.util.newFieldList(()=>[
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
            T: aH,
            opt: !0
        }
    ]), Xj = xh, Fh = class T_ extends fe {
    constructor(t){
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new T_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new T_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new T_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(T_, t, n);
    }
}, Fh.runtime = P, Fh.typeName = "google.protobuf.EnumDescriptorProto", Fh.fields = P.util.newFieldList(()=>[
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
            T: Zj,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: oH,
            opt: !0
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: Qj,
            repeated: !0
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), BM = Fh, Wh = class k_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new k_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new k_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new k_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(k_, t, n);
    }
}, Wh.runtime = P, Wh.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Wh.fields = P.util.newFieldList(()=>[
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
    ]), Qj = Wh, Bh = class S_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new S_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new S_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new S_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(S_, t, n);
    }
}, Bh.runtime = P, Bh.typeName = "google.protobuf.EnumValueDescriptorProto", Bh.fields = P.util.newFieldList(()=>[
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
            T: cH,
            opt: !0
        }
    ]), Zj = Bh, Gh = class y_ extends fe {
    constructor(t){
        super(), this.method = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new y_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new y_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new y_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(y_, t, n);
    }
}, Gh.runtime = P, Gh.typeName = "google.protobuf.ServiceDescriptorProto", Gh.fields = P.util.newFieldList(()=>[
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
            T: tH,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: lH,
            opt: !0
        }
    ]), eH = Gh, Vh = class w_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new w_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new w_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new w_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(w_, t, n);
    }
}, Vh.runtime = P, Vh.typeName = "google.protobuf.MethodDescriptorProto", Vh.fields = P.util.newFieldList(()=>[
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
            T: dH,
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
    ]), tH = Vh, $h = class E_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new E_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new E_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new E_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(E_, t, n);
    }
}, $h.runtime = P, $h.typeName = "google.protobuf.FileOptions", $h.fields = P.util.newFieldList(()=>[
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
            T: P.getEnumType(ay),
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
            T: js,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), nH = $h, ay = ((e)=>(e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(ay || {}), P.util.setEnumType(ay, "google.protobuf.FileOptions.OptimizeMode", [
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
]), jh = class b_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new b_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new b_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new b_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(b_, t, n);
    }
}, jh.runtime = P, jh.typeName = "google.protobuf.MessageOptions", jh.fields = P.util.newFieldList(()=>[
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
            T: js,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), rH = jh, Hh = class R_ extends fe {
    constructor(t){
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new R_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new R_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new R_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(R_, t, n);
    }
}, Hh.runtime = P, Hh.typeName = "google.protobuf.FieldOptions", Hh.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: P.getEnumType(oy),
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
            T: P.getEnumType(cy),
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
            T: P.getEnumType(ly),
            opt: !0
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: P.getEnumType(dy),
            repeated: !0
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: iH,
            repeated: !0
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: js,
            opt: !0
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: GM,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), sH = Hh, oy = ((e)=>(e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(oy || {}), P.util.setEnumType(oy, "google.protobuf.FieldOptions.CType", [
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
]), cy = ((e)=>(e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(cy || {}), P.util.setEnumType(cy, "google.protobuf.FieldOptions.JSType", [
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
]), ly = ((e)=>(e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(ly || {}), P.util.setEnumType(ly, "google.protobuf.FieldOptions.OptionRetention", [
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
]), dy = ((e)=>(e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(dy || {}), P.util.setEnumType(dy, "google.protobuf.FieldOptions.OptionTargetType", [
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
]), qh = class C_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new C_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new C_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new C_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(C_, t, n);
    }
}, qh.runtime = P, qh.typeName = "google.protobuf.FieldOptions.EditionDefault", qh.fields = P.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: P.getEnumType(hi),
            opt: !0
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iH = qh, Kh = class I_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new I_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new I_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new I_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(I_, t, n);
    }
}, Kh.runtime = P, Kh.typeName = "google.protobuf.FieldOptions.FeatureSupport", Kh.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: P.getEnumType(hi),
            opt: !0
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: P.getEnumType(hi),
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
            T: P.getEnumType(hi),
            opt: !0
        }
    ]), GM = Kh, zh = class A_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new A_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new A_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new A_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(A_, t, n);
    }
}, zh.runtime = P, zh.typeName = "google.protobuf.OneofOptions", zh.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: js,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), aH = zh, Yh = class M_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new M_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new M_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new M_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(M_, t, n);
    }
}, Yh.runtime = P, Yh.typeName = "google.protobuf.EnumOptions", Yh.fields = P.util.newFieldList(()=>[
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
            T: js,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), oH = Yh, Jh = class P_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new P_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new P_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new P_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(P_, t, n);
    }
}, Jh.runtime = P, Jh.typeName = "google.protobuf.EnumValueOptions", Jh.fields = P.util.newFieldList(()=>[
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
            T: js,
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
            T: GM,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), cH = Jh, Xh = class N_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new N_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new N_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new N_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(N_, t, n);
    }
}, Xh.runtime = P, Xh.typeName = "google.protobuf.ServiceOptions", Xh.fields = P.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: js,
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
            T: qi,
            repeated: !0
        }
    ]), lH = Xh, Qh = class D_ extends fe {
    constructor(t){
        super(), this.uninterpretedOption = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new D_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new D_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new D_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(D_, t, n);
    }
}, Qh.runtime = P, Qh.typeName = "google.protobuf.MethodOptions", Qh.fields = P.util.newFieldList(()=>[
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
            T: P.getEnumType(uy),
            opt: !0,
            default: 0
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: js,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: qi,
            repeated: !0
        }
    ]), dH = Qh, uy = ((e)=>(e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(uy || {}), P.util.setEnumType(uy, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
]), Zh = class O_ extends fe {
    constructor(t){
        super(), this.name = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new O_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new O_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new O_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(O_, t, n);
    }
}, Zh.runtime = P, Zh.typeName = "google.protobuf.UninterpretedOption", Zh.fields = P.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: uH,
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
    ]), qi = Zh, eg = class L_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new L_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new L_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new L_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(L_, t, n);
    }
}, eg.runtime = P, eg.typeName = "google.protobuf.UninterpretedOption.NamePart", eg.fields = P.util.newFieldList(()=>[
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
    ]), uH = eg, tg = class U_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new U_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new U_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new U_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(U_, t, n);
    }
}, tg.runtime = P, tg.typeName = "google.protobuf.FeatureSet", tg.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: P.getEnumType(my),
            opt: !0
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: P.getEnumType(py),
            opt: !0
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: P.getEnumType(hy),
            opt: !0
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: P.getEnumType(gy),
            opt: !0
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: P.getEnumType(fy),
            opt: !0
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: P.getEnumType(_y),
            opt: !0
        }
    ]), js = tg, my = ((e)=>(e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(my || {}), P.util.setEnumType(my, "google.protobuf.FeatureSet.FieldPresence", [
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
]), py = ((e)=>(e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(py || {}), P.util.setEnumType(py, "google.protobuf.FeatureSet.EnumType", [
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
]), hy = ((e)=>(e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(hy || {}), P.util.setEnumType(hy, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
]), gy = ((e)=>(e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(gy || {}), P.util.setEnumType(gy, "google.protobuf.FeatureSet.Utf8Validation", [
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
]), fy = ((e)=>(e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(fy || {}), P.util.setEnumType(fy, "google.protobuf.FeatureSet.MessageEncoding", [
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
]), _y = ((e)=>(e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(_y || {}), P.util.setEnumType(_y, "google.protobuf.FeatureSet.JsonFormat", [
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
]), vy = class x_ extends fe {
    constructor(t){
        super(), this.defaults = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new x_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new x_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new x_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(x_, t, n);
    }
}, vy.runtime = P, vy.typeName = "google.protobuf.FeatureSetDefaults", vy.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: mH,
            repeated: !0
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: P.getEnumType(hi),
            opt: !0
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: P.getEnumType(hi),
            opt: !0
        }
    ]), ng = class F_ extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new F_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new F_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new F_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(F_, t, n);
    }
}, ng.runtime = P, ng.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", ng.fields = P.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: P.getEnumType(hi),
            opt: !0
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: js,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: js,
            opt: !0
        }
    ]), mH = ng, rg = class W_ extends fe {
    constructor(t){
        super(), this.location = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new W_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new W_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new W_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(W_, t, n);
    }
}, rg.runtime = P, rg.typeName = "google.protobuf.SourceCodeInfo", rg.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: hH,
            repeated: !0
        }
    ]), pH = rg, sg = class B_ extends fe {
    constructor(t){
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new B_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new B_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new B_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(B_, t, n);
    }
}, sg.runtime = P, sg.typeName = "google.protobuf.SourceCodeInfo.Location", sg.fields = P.util.newFieldList(()=>[
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
    ]), hH = sg, ig = class G_ extends fe {
    constructor(t){
        super(), this.annotation = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new G_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new G_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new G_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(G_, t, n);
    }
}, ig.runtime = P, ig.typeName = "google.protobuf.GeneratedCodeInfo", ig.fields = P.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: fH,
            repeated: !0
        }
    ]), gH = ig, ag = class V_ extends fe {
    constructor(t){
        super(), this.path = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new V_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new V_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new V_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(V_, t, n);
    }
}, ag.runtime = P, ag.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ag.fields = P.util.newFieldList(()=>[
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
            T: P.getEnumType(Ty),
            opt: !0
        }
    ]), fH = ag, Ty = ((e)=>(e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(Ty || {}), P.util.setEnumType(Ty, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
