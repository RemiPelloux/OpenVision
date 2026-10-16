"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Option = exports.EnumValue = exports.Enum = exports.Field_Cardinality = exports.Field_Kind = exports.Field = exports.Type = exports.Syntax = void 0;
const a = require("./module-7599.js"), s = require("./module-4193.js"), o = require("./module-7206.js"), r = require("./module-8245.js");
var i, A, c;
!function(e) {
    e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS";
}(i || (exports.Syntax = i = {})), a.proto3.util.setEnumType(i, "google.protobuf.Syntax", [
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
class l extends s.Message {
    constructor(e){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", a.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new l).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new l).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new l).fromJsonString(e, n);
    }
    static equals(e, n) {
        return a.proto3.util.equals(l, e, n);
    }
}
exports.Type = l, l.runtime = a.proto3, l.typeName = "google.protobuf.Type", l.fields = a.proto3.util.newFieldList(()=>[
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
            T: d,
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
            T: g,
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
            T: a.proto3.getEnumType(i)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class d extends s.Message {
    constructor(e){
        super(), this.kind = A.TYPE_UNKNOWN, this.cardinality = c.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", a.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new d).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new d).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new d).fromJsonString(e, n);
    }
    static equals(e, n) {
        return a.proto3.util.equals(d, e, n);
    }
}
exports.Field = d, d.runtime = a.proto3, d.typeName = "google.protobuf.Field", d.fields = a.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: a.proto3.getEnumType(A)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: a.proto3.getEnumType(c)
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
            T: g,
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
}(A || (exports.Field_Kind = A = {})), a.proto3.util.setEnumType(A, "google.protobuf.Field.Kind", [
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
}(c || (exports.Field_Cardinality = c = {})), a.proto3.util.setEnumType(c, "google.protobuf.Field.Cardinality", [
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
class m extends s.Message {
    constructor(e){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", a.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new m).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new m).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new m).fromJsonString(e, n);
    }
    static equals(e, n) {
        return a.proto3.util.equals(m, e, n);
    }
}
exports.Enum = m, m.runtime = a.proto3, m.typeName = "google.protobuf.Enum", m.fields = a.proto3.util.newFieldList(()=>[
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
            T: u,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: g,
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
            T: a.proto3.getEnumType(i)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class u extends s.Message {
    constructor(e){
        super(), this.name = "", this.number = 0, this.options = [], a.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new u).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new u).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new u).fromJsonString(e, n);
    }
    static equals(e, n) {
        return a.proto3.util.equals(u, e, n);
    }
}
exports.EnumValue = u, u.runtime = a.proto3, u.typeName = "google.protobuf.EnumValue", u.fields = a.proto3.util.newFieldList(()=>[
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
            T: g,
            repeated: !0
        }
    ]);
class g extends s.Message {
    constructor(e){
        super(), this.name = "", a.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new g).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new g).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new g).fromJsonString(e, n);
    }
    static equals(e, n) {
        return a.proto3.util.equals(g, e, n);
    }
}
exports.Option = g, g.runtime = a.proto3, g.typeName = "google.protobuf.Option", g.fields = a.proto3.util.newFieldList(()=>[
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
