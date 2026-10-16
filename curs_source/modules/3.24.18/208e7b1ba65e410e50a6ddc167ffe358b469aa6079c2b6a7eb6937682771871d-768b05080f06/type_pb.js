import { $M, VM } from "./any_pb.js";
import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { Ey, qM } from "./source_context_pb.js";
import { h } from "./tslib.es6.js";
var Ra, by, vg, RH, Ry, Cy, Iy, Tg, CH, kg, Gc;
export { CH, Cy, Gc, Iy, RH, Ra, Ry, Tg, by, kg, vg };
var __wakaru_IH_initialized = false;
export function IH() {
if (__wakaru_IH_initialized) return;
__wakaru_IH_initialized = true;
"use strict";
h(), $s(), $r(), qM(), $M(), Ra = ((e)=>(e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(Ra || {}), c.util.setEnumType(Ra, "google.protobuf.Syntax", [
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
]), by = class lv extends fe {
    constructor(t){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new lv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new lv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new lv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(lv, t, n);
    }
}, by.runtime = c, by.typeName = "google.protobuf.Type", by.fields = c.util.newFieldList(()=>[
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
            T: RH,
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
            T: Gc,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: Ey
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: c.getEnumType(Ra)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), vg = class dv extends fe {
    constructor(t){
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new dv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new dv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new dv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(dv, t, n);
    }
}, vg.runtime = c, vg.typeName = "google.protobuf.Field", vg.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(Ry)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: c.getEnumType(Cy)
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
            T: Gc,
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
    ]), RH = vg, Ry = ((e)=>(e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))(Ry || {}), c.util.setEnumType(Ry, "google.protobuf.Field.Kind", [
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
]), Cy = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(Cy || {}), c.util.setEnumType(Cy, "google.protobuf.Field.Cardinality", [
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
]), Iy = class uv extends fe {
    constructor(t){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new uv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new uv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new uv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(uv, t, n);
    }
}, Iy.runtime = c, Iy.typeName = "google.protobuf.Enum", Iy.fields = c.util.newFieldList(()=>[
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
            T: CH,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Gc,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: Ey
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: c.getEnumType(Ra)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]), Tg = class mv extends fe {
    constructor(t){
        super(), this.name = "", this.number = 0, this.options = [], c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new mv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new mv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new mv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(mv, t, n);
    }
}, Tg.runtime = c, Tg.typeName = "google.protobuf.EnumValue", Tg.fields = c.util.newFieldList(()=>[
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
            T: Gc,
            repeated: !0
        }
    ]), CH = Tg, kg = class pv extends fe {
    constructor(t){
        super(), this.name = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new pv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new pv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new pv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(pv, t, n);
    }
}, kg.runtime = c, kg.typeName = "google.protobuf.Option", kg.fields = c.util.newFieldList(()=>[
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
            T: VM
        }
    ]), Gc = kg;

}
