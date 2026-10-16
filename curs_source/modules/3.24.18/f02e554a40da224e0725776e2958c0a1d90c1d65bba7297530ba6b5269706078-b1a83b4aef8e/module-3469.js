"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Option = exports.EnumValue = exports.Enum = exports.Field_Cardinality = exports.Field_Kind = exports.Field = exports.Type = exports.Syntax = void 0;
const n = require("./module-7599.js"), s = require("./module-4193.js"), i = require("./module-7206.js"), o = require("./module-8245.js");
var a, u, c;
!function(t) {
    t[t.PROTO2 = 0] = "PROTO2", t[t.PROTO3 = 1] = "PROTO3", t[t.EDITIONS = 2] = "EDITIONS";
}(a || (exports.Syntax = a = {})), n.proto3.util.setEnumType(a, "google.protobuf.Syntax", [
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
    constructor(t){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
}
exports.Type = l, l.runtime = n.proto3, l.typeName = "google.protobuf.Type", l.fields = n.proto3.util.newFieldList(()=>[
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
            T: m,
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
            T: p,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: i.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: n.proto3.getEnumType(a)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class m extends s.Message {
    constructor(t){
        super(), this.kind = u.TYPE_UNKNOWN, this.cardinality = c.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
}
exports.Field = m, m.runtime = n.proto3, m.typeName = "google.protobuf.Field", m.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: n.proto3.getEnumType(u)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: n.proto3.getEnumType(c)
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
            T: p,
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
    ]), function(t) {
    t[t.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t[t.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t[t.TYPE_FLOAT = 2] = "TYPE_FLOAT", t[t.TYPE_INT64 = 3] = "TYPE_INT64", t[t.TYPE_UINT64 = 4] = "TYPE_UINT64", t[t.TYPE_INT32 = 5] = "TYPE_INT32", t[t.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t[t.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t[t.TYPE_BOOL = 8] = "TYPE_BOOL", t[t.TYPE_STRING = 9] = "TYPE_STRING", t[t.TYPE_GROUP = 10] = "TYPE_GROUP", t[t.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t[t.TYPE_BYTES = 12] = "TYPE_BYTES", t[t.TYPE_UINT32 = 13] = "TYPE_UINT32", t[t.TYPE_ENUM = 14] = "TYPE_ENUM", t[t.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t[t.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t[t.TYPE_SINT32 = 17] = "TYPE_SINT32", t[t.TYPE_SINT64 = 18] = "TYPE_SINT64";
}(u || (exports.Field_Kind = u = {})), n.proto3.util.setEnumType(u, "google.protobuf.Field.Kind", [
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
]), function(t) {
    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REQUIRED = 2] = "REQUIRED", t[t.REPEATED = 3] = "REPEATED";
}(c || (exports.Field_Cardinality = c = {})), n.proto3.util.setEnumType(c, "google.protobuf.Field.Cardinality", [
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
class d extends s.Message {
    constructor(t){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
}
exports.Enum = d, d.runtime = n.proto3, d.typeName = "google.protobuf.Enum", d.fields = n.proto3.util.newFieldList(()=>[
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
            T: f,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: p,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: i.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: n.proto3.getEnumType(a)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class f extends s.Message {
    constructor(t){
        super(), this.name = "", this.number = 0, this.options = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
}
exports.EnumValue = f, f.runtime = n.proto3, f.typeName = "google.protobuf.EnumValue", f.fields = n.proto3.util.newFieldList(()=>[
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
            T: p,
            repeated: !0
        }
    ]);
class p extends s.Message {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
}
exports.Option = p, p.runtime = n.proto3, p.typeName = "google.protobuf.Option", p.fields = n.proto3.util.newFieldList(()=>[
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
            T: o.Any
        }
    ]);
