import { iDo, rDo } from "./any_pb.js";
import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { aDo, kbr } from "./source_context_pb.js";
import { E } from "./tslib.es6.js";
var Bet, wbr, xei, qdd, Cbr, Tbr, Ebr, Aei, zdd, Rei, d4t;
export { Aei, Bet, Cbr, Ebr, Rei, Tbr, d4t, qdd, wbr, xei, zdd };
var __wakaru_Vdd_initialized = false;
export function Vdd() {
if (__wakaru_Vdd_initialized) return;
__wakaru_Vdd_initialized = true;
"use strict";
E(), bAe(), Ude(), aDo(), rDo(), Bet = ((t)=>(t[t.PROTO2 = 0] = "PROTO2", t[t.PROTO3 = 1] = "PROTO3", t[t.EDITIONS = 2] = "EDITIONS", t))(Bet || {}), x.util.setEnumType(Bet, "google.protobuf.Syntax", [
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
]), wbr = class lZi extends Dm {
    constructor(e){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new lZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new lZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new lZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(lZi, e, n);
    }
}, wbr.runtime = x, wbr.typeName = "google.protobuf.Type", wbr.fields = x.util.newFieldList(()=>[
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
            T: qdd,
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
            T: d4t,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: kbr
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: x.getEnumType(Bet)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), xei = class cZi extends Dm {
    constructor(e){
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new cZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new cZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new cZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(cZi, e, n);
    }
}, xei.runtime = x, xei.typeName = "google.protobuf.Field", xei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(Cbr)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: x.getEnumType(Tbr)
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
            T: d4t,
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
    ]), qdd = xei, Cbr = ((t)=>(t[t.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t[t.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t[t.TYPE_FLOAT = 2] = "TYPE_FLOAT", t[t.TYPE_INT64 = 3] = "TYPE_INT64", t[t.TYPE_UINT64 = 4] = "TYPE_UINT64", t[t.TYPE_INT32 = 5] = "TYPE_INT32", t[t.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t[t.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t[t.TYPE_BOOL = 8] = "TYPE_BOOL", t[t.TYPE_STRING = 9] = "TYPE_STRING", t[t.TYPE_GROUP = 10] = "TYPE_GROUP", t[t.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t[t.TYPE_BYTES = 12] = "TYPE_BYTES", t[t.TYPE_UINT32 = 13] = "TYPE_UINT32", t[t.TYPE_ENUM = 14] = "TYPE_ENUM", t[t.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t[t.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t[t.TYPE_SINT32 = 17] = "TYPE_SINT32", t[t.TYPE_SINT64 = 18] = "TYPE_SINT64", t))(Cbr || {}), x.util.setEnumType(Cbr, "google.protobuf.Field.Kind", [
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
]), Tbr = ((t)=>(t[t.UNKNOWN = 0] = "UNKNOWN", t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REQUIRED = 2] = "REQUIRED", t[t.REPEATED = 3] = "REPEATED", t))(Tbr || {}), x.util.setEnumType(Tbr, "google.protobuf.Field.Cardinality", [
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
]), Ebr = class uZi extends Dm {
    constructor(e){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new uZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new uZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new uZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(uZi, e, n);
    }
}, Ebr.runtime = x, Ebr.typeName = "google.protobuf.Enum", Ebr.fields = x.util.newFieldList(()=>[
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
            T: zdd,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: d4t,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: kbr
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: x.getEnumType(Bet)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), Aei = class dZi extends Dm {
    constructor(e){
        super(), this.name = "", this.number = 0, this.options = [], x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new dZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new dZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new dZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(dZi, e, n);
    }
}, Aei.runtime = x, Aei.typeName = "google.protobuf.EnumValue", Aei.fields = x.util.newFieldList(()=>[
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
            T: d4t,
            repeated: !0
        }
    ]), zdd = Aei, Rei = class hZi extends Dm {
    constructor(e){
        super(), this.name = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new hZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new hZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new hZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(hZi, e, n);
    }
}, Rei.runtime = x, Rei.typeName = "google.protobuf.Option", Rei.fields = x.util.newFieldList(()=>[
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
            T: iDo
        }
    ]), d4t = Rei;

}
