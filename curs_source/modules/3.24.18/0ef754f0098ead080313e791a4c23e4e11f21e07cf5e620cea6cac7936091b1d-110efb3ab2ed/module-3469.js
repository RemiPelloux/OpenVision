"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Option = exports.EnumValue = exports.Enum = exports.Field_Cardinality = exports.Field_Kind = exports.Field = exports.Type = exports.Syntax = void 0;
const t = require("./module-7599.js"), s = require("./module-4193.js"), o = require("./module-7206.js"), r = require("./module-8245.js");
var i, l, d;
!function(e) {
    e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS";
}(i || (exports.Syntax = i = {})), t.proto3.util.setEnumType(i, "google.protobuf.Syntax", [
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
]);
class m extends s.Message {
    constructor(e){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", t.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new m).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new m).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new m).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(m, e, a);
    }
}
exports.Type = m, m.runtime = t.proto3, m.typeName = "google.protobuf.Type", m.fields = t.proto3.util.newFieldList(()=>[
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
            T: c,
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
            T: u,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: o.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: t.proto3.getEnumType(i)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class c extends s.Message {
    constructor(e){
        super(), this.kind = l.TYPE_UNKNOWN, this.cardinality = d.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", t.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new c).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new c).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new c).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(c, e, a);
    }
}
exports.Field = c, c.runtime = t.proto3, c.typeName = "google.protobuf.Field", c.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: t.proto3.getEnumType(l)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: t.proto3.getEnumType(d)
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
            T: u,
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
    ]), function(e) {
    e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64";
}(l || (exports.Field_Kind = l = {})), t.proto3.util.setEnumType(l, "google.protobuf.Field.Kind", [
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
]), function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED";
}(d || (exports.Field_Cardinality = d = {})), t.proto3.util.setEnumType(d, "google.protobuf.Field.Cardinality", [
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
]);
class p extends s.Message {
    constructor(e){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", t.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new p).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new p).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new p).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(p, e, a);
    }
}
exports.Enum = p, p.runtime = t.proto3, p.typeName = "google.protobuf.Enum", p.fields = t.proto3.util.newFieldList(()=>[
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
            T: A,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: u,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: o.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: t.proto3.getEnumType(i)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class A extends s.Message {
    constructor(e){
        super(), this.name = "", this.number = 0, this.options = [], t.proto3.util.initPartial(e, this);
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
        return t.proto3.util.equals(A, e, a);
    }
}
exports.EnumValue = A, A.runtime = t.proto3, A.typeName = "google.protobuf.EnumValue", A.fields = t.proto3.util.newFieldList(()=>[
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
            T: u,
            repeated: !0
        }
    ]);
class u extends s.Message {
    constructor(e){
        super(), this.name = "", t.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new u).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new u).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new u).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(u, e, a);
    }
}
exports.Option = u, u.runtime = t.proto3, u.typeName = "google.protobuf.Option", u.fields = t.proto3.util.newFieldList(()=>[
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
            T: r.Any
        }
    ]);
