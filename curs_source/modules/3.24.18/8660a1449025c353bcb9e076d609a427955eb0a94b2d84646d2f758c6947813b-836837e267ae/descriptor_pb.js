import { Dm, Ude } from "./message.js";
import { Ba, Q_r } from "./proto2.js";
import { E } from "./tslib.es6.js";
var t5e, J_r, UJn, ebr, gpn, mdd, jJn, gdd, $Jn, fdd, HJn, vdd, tbr, WJn, _dd, GJn, nbr, Ij, ibr, qJn, bdd, zJn, eDo, VJn, ydd, KJn, Sdd, YJn, kdd, XJn, wdd, ZJn, Cdd, rbr, QJn, Tdd, JJn, Edd, sbr, obr, abr, lbr, eei, Idd, tei, tDo, nei, xdd, iei, Add, rei, Rdd, sei, Pdd, oei, Mdd, cbr, aei, I$e, lei, Ddd, cei, yAe, ubr, dbr, hbr, pbr, mbr, gbr, fbr, uei, Ndd, dei, Ldd, hei, Odd, pei, Fdd, mei, Bdd, vbr;
export { $Jn, Add, Bdd, Cdd, Ddd, Edd, Fdd, GJn, HJn, I$e, Idd, Ij, JJn, J_r, KJn, Ldd, Mdd, Ndd, Odd, Pdd, QJn, Rdd, Sdd, Tdd, UJn, VJn, WJn, XJn, YJn, ZJn, _dd, abr, aei, bdd, cbr, cei, dbr, dei, eDo, ebr, eei, fbr, fdd, gbr, gdd, gpn, hbr, hei, ibr, iei, jJn, kdd, lbr, lei, mbr, mdd, mei, nbr, nei, obr, oei, pbr, pei, qJn, rbr, rei, sbr, sei, t5e, tDo, tbr, tei, ubr, uei, vbr, vdd, wdd, xdd, yAe, ydd, zJn };
var __wakaru_gei_initialized = false;
export function gei() {
if (__wakaru_gei_initialized) return;
__wakaru_gei_initialized = true;
"use strict";
E(), Q_r(), Ude(), t5e = ((t)=>(t[t.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t[t.EDITION_LEGACY = 900] = "EDITION_LEGACY", t[t.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t[t.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t[t.EDITION_2023 = 1e3] = "EDITION_2023", t[t.EDITION_2024 = 1001] = "EDITION_2024", t[t.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t[t.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t[t.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t[t.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t[t.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t[t.EDITION_MAX = 2147483647] = "EDITION_MAX", t))(t5e || {}), Ba.util.setEnumType(t5e, "google.protobuf.Edition", [
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
]), J_r = class cXi extends Dm {
    constructor(e){
        super(), this.file = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new cXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new cXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new cXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(cXi, e, n);
    }
}, J_r.runtime = Ba, J_r.typeName = "google.protobuf.FileDescriptorSet", J_r.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ebr,
            repeated: !0
        }
    ]), UJn = class uXi extends Dm {
    constructor(e){
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new uXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new uXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new uXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(uXi, e, n);
    }
}, UJn.runtime = Ba, UJn.typeName = "google.protobuf.FileDescriptorProto", UJn.fields = Ba.util.newFieldList(()=>[
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
            T: mdd,
            repeated: !0
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: eDo,
            repeated: !0
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: kdd,
            repeated: !0
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: nbr,
            repeated: !0
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: Cdd,
            opt: !0
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: Ldd,
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
            T: Ba.getEnumType(t5e),
            opt: !0
        }
    ]), ebr = UJn, gpn = class dXi extends Dm {
    constructor(e){
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new dXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new dXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new dXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(dXi, e, n);
    }
}, gpn.runtime = Ba, gpn.typeName = "google.protobuf.DescriptorProto", gpn.fields = Ba.util.newFieldList(()=>[
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
            T: nbr,
            repeated: !0
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: nbr,
            repeated: !0
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: gpn,
            repeated: !0
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: eDo,
            repeated: !0
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: gdd,
            repeated: !0
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: bdd,
            repeated: !0
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: Tdd,
            opt: !0
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: fdd,
            repeated: !0
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), mdd = gpn, jJn = class hXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new hXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new hXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new hXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(hXi, e, n);
    }
}, jJn.runtime = Ba, jJn.typeName = "google.protobuf.DescriptorProto.ExtensionRange", jJn.fields = Ba.util.newFieldList(()=>[
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
            T: vdd,
            opt: !0
        }
    ]), gdd = jJn, $Jn = class pXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new pXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new pXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new pXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(pXi, e, n);
    }
}, $Jn.runtime = Ba, $Jn.typeName = "google.protobuf.DescriptorProto.ReservedRange", $Jn.fields = Ba.util.newFieldList(()=>[
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
    ]), fdd = $Jn, HJn = class mXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], this.declaration = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new mXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new mXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new mXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(mXi, e, n);
    }
}, HJn.runtime = Ba, HJn.typeName = "google.protobuf.ExtensionRangeOptions", HJn.fields = Ba.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: _dd,
            repeated: !0
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: yAe,
            opt: !0
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: Ba.getEnumType(tbr),
            opt: !0,
            default: 1
        }
    ]), vdd = HJn, tbr = ((t)=>(t[t.DECLARATION = 0] = "DECLARATION", t[t.UNVERIFIED = 1] = "UNVERIFIED", t))(tbr || {}), Ba.util.setEnumType(tbr, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]), WJn = class gXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new gXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new gXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new gXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(gXi, e, n);
    }
}, WJn.runtime = Ba, WJn.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", WJn.fields = Ba.util.newFieldList(()=>[
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
    ]), _dd = WJn, GJn = class fXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new fXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new fXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new fXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(fXi, e, n);
    }
}, GJn.runtime = Ba, GJn.typeName = "google.protobuf.FieldDescriptorProto", GJn.fields = Ba.util.newFieldList(()=>[
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
            T: Ba.getEnumType(ibr),
            opt: !0
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: Ba.getEnumType(Ij),
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
            T: Edd,
            opt: !0
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), nbr = GJn, Ij = ((t)=>(t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.GROUP = 10] = "GROUP", t[t.MESSAGE = 11] = "MESSAGE", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.ENUM = 14] = "ENUM", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64", t))(Ij || {}), Ba.util.setEnumType(Ij, "google.protobuf.FieldDescriptorProto.Type", [
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
]), ibr = ((t)=>(t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REPEATED = 3] = "REPEATED", t[t.REQUIRED = 2] = "REQUIRED", t))(ibr || {}), Ba.util.setEnumType(ibr, "google.protobuf.FieldDescriptorProto.Label", [
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
]), qJn = class vXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new vXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new vXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new vXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(vXi, e, n);
    }
}, qJn.runtime = Ba, qJn.typeName = "google.protobuf.OneofDescriptorProto", qJn.fields = Ba.util.newFieldList(()=>[
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
            T: xdd,
            opt: !0
        }
    ]), bdd = qJn, zJn = class _Xi extends Dm {
    constructor(e){
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new _Xi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new _Xi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new _Xi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(_Xi, e, n);
    }
}, zJn.runtime = Ba, zJn.typeName = "google.protobuf.EnumDescriptorProto", zJn.fields = Ba.util.newFieldList(()=>[
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
            T: Sdd,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Add,
            opt: !0
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: ydd,
            repeated: !0
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), eDo = zJn, VJn = class bXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new bXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new bXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new bXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(bXi, e, n);
    }
}, VJn.runtime = Ba, VJn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", VJn.fields = Ba.util.newFieldList(()=>[
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
    ]), ydd = VJn, KJn = class yXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new yXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new yXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new yXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(yXi, e, n);
    }
}, KJn.runtime = Ba, KJn.typeName = "google.protobuf.EnumValueDescriptorProto", KJn.fields = Ba.util.newFieldList(()=>[
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
            T: Rdd,
            opt: !0
        }
    ]), Sdd = KJn, YJn = class SXi extends Dm {
    constructor(e){
        super(), this.method = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new SXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new SXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new SXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(SXi, e, n);
    }
}, YJn.runtime = Ba, YJn.typeName = "google.protobuf.ServiceDescriptorProto", YJn.fields = Ba.util.newFieldList(()=>[
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
            T: wdd,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Pdd,
            opt: !0
        }
    ]), kdd = YJn, XJn = class kXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new kXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new kXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new kXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(kXi, e, n);
    }
}, XJn.runtime = Ba, XJn.typeName = "google.protobuf.MethodDescriptorProto", XJn.fields = Ba.util.newFieldList(()=>[
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
            T: Mdd,
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
    ]), wdd = XJn, ZJn = class wXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new wXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new wXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new wXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(wXi, e, n);
    }
}, ZJn.runtime = Ba, ZJn.typeName = "google.protobuf.FileOptions", ZJn.fields = Ba.util.newFieldList(()=>[
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
            T: Ba.getEnumType(rbr),
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
            T: yAe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Cdd = ZJn, rbr = ((t)=>(t[t.SPEED = 1] = "SPEED", t[t.CODE_SIZE = 2] = "CODE_SIZE", t[t.LITE_RUNTIME = 3] = "LITE_RUNTIME", t))(rbr || {}), Ba.util.setEnumType(rbr, "google.protobuf.FileOptions.OptimizeMode", [
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
]), QJn = class CXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new CXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new CXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new CXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(CXi, e, n);
    }
}, QJn.runtime = Ba, QJn.typeName = "google.protobuf.MessageOptions", QJn.fields = Ba.util.newFieldList(()=>[
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
            T: yAe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Tdd = QJn, JJn = class TXi extends Dm {
    constructor(e){
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new TXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new TXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new TXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(TXi, e, n);
    }
}, JJn.runtime = Ba, JJn.typeName = "google.protobuf.FieldOptions", JJn.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: Ba.getEnumType(sbr),
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
            T: Ba.getEnumType(obr),
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
            T: Ba.getEnumType(abr),
            opt: !0
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: Ba.getEnumType(lbr),
            repeated: !0
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: Idd,
            repeated: !0
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: yAe,
            opt: !0
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: tDo,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Edd = JJn, sbr = ((t)=>(t[t.STRING = 0] = "STRING", t[t.CORD = 1] = "CORD", t[t.STRING_PIECE = 2] = "STRING_PIECE", t))(sbr || {}), Ba.util.setEnumType(sbr, "google.protobuf.FieldOptions.CType", [
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
]), obr = ((t)=>(t[t.JS_NORMAL = 0] = "JS_NORMAL", t[t.JS_STRING = 1] = "JS_STRING", t[t.JS_NUMBER = 2] = "JS_NUMBER", t))(obr || {}), Ba.util.setEnumType(obr, "google.protobuf.FieldOptions.JSType", [
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
]), abr = ((t)=>(t[t.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t[t.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t[t.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", t))(abr || {}), Ba.util.setEnumType(abr, "google.protobuf.FieldOptions.OptionRetention", [
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
]), lbr = ((t)=>(t[t.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t[t.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t[t.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t[t.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t[t.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t[t.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t[t.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t[t.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t[t.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t[t.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", t))(lbr || {}), Ba.util.setEnumType(lbr, "google.protobuf.FieldOptions.OptionTargetType", [
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
]), eei = class EXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new EXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new EXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new EXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(EXi, e, n);
    }
}, eei.runtime = Ba, eei.typeName = "google.protobuf.FieldOptions.EditionDefault", eei.fields = Ba.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: Ba.getEnumType(t5e),
            opt: !0
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Idd = eei, tei = class IXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new IXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new IXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new IXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(IXi, e, n);
    }
}, tei.runtime = Ba, tei.typeName = "google.protobuf.FieldOptions.FeatureSupport", tei.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: Ba.getEnumType(t5e),
            opt: !0
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: Ba.getEnumType(t5e),
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
            T: Ba.getEnumType(t5e),
            opt: !0
        }
    ]), tDo = tei, nei = class xXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new xXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new xXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new xXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(xXi, e, n);
    }
}, nei.runtime = Ba, nei.typeName = "google.protobuf.OneofOptions", nei.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: yAe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), xdd = nei, iei = class AXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new AXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new AXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new AXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(AXi, e, n);
    }
}, iei.runtime = Ba, iei.typeName = "google.protobuf.EnumOptions", iei.fields = Ba.util.newFieldList(()=>[
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
            T: yAe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Add = iei, rei = class RXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new RXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new RXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new RXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(RXi, e, n);
    }
}, rei.runtime = Ba, rei.typeName = "google.protobuf.EnumValueOptions", rei.fields = Ba.util.newFieldList(()=>[
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
            T: yAe,
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
            T: tDo,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Rdd = rei, sei = class PXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new PXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new PXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new PXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(PXi, e, n);
    }
}, sei.runtime = Ba, sei.typeName = "google.protobuf.ServiceOptions", sei.fields = Ba.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: yAe,
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
            T: I$e,
            repeated: !0
        }
    ]), Pdd = sei, oei = class MXi extends Dm {
    constructor(e){
        super(), this.uninterpretedOption = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new MXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new MXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new MXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(MXi, e, n);
    }
}, oei.runtime = Ba, oei.typeName = "google.protobuf.MethodOptions", oei.fields = Ba.util.newFieldList(()=>[
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
            T: Ba.getEnumType(cbr),
            opt: !0,
            default: 0
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: yAe,
            opt: !0
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: I$e,
            repeated: !0
        }
    ]), Mdd = oei, cbr = ((t)=>(t[t.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t[t.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t[t.IDEMPOTENT = 2] = "IDEMPOTENT", t))(cbr || {}), Ba.util.setEnumType(cbr, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
]), aei = class DXi extends Dm {
    constructor(e){
        super(), this.name = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new DXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new DXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new DXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(DXi, e, n);
    }
}, aei.runtime = Ba, aei.typeName = "google.protobuf.UninterpretedOption", aei.fields = Ba.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: Ddd,
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
    ]), I$e = aei, lei = class NXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new NXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new NXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new NXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(NXi, e, n);
    }
}, lei.runtime = Ba, lei.typeName = "google.protobuf.UninterpretedOption.NamePart", lei.fields = Ba.util.newFieldList(()=>[
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
    ]), Ddd = lei, cei = class LXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new LXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new LXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new LXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(LXi, e, n);
    }
}, cei.runtime = Ba, cei.typeName = "google.protobuf.FeatureSet", cei.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: Ba.getEnumType(ubr),
            opt: !0
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: Ba.getEnumType(dbr),
            opt: !0
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: Ba.getEnumType(hbr),
            opt: !0
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: Ba.getEnumType(pbr),
            opt: !0
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: Ba.getEnumType(mbr),
            opt: !0
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: Ba.getEnumType(gbr),
            opt: !0
        }
    ]), yAe = cei, ubr = ((t)=>(t[t.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t[t.EXPLICIT = 1] = "EXPLICIT", t[t.IMPLICIT = 2] = "IMPLICIT", t[t.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", t))(ubr || {}), Ba.util.setEnumType(ubr, "google.protobuf.FeatureSet.FieldPresence", [
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
]), dbr = ((t)=>(t[t.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 2] = "CLOSED", t))(dbr || {}), Ba.util.setEnumType(dbr, "google.protobuf.FeatureSet.EnumType", [
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
]), hbr = ((t)=>(t[t.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t[t.PACKED = 1] = "PACKED", t[t.EXPANDED = 2] = "EXPANDED", t))(hbr || {}), Ba.util.setEnumType(hbr, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
]), pbr = ((t)=>(t[t.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t[t.VERIFY = 2] = "VERIFY", t[t.NONE = 3] = "NONE", t))(pbr || {}), Ba.util.setEnumType(pbr, "google.protobuf.FeatureSet.Utf8Validation", [
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
]), mbr = ((t)=>(t[t.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t[t.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t[t.DELIMITED = 2] = "DELIMITED", t))(mbr || {}), Ba.util.setEnumType(mbr, "google.protobuf.FeatureSet.MessageEncoding", [
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
]), gbr = ((t)=>(t[t.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t[t.ALLOW = 1] = "ALLOW", t[t.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", t))(gbr || {}), Ba.util.setEnumType(gbr, "google.protobuf.FeatureSet.JsonFormat", [
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
]), fbr = class OXi extends Dm {
    constructor(e){
        super(), this.defaults = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new OXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new OXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new OXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(OXi, e, n);
    }
}, fbr.runtime = Ba, fbr.typeName = "google.protobuf.FeatureSetDefaults", fbr.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: Ndd,
            repeated: !0
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: Ba.getEnumType(t5e),
            opt: !0
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: Ba.getEnumType(t5e),
            opt: !0
        }
    ]), uei = class FXi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new FXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new FXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new FXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(FXi, e, n);
    }
}, uei.runtime = Ba, uei.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", uei.fields = Ba.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: Ba.getEnumType(t5e),
            opt: !0
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: yAe,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: yAe,
            opt: !0
        }
    ]), Ndd = uei, dei = class BXi extends Dm {
    constructor(e){
        super(), this.location = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new BXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new BXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new BXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(BXi, e, n);
    }
}, dei.runtime = Ba, dei.typeName = "google.protobuf.SourceCodeInfo", dei.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: Odd,
            repeated: !0
        }
    ]), Ldd = dei, hei = class UXi extends Dm {
    constructor(e){
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new UXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new UXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new UXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(UXi, e, n);
    }
}, hei.runtime = Ba, hei.typeName = "google.protobuf.SourceCodeInfo.Location", hei.fields = Ba.util.newFieldList(()=>[
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
    ]), Odd = hei, pei = class jXi extends Dm {
    constructor(e){
        super(), this.annotation = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new jXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new jXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new jXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(jXi, e, n);
    }
}, pei.runtime = Ba, pei.typeName = "google.protobuf.GeneratedCodeInfo", pei.fields = Ba.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: Bdd,
            repeated: !0
        }
    ]), Fdd = pei, mei = class $Xi extends Dm {
    constructor(e){
        super(), this.path = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new $Xi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new $Xi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new $Xi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals($Xi, e, n);
    }
}, mei.runtime = Ba, mei.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", mei.fields = Ba.util.newFieldList(()=>[
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
            T: Ba.getEnumType(vbr),
            opt: !0
        }
    ]), Bdd = mei, vbr = ((t)=>(t[t.NONE = 0] = "NONE", t[t.SET = 1] = "SET", t[t.ALIAS = 2] = "ALIAS", t))(vbr || {}), Ba.util.setEnumType(vbr, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
