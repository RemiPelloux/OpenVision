import { Sss, yss } from "./any_pb.js";
import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { Css, HSi } from "./source_context_pb.js";
import { x } from "./tslib.es6.js";
var w5e, WSi, _bn, cVc, GSi, VSi, jSi, bbn, lVc, ybn, Imt;
export { GSi, Imt, VSi, WSi, _bn, bbn, cVc, jSi, lVc, w5e, ybn };
var __wakaru_uVc_initialized = false;
export function uVc() {
if (__wakaru_uVc_initialized) return;
__wakaru_uVc_initialized = true;
"use strict";
x(), hfe(), IJ(), Css(), Sss(), w5e = ((e)=>(e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(w5e || {}), k.util.setEnumType(w5e, "google.protobuf.Syntax", [
    {
        no: 0,
        name: "SYNTAX_PROTO2"
    },
    {
        no: 1,
        name: "SYNTAX_PROTO3"
    },
    {
        no: 2,
        name: "SYNTAX_EDITIONS"
    }
]), WSi = class YZn extends yg {
    constructor(t){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new YZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new YZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new YZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(YZn, t, n);
    }
}, WSi.runtime = k, WSi.typeName = "google.protobuf.Type", WSi.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fields",
            kind: "message",
            T: cVc,
            repeated: !0
        },
        {
            no: 3,
            name: "oneofs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: Imt,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: HSi
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: k.getEnumType(w5e)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), _bn = class XZn extends yg {
    constructor(t){
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new XZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new XZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new XZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(XZn, t, n);
    }
}, _bn.runtime = k, _bn.typeName = "google.protobuf.Field", _bn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(GSi)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: k.getEnumType(VSi)
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "oneof_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "packed",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "options",
            kind: "message",
            T: Imt,
            repeated: !0
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "default_value",
            kind: "scalar",
            T: 9
        }
    ]), cVc = _bn, GSi = ((e)=>(e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))(GSi || {}), k.util.setEnumType(GSi, "google.protobuf.Field.Kind", [
    {
        no: 0,
        name: "TYPE_UNKNOWN"
    },
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
]), VSi = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(VSi || {}), k.util.setEnumType(VSi, "google.protobuf.Field.Cardinality", [
    {
        no: 0,
        name: "CARDINALITY_UNKNOWN"
    },
    {
        no: 1,
        name: "CARDINALITY_OPTIONAL"
    },
    {
        no: 2,
        name: "CARDINALITY_REQUIRED"
    },
    {
        no: 3,
        name: "CARDINALITY_REPEATED"
    }
]), jSi = class ZZn extends yg {
    constructor(t){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new ZZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new ZZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new ZZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(ZZn, t, n);
    }
}, jSi.runtime = k, jSi.typeName = "google.protobuf.Enum", jSi.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enumvalue",
            kind: "message",
            T: lVc,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Imt,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: HSi
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: k.getEnumType(w5e)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), bbn = class QZn extends yg {
    constructor(t){
        super(), this.name = "", this.number = 0, this.options = [], k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new QZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new QZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new QZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(QZn, t, n);
    }
}, bbn.runtime = k, bbn.typeName = "google.protobuf.EnumValue", bbn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Imt,
            repeated: !0
        }
    ]), lVc = bbn, ybn = class JZn extends yg {
    constructor(t){
        super(), this.name = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new JZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new JZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new JZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(JZn, t, n);
    }
}, ybn.runtime = k, ybn.typeName = "google.protobuf.Option", ybn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: yss
        }
    ]), Imt = ybn;

}
